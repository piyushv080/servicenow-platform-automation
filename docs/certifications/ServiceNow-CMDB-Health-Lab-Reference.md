# ServiceNow CMDB Health Lab Reference (Yokohama)

## Lab Overview

| Field | Value |
|---|---|
| Course | CMDB Health Micro-Certification Simulator (Yokohama) |
| Role | CMDB Administrator (Cloud Dimensions) |
| Goal | Configure Completeness Compliance Correctness scorecards |

---

## TASK 1 - Scheduled Jobs (Twice Daily 7AM and 7PM)

Navigation: All -> Scheduled Script Executions

Jobs to configure:
- CMDB Health Dashboard - Completeness Score Calculation
- CMDB Health Dashboard - Compliance Score Calculation
- CMDB Health Dashboard - Correctness Score Calculation

| Field | Value |
|---|---|
| Run | Periodically |
| Repeat Interval | 0 Days 12 Hours 00 Minutes |
| Starting | Today 07:00:00 |
| Active | Checked |

Real-World: Align job frequency with discovery tool sync cadence.

---

## TASK 2 - Recommended Fields (Completeness)

Navigation: All -> CI Class Manager -> Server -> Health -> Completeness -> Recommended Fields

Fields to add: Location, Owned by, Support group

Result: 110 of 114 CIs missing one or more fields (96% gap)

Real-World: Mark fields used for incident routing asset tracking and ownership reporting.

---

## TASK 3 - Desired State Audit (Compliance)

Navigation: CI Class Manager -> Windows Server -> Health -> Compliance

Certification Filter:
- Name: Windows Servers Filter
- Table: Windows Server [cmdb_ci_win_server]
- Conditions: None (includes ALL 123 Windows Servers)

Certification Template:
- Name: Windows Servers Template
- Audit type: Desired State
- Condition: OS is one of Windows 2012 R2 Standard | Windows 2016 Standard | Windows 2019 Datacenter

Result: Compliance = 56% (54 of 123 servers failed - running unsupported OS)

---

## TASK 4 - Orphan Rules (Correctness)

Navigation: CI Class Manager -> Email Server -> Health -> Correctness -> Orphan Rules

| Field | Value |
|---|---|
| Relationship type | Runs On::Runs |
| Related class | Server [cmdb_ci_server] |

Result: 4 of 11 Email Servers healthy - 7 orphaned

---

## TASK 5 - Staleness Rules (Correctness)

| CI Class | Staleness Period | Reason |
|---|---|---|
| Windows Server | 7 Days | Daily discovery cadence |
| Unix Server | 14 Days | Weekly agentless discovery |

---

## TASK 6 - Remediate Duplicate CIs

Deduplication Wizard for OWA-SD-01:

| Step | Action |
|---|---|
| Select Main CI | Choose oldest record (Created 2012-05-25) |
| Merge Attributes | Cost Center=Customer Support Company=ACME Australia Assigned to=Kyle Ferri |
| Merge Relationships | Move all to Selected (main) CI |
| Duplicate CI Actions | Delete the duplicate |

Result: 122/122 non-duplicates. Single OWA-SD-01 with merged attributes.

---

## TASK 7 - Reclassification System Properties

Navigation: All -> System Properties -> search glide.class

| Property | Set To |
|---|---|
| glide.class.upgrade.auto | false |
| glide.class.downgrade.auto | false |
| glide.class.switch.auto | false |

---

## TASK 8 - CMDB Query Builder (Simple Query)

Query: Windows Servers running approved OS versions
- Starting node: Windows Server
- Filter: OS is one of Windows 2012 R2 Standard | Windows 2016 Standard | Windows 2019 Datacenter

---

## TASK 9 - CMDB Query Builder (Non-CMDB Table)

Query: Critical Incidents with No Owner

| Node | Filter |
|---|---|
| Configuration Item | Owned by is empty |
| Incident (Non-CMDB Tables tab) | Priority is 1 - Critical |

---

## TASK 10 - Remediation Workflow

Workflow: Remediate Orphan WF
Table: Orphan CI Remediation [orphan_ci_remediation]

Script Activity:
  current.short_description = 'Workflow launched for task number ' + current.number;
  current.update();

Flow: Begin -> Run Script -> End -> Publish

Remediation Rule:
- Name: Remediate Orphans
- Task type: Orphan CI Remediation
- Execution: Manual
- Workflow: Remediate Orphan WF

Enable: All -> Health Preference -> Health Metrics -> Orphan -> Create Task ON

---

## Quick Fire Exam Answers

| Scenario | Answer |
|---|---|
| Compliance score = 0 | Wrong audit type - use Desired State or Scripted only |
| Duplicate remediation not working | CIs not IRE-flagged - manual CIs excluded |
| ACC script denied | Add to ACC Security Allow List |
| IRE not working for sys_user | Add property + CI Identifiers module |
| Discovery failing | Set glide.required.attribute.enabled = false (temporary) |
| retire + approval + stale | CMDB Data Manager Policy |
| Transform Map duplicates | CMDBTransformUtil().identifyAndReconcile() |
