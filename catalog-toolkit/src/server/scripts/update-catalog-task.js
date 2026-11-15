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

    var taskId = inputs.task_id;
    var newState = String(inputs.state || '');

    if (!taskId || !newState) {
        outputs.message = 'Task ID and state are required.';
        return;
    }

    if (!allowedStates[newState]) {
        outputs.message = 'Unsupported catalog task state: ' + newState;
        return;
    }

    var task = new GlideRecord('sc_task');

    if (!task.get(taskId)) {
        outputs.message = 'Catalog task was not found.';
        return;
    }

    task.setValue('state', newState);

    if (inputs.work_notes) {
        task.setValue('work_notes', inputs.work_notes);
    }

    task.update();

    outputs.updated = true;
    outputs.task_number = task.getValue('number');
    outputs.state = task.getValue('state');
    outputs.message = 'Catalog task updated to ' +
        allowedStates[newState] + '.';
})(inputs, outputs);
