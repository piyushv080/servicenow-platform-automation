import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_servicenow_catal_config',
    view: default_view,
    sections: [
        {
            caption: 'Configuration Details',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'name', type: 'table_field' },
                        { field: 'active', type: 'table_field' },
                        { field: 'integration_enabled', type: 'table_field' },
                        { field: 'description', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})
