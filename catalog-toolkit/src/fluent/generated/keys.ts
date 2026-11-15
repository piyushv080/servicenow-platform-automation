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
                }
                composite: [
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
                        table: 'sys_documentation'
                        id: 'b85ff466bc21425b97205e24e88ab251'
                        key: {
                            name: 'x_servicenow_catal_config'
                            element: 'active'
                            language: 'en'
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
                ]
            }
        }
    }
}
