var IPMIncidentService = Class.create()
IPMIncidentService.prototype = {
    initialize: function () {},

    getDashboardIncidents: function (options) {
        options = options || {}
        var result = { success: false, records: [], totalCount: 0, message: '' }
        var limit = this._int(options.limit, 20, 1, 100)
        var offset = this._int(options.offset, 0, 0, 1000000)
        var gr = new GlideRecordSecure('incident')
        if (!gr.canRead()) {
            result.message = 'Incident read access denied.'
            return result
        }
        this._applyFilters(gr, options)
        gr.orderByDesc('sys_created_on')
        gr.chooseWindow(offset, offset + limit)
        gr.query()
        while (gr.next()) result.records.push(this._map(gr))

        // Count through a separate secure query so the dashboard count follows
        // the caller's record ACLs rather than exposing an aggregate total.
        var countGr = new GlideRecordSecure('incident')
        this._applyFilters(countGr, options)
        countGr.query()
        result.totalCount = countGr.getRowCount()
        result.success = true
        return result
    },

    getIncidentById: function (sysId) {
        if (!this._isSysId(sysId)) return null
        var gr = new GlideRecordSecure('incident')
        if (!gr.get(sysId) || !gr.canRead()) return null
        return this._map(gr)
    },

    getPrioritySummary: function (options) {
        options = options || {}
        var totals = {}
        var gr = new GlideRecordSecure('incident')
        if (!gr.canRead()) return []
        this._applyFilters(gr, options)
        gr.setLimit(5000)
        gr.query()
        while (gr.next()) {
            var priority = String(gr.getValue('priority') || '')
            totals[priority] = (totals[priority] || 0) + 1
        }
        var output = []
        for (var key in totals) {
            if (Object.prototype.hasOwnProperty.call(totals, key)) {
                output.push({ priority: key, count: totals[key] })
            }
        }
        return output
    },

    getRelatedIncidents: function (sysId, limit) {
        if (!this._isSysId(sysId)) return []
        var target = this.getIncidentById(sysId)
        if (!target) return []
        var gr = new GlideRecordSecure('incident')
        if (!gr.canRead()) return []
        gr.addQuery('short_description', target.short_description)
        if (target.cmdb_ci_sys_id && gr.isValidField('cmdb_ci')) gr.addQuery('cmdb_ci', target.cmdb_ci_sys_id)
        gr.orderByDesc('sys_created_on')
        gr.setLimit(this._int(limit, 20, 1, 100))
        gr.query()
        var records = []
        while (gr.next()) records.push(this._map(gr))
        return records
    },

    _applyFilters: function (gr, options) {
        if (options.priority && ['1', '2', '3', '4', '5'].indexOf(String(options.priority)) !== -1)
            gr.addQuery('priority', String(options.priority))
        if (options.state && ['1', '2', '3', '4', '5', '6', '7', '8'].indexOf(String(options.state)) !== -1)
            gr.addQuery('state', String(options.state))
        if (options.cmdbCi && this._isSysId(options.cmdbCi) && gr.isValidField('cmdb_ci'))
            gr.addQuery('cmdb_ci', String(options.cmdbCi))
        if (options.startDate && this._isDate(options.startDate))
            gr.addQuery('sys_created_on', '>=', options.startDate + ' 00:00:00')
        if (options.endDate && this._isDate(options.endDate))
            gr.addQuery('sys_created_on', '<=', options.endDate + ' 23:59:59')
    },

    _map: function (gr) {
        return {
            sys_id: String(gr.getUniqueValue()),
            number: String(gr.getValue('number') || ''),
            short_description: String(gr.getValue('short_description') || ''),
            priority: String(gr.getValue('priority') || ''),
            priority_display: String(gr.getDisplayValue('priority') || ''),
            state: String(gr.getValue('state') || ''),
            state_display: String(gr.getDisplayValue('state') || ''),
            cmdb_ci: String(gr.getDisplayValue('cmdb_ci') || ''),
            cmdb_ci_sys_id: String(gr.getValue('cmdb_ci') || ''),
            assignment_group: String(gr.getDisplayValue('assignment_group') || ''),
            created: String(gr.getDisplayValue('sys_created_on') || ''),
            problem_id: String(gr.getValue('problem_id') || '')
        }
    },

    _int: function (value, fallback, minimum, maximum) {
        var parsed = parseInt(value, 10)
        if (isNaN(parsed) || parsed < minimum) return fallback
        return Math.min(parsed, maximum)
    },

    _isSysId: function (value) {
        return /^[0-9a-f]{32}$/i.test(String(value || ''))
    },

    _isDate: function (value) {
        return /^\d{4}-\d{2}-\d{2}$/.test(String(value || ''))
    },

    type: 'IPMIncidentService'
}
