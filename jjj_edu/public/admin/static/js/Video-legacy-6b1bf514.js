System.register(["./@vue-legacy-59f40785.js","./index-legacy-2f547dc0.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./element-plus-legacy-30dfbc6a.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(e,l){"use strict";var n,s,t,a,c,i,o;return{setters:[function(e){n=e.o,s=e.c,t=e.a,a=e.a1,c=e.V,i=e.M},function(e){o=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".diy-video video{display:block;width:100%}.cover-box{position:absolute;top:0;left:0;width:100%;height:100%;z-index:10}\n",document.head.appendChild(l);var u={class:"pr"},d=["src","poster","autoplay"],r={class:"btn-edit-del"};e("default",o({data:function(){return{}},props:["item","index","selectedIndex"],methods:{}},[["render",function(e,l,o,y,p,g){return n(),s("div",u,[t("div",{class:"cover-box",onClick:l[0]||(l[0]=a((function(l){return e.$parent.$parent.onEditer(o.index)}),["stop"]))}),t("div",{class:i(["drag-optional",{selected:o.index===o.selectedIndex}])},[t("div",{class:"diy-video",style:c({padding:o.item.style.paddingTop+"px 0"})},[t("video",{style:c({height:o.item.style.height+"px"}),src:o.item.params.videoUrl,poster:o.item.params.poster,autoplay:1==o.item.params.autoplay,controls:""}," 您的浏览器不支持 video 标签 ",12,d)],4),t("div",r,[t("div",{class:"btn-del",onClick:l[1]||(l[1]=a((function(l){return e.$parent.$parent.onDeleleItem(o.index)}),["stop"]))},"删除")])],2)])}]]))}}}));
