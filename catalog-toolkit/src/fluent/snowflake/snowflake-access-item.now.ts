import {
    CatalogItem,
    SingleLineTextVariable,
    EmailVariable,
    SelectBoxVariable,
    MultiLineTextVariable,
} from '@servicenow/sdk/core'

import { requester_information } from '../catalog-variables.now'
import { snowflake_access_fulfillment } from './snowflake-access-fulfillment.now'

// Choice values match the Ansible policy (snowflake-iac/group_vars/all/request_policy.yml).
export const snowflake_access_request = CatalogItem({
    $id: Now.ID['snowflake_access_request'],

    name: 'Snowflake Access Request',
    shortDescription: 'Request or remove a Snowflake role for a person',
    description:
        'Grant or remove a standard Snowflake role. After approval, AWX applies the change automatically and this request is updated with the result. Admin roles cannot be requested.',

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
            order: 50,
        },
    ],

    variables: {
        access_action: SelectBoxVariable({
            question: 'Action',
            mandatory: true,
            order: 100,
            choices: {
                grant: { label: 'Grant access', sequence: 1 },
                revoke: { label: 'Remove access', sequence: 2 },
            },
        }),

        snowflake_username: SingleLineTextVariable({
            question: 'Snowflake User Name',
            mandatory: true,
            order: 200,
            exampleText: 'JANE_DOE',
            helpText:
                'Uppercase letters, digits and underscores, starting with a letter. A new user is created if it does not exist.',
        }),

        user_email: EmailVariable({
            question: 'User Email',
            mandatory: false,
            order: 300,
            helpText: 'Required when granting access.',
        }),

        user_display_name: SingleLineTextVariable({
            question: 'User Display Name',
            mandatory: false,
            order: 400,
        }),

        access_role: SelectBoxVariable({
            question: 'Snowflake Role',
            mandatory: true,
            order: 500,
            choices: {
                PLATFORM_READER: { label: 'Platform Reader (read-only analytics)', sequence: 1 },
                PLATFORM_ENGINEER: { label: 'Platform Engineer', sequence: 2 },
            },
        }),

        environment: SelectBoxVariable({
            question: 'Environment',
            mandatory: true,
            order: 600,
            choices: {
                dev: { label: 'Development', sequence: 1 },
            },
        }),

        business_justification: MultiLineTextVariable({
            question: 'Business Justification',
            mandatory: true,
            order: 700,
        }),
    },

    flow: snowflake_access_fulfillment,
    fulfillmentAutomationLevel: 'fullyAutomated',

    meta: [
        'Snowflake',
        'Access',
        'Data Platform',
        'AWX',
    ],
})
