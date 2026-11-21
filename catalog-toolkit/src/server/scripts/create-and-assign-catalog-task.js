(function execute(inputs, outputs) {
    outputs.task_created = false;
    outputs.task_id = '';
    outputs.task_number = '';
    outputs.message = '';

    var requestItemId = '';

    if (inputs.request_item_id) {
        if (typeof inputs.request_item_id.getUniqueValue === 'function') {
            requestItemId = inputs.request_item_id.getUniqueValue();
        } else if (inputs.request_item_id.sys_id) {
            requestItemId = String(inputs.request_item_id.sys_id);
        } else if (inputs.request_item_id.value) {
            requestItemId = String(inputs.request_item_id.value);
        } else {
            requestItemId = String(inputs.request_item_id);
        }
    }
    var configurationName = String(inputs.configuration_name || '');
    var prefix = 'Catalog Toolkit: ';

    try {
        if (!requestItemId || !configurationName) {
            outputs.message = 'Requested item and configuration name are required.';
            gs.warn(prefix + outputs.message);
            return;
        }

        var ritm = new GlideRecord('sc_req_item');

        if (!ritm.get(requestItemId)) {
            outputs.message = 'Requested item was not found.';
            gs.error(prefix + outputs.message + ' Sys ID: ' + requestItemId);
            return;
        }

        var ritmNumber = ritm.getValue('number');
        // Optional input; the Generic IT flow does not pass it and keeps the original text.
        var taskDescription =
            String(inputs.task_short_description || '').trim() ||
            'Fulfill Generic IT Service Request';

        // Prevent duplicate toolkit fulfillment tasks for this RITM.
        var existingTask = new GlideRecord('sc_task');
        existingTask.addQuery('request_item', requestItemId);
        existingTask.addQuery('short_description', taskDescription);
        existingTask.setLimit(1);
        existingTask.query();

        if (existingTask.next()) {
            outputs.task_id = existingTask.getUniqueValue();
            outputs.task_number = existingTask.getValue('number');
            outputs.message =
                'Duplicate prevented. Existing fulfillment task: ' +
                outputs.task_number;

            gs.warn(
                prefix + 'Duplicate task creation prevented for ' +
                ritmNumber + '. Existing task: ' + outputs.task_number
            );
            return;
        }

        gs.info(prefix + 'Starting fulfillment task creation for ' + ritmNumber);

        // Load active fulfillment configuration.
        var config = new GlideRecord('x_412550_catal_config');
        config.addQuery('active', true);
        config.addQuery('name', configurationName);
        config.orderByDesc('sys_updated_on');
        config.setLimit(1);
        config.query();

        if (!config.next()) {
            outputs.message = 'Active fulfillment configuration was not found.';
            gs.error(prefix + outputs.message + ' RITM: ' + ritmNumber);
            return;
        }

        var autoAssign = config.getValue('auto_assign') == '1';
        var groupId = config.getValue('fulfillment_group') || '';
        var technicianId = config.getValue('assigned_technician') || '';

        // Validate assignment settings before inserting the task.
        if (autoAssign) {
            if (!groupId) {
                outputs.message =
                    'Automatic assignment is enabled, but no fulfillment group is configured.';
                gs.error(prefix + outputs.message + ' RITM: ' + ritmNumber);
                return;
            }

            var group = new GlideRecord('sys_user_group');

            if (!group.get(groupId) || group.getValue('active') != '1') {
                outputs.message =
                    'Configured fulfillment group was not found or is inactive.';
                gs.error(prefix + outputs.message + ' RITM: ' + ritmNumber);
                return;
            }

            if (technicianId) {
                var technician = new GlideRecord('sys_user');

                if (!technician.get(technicianId) ||
                    technician.getValue('active') != '1') {
                    outputs.message =
                        'Configured technician was not found or is inactive.';
                    gs.error(prefix + outputs.message + ' RITM: ' + ritmNumber);
                    return;
                }
            }
        }

        // Create the fulfillment task.
        var task = new GlideRecord('sc_task');
        task.initialize();
        task.setValue('request_item', ritm.getUniqueValue());
        task.setValue('short_description', taskDescription);
        task.setValue(
            'description',
            ritm.getValue('description') || ''
        );

        if (autoAssign) {
            task.setValue('assignment_group', groupId);

            if (technicianId) {
                task.setValue('assigned_to', technicianId);
            }
        }

        var taskId = task.insert();

        if (!taskId) {
            outputs.message = 'Catalog task creation failed.';
            gs.error(prefix + outputs.message + ' RITM: ' + ritmNumber);
            return;
        }

        // Reload and verify the inserted task.
        var verifyTask = new GlideRecord('sc_task');

        if (!verifyTask.get(taskId)) {
            outputs.message =
                'Task insert returned an ID, but the task could not be reloaded.';
            gs.error(prefix + outputs.message + ' RITM: ' + ritmNumber);
            return;
        }

        outputs.task_created = true;
        outputs.task_id = verifyTask.getUniqueValue();
        outputs.task_number = verifyTask.getValue('number') || '';

        // Synchronize approved RITM lifecycle.
        ritm.setValue('approval', 'approved');
        ritm.setValue('state', '2');
        ritm.setValue('stage', 'fulfillment');

        var ritmUpdated = ritm.update();

        if (!ritmUpdated) {
            outputs.message =
                'Task created, but RITM lifecycle synchronization failed.';
            gs.error(
                prefix + 'Task ' + outputs.task_number +
                ' created, but RITM update failed: ' + ritmNumber
            );
            return;
        }

        outputs.message = autoAssign
            ? 'Catalog task created and assigned successfully.'
            : 'Catalog task created. Automatic assignment is disabled.';

        gs.info(
            prefix + 'Task created successfully. RITM: ' + ritmNumber +
            ', SCTASK: ' + outputs.task_number +
            ', Auto assignment: ' + autoAssign
        );

    } catch (error) {
        outputs.message = 'Catalog task creation failed: ' + error.message;

        gs.error(
            prefix + 'Task creation exception. RITM: ' +
            requestItemId + '. Error: ' + error.message
        );
    }
})(inputs, outputs);
