import {
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

import {
    Action,
    wfa,
    actionStep,
} from '@servicenow/sdk/automation'

export const launch_awx_job = Action(
    {
        $id: Now.ID['launch_awx_job'],
        name: 'Launch AWX Snowflake Job',
        description:
            'Launches the AWX job template for a Snowflake catalog task through the configured MID Server. AWX updates the task when the job finishes.',
        category: 'provisioning',
        access: 'public',

        inputs: {
            requestItemId: StringColumn({
                label: 'Requested Item Sys ID',
                mandatory: true,
            }),
            taskId: StringColumn({
                label: 'Catalog Task Sys ID',
                mandatory: true,
            }),
        },

        outputs: {
            launched: BooleanColumn({
                label: 'Job Launched',
            }),
            jobId: StringColumn({
                label: 'AWX Job ID',
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
                $id: Now.ID['launch_awx_job_script'],
                label: 'Launch AWX Job Template',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../../../server/scripts/snowflake/launch-awx-job.js'
                ),
                inputVariables: {
                    request_item_id: {
                        label: 'Requested Item Sys ID',
                        value: wfa.dataPill(
                            params.inputs.requestItemId,
                            'string',
                        ),
                    },
                    task_id: {
                        label: 'Catalog Task Sys ID',
                        value: wfa.dataPill(
                            params.inputs.taskId,
                            'string',
                        ),
                    },
                },
                outputVariables: {
                    launched: BooleanColumn({
                        label: 'Job Launched',
                    }),
                    job_id: StringColumn({
                        label: 'AWX Job ID',
                    }),
                    message: StringColumn({
                        label: 'Result Message',
                    }),
                },
            },
        )

        wfa.assignActionOutputs(params.outputs, {
            launched: wfa.dataPill(result.launched, 'boolean'),
            jobId: wfa.dataPill(result.job_id, 'string'),
            message: wfa.dataPill(result.message, 'string'),
        })
    },
)
