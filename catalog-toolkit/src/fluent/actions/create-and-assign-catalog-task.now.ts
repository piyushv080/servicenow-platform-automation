import {
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

import {
    Action,
    wfa,
    actionStep,
} from '@servicenow/sdk/automation'

export const create_and_assign_catalog_task = Action(
    {
        $id: Now.ID['create_and_assign_catalog_task'],
        name: 'Create and Assign Catalog Task',
        description:
            'Creates a catalog task and assigns it using the active fulfillment configuration.',
        category: 'provisioning',
        access: 'public',

        inputs: {
            requestItemId: StringColumn({
                label: 'Requested Item Sys ID',
                mandatory: true,
            }),
            configurationName: StringColumn({
                label: 'Configuration Name',
                mandatory: true,
            }),
            taskShortDescription: StringColumn({
                label: 'Task Short Description',
                mandatory: false,
            }),
        },

        outputs: {
            taskCreated: BooleanColumn({
                label: 'Task Created',
            }),
            taskId: StringColumn({
                label: 'Catalog Task Sys ID',
            }),
            taskNumber: StringColumn({
                label: 'Catalog Task Number',
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
                $id: Now.ID['create_and_assign_catalog_task_script'],
                label: 'Create and Assign Catalog Task',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../../server/scripts/create-and-assign-catalog-task.js'
                ),
                inputVariables: {
                    request_item_id: {
                        label: 'Requested Item Sys ID',
                        value: wfa.dataPill(
                            params.inputs.requestItemId,
                            'string',
                        ),
                    },
                    configuration_name: {
                        label: 'Configuration Name',
                        value: wfa.dataPill(
                            params.inputs.configurationName,
                            'string',
                        ),
                    },
                    task_short_description: {
                        label: 'Task Short Description',
                        value: wfa.dataPill(
                            params.inputs.taskShortDescription,
                            'string',
                        ),
                    },
                },
                outputVariables: {
                    task_created: BooleanColumn({
                        label: 'Task Created',
                    }),
                    task_id: StringColumn({
                        label: 'Catalog Task Sys ID',
                    }),
                    task_number: StringColumn({
                        label: 'Catalog Task Number',
                    }),
                    message: StringColumn({
                        label: 'Result Message',
                    }),
                },
            },
        )

        wfa.assignActionOutputs(params.outputs, {
            taskCreated: wfa.dataPill(result.task_created, 'boolean'),
            taskId: wfa.dataPill(result.task_id, 'string'),
            taskNumber: wfa.dataPill(result.task_number, 'string'),
            message: wfa.dataPill(result.message, 'string'),
        })
    },
)
