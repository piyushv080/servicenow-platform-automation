import {
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

import {
    Action,
    wfa,
    actionStep,
} from '@servicenow/sdk/automation'

export const validate_snowflake_request = Action(
    {
        $id: Now.ID['validate_snowflake_request'],
        name: 'Validate Snowflake Warehouse Request',
        description:
            'Reads the Snowflake warehouse variables of a requested item, writes the request description and validates it against the self-service policy.',
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
            valid: BooleanColumn({
                label: 'Request Is Valid',
            }),
            warehouseName: StringColumn({
                label: 'Warehouse Name',
            }),
            message: StringColumn({
                label: 'Validation Message',
            }),
        },
    },

    (params) => {
        const result = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['validate_snowflake_request_script'],
                label: 'Validate Snowflake Warehouse Request',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../../../server/scripts/snowflake/validate-snowflake-request.js'
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
                    valid: BooleanColumn({
                        label: 'Request Is Valid',
                    }),
                    warehouse_name: StringColumn({
                        label: 'Warehouse Name',
                    }),
                    message: StringColumn({
                        label: 'Validation Message',
                    }),
                },
            },
        )

        wfa.assignActionOutputs(params.outputs, {
            found: wfa.dataPill(result.found, 'boolean'),
            valid: wfa.dataPill(result.valid, 'boolean'),
            warehouseName: wfa.dataPill(result.warehouse_name, 'string'),
            message: wfa.dataPill(result.message, 'string'),
        })
    },
)
