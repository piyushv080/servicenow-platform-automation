var CatalogRequestUtils = Class.create()

CatalogRequestUtils.prototype = {
    initialize: function () {},

    validateBusinessJustification: function (justification) {
        if (!justification) {
            return {
                valid: false,
                message: 'Business justification is required.'
            }
        }

        var text = String(justification).trim()

        if (text.length < 20) {
            return {
                valid: false,
                message: 'Business justification must contain at least 20 characters.'
            }
        }

        return {
            valid: true,
            message: 'Business justification is valid.'
        }
    },

    validateRequiredDate: function (requiredDate) {
        if (!requiredDate) {
            return {
                valid: false,
                message: 'Required date is mandatory.'
            }
        }

        var selectedDate = new GlideDate()
        selectedDate.setValue(String(requiredDate))

        var today = new GlideDate()
        today.setValue(gs.nowDate())

        if (selectedDate.getValue() < today.getValue()) {
            return {
                valid: false,
                message: 'Required date cannot be in the past.'
            }
        }

        return {
            valid: true,
            message: 'Required date is valid.'
        }
    },

    getActiveConfiguration: function (configurationName) {
        if (!configurationName) {
            return null
        }

        var gr = new GlideRecord('x_412550_catal_config')
        gr.addQuery('name', String(configurationName))
        gr.addQuery('active', true)
        gr.setLimit(1)
        gr.query()

        if (!gr.next()) {
            return null
        }

        return {
            sys_id: gr.getUniqueValue(),
            name: gr.getValue('name'),
            active: gr.getValue('active') == '1',
            integration_enabled: gr.getValue('integration_enabled') == '1',
            description: gr.getValue('description')
        }
    },

    type: 'CatalogRequestUtils'
}
