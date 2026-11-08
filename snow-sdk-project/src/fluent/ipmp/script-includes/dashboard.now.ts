import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['IPMDashboardService'],
    name: 'IPMDashboardService',
    apiName: 'x_412550_ipmp.IPMDashboardService',
    active: true,
    clientCallable: false,
    script: Now.include('../../../server/script-includes/IPMDashboardService.js'),
})
