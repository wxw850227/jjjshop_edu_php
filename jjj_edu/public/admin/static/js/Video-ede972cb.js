import{I as e,e as t,d as a,i as l,s,c as o}from"./element-plus-fe2e4fed.js";import{_ as m}from"./index-68daabb5.js";import{ap as r,o as i,c as p,a as d,X as u,P as n,S as c,$ as j,W as h}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const I={data:()=>({paddingTop:0,height:0}),props:["curItem","selectedIndex"],created(){this.curItem.style.paddingTop=parseInt(this.curItem.style.paddingTop),this.curItem.style.height=parseInt(this.curItem.style.height)},watch:{},methods:{}},f={class:"common-form"},b=d("div",null," 滑块可用左右方向键精确调整 ",-1),y={class:"diy-video-cover"};const g=m(I,[["render",function(m,I,g,v,V,_){const x=e,w=t,U=a,T=l,z=s,k=o,M=r("img-url");return i(),p("div",null,[d("div",f,[d("span",null,u(g.curItem.name),1)]),n(k,{size:"small",model:g.curItem,"label-width":"100px"},{default:c((()=>[n(w,{label:"上下边距："},{default:c((()=>[n(x,{modelValue:g.curItem.style.paddingTop,"onUpdate:modelValue":I[0]||(I[0]=e=>g.curItem.style.paddingTop=e),modelModifiers:{number:!0},"show-input":""},null,8,["modelValue"])])),_:1}),n(w,{label:"视频高度："},{default:c((()=>[n(x,{modelValue:g.curItem.style.height,"onUpdate:modelValue":I[1]||(I[1]=e=>g.curItem.style.height=e),modelModifiers:{number:!0},min:50,max:500,"show-input":""},null,8,["modelValue"]),b])),_:1}),n(w,{label:"视频封面："},{default:c((()=>[d("div",y,[j(d("img",{alt:"",onClick:I[2]||(I[2]=e=>m.$parent.onEditorSelectImage(g.curItem.params,"poster"))},null,512),[[M,g.curItem.params.poster]])])])),_:1}),n(w,{label:"视频地址："},{default:c((()=>[n(U,{modelValue:g.curItem.params.videoUrl,"onUpdate:modelValue":I[3]||(I[3]=e=>g.curItem.params.videoUrl=e)},null,8,["modelValue"])])),_:1}),n(w,{label:"自动播放："},{default:c((()=>[n(z,{modelValue:g.curItem.params.autoplay,"onUpdate:modelValue":I[4]||(I[4]=e=>g.curItem.params.autoplay=e)},{default:c((()=>[n(T,{label:"0"},{default:c((()=>[h("否")])),_:1}),n(T,{label:"1"},{default:c((()=>[h("是")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])}]]);export{g as default};
