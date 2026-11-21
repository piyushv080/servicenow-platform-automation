import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

export const snowflake_request_utils = ScriptInclude({
    $id: Now.ID['SnowflakeRequestUtils'],

    name: 'SnowflakeRequestUtils',

    description:
        'Policy, variable reading and AWX payload building for Snowflake catalog requests.',

    active: true,

    accessibleFrom: 'package_private',

    script: Now.include(
        '../../server/script-includes/snowflake-request-utils.js'
    ),
})
