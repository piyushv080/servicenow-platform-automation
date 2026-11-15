import {
    CatalogItem,
    SelectBoxVariable,
    MultiLineTextVariable,
    DateVariable,
} from '@servicenow/sdk/core'

import { requester_information } from './catalog-variables.now'
import { catalog_request_fulfillment } from './flows/catalog-request-fulfillment.now'

export const generic_it_service_request = CatalogItem({
    $id: Now.ID['generic_it_service_request'],

    name: 'Generic IT Service Request',
    shortDescription: 'Request IT infrastructure services and support',
    description:
        'Submit requests for IT infrastructure services, access, configuration changes, and technical support.',

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
        request_type: SelectBoxVariable({
            question: 'Request Type',
            mandatory: true,
            order: 100,
            choices: {
                access: { label: 'Access Request', sequence: 1 },
                infrastructure: { label: 'Infrastructure Request', sequence: 2 },
                configuration: { label: 'Configuration Change', sequence: 3 },
                support: { label: 'Technical Support', sequence: 4 },
            },
        }),

        environment: SelectBoxVariable({
            question: 'Environment',
            mandatory: true,
            order: 200,
            choices: {
                development: { label: 'Development', sequence: 1 },
                testing: { label: 'Testing', sequence: 2 },
                staging: { label: 'Staging', sequence: 3 },
                production: { label: 'Production', sequence: 4 },
            },
        }),

        business_justification: MultiLineTextVariable({
            question: 'Business Justification',
            mandatory: true,
            order: 300,
        }),

        required_date: DateVariable({
            question: 'Required Date',
            mandatory: true,
            order: 400,
        }),

        additional_information: MultiLineTextVariable({
            question: 'Additional Information',
            mandatory: false,
            order: 500,
        }),
    },

    flow: catalog_request_fulfillment,
    fulfillmentAutomationLevel: 'fullyAutomated',

    meta: [
        'IT',
        'Infrastructure',
        'Automation',
        'Service Request',
    ],
})
