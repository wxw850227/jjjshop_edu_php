import{E as t,t as e,u as o,f as s,c as a}from"./element-plus-fe2e4fed.js";import{Q as i}from"./question-f32e2692.js";import r from"./Basic-a0d972ce.js";import n from"./Content-f4512f44.js";import{ae as m,o as l,c as p,P as c,S as d,$ as u,a0 as j,a as f,W as g}from"./@vue-0361ad4a.js";import{_ as y}from"./index-2e57a1f5.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./Upload-78ee26ae.js";import"./AddCategory-c921a3c2.js";import"./file-56305e6b.js";import"./vuedraggable-cabcff94.js";import"./vue-3c8001f5.js";import"./sortablejs-c079517e.js";import"./UE-c323e137.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const b={class:"product-add"},h={class:"common-button-wrapper"};const v=y({components:{Basic:r,Content:n},data:()=>({activeName:"basic",loading:!1,form:{model:{question_type:1,category_id:null,image_id:"",title:"",option:[{content:"",type:1},{content:"",type:1}],sort:0,option_type:1,answer:["A"],difficulty:null,analysis:""},category:[],questionType:[]}}),provide:function(){return{form:this.form}},created(){this.getBaseData()},methods:{getBaseData:function(){let t=this;i.getQsType({},!0).then((e=>{t.loading=!1,Object.assign(t.form,e.data)})).catch((e=>{t.loading=!1}))},convertJson(t){let e={};return t.forEach((t=>{e[t.grade_id]=t.product_equity})),JSON.stringify(e)},onSubmit:function(){let e=this,o=e.form.model;e.$refs.form.validate((s=>{s?(e.loading=!0,i.addQs(o,!0).then((o=>{e.loading=!1,t({message:"添加成功",type:"success"}),e.$router.push("/question/question/index")})).catch((t=>{e.loading=!1}))):t({message:"请检查必填项是否填写完整",type:"error"})}))},cancelFunc(){this.$router.back(-1)}}},[["render",function(t,i,r,n,y,v){const _=e,q=o,C=m("Basic"),B=m("Content"),k=s,w=a;return l(),p("div",b,[c(q,{modelValue:y.activeName,"onUpdate:modelValue":i[0]||(i[0]=t=>y.activeName=t),type:"card"},{default:d((()=>[c(_,{label:"基础设置",name:"basic"}),c(_,{label:"答案解析",name:"content"})])),_:1},8,["modelValue"]),c(w,{size:"small",ref:"form",model:y.form,"label-width":"180px"},{default:d((()=>[u(c(C,null,null,512),[[j,"basic"==y.activeName]]),u(c(B,null,null,512),[[j,"content"==y.activeName]]),f("div",h,[c(k,{size:"small",type:"info",onClick:v.cancelFunc},{default:d((()=>[g("取消")])),_:1},8,["onClick"]),c(k,{size:"small",type:"primary",onClick:v.onSubmit,loading:y.loading},{default:d((()=>[g("保存")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"])])}],["__scopeId","data-v-0cbe6b97"]]);export{v as default};
