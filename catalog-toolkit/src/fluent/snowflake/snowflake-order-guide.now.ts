import {
    Record,
    VariableSet,
    SelectBoxVariable,
    MultiLineTextVariable,
} from '@servicenow/sdk/core'

import { requester_information } from '../catalog-variables.now'
import { snowflake_warehouse_request } from './snowflake-warehouse-item.now'
import { snowflake_access_request } from './snowflake-access-item.now'

// "Snowflake Onboarding" order guide: one form that orders a warehouse and access together.
//
// The SDK (4.14.2) has no OrderGuide API, so the guide is built from plain records.
// Record() does not apply platform defaults, so every needed field is set explicitly
// (same values the CatalogItem API writes for the Snowflake items).
//
// Cascade: values entered on the guide (requester information, environment, business
// justification) are copied into the variables with the same names on both items.
// Each item keeps its own flow, approval, SCTASK and AWX job.

const SERVICE_CATALOG = 'e0d08b13c3330100c8b837659bba8fb4'
const CATEGORY = '109f0438c6112276003ae8ac13e7009d'

export const snowflake_onboarding_context = VariableSet({
    $id: Now.ID['snowflake_onboarding_context'],

    title: 'Snowflake Request Context',
    description: 'Shared answers cascaded from the Snowflake Onboarding order guide to its items',

    type: 'singleRow',
    displayTitle: true,

    variables: {
        environment: SelectBoxVariable({
            question: 'Environment',
            mandatory: true,
            order: 100,
            choices: {
                dev: { label: 'Development', sequence: 1 },
            },
        }),

        business_justification: MultiLineTextVariable({
            question: 'Business Justification',
            mandatory: true,
            order: 200,
        }),
    },
})

export const snowflake_onboarding_guide = Record({
    $id: Now.ID['snowflake_onboarding_guide'],
    table: 'sc_cat_item_guide',
    data: {
        name: 'Snowflake Onboarding',
        short_description: 'Get a Snowflake warehouse and access in one request',
        description:
            'Order a cost-controlled Snowflake warehouse and a Snowflake role together. Each part is approved and fulfilled automatically by AWX, and you can remove either part before ordering.',
        active: true,
        state: 'published',
        type: 'item',
        availability: 'on_both',
        access_type: 'restricted',
        sc_catalogs: SERVICE_CATALOG,
        category: CATEGORY,
        meta: 'Snowflake,Onboarding,Data Platform,AWX',
        order: 0,
        cascade: true,
        include_items: true,
        two_step: false,
        order_to_cart: false,
        hide_sp: false,
        no_search: false,
        no_order: false,
        no_order_now: false,
        no_cart: false,
        no_quantity: true,
        no_attachment_v2: false,
        no_save_as_draft: false,
        use_sc_layout: true,
        start_closed: false,
        visible_standalone: true,
        visible_bundle: true,
        visible_guide: true,
    },
})

export const snowflake_onboarding_catalog = Record({
    $id: Now.ID['snowflake_onboarding_catalog'],
    table: 'sc_cat_item_catalog',
    data: {
        sc_cat_item: snowflake_onboarding_guide,
        sc_catalog: SERVICE_CATALOG,
    },
})

export const snowflake_onboarding_category = Record({
    $id: Now.ID['snowflake_onboarding_category'],
    table: 'sc_cat_item_category',
    data: {
        sc_cat_item: snowflake_onboarding_guide,
        sc_category: CATEGORY,
    },
})

// Variable sets on the guide (cascaded to the items by variable name)
export const snowflake_onboarding_requester_set = Record({
    $id: Now.ID['snowflake_onboarding_requester_set'],
    table: 'io_set_item',
    data: {
        sc_cat_item: snowflake_onboarding_guide,
        variable_set: requester_information,
        order: 50,
    },
})

export const snowflake_onboarding_context_set = Record({
    $id: Now.ID['snowflake_onboarding_context_set'],
    table: 'io_set_item',
    data: {
        sc_cat_item: snowflake_onboarding_guide,
        variable_set: snowflake_onboarding_context,
        order: 100,
    },
})

// Rule base: both items are always included; the requester can switch either off (include_items).
export const snowflake_onboarding_rule_warehouse = Record({
    $id: Now.ID['snowflake_onboarding_rule_warehouse'],
    table: 'sc_cat_item_guide_items',
    data: {
        guide: snowflake_onboarding_guide,
        item: snowflake_warehouse_request,
        condition: '',
        order: 100,
    },
})

export const snowflake_onboarding_rule_access = Record({
    $id: Now.ID['snowflake_onboarding_rule_access'],
    table: 'sc_cat_item_guide_items',
    data: {
        guide: snowflake_onboarding_guide,
        item: snowflake_access_request,
        condition: '',
        order: 200,
    },
})
