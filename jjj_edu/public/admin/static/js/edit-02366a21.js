import{E as e,t,u as s,f as i,c as o,v as a}from"./element-plus-fe2e4fed.js";import{Q as r}from"./question-22f139d5.js";import n from"./Basic-e6e5e3bc.js";import m from"./Content-b328ae5a.js";import{_ as l}from"./index-68daabb5.js";import{ae as d,$ as c,o as p,c as u,P as j,S as f,T as _,Y as g,a as h,W as y}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./Upload-f5c061cf.js";import"./AddCategory-d39c217d.js";import"./file-498fee0c.js";import"./vuedraggable-cabcff94.js";import"./vue-3c8001f5.js";import"./sortablejs-c079517e.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";import"./UE-040d8b3f.js";const v={class:"product-add"},b={class:"common-button-wrapper",style:{height:"50px"}};const q=l({components:{Basic:n,Content:m},data:()=>({save_loading:!1,activeName:"basic",loading:!1,question_id:0,scene:"edit",form:{model:{question_type:1,category_id:null,image_id:0,title:"",option:[{content:"",type:1},{content:"",type:1}],sort:0,option_type:1,answer:["A"],difficulty:null,analysis:""},category:[],questionType:[]}}),provide:function(){return{form:this.form}},created(){this.question_id=this.$route.query.question_id,this.scene=this.$route.query.scene,this.getData()},methods:{getData:function(){let e=this;r.getEditCourse({question_id:e.question_id,scene:e.scene},!0).then((t=>{e.loading=!1,Object.assign(e.form,t.data)})).catch((t=>{e.loading=!1}))},convertJson(e){let t={};return e.forEach((e=>{t[e.grade_id]=e.product_equity})),JSON.stringify(t)},onSubmit:function(t){let s=this;s.$refs.form.validate((t=>{if(t){let t=s.form.model;t.scene=s.scene,t.question_id=s.question_id,s.save_loading=!0,r.editQS(t,!0).then((t=>{s.save_loading=!1,e({message:"保存成功",type:"success"}),s.cancelFunc()})).catch((e=>{s.save_loading=!1}))}else e({message:"请检查必填项是否填写完整",type:"error"})}))},ImgKeepId(e){let t=[];for(let s=0,i=e.length;s<i;s++){let i={image_id:e[s].image_id,file_id:e[s].file_id};t.push(i)}return t},Draft(){this.form.model.product_status=30,this.onSubmit()},cancelFunc(){this.$router.back(-1)}}},[["render",function(e,r,n,m,l,q){const C=t,k=s,w=d("Basic"),x=d("Content"),N=i,S=o,z=a;return c((p(),u("div",v,[j(k,{modelValue:l.activeName,"onUpdate:modelValue":r[0]||(r[0]=e=>l.activeName=e),type:"card"},{default:f((()=>[j(C,{label:"基础设置",name:"basic"}),j(C,{label:"答案解析",name:"content"})])),_:1},8,["modelValue"]),j(S,{size:"small",ref:"form",model:l.form,"label-width":"180px"},{default:f((()=>["basic"==l.activeName?(p(),_(w,{key:0})):g("",!0),"content"==l.activeName?(p(),_(x,{key:1})):g("",!0),h("div",b,[j(N,{size:"small",type:"info",onClick:q.cancelFunc},{default:f((()=>[y("取消")])),_:1},8,["onClick"]),j(N,{size:"small",type:"primary",onClick:r[1]||(r[1]=e=>q.onSubmit("edit")),disabled:l.save_loading},{default:f((()=>[y("发布 ")])),_:1},8,["disabled"])])])),_:1},8,["model"])])),[[z,l.loading]])}],["__scopeId","data-v-2ab608c5"]]);export{q as default};
