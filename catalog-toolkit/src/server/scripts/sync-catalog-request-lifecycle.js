(function execute(inputs, outputs) {
    outputs.updated = false;
    outputs.request_number = '';
    outputs.state = '';
    outputs.approval = '';
    outputs.stage = '';
    outputs.message = '';

    var requestItemId = String(inputs.request_item_id || '');
    var operation = String(inputs.operation || '');

    if (!requestItemId) {
        outputs.message = 'Requested Item sys_id is required.';
        return;
    }

    if (['approved', 'rejected', 'refresh'].indexOf(operation) === -1) {
        outputs.message = 'Unsupported lifecycle operation.';
        return;
    }

    var ritm = new GlideRecord('sc_req_item');

    if (!ritm.get(requestItemId)) {
        outputs.message = 'Requested Item was not found.';
        return;
    }

    try {
        var desiredState = '';
        var desiredApproval = '';
        var desiredStage = '';

        if (operation === 'approved') {
            desiredState = '2';
            desiredApproval = 'approved';
            desiredStage = 'fulfillment';
        } else if (operation === 'rejected') {
            desiredState = '4';
            desiredApproval = 'rejected';
        } else {
            var tasks = new GlideRecord('sc_task');
            tasks.addQuery('request_item', requestItemId);
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
                outputs.message = 'No fulfillment tasks exist. RITM was not changed.';
                return;
            }

            if (incomplete > 0) {
                desiredState = '4';
                desiredStage = 'delivery';
            } else if (active > 0) {
                desiredState = '2';
                desiredStage = 'fulfillment';
            } else if (complete === total) {
                desiredState = '3';
                desiredStage = 'delivery';
            }
        }

        if (desiredState) {
            ritm.setValue('state', desiredState);
        }

        if (desiredApproval) {
            ritm.setValue('approval', desiredApproval);
        }

        if (desiredStage) {
            ritm.setValue('stage', desiredStage);
        }

        var updatedId = ritm.update();

        if (!updatedId) {
            outputs.message = 'ServiceNow did not confirm the RITM update.';
            return;
        }

        var verify = new GlideRecord('sc_req_item');

        if (!verify.get(requestItemId)) {
            outputs.message = 'Could not reload the updated RITM.';
            return;
        }

        outputs.updated = true;
        outputs.request_number = verify.getValue('number');
        outputs.state = verify.getValue('state');
        outputs.approval = verify.getValue('approval');
        outputs.stage = verify.getValue('stage');
        outputs.message = 'RITM lifecycle synchronized successfully.';

    } catch (error) {
        outputs.message = 'RITM lifecycle update failed: ' + error.message;
        gs.error('Catalog Toolkit RITM lifecycle error: ' + error.message);
    }
})(inputs, outputs);
