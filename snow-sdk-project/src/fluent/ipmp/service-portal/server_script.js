(function () {
    data.dashboard = null
    data.analysis = null
    data.result = null
    data.action = ''

    var access = new IPMAccessService()
    var dashboardService = new IPMDashboardService()
    var analysisService = new IPMAnalysisService()
    var problemService = new IPMProblemService()

    if (input && input.action) {
        data.action = String(input.action)
        if (input.action === 'load_dashboard') {
            data.dashboard = dashboardService.getDashboardData(input.options || {})
        } else if (input.action === 'analyze_incident') {
            data.analysis = analysisService.analyzeIncident(input.incidentSysId)
        } else if (input.action === 'request_approval') {
            data.result = problemService.requestApproval({
                draft: input.draft,
                incidentSysIds: input.incidentSysIds
            })
        } else if (input.action === 'approve_request') {
            data.result = problemService.approveRequest(input.approvalSysId)
        } else if (input.action === 'create_problem') {
            // The client sends only the saved approval sys_id. Draft values or
            // an `approved: true` flag from the browser are never trusted.
            data.result = problemService.createFromApproval(input.approvalSysId)
        } else {
            data.result = { success: false, message: 'Unsupported dashboard action.' }
        }
        return
    }

    if (!access.canUseDashboard()) {
        data.dashboard = {
            success: false,
            message: 'Access denied. Contact your ServiceNow administrator if you need Problem Manager access.',
            kpis: {},
            incidents: { records: [], totalCount: 0 },
            patterns: [],
            predictive: { requested: false, available: false, clusters: [], message: '' },
            pendingApprovals: []
        }
        return
    }
    data.dashboard = dashboardService.getDashboardData({ limit: 20, offset: 0 })
})()
