(function executeRule(current, previous) {
    var ritmId = current.getValue('request_item');

    if (!ritmId) {
        return;
    }

    try {
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

        if (total === 0) {
            return;
        }

        var desiredState = '2';
        var desiredStage = 'fulfillment';

        if (active === 0) {
            desiredStage = 'delivery';

            if (incomplete > 0) {
                desiredState = '4';
            } else if (complete === total) {
                desiredState = '3';
            }
        }

        var ritm = new GlideRecord('sc_req_item');

        if (!ritm.get(ritmId)) {
            gs.error(
                'Catalog Toolkit: Parent RITM not found for task ' +
                current.getValue('number')
            );
            return;
        }

        var changed = false;

        if (String(ritm.getValue('state')) !== desiredState) {
            ritm.setValue('state', desiredState);
            changed = true;
        }

        if (String(ritm.getValue('stage')) !== desiredStage) {
            ritm.setValue('stage', desiredStage);
            changed = true;
        }

        if (changed) {
            var updatedId = ritm.update();

            if (!updatedId) {
                gs.error(
                    'Catalog Toolkit: Failed to synchronize RITM ' +
                    ritm.getValue('number')
                );
            } else {
                gs.info(
                    'Catalog Toolkit: RITM ' +
                    ritm.getValue('number') +
                    ' synchronized. State=' + desiredState +
                    ', Stage=' + desiredStage +
                    ', Tasks=' + total
                );
            }
        }

    } catch (error) {
        gs.error(
            'Catalog Toolkit task lifecycle synchronization failed: ' +
            error.message
        );
    }
})(current, previous);
