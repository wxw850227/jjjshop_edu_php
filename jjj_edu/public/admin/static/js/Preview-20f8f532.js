import{d as e,e as l,H as o,f as t,c as s}from"./element-plus-fe2e4fed.js";import{ap as a,o as r,c as m,a as c,X as u,P as n,S as d,a1 as i,W as p,$ as f}from"./@vue-0361ad4a.js";import{_ as j}from"./index-68daabb5.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const y={data:()=>({}),props:["curItem","selectedIndex"],created(){},methods:{}},_={class:"common-form"},b={class:"d-s-c"},I={class:"d-s-c"},g={class:"d-s-c"},v={class:"d-s-c"},k={class:"diy-notice-icon"},V=c("div",null,"建议尺寸710×90",-1),w={class:"diy-notice-icon"},h=c("div",null,"建议尺寸102×38",-1);const x=j(y,[["render",function(j,y,x,C,$,E){const U=e,R=l,z=o,S=t,N=s,q=a("img-url");return r(),m("div",null,[c("div",_,[c("span",null,u(x.curItem.name),1)]),n(N,{size:"small",model:x.curItem,"label-width":"100px"},{default:d((()=>[n(R,{label:"显示数量："},{default:d((()=>[n(U,{modelValue:x.curItem.params.showNum,"onUpdate:modelValue":y[0]||(y[0]=e=>x.curItem.params.showNum=e),class:"w-auto"},null,8,["modelValue"])])),_:1}),n(R,{label:"时间颜色："},{default:d((()=>[c("div",b,[n(z,{modelValue:x.curItem.style.countdown_color,"onUpdate:modelValue":y[1]||(y[1]=e=>x.curItem.style.countdown_color=e)},null,8,["modelValue"]),n(S,{type:"button",style:{"margin-left":"10px"},onClick:y[2]||(y[2]=i((e=>j.$parent.onEditorResetColor(x.curItem.style,"countdown_color","#ff4c01")),["stop"]))},{default:d((()=>[p("重置 ")])),_:1})])])),_:1}),n(R,{label:"价格颜色："},{default:d((()=>[c("div",I,[n(z,{modelValue:x.curItem.style.color,"onUpdate:modelValue":y[3]||(y[3]=e=>x.curItem.style.color=e)},null,8,["modelValue"]),n(S,{type:"button",style:{"margin-left":"10px"},onClick:y[4]||(y[4]=i((e=>j.$parent.onEditorResetColor(x.curItem.style,"color","#ff4c01")),["stop"]))},{default:d((()=>[p("重置 ")])),_:1})])])),_:1}),n(R,{label:"时间背景颜色："},{default:d((()=>[c("div",g,[n(z,{modelValue:x.curItem.style.countdown_back_color,"onUpdate:modelValue":y[5]||(y[5]=e=>x.curItem.style.countdown_back_color=e)},null,8,["modelValue"]),n(S,{type:"button",style:{"margin-left":"10px"},onClick:y[6]||(y[6]=i((e=>j.$parent.onEditorResetColor(x.curItem.style,"countdown_back_color","#fef7e4")),["stop"]))},{default:d((()=>[p("重置 ")])),_:1})])])),_:1}),n(R,{label:"背景颜色："},{default:d((()=>[c("div",v,[n(z,{modelValue:x.curItem.style.background_color,"onUpdate:modelValue":y[7]||(y[7]=e=>x.curItem.style.background_color=e)},null,8,["modelValue"]),n(S,{type:"button",style:{"margin-left":"10px"},onClick:y[8]||(y[8]=i((e=>j.$parent.onEditorResetColor(x.curItem.style,"background_color","#ff4c01")),["stop"]))},{default:d((()=>[p("重置 ")])),_:1})])])),_:1}),n(R,{label:"背景顶部图片："},{default:d((()=>[c("div",k,[f(c("img",{alt:"",onClick:y[9]||(y[9]=e=>j.$parent.onEditorSelectImage(x.curItem.style,"background_image"))},null,512),[[q,x.curItem.style.background_image]])]),V])),_:1}),n(R,{label:"倒计时脚标："},{default:d((()=>[c("div",w,[f(c("img",{alt:"",onClick:y[10]||(y[10]=e=>j.$parent.onEditorSelectImage(x.curItem.style,"top_image"))},null,512),[[q,x.curItem.style.top_image]])]),h])),_:1})])),_:1},8,["model"])])}]]);export{x as default};
