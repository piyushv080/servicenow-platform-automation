import '@servicenow/sdk/global'
import { Property } from '@servicenow/sdk/core'

const adminOnly = { read: ['admin'], write: ['admin'] }

Property({
    $id: Now.ID['ipm_problem_manager_role_property'],
    name: 'x_412550_ipmp.ipm.problem_manager_role',
    type: 'string',
    value: 'x_412550_ipmp.problem_manager',
    description: 'Role required to use IPMP manager actions.',
    roles: adminOnly,
})

Property({
    $id: Now.ID['ipm_cluster_solution_property'],
    name: 'x_412550_ipmp.ipm.cluster_solution',
    type: 'string',
    value: '',
    description: 'Technical name of the active Predictive Intelligence cluster solution.',
    roles: adminOnly,
})

Property({
    $id: Now.ID['ipm_skill_capability_property'],
    name: 'x_412550_ipmp.ipm.skill_capability_id',
    type: 'string',
    value: '',
    description: 'Capability sys_id for the published Now Assist Skill used by IPMP.',
    roles: adminOnly,
})

Property({
    $id: Now.ID['ipm_skill_config_property'],
    name: 'x_412550_ipmp.ipm.skill_config_id',
    type: 'string',
    value: '',
    description: 'Skill configuration sys_id for the published Now Assist Skill.',
    roles: adminOnly,
})

Property({
    $id: Now.ID['ipm_skill_input_name_property'],
    name: 'x_412550_ipmp.ipm.skill_input_name',
    type: 'string',
    value: 'incident',
    description: 'Exact input name configured on the Now Assist Skill.',
    roles: adminOnly,
})

Property({
    $id: Now.ID['ipm_skill_context_input_name_property'],
    name: 'x_412550_ipmp.ipm.skill_context_input_name',
    type: 'string',
    value: '',
    description: 'Optional String input name on the Now Assist Skill for Predictive Intelligence cluster context.',
    roles: adminOnly,
})
