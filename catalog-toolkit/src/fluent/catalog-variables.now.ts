import {
    VariableSet,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'

export const requester_information = VariableSet({
    $id: Now.ID['requester_information'],

    title: 'Requester Information',
    description: 'Reusable requester contact information',

    type: 'singleRow',
    layout: '2across',
    displayTitle: true,

    variables: {
        requester_name: SingleLineTextVariable({
            question: 'Requester Name',
            mandatory: true,
            order: 100,
        }),

        contact_number: SingleLineTextVariable({
            question: 'Contact Number',
            mandatory: true,
            order: 200,
        }),
    },
})
