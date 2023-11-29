var FormTemplate3={
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
                    data:case_labels
                },
                caseProject:{
                    placeholder:"所属项目",
                    label:"所属项目:",
                    type:"combobox",
                    isOptional:false,
                    data:projects
                },
                casePersonnel:{
                    placeholder:"我方当事人",
                    label:"我方当事人:",
                    type:"multicombobox",
                    isOptional:false,
                    data:caseRelatedParty,
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
                    data:case_catelogs
                },
                caseType:{
                    placeholder:"案件类型",
                    label:"案件类型:",
                    type:"radio",
                    isOptional:false,
                    data:case_types
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
                    data:case_causes,
                    isFilterable:true
                },
                caseReason:{
                    placeholder:"案发原因",
                    label:"案发原因:",
                    type:"combobox",
                    isOptional:false,
                    data:case_reason
                },
                caseOrgnization:{
                    placeholder:"受理机构",
                    label:"受理机构:",
                    type:"combobox",
                    isOptional:false,
                    data:case_orgnization
                },
                caseOrgnizationPersonnel:{
                    placeholder:"受理相关人",
                    label:"受理相关人:",
                    type:"multicombobox",
                    isOptional:true,
                    data:case_orgnizationPersonnel,
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