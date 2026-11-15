(function execute(inputs, outputs) {
    var item = new GlideRecord('sc_req_item')

    if (!item.get(inputs.request_item_id)) {
        outputs.found = false
        outputs.message = 'Requested item was not found.'
        return
    }

    outputs.found = true

    // Dynamically collect every readable catalog variable, including MRVS.
    var requestUtils = new CatalogRequestUtils()
    var requestDescription = requestUtils.buildRequestDescription(item)

    item.setValue('description', requestDescription)

    var descriptionUpdate = item.update()

    if (!descriptionUpdate) {
        outputs.message = 'Could not save dynamic catalog variables to RITM description.'
        gs.error(
            'Catalog Toolkit: Failed to save request payload for ' +
            item.getValue('number')
        )
        return
    }

    outputs.request_type = String(item.variables.request_type || '')
    outputs.environment = String(item.variables.environment || '')
    outputs.business_justification = String(
        item.variables.business_justification || ''
    )
    outputs.required_date = String(item.variables.required_date || '')
    outputs.message = 'Catalog request variables retrieved.'
})(inputs, outputs)
