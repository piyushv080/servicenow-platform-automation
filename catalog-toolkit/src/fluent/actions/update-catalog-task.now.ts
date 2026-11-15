import {
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

import {
    Action,
    wfa,
    actionStep,
} from '@servicenow/sdk/automation'

export const update_catalog_task = Action(
    {
        $id: Now.ID['update_catalog_task'],
        name: 'Update Catalog Task',
        description:
            'Updates a catalog task state and records fulfillment work notes.',
        category: 'provisioning',
        access: 'public',

        inputs: {
            taskId: StringColumn({
                label: 'Catalog Task Sys ID',
                mandatory: true,
            }),
            state: StringColumn({
                label: 'New State',
                mandatory: true,
            }),
            workNotes: StringColumn({
                label: 'Work Notes',
            }),
        },

        outputs: {
            updated: BooleanColumn({
                label: 'Task Updated',
            }),
            taskNumber: StringColumn({
                label: 'Catalog Task Number',
            }),
            state: StringColumn({
                label: 'Current State',
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
                $id: Now.ID['update_catalog_task_script'],
                label: 'Update Catalog Task',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../../server/scripts/update-catalog-task.js'
                ),
                inputVariables: {
                    task_id: {
                        label: 'Catalog Task Sys ID',
                        value: wfa.dataPill(
                            params.inputs.taskId,
                            'string',
                        ),
                    },
                    state: {
                        label: 'New State',
                        value: wfa.dataPill(
                            params.inputs.state,
                            'string',
                        ),
                    },
                    work_notes: {
                        label: 'Work Notes',
                        value: wfa.dataPill(
                            params.inputs.workNotes,
                            'string',
                        ),
                    },
                },
                outputVariables: {
                    updated: BooleanColumn({
                        label: 'Task Updated',
                    }),
                    task_number: StringColumn({
                        label: 'Catalog Task Number',
                    }),
                    state: StringColumn({
                        label: 'Current State',
                    }),
                    message: StringColumn({
                        label: 'Result Message',
                    }),
                },
            },
        )

        wfa.assignActionOutputs(params.outputs, {
            updated: wfa.dataPill(result.updated, 'boolean'),
            taskNumber: wfa.dataPill(result.task_number, 'string'),
            state: wfa.dataPill(result.state, 'string'),
            message: wfa.dataPill(result.message, 'string'),
        })
    },
)
