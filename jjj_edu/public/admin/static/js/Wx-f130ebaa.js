import{E as e,d as l,e as i,l as t,m as a,c as s,f as o,o as d,v as n}from"./element-plus-fe2e4fed.js";import{M as m}from"./message-d78d2231.js";import{_ as r}from"./index-49a7d7a3.js";import{o as p,T as c,S as u,a as g,P as _,W as f,$ as h,X as j}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const b={data:()=>({formLabelWidth:"120px",dialogVisible:!1,loading:!1,isupload:!1,fieldList:[],title:"设置小程序消息订阅模板",checkList:[],settings:{},template_id:""}),props:["open_wx","messageModel"],created(){this.dialogVisible=this.open_wx,this.title=this.title+"("+this.messageModel.message_name+")",this.getData()},methods:{getData:function(){let e=this;e.loading=!0,m.fieldList({message_id:e.messageModel.message_id,message_type:"wx"},!0).then((l=>{l.data.list.forEach((function(e){e.field_new_ename=e.field_ename,e.filed_new_value=e.filed_value})),e.fieldList=l.data.list,null==l.data.settings||0==l.data.settings.length?(e.settings={},e.template_id=""):(e.settings=l.data.settings,e.template_id=l.data.settings.template_id),e.loading=!1,e.$nextTick((function(){e.initChecked()}))})).catch((e=>{}))},saveTemplate(){let l=this;l.loading=!0,m.saveSettings({fieldList:l.checkList,message_id:l.messageModel.message_id,message_type:"wx",template_id:l.template_id}).then((i=>{l.loading=!1,e({message:"保存成功",type:"success"}),l.dialogFormVisible(!0)})).catch((e=>{l.loading=!1}))},dialogFormVisible(e){e?this.$emit("closeDialog",{type:"success",openDialog:!1}):this.$emit("closeDialog",{type:"error",openDialog:!1})},handleSelectionChange(e){this.checkList=e},initChecked:function(){let e=this;"{}"!=JSON.stringify(e.settings)&&Object.keys(e.settings.var_data).forEach((function(l){e.fieldList.forEach((function(i){i.field_ename==l&&(e.$refs.fieldTable.toggleRowSelection(i,!0),i.field_new_ename=e.settings.var_data[l].field_name,i.filed_new_value=e.settings.var_data[l].filed_value)}))}))}}},w={class:"table-wrap"},v=g("div",{class:"operation-wrap"},[g("p",null," 配置说明："),g("p",null," 1、微信小程序订阅模板里有的字段才勾选，如果没有请勿勾选。"),g("p",null," 2、模板变量替换成微信小程序订阅模板里的字段。")],-1),V=["textContent"],y={class:"dialog-footer"};const C=r(b,[["render",function(e,m,r,b,C,k){const x=l,L=i,S=t,z=a,D=s,T=o,U=d,M=n;return p(),c(U,{title:C.title,modelValue:C.dialogVisible,"onUpdate:modelValue":m[1]||(m[1]=e=>C.dialogVisible=e),onClose:k.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:u((()=>[g("div",y,[_(T,{onClick:k.dialogFormVisible},{default:u((()=>[f("取 消")])),_:1},8,["onClick"]),_(T,{type:"primary",onClick:k.saveTemplate,loading:C.loading},{default:u((()=>[f("确 定")])),_:1},8,["onClick","loading"])])])),default:u((()=>[_(D,{size:"small"},{default:u((()=>[g("div",w,[v,g("div",null,[_(L,{label:"模板id："},{default:u((()=>[_(x,{size:"small",class:"max-w460",modelValue:C.template_id,"onUpdate:modelValue":m[0]||(m[0]=e=>C.template_id=e),placeholder:"请填写申请的微信小程序订阅模板消息idid"},null,8,["modelValue"])])),_:1})]),h((p(),c(z,{border:"",ref:"fieldTable",data:C.fieldList,onSelectionChange:k.handleSelectionChange},{default:u((()=>[_(S,{type:"selection",width:"55"}),_(S,{label:"字段名称"},{default:u((e=>[g("label",{textContent:j(e.row.field_name)},null,8,V)])),_:1}),_(S,{label:"模板变量名"},{default:u((e=>[_(x,{size:"small",prop:"field_new_ename",modelValue:e.row.field_new_ename,"onUpdate:modelValue":l=>e.row.field_new_ename=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),_(S,{label:"模板内容"},{default:u((e=>[_(x,{size:"small",prop:"filed_new_value",disabled:1===e.row.is_var,modelValue:e.row.filed_new_value,"onUpdate:modelValue":l=>e.row.filed_new_value=l},null,8,["disabled","modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[M,C.loading]])])])),_:1})])),_:1},8,["title","modelValue","onClose"])}]]);export{C as default};
