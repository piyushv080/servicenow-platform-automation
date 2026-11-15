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
        var ritmId = task.getValue('request_item');

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

        // Synchronize parent RITM using all its fulfillment tasks.
        var ritm = new GlideRecord('sc_req_item');

        if (!ritm.get(ritmId)) {
            outputs.message =
                'Task updated, but its parent RITM could not be found.';
            return;
        }

        var tasks = new GlideRecord('sc_task');
        tasks.addQuery('request_item', ritmId);
        tasks.query();

        var total = 0;
        var complete = 0;
        var incomplete = 0;
        var active = 0;

        while (tasks.next()) {
            total++;

            var taskState = String(tasks.getValue('state'));

            if (taskState === '3') {
                complete++;
            } else if (taskState === '4' || taskState === '7') {
                incomplete++;
            } else {
                active++;
            }
        }

        var ritmState = '2';
        var ritmStage = 'fulfillment';

        if (total > 0 && active === 0) {
            if (incomplete > 0) {
                ritmState = '4';
                ritmStage = 'delivery';
            } else if (complete === total) {
                ritmState = '3';
                ritmStage = 'delivery';
            }
        }

        ritm.setValue('state', ritmState);
        ritm.setValue('stage', ritmStage);

        var ritmUpdated = ritm.update();

        if (!ritmUpdated) {
            outputs.message =
                'Task updated, but parent RITM synchronization failed.';
            gs.error(
                'Catalog Toolkit: RITM synchronization failed for ' +
                ritm.getValue('number')
            );
            return;
        }

        var verifiedRitm = new GlideRecord('sc_req_item');

        if (!verifiedRitm.get(ritmId) ||
            String(verifiedRitm.getValue('state')) !== ritmState ||
            String(verifiedRitm.getValue('stage')) !== ritmStage) {
            outputs.message =
                'Task updated, but RITM lifecycle verification failed.';
            return;
        }

        outputs.updated = true;
        outputs.task_number = verify.getValue('number');
        outputs.state = verify.getValue('state');
        outputs.message =
            'Task updated: ' + allowedStates[newState] +
            '. RITM ' + verifiedRitm.getValue('number') +
            ' synchronized to state ' + ritmState +
            ', stage ' + ritmStage + '.';

    } catch (error) {
        outputs.message = 'Task update failed: ' + error.message;
        gs.error(
            'Catalog Toolkit task update failed: ' + error.message
        );
    }
})(inputs, outputs);
