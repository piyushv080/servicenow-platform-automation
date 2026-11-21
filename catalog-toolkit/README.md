# Catalog Toolkit — Snowflake Self-Service

A ServiceNow scoped application, written with the ServiceNow SDK (Fluent, TypeScript), that turns
Snowflake requests into an approved, automated and audited lifecycle. Fulfilment is done by AWX
through a MID Server, using the playbooks in the `snowflake-platform-automation` repository.

| | |
|---|---|
| Application scope | `x_412550_catal` |
| ServiceNow SDK | `4.14.2` |
| Development | TypeScript + Fluent, scripts as plain JavaScript (`Now.include`) |
| Deployment | GitHub Actions (`now-sdk install`) |

## Catalog

| Entry | Type | Fulfilled by |
|---|---|---|
| Snowflake Warehouse Request | Catalog item | AWX job template "SF - 10 Request Warehouse" (`10_request_warehouse.yml`) |
| Snowflake Access Request | Catalog item | AWX job template "SF - 11 Request Access" (`11_request_access.yml`) |
| Snowflake Onboarding | Order guide | Both items; shared answers cascaded |

## Lifecycle

```text
Submit -> Validate (SnowflakeRequestUtils policy) -> Approval (Catalog Toolkit Approvers)
  approved -> RITM approved / fulfillment -> SCTASK ("Provision Snowflake warehouse (AWX)" / "Update Snowflake access (AWX)")
           -> Launch AWX Snowflake Job (REST through the MID Server, correlation_id awx:<job id>)
           -> AWX: SCTASK Work in Progress -> Closed Complete / Closed Incomplete + work notes
           -> business rule syncs the RITM state and stage from the SCTASK
  rejected -> RITM closed incomplete, no task, no automation
  invalid  -> work note on the RITM, no approval, no automation
```

If AWX is not configured or the launch fails, the SCTASK gets a work note and stays open for manual
fulfilment.

## Source

| Piece | File (`src/…`) |
|---|---|
| Warehouse catalog item | `fluent/snowflake/snowflake-warehouse-item.now.ts` |
| Access catalog item | `fluent/snowflake/snowflake-access-item.now.ts` |
| Order guide (guide, rule base, cascaded variable sets) | `fluent/snowflake/snowflake-order-guide.now.ts` |
| Fulfilment flows | `fluent/snowflake/snowflake-warehouse-fulfillment.now.ts`, `fluent/snowflake/snowflake-access-fulfillment.now.ts` |
| Validate action (shared) | `fluent/snowflake/actions/validate-snowflake-request.now.ts` + `server/scripts/snowflake/validate-snowflake-request.js` |
| Launch AWX action (shared) | `fluent/snowflake/actions/launch-awx-job.now.ts` + `server/scripts/snowflake/launch-awx-job.js` |
| Policy, routing, AWX payloads | `server/script-includes/snowflake-request-utils.js` (`SnowflakeRequestUtils`) |
| Client validation | `client/validate-snowflake-request.js`, `client/validate-snowflake-access.js` |
| AWX system properties | `fluent/snowflake/snowflake-properties.now.ts` |
| Fulfilment configuration record | `fluent/snowflake/snowflake-fulfillment-config.now.ts` |

**Shared lifecycle components** used by every Snowflake item:

| Component | File (`src/…`) |
|---|---|
| Requester Information variable set | `fluent/catalog-variables.now.ts` |
| `CatalogRequestUtils` (readable RITM description, sensitive-variable filtering) | `fluent/catalog-script-includes.now.ts` + `server/script-includes/catalog-request-utils.js` |
| Create and Assign Catalog Task (duplicate protection, assignment from configuration) | `fluent/actions/create-and-assign-catalog-task.now.ts` + `server/scripts/create-and-assign-catalog-task.js` |
| Synchronize Catalog Request Lifecycle (approved / rejected) | `fluent/actions/sync-catalog-request-lifecycle.now.ts` + `server/scripts/sync-catalog-request-lifecycle.js` |
| Catalog Request Logging | `fluent/actions/catalog-request-logging.now.ts` |
| SCTASK → RITM synchronisation business rule | `fluent/business-rules/sync-ritm-after-catalog-task-update.now.ts` + `server/business-rules/…` |
| Fulfilment configuration table and form | `fluent/toolkit-config.now.ts`, `fluent/config-form.now.ts` |

