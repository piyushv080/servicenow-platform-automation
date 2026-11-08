import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['IPMProblemService'],
    name: 'IPMProblemService',
    apiName: 'x_412550_ipmp.IPMProblemService',
    active: true,
    clientCallable: false,
    script: Now.include('../../../server/script-includes/IPMProblemService.js'),
})
