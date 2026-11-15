(function execute(inputs, outputs) {
    outputs.updated = false;
    outputs.task_number = '';
    outputs.state = '';
    outputs.message = '';

    var allowedStates = {
        '-5': 'Pending',
        '1': 'Open',
        '2': 'Work in Progress',
        '3': 'Closed Complete',
        '4': 'Closed Incomplete',
        '7': 'Closed Skipped'
    };

    var taskId = String(inputs.task_id || '');
    var newState = String(inputs.state || '');

    if (!taskId || !allowedStates[newState]) {
        outputs.message = 'Invalid task ID or state.';
        return;
    }

    var task = new GlideRecord('sc_task');

    if (!task.get(taskId)) {
        outputs.message = 'Catalog task not found.';
        return;
    }

    if (parseInt(task.getValue('state'), 10) >= 3) {
        outputs.message = 'Catalog task is already closed.';
        outputs.task_number = task.getValue('number');
        outputs.state = task.getValue('state');
        return;
    }

    try {
        task.setValue('state', newState);

        if (inputs.work_notes) {
            task.setValue('work_notes', inputs.work_notes);
        }

        var updatedId = task.update();

        if (!updatedId) {
            outputs.message = 'ServiceNow did not confirm the task update.';
            return;
        }

        var verify = new GlideRecord('sc_task');

        if (!verify.get(taskId) ||
            String(verify.getValue('state')) !== newState) {
            outputs.message = 'Task update could not be verified.';
            return;
        }

        outputs.updated = true;
        outputs.task_number = verify.getValue('number');
        outputs.state = verify.getValue('state');
        outputs.message = 'Catalog task updated successfully: ' +
            allowedStates[newState];

    } catch (error) {
        outputs.message = 'Task update failed: ' + error.message;
        gs.error('Catalog Toolkit task update failed: ' + error.message);
    }
})(inputs, outputs);
