function onSubmit() {
    // Same rules as SnowflakeRequestUtils and the Ansible policy; the server checks again.
    var user = (g_form.getValue('snowflake_username') || '').trim().toUpperCase()

    if (user !== g_form.getValue('snowflake_username')) {
        g_form.setValue('snowflake_username', user)
    }

    if (!/^[A-Z][A-Z0-9_]{2,40}$/.test(user)) {
        g_form.showFieldMsg(
            'snowflake_username',
            'Use uppercase letters, digits and underscores, starting with a letter, for example JANE_DOE.',
            'error',
            true
        )

        g_form.addErrorMessage('Snowflake user name does not follow the naming standard.')

        return false
    }

    var email = (g_form.getValue('user_email') || '').trim()

    if (g_form.getValue('access_action') === 'grant' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        g_form.showFieldMsg('user_email', 'A valid email address is required to grant access.', 'error', true)

        g_form.addErrorMessage('Please provide the user email.')

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
