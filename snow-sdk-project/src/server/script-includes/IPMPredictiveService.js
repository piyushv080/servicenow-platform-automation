var IPMPredictiveService = Class.create()
IPMPredictiveService.prototype = {
    initialize: function () {
        this.incidents = new IPMIncidentService()
    },

    getClusters: function (limit) {
        var result = { success: false, clusters: [], message: '' }
        try {
            var setup = this._getSolution()
            if (!setup.success) {
                result.message = setup.message
                return result
            }

            // getClusterInfo returns summaries; top_n is not a supported option.
            var summaries = this._toArray(setup.solution.getClusterInfo({}))
            var maxClusters = this._limit(limit)
            var clusters = []
            for (var i = 0; i < summaries.length && clusters.length < maxClusters; i++) {
                var summary = summaries[i] || {}
                var clusterId = String(summary.cluster_id || '')
                if (!clusterId) continue

                var options = { cluster_id: clusterId, top_n_per_cluster: 5 }
                if (summary.group_by) options.group_by = String(summary.group_by)
                var assignments = this._toArray(setup.solution.getClusterAssignments(options))
                var examples = this._getReadableExamples(assignments)

                clusters.push({
                    cluster_id: clusterId,
                    cluster_quality: String(summary.cluster_quality || ''),
                    cluster_size: String(summary.cluster_size || assignments.length || 0),
                    group_by: String(summary.group_by || ''),
                    cluster_concept: String(summary.cluster_concept || ''),
                    examples: examples
                })
            }
            result.clusters = clusters
            result.success = true
            result.message = clusters.length ? '' : 'The Predictive Intelligence solution has no trained clusters to show.'
            return result
        } catch (ex) {
            gs.error('[IPMPredictiveService] Cluster lookup failed: ' + ex.message)
            result.message = 'Predictive Intelligence could not return clusters. Check that the solution is active, trained, and configured for clustering.'
            return result
        }
    },

    getIncidentContext: function (incidentSysId) {
        var result = { available: false, message: '', cluster: null, examples: [] }
        if (!/^[0-9a-f]{32}$/i.test(String(incidentSysId || ''))) {
            result.message = 'Invalid Incident id.'
            return result
        }
        try {
            var setup = this._getSolution()
            if (!setup.success) {
                result.message = setup.message
                return result
            }

            var incident = new GlideRecordSecure('incident')
            if (!incident.get(incidentSysId) || !incident.canRead()) {
                result.message = 'Incident not found or not readable.'
                return result
            }

            var clusterId = String(setup.solution.getClusterForRecord(incident) || '')
            if (!clusterId) {
                result.message = 'This Incident is not assigned to a trained Predictive Intelligence cluster.'
                return result
            }

            var infoOptions = { cluster_id: clusterId }
            var assignmentsOptions = { cluster_id: clusterId, top_n_per_cluster: 10 }
            var summaries = this._toArray(setup.solution.getClusterInfo(infoOptions))
            var assignments = this._toArray(setup.solution.getClusterAssignments(assignmentsOptions))
            result.cluster = summaries.length ? summaries[0] : { cluster_id: clusterId }
            result.examples = this._getReadableExamples(assignments, incidentSysId)
            result.available = true
            return result
        } catch (ex) {
            gs.error('[IPMPredictiveService] Incident cluster lookup failed: ' + ex.message)
            result.message = 'Predictive Intelligence could not find the Incident cluster. Check the solution and logs.'
            return result
        }
    },

    _getSolution: function () {
        var solutionName = gs.getProperty('x_412550_ipmp.ipm.cluster_solution', '')
        if (!solutionName) return { success: false, message: 'Predictive Intelligence is not configured. Set the cluster solution property.' }
        if (typeof sn_ml === 'undefined' || !sn_ml.MLSolutionFactory)
            return { success: false, message: 'Predictive Intelligence is unavailable. Confirm the platform_ml plugin is active.' }

        var solution = sn_ml.MLSolutionFactory.getSolution(solutionName)
        if (!solution || !solution.isActive())
            return { success: false, message: 'The configured Predictive Intelligence solution is not active.' }
        if (String(solution.getCapability()).toLowerCase() !== 'clustering')
            return { success: false, message: 'The configured Predictive Intelligence solution must use the Clustering capability.' }
        return { success: true, solution: solution }
    },

    _getReadableExamples: function (assignments, excludeSysId) {
        var examples = []
        var seen = {}
        for (var i = 0; i < assignments.length && examples.length < 10; i++) {
            var sysId = String(assignments[i].rec_sys_id || '')
            if (!sysId || sysId === excludeSysId || seen[sysId]) continue
            seen[sysId] = true
            var incident = this.incidents.getIncidentById(sysId)
            if (incident) examples.push(incident)
        }
        return examples
    },

    _toArray: function (value) {
        if (!value) return []
        if (Object.prototype.toString.call(value) === '[object Array]') return value
        if (typeof value === 'string') {
            try { value = JSON.parse(value) } catch (ignore) { return [] }
        }
        if (Object.prototype.toString.call(value) === '[object Array]') return value
        if (value.clusters) return value.clusters
        if (value.records) return value.records
        if (value.cluster_id || value.rec_sys_id) return [value]
        return []
    },

    _limit: function (value) {
        var parsed = parseInt(value, 10)
        if (isNaN(parsed) || parsed < 1) parsed = 20
        return Math.min(parsed, 20)
    },

    type: 'IPMPredictiveService'
}
