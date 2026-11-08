import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['IPMPredictiveService'],
    name: 'IPMPredictiveService',
    apiName: 'x_412550_ipmp.IPMPredictiveService',
    active: true,
    clientCallable: false,
    script: Now.include('../../../server/script-includes/IPMPredictiveService.js'),
})
