import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['IPMIncidentService'],
    name: 'IPMIncidentService',
    apiName: 'x_412550_ipmp.IPMIncidentService',
    active: true,
    clientCallable: false,
    script: Now.include('../../../server/script-includes/IPMIncidentService.js'),
})
