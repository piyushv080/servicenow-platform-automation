import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '280f286eb7d4404b837d3a9a3efcee44'
                    }
                    ipm_approval_create_acl: {
                        table: 'sys_security_acl'
                        id: 'c1d436952c244329853528d5ee8c28aa'
                    }
                    ipm_approval_read_acl: {
                        table: 'sys_security_acl'
                        id: 'a4b0f3deed594efdaa10eccd4c4ed8d9'
                    }
                    ipm_approval_write_acl: {
                        table: 'sys_security_acl'
                        id: 'cd4c6c6623464749b418c448138e649d'
                    }
                    ipm_cluster_solution_property: {
                        table: 'sys_properties'
                        id: 'f97ad0ced6c844cc88a475787fb29a85'
                    }
                    ipm_problem_manager_role_property: {
                        table: 'sys_properties'
                        id: 'cd6349f9c57342989c22444785cc20d1'
                    }
                    ipm_skill_capability_property: {
                        table: 'sys_properties'
                        id: '6ad06e776b6d4071b742622e37a1022d'
                    }
                    ipm_skill_config_property: {
                        table: 'sys_properties'
                        id: '6b2256367da34deaa170020a79541789'
                    }
                    ipm_skill_input_name_property: {
                        table: 'sys_properties'
                        id: '6e18613ecba04f35bb804b0f43c30f35'
                    }
                    IPMAccessService: {
                        table: 'sys_script_include'
                        id: '3098421ce8d54947b1419f6676de08da'
                    }
                    IPMAnalysisService: {
                        table: 'sys_script_include'
                        id: '64a3b4370ba144a6896ad4c4e58214c9'
                    }
                    IPMDashboardService: {
                        table: 'sys_script_include'
                        id: '4e4aba398f694d098fe19bce6a94b38f'
                    }
                    IPMIncidentService: {
                        table: 'sys_script_include'
                        id: 'e0341f2bed60404194b15126eda8587d'
                    }
                    IPMPredictiveService: {
                        table: 'sys_script_include'
                        id: 'dad10959a8464dcfacad19a362d09832'
                    }
                    IPMProblemService: {
                        table: 'sys_script_include'
                        id: '09f49c69c7e9473082b5f79e96e296a9'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '1409f7470aa0428e990c18d73287ca09'
                    }
                    'src_server_script-includes_IPMAccessService_js': {
                        table: 'sys_module'
                        id: 'f647c95138314b9883bbacfb59aff2d2'
                    }
                    'src_server_script-includes_IPMAnalysisService_js': {
                        table: 'sys_module'
                        id: 'b03faad21fae4f91b74bf6028682ecf6'
                    }
                    'src_server_script-includes_IPMDashboardService_js': {
                        table: 'sys_module'
                        id: '2c46f26101b8448484799e3715e71da7'
                    }
                    'src_server_script-includes_IPMIncidentService_js': {
                        table: 'sys_module'
                        id: '63899dc72bf94114a8147b8e21d503ff'
                    }
                    'src_server_script-includes_IPMPredictiveService_js': {
                        table: 'sys_module'
                        id: '81cdcfa17ff3425598f29f0b09586ef7'
                    }
                    'src_server_script-includes_IPMProblemService_js': {
                        table: 'sys_module'
                        id: '8a4ed725d26d40d582ffc47b626a894b'
                    }
                    x_412550_ipmp_ipm_dashboard_column: {
                        table: 'sp_column'
                        id: '319481b4c5f84b369e8d667d2153c6a3'
                    }
                    x_412550_ipmp_ipm_dashboard_container: {
                        table: 'sp_container'
                        id: 'b750d0c043c84d8991f89f162cf0dcea'
                    }
                    x_412550_ipmp_ipm_dashboard_instance: {
                        table: 'sp_instance'
                        id: 'b04d48290f69483fac02f34722f02f6e'
                    }
                    x_412550_ipmp_ipm_dashboard_row: {
                        table: 'sp_row'
                        id: '4cfa374fd05b4f8ba54a7bfac3730733'
                    }
                    x_412550_ipmp_ipm_dashboard_widget: {
                        table: 'sp_widget'
                        id: 'e353ffd73de247af8e9c725271a91414'
                    }
                    x_412550_ipmp_ipm_portal: {
                        table: 'sp_portal'
                        id: '06e6563613874b76b365c15f60347d64'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '0a67729329b64ef58139e30b02e1adda'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'incident_ids_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e156eae8f7a4e358f746abe49212be6'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f8b900c953e4f69aaa1ed416ee049f1'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '15a554eacc84422aa322712dd27a0e41'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'state'
                            value: 'rejected'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '1fc19e38b6f7468880c68d49300a2917'
                        key: {
                            id: 'x_412550_ipmp_ipm_dashboard'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25582d56bedd49d3a63b9c9714065fca'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'problem'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36f4813eed12482484498af12ad385ea'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'draft_json'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '4497fe6fea0449c0883c863a07088b00'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
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
                        table: 'sys_ui_element'
                        id: '4808a50cb9fb4edeb96b579ae07c528d'
                        key: {
                            sys_ui_section: {
                                id: 'd8c536527def4e31b7ca50a1d8018bc6'
                                key: {
                                    name: 'x_412550_ipmp_ipm_approval'
                                    caption: 'Approval Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'draft_json'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4b30d9dfd9094bceae020f654517852f'
                        key: {
                            sys_ui_section: {
                                id: 'd8c536527def4e31b7ca50a1d8018bc6'
                                key: {
                                    name: 'x_412550_ipmp_ipm_approval'
                                    caption: 'Approval Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approved_by'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4c1bc71d12a44ebe976c43db051f30e6'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c529e9283114c35b5400ea91b4fab9a'
                        key: {
                            sys_ui_section: {
                                id: 'd8c536527def4e31b7ca50a1d8018bc6'
                                key: {
                                    name: 'x_412550_ipmp_ipm_approval'
                                    caption: 'Approval Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53c29b518d324dddb9f14b8e2d7d567b'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'approved_by'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ba355dd3c4f4fcb9fe325cdaf75f5b5'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'state'
                            value: 'processing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '60e66dbc11f74158ba535649ecb578c6'
                        key: {
                            sys_ui_section: {
                                id: 'd8c536527def4e31b7ca50a1d8018bc6'
                                key: {
                                    name: 'x_412550_ipmp_ipm_approval'
                                    caption: 'Approval Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_by'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6ccc37bc0be044158265a11a45245a23'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'state'
                            value: 'approved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73eef1c213784836b8f39d54b905cb44'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'draft_json'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7760762d64f84c97b82a12a37e0732fe'
                        key: {
                            sys_security_acl: 'cd4c6c6623464749b418c448138e649d'
                            sys_user_role: {
                                id: 'faaa51c0bc1a47389f91b4677fdb71f6'
                                key: {
                                    name: 'x_412550_ipmp.problem_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d48ff1cf4a348cca2f1f195f7258cef'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'state'
                            value: 'completed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9956821e6cbc4cb9b7ccc9671b3e77db'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'requested_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e2fbfaa5ded4bd59464752a26644e37'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'problem'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9ff4bbdf712447bcb6f3ebc663fc1632'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8bc9cecb73142ca8e4a2d51fc16eb03'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ac21675de1ae4fb1b5a9bce301d32021'
                        key: {
                            sys_security_acl: 'c1d436952c244329853528d5ee8c28aa'
                            sys_user_role: {
                                id: 'faaa51c0bc1a47389f91b4677fdb71f6'
                                key: {
                                    name: 'x_412550_ipmp.problem_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b8bebbf3e7314c8cb7460d0933e94f9f'
                        key: {
                            sys_security_acl: 'a4b0f3deed594efdaa10eccd4c4ed8d9'
                            sys_user_role: {
                                id: '472cba0a55b743ce967a48012bbc3812'
                                key: {
                                    name: 'problem_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b9224ba858524c97ac6d66291cc42a5f'
                        key: {
                            sys_security_acl: 'cd4c6c6623464749b418c448138e649d'
                            sys_user_role: {
                                id: '472cba0a55b743ce967a48012bbc3812'
                                key: {
                                    name: 'problem_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce1bb97fb46548108c43399a89bbc89f'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'approved_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ceaf2f6706d345b8b6a3540e266a8d60'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'cebd781f3cf44310b7001366fbf8aeb3'
                        key: {
                            sys_ui_form: {
                                id: '4497fe6fea0449c0883c863a07088b00'
                                key: {
                                    name: 'x_412550_ipmp_ipm_approval'
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
                                id: 'd8c536527def4e31b7ca50a1d8018bc6'
                                key: {
                                    name: 'x_412550_ipmp_ipm_approval'
                                    caption: 'Approval Request'
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
                        table: 'sys_ui_section'
                        id: 'd8c536527def4e31b7ca50a1d8018bc6'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            caption: 'Approval Request'
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
                        id: 'dbd0db9140f44e25bfef6a584f638df5'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'requested_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e1d80d64e4b84d319d9915413e0f6c8f'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'state'
                            value: 'requested'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e3a02751da554932881686c6d06fcd90'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e47b0c59f6644ac7897f8c554e7e38a5'
                        key: {
                            sys_security_acl: 'c1d436952c244329853528d5ee8c28aa'
                            sys_user_role: {
                                id: '472cba0a55b743ce967a48012bbc3812'
                                key: {
                                    name: 'problem_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e8812e475f1a4137b3bfc3afdc9bc128'
                        key: {
                            sys_ui_section: {
                                id: 'd8c536527def4e31b7ca50a1d8018bc6'
                                key: {
                                    name: 'x_412550_ipmp_ipm_approval'
                                    caption: 'Approval Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'incident_ids_json'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f05e7e73689844c49ac8bd48f4aad412'
                        key: {
                            name: 'x_412550_ipmp_ipm_approval'
                            element: 'incident_ids_json'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f23eb8267b4d427283a3f8aaf09266fb'
                        key: {
                            sys_security_acl: 'a4b0f3deed594efdaa10eccd4c4ed8d9'
                            sys_user_role: {
                                id: 'faaa51c0bc1a47389f91b4677fdb71f6'
                                key: {
                                    name: 'x_412550_ipmp.problem_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f33edb1d703c4b97a393ef7987080630'
                        key: {
                            sys_ui_section: {
                                id: 'd8c536527def4e31b7ca50a1d8018bc6'
                                key: {
                                    name: 'x_412550_ipmp_ipm_approval'
                                    caption: 'Approval Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'problem'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'faaa51c0bc1a47389f91b4677fdb71f6'
                        key: {
                            name: 'x_412550_ipmp.problem_manager'
                        }
                    },
                ]
            }
        }
    }
}
