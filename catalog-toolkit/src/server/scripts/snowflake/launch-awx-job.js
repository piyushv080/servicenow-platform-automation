(function execute(inputs, outputs) {
    outputs.launched = false;
    outputs.job_id = '';
    outputs.message = '';

    var prefix = 'Catalog Toolkit (Snowflake): ';
    var utils = new SnowflakeRequestUtils();
    var requestItemId = utils.resolveSysId(inputs.request_item_id);
    var taskId = utils.resolveSysId(inputs.task_id);

    var task = new GlideRecord('sc_task');

    function noteOnTask(text) {
        task.work_notes = text;
        task.update();
    }

    try {
        var ritm = new GlideRecord('sc_req_item');

        if (!requestItemId || !ritm.get(requestItemId)) {
            outputs.message = 'Requested item was not found.';
            gs.error(prefix + outputs.message);
            return;
        }

        if (!taskId || !task.get(taskId)) {
            outputs.message = 'Catalog task was not found.';
            gs.error(prefix + outputs.message + ' RITM: ' + ritm.getValue('number'));
            return;
        }

        // Never launch twice for the same task.
        var correlation = String(task.getValue('correlation_id') || '');

        if (correlation.indexOf('awx:') === 0) {
            outputs.job_id = correlation.substring(4);
            outputs.message = 'Duplicate prevented. AWX job ' + outputs.job_id + ' was already launched.';
            gs.warn(prefix + outputs.message + ' Task: ' + task.getValue('number'));
            return;
        }

        var requestType = utils.getRequestType(ritm);

        if (!requestType) {
            outputs.message = 'Catalog item is not a supported Snowflake request. Manual fulfillment required.';
            noteOnTask(outputs.message);
            gs.error(prefix + outputs.message);
            return;
        }

        // Defence in depth: validate again right before execution.
        var request = utils.readRequest(ritm, requestType);
        var validation = utils.validateRequest(request, requestType);

        if (!validation.valid) {
            outputs.message = 'Launch blocked by policy: ' + validation.message;
            noteOnTask(outputs.message);
            gs.warn(prefix + outputs.message + ' Task: ' + task.getValue('number'));
            return;
        }

        var baseUrl = String(gs.getProperty('x_412550_catal.awx.base_url', '')).replace(/\/+$/, '');
        var token = String(gs.getProperty('x_412550_catal.awx.token', ''));
        var midServer = String(gs.getProperty('x_412550_catal.awx.mid_server', ''));
        var templateId = parseInt(gs.getProperty(requestType.templateProperty, '0'), 10);

        if (!baseUrl || !token || !(templateId > 0)) {
            outputs.message =
                'AWX is not configured (x_412550_catal.awx.* properties). Manual fulfillment required.';
            noteOnTask(outputs.message);
            gs.error(prefix + outputs.message);
            return;
        }

        var extraVars = utils.buildPayload(request, requestType, ritm, task);

        var rm = new sn_ws.RESTMessageV2();
        rm.setEndpoint(baseUrl + '/api/v2/job_templates/' + templateId + '/launch/');
        rm.setHttpMethod('POST');
        rm.setRequestHeader('Content-Type', 'application/json');
        rm.setRequestHeader('Accept', 'application/json');
        rm.setRequestHeader('Authorization', 'Bearer ' + token);
        rm.setRequestBody(JSON.stringify({ extra_vars: extraVars }));

        if (midServer) {
            rm.setMIDServer(midServer);
        }

        var response = rm.executeAsync();
        response.waitForResponse(60);

        var status = response.getStatusCode();

        if (status !== 201) {
            // Log the status only: response bodies can contain sensitive details.
            outputs.message =
                'AWX launch failed with HTTP ' + status + '. Manual fulfillment required.';
            noteOnTask(outputs.message + ' Check the MID Server and AWX job template ' + templateId + '.');
            gs.error(prefix + outputs.message + ' Task: ' + task.getValue('number'));
            return;
        }

        var body = JSON.parse(response.getBody() || '{}');
        var jobId = String(body.job || body.id || '');

        task.setValue('correlation_id', 'awx:' + jobId);
        task.setValue('correlation_display', 'AWX');
        task.work_notes =
            'AWX job ' + jobId + ' launched (template ' + templateId + ') for ' +
            utils.describeRequest(request, requestType) + '. AWX will update this task when it finishes.';
        task.update();

        outputs.launched = true;
        outputs.job_id = jobId;
        outputs.message = 'AWX job ' + jobId + ' launched for ' + task.getValue('number') + '.';
        gs.info(prefix + outputs.message);

    } catch (error) {
        outputs.message = 'AWX launch failed: ' + error.message + '. Manual fulfillment required.';
        gs.error(prefix + outputs.message);

        if (task.isValidRecord()) {
            noteOnTask(outputs.message);
        }
    }
})(inputs, outputs);
