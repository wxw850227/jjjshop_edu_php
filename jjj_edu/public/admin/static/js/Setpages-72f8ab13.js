import{i as e,s as l,e as t,d as o,H as a,f as s,c as r}from"./element-plus-fe2e4fed.js";import{ap as m,o as u,c as d,a as i,X as p,P as c,S as n,W as g,$ as f,V as y,Y as j,a1 as I}from"./@vue-0361ad4a.js";import{_}from"./index-49a7d7a3.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const b={data:()=>({logo_type:"image"}),props:["curItem","selectedIndex","opts"],created(){this.curItem.style.toplogo,this.logo_type="image"},methods:{logechange(e){this.curItem.style.toplogo="text"==e?"text":""}}},V={class:"common-form"},h={class:"diy-setpages-cover"},v=i("div",null,"建议尺寸60×60",-1),C=i("p",{class:"gray"},"页面名称仅用于后台查找",-1),k=i("p",{class:"gray"},"小程序端转发时显示的标题",-1),x={class:"d-s-c"},U=i("div",{class:"gray9"},"仅首页有效",-1),B={class:"d-s-c"};const $=_(b,[["render",function(_,b,$,w,z,E){const R=e,S=l,q=t,H=o,P=a,W=s,X=r,Y=m("img-url");return u(),d("div",null,[i("div",V,[i("span",null,p($.curItem.name),1)]),c(X,{size:"small",model:$.curItem,"label-width":"100px"},{default:n((()=>[c(q,{label:"标题类型："},{default:n((()=>[c(S,{modelValue:z.logo_type,"onUpdate:modelValue":b[0]||(b[0]=e=>z.logo_type=e),onChange:E.logechange},{default:n((()=>[c(R,{label:"image"},{default:n((()=>[g("图片")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),c(q,{label:"图片："},{default:n((()=>[i("div",h,[$.curItem.style.toplogo?f((u(),d("img",{key:0,alt:"",onClick:b[1]||(b[1]=e=>_.$parent.onEditorSelectImage($.curItem.style,"toplogo")),style:y("background-color:"+$.curItem.style.titleBackgroundColor+" ;")},null,4)),[[Y,$.curItem.style.toplogo]]):j("",!0),v])])),_:1}),c(q,{label:"页面名称："},{default:n((()=>[c(H,{modelValue:$.curItem.params.name,"onUpdate:modelValue":b[2]||(b[2]=e=>$.curItem.params.name=e)},null,8,["modelValue"]),C])),_:1}),c(q,{label:"分享标题："},{default:n((()=>[c(H,{modelValue:$.curItem.params.share_title,"onUpdate:modelValue":b[3]||(b[3]=e=>$.curItem.params.share_title=e)},null,8,["modelValue"]),k])),_:1}),c(q,{label:"背景颜色："},{default:n((()=>[i("div",x,[c(P,{modelValue:$.curItem.style.titleBackgroundColor,"onUpdate:modelValue":b[4]||(b[4]=e=>$.curItem.style.titleBackgroundColor=e)},null,8,["modelValue"]),c(W,{type:"button",style:{"margin-left":"10px"},onClick:b[5]||(b[5]=I((e=>_.$parent.onEditorResetColor($.curItem.style,"titleBackgroundColor","#ffffff")),["stop"]))},{default:n((()=>[g("重置")])),_:1})])])),_:1}),c(q,{label:"商品分类："},{default:n((()=>[U,c(S,{modelValue:$.curItem.category.open,"onUpdate:modelValue":b[6]||(b[6]=e=>$.curItem.category.open=e)},{default:n((()=>[c(R,{label:1},{default:n((()=>[g("开启")])),_:1}),c(R,{label:0},{default:n((()=>[g("关闭")])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(q,{label:"分类颜色："},{default:n((()=>[i("div",B,[c(P,{modelValue:$.curItem.category.color,"onUpdate:modelValue":b[7]||(b[7]=e=>$.curItem.category.color=e)},null,8,["modelValue"]),c(W,{type:"button",style:{"margin-left":"10px"},onClick:b[8]||(b[8]=I((e=>_.$parent.onEditorResetColor($.curItem.category,"color","#ffffff")),["stop"]))},{default:n((()=>[g("重置")])),_:1})])])),_:1})])),_:1},8,["model"])])}]]);export{$ as default};
