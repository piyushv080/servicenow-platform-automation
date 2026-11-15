import {
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

import {
    Action,
    wfa,
    actionStep,
} from '@servicenow/sdk/automation'

export const assign_catalog_task = Action(
    {
        $id: Now.ID['assign_catalog_task'],
        name: 'Assign Catalog Task',
        description:
            'Assigns a catalog task to the configured fulfillment group and optional technician.',
        category: 'provisioning',
        access: 'public',

        inputs: {
            taskId: StringColumn({
                label: 'Catalog Task Sys ID',
                mandatory: true,
            }),
            fulfillmentGroup: StringColumn({
                label: 'Fulfillment Group Sys ID',
                mandatory: true,
            }),
            assignedTechnician: StringColumn({
                label: 'Assigned Technician Sys ID',
            }),
        },

        outputs: {
            assigned: BooleanColumn({
                label: 'Assignment Successful',
            }),
            message: StringColumn({
                label: 'Assignment Result',
            }),
        },
    },

    (params) => {
        const result = wfa.actionStep(
            actionStep.script,
            {
                $id: Now.ID['assign_catalog_task_script'],
                label: 'Assign Fulfillment Group and Technician',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../../server/scripts/assign-catalog-task.js'
                ),
                inputVariables: {
                    task_id: {
                        label: 'Catalog Task Sys ID',
                        value: wfa.dataPill(params.inputs.taskId, 'string'),
                    },
                    fulfillment_group: {
                        label: 'Fulfillment Group Sys ID',
                        value: wfa.dataPill(
                            params.inputs.fulfillmentGroup,
                            'string',
                        ),
                    },
                    assigned_technician: {
                        label: 'Assigned Technician Sys ID',
                        value: wfa.dataPill(
                            params.inputs.assignedTechnician,
                            'string',
                        ),
                    },
                },
                outputVariables: {
                    assigned: BooleanColumn({
                        label: 'Assignment Successful',
                    }),
                    message: StringColumn({
                        label: 'Assignment Result',
                    }),
                },
            },
        )

        wfa.assignActionOutputs(params.outputs, {
            assigned: wfa.dataPill(result.assigned, 'boolean'),
            message: wfa.dataPill(result.message, 'string'),
        })
    },
)
