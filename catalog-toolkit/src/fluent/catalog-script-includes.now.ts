import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

export const catalog_request_utils = ScriptInclude({
    $id: Now.ID['CatalogRequestUtils'],

    name: 'CatalogRequestUtils',

    description:
        'Reusable server-side utilities for catalog request validation and configuration lookup.',

    active: true,

    accessibleFrom: 'package_private',

    script: Now.include(
        '../server/script-includes/catalog-request-utils.js'
    ),
})
