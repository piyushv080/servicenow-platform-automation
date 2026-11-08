var IPMProblemService = Class.create()
IPMProblemService.prototype = {
    initialize: function () {
        this.access = new IPMAccessService()
        this.incidents = new IPMIncidentService()
    },

    requestApproval: function (input) {
        var result = { success: false, message: '', approvalSysId: '' }
        try {
            if (!this.access.canRequestApproval()) {
                result.message = 'Only an authorized Problem Manager can request approval.'
                return result
            }
            var draft = this._normalizeDraft(input && input.draft)
            var ids = this._normalizeIds(input && input.incidentSysIds)
            if (!draft) {
                result.message = 'Problem short description and description are required.'
                return result
            }
            if (!ids.length) {
                result.message = 'Select at least one Incident.'
                return result
            }
            var incidents = this._loadIncidents(ids)
            if (!incidents.success) {
                result.message = incidents.message
                return result
            }
            var approval = new GlideRecordSecure('x_412550_ipmp_ipm_approval')
            if (!approval.canCreate()) {
                result.message = 'Approval record create access denied.'
                return result
            }
            approval.initialize()
            approval.setValue('state', 'requested')
            approval.setValue('draft_json', JSON.stringify(draft))
            approval.setValue('incident_ids_json', JSON.stringify(ids))
            approval.setValue('requested_by', gs.getUserID())
            var approvalId = approval.insert()
            if (!approvalId) {
                result.message = 'Unable to save the approval request.'
                return result
            }
            result.success = true
            result.approvalSysId = String(approvalId)
            result.message = 'Saved for manager review. A different Problem Manager must approve it.'
            return result
        } catch (ex) {
            gs.error('[IPMProblemService] requestApproval: ' + ex.message)
            result.message = 'Unable to save the approval request.'
            return result
        }
    },

    approveRequest: function (approvalSysId) {
        var result = { success: false, message: '' }
        if (!this.access.canApprove()) {
            result.message = 'Only an authorized Problem Manager can approve this request.'
            return result
        }
        if (!this._isSysId(approvalSysId)) {
            result.message = 'Invalid approval request.'
            return result
        }
        var approval = new GlideRecordSecure('x_412550_ipmp_ipm_approval')
        if (!approval.get(approvalSysId) || !approval.canWrite()) {
            result.message = 'Approval request not found or not writable.'
            return result
        }
        if (approval.getValue('state') !== 'requested') {
            result.message = 'This approval request is no longer awaiting review.'
            return result
        }
        if (approval.getValue('requested_by') === gs.getUserID()) {
            result.message = 'The requester cannot approve their own Problem draft.'
            return result
        }
        approval.setValue('state', 'approved')
        approval.setValue('approved_by', gs.getUserID())
        if (!approval.update()) {
            result.message = 'Approval could not be saved.'
            return result
        }
        result.success = true
        result.message = 'Approval saved. The approved draft can now be turned into a Problem.'
        return result
    },

    createFromApproval: function (approvalSysId) {
        var result = {
            success: false,
            message: '',
            problemSysId: '',
            problemNumber: '',
            linkedIncidentCount: 0,
            unlinkedIncidentCount: 0,
            linkingMode: ''
        }
        try {
            if (!this.access.canCreateProblem()) {
                result.message = 'Not authorized to create Problems.'
                return result
            }
            if (!this._isSysId(approvalSysId)) {
                result.message = 'Invalid approval request.'
                return result
            }
            var approval = new GlideRecordSecure('x_412550_ipmp_ipm_approval')
            if (!approval.get(approvalSysId) || !approval.canWrite()) {
                result.message = 'Approval request not found or not writable.'
                return result
            }
            if (approval.getValue('state') === 'completed' && approval.getValue('problem')) {
                return this._existingProblemResult(approval)
            }
            if (approval.getValue('state') !== 'approved' || !approval.getValue('approved_by')) {
                result.message = 'A persisted manager approval is required before Problem creation.'
                return result
            }
            var rawDraft = approval.getValue('draft_json')
            var rawIds = approval.getValue('incident_ids_json')
            var draft = this._normalizeDraft(JSON.parse(rawDraft || '{}'))
            var ids = this._normalizeIds(JSON.parse(rawIds || '[]'))
            if (!draft || !ids.length) {
                result.message = 'The saved approval request is incomplete.'
                return result
            }
            var incidents = this._loadIncidents(ids)
            if (!incidents.success) {
                result.message = incidents.message
                return result
            }
            var linked = this._findExistingLinks(incidents.records)
            if (linked.length) {
                result.message = 'One or more selected Incidents are already linked to a Problem.'
                result.alreadyLinkedIncidents = linked
                return result
            }

            // Claim before insert to reduce accidental repeat submits. A stuck
            // processing record needs an admin to reconcile before retrying.
            approval.setValue('state', 'processing')
            if (!approval.update()) {
                result.message = 'Unable to claim the approved request for processing.'
                return result
            }
            var problem = new GlideRecordSecure('problem')
            if (!problem.canCreate()) {
                approval.setValue('state', 'approved')
                approval.update()
                result.message = 'Problem create access denied.'
                return result
            }
            problem.initialize()
            problem.setValue('short_description', draft.short_description)
            problem.setValue('description', draft.description)
            this._setChoice(problem, 'impact', draft.impact)
            this._setChoice(problem, 'urgency', draft.urgency)
            if (draft.cmdb_ci && problem.isValidField('cmdb_ci')) problem.setValue('cmdb_ci', draft.cmdb_ci)
            if (problem.isValidField('first_reported_by_task'))
                problem.setValue('first_reported_by_task', incidents.records[0].sys_id)
            var problemId = problem.insert()
            if (!problemId) {
                approval.setValue('state', 'approved')
                approval.update()
                result.message = 'Problem insert failed. Check mandatory fields, ACLs, and Business Rules.'
                return result
            }

            var linkResult = this._linkIncidents(incidents.records, String(problemId))
            var created = new GlideRecordSecure('problem')
            if (created.get(problemId)) result.problemNumber = String(created.getValue('number') || '')
            approval.setValue('problem', String(problemId))
            approval.setValue('state', 'completed')
            approval.update()
            result.success = true
            result.problemSysId = String(problemId)
            result.linkedIncidentCount = linkResult.linked
            result.unlinkedIncidentCount = linkResult.unlinked
            result.linkingMode = linkResult.mode
            result.message = linkResult.unlinked ?
                'Problem created; some Incident relationships need instance-specific follow-up.' :
                'Problem created and related Incidents linked.'
            return result
        } catch (ex) {
            gs.error('[IPMProblemService] createFromApproval: ' + ex.message)
            result.message = 'Problem creation failed. Check the approval state and system logs.'
            return result
        }
    },

    getPendingApprovals: function () {
        if (!this.access.canApprove()) return []
        var gr = new GlideRecordSecure('x_412550_ipmp_ipm_approval')
        if (!gr.canRead()) return []
        gr.addQuery('state', 'IN', 'requested,approved')
        gr.orderByDesc('sys_created_on')
        gr.setLimit(50)
        gr.query()
        var rows = []
        while (gr.next()) rows.push({
            sys_id: String(gr.getUniqueValue()),
            state: String(gr.getValue('state') || ''),
            requested_by: String(gr.getDisplayValue('requested_by') || ''),
            created: String(gr.getDisplayValue('sys_created_on') || ''),
            short_description: this._preview(gr.getValue('draft_json'))
        })
        return rows
    },

    _existingProblemResult: function (approval) {
        var problem = new GlideRecordSecure('problem')
        var id = String(approval.getValue('problem'))
        if (!problem.get(id)) return { success: false, message: 'The Problem was already created but cannot be read.' }
        return {
            success: true,
            message: 'This approval request has already created its Problem.',
            problemSysId: id,
            problemNumber: String(problem.getValue('number') || ''),
            linkedIncidentCount: 0,
            unlinkedIncidentCount: 0,
            linkingMode: 'already_created'
        }
    },

    _loadIncidents: function (ids) {
        var result = { success: false, message: '', records: [] }
        var gr = new GlideRecordSecure('incident')
        if (!gr.canRead()) {
            result.message = 'Incident read access denied.'
            return result
        }
        for (var i = 0; i < ids.length; i++) {
            if (!gr.get(ids[i]) || !gr.canRead()) {
                result.message = 'An Incident is missing or not accessible.'
                return result
            }
            result.records.push({
                sys_id: String(gr.getUniqueValue()),
                number: String(gr.getValue('number') || ''),
                cmdb_ci: String(gr.getValue('cmdb_ci') || '')
            })
        }
        result.success = true
        return result
    },

    _findExistingLinks: function (incidents) {
        var linked = []
        var check = new GlideRecordSecure('incident')
        if (!check.isValidField('problem_id')) return linked
        for (var i = 0; i < incidents.length; i++) {
            var row = new GlideRecordSecure('incident')
            if (row.get(incidents[i].sys_id) && row.canRead() && row.getValue('problem_id'))
                linked.push(incidents[i].number)
        }
        return linked
    },

    _linkIncidents: function (incidents, problemId) {
        var output = { linked: 0, unlinked: incidents.length, mode: 'first_reported_by_task_only' }
        var probe = new GlideRecordSecure('incident')
        if (!probe.isValidField('problem_id')) return output
        output.mode = 'incident_problem_id'
        for (var i = 0; i < incidents.length; i++) {
            var gr = new GlideRecordSecure('incident')
            if (!gr.get(incidents[i].sys_id) || !gr.canWrite()) continue
            var element = gr.getElement('problem_id')
            if (!element || !element.canWrite()) continue
            gr.setValue('problem_id', problemId)
            if (gr.update()) output.linked++
        }
        output.unlinked = incidents.length - output.linked
        return output
    },

    _normalizeDraft: function (draft) {
        draft = draft || {}
        var shortDescription = this._clean(draft.short_description, 160)
        var description = this._clean(draft.description, 4000)
        if (!shortDescription || !description) return null
        return {
            short_description: shortDescription,
            description: description,
            impact: this._choice(draft.impact),
            urgency: this._choice(draft.urgency),
            cmdb_ci: this._isSysId(draft.cmdb_ci) ? String(draft.cmdb_ci) : ''
        }
    },

    _setChoice: function (record, field, value) {
        if (value && record.isValidField(field)) record.setValue(field, value)
    },

    _choice: function (value) {
        return ['1', '2', '3'].indexOf(String(value || '')) !== -1 ? String(value) : ''
    },

    _normalizeIds: function (ids) {
        var output = []
        var seen = {}
        if (!ids || !ids.length || ids.length > 20) return output
        for (var i = 0; i < ids.length; i++) {
            var id = String(ids[i] || '').toLowerCase()
            if (this._isSysId(id) && !seen[id]) {
                seen[id] = true
                output.push(id)
            }
        }
        return output
    },

    _clean: function (value, max) {
        return String(value || '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().substring(0, max)
    },

    _preview: function (raw) {
        try { return JSON.parse(raw || '{}').short_description || 'Problem draft' }
        catch (ignore) { return 'Problem draft' }
    },

    _isSysId: function (value) {
        return /^[0-9a-f]{32}$/i.test(String(value || ''))
    },

    type: 'IPMProblemService'
}