## Request routing

`SnowflakeRequestUtils.REQUEST_TYPES` maps the catalog item name to its request type, policy, AWX
payload and job-template property. The validate and launch actions are shared, so a new Snowflake
item needs a new entry there — not new actions.

## Policy (mirrors `snowflake-iac/group_vars/all/request_policy.yml`)

| | Warehouse | Access |
|---|---|---|
| Name | `WH_REQ_` + 3–30 of `A–Z 0–9 _` | starts with a letter, 3–41 of `A–Z 0–9 _` |
| Allowed values | XSMALL / SMALL, auto-suspend 60 / 300 / 600 s, monitor `RM_PLATFORM_DEV` | `PLATFORM_READER` / `PLATFORM_ENGINEER`, grant / revoke, email required to grant |
| Environment | `dev` only | `dev` only |
| Justification | ≥ 20 characters | ≥ 20 characters |

Ansible enforces the same rules again and additionally refuses to change any Snowflake user that was
not created by a request.

## Instance setup (values are never stored in this repository)

1. Install and validate a MID Server on a machine that can reach AWX.
2. Set the system properties:
   - `x_412550_catal.awx.base_url` — AWX URL as seen from the MID Server
   - `x_412550_catal.awx.token` — AWX OAuth2 token (write scope) of a user that may only execute the Snowflake templates
   - `x_412550_catal.awx.mid_server` — MID Server name
   - `x_412550_catal.awx.snowflake_warehouse_template_id` — id of "SF - 10 Request Warehouse (dev)"
   - `x_412550_catal.awx.snowflake_access_template_id` — id of "SF - 11 Request Access (dev)"
3. Give AWX's "ServiceNow - PDI" credential a dedicated integration user that can update `sc_task`.
4. Make sure the **Catalog Toolkit Approvers** group exists (the flows reference it).
5. Optional: set a Fulfillment Group on the "Snowflake Platform Fulfillment" configuration and enable Auto Assign.

## Development and deployment

Run from this folder.

```bash
pnpm install
pnpm exec now-sdk build               # type-check and build; updates src/fluent/generated/keys.ts
pnpm exec now-sdk build --frozenKeys  # what CI runs
```

Commit `src/fluent/generated/keys.ts` with every change: it fixes the sys_id of every record, so each
deploy updates existing records instead of creating duplicates. Records removed from the code are
deleted from the instance on the next deploy.

### Deploy with GitHub Actions

`.github/workflows/servicenow-app.yml` builds every push and pull request with
`now-sdk build --frozenKeys` and deploys with `now-sdk install` on a manual run
(**Actions → servicenow-app → Run workflow**) or a push to `main`.

Deploy credentials live in the GitHub environment `servicenow-dev`: variables `SN_SDK_INSTANCE_URL` and
`SN_SDK_AUTH_TYPE` (`basic` or `oauth`), secrets `SN_SDK_USER` / `SN_SDK_USER_PWD` or
`SN_SDK_OAUTH_CLIENT_ID` / `SN_SDK_OAUTH_CLIENT_SECRET`.

## Verification

- `now-sdk build --frozenKeys` passes; every record is present in the build output.
- Offline unit tests of `SnowflakeRequestUtils`: warehouse and access policy, routing, and the AWX
  payload contract (extra-var names match the playbooks).
- Deployed through GitHub Actions; warehouse request verified on the instance from submit through
  approval, SCTASK creation and the AWX launch step (safe "AWX is not configured" path).
- Pending: live AWX launch through the MID Server and AWX closing the SCTASK.
