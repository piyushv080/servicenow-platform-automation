(function execute(inputs, outputs) {
    outputs.task_created = false;
    outputs.task_id = '';
    outputs.task_number = '';
    outputs.message = '';

    // Validate the requested item.
    var ritm = new GlideRecord('sc_req_item');

    if (!ritm.get(inputs.request_item_id)) {
        outputs.message = 'Requested item was not found.';
        return;
    }

    // Read active fulfillment configuration.
    var config = new GlideRecord('x_412550_catal_config');
    config.addQuery('active', true);
    config.addQuery('name', inputs.configuration_name);
    config.orderByDesc('sys_updated_on');
    config.setLimit(1);
    config.query();

    if (!config.next()) {
        outputs.message = 'Active fulfillment configuration was not found.';
        return;
    }

    var autoAssign = config.getValue('auto_assign') == '1';
    var groupId = config.getValue('fulfillment_group') || '';
    var technicianId = config.getValue('assigned_technician') || '';

    // Validate assignment configuration before creating the task.
    if (autoAssign) {
        if (!groupId) {
            outputs.message = 'Automatic assignment is enabled, but no fulfillment group is configured.';
            return;
        }

        var group = new GlideRecord('sys_user_group');

        if (!group.get(groupId) || group.getValue('active') != '1') {
            outputs.message = 'Configured fulfillment group was not found or is inactive.';
            return;
        }

        if (technicianId) {
            var technician = new GlideRecord('sys_user');

            if (!technician.get(technicianId) ||
                technician.getValue('active') != '1') {
                outputs.message = 'Configured technician was not found or is inactive.';
                return;
            }
        }
    }

    // Create the catalog task.
    var task = new GlideRecord('sc_task');
    task.initialize();
    task.setValue('request_item', ritm.getUniqueValue());
    task.setValue(
        'short_description',
        'Fulfill Generic IT Service Request'
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
        return;
    }

    // Synchronize the approved RITM after successful task creation.
    ritm.setValue('approval', 'approved');
    ritm.setValue('state', '2');
    ritm.setValue('stage', 'fulfillment');

    var ritmUpdated = ritm.update();

    if (!ritmUpdated) {
        gs.error(
            'Catalog Toolkit: SCTASK created, but RITM lifecycle update failed: ' +
            ritm.getValue('number')
        );
    }

    outputs.task_created = true;
    outputs.task_id = taskId.toString();
    outputs.task_number = task.getValue('number') || '';
    outputs.message = autoAssign
        ? 'Catalog task created and assigned successfully.'
        : 'Catalog task created. Automatic assignment is disabled.';
})(inputs, outputs);
