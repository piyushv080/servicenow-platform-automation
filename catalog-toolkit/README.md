# ServiceNow Catalog Toolkit

A reusable ServiceNow application for standardizing catalog request intake, validation, approval, fulfillment, and request lifecycle management.

The toolkit currently provides a **Generic IT Service Request** catalog item and supporting configuration, server-side utilities, Flow Designer automation, and fulfillment-task synchronization.

## Project status

- ServiceNow application scope: `x_412550_catal`
- ServiceNow SDK: `4.14.2`
- Development approach: TypeScript + ServiceNow Fluent SDK
- Target instance: ServiceNow Personal Developer Instance (PDI)
- Current development branch: `feature/catalog-toolkit`

## Features built

### 1. Catalog configuration

- Custom configuration table for fulfillment settings.
- Configuration form for managing fulfillment behavior.
- Active configuration lookup from server-side utilities.
- Support for automatic assignment to a configured fulfillment group and optional technician.

### 2. Generic IT Service Request catalog item

- Generic IT Service Request catalog item.
- Requester Information variable set.
- Catalog variables:
  - `requester_name`
  - `contact_number`
  - `request_type`
  - `environment`
  - `business_justification`
  - `required_date`
  - `additional_information`
- Catalog UI policy and client-side validation.

### 3. Server-side validation and utilities

- `CatalogRequestUtils` Script Include.
- Business-justification validation.
- Required-date validation.
- Active fulfillment-configuration lookup.
- Dynamic catalog-variable collection for the submitted Requested Item.
- Human-readable `key: value` request details written to the RITM description.
- Sensitive-variable name filtering for fields matching patterns such as password, secret, token, credential, private key, and API key.
- Collector includes handling for multi-row variable sets (MRVS); MRVS behavior still requires dedicated instance-level verification.

### 4. Flow Designer automation

- Catalog request fulfillment flow.
- Request-variable read action.
- Catalog request validation subflow.
- Approval using the configured Catalog Toolkit Approvers group.
- Approved and rejected lifecycle handling.
- Fulfillment task creation and result logging.

### 5. Fulfillment task management

- Creates a catalog task (`sc_task`) for an approved RITM.
- Prevents duplicate toolkit fulfillment tasks for the same RITM.
- Assigns the task to the configured fulfillment group and optional technician.
- Copies the complete RITM description into the SCTASK description.
- Synchronizes the RITM lifecycle when the fulfillment task changes state.

### 6. Lifecycle synchronization

- Synchronizes the parent RITM when its catalog task is updated.
- Supports fulfillment progress and completion lifecycle handling.
- Includes audit and diagnostic logging in the server-side scripts.

## Important source files

```text
src/
├── client/
│   └── validate-request.js
├── fluent/
│   ├── toolkit-config.now.ts
│   ├── config-form.now.ts
│   ├── catalog-item.now.ts
│   ├── catalog-variables.now.ts
│   ├── catalog-policies.now.ts
│   ├── catalog-client-scripts.now.ts
│   ├── catalog-script-includes.now.ts
│   ├── actions/
│   │   ├── catalog-request-logging.now.ts
│   │   ├── read-catalog-request.now.ts
│   │   ├── create-and-assign-catalog-task.now.ts
│   │   ├── update-catalog-task.now.ts
│   │   └── sync-catalog-request-lifecycle.now.ts
│   ├── flows/
│   │   ├── catalog-request-validation.now.ts
│   │   └── catalog-request-fulfillment.now.ts
│   └── business-rules/
│       └── sync-ritm-after-catalog-task-update.now.ts
└── server/
    ├── script-includes/
    │   └── catalog-request-utils.js
    ├── scripts/
    │   ├── read-catalog-request.js
    │   ├── create-and-assign-catalog-task.js
    │   ├── update-catalog-task.js
    │   └── sync-catalog-request-lifecycle.js
    └── business-rules/
        └── sync-ritm-after-catalog-task-update.js
```

> The tree highlights the main implementation files. Exact generated metadata and supporting project files may vary with the SDK build.

## Request processing flow

1. A requester submits the Generic IT Service Request catalog item.
2. The fulfillment flow reads the Requested Item and its submitted variables.
3. `CatalogRequestUtils` dynamically collects readable catalog variables and formats them as plain-text `key: value` details.
4. The formatted request details are written to the RITM description.
5. The validation subflow checks the request.
6. A valid request is sent for approval.
7. When approved, the fulfillment action creates an SCTASK.
8. The SCTASK receives the same description as the RITM and is assigned using the active fulfillment configuration.
9. Task lifecycle updates synchronize the parent RITM.

## Example request description

The collector produces readable plain text rather than a JSON payload:

```text
========== REQUEST DETAILS ==========
request_number: REQ...
requested_item_number: RITM...
catalog_item: Generic IT Service Request

========== CATALOG VARIABLES ==========
request_type: Access Request
requester_name: Example User
contact_number: 9999999999
environment: Development
business_justification: Access is required for development activities.
required_date: 2026-11-22
additional_information: Example request details.

========== END REQUEST DETAILS ==========
```

