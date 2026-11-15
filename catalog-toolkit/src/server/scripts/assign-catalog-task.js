(function execute(inputs, outputs) {
    outputs.assigned = false;

    if (!inputs.task_id || !inputs.fulfillment_group) {
        outputs.message = 'Task ID or fulfillment group is missing.';
        return;
    }

    var task = new GlideRecord('sc_task');

    if (!task.get(inputs.task_id)) {
        outputs.message = 'Catalog task was not found.';
        return;
    }

    var group = new GlideRecord('sys_user_group');

    if (!group.get(inputs.fulfillment_group) ||
        group.getValue('active') != '1') {
        outputs.message = 'Fulfillment group was not found or is inactive.';
        return;
    }

    task.setValue('assignment_group', inputs.fulfillment_group);

    if (inputs.assigned_technician) {
        var technician = new GlideRecord('sys_user');

        if (!technician.get(inputs.assigned_technician) ||
            technician.getValue('active') != '1') {
            outputs.message = 'Assigned technician was not found or is inactive.';
            return;
        }

        task.setValue('assigned_to', inputs.assigned_technician);
    }

    task.update();

    outputs.assigned = true;
    outputs.message = 'Catalog task assigned successfully.';
})(inputs, outputs);
