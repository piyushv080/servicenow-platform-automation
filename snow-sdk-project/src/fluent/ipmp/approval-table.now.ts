import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Stores the exact draft and incident set that a manager reviews. Approval is
// persisted here so the browser cannot approve a Problem by sending a flag.
export const x_412550_ipmp_ipm_approval = Table({
    name: 'x_412550_ipmp_ipm_approval',
    label: 'IPM Problem Approval',
    schema: {
        state: StringColumn({
            label: 'State',
            maxLength: 20,
            default: 'requested',
            choices: {
                requested: 'Requested',
                approved: 'Approved',
                processing: 'Processing',
                rejected: 'Rejected',
                completed: 'Completed',
            },
        }),
        draft_json: StringColumn({ label: 'Problem Draft JSON', maxLength: 4000 }),
        incident_ids_json: StringColumn({ label: 'Incident IDs JSON', maxLength: 4000 }),
        requested_by: ReferenceColumn({ label: 'Requested By', referenceTable: 'sys_user' }),
        approved_by: ReferenceColumn({ label: 'Approved By', referenceTable: 'sys_user' }),
        problem: ReferenceColumn({ label: 'Created Problem', referenceTable: 'problem' }),
    },
})
