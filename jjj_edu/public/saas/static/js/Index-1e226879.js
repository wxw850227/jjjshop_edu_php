import{a as e,c as l,d as a,g as o,h as i,b as s,e as t,i as d,j as m,p as r,k as n,v as p,f as u}from"./element-plus-b1fe4ef5.js";import{r as c}from"./request-16c40424.js";import{_ as f}from"./index-ca2fca40.js";import{o as g,S as h,R as _,a as b,O as V,V as k,_ as w,ad as C,c as y,X as v}from"./@vue-413ce838.js";import{d as D}from"./base-1c9aa973.js";import"./lodash-es-12c6aa75.js";import"./async-validator-cf877c1f.js";import"./@vueuse-4fad2ccb.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1ce7f40b.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-router-569da8b3.js";import"./pinia-1c212f4d.js";let j={messageList:(e,l)=>c._post("/admin/message/index",e,l),addMessage:(e,l)=>c._post("/admin/message/add",e,l),editMessage:(e,l)=>c._post("/admin/message/edit",e,l),deleteMessage:(e,l)=>c._post("/admin/message/delete",e,l),fieldList:(e,l)=>c._post("/admin/message/field",e,l),saveField:(e,l)=>c._post("/admin/message/saveField",e,l)};const L={class:"dialog-footer"};const x={class:"dialog-footer"};const F={class:"common-level-rail"},U={class:"table-wrap"},M={class:"dialog-footer"};const W={class:"product"},z={class:"common-level-rail"},$={class:"product-content"},T={class:"table-wrap"};const q=f({components:{Edit:f({data:()=>({categoryList:[],formLabelWidth:"120px",dialogVisible:!1,loading:!1}),props:["open_edit","form"],created(){this.dialogVisible=this.open_edit},methods:{editMessage(){let l=this,a=this.form;l.$refs.form.validate((o=>{o&&(l.loading=!0,j.editMessage(a,!0).then((a=>{l.loading=!1,e({message:"恭喜你，修改成功",type:"success"}),l.dialogFormVisible(!0)})).catch((e=>{l.loading=!1})))}))},dialogFormVisible(e){e?this.$emit("closeDialog",{type:"success",openDialog:!1}):this.$emit("closeDialog",{type:"error",openDialog:!1})}}},[["render",function(e,m,r,n,p,u){const c=l,f=a,w=o,C=i,y=s,v=t,D=d;return g(),h(D,{title:"编辑消息",modelValue:p.dialogVisible,"onUpdate:modelValue":m[6]||(m[6]=e=>p.dialogVisible=e),onClose:u.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:_((()=>[b("div",L,[V(v,{onClick:u.dialogFormVisible},{default:_((()=>[k("取 消")])),_:1},8,["onClick"]),V(v,{type:"primary",onClick:u.editMessage,loading:p.loading},{default:_((()=>[k("确 定")])),_:1},8,["onClick","loading"])])])),default:_((()=>[V(y,{size:"small",model:r.form,ref:"form"},{default:_((()=>[V(f,{label:"消息名称","label-width":p.formLabelWidth,rules:[{required:!0,message:" "}],prop:"message_name"},{default:_((()=>[V(c,{modelValue:r.form.message_name,"onUpdate:modelValue":m[0]||(m[0]=e=>r.form.message_name=e),autocomplete:"off",placeholder:"请输入消息名称"},null,8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"名称(英文唯一)","label-width":p.formLabelWidth,rules:[{required:!0,message:" "}],prop:"message_ename"},{default:_((()=>[V(c,{modelValue:r.form.message_ename,"onUpdate:modelValue":m[1]||(m[1]=e=>r.form.message_ename=e),autocomplete:"off",placeholder:"请输入消息英文名称"},null,8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"通知对象","label-width":p.formLabelWidth},{default:_((()=>[V(C,{modelValue:r.form.message_to,"onUpdate:modelValue":m[2]||(m[2]=e=>r.form.message_to=e),placeholder:"请选择通知对象"},{default:_((()=>[V(w,{label:"会员",value:10})])),_:1},8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"消息类别","label-width":p.formLabelWidth},{default:_((()=>[V(C,{modelValue:r.form.message_type,"onUpdate:modelValue":m[3]||(m[3]=e=>r.form.message_type=e),placeholder:"请选择消息类别"},{default:_((()=>[V(w,{label:"订单",value:10})])),_:1},8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"排序","label-width":p.formLabelWidth},{default:_((()=>[V(c,{modelValue:r.form.sort,"onUpdate:modelValue":m[4]||(m[4]=e=>r.form.sort=e),placeholder:"请输入数字"},null,8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"备注","label-width":p.formLabelWidth},{default:_((()=>[V(c,{modelValue:r.form.remark,"onUpdate:modelValue":m[5]||(m[5]=e=>r.form.remark=e),autocomplete:"off",placeholder:"请输入备注"},null,8,["modelValue"])])),_:1},8,["label-width"])])),_:1},8,["model"])])),_:1},8,["modelValue","onClose"])}]]),Add:f({data:()=>({form:{status:0,sort:100},categoryList:[],sort:"100",radio:"1",formLabelWidth:"120px",dialogVisible:!1,loading:!1}),props:["open_add"],created(){this.dialogVisible=this.open_add},methods:{addClick(){let l=this,a=this.form;l.$refs.form.validate((o=>{o&&(l.loading=!0,j.addMessage(a,!0).then((a=>{1==a.code?(l.loading=!1,e({message:"恭喜你，添加成功",type:"success"}),l.dialogFormVisible(!0)):l.loading=!1})).catch((e=>{})))}))},dialogFormVisible(e){e?this.$emit("closeDialog",{type:"success",openDialog:!1}):this.$emit("closeDialog",{type:"error",openDialog:!1})}}},[["render",function(e,m,r,n,p,u){const c=l,f=a,w=o,C=i,y=s,v=t,D=d;return g(),h(D,{title:"添加消息",modelValue:p.dialogVisible,"onUpdate:modelValue":m[7]||(m[7]=e=>p.dialogVisible=e),onClose:u.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:_((()=>[b("div",x,[V(v,{onClick:u.dialogFormVisible},{default:_((()=>[k("取 消")])),_:1},8,["onClick"]),V(v,{type:"primary",onClick:m[6]||(m[6]=e=>u.addClick()),loading:p.loading},{default:_((()=>[k("确 定")])),_:1},8,["loading"])])])),default:_((()=>[V(y,{size:"small",model:p.form,ref:"form"},{default:_((()=>[V(f,{label:"消息名称","label-width":p.formLabelWidth,rules:[{required:!0,message:" "}],prop:"message_name"},{default:_((()=>[V(c,{modelValue:p.form.message_name,"onUpdate:modelValue":m[0]||(m[0]=e=>p.form.message_name=e),autocomplete:"off",placeholder:"请输入消息名称"},null,8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"名称(英文唯一)","label-width":p.formLabelWidth,rules:[{required:!0,message:" "}],prop:"message_ename"},{default:_((()=>[V(c,{modelValue:p.form.message_ename,"onUpdate:modelValue":m[1]||(m[1]=e=>p.form.message_ename=e),autocomplete:"off",placeholder:"请输入消息英文名称"},null,8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"通知对象","label-width":p.formLabelWidth},{default:_((()=>[V(C,{modelValue:p.form.message_to,"onUpdate:modelValue":m[2]||(m[2]=e=>p.form.message_to=e),placeholder:"请选择通知对象"},{default:_((()=>[V(w,{label:"会员",value:10})])),_:1},8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"消息类别","label-width":p.formLabelWidth},{default:_((()=>[V(C,{modelValue:p.form.message_type,"onUpdate:modelValue":m[3]||(m[3]=e=>p.form.message_type=e),placeholder:"请选择消息类别"},{default:_((()=>[V(w,{label:"订单",value:10})])),_:1},8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"排序","label-width":p.formLabelWidth},{default:_((()=>[V(c,{modelValue:p.form.sort,"onUpdate:modelValue":m[4]||(m[4]=e=>p.form.sort=e),placeholder:"请输入数字"},null,8,["modelValue"])])),_:1},8,["label-width"]),V(f,{label:"备注","label-width":p.formLabelWidth},{default:_((()=>[V(c,{modelValue:p.form.remark,"onUpdate:modelValue":m[5]||(m[5]=e=>p.form.remark=e),autocomplete:"off",placeholder:"请输入备注"},null,8,["modelValue"])])),_:1},8,["label-width"])])),_:1},8,["model"])])),_:1},8,["modelValue","onClose"])}]]),Field:f({data:()=>({formLabelWidth:"120px",dialogVisible:!1,title:"字段管理",fieldData:[],deleteIds:[],loading:!0}),props:["open_field","form"],created(){this.dialogVisible=this.open_field,this.title=this.title+"("+this.form.message_name+")",this.getFieldList()},methods:{getFieldList:function(){let e=this;j.fieldList({message_id:e.form.message_id},!0).then((l=>{e.loading=!1,e.fieldData=l.data.list})).catch((l=>{e.loading=!1}))},saveField:function(){let l=this;j.saveField({message_id:l.form.message_id,fieldData:l.fieldData,deleteIds:l.deleteIds},!0).then((a=>{e({message:"恭喜你，修改成功",type:"success"}),l.dialogFormVisible(!0)})).catch((e=>{}))},addClick:function(){this.fieldData.push({message_field_id:0,message_id:this.form.message_id,field_name:"",field_ename:"",filed_value:"",sort:100})},deleteClick:function(e){let l=this.fieldData[e];l.message_field_id>0&&this.deleteIds.push(l.message_field_id),this.fieldData.splice(e,1)},checkRow:function(e,l){l.is_var=e?1:0},dialogFormVisible(e){e?this.$emit("closeDialog",{type:"success",openDialog:!1}):this.$emit("closeDialog",{type:"error",openDialog:!1})}}},[["render",function(e,a,o,i,u,c){const f=t,C=l,y=m,v=r,D=n,j=s,L=d,x=p;return g(),h(L,{title:u.title,modelValue:u.dialogVisible,"onUpdate:modelValue":a[0]||(a[0]=e=>u.dialogVisible=e),onClose:c.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:_((()=>[b("div",M,[V(f,{onClick:c.dialogFormVisible},{default:_((()=>[k("取 消")])),_:1},8,["onClick"]),V(f,{type:"primary",onClick:c.saveField,loading:u.loading},{default:_((()=>[k("确 定")])),_:1},8,["onClick","loading"])])])),default:_((()=>[b("div",F,[V(f,{size:"small",type:"primary",onClick:c.addClick},{default:_((()=>[k("添加字段")])),_:1},8,["onClick"])]),V(j,{size:"small"},{default:_((()=>[b("div",U,[w((g(),h(D,{border:"",data:u.fieldData},{default:_((()=>[V(y,{label:"字段名称",width:"120px"},{default:_((e=>[V(C,{size:"small",prop:"field_name",modelValue:e.row.field_name,"onUpdate:modelValue":l=>e.row.field_name=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),V(y,{label:"字段英文名",width:"130px"},{default:_((e=>[V(C,{size:"small",prop:"field_ename",modelValue:e.row.field_ename,"onUpdate:modelValue":l=>e.row.field_ename=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),V(y,{label:"字段默认值"},{default:_((e=>[V(C,{size:"small",prop:"filed_value",modelValue:e.row.filed_value,"onUpdate:modelValue":l=>e.row.filed_value=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),V(y,{label:"是否变量",width:"70px"},{default:_((e=>[V(v,{prop:"is_var",checked:1===e.row.is_var,onChange:l=>c.checkRow(l,e.row)},null,8,["checked","onChange"])])),_:1}),V(y,{label:"排序",width:"70px"},{default:_((e=>[V(C,{size:"small",prop:"sort",modelValue:e.row.sort,"onUpdate:modelValue":l=>e.row.sort=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),V(y,{fixed:"right",label:"操作",width:"70px"},{default:_((e=>[V(f,{onClick:l=>c.deleteClick(e.$index),type:"text",size:"small"},{default:_((()=>[k("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[x,u.loading]])])])),_:1})])),_:1},8,["title","modelValue","onClose"])}]])},data:()=>({loading:!0,activeIndex:"0",formInline:{user:"",region:""},tableData:[],totalDataNumber:0,categoryList:[],open_add:!1,open_edit:!1,messageModel:{},open_field:!1}),created(){this.getTableList()},methods:{getTableList(){let e=this;j.messageList({},!0).then((l=>{e.loading=!1,e.tableData=l.data.list,e.totalDataNumber=l.data.list.total})).catch((l=>{e.loading=!1}))},addClick(){this.open_add=!0},editClick(e){this.messageModel=D(e),this.messageModel.message_to=this.messageModel.message_to.value,this.messageModel.message_type=this.messageModel.message_type.value,this.open_edit=!0},fieldClick(e){this.messageModel=e,this.open_field=!0},closeDialogFunc(e,l){"add"==l&&(this.open_add=e.openDialog,"success"==e.type&&this.getTableList()),"edit"==l&&(this.open_edit=e.openDialog,"success"==e.type&&this.getTableList()),"field"==l&&(this.open_field=e.openDialog,"success"==e.type&&this.getTableList())},deleteClick(l){let a=this;u.confirm("删除后不可恢复，确认删除该记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{a.loading=!0,j.deleteMessage({message_id:l.message_id},!0).then((l=>{a.loading=!1,e({message:l.msg,type:"success"}),a.getTableList()})).catch((e=>{a.loading=!1}))})).catch((()=>{}))}}},[["render",function(e,l,a,o,i,s){const d=t,r=m,u=n,c=C("Add"),f=C("Edit"),D=C("Field"),j=p;return g(),y("div",W,[b("div",z,[V(d,{type:"primary",onClick:s.addClick},{default:_((()=>[k("添加消息")])),_:1},8,["onClick"])]),b("div",$,[b("div",T,[w((g(),h(u,{size:"small",data:i.tableData,border:"","default-expand-all":"","tree-props":{children:"children"},"row-key":"plus_id"},{default:_((()=>[V(r,{prop:"message_name",label:"消息名称"}),V(r,{prop:"message_ename",label:"消息名称(英文)"}),V(r,{prop:"message_to.text",label:"通知对象"}),V(r,{prop:"message_type.text",label:"消息类型"}),V(r,{label:"字段"},{default:_((e=>[V(d,{onClick:l=>s.fieldClick(e.row),type:"text",size:"small"},{default:_((()=>[k("字段管理")])),_:2},1032,["onClick"])])),_:1}),V(r,{prop:"remark",label:"消息描述"}),V(r,{prop:"sort",label:"排序"}),V(r,{prop:"create_time",label:"添加时间"}),V(r,{fixed:"right",label:"操作"},{default:_((e=>[V(d,{onClick:l=>s.editClick(e.row),type:"text",size:"small"},{default:_((()=>[k("编辑")])),_:2},1032,["onClick"]),V(d,{onClick:l=>s.deleteClick(e.row),type:"text",size:"small"},{default:_((()=>[k("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[j,i.loading]])])]),i.open_add?(g(),h(c,{key:0,open_add:i.open_add,onCloseDialog:l[0]||(l[0]=e=>s.closeDialogFunc(e,"add"))},null,8,["open_add"])):v("",!0),i.open_edit?(g(),h(f,{key:1,open_edit:i.open_edit,form:i.messageModel,onCloseDialog:l[1]||(l[1]=e=>s.closeDialogFunc(e,"edit"))},null,8,["open_edit","form"])):v("",!0),i.open_field?(g(),h(D,{key:2,open_field:i.open_field,form:i.messageModel,onCloseDialog:l[2]||(l[2]=e=>s.closeDialogFunc(e,"field"))},null,8,["open_field","form"])):v("",!0)])}]]);export{q as default};
