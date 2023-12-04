var FormTemplate3;
var FormTemplate;
var _progressTableTemplate;
var _firstPageTableColumns;
var firstPageTableColumns;
var progressTableTemplate;
var progress_form_template;
var progress_status_details_request;
var list;
var list_proerty;
var list_evidence;
var list_executed;
var _summary_template;
  $('body').on(preload_completed_event_name,function(data){
    //console.log(case_orgnizationPersonnel);
    FormTemplate3={
        settings:{
            templateColumn:"33.3% 33.3% 33.3%",
            hasLabel:true,
            hasPlaceHolder:true,
            labelPosition:"left",
            width:"100%",
            textareaHeight:50,
            isCollapsibleGrouping:true
        },
        template:{
            baseInfo:{
                label:"基础信息",
                data:{
                    caseNo:{
                        placeholder:"案件编号",
                        label:"案件编号:",
                        type:"text",
                        isOptional:false,
                    },
                    caseName:{
                        placeholder:"案件名称",
                        label:"案件名称:",
                        type:"text",
                        isOptional:false,
                    },
                    caseLabel:{
                        placeholder:"案件标签",
                        label:"案件标签:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.caseLabels
                    },
                    caseProject:{
                        placeholder:"所属项目",
                        label:"所属项目:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.projects
                    },
                    casePersonnel:{
                        placeholder:"我方当事人",
                        label:"我方当事人:",
                        type:"supermulticombobox",
                        isOptional:false,
                        data:resourceDatas.casePersonnel,
                        isFilterable:true,
                        displayFormat:'{value} ({status})'//'{name} {contact} {institution}'
                    },
                    case2ndParty:{
                        placeholder:"对方当事人",
                        label:"对方当事人:",
                        type:"supermultiinput",
                        isFilterable:true,
                        isOptional:false,
                    },
                    caseCatelog:{
                        placeholder:"案件类别",
                        label:"案件类别:",
                        type:"radio",
                        isOptional:false,
                        data:resourceDatas.caseCatelogs
                    },
                    caseType:{
                        placeholder:"案件类型",
                        label:"案件类型:",
                        type:"radio",
                        isOptional:false,
                        data:resourceDatas.caseTypes
                    },
                    caseDate:{
                        placeholder:"立案日期",
                        label:"立案日期:",
                        type:"date",
                        isOptional:false,
                    },
                    caseAttachments:{
                        placeholder:"上传文件",
                        label:"附件:",
                        type:"file",
                        isOptional:true,
                        data:"支持扩展名：rar. zip. doc. docx. pdf. jpg… 单个文件不超过200MB",
                        table:'caseAttachments'
                    }
                }
                
            },
            caseInfo:{
                label:"案件信息",
                data:{
                    caseCause:{
                        placeholder:"案由",
                        label:"案由:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.caseCauses,
                        isFilterable:true
                    },
                    caseReason:{
                        placeholder:"案发原因",
                        label:"案发原因:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.caseReason
                    },
                    legalInstitution:{
                        placeholder:"受理机构",
                        label:"受理机构:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.legalInstitution,
                        table:'caseStatus'
                    },
                    legalCounsel:{
                        placeholder:"受理相关人",
                        label:"受理相关人:",
                        type:"multicombobox",
                        isOptional:true,
                        data:resourceDatas.legalCounsels,
                        isFilterable:true,
                        table:'caseStatus',
                        displayFormat:'{name} {contact}'//'{name} {contact} {institution}'
                    },
                    requestAmount:{
                        placeholder:"本诉金额",
                        label:"本诉金额(万元):",
                        type:"text",
                        isOptional:true,
                        numberOnly:true,
                        defaultValue:0.0,
                        table:'caseStatus'
                    },
                    appealAmount:{
                        placeholder:"反诉金额",
                        label:"反诉金额(万元):",
                        type:"text",
                        isOptional:true,
                        numberOnly:true,
                        defaultValue:0.0,
                        table:'caseStatus'
                    },
                    caseLawsuitRequest:{
                        placeholder:"本诉请求",
                        label:"本诉请求:",
                        type:"textarea",
                        isOptional:true,
                        table:'caseStatus'
                    },
                    caseCounterclaimRequest:{
                        placeholder:"反诉请求",
                        label:"反诉请求:",
                        type:"textarea",
                        isOptional:true,
                        table:'caseStatus'
                    },
                    caseSum:{
                        placeholder:"案件摘要",
                        label:"案件摘要:",
                        type:"textarea",
                        isOptional:true,
                        table:'caseStatus'
                    },
                }
            }
        }
    }
    _progressTableTemplate=[
        {
            width:50,
            data:{
                checkallbox:{
                    type:"checkbox"
                },
            }
        },
        {
          width:Number.NaN,
          data:{
            caseLabel:{
                type:"backgroundColorLabel",
                data:case_labels,
                backgroundData:resourceDatas.caseLabelsColors,
                style:{'font-weight':'700','font-size':'18px'}
            }
          }
        },
        {
          width:Number.NaN,
          data:{
            caseReason:{
              label:"案发原因：",
              data:resourceDatas.caseReason,
              style:{'font-weight':'700','font-size':'18px'}
            },
            caseCreateDate:{
              label:"提交日期：", type:"date",dateFormat:'yyyy年MM月dd日'
            }
          }
        },
        {
          width:Number.NaN,
          data:{
            caseCause:{
              label:"案由：",
              data:resourceDatas.caseCauses
            },
            caseStatus:{
              label:"状态：",
              data:resourceDatas.caseStatus,
              type:"progresses"
            }
          }
        },
        {
            width:Number.NaN,
            data:{
                penalty:{
                    label:"判决金额(万)：",
                },
                paidAmount:{
                    label:"执行金额(万)：",
                }
            }
        },
        {
            width:240,
            data:{
                caseStatus:{
                    type:"progressesButton"
                }
            }
        },
        {
            width:Number.NaN,
            data:{
                rowButtons:{
                    type:"buttons",
                    data:[
                        {label:'查看',clss:'ui-icon-eye btn-icon-green ui-btn-icon-notext',href:"#"},
                        {label:'编辑',clss:'ui-icon-edit btn-icon-blue ui-btn-icon-notext'},
                        {label:'删除',clss:'ui-icon-delete btn-icon-red ui-btn-icon-notext'},
                    ]
                }
            }
        }
      ]
      _firstPageTableColumns={
        checkallbox:{
            width:50,
            type:"checkbox"
        },
        id:{
        label: "序号",
        width:50,
        type:"label"
        },
        caseNo:{
            label:"案件编号",
            type:"label"
        },
        caseName:{label:"案件名称",
        type:"label", isFilterable:true},
        caseReason:{label:"案由",
        type:"label",data:case_causes, isFilterable:true},
        caseType:{label:"案件类型",
        type:"label",data:case_types, isFilterable:true},
        caseProject:{label:"所属项目",
        type:"label",data:projects, isFilterable:true},
        caseApplicant:{label:"申请人",matchKey:"id",valueKey:"name",
        type:"label", isFilterable:true,isHidden:true},
        caseCreateDate:{label:"创建时间",
        type:"date", dateFormat:'yyyy年MM月dd日', isFilterable:true},
        rowButtons:{
            label:"操作",
            type:"buttons"
        }
    }
    
    firstPageTableColumns={
        id:{
        label: "序号",
        width:50,
        },
        caseNo:{
            label:"案件编号"
        },
        caseName:{label:"案件名称"},
        caseReason:{label:"案由",data:resourceDatas.caseReason},
        caseType:{label:"案件类型",data:resourceDatas.caseType},
        caseProject:{label:"所属项目",data:resourceDatas.projects},
        caseApplicant:{label:"申请人",},
        caseCreateDate:{label:"创建时间"},
    }
    progressTableTemplate=[
        {
          width:Number.NaN,
          data:{
            caseLabel:{
      
            }
          }
        },
        {
          width:Number.NaN,
          data:{
            caseReason:{
              label:"案发原因：",
              data:resourceDatas.caseReason
            },
            createDate:{
              label:"提交日期：",
            }
          }
        },
        {
          width:Number.NaN,
          data:{
            caseCause:{
              label:"案由：",
              data:resourceDatas.caseCause
            },
            caseStatus:{
              label:"状态：",
              data:resourceDatas.caseStatus
            }
          }
        },
        {
          width:Number.NaN,
          data:{
            penaltyAmount:{
              label:"判决金额(万)：",
            },
            exexuteAmount:{
              label:"执行金额(万)：",
            }
          }
        }
      ]
    FormTemplate={
        settings:{
            templateColumn:"50% 50%",
            hasLabel:true,
            hasPlaceHolder:true,
            labelPosition:"left",
            width:"100%",
            textareaHeight:50,
            isCollapsibleGrouping:true
        },
        template:{
            baseInfo:{
                label:"基础信息",
                data:{
                    caseNo:{
                        placeholder:"案件编号",
                        label:"案件编号:",
                        type:"text",
                        isOptional:false,
                    },
                    caseName:{
                        placeholder:"案件名称",
                        label:"案件名称:",
                        type:"text",
                        isOptional:false,
                    },
                    caseLabel:{
                        placeholder:"案件标签",
                        label:"案件标签:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.caseLabels
                    },
                    caseProject:{
                        placeholder:"所属项目",
                        label:"所属项目:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.projects
                    },
                    casePersonnel:{
                        placeholder:"我方当事人",
                        label:"我方当事人:",
                        type:"multicombobox",
                        isOptional:false,
                        data:resourceDatas.casePersonnel,
                        isFilterable:true 
                    },
                    case2ndParty:{
                        placeholder:"对方当事人",
                        label:"对方当事人:",
                        type:"text",
                        isOptional:false,
                    },
                    caseCatelog:{
                        placeholder:"案件类别",
                        label:"案件类别:",
                        type:"radio",
                        isOptional:false,
                        data:resourceDatas.caseCatelogs
                    },
                    caseType:{
                        placeholder:"案件类型",
                        label:"案件类型:",
                        type:"radio",
                        isOptional:false,
                        data:resourceDatas.caseType
                    },
                    caseDate:{
                        placeholder:"立案日期",
                        label:"立案日期:",
                        type:"date",
                        isOptional:false,
                    },
                    caseAttachments:{
                        placeholder:"上传文件",
                        label:"附件:",
                        type:"file",
                        isOptional:true,
                        data:"支持扩展名：rar. zip. doc. docx. pdf. jpg… 单个文件不超过200MB"
                    }
                }
                
            },
            caseInfo:{
                label:"案件信息",
                data:{
                    caseCause:{
                        placeholder:"案由",
                        label:"案由:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.caseInfo,
                        isFilterable:true
                    },
                    caseReason:{
                        placeholder:"案发原因",
                        label:"案发原因:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.caseReason
                    },
                    legalInstitution:{
                        placeholder:"受理机构",
                        label:"受理机构:",
                        type:"combobox",
                        isOptional:false,
                        data:resourceDatas.legalInstitution
                    },
                    legalCounsel:{
                        placeholder:"受理相关人",
                        label:"受理相关人:",
                        type:"multicombobox",
                        isOptional:true,
                        data:resourceDatas.legalCounsels,
                        isFilterable:true 
                    },
                    caseLawsuit:{
                        placeholder:"本诉金额",
                        label:"本诉金额(万元):",
                        type:"text",
                        isOptional:true,
                        numberOnly:true,
                        defaultValue:0.0
                    },
                    caseCounterclaim:{
                        placeholder:"反诉金额",
                        label:"反诉金额(万元):",
                        type:"text",
                        isOptional:true,
                        numberOnly:true,
                        defaultValue:0.0
                    },
                    caseLawsuitRequest:{
                        placeholder:"本诉请求",
                        label:"本诉请求:",
                        type:"textarea",
                        isOptional:true,
                    },
                    caseCounterclaimRequest:{
                        placeholder:"反诉请求",
                        label:"反诉请求:",
                        type:"textarea",
                        isOptional:true,
                    },
                    caseSum:{
                        placeholder:"案件摘要",
                        label:"案件摘要:",
                        type:"textarea",
                        isOptional:true,
                    },
                }
            }
        }
    }
    
    progress_form_template={
        settings:{
            hasLabel:true,
            hasPlaceHolder:true,
            labelPosition:"left",
            gridStyle:{'row-gap':"5px"},
            width:'350px',
            textareaHeight:90,
            isCollapsibleGrouping:false,
        },
        template:{
          legalInstitution:{
                type:"combobox",
                data:resourceDatas.legalInstitution,
                label:"法院：",
                isOptional:true,
            },
            legalAgencies:{
                type:"combobox",
                data:resourceDatas.legalAgencies,
                label:"代理法务：",
                isOptional:true,
            },
            lawFirm:{
                type:"combobox",
                data:resourceDatas.lawFirms,
                label:"代理律所：",
                isOptional:true,
            },
            attorney:{
                type:"multicombobox",
                data:resourceDatas.attorneys,
                label:"代理律师：",
                isOptional:true,
                //table:'caseStatus',
                displayFormat:'{name} {contact}'
            },
            penalty:{
                type:"text",
                label:"判决金额(万)：",
                isOptional:true,
                defaultValue:0.0
            },
                paidAmount:{
                type:"text",
                label:"执行金额(万)：",
                isOptional:true,
                defaultValue:0.0
            },
            FirstInstance:{
                type:"date",
                label:"一审日期：",
                isOptional:true,
                //defaultValue:0.0
            },
            SecondInstance:{
                type:"date",
                label:"二审日期：",
                isOptional:true,
                //defaultValue:0.0
            },
        }
      }
    progress_status_details_request={
        /*
        courtDate:{
          type:"date",
          label:"开庭日期："
        },
        */
        legalInstitution:{
          type:"text",
          label:"法院："
        },
        legalAgencies:{
          label:"代理法务：",
          type:"combobox",
          data:resourceDatas.legalAgencies,
        },
        lawFirm:{
          type:"text",
          label:"代理律所：",
          data:resourceDatas.lawFirms,
        },
        attorney:{
          type:"text",
          label:"代理律所：",
          data:resourceDatas.attorneys,
        },
        penaltyAmount:{
          type:"text",
          label:"判决金额(万)："
        },
        exexuteAmount:{
          type:"text",
          label:"执行金额(万)："
        },
      }
    
    
    list={
        caseUpdated:{
          label:"进展",
          type:"textarea"
        },caseDisputed:{
          label:"争议",
          type:"textarea"
        },dateUpdated:{
          label:"更新日期",
          type:"date"
        }
      }
      list_proerty={
        propertyName:{
          label:"资产",
          type:"text",
          width:'70%',
        },propertyStatus:{
          label:"状态",
          type:"combobox",
          width:150,
          data:resourceDatas.propertyStatus,
        },dateUpdated:{
          label:"更新日期",
          type:"date",
        }
      }
      list_evidence={
        fileName:{
          label:"证据名",
          type:"text",
        },numFile:{
          label:"份数",
          type:"number",
          width:50,
        },numCPage:{
          label:"页数",
          type:"number",
          width:50,
        },numOriginal:{
          label:"原件",
          type:"number",
          width:50,
        },numCopy:{
          label:"复印件",
          type:"number",
          width:50,
        },
        filePath:{
          label:"上传文件",
          type:"file",
          width:50,
        }
      }
      list_executed={
        dateExecuted:{
          label:"执行日期",
          type:"date",
          width:150,
        },purposeExecute:{
          label:"执行标的",
          type:"text",
          width:130,
        },personExecuted:{
          label:"执行经办人",
          type:"text",
          width:130,
        },personContact:{
          label:"经办人电话",
          type:"tel",
          width:130,
        },exexuteAmount:{
          label:"执行金额(万)",
          type:"text",
          width:100,
        },sumExecuted:{
          label:"说明",
          type:"text",
        }
      }
      _summary_template={
        basic:{
            label:"基本信息",
            data:{
                caseNo:{
                    label:"案件编号:",
                },
                caseName:{
                    label:"案件名称:",
                },
                caseLabel:{
                    placeholder:"案件标签:",
                    label:"案件标签:",
                    type:"combobox",
                    isOptional:false,
                    data:resourceDatas.caseLabels
                },
                caseProject:{
                    label:"所属项目:",
                    data:resourceDatas.projects
                },
                casePersonnel:{
                    placeholder:"我方当事人",
                    label:"我方当事人:",
                    type:"supermulticombobox",
                    isOptional:false,
                    data:resourceDatas.casePersonnel,
                    isFilterable:true ,
                    displayFormat:'{value} ({status})'
                },
                case2ndParty:{
                    placeholder:"对方当事人",
                    label:"对方当事人:",
                    type:"text",
                    isOptional:false,
                },
                caseCatelog:{
                    placeholder:"案件类别",
                    label:"案件类别:",
                    type:"radio",
                    isOptional:false,
                    data:case_catelogs
                },
                caseType:{
                    placeholder:"案件类型",
                    label:"案件类型:",
                    type:"radio",
                    isOptional:false,
                    data:case_types
                },
                caseStatus:{
                    label:"案件状态:",
                    data:progresses
                },
            }
            
        },
        legal:{
            label:"法律信息",
            data:{
              legalAgencies:{
                    label:"代理法务:",
                    data:resourceDatas.legalAgencies,
                },
                legalInstitution:{
                    label:"受理法院:",
                    data:resourceDatas.legalInstitution
                },
                legalCounsel:{
                    label:"受理相关人:",
                    data:resourceDatas.legalCounsels
                },
                lawFirm:{
                    label:"代理律所:",
                    data:resourceDatas.lawFirms
                },
                attorney:{
                    label:"代理律师:",
                    data:resourceDatas.attorneys
                }
            }
            
        },
        sum:{
            label:"金额信息",
            data:{
              appealAmount:{
                    label:"本诉金额:",
                },
                requestAmount:{
                    label:"反诉金额:",
                },
                penalty:{
                    label:"判决金额:",
                },
                paidAmount:{
                    label:"执行金额:",
                },
            }
        },
        summary:{
            label:"详细信息",
            data:{
              caseLawsuitRequest:{
                    placeholder:"本诉请求",
                    label:"本诉请求:",
                    type:"textarea",
                    isOptional:true,
                },
                caseCounterclaimRequest:{
                    placeholder:"反诉请求",
                    label:"反诉请求:",
                    type:"textarea",
                    isOptional:true,
                },
                caseSum:{
                    placeholder:"案件摘要",
                    label:"案件摘要:",
                    type:"textarea",
                    isOptional:true,
                },
            }
            
        },
        attachments:{
          label:"附件信息",
          data:{
            type:"listview",
            attachments:[]
          }
        },
        
    } 
    add_update_template={
      settings:{
        hasLabel:true,
        hasPlaceHolder:true,
        labelPosition:"left",
        width:'550px',
        textareaHeight:90,
        isCollapsibleGrouping:false,
      },
      template:list
    }
    add_execute_template={
      settings:{
        hasLabel:true,
        templateColumn:"50% 50%",
        hasPlaceHolder:true,
        labelPosition:"left",
        width:'850px',
        textareaHeight:90,
        isCollapsibleGrouping:false,
      },
      template:list_executed
    }
    add_property_template={
      settings:{
        hasLabel:true,
        hasPlaceHolder:true,
        labelPosition:"left",
        width:'550px',
        textareaHeight:90,
        isCollapsibleGrouping:false,
      },
      template:list_proerty
    }
    add_evidence_template={
      settings:{
        hasLabel:true,
        hasPlaceHolder:true,
        labelPosition:"left",
        width:'550px',
        textareaHeight:90,
        isCollapsibleGrouping:false,
      },
      template:list_evidence
    }
  });
  



const PopupBottomYesNo='<fieldset class="ui-grid-a popup_message_buts">'+
'<div class="ui-block-a"><a id="{0}" href="#" class="ui-btn ui-corner-all ui-shadow ui-icon-check popup_message_but">{2}</a></div>'+
'<div class="ui-block-b"><a id="{1}" href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-b ui-icon-back popup_message_but">{3}</a></div>'+
'</fieldset>';
const PopupBottomYes='<div class="popup_message_buts"><a id="{0}" href="#" class="ui-btn ui-corner-all ui-shadow ui-icon-check popup_message_but">{1}</a></div>';