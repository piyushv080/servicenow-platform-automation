import '@servicenow/sdk/global'
import { SPPage } from '@servicenow/sdk/core'
import { ipmDashboardWidget } from './widget.now'

export const ipmDashboardPage = SPPage({
    pageId: 'x_412550_ipmp_ipm_dashboard',
    title: 'Intelligent Problem Dashboard',
    public: false,
    draft: false,
    containers: [{
        $id: Now.ID['x_412550_ipmp_ipm_dashboard_container'],
        name: 'IPM Dashboard',
        width: 'container-fluid',
        order: 100,
        rows: [{
            $id: Now.ID['x_412550_ipmp_ipm_dashboard_row'],
            order: 100,
            columns: [{
                $id: Now.ID['x_412550_ipmp_ipm_dashboard_column'],
                size: 12,
                sizeSm: 12,
                sizeXs: 12,
                order: 100,
                instances: [{
                    $id: Now.ID['x_412550_ipmp_ipm_dashboard_instance'],
                    widget: ipmDashboardWidget,
                    order: 100,
                    active: true,
                }],
            }],
        }],
    }],
})
