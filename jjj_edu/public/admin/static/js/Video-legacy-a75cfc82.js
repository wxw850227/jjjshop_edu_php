System.register(["./element-plus-legacy-30dfbc6a.js","./index-legacy-1e4e0dfe.js","./@vue-legacy-59f40785.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(e,l){"use strict";var n,t,u,a,r,c,s,o,i,d,m,p,y,g,f,j;return{setters:[function(e){n=e.I,t=e.e,u=e.d,a=e.i,r=e.s,c=e.c},function(e){s=e._},function(e){o=e.ap,i=e.o,d=e.c,m=e.a,p=e.X,y=e.P,g=e.S,f=e.$,j=e.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".diy-video-cover{width:200px}.diy-video-cover img{width:100%}\n",document.head.appendChild(l);var h={data:function(){return{paddingTop:0,height:0}},props:["curItem","selectedIndex"],created:function(){this.curItem.style.paddingTop=parseInt(this.curItem.style.paddingTop),this.curItem.style.height=parseInt(this.curItem.style.height)},watch:{},methods:{}},v={class:"common-form"},I=m("div",null," 滑块可用左右方向键精确调整 ",-1),b={class:"diy-video-cover"};e("default",s(h,[["render",function(e,l,s,h,V,_){var x=n,w=t,U=u,T=a,z=r,C=c,S=o("img-url");return i(),d("div",null,[m("div",v,[m("span",null,p(s.curItem.name),1)]),y(C,{size:"small",model:s.curItem,"label-width":"100px"},{default:g((function(){return[y(w,{label:"上下边距："},{default:g((function(){return[y(x,{modelValue:s.curItem.style.paddingTop,"onUpdate:modelValue":l[0]||(l[0]=function(e){return s.curItem.style.paddingTop=e}),modelModifiers:{number:!0},"show-input":""},null,8,["modelValue"])]})),_:1}),y(w,{label:"视频高度："},{default:g((function(){return[y(x,{modelValue:s.curItem.style.height,"onUpdate:modelValue":l[1]||(l[1]=function(e){return s.curItem.style.height=e}),modelModifiers:{number:!0},min:50,max:500,"show-input":""},null,8,["modelValue"]),I]})),_:1}),y(w,{label:"视频封面："},{default:g((function(){return[m("div",b,[f(m("img",{alt:"",onClick:l[2]||(l[2]=function(l){return e.$parent.onEditorSelectImage(s.curItem.params,"poster")})},null,512),[[S,s.curItem.params.poster]])])]})),_:1}),y(w,{label:"视频地址："},{default:g((function(){return[y(U,{modelValue:s.curItem.params.videoUrl,"onUpdate:modelValue":l[3]||(l[3]=function(e){return s.curItem.params.videoUrl=e})},null,8,["modelValue"])]})),_:1}),y(w,{label:"自动播放："},{default:g((function(){return[y(z,{modelValue:s.curItem.params.autoplay,"onUpdate:modelValue":l[4]||(l[4]=function(e){return s.curItem.params.autoplay=e})},{default:g((function(){return[y(T,{label:"0"},{default:g((function(){return[j("否")]})),_:1}),y(T,{label:"1"},{default:g((function(){return[j("是")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])])}]]))}}}));
