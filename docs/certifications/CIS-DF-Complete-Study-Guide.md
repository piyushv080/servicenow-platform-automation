# ServiceNow CIS-DF -- Complete Study Notes | CMDB + CSDM + Data Governance

## 1. CMDB Core Tables

| Table | Description |
|---|---|
| cmdb_ci | Base CI table - parent of all CI classes |
| cmdb_ci_server | Server CIs |
| cmdb_ci_database | Database CIs |
| cmdb_ci_appl | Application CIs |
| cmdb_rel_ci | Stores all CI relationships |
| cmdb_multisource_data | Per-source attribute values (CMDB 360) |

## 2. CI Lifecycle Stages

| Stage | Meaning |
|---|---|
| Planned | CI planned but not yet procured |
| Installed | CI physically installed |
| In Use | CI actively being used |
| Retired | CI no longer in active use |
| Decommissioned | CI permanently removed from inventory |

## 3. IRE -- Identification and Reconciliation Engine

Identification: Does the CI already exist?
- Match found -> Update existing CI
- No match found -> Insert new CI
- Uses: Serial Number, Name + IP Address, MAC Address

Reconciliation: Which source wins?
- Lower priority number = higher trust = wins
- Discovery (100) > SCCM (200) > Manual Entry (300)

| Type | Logic | Requires |
|---|---|---|
| Static | WHO sent the data (source priority) | Priority rankings |
| Dynamic | WHAT the data says (most reported largest smallest) | Multisource CMDB |

Data Refresh Rule: When a high-priority source stops updating,
allow lower-priority source to update after a staleness threshold.

IRE for Non-CMDB Tables:
1. Add table to: glide.identification_engine.non_cmdb_tables
2. Create Identification Rule in CI Identifiers module (NOT CI Class Manager)

## 4. Multisource CMDB (CMDB 360)

- Table: cmdb_multisource_data
- Enable: glide.identification_engine.multisource_enabled = true
- Use cases: source conflicts gap analysis 360-degree CI view
- Requires: ITOM Discovery license

## 5. CMDB Health Scorecards

| Scorecard | What It Measures | Key Detail |
|---|---|---|
| Completeness | Required and recommended fields filled | Missing required = may block CI creation |
| Correctness | No duplicates orphans stale CIs | Duplicates -> De-duplication Tasks |
| Compliance | Passes audit rules | Only Desired State + Scripted Audit feed this score |

## 6. CMDB Data Manager

| Policy | Action |
|---|---|
| Retire | Changes lifecycle_stage to Retired |
| Archive | Moves CI to archive tables |
| Delete | Permanently removes CI |
| Attest | Sends task to CI owner for confirmation |

## 7. CSDM Domains

| Domain | Number | Key CIs |
|---|---|---|
| Design | 1 | Business Capability Business Application Application Service |
| Foundation | 2 | Business Process Location User Company |
| Manage Technical Services | 3 | Application Service Technical Service Infrastructure CI |
| Sell / Consume | 4 | Business Service Service Offering Service Catalog |
| Build | 5 | Development components Code repositories |

## 8. CSDM Maturity Model

| Stage | Theme | Focus Question |
|---|---|---|
| Foundation | Data availability | Do we have the data? |
| Crawl | Relationships | Are things connected? |
| Walk | Service structure | Is the model structured? |
| Run | Operations | Are we using it in ops? |
| Fly | Business value | Are we driving business value? |

## 9. CMDB Success Framework -- 3 Pillars

| Pillar | Purpose | Tools |
|---|---|---|
| Ingest | Get data into CMDB reliably | Discovery Service Graph Connectors IntegrationHub ETL |
| Govern | Ensure data quality and lifecycle | CMDB Health Data Manager CI Class Manager Duplicate Remediator |
| Insight | Extract value from data | CMDB Query Builder Unified Map CSDM Dashboard |

## 10. Final Quick Fire Cheat Sheet

| Keyword Trigger | Answer |
|---|---|
| retire + approval + stale | CMDB Data Manager Policy |
| IRE on sys_user / non-CMDB table | Add property + CI Identifiers module |
| running / operational / production | Application Service (Service Instance) |
| cost / risk / lifecycle / logical | Business Application |
| mandatory field / Discovery failing | glide.required.attribute.enabled = false |
| non-CMDB + Incident + CMDB query | Non-CMDB Tables feature in CMDB Query Builder |
| remediation failing / duplicates | CIs not IRE-flagged |
| audit runs but score zero | Wrong audit type - use Desired State or Scripted |
| execution denied (ACC) | Add script to ACC Security Allow List |
| App Service linked to Business App | Crawl maturity stage |
| Incident / Change / Problem integration | Run maturity stage |
| Dynamic CI Groups / patch management | Walk maturity stage |
| no duplicates from Transform Map | CMDBTransformUtil().identifyAndReconcile() |
| pillars of CMDB success | Ingest Govern Insight |
