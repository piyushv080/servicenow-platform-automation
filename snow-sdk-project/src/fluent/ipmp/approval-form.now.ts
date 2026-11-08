import '@servicenow/sdk/global'
import { Form, default_view } from '@servicenow/sdk/core'

export const ipmApprovalForm = Form({
    table: 'x_412550_ipmp_ipm_approval',
    view: default_view,
    sections: [{
        caption: 'Approval Request',
        content: [{
            layout: 'one-column',
            elements: [
                { field: 'state', type: 'table_field' },
                { field: 'requested_by', type: 'table_field' },
                { field: 'approved_by', type: 'table_field' },
                { field: 'draft_json', type: 'table_field' },
                { field: 'incident_ids_json', type: 'table_field' },
                { field: 'problem', type: 'table_field' },
            ],
        }],
    }],
})
