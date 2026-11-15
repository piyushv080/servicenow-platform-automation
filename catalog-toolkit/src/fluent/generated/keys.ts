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
                    create_fulfillment_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '01387dd80ad4457e9015a4503e33754c'
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
                    generic_request_catalog_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '6d942fd9afda41ebbd98b0175256bb71'
                    }
                    generic_request_validation: {
                        table: 'catalog_script_client'
                        id: '61b676ac7aac4ee09718fe74aeb056f7'
                    }
                    log_approval_rejection: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd784d676f1c04cd38e88b073c0c91410'
                    }
                    log_catalog_request: {
                        table: 'sys_hub_action_instance_v2'
                        id: '07802911f3244e76b412e280bf87da4f'
                        deleted: true
                    }
                    log_request_not_found: {
                        table: 'sys_hub_action_instance_v2'
                        id: '89134d77cdd14a6e896bbf7d15ebd79c'
                    }
                    log_request_success: {
                        table: 'sys_hub_action_instance_v2'
                        id: '6dc81256c89f4596a7e68b9c50e50dd5'
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
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'df0653f5b2ab4fd5a750d7a245239bbd'
                    }
                    'src_server_script-includes_catalog-request-utils_js': {
                        table: 'sys_module'
                        id: '8964153184bb4355b24c469fd5320fda'
                    }
                    'src_server_scripts_read-catalog-request_js': {
                        table: 'sys_module'
                        id: '5ae9a52f502640e7a9a4eb5a97c5fc50'
                    }
                    validate_catalog_request: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'ffa07f5c4e804ab98623e7ee4c40a965'
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
                        table: 'sys_variable_value'
                        id: '1532a88e1f25481da1f237d9b3889441'
                        key: {
                            document_key: 'a4fcd570c3db451ba64276cfd3ca883d'
                            variable: '74315b04b3201300176b051a16a8dc2b'
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
                        table: 'sys_documentation'
                        id: '1d7d02fbd8014ffdbb6e637ee50c3b05'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: '__dont_treat_as_error__'
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
                        table: 'ua_table_licensing_config'
                        id: '22581ffb780149ae8cab9625f1ca4bd7'
                        key: {
                            name: 'x_412550_catal_config'
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
                        table: 'sys_documentation'
                        id: '2b1dd39e565849409f528a2a35655413'
                        key: {
                            name: 'var__m_sys_hub_action_input_5e464c59519d4bb983b4823259cff23e'
                            element: 'requestItemId'
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
                        table: 'sys_element_mapping'
                        id: '382d38bf5d4a432b96c4d0c6f2490cf3'
                        key: {
                            id: '5e464c59519d4bb983b4823259cff23e'
                            table: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            field: 'businessJustification'
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
                        table: 'sys_ui_element'
                        id: '4562cb07623542fd9d486b88f922a670'
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
                        table: 'sys_documentation'
                        id: '49896b2d7e2046dd80572e360548353a'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: 'requestType'
                            language: 'en'
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
                        id: '4d26ab1263354d4f976d62a2be422786'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: '__dont_treat_as_error__'
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
                        table: 'sys_variable_value'
                        id: '4fb17ba9bc6c49c9b52aa034e26b0580'
                        key: {
                            document_key: 'a4fcd570c3db451ba64276cfd3ca883d'
                            variable: '71aa7f6647032200b4fad7527c9a719b'
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
                        table: 'sys_dictionary'
                        id: '55310cbebc354136b6c87b2e03bc9014'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'NULL'
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
                        table: 'sys_hub_action_output'
                        id: '5ecb157d61a34dfcb25e13359730ccc0'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
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
                        table: 'sys_hub_action_output'
                        id: '81ea604771d645e9903bbba524361614'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: 'requiredDate'
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
                        table: 'sys_hub_action_output'
                        id: '85d90c02f46b42cd95aeeaca7e915a4a'
                        key: {
                            model: '5e464c59519d4bb983b4823259cff23e'
                            element: '__action_status__'
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
                        id: '95c752a186924481984a4563a42bcbe4'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'found'
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
                        table: 'sys_hub_step_ext_output'
                        id: '9d0d196961864ff6be9d42a743dfe5b7'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'environment'
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
                        id: 'b85ff466bc21425b97205e24e88ab251'
                        key: {
                            name: 'x_412550_catal_config'
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
                        table: 'item_option_new'
                        id: 'bdee2f2a06d84931be1beb2e3741d41f'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '10a720b0e72848c8a10d2783cc7938b3'
                            name: 'contact_number'
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
                        table: 'sys_hub_step_ext_output'
                        id: 'c1c3f551d58e43eb9ff782834ee5ee63'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'required_date'
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
                        table: 'sys_dictionary'
                        id: 'd3ff31443c2b4555b518275c69ff11d1'
                        key: {
                            name: 'x_412550_catal_config'
                            element: 'integration_enabled'
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
                        table: 'sys_hub_flow_output'
                        id: 'dc272a03f5574b9ba54316fab2d01627'
                        key: {
                            model: '8c74266b0b45403b85c13359e01f67c6'
                            element: 'isValid'
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
                        id: 'e6f422be23bf4a18b9b28dcfe0cf8649'
                        key: {
                            model: 'a4fcd570c3db451ba64276cfd3ca883d'
                            element: 'request_type'
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
                        id: 'ec4813b55c5e4b719f48f72e49afd733'
                        key: {
                            name: 'var__m_sys_hub_action_output_5e464c59519d4bb983b4823259cff23e'
                            element: 'found'
                            language: 'en'
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
