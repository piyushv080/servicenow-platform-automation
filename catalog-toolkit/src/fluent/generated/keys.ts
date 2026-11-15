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
                    bom_json: {
                        table: 'sys_module'
                        id: '7b94ae1e78834f05b9ee270705a084da'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'ddb94cbf24ff44f8b2de3115367a887e'
                        deleted: true
                    }
                    catalog_request_log_step: {
                        table: 'sys_hub_step_instance'
                        id: '4965ceb0f53343b39564b7044321b2a3'
                    }
                    catalog_request_logging: {
                        table: 'sys_hub_action_type_definition'
                        id: 'be3949ef96d8457fb6c1efa6f4621aba'
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
                    cs0: {
                        table: 'sys_script_client'
                        id: '1f86da27f68c414e99e8f986e74169b3'
                        deleted: true
                    }
                    generic_it_service_request: {
                        table: 'sc_cat_item'
                        id: 'a676a847b4e84741afc14fe6f675bfbd'
                    }
                    generic_request_validation: {
                        table: 'catalog_script_client'
                        id: '61b676ac7aac4ee09718fe74aeb056f7'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '07b77f6824384073a8bd12b4360c8146'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'df0653f5b2ab4fd5a750d7a245239bbd'
                    }
                    'src_server_script-includes_catalog-request-utils_js': {
                        table: 'sys_module'
                        id: '8964153184bb4355b24c469fd5320fda'
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
                        id: '00629b968b3c4ff3a62b4971e9d6d152'
                        key: {
                            model: 'be3949ef96d8457fb6c1efa6f4621aba'
                            element: '__dont_treat_as_error__'
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
                        table: 'sys_hub_flow_input'
                        id: '06bfc18bb6764c86a85ed3b0f9433b64'
                        key: {
                            model: '8c74266b0b45403b85c13359e01f67c6'
                            element: 'requestType'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10700983268c4f8daa1feb073e540c44'
                        key: {
                            name: 'x_servicenow_catal_config'
                            element: 'NULL'
                            language: 'en'
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
                                    name: 'x_servicenow_catal_config'
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
                        id: '1c34b52d6c3c4a2f8ca4b743ce032641'
                        key: {
                            name: 'var__m_sys_hub_action_output_be3949ef96d8457fb6c1efa6f4621aba'
                            element: 'logged'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1daf64c8f743430283fedc562916372e'
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_servicenow_catal_config'
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
                        table: 'ua_table_licensing_config'
                        id: '22581ffb780149ae8cab9625f1ca4bd7'
                        key: {
                            name: 'x_servicenow_catal_config'
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
                        table: 'sys_element_mapping'
                        id: '2ee3e8c6c8af47ff905a0eae74d0f4e9'
                        key: {
                            id: 'be3949ef96d8457fb6c1efa6f4621aba'
                            table: 'var__m_sys_hub_action_output_be3949ef96d8457fb6c1efa6f4621aba'
                            field: 'logged'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4562cb07623542fd9d486b88f922a670'
                        key: {
                            sys_ui_section: {
                                id: '807ec15e2d624915836ffc142e94f1b7'
                                key: {
                                    name: 'x_servicenow_catal_config'
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
                        table: 'sys_dictionary'
                        id: '5125714db5244f8c9a75cce0f5620e7a'
                        key: {
                            name: 'x_servicenow_catal_config'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55310cbebc354136b6c87b2e03bc9014'
                        key: {
                            name: 'x_servicenow_catal_config'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '5c691878e24f4521a76b81432e7f348a'
                        key: {
                            sc_cat_item: 'a676a847b4e84741afc14fe6f675bfbd'
                            sc_category: '803e95e1c3732100fca206e939ba8f2a'
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
                        table: 'sys_hub_action_input'
                        id: '70c9e45e84414cddbe3b2bebea7a8a0a'
                        key: {
                            model: 'be3949ef96d8457fb6c1efa6f4621aba'
                            element: 'requestNumber'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '777a2be0fef54ecb8067edd62621f90b'
                        key: {
                            name: 'x_servicenow_catal_config'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '807ec15e2d624915836ffc142e94f1b7'
                        key: {
                            name: 'x_servicenow_catal_config'
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
                        table: 'sys_documentation'
                        id: '84951eae794a46138f1f2ee8f0e983c5'
                        key: {
                            name: 'x_servicenow_catal_config'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99bb4cc0904143dbb3e0ed6e8de6ff9b'
                        key: {
                            name: 'x_servicenow_catal_config'
                            element: 'active'
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
                            name: 'x_servicenow_catal_config'
                            element: 'integration_enabled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a0b85216190a497b863f3bf9ce4b582f'
                        key: {
                            sys_ui_form: {
                                id: 'cf66b29371514bf0bde17e835e8e2256'
                                key: {
                                    name: 'x_servicenow_catal_config'
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
                                    name: 'x_servicenow_catal_config'
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
                        table: 'sys_dictionary'
                        id: 'a2a7ddbe5cca41eda5317b60e4d0e03c'
                        key: {
                            name: 'x_servicenow_catal_config'
                            element: 'description'
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
                        id: 'b85ff466bc21425b97205e24e88ab251'
                        key: {
                            name: 'x_servicenow_catal_config'
                            element: 'active'
                            language: 'en'
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
                        table: 'catalog_ui_policy_action'
                        id: 'c99664db3c6d49eea285ba5ebabaec4f'
                        key: {
                            ui_policy: '228acba5c19446599b92f79cb989886d'
                            catalog_variable: 'IO:additional_information'
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
                            name: 'x_servicenow_catal_config'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'cf66b29371514bf0bde17e835e8e2256'
                        key: {
                            name: 'x_servicenow_catal_config'
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
                        table: 'sys_dictionary'
                        id: 'd3ff31443c2b4555b518275c69ff11d1'
                        key: {
                            name: 'x_servicenow_catal_config'
                            element: 'integration_enabled'
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
                        table: 'sys_documentation'
                        id: 'e7da79b94cb94345b6c2d5a679d5c220'
                        key: {
                            name: 'var__m_sys_hub_flow_output_8c74266b0b45403b85c13359e01f67c6'
                            element: 'isValid'
                            language: 'en'
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
                                    name: 'x_servicenow_catal_config'
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
                        table: 'sys_hub_action_output'
                        id: 'f8c8c7aa3bd241c5aa394ea24ea6c898'
                        key: {
                            model: 'be3949ef96d8457fb6c1efa6f4621aba'
                            element: '__action_status__'
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
