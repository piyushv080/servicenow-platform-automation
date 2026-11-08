import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['IPMAccessService'],
    name: 'IPMAccessService',
    apiName: 'x_412550_ipmp.IPMAccessService',
    active: true,
    clientCallable: false,
    script: Now.include('../../../server/script-includes/IPMAccessService.js'),
})
