import{E as a,J as t,i as s,s as e,e as o,d as l,c as r,f as i}from"./element-plus-fe2e4fed.js";import{P as m}from"./page-60f4b84c.js";import{_ as c,g as d,h as p,i as n}from"./index-49a7d7a3.js";import{o as u,c as f,a as j,T as y,Y as g,P as _,S as h,W as b,bh as v,bf as D}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const x={data:()=>({formData:{category_style:null},category_10:d,category_20:p,category_30:n}),created(){this.getData()},methods:{getData(){let a=this;m.getCategory({},!0).then((t=>{a.formData=t.data.model})).catch((t=>{a.loading=!1}))},Submit(){let t=this;t.loading=!0;let s=t.formData;m.postCategory(s,!0).then((s=>{t.loading=!1,a({message:"恭喜你，修改成功",type:"success"}),t.getData()})).catch((a=>{t.loading=!1}))}}},V=a=>(v("data-v-a33fed8c"),a=a(),D(),a),k={class:"d-s-s"},w={class:"model-container"},z={class:"img-box"},C={class:"param-container flex-1"},S=V((()=>j("div",{class:"common-form"},[j("span",null,"展示设置")],-1))),P=V((()=>j("p",{class:"gray9"},"建议：一级分类(大图)尺寸建议710*300，其它均为等比图片即可，如：240*240",-1))),U={class:"common-button-wrapper"};const q=c(x,[["render",function(a,m,c,d,p,n){const v=t,D=s,x=e,V=o,q=l,E=r,I=i;return u(),f("div",k,[j("div",w,[j("div",z,[10==p.formData.category_style?(u(),y(v,{key:0,src:p.category_10,fit:"fill"},null,8,["src"])):g("",!0),20==p.formData.category_style?(u(),y(v,{key:1,src:p.category_20,fit:"fill"},null,8,["src"])):g("",!0),30==p.formData.category_style?(u(),y(v,{key:2,src:p.category_30,fit:"fill"},null,8,["src"])):g("",!0)])]),j("div",C,[S,_(E,{size:"small",model:p.formData,"label-width":"100px"},{default:h((()=>[_(V,{label:"分类页样式："},{default:h((()=>[_(x,{modelValue:p.formData.category_style,"onUpdate:modelValue":m[0]||(m[0]=a=>p.formData.category_style=a)},{default:h((()=>[_(D,{label:10},{default:h((()=>[b("一级分类(大图)")])),_:1}),_(D,{label:20},{default:h((()=>[b("一级分类(小图)")])),_:1}),_(D,{label:30},{default:h((()=>[b("二级分类")])),_:1})])),_:1},8,["modelValue"]),P])),_:1}),_(V,{label:"分享标题："},{default:h((()=>[_(q,{modelValue:p.formData.share_title,"onUpdate:modelValue":m[1]||(m[1]=a=>p.formData.share_title=a)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])]),j("div",U,[_(I,{size:"small",type:"primary",onClick:m[2]||(m[2]=a=>n.Submit())},{default:h((()=>[b("保存")])),_:1})])])}],["__scopeId","data-v-a33fed8c"]]);export{q as default};
