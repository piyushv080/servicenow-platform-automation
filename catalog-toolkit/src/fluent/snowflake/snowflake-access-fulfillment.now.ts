import {
    Flow,
    wfa,
    trigger,
    action,
} from '@servicenow/sdk/automation'

import { validate_snowflake_request } from './actions/validate-snowflake-request.now'
import { launch_awx_job } from './actions/launch-awx-job.now'
import { create_and_assign_catalog_task } from '../actions/create-and-assign-catalog-task.now'
import { catalog_request_logging } from '../actions/catalog-request-logging.now'
import { sync_catalog_request_lifecycle } from '../actions/sync-catalog-request-lifecycle.now'

// Same "Catalog Toolkit Approvers" group as the Generic IT Service Request flow.
const CATALOG_APPROVER_GROUP = '4e8e3bfd2fec93107e554b707fa4e307'

/**
 * Snowflake Access Request lifecycle (same lifecycle as the warehouse request)
 *
 *   submitted -> validate (policy) -> approval
 *     approved -> RITM approved/fulfillment -> SCTASK -> AWX job via MID Server
 *                 AWX: SCTASK Work in Progress -> Closed Complete / Incomplete
 *                 business rule: SCTASK state -> RITM state/stage
 *     rejected -> RITM closed incomplete, no task, no automation
 *   invalid    -> work note on the RITM, no approval, no automation
 */
export const snowflake_access_fulfillment = Flow(
    {
        $id: Now.ID['access_snowflake_fulfillment'],
        name: 'Snowflake Access Request - Fulfillment',
        runAs: 'system',
    },

    wfa.trigger(
        trigger.application.serviceCatalog,
        {
            $id: Now.ID['access_snowflake_catalog_trigger'],
        },
        {
            run_flow_in: 'background',
        },
    ),

    (params) => {
        const validation = wfa.action(
            validate_snowflake_request,
            {
                $id: Now.ID['access_validate_snowflake_request'],
            },
            {
                requestItemId: wfa.dataPill(
                    params.trigger.request_item,
                    'reference',
                ),
            },
        )

        wfa.flowLogic.if(
            {
                $id: Now.ID['access_snowflake_request_is_valid'],
                condition: `${wfa.dataPill(validation.valid, 'boolean')}=true`,
            },
            () => {
                const approval = wfa.action(
                    action.core.askForApproval,
                    {
                        $id: Now.ID['access_snowflake_request_approval'],
                    },
                    {
                        record: wfa.dataPill(
                            params.trigger.request_item,
                            'reference',
                        ),
                        table: 'sc_req_item',
                        approval_reason:
                            'Approval required for Snowflake Access Request',
                        approval_conditions: wfa.approvalRules({
                            conditionType: 'OR',
                            ruleSets: [
                                {
                                    action: 'ApprovesRejects',
                                    conditionType: 'AND',
                                    rules: [
                                        [
                                            {
                                                ruleType: 'Any',
                                                users: [],
                                                groups: [
                                                    CATALOG_APPROVER_GROUP,
                                                ],
                                                manual: false,
                                            },
                                        ],
                                    ],
                                },
                            ],
                        }),
                    },
                )

                wfa.flowLogic.if(
                    {
                        $id: Now.ID['access_snowflake_request_approved'],
                        condition: `${wfa.dataPill(approval.approval_state, 'choice')}=approved`,
                    },
                    () => {
                        wfa.action(
                            sync_catalog_request_lifecycle,
                            {
                                $id: Now.ID['access_sync_snowflake_approved_lifecycle'],
                            },
                            {
                                requestItemId: wfa.dataPill(
                                    params.trigger.request_item,
                                    'reference',
                                ),
                                operation: 'approved',
                            },
                        )

                        const fulfillment = wfa.action(
                            create_and_assign_catalog_task,
                            {
                                $id: Now.ID['access_create_snowflake_catalog_task'],
                            },
                            {
                                requestItemId: wfa.dataPill(
                                    params.trigger.request_item,
                                    'reference',
                                ),
                                configurationName:
                                    'Snowflake Platform Fulfillment',
                                taskShortDescription:
                                    'Update Snowflake access (AWX)',
                            },
                        )

                        wfa.flowLogic.if(
                            {
                                $id: Now.ID['access_snowflake_task_created'],
                                condition: `${wfa.dataPill(fulfillment.taskCreated, 'boolean')}=true`,
                            },
                            () => {
                                const launch = wfa.action(
                                    launch_awx_job,
                                    {
                                        $id: Now.ID['access_launch_snowflake_awx_job'],
                                    },
                                    {
                                        requestItemId: wfa.dataPill(
                                            params.trigger.request_item,
                                            'reference',
                                        ),
                                        taskId: wfa.dataPill(
                                            fulfillment.taskId,
                                            'string',
                                        ),
                                    },
                                )

                                wfa.action(
                                    catalog_request_logging,
                                    {
                                        $id: Now.ID['access_log_snowflake_awx_launch'],
                                    },
                                    {
                                        requestNumber: wfa.dataPill(
                                            fulfillment.taskNumber,
                                            'string',
                                        ),
                                        logMessage: wfa.dataPill(
                                            launch.message,
                                            'string',
                                        ),
                                    },
                                )
                            },
                        )

                        wfa.flowLogic.else(
                            {
                                $id: Now.ID['access_snowflake_task_not_created'],
                            },
                            () => {
                                wfa.action(
                                    catalog_request_logging,
                                    {
                                        $id: Now.ID['access_log_snowflake_task_failure'],
                                    },
                                    {
                                        requestNumber: 'Snowflake Access Request',
                                        logMessage: wfa.dataPill(
                                            fulfillment.message,
                                            'string',
                                        ),
                                    },
                                )
                            },
                        )
                    },
                )

                wfa.flowLogic.else(
                    {
                        $id: Now.ID['access_snowflake_request_not_approved'],
                    },
                    () => {
                        wfa.action(
                            sync_catalog_request_lifecycle,
                            {
                                $id: Now.ID['access_sync_snowflake_rejected_lifecycle'],
                            },
                            {
                                requestItemId: wfa.dataPill(
                                    params.trigger.request_item,
                                    'reference',
                                ),
                                operation: 'rejected',
                            },
                        )

                        wfa.action(
                            catalog_request_logging,
                            {
                                $id: Now.ID['access_log_snowflake_rejection'],
                            },
                            {
                                requestNumber: 'Snowflake Access Request',
                                logMessage:
                                    'Request was not approved. No catalog task and no automation were created.',
                            },
                        )
                    },
                )
            },
        )

        wfa.flowLogic.else(
            {
                $id: Now.ID['access_snowflake_request_invalid'],
            },
            () => {
                wfa.action(
                    catalog_request_logging,
                    {
                        $id: Now.ID['access_log_snowflake_validation_failure'],
                    },
                    {
                        requestNumber: wfa.dataPill(
                            validation.warehouseName,
                            'string',
                        ),
                        logMessage: wfa.dataPill(
                            validation.message,
                            'string',
                        ),
                    },
                )
            },
        )
    },
)
