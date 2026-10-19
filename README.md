# ServiceNow Platform Automation
> Enterprise-grade ServiceNow automation — ITSM workflows, CMDB management,
> Ansible integrations, and platform engineering for large-scale IT operations.
![ServiceNow](https://img.shields.io/badge/ServiceNow-Yokohama-green?style=flat-square&logo=servicenow)
![Ansible](https://img.shields.io/badge/Ansible-Automation-red?style=flat-square&logo=ansible)
![Python](https://img.shields.io/badge/Python-3.x-blue?style=flat-square&logo=python)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-black?style=flat-square&logo=githubactions)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
---
## About This Repository
This repository contains automation solutions built around the **ServiceNow platform**,
covering CMDB health management, ITSM integrations, Ansible-ServiceNow workflows,
and Knowledge Base automation.
All code is written using public resources and personal lab environments.
No proprietary or employer-specific code is included.
**Author:** Piyush Verma
**Role:** ServiceNow & Infrastructure Automation Developer
**Certifications:**
- ServiceNow CSA & CAD
---
## What This Repo Covers
### CMDB Automation
- CMDB Health scorecard scheduling (Completeness, Correctness, Compliance)
- Desired State Audit configuration for OS compliance tracking
- Orphan CI detection and automated remediation workflows
- Duplicate CI identification and merge automation
- Staleness rule configuration per CI class
### ITSM Integrations
- Incident lifecycle automation using Flow Designer
- Change management workflow automation
- Problem management integration with CMDB impact analysis
- Approval routing based on CI class and support group
### Ansible + ServiceNow Integration
- Ansible playbooks triggered via ServiceNow catalog items
- Automated CMDB updates after Ansible provisioning
- Incident auto-close after Ansible remediation completes
- REST API integration between Ansible AWX and ServiceNow
### Knowledge Base Automation
- GitHub Actions workflow to auto-publish certification study notes
  to ServiceNow Knowledge Base via REST API
- Version-controlled study guides for CIS-ITOM and CIS-DF exams
---
## GitHub Actions Workflows
| Workflow | Trigger | What It Does |
|---|---|---|
| `export-servicenow.yml` | Scheduled (every 2 days) or manual | Archives a named update set; optional supplemental table snapshots |
| `import-servicenow.yml` | Manual | Experimental partial import; does not restore update sets or a full instance |

### Archive a specific update set

The export workflow also archives the selected update set and its Customer Update XML payloads from `sys_update_xml`.

1. Add `SN_INSTANCE`, `SN_USERNAME`, and the rotated `SN_PASSWORD` as GitHub Actions secrets in a **private repository**. The ServiceNow account must be allowed to read `sys_update_set` and `sys_update_xml`.
2. Open **Actions → Export ServiceNow Instance to GitHub → Run workflow**.
3. Enter the exact update set name (for example, `aws update set`). The scheduled run uses `aws update set` by default.
4. Leave **Also export supplemental table snapshots** unchecked for this update-set test. Those broad table calls are optional and run separately from the targeted archive.
5. After the run, review `update-sets/<update-set-name>/manifest.json` and the `customer-updates-*.json` files. The latter contain each Customer Update's `payload` field.

This archives the records captured in that update set; it is not a full-instance backup. Confirm that the catalog item, its related configuration, and the flow changes appear in the update set's **Customer Updates** list before running the workflow. ServiceNow notes that some kinds of platform changes are not represented in `sys_update_xml`, so test restoration into a separate PDI before relying on the archive. The workflow's import counterpart does not restore update sets.
---
## Prerequisites
### ServiceNow
- Personal Developer Instance (PDI) from [developer.servicenow.com](https://developer.servicenow.com)
- Admin access to configure CMDB, Flows, and REST APIs
### GitHub Secrets Required
| Secret | Description |
|---|---|
| `SN_INSTANCE` | ServiceNow instance subdomain, such as `dev452910` |
| `SN_USERNAME` | ServiceNow API account username |
| `SN_PASSWORD` | Rotated ServiceNow API account password |
### Tools
- Python 3.x (for local testing)
- Ansible 2.9+ with `servicenow.itsm` collection
- Git

Contributing
This is a personal portfolio and learning repository. If you find any errors in the study guides or automation scripts, feel free to open an issue.

License
MIT License — free to use, adapt, and share with attribution.

Connect
LinkedIn: Piyush Verma
GitHub: @piyushv080
Built as part of a public ServiceNow automation portfolio. All code uses personal lab environments and public ServiceNow documentation.
