import{e,c as l,f as t,o as i}from"./element-plus-fe2e4fed.js";import{_ as o}from"./index-49a7d7a3.js";import{o as a,T as s,S as d,a as r,P as m,W as b,X as n}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const p={class:"item-content-box"},c={class:"item-content-box"},f={class:"item-content-box"},h={class:"item-content-box"},u={class:"item-content-box"},j={class:"item-content-box"},w={class:"item-content-box"},_={class:"item-content-box"},v={class:"item-content-box"},x={class:"dialog-footer"};const g=o({data:()=>({formLabelWidth:"140px",dialogVisible:!1}),props:["open","form"],created(){},watch:{open:function(e,l){e!=l&&e&&(this.dialogVisible=this.open)}},methods:{dialogFormVisible(e){this.$emit("close",{})}}},[["render",function(o,g,W,L,V,y){const z=e,C=l,k=t,F=i;return a(),s(F,{title:"详情",modelValue:V.dialogVisible,"onUpdate:modelValue":g[1]||(g[1]=e=>V.dialogVisible=e),onClose:y.dialogFormVisible,"close-on-press-escape":!1},{footer:d((()=>[r("div",x,[m(k,{size:"small",onClick:g[0]||(g[0]=e=>V.dialogVisible=!1)},{default:d((()=>[b("关闭")])),_:1})])])),default:d((()=>[m(C,{size:"mini",model:W.form},{default:d((()=>[m(z,{label:"标题：","label-width":V.formLabelWidth},{default:d((()=>[r("div",p,n(W.form.title),1)])),_:1},8,["label-width"]),m(z,{label:"id：","label-width":V.formLabelWidth},{default:d((()=>[r("div",c,n(W.form.opt_log_id),1)])),_:1},8,["label-width"]),m(z,{label:"用户名：","label-width":V.formLabelWidth},{default:d((()=>[r("div",f,n(W.form.user_name),1)])),_:1},8,["label-width"]),m(z,{label:"真实姓名：","label-width":V.formLabelWidth},{default:d((()=>[r("div",h,n(W.form.real_name),1)])),_:1},8,["label-width"]),m(z,{label:"url：","label-width":V.formLabelWidth},{default:d((()=>[r("div",u,n(W.form.url),1)])),_:1},8,["label-width"]),m(z,{label:"内容：","label-width":V.formLabelWidth},{default:d((()=>[r("div",j,n(W.form.content),1)])),_:1},8,["label-width"]),m(z,{label:"ip：","label-width":V.formLabelWidth},{default:d((()=>[r("div",w,n(W.form.ip),1)])),_:1},8,["label-width"]),m(z,{label:"agent：","label-width":V.formLabelWidth},{default:d((()=>[r("div",_,n(W.form.agent),1)])),_:1},8,["label-width"]),m(z,{label:"添加时间：","label-width":V.formLabelWidth},{default:d((()=>[r("div",v,n(W.form.create_time),1)])),_:1},8,["label-width"])])),_:1},8,["model"])])),_:1},8,["modelValue","onClose"])}],["__scopeId","data-v-e41cc2e8"]]);export{g as default};
