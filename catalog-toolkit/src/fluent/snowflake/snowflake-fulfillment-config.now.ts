import { Record } from '@servicenow/sdk/core'

// Fulfillment configuration used by create_and_assign_catalog_task for Snowflake requests.
// Automatic assignment is off by default because group sys_ids differ per instance:
// set Fulfillment Group on the instance and enable Auto Assign if you want it.
export const snowflake_fulfillment_config = Record({
    $id: Now.ID['snowflake_fulfillment_config'],
    table: 'x_412550_catal_config',
    data: {
        name: 'Snowflake Platform Fulfillment',
        active: true,
        integration_enabled: true,
        auto_assign: false,
        description:
            'Snowflake self-service requests. Catalog tasks are fulfilled by AWX through the MID Server.',
    },
})
