
function onSubmit() {
    var justification = (
        g_form.getValue('business_justification') || ''
    ).trim()

    if (justification.length < 20) {
        g_form.showFieldMsg(
            'business_justification',
            'Please provide at least 20 characters.',
            'error',
            true
        )

        g_form.addErrorMessage(
            'Business justification must contain at least 20 characters.'
        )

        return false
    }

    var requiredDate = g_form.getValue('required_date')

    if (requiredDate) {
        var today = new Date()

        var year = today.getFullYear()
        var month = String(today.getMonth() + 1).padStart(2, '0')
        var day = String(today.getDate()).padStart(2, '0')

        var todayString = year + '-' + month + '-' + day

        if (requiredDate < todayString) {
            g_form.showFieldMsg(
                'required_date',
                'Required date cannot be in the past.',
                'error',
                true
            )

            g_form.addErrorMessage(
                'Please select today or a future date.'
            )

            return false
        }
    }

    return true
}
