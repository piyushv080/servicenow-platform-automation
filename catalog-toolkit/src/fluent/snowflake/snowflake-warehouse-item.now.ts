import {
    CatalogItem,
    SingleLineTextVariable,
    SelectBoxVariable,
    MultiLineTextVariable,
} from '@servicenow/sdk/core'

import { requester_information } from '../catalog-variables.now'
import { snowflake_warehouse_fulfillment } from './snowflake-warehouse-fulfillment.now'

// Choice values match the Ansible policy (snowflake-iac/group_vars/all/request_policy.yml).
export const snowflake_warehouse_request = CatalogItem({
    $id: Now.ID['snowflake_warehouse_request'],

    name: 'Snowflake Warehouse Request',
    shortDescription: 'Request a new Snowflake virtual warehouse',
    description:
        'Request a cost-controlled Snowflake virtual warehouse. After approval, AWX provisions it automatically and this request is updated with the result.',

    catalogs: [
        'e0d08b13c3330100c8b837659bba8fb4',
    ],

    categories: [
        '109f0438c6112276003ae8ac13e7009d',
    ],

    active: true,
    state: 'published',

    availability: 'both',
    requestMethod: 'request',

    variableSets: [
        {
            variableSet: requester_information,
            order: 100,
        },
    ],

    variables: {
        warehouse_name: SingleLineTextVariable({
            question: 'Warehouse Name',
            mandatory: true,
            order: 100,
            exampleText: 'WH_REQ_ANALYTICS',
            helpText:
                'Must start with WH_REQ_ followed by 3-30 uppercase letters, digits or underscores.',
        }),

        warehouse_size: SelectBoxVariable({
            question: 'Warehouse Size',
            mandatory: true,
            order: 200,
            choices: {
                XSMALL: { label: 'X-Small (1 credit/hour)', sequence: 1 },
                SMALL: { label: 'Small (2 credits/hour)', sequence: 2 },
            },
        }),

        auto_suspend_seconds: SelectBoxVariable({
            question: 'Auto-Suspend After Inactivity',
            mandatory: true,
            order: 300,
            choices: {
                '60': { label: '1 minute', sequence: 1 },
                '300': { label: '5 minutes', sequence: 2 },
                '600': { label: '10 minutes', sequence: 3 },
            },
        }),

        resource_monitor: SelectBoxVariable({
            question: 'Budget (Resource Monitor)',
            mandatory: true,
            order: 400,
            choices: {
                RM_PLATFORM_DEV: { label: 'RM_PLATFORM_DEV (10 credits)', sequence: 1 },
            },
        }),

        environment: SelectBoxVariable({
            question: 'Environment',
            mandatory: true,
            order: 500,
            choices: {
                dev: { label: 'Development', sequence: 1 },
            },
        }),

        business_justification: MultiLineTextVariable({
            question: 'Business Justification',
            mandatory: true,
            order: 600,
        }),
    },

    flow: snowflake_warehouse_fulfillment,
    fulfillmentAutomationLevel: 'fullyAutomated',

    meta: [
        'Snowflake',
        'Data Platform',
        'Automation',
        'AWX',
    ],
})
