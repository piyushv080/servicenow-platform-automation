
import { CatalogClientScript } from '@servicenow/sdk/core'
import { generic_it_service_request } from './catalog-item.now'

export const generic_request_validation = CatalogClientScript({
    $id: Now.ID['generic_request_validation'],

    name: 'Generic IT Request - Submission Validation',

    script: Now.include('../client/validate-request.js'),

    type: 'onSubmit',

    catalogItem: generic_it_service_request,

    active: true,
    appliesOnCatalogItemView: true,
})
