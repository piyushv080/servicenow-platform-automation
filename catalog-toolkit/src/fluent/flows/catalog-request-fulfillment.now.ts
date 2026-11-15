import {
    Flow,
    wfa,
    trigger,
    action,
} from '@servicenow/sdk/automation'

import { read_catalog_request } from '../actions/read-catalog-request.now'
import { catalog_request_validation } from './catalog-request-validation.now'
import { catalog_request_logging } from '../actions/catalog-request-logging.now'

const CATALOG_APPROVER_GROUP = '4e8e3bfd2fec93107e554b707fa4e307'

export const catalog_request_fulfillment = Flow(
    {
        $id: Now.ID['catalog_request_fulfillment'],
        name: 'Generic IT Request - Fulfillment',
        runAs: 'system',
    },

    wfa.trigger(
        trigger.application.serviceCatalog,
        {
            $id: Now.ID['generic_request_catalog_trigger'],
        },
        {
            run_flow_in: 'background',
        },
    ),

    (params) => {
        const request = wfa.action(
            read_catalog_request,
            {
                $id: Now.ID['read_request_variables'],
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
                $id: Now.ID['request_found'],
                condition: `${wfa.dataPill(request.found, 'boolean')}=true`,
            },
            () => {
                const validation = wfa.subflow(
                    catalog_request_validation,
                    {
                        $id: Now.ID['validate_catalog_request'],
                    },
                    {
                        requestType: wfa.dataPill(request.requestType, 'string'),
                        environment: wfa.dataPill(request.environment, 'string'),
                        businessJustification: wfa.dataPill(
                            request.businessJustification,
                            'string',
                        ),
                        waitForCompletion: true,
                    },
                )

                wfa.flowLogic.if(
                    {
                        $id: Now.ID['request_is_valid'],
                        condition: `${wfa.dataPill(validation.isValid, 'boolean')}=true`,
                    },
                    () => {
                        const approval = wfa.action(
                            action.core.askForApproval,
                            {
                                $id: Now.ID['catalog_request_approval'],
                            },
                            {
                                record: wfa.dataPill(
                                    params.trigger.request_item,
                                    'reference',
                                ),
                                table: 'sc_req_item',
                                approval_reason:
                                    'Approval required for Generic IT Service Request',
                                approval_conditions: wfa.approvalRules({
                                    conditionType: "OR",
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
                                $id: Now.ID['catalog_request_approved'],
                                condition: `${wfa.dataPill(approval.approval_state, 'choice')}=approved`,
                            },
                            () => {
                                wfa.action(
                                    action.core.createCatalogTask,
                                    {
                                        $id: Now.ID['create_fulfillment_task'],
                                    },
                                    {
                                        ah_requested_item: wfa.dataPill(
                                            params.trigger.request_item,
                                            'reference',
                                        ),
                                        ah_short_description:
                                            'Fulfill Generic IT Service Request',
                                        ah_wait: false,
                                    },
                                )

                                wfa.action(
                                    catalog_request_logging,
                                    {
                                        $id: Now.ID['log_request_success'],
                                    },
                                    {
                                        requestNumber: 'Generic IT Request',
                                        logMessage:
                                            'Request approved and fulfillment task created.',
                                    },
                                )
                            },
                        )

                        wfa.flowLogic.else(
                            {
                                $id: Now.ID['catalog_request_not_approved'],
                            },
                            () => {
                                wfa.action(
                                    catalog_request_logging,
                                    {
                                        $id: Now.ID['log_approval_rejection'],
                                    },
                                    {
                                        requestNumber: 'Generic IT Request',
                                        logMessage:
                                            'Request was not approved. Fulfillment task was not created.',
                                    },
                                )
                            },
                        )
                    },
                )

                wfa.flowLogic.else(
                    {
                        $id: Now.ID['request_validation_failed'],
                    },
                    () => {
                        wfa.action(
                            catalog_request_logging,
                            {
                                $id: Now.ID['log_validation_failure'],
                            },
                            {
                                requestNumber: 'Generic IT Request',
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

        wfa.flowLogic.else(
            {
                $id: Now.ID['request_not_found'],
            },
            () => {
                wfa.action(
                    catalog_request_logging,
                    {
                        $id: Now.ID['log_request_not_found'],
                    },
                    {
                        requestNumber: 'Generic IT Request',
                        logMessage:
                            'Unable to read submitted catalog request variables.',
                    },
                )
            },
        )
    },
)
