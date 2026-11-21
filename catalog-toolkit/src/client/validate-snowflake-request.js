function onSubmit() {
    // Same rules as SnowflakeRequestUtils and the Ansible policy; the server checks again.
    var name = (g_form.getValue('warehouse_name') || '').trim().toUpperCase()

    if (name !== g_form.getValue('warehouse_name')) {
        g_form.setValue('warehouse_name', name)
    }

    if (!/^WH_REQ_[A-Z0-9_]{3,30}$/.test(name)) {
        g_form.showFieldMsg(
            'warehouse_name',
            'Use WH_REQ_ followed by 3-30 letters, digits or underscores, for example WH_REQ_ANALYTICS.',
            'error',
            true
        )

        g_form.addErrorMessage('Warehouse name does not follow the naming standard.')

        return false
    }

    var justification = (g_form.getValue('business_justification') || '').trim()

    if (justification.length < 20) {
        g_form.showFieldMsg(
            'business_justification',
            'Please provide at least 20 characters.',
            'error',
            true
        )

        g_form.addErrorMessage('Business justification must contain at least 20 characters.')

        return false
    }

    return true
}
