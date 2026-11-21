var SnowflakeRequestUtils = Class.create();

SnowflakeRequestUtils.prototype = {
    initialize: function () {},

    // Mirrors snowflake-iac/group_vars/all/request_policy.yml in the
    // snowflake-platform-automation repo. Ansible enforces the same policy again,
    // so a change here must be made there too.
    NAME_PATTERN: /^WH_REQ_[A-Z0-9_]{3,30}$/,
    ALLOWED_SIZES: ['XSMALL', 'SMALL'],
    ALLOWED_AUTO_SUSPEND: ['60', '300', '600'],
    ALLOWED_MONITORS: ['RM_PLATFORM_DEV'],
    ALLOWED_ENVIRONMENTS: ['dev'],

    // Access requests (11_request_access.yml). Never admin roles.
    USER_PATTERN: /^[A-Z][A-Z0-9_]{2,40}$/,
    EMAIL_PATTERN: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
    ALLOWED_ROLES: ['PLATFORM_READER', 'PLATFORM_ENGINEER'],
    ALLOWED_ACTIONS: ['grant', 'revoke'],

    // Catalog item name -> request type. Each type has its own policy, AWX payload and job template.
    REQUEST_TYPES: {
        'Snowflake Warehouse Request': {
            type: 'warehouse',
            templateProperty: 'x_412550_catal.awx.snowflake_warehouse_template_id',
        },
        'Snowflake Access Request': {
            type: 'access',
            templateProperty: 'x_412550_catal.awx.snowflake_access_template_id',
        },
    },

    /** Accepts a sys_id string or a Flow reference object and returns the sys_id. */
    resolveSysId: function (value) {
        if (!value) {
            return '';
        }

        if (typeof value.getUniqueValue === 'function') {
            return String(value.getUniqueValue());
        }

        if (value.sys_id) {
            return String(value.sys_id);
        }

        if (value.value) {
            return String(value.value);
        }

        return String(value);
    },

    /** Returns { type, templateProperty } for the RITM's catalog item, or null if it is not a Snowflake item. */
    getRequestType: function (ritm) {
        var itemName = String(ritm.cat_item.getDisplayValue() || '');
        return this.REQUEST_TYPES[itemName] || null;
    },

    /** Reads, validates and builds the AWX payload for any Snowflake request type. */
    readRequest: function (ritm, requestType) {
        return requestType.type === 'access'
            ? this.readAccessRequest(ritm)
            : this.readWarehouseRequest(ritm);
    },

    validateRequest: function (request, requestType) {
        return requestType.type === 'access'
            ? this.validateAccessRequest(request)
            : this.validateWarehouseRequest(request);
    },

    buildPayload: function (request, requestType, ritm, task) {
        return requestType.type === 'access'
            ? this.buildAwxAccessExtraVars(request, ritm, task)
            : this.buildAwxExtraVars(request, ritm, task);
    },

    /** Short label for logs and work notes. */
    describeRequest: function (request, requestType) {
        return requestType.type === 'access'
            ? request.accessAction + ' ' + request.accessRole + ' for ' + request.userName
            : 'warehouse ' + request.warehouseName;
    },

    /** Reads the Snowflake warehouse variables from a requested item. */
    readWarehouseRequest: function (ritm) {
        var v = ritm.variables;

        return {
            warehouseName: String(v.warehouse_name || '').trim().toUpperCase(),
            size: String(v.warehouse_size || '').trim().toUpperCase(),
            autoSuspend: String(v.auto_suspend_seconds || '').trim(),
            resourceMonitor: String(v.resource_monitor || '').trim().toUpperCase(),
            environment: String(v.environment || '').trim().toLowerCase(),
            businessJustification: String(v.business_justification || '').trim(),
        };
    },

    /** Returns { valid: boolean, message: string } */
    validateWarehouseRequest: function (request) {
        var errors = [];

        if (!this.NAME_PATTERN.test(request.warehouseName)) {
            errors.push(
                'Warehouse name must match WH_REQ_ followed by 3-30 uppercase letters, digits or underscores.'
            );
        }

        if (this.ALLOWED_SIZES.indexOf(request.size) === -1) {
            errors.push('Warehouse size must be one of: ' + this.ALLOWED_SIZES.join(', ') + '.');
        }

        if (this.ALLOWED_AUTO_SUSPEND.indexOf(request.autoSuspend) === -1) {
            errors.push('Auto-suspend must be one of: ' + this.ALLOWED_AUTO_SUSPEND.join(', ') + ' seconds.');
        }

        if (this.ALLOWED_MONITORS.indexOf(request.resourceMonitor) === -1) {
            errors.push('Resource monitor must be one of: ' + this.ALLOWED_MONITORS.join(', ') + '.');
        }

        if (this.ALLOWED_ENVIRONMENTS.indexOf(request.environment) === -1) {
            errors.push('Self-service is only available for: ' + this.ALLOWED_ENVIRONMENTS.join(', ') + '.');
        }

        if (request.businessJustification.length < 20) {
            errors.push('Business justification must contain at least 20 characters.');
        }

        return {
            valid: errors.length === 0,
            message: errors.length === 0
                ? 'Snowflake warehouse request passed validation.'
                : errors.join(' '),
        };
    },

    /** Extra vars for the AWX job template "SF - 10 Request Warehouse". */
    buildAwxExtraVars: function (request, ritm, task) {
        return {
            request_wh_name: request.warehouseName,
            request_wh_size: request.size,
            request_wh_auto_suspend: parseInt(request.autoSuspend, 10),
            request_wh_resource_monitor: request.resourceMonitor,
            request_environment: request.environment,
            sn_ritm_number: String(ritm.getValue('number')),
            sn_task_number: String(task.getValue('number')),
            sn_task_sys_id: String(task.getUniqueValue()),
        };
    },

    /** Reads the Snowflake access variables from a requested item. */
    readAccessRequest: function (ritm) {
        var v = ritm.variables;

        return {
            userName: String(v.snowflake_username || '').trim().toUpperCase(),
            userEmail: String(v.user_email || '').trim().toLowerCase(),
            userDisplayName: String(v.user_display_name || '').trim(),
            accessRole: String(v.access_role || '').trim().toUpperCase(),
            accessAction: String(v.access_action || '').trim().toLowerCase(),
            environment: String(v.environment || '').trim().toLowerCase(),
            businessJustification: String(v.business_justification || '').trim(),
        };
    },

    /** Returns { valid: boolean, message: string } */
    validateAccessRequest: function (request) {
        var errors = [];

        if (!this.USER_PATTERN.test(request.userName)) {
            errors.push(
                'Snowflake user name must start with a letter and contain 3-41 uppercase letters, digits or underscores.'
            );
        }

        if (this.ALLOWED_ROLES.indexOf(request.accessRole) === -1) {
            errors.push('Role must be one of: ' + this.ALLOWED_ROLES.join(', ') + '.');
        }

        if (this.ALLOWED_ACTIONS.indexOf(request.accessAction) === -1) {
            errors.push('Action must be one of: ' + this.ALLOWED_ACTIONS.join(', ') + '.');
        }

        if (request.accessAction === 'grant' && !this.EMAIL_PATTERN.test(request.userEmail)) {
            errors.push('A valid email address is required to grant access.');
        }

        if (this.ALLOWED_ENVIRONMENTS.indexOf(request.environment) === -1) {
            errors.push('Self-service is only available for: ' + this.ALLOWED_ENVIRONMENTS.join(', ') + '.');
        }

        if (request.businessJustification.length < 20) {
            errors.push('Business justification must contain at least 20 characters.');
        }

        return {
            valid: errors.length === 0,
            message: errors.length === 0
                ? 'Snowflake access request passed validation.'
                : errors.join(' '),
        };
    },

    /** Extra vars for the AWX job template "SF - 11 Request Access". */
    buildAwxAccessExtraVars: function (request, ritm, task) {
        return {
            request_user_name: request.userName,
            request_user_email: request.userEmail,
            request_user_display_name: request.userDisplayName,
            request_access_role: request.accessRole,
            request_access_action: request.accessAction,
            request_environment: request.environment,
            sn_ritm_number: String(ritm.getValue('number')),
            sn_task_number: String(task.getValue('number')),
            sn_task_sys_id: String(task.getUniqueValue()),
        };
    },

    type: 'SnowflakeRequestUtils',
};