The values above are illustrative. Actual values come from the submitted catalog request.

## Technology

- ServiceNow Platform
- ServiceNow Fluent SDK
- ServiceNow SDK CLI
- TypeScript
- JavaScript
- Flow Designer
- Service Catalog
- GlideRecord and ServiceNow server-side APIs
- pnpm
- Node.js

## Development and deployment

Run these commands from the project root.

### Install dependencies

```bash
pnpm install
```

### Build and type-check

```bash
pnpm build
```

### Deploy to the configured ServiceNow instance

```bash
pnpm exec now-sdk install
```

The SDK uses the project's `now.config.json` and configured ServiceNow authentication. Do not commit credentials or instance secrets.

## Verification performed

The following standard-variable fulfillment path was verified on the development PDI:

- Submitted catalog variables were present in the RITM description.
- The fulfillment action accepted the Requested Item reference after input normalization.
- Duplicate-task protection returned the existing task rather than creating a duplicate.
- A fulfillment task was present and assigned to the Help Desk group.
- RITM stage was `fulfillment`.
- RITM and SCTASK descriptions were both 523 characters and matched exactly.

The tested records were RITM0010011 and SCTASK0010006.

### Verification limitations

- Standard catalog variables and description copying were verified.
- MRVS collection is implemented in the collector but has not yet been verified with an actual MRVS submission.
- Sensitive-variable filtering is based on variable names/labels; broader field-type and masking behavior requires additional verification.
- The test-only `Request_LifeCycle.js` file is not part of the application source tree and should not be committed unless it is intentionally promoted into a maintained project test asset.

## Configuration notes

The current development configuration uses:

- Application scope: `x_412550_catal`
- Fulfillment configuration name: `Default IT Fulfillment`
- Fulfillment assignment group: `Help Desk`
- Approval group: `Catalog Toolkit Approvers`

Configure equivalent records and groups in any other ServiceNow instance before expecting the fulfillment flow to run there. Sys_ids from a PDI should not be assumed to exist in another instance.

## Repository workflow

The current working branch is:

```bash
git switch feature/catalog-toolkit
```

Review changes before committing:

```bash
git status --short
git diff
```

Commit only intended application source files and documentation. Keep local test scripts, credentials, generated secrets, and instance-specific exports out of the repository unless deliberately maintained as project assets.

## Snowflake Warehouse Request (AWX via MID Server)

A second catalog item built on the same toolkit lifecycle. The automation side lives in the
`snowflake-platform-automation` repository (`snowflake-iac/10_request_warehouse.yml`).

```text
Submit -> Validate (SnowflakeRequestUtils policy) -> Approval (Catalog Toolkit Approvers)
  approved -> RITM approved/fulfillment -> SCTASK "Provision Snowflake warehouse (AWX)"
           -> Launch AWX Snowflake Job (REST through the MID Server)
           -> AWX: SCTASK Work in Progress -> Closed Complete / Closed Incomplete + work notes
           -> business rule syncs the RITM state and stage from the SCTASK
  rejected -> RITM closed incomplete, no task, no automation
  invalid  -> work note on the RITM, no approval, no automation
```

| Piece | File |
|---|---|
| Catalog item and variables | `src/fluent/snowflake/snowflake-warehouse-item.now.ts` |
| Client validation | `src/client/validate-snowflake-request.js` |
| Policy and AWX payload | `src/server/script-includes/snowflake-request-utils.js` |
| Validate action | `src/fluent/snowflake/actions/validate-snowflake-request.now.ts` |
| Launch AWX action | `src/fluent/snowflake/actions/launch-awx-job.now.ts` |
| Fulfillment flow | `src/fluent/snowflake/snowflake-warehouse-fulfillment.now.ts` |
| Fulfillment configuration record | `src/fluent/snowflake/snowflake-fulfillment-config.now.ts` |
| AWX system properties | `src/fluent/snowflake/snowflake-properties.now.ts` |

Reused from the toolkit: `CatalogRequestUtils`, `sync_catalog_request_lifecycle`, `create_and_assign_catalog_task`
(new optional input `taskShortDescription`; the Generic IT flow is unchanged), `catalog_request_logging` and the
SCTASK -> RITM business rule.

### Instance setup (values are never stored in this repository)

1. Install and validate a MID Server on the machine that can reach AWX.
2. Set the system properties:
   - `x_412550_catal.awx.base_url` — AWX URL as seen from the MID Server, e.g. `http://localhost:8052`
   - `x_412550_catal.awx.token` — AWX OAuth2 token (write scope) of a user that may only execute the Snowflake templates
   - `x_412550_catal.awx.mid_server` — MID Server name
   - `x_412550_catal.awx.snowflake_warehouse_template_id` — id of "SF - 10 Request Warehouse (dev)"
3. Give the AWX "ServiceNow - PDI" credential a dedicated integration user that can update `sc_task`.
4. Optional: set a Fulfillment Group on the "Snowflake Platform Fulfillment" configuration and enable Auto Assign.

Without the properties the flow still creates the SCTASK and adds a work note that manual fulfillment is required.
