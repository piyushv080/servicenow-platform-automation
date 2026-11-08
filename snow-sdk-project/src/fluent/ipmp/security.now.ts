import '@servicenow/sdk/global'
import { Acl, Role } from '@servicenow/sdk/core'

export const ipmProblemManager = Role({
    name: 'x_412550_ipmp.problem_manager',
    description: 'Can investigate recurring incidents, request Problem approval, and review requests.',
})

Acl({
    $id: Now.ID['ipm_approval_read_acl'],
    type: 'record',
    table: 'x_412550_ipmp_ipm_approval',
    operation: 'read',
    roles: [ipmProblemManager, 'problem_manager'],
    adminOverrides: true,
    description: 'Restrict IPM approval records to Problem Managers.',
})

Acl({
    $id: Now.ID['ipm_approval_create_acl'],
    type: 'record',
    table: 'x_412550_ipmp_ipm_approval',
    operation: 'create',
    roles: [ipmProblemManager, 'problem_manager'],
    adminOverrides: true,
    description: 'Only Problem Managers can request approval for IPM drafts.',
})

Acl({
    $id: Now.ID['ipm_approval_write_acl'],
    type: 'record',
    table: 'x_412550_ipmp_ipm_approval',
    operation: 'write',
    roles: [ipmProblemManager, 'problem_manager'],
    adminOverrides: true,
    description: 'Only Problem Managers can review and complete IPM approval records.',
})
