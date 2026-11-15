import {
    Table,
    StringColumn,
    BooleanColumn,
    MultiLineTextColumn,
} from '@servicenow/sdk/core'

export const x_servicenow_catal_config = Table({
    name: 'x_servicenow_catal_config',
    label: 'Catalog Toolkit Configuration',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Configuration Name',
            mandatory: true,
            maxLength: 100,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 4000,
        }),
        integration_enabled: BooleanColumn({
            label: 'Integration Enabled',
            default: false,
        }),
    },
})
