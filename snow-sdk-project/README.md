# Intelligent Problem Management Platform

This is the SDK/Fluent source project for the IPMP starter implementation. The portal, page, approval table, form, role, ACLs, properties, and Script Includes are declared in Fluent `.now.ts` files. Server behavior is kept in JavaScript Script Includes; the Service Portal widget uses its normal HTML, CSS, AngularJS client script, and server script.

## What is included

- A private Service Portal, dashboard page, and responsive dashboard widget.
- Incident list with priority/state filters, paging, selection, and related-incident context.
- A heuristic repeated-description view. It groups equal short descriptions and CIs in the current result page; it is not Predictive Intelligence and does not assert root cause.
- Optional Predictive Intelligence cluster adapter, called only when requested.
- Optional Now Assist Skill adapter for a selected Incident.
- A Problem draft workflow backed by an IPM approval record. A second manager must approve the saved draft before the server creates a Problem. The browser never supplies an approval boolean.
- A retry path that returns the existing Problem when an approval is already completed. A processing state reduces accidental repeat submits; an interrupted processing record needs an admin to reconcile before retrying.

## Source layout

```text
src/fluent/ipmp/
  approval-form.now.ts
  approval-table.now.ts
  properties.now.ts
  security.now.ts
  script-includes/*.now.ts
  service-portal/{portal,page,widget}.now.ts
  service-portal/{template.html,styles.css,client_script.js,server_script.js}
src/server/script-includes/*.js
```

The `.now.ts` files are declarative SDK metadata. You can read them as JavaScript-style configuration objects; the application logic remains JavaScript.

## Instance setup before first install

1. Use a development or sub-production ServiceNow Australia instance and configure the SDK auth alias.
2. Confirm that `x_412550_ipmp` is the intended scope and that this scope can be used on the target instance.
3. Check that these identifiers are unused before installing: `sp_portal.url_suffix=x_412550_ipmp_ipm`, `sp_page.id=x_412550_ipmp_ipm_dashboard`, and `sp_widget.id=x_412550_ipmp_ipm_dashboard_widget`. Choose new names and update all matching references if any already exist.
4. Assign `x_412550_ipmp.problem_manager` to the authorized managers. The existing `problem_manager` and `admin` roles are also recognized by server checks. Table ACLs protect the IPM approval table.
5. Confirm Incident/Problem ACLs and mandatory fields. Check whether `incident.problem_id` exists and is writable. The implementation sets `problem.first_reported_by_task` when available and links each Incident through `problem_id` only when the field exists and is writable.
6. Configure the Predictive Intelligence solution property and verify the installed API signature/result schema before enabling it. The adapter uses the guide's `sn_ml.MLSolutionFactory` approach, which is instance/plugin dependent.
7. Create, test, publish, and activate the Now Assist Skill. Set its capability ID, configuration ID, and exact input name in the app properties. The OneExtend request and response shape must match your Skill Kit setup.

The app properties are created by `properties.now.ts`. The Predictive Intelligence and Now Assist properties are intentionally empty until configured for a real instance.

## Build and install

From this directory:

```bash
npm install
npm run types
npm run build
npm run deploy
```

`npm run deploy` uses the SDK's configured auth alias. After installing, open the portal at:

```text
https://<your-instance>.service-now.com/x_412550_ipmp_ipm
```

The exact route can vary with the target instance's portal routing. Confirm it from the installed `sp_portal` record.

## Limits to close in the target instance

- Predictive Intelligence cluster methods, names, roles, and payload shape are not verified by this local project.
- Now Assist Skill input/output fields and OneExtend permissions must match the published Skill.
- `GlideRecordSecure` behavior, fields, choices, mandatory fields, role names, and ACLs need instance validation.
- If `incident.problem_id` is absent, only the Problem's first-reported task reference can be set by this starter. Implement the instance's actual multi-Incident relationship before relying on linked counts.
- Verify concurrent Problem creation and recovery from an interrupted `processing` approval against the target instance before production use.
- Repeated descriptions are a lightweight heuristic over the current page. Use the configured PI solution for actual clustering.
- The manager review queue currently displays saved requests in the widget. Users who request a draft cannot approve their own request.

Do not promote this starter to production until the instance-specific items above are confirmed and the complete manager workflow has been exercised with test records.
