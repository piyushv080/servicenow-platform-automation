import {
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

import {
    Action,
    wfa,
    actionStep,
} from '@servicenow/sdk/automation'

export const read_fulfillment_config = Action(
    {
        $id: Now.ID['read_fulfillment_config'],
        name: 'Read Fulfillment Configuration',
        description:
            'Retrieves active catalog fulfillment assignment configuration.',
        category: 'provisioning',
        access: 'public',

        inputs: {
            configurationName: StringColumn({
                label: 'Configuration Name',
                mandatory: true,
            }),
        },

        outputs: {
            found: BooleanColumn({
                label: 'Configuration Found',
            }),
            autoAssign: BooleanColumn({
                label: 'Automatic Assignment Enabled',
            }),
            fulfillmentGroup: StringColumn({
                label: 'Fulfillment Group Sys ID',
            }),
            assignedTechnician: StringColumn({
                label: 'Assigned Technician Sys ID',
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
                $id: Now.ID['read_fulfillment_config_script'],
                label: 'Read Active Fulfillment Configuration',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../../server/scripts/read-fulfillment-config.js'
                ),
                inputVariables: {
                    configuration_name: {
                        label: 'Configuration Name',
                        value: wfa.dataPill(
                            params.inputs.configurationName,
                            'string',
                        ),
                    },
                },
                outputVariables: {
                    found: BooleanColumn({
                        label: 'Configuration Found',
                    }),
                    auto_assign: BooleanColumn({
                        label: 'Automatic Assignment Enabled',
                    }),
                    fulfillment_group: StringColumn({
                        label: 'Fulfillment Group Sys ID',
                    }),
                    assigned_technician: StringColumn({
                        label: 'Assigned Technician Sys ID',
                    }),
                    message: StringColumn({
                        label: 'Result Message',
                    }),
                },
            },
        )

        wfa.assignActionOutputs(params.outputs, {
            found: wfa.dataPill(result.found, 'boolean'),
            autoAssign: wfa.dataPill(result.auto_assign, 'boolean'),
            fulfillmentGroup: wfa.dataPill(
                result.fulfillment_group,
                'string',
            ),
            assignedTechnician: wfa.dataPill(
                result.assigned_technician,
                'string',
            ),
            message: wfa.dataPill(result.message, 'string'),
        })
    },
)
