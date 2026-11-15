import {
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

import {
    Action,
    wfa,
    actionStep,
} from '@servicenow/sdk/automation'

export const read_catalog_request = Action(
    {
        $id: Now.ID['read_catalog_request'],
        name: 'Read Catalog Request Variables',
        description:
            'Reads submitted variables from a Service Catalog requested item.',
        category: 'provisioning',
        access: 'public',

        inputs: {
            requestItemId: StringColumn({
                label: 'Requested Item Sys ID',
                mandatory: true,
            }),
        },

        outputs: {
            found: BooleanColumn({
                label: 'Requested Item Found',
            }),
            requestType: StringColumn({
                label: 'Request Type',
            }),
            environment: StringColumn({
                label: 'Environment',
            }),
            businessJustification: StringColumn({
                label: 'Business Justification',
            }),
            requiredDate: StringColumn({
                label: 'Required Date',
            }),
            message: StringColumn({
                label: 'Result Message',
            }),
        },
    },

    (params) => {
        const result = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['read_catalog_request_script'],
                label: 'Read Requested Item Variables',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../../server/scripts/read-catalog-request.js'
                ),
                inputVariables: {
                    request_item_id: {
                        label: 'Requested Item Sys ID',
                        value: wfa.dataPill(
                            params.inputs.requestItemId,
                            'string',
                        ),
                    },
                },
                outputVariables: {
                    found: BooleanColumn({
                        label: 'Requested Item Found',
                    }),
                    request_type: StringColumn({
                        label: 'Request Type',
                    }),
                    environment: StringColumn({
                        label: 'Environment',
                    }),
                    business_justification: StringColumn({
                        label: 'Business Justification',
                    }),
                    required_date: StringColumn({
                        label: 'Required Date',
                    }),
                    message: StringColumn({
                        label: 'Result Message',
                    }),
                },
            },
        )

        wfa.assignActionOutputs(params.outputs, {
            found: wfa.dataPill(result.found, 'boolean'),
            requestType: wfa.dataPill(result.request_type, 'string'),
            environment: wfa.dataPill(result.environment, 'string'),
            businessJustification: wfa.dataPill(
                result.business_justification,
                'string',
            ),
            requiredDate: wfa.dataPill(result.required_date, 'string'),
            message: wfa.dataPill(result.message, 'string'),
        })
    },
)
