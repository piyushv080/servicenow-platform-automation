import { Flow, wfa, trigger } from '@servicenow/sdk/automation'
import { catalog_request_logging } from '../actions/catalog-request-logging.now'

Flow(
    {
        $id: Now.ID['catalog_request_fulfillment'],
        name: 'Generic IT Request - Fulfillment',
        runAs: 'system',
    },

    wfa.trigger(
        trigger.application.serviceCatalog,
        {
            $id: Now.ID['generic_request_catalog_trigger'],
        },
        {
            run_flow_in: 'background',
        },
    ),

    (params) => {
        wfa.action(
            catalog_request_logging,
            {
                $id: Now.ID['log_catalog_request'],
            },
            {
                requestNumber: wfa.dataPill(
                    params.trigger.request_item.number,
                    'string',
                ),
                logMessage: 'Generic IT Service Request submitted and fulfillment flow started.',
            },
        )
    },
)
