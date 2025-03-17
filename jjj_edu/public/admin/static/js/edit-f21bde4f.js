import{E as e,d as a,e as l,p as o,f as s,c as t,v as r}from"./element-plus-fe2e4fed.js";import{_ as i,A as d}from"./index-49a7d7a3.js";import{$ as m,o as n,c,P as p,S as u,a as f,W as h,bh as _,bf as j}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const b={data:()=>({loading:!0,form:{access_id:[]},data:[],roleList:[],select_menu:[],defaultProps:{children:"children",label:"name"},role_id:0}),created(){this.role_id=this.$route.query.role_id,this.getData()},methods:{onSubmit(){let a=this,l=a.form;a.$refs.form.validate((o=>{o&&(a.loading=!0,d.roleEdit({role_id:a.role_id,params:JSON.stringify(l)},!0).then((l=>{a.loading=!1,e({message:"修改成功",type:"success"}),a.$router.push("/auth/role/index")})).catch((e=>{a.loading=!1})))}))},getData(){let e=this;d.roleEditInfo({role_id:e.role_id}).then((a=>{e.clearData(a.data.menu,a.data.select_menu),e.select_menu=a.data.select_menu,e.form=a.data.model,e.roleList=a.data.roleList,e.data=a.data.menu,0==e.form.parent_id&&(e.form.parent_id="0"),e.loading=!1})).catch((a=>{e.loading=!1}))},clearData(e,a){let l=0,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(null!=o.children){if(!this.clearData(o.children,a)){let e=a.indexOf(o.access_id);e>=0&&a.splice(e,1)}}-1!=a.indexOf(o.access_id)&&l++}return!(l<o)},handleCheckChange(e,a){this.form.access_id=a.checkedKeys.concat(a.halfCheckedKeys)},cancelFunc(){this.$router.back(-1)}}},g=(e=>(_("data-v-82154eb3"),e=e(),j(),e))((()=>f("div",{class:"common-form"},"编辑角色",-1))),k={class:"common-button-wrapper"};const y=i(b,[["render",function(e,i,d,_,j,b){const y=a,v=l,x=o,C=s,V=t,w=r;return m((n(),c("div",null,[p(V,{size:"small",ref:"form",model:j.form,"label-width":"180px"},{default:u((()=>[g,p(v,{label:"角色名称：",prop:"role_name",rules:[{required:!0,message:" "}]},{default:u((()=>[p(y,{modelValue:j.form.role_name,"onUpdate:modelValue":i[0]||(i[0]=e=>j.form.role_name=e),placeholder:"请输入角色名称",class:"max-w460"},null,8,["modelValue"])])),_:1}),p(v,{label:"权限列表：",modelValue:j.form.access_id,"onUpdate:modelValue":i[1]||(i[1]=e=>j.form.access_id=e)},{default:u((()=>[p(x,{data:j.data,"show-checkbox":"","node-key":"access_id","default-expand-all":!0,"default-checked-keys":j.select_menu,props:j.defaultProps,onCheck:b.handleCheckChange},null,8,["data","default-checked-keys","props","onCheck"])])),_:1},8,["modelValue"]),p(v,{label:"排序："},{default:u((()=>[p(y,{type:"number",modelValue:j.form.sort,"onUpdate:modelValue":i[2]||(i[2]=e=>j.form.sort=e),placeholder:"请输入排序",class:"max-w460"},null,8,["modelValue"])])),_:1}),f("div",k,[p(C,{size:"small",type:"info",onClick:b.cancelFunc},{default:u((()=>[h("取消")])),_:1},8,["onClick"]),p(C,{type:"primary",size:"small",onClick:b.onSubmit,loading:j.loading},{default:u((()=>[h("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"])])),[[w,j.loading]])}],["__scopeId","data-v-82154eb3"]]);export{y as default};
