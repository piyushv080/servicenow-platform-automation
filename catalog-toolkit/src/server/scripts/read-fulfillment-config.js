(function execute(inputs, outputs) {
    var config = new GlideRecord('x_412550_catal_config');

    config.addQuery('active', true);
    config.addQuery('name', inputs.configuration_name);
    config.orderByDesc('sys_updated_on');
    config.setLimit(1);
    config.query();

    if (!config.next()) {
        outputs.found = false;
        outputs.auto_assign = false;
        outputs.fulfillment_group = '';
        outputs.assigned_technician = '';
        outputs.message = 'Active fulfillment configuration not found.';
        return;
    }

    outputs.found = true;
    outputs.auto_assign = config.getValue('auto_assign') == '1';
    outputs.fulfillment_group = config.getValue('fulfillment_group') || '';
    outputs.assigned_technician = config.getValue('assigned_technician') || '';
    outputs.message = 'Fulfillment configuration retrieved successfully.';
})(inputs, outputs);
