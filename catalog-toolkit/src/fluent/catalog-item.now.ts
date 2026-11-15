
import { CatalogItem } from '@servicenow/sdk/core'

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
        '803e95e1c3732100fca206e939ba8f2a',
    ],

    active: false,
    state: 'draft',

    availability: 'both',
    requestMethod: 'request',

    fulfillmentAutomationLevel: 'unspecified',

    meta: [
        'IT',
        'Infrastructure',
        'Automation',
        'Service Request',
    ],
})
