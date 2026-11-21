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

    type: 'SnowflakeRequestUtils',
};
