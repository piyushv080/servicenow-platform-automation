import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['IPMAnalysisService'],
    name: 'IPMAnalysisService',
    apiName: 'x_412550_ipmp.IPMAnalysisService',
    active: true,
    clientCallable: false,
    script: Now.include('../../../server/script-includes/IPMAnalysisService.js'),
})
