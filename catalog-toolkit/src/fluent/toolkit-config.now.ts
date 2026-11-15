import {
    Table,
    StringColumn,
    BooleanColumn,
    MultiLineTextColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core'

export const x_412550_catal_config = Table({
    name: 'x_412550_catal_config',
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
        integration_enabled: BooleanColumn({
            label: 'Integration Enabled',
            default: false,
        }),
        auto_assign: BooleanColumn({
            label: 'Automatic Fulfillment Assignment',
            default: true,
        }),
        fulfillment_group: ReferenceColumn({
            label: 'Fulfillment Assignment Group',
            referenceTable: 'sys_user_group',
            referenceQual: 'active=true',
        }),
        assigned_technician: ReferenceColumn({
            label: 'Assigned Technician',
            referenceTable: 'sys_user',
            referenceQual: 'active=true',
        }),
        description: MultiLineTextColumn({
            label: 'Description',
            maxLength: 4000,
        }),
    },
})
