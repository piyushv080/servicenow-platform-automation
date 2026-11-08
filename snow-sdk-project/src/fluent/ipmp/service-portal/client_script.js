api.controller = function () {
    var c = this
    c.loading = false
    c.analyzing = false
    c.savingApproval = false
    c.selectedIncident = null
    c.analysis = null
    c.notice = ''
    c.noticeType = 'info'
    c.filters = { priority: '', state: '', search: '' }
    c.options = { limit: 20, offset: 0 }
    c.draft = { short_description: '', description: '', impact: '2', urgency: '2' }

    c.visibleIncidents = function () {
        var dashboard = c.data.dashboard || {}
        var rows = dashboard.incidents && dashboard.incidents.records || []
        var query = String(c.filters.search || '').toLowerCase().trim()
        if (!query) return rows
        return rows.filter(function (row) {
            return String(row.short_description || '').toLowerCase().indexOf(query) !== -1 ||
                String(row.number || '').toLowerCase().indexOf(query) !== -1 ||
                String(row.cmdb_ci || '').toLowerCase().indexOf(query) !== -1
        })
    }

    c.load = function (includePredictive) {
        c.loading = true
        return c.server.get({
            action: 'load_dashboard',
            options: {
                limit: c.options.limit,
                offset: c.options.offset,
                priority: c.filters.priority,
                state: c.filters.state,
                includePredictive: !!includePredictive
            }
        }).then(function (response) {
            c.data.dashboard = response.data.dashboard
            c.loading = false
        }, function () {
            c.loading = false
            c.setNotice('Dashboard data could not be loaded.', 'error')
        })
    }

    c.refresh = function () { c.options.offset = 0; return c.load(false) }

    c.selectIncident = function (incident) {
        c.selectedIncident = incident
        c.analysis = null
        c.draft = {
            short_description: incident.short_description || '',
            description: '', impact: '2', urgency: '2',
            cmdb_ci: incident.cmdb_ci_sys_id || ''
        }
    }

    c.analyze = function () {
        if (!c.selectedIncident) return c.setNotice('Select an Incident first.', 'error')
        c.analyzing = true
        c.analysis = null
        return c.server.get({ action: 'analyze_incident', incidentSysId: c.selectedIncident.sys_id })
            .then(function (response) {
                c.analysis = response.data.analysis
                if (c.analysis && c.analysis.success) {
                    c.draft.short_description = c.analysis.suggested_problem_short_description || c.draft.short_description
                    c.draft.description = c.analysis.suggested_problem_description || c.analysis.executive_summary || ''
                    c.setNotice('Analysis is ready. Review and edit the draft before requesting approval.', 'success')
                } else c.setNotice(c.analysis && c.analysis.message || 'Analysis failed.', 'error')
                c.analyzing = false
            }, function () {
                c.analyzing = false
                c.setNotice('Analysis service is unavailable.', 'error')
            })
    }

    c.requestApproval = function () {
        if (!c.selectedIncident) return c.setNotice('Select an Incident first.', 'error')
        if (!c.draft.short_description || !c.draft.description)
            return c.setNotice('Add a Problem short description and description.', 'error')
        c.savingApproval = true
        return c.server.get({
            action: 'request_approval',
            draft: c.draft,
            incidentSysIds: [c.selectedIncident.sys_id]
        }).then(function (response) {
            var result = response.data.result
            c.savingApproval = false
            c.setNotice(result && result.message || 'Approval request failed.', result && result.success ? 'success' : 'error')
            if (result && result.success) c.load(false)
        }, function () {
            c.savingApproval = false
            c.setNotice('Could not save the approval request.', 'error')
        })
    }

    c.approve = function (row) {
        c.reviewAction('approve_request', row, 'Approval saved.')
    }

    c.createProblem = function (row) {
        c.reviewAction('create_problem', row, 'Problem created.')
    }

    c.reviewAction = function (action, row, fallback) {
        c.savingApproval = true
        return c.server.get({ action: action, approvalSysId: row.sys_id }).then(function (response) {
            var result = response.data.result
            c.savingApproval = false
            c.setNotice(result && result.message || fallback, result && result.success ? 'success' : 'error')
            c.load(false)
        }, function () {
            c.savingApproval = false
            c.setNotice('The approval action failed.', 'error')
        })
    }

    c.nextPage = function () {
        var dashboard = c.data.dashboard || {}
        var total = dashboard.incidents && dashboard.incidents.totalCount || 0
        if (c.options.offset + c.options.limit < total) {
            c.options.offset += c.options.limit
            c.load(false)
        }
    }

    c.previousPage = function () {
        c.options.offset = Math.max(0, c.options.offset - c.options.limit)
        c.load(false)
    }

    c.loadPredictive = function () { c.load(true) }

    c.setNotice = function (message, type) {
        c.notice = message
        c.noticeType = type || 'info'
    }

    if (!c.data.dashboard) c.load(false)
}
