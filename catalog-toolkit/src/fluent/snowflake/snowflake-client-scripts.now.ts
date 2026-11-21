import { CatalogClientScript } from '@servicenow/sdk/core'
import { snowflake_warehouse_request } from './snowflake-warehouse-item.now'
import { snowflake_access_request } from './snowflake-access-item.now'

export const snowflake_request_validation = CatalogClientScript({
    $id: Now.ID['snowflake_request_validation'],

    name: 'Snowflake Warehouse Request - Submission Validation',

    script: Now.include('../../client/validate-snowflake-request.js'),

    type: 'onSubmit',

    catalogItem: snowflake_warehouse_request,

    active: true,
    appliesOnCatalogItemView: true,
})

export const snowflake_access_validation = CatalogClientScript({
    $id: Now.ID['snowflake_access_validation'],

    name: 'Snowflake Access Request - Submission Validation',

    script: Now.include('../../client/validate-snowflake-access.js'),

    type: 'onSubmit',

    catalogItem: snowflake_access_request,

    active: true,
    appliesOnCatalogItemView: true,
})
