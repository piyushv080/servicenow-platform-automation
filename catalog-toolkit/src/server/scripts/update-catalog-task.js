(function execute(inputs, outputs) {
    outputs.updated = false;
    outputs.task_number = '';
    outputs.state = '';
    outputs.message = '';

    var prefix = 'Catalog Toolkit: ';

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

    try {
        if (!taskId || !allowedStates[newState]) {
            outputs.message = 'Invalid task ID or state.';
            gs.warn(prefix + outputs.message);
            return;
        }

        var task = new GlideRecord('sc_task');

        if (!task.get(taskId)) {
            outputs.message = 'Catalog task not found.';
            gs.error(prefix + outputs.message + ' Sys ID: ' + taskId);
            return;
        }

        var currentState = String(task.getValue('state'));
        var taskNumber = task.getValue('number');

        if (['3', '4', '7'].indexOf(currentState) !== -1) {
            outputs.message = 'Catalog task is already closed.';
            outputs.task_number = taskNumber;
            outputs.state = currentState;

            gs.warn(
                prefix + 'Update rejected because task is already closed: ' +
                taskNumber
            );
            return;
        }

        var ritmId = task.getValue('request_item');

        task.setValue('state', newState);

        if (inputs.work_notes) {
            task.setValue('work_notes', inputs.work_notes);
        }

        var updatedId = task.update();

        if (!updatedId) {
            outputs.message = 'ServiceNow did not confirm the task update.';
            gs.error(prefix + outputs.message + ' Task: ' + taskNumber);
            return;
        }

        var verify = new GlideRecord('sc_task');

        if (!verify.get(taskId) ||
            String(verify.getValue('state')) !== newState) {
            outputs.message = 'Task update could not be verified.';
            gs.error(prefix + outputs.message + ' Task: ' + taskNumber);
            return;
        }

        // The after-update Business Rule also synchronizes the parent RITM.
        var ritm = new GlideRecord('sc_req_item');

        if (!ritm.get(ritmId)) {
            outputs.message =
                'Task updated, but its parent RITM could not be found.';
            gs.error(
                prefix + outputs.message + ' Task: ' + taskNumber
            );
            return;
        }

        // Verify the parent lifecycle after the Business Rule executes.
        var tasks = new GlideRecord('sc_task');
        tasks.addQuery('request_item', ritmId);
        tasks.query();

        var total = 0;
        var complete = 0;
        var incomplete = 0;
        var active = 0;

        while (tasks.next()) {
            total++;

            var state = String(tasks.getValue('state'));

            if (state === '3') {
                complete++;
            } else if (state === '4' || state === '7') {
                incomplete++;
            } else {
                active++;
            }
        }

        var expectedState = '2';
        var expectedStage = 'fulfillment';

        if (total > 0 && active === 0) {
            expectedStage = 'delivery';

            if (incomplete > 0) {
                expectedState = '4';
            } else if (complete === total) {
                expectedState = '3';
            }
        }

        var actualState = String(ritm.getValue('state'));
        var actualStage = String(ritm.getValue('stage'));

        if (actualState !== expectedState ||
            actualStage !== expectedStage) {
            outputs.message =
                'Task updated, but parent RITM lifecycle verification failed.';

            gs.error(
                prefix + 'Lifecycle mismatch. RITM: ' +
                ritm.getValue('number') +
                ', expected state/stage: ' + expectedState + '/' +
                expectedStage +
                ', actual: ' + actualState + '/' + actualStage
            );
            return;
        }

        outputs.updated = true;
        outputs.task_number = verify.getValue('number');
        outputs.state = verify.getValue('state');
        outputs.message =
            'Task updated: ' + allowedStates[newState] +
            '. RITM ' + ritm.getValue('number') +
            ' synchronized to state ' + actualState +
            ', stage ' + actualStage + '.';

        gs.info(
            prefix + 'Task lifecycle updated. Task: ' +
            outputs.task_number +
            ', previous state: ' + currentState +
            ', new state: ' + newState +
            ', RITM: ' + ritm.getValue('number') +
            ', RITM state/stage: ' + actualState + '/' + actualStage
        );

    } catch (error) {
        outputs.message = 'Task update failed: ' + error.message;

        gs.error(
            prefix + 'Task lifecycle exception. Task: ' +
            taskId + '. Error: ' + error.message
        );
    }
})(inputs, outputs);
