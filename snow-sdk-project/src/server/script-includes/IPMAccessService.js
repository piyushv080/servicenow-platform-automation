var IPMAccessService = Class.create()
IPMAccessService.prototype = {
    initialize: function () {},

    _hasRole: function () {
        var role = gs.getProperty('x_412550_ipmp.ipm.problem_manager_role', 'problem_manager')
        return gs.hasRole('admin') ||
            gs.hasRole('x_412550_ipmp.problem_manager') ||
            gs.hasRole('problem_manager') ||
            gs.hasRole(role)
    },

    canUseDashboard: function () {
        var incidents = new GlideRecordSecure('incident')
        return this._hasRole() && incidents.canRead()
    },

    canAnalyze: function () {
        return this.canUseDashboard()
    },

    canRequestApproval: function () {
        return this._hasRole()
    },

    canApprove: function () {
        return this._hasRole()
    },

    canCreateProblem: function () {
        if (!this._hasRole()) return false
        var problem = new GlideRecordSecure('problem')
        return problem.canCreate()
    },

    type: 'IPMAccessService'
}
