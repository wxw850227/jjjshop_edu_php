import{E as e,t,u as o,f as i,c as s}from"./element-plus-fe2e4fed.js";import{E as a}from"./education-526fc48f.js";import r from"./Basic-85994c12.js";import m from"./Content-4882a0fd.js";import{ae as n,o as l,c,P as d,S as p,$ as u,a0 as j,a as f,W as _}from"./@vue-0361ad4a.js";import{_ as h}from"./index-2e57a1f5.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./UE-c323e137.js";import"./Upload-78ee26ae.js";import"./AddCategory-c921a3c2.js";import"./file-56305e6b.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const b={class:"product-add"},g={class:"common-button-wrapper"};const v=h({components:{Basic:r,Content:m},data:()=>({activeName:"basic",loading:!1,course_id:0,form:{model:{course_id:0,scene:"add",title:"",content:"",video_link:"",video_image:"",audio_image:"",audio_link:"",is_see:0,see_time:0,sort:0,lecturer_id:"",back_link:"",start_time:"",end_time:""},lecturer:[]}}),provide:function(){return{form:this.form}},created(){this.course_id=this.$route.query.course_id,this.getBaseData()},methods:{getBaseData:function(){let e=this;a.getSectionBaseData({},!0).then((t=>{e.loading=!1,Object.assign(e.form,t.data)})).catch((t=>{e.loading=!1}))},onSubmit:function(){let t=this,o=t.form.model;o.course_id=t.course_id,t.$refs.form.validate((i=>{i?(t.loading=!0,a.addSection(o,!0).then((o=>{t.loading=!1,e({message:"添加成功",type:"success"}),t.$router.back()})).catch((e=>{t.loading=!1}))):e({message:"请检查必填项是否填写完整",type:"error"})}))},cancelFunc(){this.$router.back(-1)}}},[["render",function(e,a,r,m,h,v){const y=t,k=o,C=n("Basic"),B=n("Content"),x=i,z=s;return l(),c("div",b,[d(k,{modelValue:h.activeName,"onUpdate:modelValue":a[0]||(a[0]=e=>h.activeName=e),type:"card"},{default:p((()=>[d(y,{label:"基础设置",name:"basic"})])),_:1},8,["modelValue"]),d(z,{size:"small",ref:"form",model:h.form,"label-width":"180px"},{default:p((()=>[u(d(C,null,null,512),[[j,"basic"==h.activeName]]),u(d(B,null,null,512),[[j,"content"==h.activeName]]),f("div",g,[d(x,{size:"small",type:"info",onClick:v.cancelFunc},{default:p((()=>[_("取消")])),_:1},8,["onClick"]),d(x,{size:"small",type:"primary",onClick:v.onSubmit,loading:h.loading},{default:p((()=>[_("保存")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"])])}],["__scopeId","data-v-189b5241"]]);export{v as default};
