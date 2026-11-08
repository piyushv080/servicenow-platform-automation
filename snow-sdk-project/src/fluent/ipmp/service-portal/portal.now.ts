import '@servicenow/sdk/global'
import { ServicePortal } from '@servicenow/sdk/core'
import { ipmDashboardPage } from './page.now'

export const ipmPortal = ServicePortal({
    $id: Now.ID['x_412550_ipmp_ipm_portal'],
    title: 'Intelligent Problem Management',
    urlSuffix: 'x_412550_ipmp_ipm',
    homePage: ipmDashboardPage,
    defaultPortal: false,
    enableFavorites: false,
    inactive: false,
    hidePortalName: false,
})
