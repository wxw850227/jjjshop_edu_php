import{I as e,e as t,i as l,s as a,d as s,c as o}from"./element-plus-fe2e4fed.js";import{ap as m,o as r,c as i,a as p,X as u,P as d,S as n,W as c,$ as j,a0 as I}from"./@vue-0361ad4a.js";import{_ as h}from"./index-2e57a1f5.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const y={data:()=>({}),props:["curItem","selectedIndex","opts"],created(){this.curItem.style.bottom=parseInt(this.curItem.style.bottom),this.curItem.style.right=parseInt(this.curItem.style.right),this.curItem.style.opacity=parseInt(this.curItem.style.opacity)},methods:{}},b={class:"common-form"},f={class:"diy-service-icon"},V=p("div",null,"建议尺寸90×90",-1);const _=h(y,[["render",function(h,y,_,v,g,w){const x=e,U=t,z=l,k=a,S=s,$=o,q=m("img-url");return r(),i("div",null,[p("div",b,[p("span",null,u(_.curItem.name),1)]),d($,{size:"small",model:_.curItem,"label-width":"100px"},{default:n((()=>[d(U,{label:"底边距："},{default:n((()=>[d(x,{modelValue:_.curItem.style.bottom,"onUpdate:modelValue":y[0]||(y[0]=e=>_.curItem.style.bottom=e),"show-input":""},null,8,["modelValue"])])),_:1}),d(U,{label:"右边距："},{default:n((()=>[d(x,{modelValue:_.curItem.style.right,"onUpdate:modelValue":y[1]||(y[1]=e=>_.curItem.style.right=e),"show-input":""},null,8,["modelValue"])])),_:1}),d(U,{label:"不透明度："},{default:n((()=>[d(x,{modelValue:_.curItem.style.opacity,"onUpdate:modelValue":y[2]||(y[2]=e=>_.curItem.style.opacity=e),"show-input":""},null,8,["modelValue"])])),_:1}),d(U,{label:"客服类型："},{default:n((()=>[d(k,{modelValue:_.curItem.params.type,"onUpdate:modelValue":y[3]||(y[3]=e=>_.curItem.params.type=e)},{default:n((()=>[d(z,{label:"chat"},{default:n((()=>[c("在线聊天")])),_:1}),d(z,{label:"phone"},{default:n((()=>[c("拨打电话")])),_:1})])),_:1},8,["modelValue"])])),_:1}),j(d(U,{label:"电话号码："},{default:n((()=>[d(S,{modelValue:_.curItem.params.phone_num,"onUpdate:modelValue":y[4]||(y[4]=e=>_.curItem.params.phone_num=e)},null,8,["modelValue"])])),_:1},512),[[I,"phone"==_.curItem.params.type]]),d(U,{label:"客服图标："},{default:n((()=>[p("div",f,[j(p("img",{alt:"",onClick:y[5]||(y[5]=e=>h.$parent.onEditorSelectImage(_.curItem.params,"image"))},null,512),[[q,_.curItem.params.image]])]),V])),_:1})])),_:1},8,["model"])])}]]);export{_ as default};
