import { BusinessRule } from '@servicenow/sdk/core'

export const sync_ritm_after_catalog_task_update = BusinessRule({
    $id: Now.ID['sync_ritm_after_catalog_task_update'],
    name: 'Catalog Toolkit - Synchronize RITM After Task Update',
    table: 'sc_task',
    when: 'after',
    action: ['update'],
    filterCondition: 'stateVALCHANGES',
    order: 200,
    active: true,
    description:
        'Synchronizes the parent requested item when a catalog task state changes.',
    script: Now.include(
        '../../server/business-rules/sync-ritm-after-catalog-task-update.js'
    ),
})
