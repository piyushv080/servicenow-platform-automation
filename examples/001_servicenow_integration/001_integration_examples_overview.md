# ServiceNow Integration Examples

This numbered archive brings together the Ansible examples from the former `servicenow_integration-main` folder. The names describe the file contents and preserve a reading order. These are learning examples, not production-ready playbooks.

## CMDB and configuration-item examples

- [002 — Append a CI host to a server list](002_append_ci_to_server_list.yml)
- [003 — List configuration items](003_list_all_configuration_items.yml)
- [004 — Create a CI from host facts](004_create_ci_from_host_facts.yml)
- [005 — Display Ansible host facts](005_display_host_configuration_facts.yml)
- [006 — Look up a configuration item](006_lookup_configuration_item.yml)
- [007 — Test ServiceNow connectivity](007_test_servicenow_connectivity.yml)
- [Tasks overview](tasks/016_reusable_ci_tasks_overview.md)

## Incident and AWX examples

- [Incident example overview](inc/014_incident_example_overview.md)
- [AWX incident workflow overview](awx-snow-incident-integration/008_awx_incident_workflows_overview.md)

## Test examples and assets

- [Test examples overview](test/019_test_examples_overview.md)
- [Font Awesome 4.4.0 stylesheet](assets/021_font_awesome_4_4_0.min.css)

## Safe use

The examples use `SERVICENOW_INSTANCE`, `SERVICENOW_USER`, and `SERVICENOW_PASSWORD` environment variables or equivalent AWX credentials instead of a tenant URL or embedded password. Supply credentials through a secret store. Use a development instance and synthetic records. Review each playbook's read/write behavior before running it; some examples create, update, reassign, or close records. TLS certificate validation is enabled on ServiceNow HTTP requests.

The CI task example loads [022 — Example CI variables](vars/022_create_ci_example_variables.yml). Replace the synthetic values before using it.
