import { StringColumn, BooleanColumn } from '@servicenow/sdk/core'
import { Action, wfa, actionStep } from '@servicenow/sdk/automation'

export const catalog_request_logging = Action(
    {
        $id: Now.ID['catalog_request_logging'],
        name: 'Catalog Request Logging',
        description:
            'Writes catalog request processing information to the Flow Designer execution log.',
        category: 'provisioning',
        access: 'public',

        inputs: {
            requestNumber: StringColumn({
                label: 'Request Number',
                mandatory: true,
            }),
            logMessage: StringColumn({
                label: 'Log Message',
                mandatory: true,
            }),
        },

        outputs: {
            logged: BooleanColumn({
                label: 'Log Written',
            }),
        },
    },

    (params) => {
        wfa.actionStep(
            actionStep.log,
            {
                $id: Now.ID['catalog_request_log_step'],
                label: 'Log Catalog Request',
            },
            {
                log_message: `Catalog Request ${wfa.dataPill(params.inputs.requestNumber, 'string')}: ${wfa.dataPill(params.inputs.logMessage, 'string')}`,
                log_level: 'info',
            },
        )

        wfa.assignActionOutputs(params.outputs, {
            logged: true,
        })
    },
)
