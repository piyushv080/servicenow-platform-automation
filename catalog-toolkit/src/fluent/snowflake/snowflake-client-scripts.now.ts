import { CatalogClientScript } from '@servicenow/sdk/core'
import { snowflake_warehouse_request } from './snowflake-warehouse-item.now'

export const snowflake_request_validation = CatalogClientScript({
    $id: Now.ID['snowflake_request_validation'],

    name: 'Snowflake Warehouse Request - Submission Validation',

    script: Now.include('../../client/validate-snowflake-request.js'),

    type: 'onSubmit',

    catalogItem: snowflake_warehouse_request,

    active: true,
    appliesOnCatalogItemView: true,
})
