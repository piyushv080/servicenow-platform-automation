var IPMAnalysisService = Class.create()
IPMAnalysisService.prototype = {
    initialize: function () {
        this.access = new IPMAccessService()
        this.incidents = new IPMIncidentService()
        this.predictive = new IPMPredictiveService()
    },

    analyzeIncident: function (incidentSysId) {
        if (!this.access.canAnalyze()) return { success: false, message: 'Analysis access denied.' }
        var incident = this.incidents.getIncidentById(incidentSysId)
        if (!incident) return { success: false, message: 'Incident not found or not readable.' }
        var inputName = gs.getProperty('x_412550_ipmp.ipm.skill_input_name', 'incident')
        var payload = {}
        payload[inputName] = {
            tableName: 'incident',
            sysId: incidentSysId,
            queryString: ''
        }

        // Optional String input on the Skill Kit skill. Send only incident
        // examples that the current user can read through GlideRecordSecure.
        var contextInputName = gs.getProperty('x_412550_ipmp.ipm.skill_context_input_name', '')
        if (contextInputName) {
            var predictiveContext = this.predictive.getIncidentContext(incidentSysId)
            payload[contextInputName] = JSON.stringify({
                available: predictiveContext.available,
                message: predictiveContext.message,
                cluster: predictiveContext.cluster,
                examples: predictiveContext.examples
            })
        }
        return this._execute(payload)
    },

    _execute: function (payload) {
        var capabilityId = gs.getProperty('x_412550_ipmp.ipm.skill_capability_id', '')
        var skillConfigId = gs.getProperty('x_412550_ipmp.ipm.skill_config_id', '')
        if (!capabilityId || !skillConfigId)
            return { success: false, message: 'Now Assist is not configured. Add the Skill capability and configuration IDs.' }
        try {
            // The input name and OneExtend response shape are instance-specific.
            var request = {
                executionRequests: [{ payload: payload, capabilityId: capabilityId, meta: { skillConfigId: skillConfigId } }],
                mode: 'sync'
            }
            var execution = sn_one_extend.OneExtendUtil.execute(request)
            var capability = execution && execution.capabilities && execution.capabilities[capabilityId]
            var raw = capability && capability.response
            if (!raw) return { success: false, message: 'The Now Assist Skill returned no response.' }
            var parsed = typeof raw === 'string' ? JSON.parse(raw) : raw
            var model = parsed.model_output || parsed
            if (typeof model === 'string') {
                try { model = JSON.parse(model) } catch (ignore) { model = { executive_summary: model } }
            }
            if (!model || typeof model !== 'object')
                return { success: false, message: 'The Now Assist Skill response did not contain the expected draft fields.' }
            return {
                success: true,
                executive_summary: this._text(model.executive_summary),
                common_symptoms: this._array(model.common_symptoms),
                possible_causes: this._array(model.possible_causes),
                evidence: this._array(model.evidence),
                missing_information: this._array(model.missing_information),
                recommended_actions: this._array(model.recommended_actions),
                suggested_problem_short_description: this._text(model.suggested_problem_short_description),
                suggested_problem_description: this._text(model.suggested_problem_description),
                investigation_recommendation: this._text(model.investigation_recommendation),
                message: 'Analysis completed. Review the findings before requesting Problem approval.'
            }
        } catch (ex) {
            gs.error('[IPMAnalysisService] ' + ex.message)
            return { success: false, message: 'Now Assist analysis failed. Check the Skill setup and system logs.' }
        }
    },

    _text: function (value) {
        return value === null || value === undefined ? '' : String(value).substring(0, 4000)
    },

    _array: function (value) {
        if (!value) return []
        if (Object.prototype.toString.call(value) === '[object Array]') return value
        if (typeof value === 'string') {
            try {
                var parsed = JSON.parse(value)
                return Object.prototype.toString.call(parsed) === '[object Array]' ? parsed : [value]
            } catch (ignore) { return [value] }
        }
        return []
    },

    type: 'IPMAnalysisService'
}
