(function execute(inputs, outputs) {
    outputs.found = false;
    outputs.valid = false;
    outputs.warehouse_name = '';
    outputs.message = '';

    var prefix = 'Catalog Toolkit (Snowflake): ';
    var utils = new SnowflakeRequestUtils();
    var requestItemId = utils.resolveSysId(inputs.request_item_id);

    try {
        var ritm = new GlideRecord('sc_req_item');

        if (!requestItemId || !ritm.get(requestItemId)) {
            outputs.message = 'Requested item was not found.';
            gs.error(prefix + outputs.message + ' Sys ID: ' + requestItemId);
            return;
        }

        outputs.found = true;

        // Same readable key: value description as the Generic IT flow (copied to the SCTASK later).
        ritm.setValue('description', new CatalogRequestUtils().buildRequestDescription(ritm));

        var request = utils.readWarehouseRequest(ritm);
        var result = utils.validateWarehouseRequest(request);

        outputs.valid = result.valid;
        outputs.warehouse_name = request.warehouseName;
        outputs.message = result.message;

        if (!result.valid) {
            ritm.work_notes = 'Snowflake request validation failed: ' + result.message;
        }

        if (!ritm.update()) {
            gs.error(prefix + 'Could not update ' + ritm.getValue('number') + ' after validation.');
        }

        gs.info(prefix + ritm.getValue('number') + ' validation: ' + (result.valid ? 'passed' : 'failed'));

    } catch (error) {
        outputs.valid = false;
        outputs.message = 'Snowflake request validation failed: ' + error.message;
        gs.error(prefix + outputs.message);
    }
})(inputs, outputs);
