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


    _toVariableKey: function (name, label) {
        var key = String(name || '').trim();

        if (!key) {
            key = String(label || '').trim()
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '_')
                .replace(/^_+|_+$/g, '');
        }

        return key || 'unnamed_variable';
    },

    _isSensitiveVariable: function (name, label) {
        var text = (String(name || '') + ' ' + String(label || '')).toLowerCase();

        return /password|passwd|secret|token|credential|private.?key|api.?key/.test(text);
    },

    _formatVariableValue: function (value) {
        if (value === null || typeof value === 'undefined') {
            return '';
        }

        return String(value)
            .replace(/\r\n/g, '\n')
            .replace(/\r/g, '\n')
            .replace(/\n/g, '\n    ');
    },

    buildRequestDescription: function (requestItem) {
        var lines = [];
        var variables = requestItem.variables.getElements(true);

        lines.push('========== REQUEST DETAILS ==========');
        lines.push('request_number: ' + requestItem.getValue('number'));
        lines.push('requested_item_number: ' + requestItem.getValue('number'));
        lines.push('catalog_item: ' + requestItem.getDisplayValue('cat_item'));
        lines.push('');
        lines.push('========== CATALOG VARIABLES ==========');

        for (var i = 0; i < variables.length; i++) {
            var variable = variables[i];

            try {
                if (variable.canRead && !variable.canRead()) {
                    continue;
                }

                if (variable.isMultiRow()) {
                    var setLabel = variable.getLabel();
                    var setName = variable.getName
                        ? variable.getName()
                        : '';

                    var setKey = this._toVariableKey(setName, setLabel);

                    if (this._isSensitiveVariable(setKey, setLabel)) {
                        continue;
                    }

                    lines.push(setKey + ':');

                    var rows = variable.getRows();
                    var rowCount = variable.getRowCount();

                    for (var j = 0; j < rowCount; j++) {
                        var cells = rows[j].getCells();
                        var rowLines = [];

                        for (var k = 0; k < cells.length; k++) {
                            var cell = cells[k];
                            var cellLabel = cell.getLabel();
                            var cellName = cell.getName
                                ? cell.getName()
                                : '';

                            var cellKey = this._toVariableKey(
                                cellName,
                                cellLabel
                            );

                            if (this._isSensitiveVariable(cellKey, cellLabel)) {
                                continue;
                            }

                            var cellValue = cell.getCellDisplayValue();

                            rowLines.push(
                                '    ' + cellKey + ': ' +
                                this._formatVariableValue(cellValue)
                            );
                        }

                        if (rowLines.length > 0) {
                            lines.push('  -');
                            for (var r = 0; r < rowLines.length; r++) {
                                lines.push(rowLines[r]);
                            }
                        }
                    }

                    lines.push('');
                    continue;
                }

                var question = variable.getQuestion();
                var questionName = question.getName
                    ? question.getName()
                    : '';

                var questionLabel = question.getLabel();
                var key = this._toVariableKey(
                    questionName,
                    questionLabel
                );

                if (this._isSensitiveVariable(key, questionLabel)) {
                    continue;
                }

                var value = question.getDisplayValue
                    ? question.getDisplayValue()
                    : question.getValue();

                lines.push(
                    key + ': ' + this._formatVariableValue(value)
                );

            } catch (variableError) {
                gs.warn(
                    'Catalog Toolkit: Could not read a catalog variable: ' +
                    variableError.message
                );
            }
        }

        lines.push('');
        lines.push('========== END REQUEST DETAILS ==========');

        return lines.join('\n');
    },

    type: 'CatalogRequestUtils'
}
