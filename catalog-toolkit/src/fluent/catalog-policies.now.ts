import { CatalogUiPolicy } from '@servicenow/sdk/core'
import { generic_it_service_request } from './catalog-item.now'

export const access_request_details_policy = CatalogUiPolicy({
    $id: Now.ID['access_request_details_policy'],

    shortDescription: 'Require additional information for access requests',

    catalogItem: generic_it_service_request,

    catalogCondition: 'request_type=access^EQ',

    active: true,
    onLoad: true,
    reverseIfFalse: true,

    actions: [
        {
            variableName: 'additional_information',
            visible: true,
            mandatory: true,
            order: 100,
        },
    ],
})
