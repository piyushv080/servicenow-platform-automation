import {
    StringColumn,
    BooleanColumn,
} from '@servicenow/sdk/core'

import {
    Action,
    wfa,
    actionStep,
} from '@servicenow/sdk/automation'

export const sync_catalog_request_lifecycle = Action(
    {
        $id: Now.ID['sync_catalog_request_lifecycle'],
        name: 'Synchronize Catalog Request Lifecycle',
        description:
            'Synchronizes RITM approval, state and stage with fulfillment task progress.',
        category: 'provisioning',
        access: 'public',

        inputs: {
            requestItemId: StringColumn({
                label: 'Requested Item Sys ID',
                mandatory: true,
            }),
            operation: StringColumn({
                label: 'Lifecycle Operation',
                mandatory: true,
            }),
        },

        outputs: {
            updated: BooleanColumn({
                label: 'RITM Updated',
            }),
            requestNumber: StringColumn({
                label: 'Requested Item Number',
            }),
            state: StringColumn({
                label: 'RITM State',
            }),
            approval: StringColumn({
                label: 'Approval State',
            }),
            stage: StringColumn({
                label: 'RITM Stage',
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
                $id: Now.ID['sync_catalog_request_lifecycle_script'],
                label: 'Synchronize Catalog Request Lifecycle',
            },
            {
                required_run_time: 'instance',
                script: Now.include(
                    '../../server/scripts/sync-catalog-request-lifecycle.js'
                ),
                inputVariables: {
                    request_item_id: {
                        label: 'Requested Item Sys ID',
                        value: wfa.dataPill(
                            params.inputs.requestItemId,
                            'string',
                        ),
                    },
                    operation: {
                        label: 'Lifecycle Operation',
                        value: wfa.dataPill(
                            params.inputs.operation,
                            'string',
                        ),
                    },
                },
                outputVariables: {
                    updated: BooleanColumn({
                        label: 'RITM Updated',
                    }),
                    request_number: StringColumn({
                        label: 'Requested Item Number',
                    }),
                    state: StringColumn({
                        label: 'RITM State',
                    }),
                    approval: StringColumn({
                        label: 'Approval State',
                    }),
                    stage: StringColumn({
                        label: 'RITM Stage',
                    }),
                    message: StringColumn({
                        label: 'Result Message',
                    }),
                },
            },
        )

        wfa.assignActionOutputs(params.outputs, {
            updated: wfa.dataPill(result.updated, 'boolean'),
            requestNumber: wfa.dataPill(result.request_number, 'string'),
            state: wfa.dataPill(result.state, 'string'),
            approval: wfa.dataPill(result.approval, 'string'),
            stage: wfa.dataPill(result.stage, 'string'),
            message: wfa.dataPill(result.message, 'string'),
        })
    },
)
