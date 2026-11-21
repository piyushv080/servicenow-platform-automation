import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    access_request_details_policy: {
                        table: 'catalog_ui_policy'
                        id: '228acba5c19446599b92f79cb989886d'
                    }
                    assign_catalog_task: {
                        table: 'sys_hub_action_type_definition'
                        id: '3ef594acf66a422da96a6c729001a5ee'
                    }
                    assign_catalog_task_script: {
                        table: 'sys_hub_step_instance'
                        id: '938b82413cae435eb1c6a5884e6ff953'
                    }
                    automatic_assignment_disabled: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '9e07c18e892541849174d28ae8681d91'
                        deleted: true
                    }
                    automatic_assignment_enabled: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '950b5439a1b5465496d463b90f3639f9'
                        deleted: true
                    }
                    awx_base_url_property: {
                        table: 'sys_properties'
                        id: 'bb40b343fe144ed5a1dd039f30002907'
                    }
                    awx_mid_server_property: {
                        table: 'sys_properties'
                        id: '71bd069dbe0347e3bae7137bc6f4e0bd'
                    }
                    awx_token_property: {
                        table: 'sys_properties'
                        id: '4ef59cd33b6f4a62968ef91739064c99'
                    }
                    awx_warehouse_template_id_property: {
                        table: 'sys_properties'
                        id: 'e47608d42f044162b27ef7df4f3634c9'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '7b94ae1e78834f05b9ee270705a084da'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'ddb94cbf24ff44f8b2de3115367a887e'
                        deleted: true
                    }
                    catalog_request_approval: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'b4dd809de7174984a49b0412080fc1c4'
                    }
                    catalog_request_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '79a8d35a3a474fae9b2f322ff52bc8b3'
                    }
                    catalog_request_fulfillment: {
                        table: 'sys_hub_flow'
                        id: '6e1091481a854d5392207ad270e08466'
                    }
                    catalog_request_log_step: {
                        table: 'sys_hub_step_instance'
                        id: '4965ceb0f53343b39564b7044321b2a3'
                    }
                    catalog_request_logging: {
                        table: 'sys_hub_action_type_definition'
                        id: 'be3949ef96d8457fb6c1efa6f4621aba'
                    }
                    catalog_request_not_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '912293c4bbfd4f64b1e156af1fdad209'
                    }
                    catalog_request_valid: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '6f6c857d3fdd4e6b89fdffdb5e3edd84'
                    }
                    catalog_request_validation: {
                        table: 'sys_hub_flow'
                        id: '8c74266b0b45403b85c13359e01f67c6'
                    }
                    catalog_validation_failed: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '690f3100d01e46f3bfabdf4a96f2cb3d'
                    }
                    catalog_validation_failure: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'b5b00be11ad042559ba0daf5310fd820'
                    }
                    catalog_validation_success: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '34b49e0c4c204e808910cc541cd5b571'
                    }
                    CatalogRequestUtils: {
                        table: 'sys_script_include'
                        id: '6f3b740ace044f56b4e79d5ad21ccbbe'
                    }
                    create_and_assign_catalog_task: {
                        table: 'sys_hub_action_type_definition'
                        id: '846bedc96ac1404ca575e9caf1147300'
                    }
                    create_and_assign_catalog_task_instance: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9945c2835ef94bb1b2b65fbebe584f6c'
                    }
                    create_and_assign_catalog_task_script: {
                        table: 'sys_hub_step_instance'
                        id: 'c59b2e0cb52146668e1921a2084e34f7'
                    }
                    create_fulfillment_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '01387dd80ad4457e9015a4503e33754c'
                        deleted: true
                    }
                    create_snowflake_catalog_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '713be2101c4e4fcbb39c004caef9048b'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '1f86da27f68c414e99e8f986e74169b3'
                        deleted: true
                    }
                    fulfillment_config_found: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'e22b96eb03d0431f99daa9c222337d99'
                        deleted: true
                    }
                    fulfillment_config_missing: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'a361ec17183c4b4cab7b9b58c4d5ddd0'
                        deleted: true
                    }
                    generic_it_service_request: {
                        table: 'sc_cat_item'
                        id: 'a676a847b4e84741afc14fe6f675bfbd'
                    }
                    generic_request_catalog_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '6d942fd9afda41ebbd98b0175256bb71'
                    }
                    generic_request_validation: {
                        table: 'catalog_script_client'
                        id: '61b676ac7aac4ee09718fe74aeb056f7'
                    }
                    launch_awx_job: {
                        table: 'sys_hub_action_type_definition'
                        id: 'a5527048ebde44e7aaeaa65e330d2baa'
                    }
                    launch_awx_job_script: {
                        table: 'sys_hub_step_instance'
                        id: 'a2b090027b094f189d914abe81bf3e98'
                    }
                    launch_snowflake_awx_job: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'bf01d00f6b5640a68ce30fec3bea2a66'
                    }
                    log_approval_rejection: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd784d676f1c04cd38e88b073c0c91410'
                    }
                    log_assignment_disabled: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'f83e7509a4fe489994928619a33efc16'
                        deleted: true
                    }
                    log_assignment_success: {
                        table: 'sys_hub_action_instance_v2'
                        id: '08e2c8904e1948369a27072c9fc73184'
                        deleted: true
                    }
                    log_catalog_request: {
                        table: 'sys_hub_action_instance_v2'
                        id: '07802911f3244e76b412e280bf87da4f'
                        deleted: true
                    }
                    log_config_missing: {
                        table: 'sys_hub_action_instance_v2'
                        id: '00e98ffe1c1d4afc893ac3b974bd419e'
                        deleted: true
                    }
                    log_fulfillment_result: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'c5a5dc3a11ea45f59da9cff041f41c28'
                    }
                    log_request_not_found: {
                        table: 'sys_hub_action_instance_v2'
                        id: '89134d77cdd14a6e896bbf7d15ebd79c'
                    }
                    log_request_success: {
                        table: 'sys_hub_action_instance_v2'
                        id: '6dc81256c89f4596a7e68b9c50e50dd5'
                        deleted: true
                    }
                    log_snowflake_awx_launch: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2d51894ea4ad4051b6bb9e9421f22813'
                    }
                    log_snowflake_rejection: {
                        table: 'sys_hub_action_instance_v2'
                        id: '50704e8041f944c4bd43594988a9bfd5'
                    }
                    log_snowflake_task_failure: {
                        table: 'sys_hub_action_instance_v2'
                        id: '4c1164fc706d4ef4a056a0a137324c93'
                    }
                    log_snowflake_validation_failure: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e0d82bc5f641475496ef56f272922b4a'
                    }
                    log_validation_failure: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9999bb8bba924b97949a14856f2e56c0'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '07b77f6824384073a8bd12b4360c8146'
                    }
                    read_catalog_request: {
                        table: 'sys_hub_action_type_definition'
                        id: '5e464c59519d4bb983b4823259cff23e'
                    }
                    read_catalog_request_script: {
                        table: 'sys_hub_step_instance'
                        id: 'a4fcd570c3db451ba64276cfd3ca883d'
                    }
                    read_default_fulfillment_config: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'aef6e10b840c451caa886ef6dc9ebfd8'
                        deleted: true
                    }
                    read_fulfillment_config: {
                        table: 'sys_hub_action_type_definition'
                        id: 'b8f937f312c64a2c98296c47b37bad91'
                    }
                    read_fulfillment_config_script: {
                        table: 'sys_hub_step_instance'
                        id: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                    }
                    read_request_variables: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9031620766dc4855946b6c6a25a7014d'
                    }
                    request_found: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '9218f555603544158e4739dab6bb18d1'
                    }
                    request_is_valid: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'bc441c32ef2a4f76a52656d95ad8ad36'
                    }
                    request_not_found: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '0535c3d4a2fb49d8ae7576b07a0fa69a'
                    }
                    request_validation_failed: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'fbde5f74e88d412889d04880629254ff'
                    }
                    requester_information: {
                        table: 'item_option_new_set'
                        id: '10a720b0e72848c8a10d2783cc7938b3'
                    }
                    snowflake_fulfillment_config: {
                        table: 'x_412550_catal_config'
                        id: 'ea063b64809a40d281f022205894abaf'
                    }
                    snowflake_request_approval: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e2f605d5d1e5437a83f0efeb929d3b5c'
                    }
                    snowflake_request_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '838dc4ce0c7946e591f17b1484bff1e2'
                    }
                    snowflake_request_invalid: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '178feefe2c5742758152be406dad22c7'
                    }
                    snowflake_request_is_valid: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '58054250dc4741fb8adafe395e8da716'
                    }
                    snowflake_request_not_approved: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'fc1faccd0956431fbd94677b759fb000'
                    }
                    snowflake_request_validation: {
                        table: 'catalog_script_client'
                        id: '24aa31fdec1b4fd5929ab1ec7d947979'
                    }
                    snowflake_task_created: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '2194514038974ff6ad4180324ba334eb'
                    }
                    snowflake_task_not_created: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '6d8a6354f82d4d3dae5d394cf8f06848'
                    }
                    snowflake_warehouse_catalog_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'b2c44de574c1453993fca74064106549'
                    }
                    snowflake_warehouse_fulfillment: {
                        table: 'sys_hub_flow'
                        id: '03a2b00954e14cca9f79e1663ecbdcbd'
                    }
                    snowflake_warehouse_request: {
                        table: 'sc_cat_item'
                        id: '7fff5c8050a84ae08ece2beef289932a'
                    }
                    SnowflakeRequestUtils: {
                        table: 'sys_script_include'
                        id: '2599b584eb4f4d7c885a209edec6f137'
                    }
                    'src_server_business-rules_sync-ritm-after-catalog-task-update_js': {
                        table: 'sys_module'
                        id: '35aabc48ecea441f932c14b9c7d19d93'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'df0653f5b2ab4fd5a750d7a245239bbd'
                    }
                    'src_server_script-includes_catalog-request-utils_js': {
                        table: 'sys_module'
                        id: '8964153184bb4355b24c469fd5320fda'
                    }
                    'src_server_script-includes_snowflake-request-utils_js': {
                        table: 'sys_module'
                        id: '3d866c42124142cfbbd773544f2723f8'
                    }
                    'src_server_scripts_assign-catalog-task_js': {
                        table: 'sys_module'
                        id: '6667925dd6a6405c9c9811294606005a'
                    }
                    'src_server_scripts_create-and-assign-catalog-task_js': {
                        table: 'sys_module'
                        id: 'bd94060c9db34f06bb4cc948078e39a7'
                    }
                    'src_server_scripts_read-catalog-request_js': {
                        table: 'sys_module'
                        id: '5ae9a52f502640e7a9a4eb5a97c5fc50'
                    }
                    'src_server_scripts_read-fulfillment-config_js': {
                        table: 'sys_module'
                        id: '1f44b38b2d83467e816e88f85a050ef9'
                    }
                    'src_server_scripts_snowflake_launch-awx-job_js': {
                        table: 'sys_module'
                        id: '1f01b5a68299426895c85bb65f142cc5'
                    }
                    'src_server_scripts_snowflake_validate-snowflake-request_js': {
                        table: 'sys_module'
                        id: '9284af0b501f4240ac445f611f7d7fe5'
                    }
                    'src_server_scripts_sync-catalog-request-lifecycle_js': {
                        table: 'sys_module'
                        id: '4212745e86e24010950841aed2533eba'
                    }
                    'src_server_scripts_update-catalog-task_js': {
                        table: 'sys_module'
                        id: '20e0c40a90e1435b8b6940f08f9552a8'
                    }
                    sync_approved_request_lifecycle: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd78a825c71084edfb7f88bf68179f891'
                    }
                    sync_catalog_request_lifecycle: {
                        table: 'sys_hub_action_type_definition'
                        id: 'b26a1494969c4bbcb87eaa053808313d'
                    }
                    sync_catalog_request_lifecycle_script: {
                        table: 'sys_hub_step_instance'
                        id: '6c399e42a5fa44b983ce73f7091a030f'
                    }
                    sync_rejected_request_lifecycle: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e7288798a1584f12a298221d22a1edf5'
                    }
                    sync_ritm_after_catalog_task_update: {
                        table: 'sys_script'
                        id: 'c347275683f744f78dd129e9ac87af80'
                    }
                    sync_snowflake_approved_lifecycle: {
                        table: 'sys_hub_action_instance_v2'
                        id: '328fb7c3289d4a2bb7861a8f005c2dfc'
                    }
                    sync_snowflake_rejected_lifecycle: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2013a357e1fd406884a623a75187e58e'
                    }
                    task_assignment_failed: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '15159c80e6cc40fdb9e1d2a3a222bb8d'
                        deleted: true
                    }
                    task_assignment_successful: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '10119514de574e4eb81539339075db4b'
                        deleted: true
                    }
                    update_catalog_task: {
                        table: 'sys_hub_action_type_definition'
                        id: 'caa4b2278e504d3f91f9449890c8f961'
                    }
                    update_catalog_task_script: {
                        table: 'sys_hub_step_instance'
                        id: '5c1e331692644b329a8554a3604a07c7'
                    }
                    validate_catalog_request: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'ffa07f5c4e804ab98623e7ee4c40a965'
                    }
                    validate_snowflake_request: {
                        table: 'sys_hub_action_type_definition'
                        id: 'c5e1323322b647e2b7a4b034577958b7'
                    }
                    validate_snowflake_request_script: {
                        table: 'sys_hub_step_instance'
                        id: '754e1ddbcff34bb1baf8354cb75d3f79'
                    }
                    validate_snowflake_warehouse_request: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0e7aff973e594b43a46a278e0cccc802'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0030b4a582ef4fedb214513996b9da51'
                        key: {
                            name: 'var__m_sys_hub_flow_output_8c74266b0b45403b85c13359e01f67c6'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '004ba926f0f642e48d97f2e94262b53d'
                        key: {
                            model: '846bedc96ac1404ca575e9caf1147300'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '00629b968b3c4ff3a62b4971e9d6d152'
                        key: {
                            model: 'be3949ef96d8457fb6c1efa6f4621aba'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '0133e4b2b09942c09c3aa13e3c47b0b1'
                        key: {
                            model: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                            element: 'auto_assign'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '014dc148fadd40b49b42116e038e26cb'
                        key: {
                            model: '8c74266b0b45403b85c13359e01f67c6'
                            element: 'businessJustification'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01599c7194074fe599307802e794ed85'
                        key: {
                            name: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '01d35e0271f14545b391d8567b8c34fa'
                        key: {
                            document_key: '5c1e331692644b329a8554a3604a07c7'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '03f001a4b6284a20980b56c7d512a1dd'
                        key: {
                            id: 'b26a1494969c4bbcb87eaa053808313d'
                            table: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            field: 'updated'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '0586b39d34504fbdb9b9d363037ea5dc'
                        key: {
                            model: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                            element: 'configuration_name'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '059e982c3f874df08f3e93dcd2fde9a7'
                        key: {
                            model: '5c1e331692644b329a8554a3604a07c7'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '05a0d342c12a4e18b994f4af30269d3f'
                        key: {
                            model: '5c1e331692644b329a8554a3604a07c7'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '05e91017437d4b1fa35d3ce2de181b50'
                        key: {
                            model: 'a5527048ebde44e7aaeaa65e330d2baa'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '06bfc18bb6764c86a85ed3b0f9433b64'
                        key: {
                            model: '8c74266b0b45403b85c13359e01f67c6'
                            element: 'requestType'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '076e263f960e4abea925e8a2733cc960'
                        key: {
                            model: 'caa4b2278e504d3f91f9449890c8f961'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '07fb08c816d546a6b96c21abdac14ca4'
                        key: {
                            model: '6c399e42a5fa44b983ce73f7091a030f'
                            element: 'request_item_id'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '08fb6d54a6dd4bcf816a43eca44e14b8'
                        key: {
                            cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            variable_set: 'NULL'
                            name: 'required_date'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '09d88c8297a5483bb7c80754e399fa20'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: 'requestItemId'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '0a48db85d8a44bafa3d84c63fbcdbe9e'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: 'operation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0be9b53731884049b7022525088320ef'
                        key: {
                            name: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ce2cf4d9188423c8eae6bc4ecd1d039'
                        key: {
                            name: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '0d1664d7e4a44de8a09e09417d7d8bb9'
                        key: {
                            model: 'b8f937f312c64a2c98296c47b37bad91'
                            element: 'fulfillmentGroup'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '0e48f6cd134a4b559308729c2c352701'
                        key: {
                            model: 'c5e1323322b647e2b7a4b034577958b7'
                            element: 'warehouseName'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f021f2b3841427c878c6b7e9088722f'
                        key: {
                            name: 'var__m_sys_hub_action_output_a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'launched'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10700983268c4f8daa1feb073e540c44'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '108867046d9b44938235d1935a730ccf'
                        key: {
                            question: {
                                id: '4efb674ddd2d4a9ab53589a48f85ad34'
                                key: {
                                    cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'infrastructure'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: '1088c348c07b42c2b41853eb8a5e04d9'
                        key: {
                            model: '8c74266b0b45403b85c13359e01f67c6'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '114cc3fb8f0941c29859af47d6df4c97'
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_412550_catal_config'
                                    caption: 'Configuration Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '118f0568500d451e92734b1a96e4321b'
                        key: {
                            model: 'b8f937f312c64a2c98296c47b37bad91'
                            element: 'autoAssign'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '11ac775fb8854b4c9b8739cde435523a'
                        key: {
                            model: 'a2b090027b094f189d914abe81bf3e98'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1324c6f4fa6b40789e33740be75c7ab4'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'assigned_technician'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '139bc9b4985e4bda9dd413bfda0a1143'
                        key: {
                            model: 'a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'jobId'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '14847f38e9f042a5b2e2f17aba27400b'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '1532a88e1f25481da1f237d9b3889441'
                        key: {
                            document_key: 'a4fcd570c3db451ba64276cfd3ca883d'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '15a2cbc535ca45c79835ce099fd556ab'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'auto_assign'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '15d3463cdc344f34b842c61856a84a00'
                        key: {
                            model: '6c399e42a5fa44b983ce73f7091a030f'
                            element: 'approval'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '16239b7b7c9b4a9692373133bfe2b38e'
                        key: {
                            model: 'c5e1323322b647e2b7a4b034577958b7'
                            element: 'found'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '174f2aafcf2742939554a1324f882cc7'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: 'businessJustification'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '1797ba45e95e4d7ebab62f3d71942fe7'
                        key: {
                            question: {
                                id: '71d60310c3434121a6eec665322027a6'
                                key: {
                                    cat_item: '7fff5c8050a84ae08ece2beef289932a'
                                    variable_set: 'NULL'
                                    name: 'warehouse_size'
                                }
                            }
                            value: 'XSMALL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '17d268bca50c45d08845ee03edfc848d'
                        key: {
                            name: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '18b5334124b64e418f750ad22934c7a5'
                        key: {
                            question: {
                                id: '9f80dcdb1d234d10a9add2a0487197d1'
                                key: {
                                    cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                                    variable_set: 'NULL'
                                    name: 'environment'
                                }
                            }
                            value: 'staging'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '197d47fccbbe466784a1c751b17d7fa6'
                        key: {
                            model: 'a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'taskId'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1991e23ee3e1476396f461bde6f9f8f4'
                        key: {
                            name: 'var__m_sys_hub_action_output_a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'jobId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19ac5ee669ef48dab9d5a84b69922116'
                        key: {
                            name: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            element: 'stage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1af9de4b66ae466c9c2f6c88f3e40a84'
                        key: {
                            name: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '1b06b6e8906e45edb27a0fb29514b252'
                        key: {
                            id: '4965ceb0f53343b39564b7044321b2a3'
                            table: 'var__m_sys_flow_step_definition_input_a03fea9bc712220061f553c6f09763b1'
                            field: 'log_message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c1f11d35ee54931b43a5a66beaa6e85'
                        key: {
                            name: 'var__m_sys_hub_action_input_c5e1323322b647e2b7a4b034577958b7'
                            element: 'requestItemId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c34b52d6c3c4a2f8ca4b743ce032641'
                        key: {
                            name: 'var__m_sys_hub_action_output_be3949ef96d8457fb6c1efa6f4621aba'
                            element: 'logged'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1d7d02fbd8014ffdbb6e637ee50c3b05'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '1d807aff651f40edb22aabf721d9f6ee'
                        key: {
                            model: 'caa4b2278e504d3f91f9449890c8f961'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1daf64c8f743430283fedc562916372e'
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_412550_catal_config'
                                    caption: 'Configuration Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f95e94e69d8427d88f97a789a9be0c4'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: 'businessJustification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '221923864a6d4600a1344f89416df5e1'
                        key: {
                            model: 'c59b2e0cb52146668e1921a2084e34f7'
                            element: 'task_id'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '222e778eb4894bf18199acea5ba235fe'
                        key: {
                            id: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                            table: 'var__m_sys_hub_step_ext_input_e561ec4bbeb84d9d9c69e25bbff8342d'
                            field: 'configuration_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2257a682b1f541cc84aa416fba2400e7'
                        key: {
                            id: '5c1e331692644b329a8554a3604a07c7'
                            table: 'var__m_sys_hub_step_ext_input_5c1e331692644b329a8554a3604a07c7'
                            field: 'state'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '22581ffb780149ae8cab9625f1ca4bd7'
                        key: {
                            name: 'x_412550_catal_config'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '23e21e09a006426887caf193a6591e4c'
                        key: {
                            id: 'b8f937f312c64a2c98296c47b37bad91'
                            table: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            field: 'assignedTechnician'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '253108a4d3dd482b8294a0420a99a825'
                        key: {
                            name: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '25c3740898654344bcc8fc0c9baa12d2'
                        key: {
                            document_key: '938b82413cae435eb1c6a5884e6ff953'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26940ffbcd2e46b09d8dad68e04fb033'
                        key: {
                            name: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            element: 'found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '270419c2918e4114b4d7a20c6a348c98'
                        key: {
                            sc_cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            variable_set: '10a720b0e72848c8a10d2783cc7938b3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27db00f918c94cf1b9152b7d7ba04367'
                        key: {
                            name: 'var__m_sys_hub_action_output_3ef594acf66a422da96a6c729001a5ee'
                            element: 'assigned'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '27ff0ae95780423fb65fc190422fc073'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: 'updated'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '285bec1c53e147b1931a53e85d50791a'
                        key: {
                            model: '3ef594acf66a422da96a6c729001a5ee'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2922c639aef04ee3b6696be27262aeed'
                        key: {
                            id: 'a5527048ebde44e7aaeaa65e330d2baa'
                            table: 'var__m_sys_hub_action_output_a5527048ebde44e7aaeaa65e330d2baa'
                            field: 'launched'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '29acf439b9724db0b0acb0a8e5750b31'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: 'environment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a8dfb22bf9640f3bb48ffaa2251c91b'
                        key: {
                            name: 'var__m_sys_hub_flow_input_8c74266b0b45403b85c13359e01f67c6'
                            element: 'businessJustification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '2ab019438e07487e95decc7a3f6b40b2'
                        key: {
                            model: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                            element: 'fulfillment_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b1dd39e565849409f528a2a35655413'
                        key: {
                            name: 'var__m_sys_hub_action_input_5e464c59519d4bb983b4823259cff23e'
                            element: 'requestItemId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b298928912941ebbda58d05f9f3f25f'
                        key: {
                            name: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2d6c4faa9aaa42568075922c3d8e71b3'
                        key: {
                            id: 'b26a1494969c4bbcb87eaa053808313d'
                            table: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            field: 'requestNumber'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2ee3e8c6c8af47ff905a0eae74d0f4e9'
                        key: {
                            id: 'be3949ef96d8457fb6c1efa6f4621aba'
                            table: 'var__m_sys_hub_action_output_be3949ef96d8457fb6c1efa6f4621aba'
                            field: 'logged'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2f4bef50cd764c0f8f47d61adb7e7a4a'
                        key: {
                            name: 'var__m_sys_hub_action_input_3ef594acf66a422da96a6c729001a5ee'
                            element: 'taskId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '2f89a3b7c3544b3e8eafeeabcb1278c4'
                        key: {
                            id: 'b26a1494969c4bbcb87eaa053808313d'
                            table: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            field: 'approval'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '315826a8a49b459884343e6f9888a58f'
                        key: {
                            model: '938b82413cae435eb1c6a5884e6ff953'
                            element: 'fulfillment_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '317fb7fd7f9d497c955423ab22dda8e2'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'fulfillment_group'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '331db0d573f64e63b1b2cfe3e164f7af'
                        key: {
                            model: 'caa4b2278e504d3f91f9449890c8f961'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '33be4ede615a46c0b354266a6ca0c18a'
                        key: {
                            model: 'c59b2e0cb52146668e1921a2084e34f7'
                            element: 'request_item_id'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '34307bf7052548df9cc4a6257a9a509d'
                        key: {
                            id: 'c5e1323322b647e2b7a4b034577958b7'
                            table: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            field: 'found'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '356c1695ec094aa18cfebfebd6f43727'
                        key: {
                            id: '846bedc96ac1404ca575e9caf1147300'
                            table: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            field: 'taskId'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '36a42327981c441d87c90fc3fa5f377d'
                        key: {
                            model: '846bedc96ac1404ca575e9caf1147300'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '3725d506b7594bac9ed80ddac250eb13'
                        key: {
                            id: 'b8f937f312c64a2c98296c47b37bad91'
                            table: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            field: 'found'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '382d38bf5d4a432b96c4d0c6f2490cf3'
                        key: {
                            id: '5e464c59519d4bb983b4823259cff23e'
                            table: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            field: 'businessJustification'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '386267572c12482fbada2b71909dca8f'
                        key: {
                            name: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            element: 'valid'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '3913febd44834dd5b4f9e07810d9f079'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '39480fe937bd40699fbbe05118998299'
                        key: {
                            model: 'c5e1323322b647e2b7a4b034577958b7'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3b63164ca20f423d9fdfd438455c9042'
                        key: {
                            name: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            element: 'taskId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '3bac1ad2a30e423899127eaaa14561fd'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '3e50b8c3dbcf4d7385f9081cced8346a'
                        key: {
                            model: 'a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ee873f50e89437cbba4248021b85e0a'
                        key: {
                            name: 'var__m_sys_hub_action_output_a5527048ebde44e7aaeaa65e330d2baa'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3fc4ba6472794a328b1f5115bf9bbc33'
                        key: {
                            name: 'var__m_sys_hub_action_input_caa4b2278e504d3f91f9449890c8f961'
                            element: 'taskId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40119450f0c74e3cab3ac85d0a357a40'
                        key: {
                            name: 'var__m_sys_hub_action_input_846bedc96ac1404ca575e9caf1147300'
                            element: 'requestItemId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4263a2dad4e5475795c9404df29e8cb4'
                        key: {
                            id: '754e1ddbcff34bb1baf8354cb75d3f79'
                            table: 'var__m_sys_hub_step_ext_input_754e1ddbcff34bb1baf8354cb75d3f79'
                            field: 'request_item_id'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '428172b43fa7413d8ee7314562ad9056'
                        key: {
                            model: 'caa4b2278e504d3f91f9449890c8f961'
                            element: 'updated'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '437a8e42614d4a67b14a9426a0d14177'
                        key: {
                            name: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            element: 'approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '43dad693d99a4af89c6322df4762e8ce'
                        key: {
                            model: 'a2b090027b094f189d914abe81bf3e98'
                            element: 'job_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '43f8b08a71f14e90968d14dc057e228c'
                        key: {
                            name: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            element: 'fulfillmentGroup'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '4527580f82fb422e87c7ec3cf1ae7ca7'
                        key: {
                            model: '846bedc96ac1404ca575e9caf1147300'
                            element: 'requestItemId'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4562cb07623542fd9d486b88f922a670'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_412550_catal_config'
                                    caption: 'Configuration Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '483ea54ddc46425d9040b043f69cd668'
                        key: {
                            id: '3ef594acf66a422da96a6c729001a5ee'
                            table: 'var__m_sys_hub_action_output_3ef594acf66a422da96a6c729001a5ee'
                            field: 'message'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '488f2008d98a4763a29a91bc70970473'
                        key: {
                            question: {
                                id: '756df8cbb910495ba9dce9430526dacd'
                                key: {
                                    cat_item: '7fff5c8050a84ae08ece2beef289932a'
                                    variable_set: 'NULL'
                                    name: 'auto_suspend_seconds'
                                }
                            }
                            value: '300'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49896b2d7e2046dd80572e360548353a'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: 'requestType'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '499d8087dbae494c91dcde6ab8362421'
                        key: {
                            cat_item: '7fff5c8050a84ae08ece2beef289932a'
                            variable_set: 'NULL'
                            name: 'environment'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '49ae0e097e694b9d99b91abb3e3e7580'
                        key: {
                            id: '5e464c59519d4bb983b4823259cff23e'
                            table: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            field: 'environment'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '4ab91cb2449e43f899226b600ff6763d'
                        key: {
                            model: 'b8f937f312c64a2c98296c47b37bad91'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '4bce38ad897840fd838792375fde9533'
                        key: {
                            model: 'a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'launched'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '4c03cbb6eaca446187db22b76bc46ec9'
                        key: {
                            model: '938b82413cae435eb1c6a5884e6ff953'
                            element: 'task_id'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '4d26ab1263354d4f976d62a2be422786'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '4dcbc3b1bdc04590a542cb5ab16aa530'
                        key: {
                            id: 'a2b090027b094f189d914abe81bf3e98'
                            table: 'var__m_sys_hub_step_ext_input_a2b090027b094f189d914abe81bf3e98'
                            field: 'task_id'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4efb674ddd2d4a9ab53589a48f85ad34'
                        key: {
                            cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            variable_set: 'NULL'
                            name: 'request_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f60e355a87a48f4b694e5811d539e24'
                        key: {
                            name: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            element: 'taskNumber'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '4f669f3429b24d3e87560a9c7d4abdc5'
                        key: {
                            model: '754e1ddbcff34bb1baf8354cb75d3f79'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4fb17ba9bc6c49c9b52aa034e26b0580'
                        key: {
                            document_key: 'a4fcd570c3db451ba64276cfd3ca883d'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '5105fe55a9da40d3baa632dcd52894ba'
                        key: {
                            model: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5125714db5244f8c9a75cce0f5620e7a'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'name'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '52afc6dff3c5441dab4112b72bd0cac7'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '10a720b0e72848c8a10d2783cc7938b3'
                            name: 'requester_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53854c282265432aba1c2892fe75f27c'
                        key: {
                            name: 'var__m_sys_hub_action_output_a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '551b136546c44326b7ac440d8fced9e9'
                        key: {
                            model: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                            element: 'assigned_technician'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55310cbebc354136b6c87b2e03bc9014'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '5697d9ff3cb84dad93851e8ea25c32a6'
                        key: {
                            model: '3ef594acf66a422da96a6c729001a5ee'
                            element: 'taskId'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57d9d7a765a14a88a61e193d06344a51'
                        key: {
                            name: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '57ffb8f0f9344c9a85fbfc7f239b86f4'
                        key: {
                            model: '846bedc96ac1404ca575e9caf1147300'
                            element: 'taskCreated'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '59903f09decb4d44845bf6b3098b8966'
                        key: {
                            model: '754e1ddbcff34bb1baf8354cb75d3f79'
                            element: 'warehouse_name'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '5c691878e24f4521a76b81432e7f348a'
                        deleted: true
                        key: {
                            sc_cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            sc_category: '803e95e1c3732100fca206e939ba8f2a'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '5ca11c2b129644a994832f7cfd7ec1c7'
                        key: {
                            cat_item: '7fff5c8050a84ae08ece2beef289932a'
                            variable_set: 'NULL'
                            name: 'resource_monitor'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5d2c80f2caa3470ba2333c733eeb0d4a'
                        key: {
                            document_key: '754e1ddbcff34bb1baf8354cb75d3f79'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '5d719ebdd2c24e13848107e4dbfc3007'
                        key: {
                            id: 'c5e1323322b647e2b7a4b034577958b7'
                            table: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            field: 'valid'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5ddb187949664e1baa48900d9d488cc8'
                        key: {
                            document_key: '754e1ddbcff34bb1baf8354cb75d3f79'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '5ddd28e8a7ec4f059a6f3b54c3df87c3'
                        key: {
                            model: '6c399e42a5fa44b983ce73f7091a030f'
                            element: 'operation'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '5ecb157d61a34dfcb25e13359730ccc0'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: 'found'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '5ee0b93ef2da4db788162f5cc6561f3a'
                        key: {
                            model: 'c59b2e0cb52146668e1921a2084e34f7'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '5fd01112173e49478fb09eb69adbb9c8'
                        key: {
                            model: 'b8f937f312c64a2c98296c47b37bad91'
                            element: 'configurationName'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60770f4ab8d947e88a113a957cf66e75'
                        key: {
                            name: 'var__m_sys_hub_action_output_3ef594acf66a422da96a6c729001a5ee'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '616fed558d9544d8bc97aa23767f682f'
                        key: {
                            model: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                            element: 'found'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6184c10f32a64db59ef0ee8e7ed18b49'
                        key: {
                            name: 'var__m_sys_hub_action_output_be3949ef96d8457fb6c1efa6f4621aba'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '624020180ff046068f34ab53b4468383'
                        key: {
                            name: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            element: 'updated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '62935dddc4844268b7a9976aeedc9ee1'
                        key: {
                            name: 'var__m_sys_hub_action_input_caa4b2278e504d3f91f9449890c8f961'
                            element: 'workNotes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '633f4b8549404f938058080022fadbcd'
                        key: {
                            model: '3ef594acf66a422da96a6c729001a5ee'
                            element: 'fulfillmentGroup'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '6371a8238e864c8dbb8e418714471ef6'
                        key: {
                            model: '3ef594acf66a422da96a6c729001a5ee'
                            element: 'assignedTechnician'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '638f8473f5914d28b53c1ba950684c5e'
                        key: {
                            document_key: '938b82413cae435eb1c6a5884e6ff953'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '6403175ab9b94ab39878ce383e8b9427'
                        key: {
                            model: 'caa4b2278e504d3f91f9449890c8f961'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '64c5fae166954deaa385f4f073dfe99f'
                        key: {
                            id: '5e464c59519d4bb983b4823259cff23e'
                            table: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            field: 'found'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '64e81e2eb1fc4f24a4765f1675bce7d1'
                        key: {
                            id: '5e464c59519d4bb983b4823259cff23e'
                            table: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            field: 'requiredDate'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '651d35a457f842618effeaded8a9eb39'
                        key: {
                            sc_cat_item: '7fff5c8050a84ae08ece2beef289932a'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '65994efade924a95a23bd1b74bd48dc7'
                        key: {
                            question: {
                                id: '4efb674ddd2d4a9ab53589a48f85ad34'
                                key: {
                                    cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'configuration'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '66a369e38be948eabd7927475a198ef5'
                        key: {
                            cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            variable_set: 'NULL'
                            name: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '68c582a91ac149178ac02ffb7e2db1e4'
                        key: {
                            model: 'c59b2e0cb52146668e1921a2084e34f7'
                            element: 'configuration_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68faa59993e746589226dfe0111c9502'
                        key: {
                            name: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            element: 'taskNumber'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '693dfd7bbfdd4d9f8c83500baf396d78'
                        key: {
                            question: {
                                id: '9f80dcdb1d234d10a9add2a0487197d1'
                                key: {
                                    cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                                    variable_set: 'NULL'
                                    name: 'environment'
                                }
                            }
                            value: 'production'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '6a39a75a5c154fce8982c7f91562445c'
                        key: {
                            model: 'c59b2e0cb52146668e1921a2084e34f7'
                            element: 'task_created'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a43add8d59143449c9ec5d5568ac3fd'
                        key: {
                            name: 'var__m_sys_hub_action_input_b26a1494969c4bbcb87eaa053808313d'
                            element: 'operation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '6af078d8dd9f453292d1f9d0d3a511cd'
                        key: {
                            id: 'b26a1494969c4bbcb87eaa053808313d'
                            table: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            field: 'stage'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6af9a48a778243a6a9bd532f9a85dc60'
                        key: {
                            name: 'var__m_sys_hub_action_input_3ef594acf66a422da96a6c729001a5ee'
                            element: 'assignedTechnician'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '6bfd28bb736d44e4947b882604c42c17'
                        key: {
                            model: '754e1ddbcff34bb1baf8354cb75d3f79'
                            element: 'request_item_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e3016f844834a12aef4e40b7e2f5cea'
                        key: {
                            name: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f4499afeae14118bd1e04935cb5101d'
                        key: {
                            name: 'var__m_sys_hub_action_input_a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'taskId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '6ff991368c264f0c88dfc296ee695857'
                        key: {
                            model: 'a2b090027b094f189d914abe81bf3e98'
                            element: 'task_id'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '70c9e45e84414cddbe3b2bebea7a8a0a'
                        key: {
                            model: 'be3949ef96d8457fb6c1efa6f4621aba'
                            element: 'requestNumber'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '70f61387807848e3a3d023bec8aeb567'
                        key: {
                            model: '6c399e42a5fa44b983ce73f7091a030f'
                            element: 'updated'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7167a6234c0c4f0dab64603877b31d3e'
                        key: {
                            name: 'var__m_sys_hub_action_input_846bedc96ac1404ca575e9caf1147300'
                            element: 'taskShortDescription'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '71d60310c3434121a6eec665322027a6'
                        key: {
                            cat_item: '7fff5c8050a84ae08ece2beef289932a'
                            variable_set: 'NULL'
                            name: 'warehouse_size'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '726905c0b40f482a9193c43797d4b25c'
                        key: {
                            name: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73bf1c9cc1e748d98c454c616220f14f'
                        key: {
                            name: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            element: 'assignedTechnician'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '74956ed1371c4458b94add613fa7551f'
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_412550_catal_config'
                                    caption: 'Configuration Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7497d735fcec4fe28214a908ec22ee06'
                        key: {
                            id: '846bedc96ac1404ca575e9caf1147300'
                            table: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            field: 'taskCreated'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '756df8cbb910495ba9dce9430526dacd'
                        key: {
                            cat_item: '7fff5c8050a84ae08ece2beef289932a'
                            variable_set: 'NULL'
                            name: 'auto_suspend_seconds'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '777a2be0fef54ecb8067edd62621f90b'
                        key: {
                            name: 'x_412550_catal_config'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78762a43566a473297d4a689001abffc'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: 'environment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '7a041cc013934363b017d00efd4c0670'
                        key: {
                            model: '5c1e331692644b329a8554a3604a07c7'
                            element: 'task_id'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '7c8fd3d82a8740f1a631df43c3171f07'
                        key: {
                            sc_cat_item: '7fff5c8050a84ae08ece2beef289932a'
                            variable_set: '10a720b0e72848c8a10d2783cc7938b3'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: '7d7427e2dc7546a9a6deab122a1224e3'
                        key: {
                            model: '938b82413cae435eb1c6a5884e6ff953'
                            element: 'assigned_technician'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7dd87a0cb0c64eeeab4e200f306b1d3a'
                        key: {
                            document_key: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7e609a2029844b4c806579fb3135c312'
                        key: {
                            question: {
                                id: '5ca11c2b129644a994832f7cfd7ec1c7'
                                key: {
                                    cat_item: '7fff5c8050a84ae08ece2beef289932a'
                                    variable_set: 'NULL'
                                    name: 'resource_monitor'
                                }
                            }
                            value: 'RM_PLATFORM_DEV'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '7f39188f560244ce9146d090e751dc65'
                        key: {
                            id: 'c5e1323322b647e2b7a4b034577958b7'
                            table: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '7f422b75adf14511bbb17c72bba3e25f'
                        key: {
                            model: '6c399e42a5fa44b983ce73f7091a030f'
                            element: 'request_number'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '807ec15e2d624915836ffc142e94f1b7'
                        key: {
                            name: 'x_412550_catal_config'
                            caption: 'Configuration Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8094234ccd0542ce972a93955670ae96'
                        key: {
                            name: 'var__m_sys_hub_action_output_be3949ef96d8457fb6c1efa6f4621aba'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '80ee8c7fa6694f6580db7339791db6ea'
                        key: {
                            model: '754e1ddbcff34bb1baf8354cb75d3f79'
                            element: 'valid'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '81b79eb162504613986d4fb6c260637d'
                        key: {
                            id: '6c399e42a5fa44b983ce73f7091a030f'
                            table: 'var__m_sys_hub_step_ext_input_6c399e42a5fa44b983ce73f7091a030f'
                            field: 'operation'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '81ea604771d645e9903bbba524361614'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: 'requiredDate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81f42258d5f04c359e77c9ffc2717f17'
                        key: {
                            name: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            element: 'warehouseName'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8267ae1e71e84e91b7ae971ea6874dd0'
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_412550_catal_config'
                                    caption: 'Configuration Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'auto_assign'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '832585a9644b41c194b5f851c7a4b637'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '839177dfd0874957aac37801257bc4d4'
                        key: {
                            id: 'a4fcd570c3db451ba64276cfd3ca883d'
                            table: 'var__m_sys_hub_step_ext_input_a4fcd570c3db451ba64276cfd3ca883d'
                            field: 'request_item_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '84951eae794a46138f1f2ee8f0e983c5'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '84f63a3996e64ddbbe90d1598cdb44e5'
                        key: {
                            name: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            element: 'autoAssign'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '85ceb1c2c586458f9b82f992de3108b2'
                        key: {
                            id: 'caa4b2278e504d3f91f9449890c8f961'
                            table: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '85d90c02f46b42cd95aeeaca7e915a4a'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '892f275b49714d23ba01f0c704b9da09'
                        key: {
                            id: 'a2b090027b094f189d914abe81bf3e98'
                            table: 'var__m_sys_hub_step_ext_input_a2b090027b094f189d914abe81bf3e98'
                            field: 'request_item_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8951646382dd4382beaa04167a80740e'
                        key: {
                            name: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            element: 'requestNumber'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '89571f12191c4ccdbf81845f39b2b104'
                        key: {
                            question: {
                                id: '499d8087dbae494c91dcde6ab8362421'
                                key: {
                                    cat_item: '7fff5c8050a84ae08ece2beef289932a'
                                    variable_set: 'NULL'
                                    name: 'environment'
                                }
                            }
                            value: 'dev'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a02212d027c46dab6b2c66584298111'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8a84d351746f473fbcd48d6f6496b2fb'
                        key: {
                            id: '5e464c59519d4bb983b4823259cff23e'
                            table: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '8b62e429cfaa466880fa2c9d7a5adf9a'
                        key: {
                            model: '754e1ddbcff34bb1baf8354cb75d3f79'
                            element: 'found'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '8c2c13e957b64eb4a83e7e9d5407ab40'
                        key: {
                            id: 'b8f937f312c64a2c98296c47b37bad91'
                            table: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            field: 'autoAssign'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e0402593bd74249820d874edd2adedc'
                        key: {
                            name: 'var__m_sys_hub_action_input_b26a1494969c4bbcb87eaa053808313d'
                            element: 'requestItemId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '8fc8d3fe4f8249d5881ec4d1510d0a18'
                        key: {
                            model: 'a5527048ebde44e7aaeaa65e330d2baa'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '927e324aadbc411a8224f0ab2cb7b1b5'
                        key: {
                            id: 'b8f937f312c64a2c98296c47b37bad91'
                            table: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            field: 'fulfillmentGroup'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: '93e3502ff90246c58cbc60e706be7859'
                        key: {
                            model: 'a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'requestItemId'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '95c752a186924481984a4563a42bcbe4'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'found'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '96716e5678e34506b9b01b3c4c3ddd29'
                        key: {
                            model: 'a2b090027b094f189d914abe81bf3e98'
                            element: 'launched'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: '985ba31a4e824e14985fd729df197815'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99bb4cc0904143dbb3e0ed6e8de6ff9b'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'active'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9a6c77958dd340e4acb87bcaf51c97e1'
                        key: {
                            cat_item: '7fff5c8050a84ae08ece2beef289932a'
                            variable_set: 'NULL'
                            name: 'warehouse_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a9d6ec30b0b4591bba7256960f40b95'
                        key: {
                            name: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            element: 'found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9c508db4241641e191dc763ce0e3c352'
                        key: {
                            name: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            element: 'updated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9c54b32c8bc940bf8ecedeb49441cf59'
                        key: {
                            id: '846bedc96ac1404ca575e9caf1147300'
                            table: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: '9d0d196961864ff6be9d42a743dfe5b7'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'environment'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9d8228b9fd8c47a4a007946e072e7b35'
                        key: {
                            id: '3ef594acf66a422da96a6c729001a5ee'
                            table: 'var__m_sys_hub_action_output_3ef594acf66a422da96a6c729001a5ee'
                            field: 'assigned'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '9ebb4d33ef1040609ff36d74ee2c322e'
                        key: {
                            sc_cat_item: '7fff5c8050a84ae08ece2beef289932a'
                            sc_category: '109f0438c6112276003ae8ac13e7009d'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '9ed26844685b42abb0213c2423988b7f'
                        key: {
                            sc_cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f2c111cd4ad4d4a9381bf5068d3045c'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'integration_enabled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '9f80dcdb1d234d10a9add2a0487197d1'
                        key: {
                            cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            variable_set: 'NULL'
                            name: 'environment'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a0b85216190a497b863f3bf9ce4b582f'
                        key: {
                            sys_ui_form: {
                                id: 'cf66b29371514bf0bde17e835e8e2256'
                                key: {
                                    name: 'x_412550_catal_config'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_412550_catal_config'
                                    caption: 'Configuration Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a134164bf17c4f6e8c0d73a7d41b1f58'
                        key: {
                            name: 'var__m_sys_hub_action_output_3ef594acf66a422da96a6c729001a5ee'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'a244e5cc073a42b0ac055386e9d0be62'
                        key: {
                            model: 'caa4b2278e504d3f91f9449890c8f961'
                            element: 'taskId'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a27e2b32493d47c6a5070f413314d149'
                        key: {
                            model: '3ef594acf66a422da96a6c729001a5ee'
                            element: 'message'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'a290f8562d534789aa5c85cdeab5f07d'
                        key: {
                            question: {
                                id: '9f80dcdb1d234d10a9add2a0487197d1'
                                key: {
                                    cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                                    variable_set: 'NULL'
                                    name: 'environment'
                                }
                            }
                            value: 'development'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2a7ddbe5cca41eda5317b60e4d0e03c'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3c2cc9a9a6c41fc8fea219978a41a71'
                        key: {
                            name: 'var__m_sys_hub_action_input_b8f937f312c64a2c98296c47b37bad91'
                            element: 'configurationName'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a5b92a5f3951496c9fb24c8a2d954e2b'
                        key: {
                            model: 'be3949ef96d8457fb6c1efa6f4621aba'
                            element: 'logged'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a62bf174832f4685bb761a3786a20e22'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a65d4397bc424d0da5793534569cc620'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'assigned_technician'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'a692ff5adef04a3da86b3283a38cd5f5'
                        key: {
                            model: '6c399e42a5fa44b983ce73f7091a030f'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a6c2947e099d473aa5d3bbe8ca03376d'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: 'approval'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7a3b2a220c5479a83f07ad5c7edc139'
                        key: {
                            name: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a7d7ce2d31354cc78c9b0483c27f801e'
                        key: {
                            model: 'caa4b2278e504d3f91f9449890c8f961'
                            element: 'taskNumber'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'a9807ed3644946c6a66be22a83cd9095'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: 'stage'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a9d17fe1ae254bf7a4ad25e78cc2d9e7'
                        key: {
                            document_key: '6c399e42a5fa44b983ce73f7091a030f'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'a9fbeb72fa3744b793d39ab75160cdb6'
                        key: {
                            model: 'c59b2e0cb52146668e1921a2084e34f7'
                            element: 'task_short_description'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'aabaa5e283804d5095d61af4be81c10e'
                        key: {
                            model: '846bedc96ac1404ca575e9caf1147300'
                            element: 'taskId'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'abc49a16cf43428f852ff00dae9f4280'
                        key: {
                            id: '938b82413cae435eb1c6a5884e6ff953'
                            table: 'var__m_sys_hub_step_ext_input_938b82413cae435eb1c6a5884e6ff953'
                            field: 'fulfillment_group'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'ae869a53073245e893b55530025f7481'
                        key: {
                            model: '6c399e42a5fa44b983ce73f7091a030f'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'afee87754eb047b6a756cfc6fd20942c'
                        key: {
                            id: 'a5527048ebde44e7aaeaa65e330d2baa'
                            table: 'var__m_sys_hub_action_output_a5527048ebde44e7aaeaa65e330d2baa'
                            field: 'jobId'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b0c47a55ad594a20914d2fef3b9341a0'
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_412550_catal_config'
                                    caption: 'Configuration Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_technician'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b0fd1e6f5b9c4020852840f9b66692b7'
                        key: {
                            name: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            element: 'taskCreated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b125365c081b437cb36f22c4ca42ba95'
                        key: {
                            name: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'b1439583031c4dfeaf224f25b6e1b6f4'
                        key: {
                            model: 'c5e1323322b647e2b7a4b034577958b7'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b632118a8bea42dabaca44fa9f440954'
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_412550_catal_config'
                                    caption: 'Configuration Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'fulfillment_group'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b6605354efce4a8080d7c090ec9108c9'
                        key: {
                            id: 'caa4b2278e504d3f91f9449890c8f961'
                            table: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            field: 'taskNumber'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b72a048cd3f843dca177db100b38c540'
                        key: {
                            id: 'c59b2e0cb52146668e1921a2084e34f7'
                            table: 'var__m_sys_hub_step_ext_input_c59b2e0cb52146668e1921a2084e34f7'
                            field: 'configuration_name'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b7712160afcb4fc187b5173c2f16dbc7'
                        key: {
                            id: 'caa4b2278e504d3f91f9449890c8f961'
                            table: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            field: 'updated'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'b783e2f4cd3f4a13b51e5a2aeca94478'
                        key: {
                            model: '846bedc96ac1404ca575e9caf1147300'
                            element: 'taskShortDescription'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'b85baf1a03804ec483850282dd1aecfe'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b85ff466bc21425b97205e24e88ab251'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'b986d280d8994b95a332a935ff1680d4'
                        key: {
                            model: 'c5e1323322b647e2b7a4b034577958b7'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'bc02693f83cc4e2fa420ab14327b79b0'
                        key: {
                            model: 'c59b2e0cb52146668e1921a2084e34f7'
                            element: 'task_number'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'bcc76a2ecb0e40adabe6856b76f34ea8'
                        key: {
                            model: '8c74266b0b45403b85c13359e01f67c6'
                            element: 'environment'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'bd19cdb20f394e5489192212841fb2d5'
                        key: {
                            id: 'b26a1494969c4bbcb87eaa053808313d'
                            table: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'bd47bd1ec8cb4be2901cf46611b95c1f'
                        key: {
                            id: 'caa4b2278e504d3f91f9449890c8f961'
                            table: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            field: 'state'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'bdee2f2a06d84931be1beb2e3741d41f'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '10a720b0e72848c8a10d2783cc7938b3'
                            name: 'contact_number'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'be51f8d600e147528790fd01b24cb6d8'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'beaf60edc35541b3917cab5eb7986aed'
                        key: {
                            question: {
                                id: '71d60310c3434121a6eec665322027a6'
                                key: {
                                    cat_item: '7fff5c8050a84ae08ece2beef289932a'
                                    variable_set: 'NULL'
                                    name: 'warehouse_size'
                                }
                            }
                            value: 'SMALL'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c07934e6e2494f3dba65545998c9277a'
                        key: {
                            cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            variable_set: 'NULL'
                            name: 'additional_information'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'c08cb01887c248db95bae1e978510233'
                        key: {
                            sc_cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            sc_category: '109f0438c6112276003ae8ac13e7009d'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c0c5597bf4e245b7b6bba29ccdf4e2fe'
                        key: {
                            document_key: 'c59b2e0cb52146668e1921a2084e34f7'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'c124cd1166b64270a2e7df180f5e4cb5'
                        key: {
                            model: 'b8f937f312c64a2c98296c47b37bad91'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'c1c3f551d58e43eb9ff782834ee5ee63'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'required_date'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'c377d6f569834a4d90a2907b38895653'
                        key: {
                            model: 'a2b090027b094f189d914abe81bf3e98'
                            element: 'request_item_id'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'c380b487fcb74e5d9eb799eac118ed2c'
                        key: {
                            model: 'be3949ef96d8457fb6c1efa6f4621aba'
                            element: 'logMessage'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'c3acea20be69485e817c875f723b9efc'
                        key: {
                            document_key: '4965ceb0f53343b39564b7044321b2a3'
                            variable: 'ab123adbc712220061f553c6f0976387'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c47bd8859d9449c79be96a6d5257d953'
                        key: {
                            cat_item: '7fff5c8050a84ae08ece2beef289932a'
                            variable_set: 'NULL'
                            name: 'business_justification'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'c67f2c0b50bb4746852d3f44eef3fdf7'
                        key: {
                            model: '846bedc96ac1404ca575e9caf1147300'
                            element: 'taskNumber'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c71c3e75b7e743da957ada12648bddb3'
                        key: {
                            id: 'a5527048ebde44e7aaeaa65e330d2baa'
                            table: 'var__m_sys_hub_action_output_a5527048ebde44e7aaeaa65e330d2baa'
                            field: 'message'
                        }
                    },
                    {
                        table: 'catalog_ui_policy_action'
                        id: 'c99664db3c6d49eea285ba5ebabaec4f'
                        key: {
                            ui_policy: '228acba5c19446599b92f79cb989886d'
                            catalog_variable: 'IO:additional_information'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'c9febdcd6bdb48d0b3feb6710a4e3003'
                        key: {
                            id: '6c399e42a5fa44b983ce73f7091a030f'
                            table: 'var__m_sys_hub_step_ext_input_6c399e42a5fa44b983ce73f7091a030f'
                            field: 'request_item_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca4ef534efea4820bbc3e3692c17c2d5'
                        key: {
                            name: 'var__m_sys_hub_flow_input_8c74266b0b45403b85c13359e01f67c6'
                            element: 'environment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cbe428082f4e419c9f2db23704d1a2ca'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cbf8f23d4ba0476da62702eb6d3fb54b'
                        key: {
                            id: '5e464c59519d4bb983b4823259cff23e'
                            table: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            field: 'requestType'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'cc262d3c4ca64092bbfc89966f41a202'
                        key: {
                            model: 'c5e1323322b647e2b7a4b034577958b7'
                            element: 'requestItemId'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'cc6c55a58f6b4c85a343848bf535b4a0'
                        key: {
                            id: '938b82413cae435eb1c6a5884e6ff953'
                            table: 'var__m_sys_hub_step_ext_input_938b82413cae435eb1c6a5884e6ff953'
                            field: 'assigned_technician'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'ce80bde79c2243e593a3034de40f1cc4'
                        key: {
                            model: 'c5e1323322b647e2b7a4b034577958b7'
                            element: 'valid'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'cf66b29371514bf0bde17e835e8e2256'
                        key: {
                            name: 'x_412550_catal_config'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'cfb6daa0694f4e25951b60bbafd81dc9'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: 'requestNumber'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd03e9ff0f3194412aef82d6367b45f9a'
                        key: {
                            name: 'var__m_sys_hub_action_output_3ef594acf66a422da96a6c729001a5ee'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd08a75ad78af4bd9af070812d2c56e2a'
                        key: {
                            name: 'var__m_sys_hub_action_input_846bedc96ac1404ca575e9caf1147300'
                            element: 'configurationName'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd102d89ab8fb4d02b7a78fb21d7da344'
                        key: {
                            question: {
                                id: '4efb674ddd2d4a9ab53589a48f85ad34'
                                key: {
                                    cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'access'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd11ad695f91a4d8bb3129f0440c06bd1'
                        key: {
                            id: '938b82413cae435eb1c6a5884e6ff953'
                            table: 'var__m_sys_hub_step_ext_input_938b82413cae435eb1c6a5884e6ff953'
                            field: 'task_id'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd1629eeeed634be6b3bedbb9bbe6c862'
                        key: {
                            id: 'b26a1494969c4bbcb87eaa053808313d'
                            table: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            field: 'state'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd1bc16477ec44233a762ccb2a4098910'
                        key: {
                            question: {
                                id: '9f80dcdb1d234d10a9add2a0487197d1'
                                key: {
                                    cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                                    variable_set: 'NULL'
                                    name: 'environment'
                                }
                            }
                            value: 'testing'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'd1fd996ee3494d2b95bf519c01f7811f'
                        key: {
                            model: 'caa4b2278e504d3f91f9449890c8f961'
                            element: 'workNotes'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd21c24e1a3a14f3d956e40d48ff9ba69'
                        key: {
                            id: '5c1e331692644b329a8554a3604a07c7'
                            table: 'var__m_sys_hub_step_ext_input_5c1e331692644b329a8554a3604a07c7'
                            field: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd280d18527f148a895c95dab6e7342c3'
                        key: {
                            document_key: 'a2b090027b094f189d914abe81bf3e98'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'd38466ca4c9c418c9a93fb4516e3085d'
                        key: {
                            model: 'b26a1494969c4bbcb87eaa053808313d'
                            element: 'requestItemId'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd3ff31443c2b4555b518275c69ff11d1'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'integration_enabled'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd55e4e64f240460090d4275603225ba9'
                        key: {
                            document_key: '5c1e331692644b329a8554a3604a07c7'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd6593b269f0844528961d1e3dc4f3046'
                        key: {
                            id: 'c59b2e0cb52146668e1921a2084e34f7'
                            table: 'var__m_sys_hub_step_ext_input_c59b2e0cb52146668e1921a2084e34f7'
                            field: 'request_item_id'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'd69a0b648061474eb47cf7e584b4fde1'
                        key: {
                            model: '5c1e331692644b329a8554a3604a07c7'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'd7198c1e001944ebb3c4d62e72770188'
                        key: {
                            model: 'b8f937f312c64a2c98296c47b37bad91'
                            element: 'found'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9116a0be4a942b099df1edf912de773'
                        key: {
                            name: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'd9f2a4997ff6487e9c4758b4f23761bc'
                        key: {
                            id: '5c1e331692644b329a8554a3604a07c7'
                            table: 'var__m_sys_hub_step_ext_input_5c1e331692644b329a8554a3604a07c7'
                            field: 'task_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dabdb7e4439649288eeb182970c2bd66'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: 'requiredDate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dbe1148e552e4717816bf80e73349489'
                        key: {
                            name: 'var__m_sys_hub_action_input_3ef594acf66a422da96a6c729001a5ee'
                            element: 'fulfillmentGroup'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_output'
                        id: 'dc272a03f5574b9ba54316fab2d01627'
                        key: {
                            model: '8c74266b0b45403b85c13359e01f67c6'
                            element: 'isValid'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'dc6477aa55a745029e6ced3d6f38b452'
                        key: {
                            model: '5c1e331692644b329a8554a3604a07c7'
                            element: 'task_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc71a632259f4f8babb8f78dea1b0ac0'
                        key: {
                            name: 'var__m_sys_hub_action_input_caa4b2278e504d3f91f9449890c8f961'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'dca5e6a8e6b14a4dbf945cbfce3ddcf9'
                        key: {
                            document_key: 'a2b090027b094f189d914abe81bf3e98'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'dd38d05f9b9b487f97839d24b2ce4430'
                        key: {
                            model: '938b82413cae435eb1c6a5884e6ff953'
                            element: 'message'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'ddbe434617374db495a982ca53312624'
                        key: {
                            id: 'c5e1323322b647e2b7a4b034577958b7'
                            table: 'var__m_sys_hub_action_output_c5e1323322b647e2b7a4b034577958b7'
                            field: 'warehouseName'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddf0e58158334639b25536b31a1fabd9'
                        key: {
                            name: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            element: '__dont_treat_as_error__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'df17878472fb49d6a864296ed7b0dff7'
                        key: {
                            document_key: 'e561ec4bbeb84d9d9c69e25bbff8342d'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'df374652ce8f4db7acf33be6cd9f7d5c'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'request_item_id'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'df9737f33a01466688728892e3c5b51f'
                        key: {
                            model: '6c399e42a5fa44b983ce73f7091a030f'
                            element: 'stage'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e1ba30b7f547450ea83fb8f846b94ff3'
                        key: {
                            model: 'b8f937f312c64a2c98296c47b37bad91'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'e3026f4c65e14f69b194535928ef22d0'
                        key: {
                            question: {
                                id: '756df8cbb910495ba9dce9430526dacd'
                                key: {
                                    cat_item: '7fff5c8050a84ae08ece2beef289932a'
                                    variable_set: 'NULL'
                                    name: 'auto_suspend_seconds'
                                }
                            }
                            value: '60'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e35aebe2249647aba4ebea0c253671c7'
                        key: {
                            model: '3ef594acf66a422da96a6c729001a5ee'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e397a1b39bb743519be70e62627592de'
                        key: {
                            name: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            element: 'message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e537c73fdecc4beaaced63f9711bd710'
                        key: {
                            name: 'var__m_sys_hub_action_output_b26a1494969c4bbcb87eaa053808313d'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5df34907f0c4724af6188a97f653224'
                        key: {
                            name: 'var__m_sys_hub_action_input_a5527048ebde44e7aaeaa65e330d2baa'
                            element: 'requestItemId'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'e6f422be23bf4a18b9b28dcfe0cf8649'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e79567901ff54a399b69c3683176b5e2'
                        key: {
                            model: 'b8f937f312c64a2c98296c47b37bad91'
                            element: 'assignedTechnician'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7da79b94cb94345b6c2d5a679d5c220'
                        key: {
                            name: 'var__m_sys_hub_flow_output_8c74266b0b45403b85c13359e01f67c6'
                            element: 'isValid'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'e80d6da2420043f6a70b91d42be425cd'
                        key: {
                            model: 'caa4b2278e504d3f91f9449890c8f961'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_input'
                        id: 'eb3edaa685764bf28be039a24d3e659b'
                        key: {
                            model: '5c1e331692644b329a8554a3604a07c7'
                            element: 'work_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebd4796d05754a9da48932e34fba6999'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'auto_assign'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec03a6b02c43436c8765fc706669ede3'
                        key: {
                            name: 'var__m_sys_hub_action_output_a5527048ebde44e7aaeaa65e330d2baa'
                            element: '__action_status__'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec4813b55c5e4b719f48f72e49afd733'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: 'found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ecb329eba4b34898959d4360930a7c58'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'fulfillment_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'ed9c1c266e50486b9aa1724c949619a4'
                        key: {
                            model: '846bedc96ac1404ca575e9caf1147300'
                            element: '__dont_treat_as_error__'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'ef0448b08cc7465abbcb8f9f016713ed'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: 'requestType'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'f0301ae3fecb4174b16c55f83692838a'
                        key: {
                            model: '938b82413cae435eb1c6a5884e6ff953'
                            element: 'assigned'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'f1060e8f7adb42edb20d981505ef33bd'
                        key: {
                            question: {
                                id: '756df8cbb910495ba9dce9430526dacd'
                                key: {
                                    cat_item: '7fff5c8050a84ae08ece2beef289932a'
                                    variable_set: 'NULL'
                                    name: 'auto_suspend_seconds'
                                }
                            }
                            value: '600'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f2c9a3fc43e24bcf901f304799e73ff6'
                        key: {
                            name: 'var__m_sys_hub_action_output_caa4b2278e504d3f91f9449890c8f961'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'f31d790d96d1429a9950be46a87b63ec'
                        key: {
                            question: {
                                id: '4efb674ddd2d4a9ab53589a48f85ad34'
                                key: {
                                    cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'support'
                        }
                    },
                    {
                        table: 'sys_hub_action_input'
                        id: 'f490e304477847308c8113bee6f26d99'
                        key: {
                            model: '846bedc96ac1404ca575e9caf1147300'
                            element: 'configurationName'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'f51e12a3ad6443be97e22f0c1d8b5f7c'
                        key: {
                            model: '3ef594acf66a422da96a6c729001a5ee'
                            element: 'assigned'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f535929a0d544a678a1157456e8c9385'
                        key: {
                            name: 'var__m_sys_hub_flow_input_8c74266b0b45403b85c13359e01f67c6'
                            element: 'requestType'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f5d38daa051a46bab1514322d90c6657'
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_412550_catal_config'
                                    caption: 'Configuration Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'integration_enabled'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f767732c83854618824c33810ce50f9f'
                        key: {
                            id: 'b8f937f312c64a2c98296c47b37bad91'
                            table: 'var__m_sys_hub_action_output_b8f937f312c64a2c98296c47b37bad91'
                            field: 'message'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f7cf1da829904f24aedae88fa88b3702'
                        key: {
                            document_key: 'c59b2e0cb52146668e1921a2084e34f7'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'f7f1a6afc65c413f84905862543ab65d'
                        key: {
                            id: '846bedc96ac1404ca575e9caf1147300'
                            table: 'var__m_sys_hub_action_output_846bedc96ac1404ca575e9caf1147300'
                            field: 'taskNumber'
                        }
                    },
                    {
                        table: 'sys_hub_action_output'
                        id: 'f8c8c7aa3bd241c5aa394ea24ea6c898'
                        key: {
                            model: 'be3949ef96d8457fb6c1efa6f4621aba'
                            element: '__action_status__'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'f95b21fcf3104c789789b81301060659'
                        key: {
                            document_key: '6c399e42a5fa44b983ce73f7091a030f'
                            variable: '74315b04b3201300176b051a16a8dc2b'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'fa143e778da04e40809168f85f195306'
                        key: {
                            id: 'c59b2e0cb52146668e1921a2084e34f7'
                            table: 'var__m_sys_hub_step_ext_input_c59b2e0cb52146668e1921a2084e34f7'
                            field: 'task_short_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc96d9ed9b3b48548c3383f88a36bd78'
                        key: {
                            name: 'var__m_sys_hub_action_input_be3949ef96d8457fb6c1efa6f4621aba'
                            element: 'logMessage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_step_ext_output'
                        id: 'fcdbdb0485d24f4f845d55a5c6b31e3a'
                        key: {
                            model: '5c1e331692644b329a8554a3604a07c7'
                            element: 'updated'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe11d93d8f784532bf9fb0eeef429d67'
                        key: {
                            name: 'var__m_sys_hub_action_input_be3949ef96d8457fb6c1efa6f4621aba'
                            element: 'requestNumber'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
