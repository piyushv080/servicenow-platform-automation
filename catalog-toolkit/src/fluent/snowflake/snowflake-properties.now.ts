import { Property } from '@servicenow/sdk/core'

// AWX connection settings, configured by an admin on the instance.
// No real URL, token or MID Server name is stored in this public repository.

export const awx_base_url = Property({
    $id: Now.ID['awx_base_url_property'],
    name: 'x_412550_catal.awx.base_url',
    type: 'string',
    value: '',
    description:
        'AWX base URL as seen from the MID Server, for example http://localhost:8052 (no trailing slash).',
    roles: { read: ['admin'], write: ['admin'] },
})

export const awx_token = Property({
    $id: Now.ID['awx_token_property'],
    name: 'x_412550_catal.awx.token',
    type: 'password2',
    value: '',
    description:
        'AWX OAuth2 token (write scope) of a dedicated AWX user that may only execute the Snowflake job templates.',
    isPrivate: true,
    roles: { read: ['admin'], write: ['admin'] },
})

export const awx_mid_server = Property({
    $id: Now.ID['awx_mid_server_property'],
    name: 'x_412550_catal.awx.mid_server',
    type: 'string',
    value: '',
    description:
        'Name of the MID Server that can reach AWX. Leave empty only if AWX is reachable directly from the instance.',
    roles: { read: ['admin'], write: ['admin'] },
})

export const awx_warehouse_template_id = Property({
    $id: Now.ID['awx_warehouse_template_id_property'],
    name: 'x_412550_catal.awx.snowflake_warehouse_template_id',
    type: 'integer',
    value: 0,
    description:
        'Numeric id of the AWX job template "SF - 10 Request Warehouse (dev)".',
    roles: { read: ['admin'], write: ['admin'] },
})

export const awx_access_template_id = Property({
    $id: Now.ID['awx_access_template_id_property'],
    name: 'x_412550_catal.awx.snowflake_access_template_id',
    type: 'integer',
    value: 0,
    description:
        'Numeric id of the AWX job template "SF - 11 Request Access (dev)".',
    roles: { read: ['admin'], write: ['admin'] },
})
