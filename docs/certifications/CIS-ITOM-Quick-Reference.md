# ServiceNow CIS-ITOM -- Quick Reference Guide

## 1. IRE Operations -- Know These Cold

| Trigger Word | Answer |
|---|---|
| No duplicate created | IRE Identification Rule working |
| Source not trusted | Reconciliation Rule priority |
| Non-CMDB table | Add to property + CI Identifiers module |
| Transform Map duplicates | Call CMDBTransformUtil().identifyAndReconcile() |

## 2. Business Application vs Application Service

| Keyword | Answer |
|---|---|
| logical portfolio cost risk lifecycle | Business Application (ONE per app) |
| running production operational instance | Application Service (MANY per app) |
| used on Incident | Application Service ALWAYS |

## 3. CSDM Maturity

| Stage | Signal |
|---|---|
| Foundation | Do we have data? |
| Crawl | App Service linked to Business App |
| Walk | Technical Services Dynamic CI Groups Offerings |
| Run | Incident/Change/Problem integrated |
| Fly | Business capabilities cost risk alignment |

## 4. Compliance Score = 0 Trap

Only Desired State Audit and Scripted Audit feed CMDB Health Compliance score.
Any other audit type = score stays 0.

## 5. Duplicate Remediation Not Working Trap

Remediation only works on CIs flagged by IRE where discovery_source = duplicate.
Manually created CIs = remediation will never find them.

## 6. CMDB Data Manager Trigger Words

| Trigger | Answer |
|---|---|
| after X months | CMDB Data Manager |
| approval required | Attestation Policy |
| retire stale CIs | CMDB Data Manager |
| archive records | CMDB Data Manager |

NOT a Scheduled Job. NOT Discovery. NOT Remediation.

## 7. ACC Security Allow List

Agent installed + policy active + script denied = script NOT on ACC Security Allow List.

## 8. System Properties

| Property | Value | Effect |
|---|---|---|
| glide.required.attribute.enabled | false | Discovery failing fast fix |
| glide.identification_engine.multisource_enabled | true | Enable CMDB 360 |
| glide.class.switch.enabled | false | Creates reclassification tasks |
| glide.identification_engine.non_cmdb_tables | table list | Non-CMDB IRE support |

## 9. Static vs Dynamic Reconciliation

| Type | Logic | Requires |
|---|---|---|
| Static | WHO sent the data (source priority number) | Priority rankings |
| Dynamic | WHAT the data says (most reported largest smallest) | Multisource CMDB |

## 10. Discovery 4 Phases

| Phase | Name | What Happens |
|---|---|---|
| 1 | Scan | Find active IPs |
| 2 | Classify | What type of device |
| 3 | Identify | Collect unique attributes |
| 4 | Explore | Full CI details - send to IRE |
