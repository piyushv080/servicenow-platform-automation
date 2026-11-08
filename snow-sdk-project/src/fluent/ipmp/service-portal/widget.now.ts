import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const ipmDashboardWidget = SPWidget({
    $id: Now.ID['x_412550_ipmp_ipm_dashboard_widget'],
    id: 'x_412550_ipmp_ipm_dashboard_widget',
    name: 'Intelligent Problem Dashboard',
    description: 'Incident pattern investigation and manager-reviewed Problem creation.',
    htmlTemplate: Now.include('./template.html'),
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    customCss: Now.include('./styles.css'),
})
