import{E as e,d as o,e as s,q as l,r as a,c as r,f as i,o as t,v as d}from"./element-plus-fe2e4fed.js";import{_ as m,A as p}from"./index-49a7d7a3.js";import{o as u,T as n,S as c,a as f,P as _,W as g,$ as b,c as h,Q as j,a9 as V}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const w={class:"dialog-footer"};const y=m({data:()=>({formLabelWidth:"120px",loading:!1,dialogVisible:!1,form:{confirm_password:"",access_id:[]},access_id:[],roleList:[],formRules:{user_name:[{required:!0,message:" ",trigger:"blur"}],access_id:[{required:!0,message:" ",trigger:"blur"}],password:[{required:!0,message:" ",trigger:"blur"}],confirm_password:[{required:!0,message:" ",trigger:"blur"}],real_name:[{required:!0,message:" ",trigger:"blur"}]}}),props:["open","shop_user_id"],watch:{open:function(e,o){e!=o&&(this.dialogVisible=this.open,this.getData())}},created(){},methods:{getData(){let e=this;p.userEditInfo({shop_user_id:this.shop_user_id}).then((o=>{e.loading=!1,e.roleList=o.data.roleList;let s=o.data.info;s.access_id=o.data.role_arr,s.password="",e.form=s})).catch((o=>{e.loading=!1}))},onSubmit(){let o=this;o.loading=!0;let s=o.form;p.userEdit(s,!0).then((s=>{o.loading=!1,e({message:"恭喜你，修改成功",type:"success"}),o.dialogFormVisible(!0)})).catch((e=>{o.loading=!1}))},dialogFormVisible(e){e?this.$emit("close",{type:"success",openDialog:!1}):this.$emit("close",{type:"error",openDialog:!1})}}},[["render",function(e,m,p,y,v,q){const k=o,L=s,U=l,x=a,C=r,D=i,z=t,E=d;return u(),n(z,{title:"修改管理员",modelValue:v.dialogVisible,"onUpdate:modelValue":m[6]||(m[6]=e=>v.dialogVisible=e),onClose:q.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:c((()=>[f("div",w,[_(D,{onClick:m[5]||(m[5]=e=>v.dialogVisible=!1)},{default:c((()=>[g("取 消")])),_:1}),_(D,{type:"primary",onClick:q.onSubmit,loading:v.loading},{default:c((()=>[g("确 定")])),_:1},8,["onClick","loading"])])])),default:c((()=>[b((u(),n(C,{size:"small",ref:"form",model:v.form,rules:v.formRules,"label-width":v.formLabelWidth},{default:c((()=>[_(L,{label:"用户名",prop:"user_name"},{default:c((()=>[_(k,{modelValue:v.form.user_name,"onUpdate:modelValue":m[0]||(m[0]=e=>v.form.user_name=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),_(L,{label:"所属角色",prop:"access_id"},{default:c((()=>[_(x,{modelValue:v.form.access_id,"onUpdate:modelValue":m[1]||(m[1]=e=>v.form.access_id=e),multiple:!0},{default:c((()=>[(u(!0),h(j,null,V(v.roleList,(e=>(u(),n(U,{value:e.role_id,key:e.role_id,label:e.role_name_h1},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(L,{label:"登录密码",prop:"password"},{default:c((()=>[_(k,{modelValue:v.form.password,"onUpdate:modelValue":m[2]||(m[2]=e=>v.form.password=e),placeholder:"请输入登录密码",type:"password"},null,8,["modelValue"])])),_:1}),_(L,{label:"确认密码",prop:"confirm_password"},{default:c((()=>[_(k,{modelValue:v.form.confirm_password,"onUpdate:modelValue":m[3]||(m[3]=e=>v.form.confirm_password=e),placeholder:"请输入确认密码",type:"password"},null,8,["modelValue"])])),_:1}),_(L,{label:"姓名",prop:"real_name"},{default:c((()=>[_(k,{modelValue:v.form.real_name,"onUpdate:modelValue":m[4]||(m[4]=e=>v.form.real_name=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules","label-width"])),[[E,v.loading]])])),_:1},8,["modelValue","onClose"])}]]);export{y as default};
