var IPMDashboardService = Class.create()
IPMDashboardService.prototype = {
    initialize: function () {
        this.access = new IPMAccessService()
        this.incidents = new IPMIncidentService()
        this.predictive = new IPMPredictiveService()
        this.problems = new IPMProblemService()
    },

    getDashboardData: function (options) {
        options = options || {}
        var output = {
            success: false,
            message: '',
            generatedAt: new GlideDateTime().getDisplayValue(),
            kpis: { incidents: 0, recurringPatterns: 0, highPriorityIncidents: 0, problems: 0 },
            incidents: { records: [], totalCount: 0 },
            patterns: [],
            predictive: { requested: false, available: false, clusters: [], message: '' },
            pendingApprovals: [],
            errors: []
        }
        if (!this.access.canUseDashboard()) {
            output.message = 'Dashboard access denied. Check the Problem Manager role and Incident read ACL.'
            return output
        }
        var normalized = this._options(options)
        try {
            var incidentResult = this.incidents.getDashboardIncidents(normalized)
            if (!incidentResult.success) output.errors.push(incidentResult.message || 'Incident data unavailable.')
            else {
                output.incidents.records = incidentResult.records
                output.incidents.totalCount = incidentResult.totalCount
                output.kpis.incidents = incidentResult.totalCount
                output.patterns = this._patterns(incidentResult.records)
                output.kpis.recurringPatterns = output.patterns.length
                for (var i = 0; i < incidentResult.records.length; i++) {
                    var priority = incidentResult.records[i].priority
                    if (priority === '1' || priority === '2') output.kpis.highPriorityIncidents++
                }
            }
            var problemCount = new GlideRecordSecure('problem')
            if (problemCount.canRead()) {
                problemCount.query()
                output.kpis.problems = problemCount.getRowCount()
            }
            output.pendingApprovals = this.problems.getPendingApprovals()
            var requestPI = options.includePredictive === true || options.includePredictive === 'true'
            output.predictive.requested = requestPI
            if (requestPI) {
                var piResult = this.predictive.getClusters(normalized.limit)
                output.predictive.available = piResult.success
                output.predictive.clusters = piResult.clusters || []
                output.predictive.message = piResult.message || ''
            }
            output.success = true
            output.message = output.errors.length ? 'Dashboard loaded with some unavailable data.' : 'Dashboard loaded.'
            return output
        } catch (ex) {
            gs.error('[IPMDashboardService] ' + ex.message)
            output.message = 'Unable to load dashboard data.'
            return output
        }
    },

    _patterns: function (records) {
        var groups = {}
        for (var i = 0; i < records.length; i++) {
            var incident = records[i]
            var description = String(incident.short_description || '').replace(/\s+/g, ' ').trim()
            if (!description) continue
            var key = description.toLowerCase() + '|' + incident.cmdb_ci_sys_id
            if (!groups[key]) groups[key] = {
                short_description: description,
                cmdb_ci: incident.cmdb_ci,
                cmdb_ci_sys_id: incident.cmdb_ci_sys_id,
                count: 0,
                incident_ids: []
            }
            groups[key].count++
            if (groups[key].incident_ids.length < 20) groups[key].incident_ids.push(incident.sys_id)
        }
        var patterns = []
        for (var groupKey in groups) {
            if (Object.prototype.hasOwnProperty.call(groups, groupKey) && groups[groupKey].count >= 3)
                patterns.push(groups[groupKey])
        }
        patterns.sort(function (a, b) { return b.count - a.count })
        return patterns.slice(0, 20)
    },

    _options: function (options) {
        var limit = parseInt(options.limit, 10)
        var offset = parseInt(options.offset, 10)
        if (isNaN(limit) || limit < 1) limit = 20
        if (isNaN(offset) || offset < 0) offset = 0
        return {
            limit: Math.min(limit, 100),
            offset: Math.min(offset, 1000000),
            priority: ['1', '2', '3', '4', '5'].indexOf(String(options.priority || '')) !== -1 ? String(options.priority) : '',
            state: ['1', '2', '3', '4', '5', '6', '7', '8'].indexOf(String(options.state || '')) !== -1 ? String(options.state) : '',
            cmdbCi: /^[0-9a-f]{32}$/i.test(String(options.cmdbCi || '')) ? String(options.cmdbCi) : '',
            startDate: /^\d{4}-\d{2}-\d{2}$/.test(String(options.startDate || '')) ? String(options.startDate) : '',
            endDate: /^\d{4}-\d{2}-\d{2}$/.test(String(options.endDate || '')) ? String(options.endDate) : ''
        }
    },

    type: 'IPMDashboardService'
}
