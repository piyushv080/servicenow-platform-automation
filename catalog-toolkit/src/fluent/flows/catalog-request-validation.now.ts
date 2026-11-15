import { StringColumn, BooleanColumn } from '@servicenow/sdk/core'
import { Subflow, wfa } from '@servicenow/sdk/automation'

export const catalog_request_validation = Subflow(
    {
        $id: Now.ID['catalog_request_validation'],
        name: 'Catalog Request Validation',
        description:
            'Validates required information submitted through the Generic IT Service Request catalog item.',
        runAs: 'system',

        inputs: {
            requestType: StringColumn({
                label: 'Request Type',
                mandatory: true,
            }),
            environment: StringColumn({
                label: 'Environment',
                mandatory: true,
            }),
            businessJustification: StringColumn({
                label: 'Business Justification',
                mandatory: true,
            }),
        },

        outputs: {
            isValid: BooleanColumn({
                label: 'Request Is Valid',
                mandatory: true,
            }),
            message: StringColumn({
                label: 'Validation Message',
            }),
        },
    },
    (params) => {
        wfa.flowLogic.if(
            {
                $id: Now.ID['catalog_request_valid'],
                condition: `${wfa.dataPill(params.inputs.requestType, 'string')}ISNOTEMPTY^${wfa.dataPill(params.inputs.environment, 'string')}ISNOTEMPTY^${wfa.dataPill(params.inputs.businessJustification, 'string')}ISNOTEMPTY`,
            },
            () => {
                wfa.flowLogic.assignSubflowOutputs(
                    { $id: Now.ID['catalog_validation_success'] },
                    params.outputs,
                    {
                        isValid: true,
                        message: 'Catalog request validation successful.',
                    },
                )
            },
        )

        wfa.flowLogic.else(
            { $id: Now.ID['catalog_validation_failed'] },
            () => {
                wfa.flowLogic.assignSubflowOutputs(
                    { $id: Now.ID['catalog_validation_failure'] },
                    params.outputs,
                    {
                        isValid: false,
                        message: 'Request type, environment, and business justification are required.',
                    },
                )
            },
        )
    },
)
