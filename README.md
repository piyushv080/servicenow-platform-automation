# ServiceNow Platform Automation — Snowflake Self-Service

> Snowflake requests from the ServiceNow catalog, approved by a human, fulfilled automatically by AWX,
> and written back to the ticket. The whole ServiceNow side is code: ServiceNow SDK (Fluent,
> TypeScript) deployed by GitHub Actions — no Studio clicks, no update sets.

![ServiceNow](https://img.shields.io/badge/ServiceNow-SDK%204.14-green?style=flat-square&logo=servicenow)
![TypeScript](https://img.shields.io/badge/TypeScript-Fluent-blue?style=flat-square&logo=typescript)
![Ansible](https://img.shields.io/badge/Ansible-AWX-red?style=flat-square&logo=ansible)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-black?style=flat-square&logo=githubactions)

```
Service Portal ──► Catalog item / order guide ──► Flow: validate → approve → SCTASK ──► AWX (via MID Server)
                                                                                         │
     RITM closed  ◄── business rule ◄── SCTASK closed with result ◄── Ansible + Snowflake ◄┘
```

## What you can order

| Catalog entry | What happens |
|---|---|
| **Snowflake Warehouse Request** | Validated, approved, then AWX creates a cost-controlled `WH_REQ_*` warehouse with auto-suspend and a budget monitor |
| **Snowflake Access Request** | Validated, approved, then AWX grants or removes one standard role for one person (no admin roles) |
| **Snowflake Onboarding** (order guide) | Both items in one form; shared answers entered once and cascaded, each item approved and fulfilled on its own |

## How it is built

- Catalog items, variables, flows, actions, script includes, client scripts, business rules, system
  properties and the order guide are `.now.ts` / `.js` files under [`catalog-toolkit/src/`](catalog-toolkit/src/).
- Every Snowflake item uses the same lifecycle: validate → approval → SCTASK → *Launch AWX* → AWX closes
  the SCTASK → business rule moves the RITM. One validate action and one launch action serve all
  Snowflake request types.
- Policy is enforced on the form, on the server before approval and right before launch, and again in
  Ansible.
- ServiceNow never holds Snowflake credentials. It only launches fixed AWX job templates through a MID
  Server; AWX settings are instance properties, deploy credentials are GitHub environment secrets.
- `src/fluent/generated/keys.ts` fixes the sys_id of every record, so each deploy updates the same records.

Full description of the application: [`catalog-toolkit/README.md`](catalog-toolkit/README.md).

The fulfilment side (playbooks and the `iacforge.snowflake_iac` custom Ansible modules) lives in
[`snowflake-platform-automation`](https://github.com/piyushv080/snowflake-platform-automation).

## CI/CD

| Workflow | Trigger | What it does |
|---|---|---|
| [`servicenow-app.yml`](.github/workflows/servicenow-app.yml) | Push / pull request | `pnpm install --frozen-lockfile`, `now-sdk build --frozenKeys` |
| | Manual run (deploy = true) or push to `main` | Build, then `now-sdk install` to the instance through the `servicenow-dev` environment |

## Prerequisites

- A ServiceNow instance (a Personal Developer Instance works) and an admin user for deployment
- Node.js 20.18+ and pnpm
- For fulfilment: AWX, a MID Server that can reach it, and the Snowflake automation repository

## About

**Author:** Piyush Verma — ServiceNow & Infrastructure Automation Developer (ServiceNow CSA & CAD)

All code is written using public resources and personal lab environments. No proprietary or
employer-specific code is included.

## License

MIT License — free to use, adapt, and share with attribution.
