System.register(["./element-plus-legacy-30dfbc6a.js","./article-legacy-ee2208e9.js","./index-legacy-2f547dc0.js","./@vue-legacy-59f40785.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(e,l){"use strict";var n,t,a,u,c,r,o,s,i,d,g,y,m,f,p,j,h,v,b,_,I;return{setters:[function(e){n=e.q,t=e.r,a=e.e,u=e.d,c=e.i,r=e.s,o=e.c},function(e){s=e.A},function(e){i=e._},function(e){d=e.ap,g=e.o,y=e.c,m=e.a,f=e.X,p=e.P,j=e.S,h=e.Q,v=e.a9,b=e.T,_=e.W,I=e.$},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".diy-special-cover img{width:140px;height:38px}\n",document.head.appendChild(l);var x={data:function(){return{category:[]}},props:["curItem","selectedIndex","opts"],created:function(){this.getData()},methods:{gotoPage:function(e){this.$router.push("/"+e)},getData:function(){var e=this;s.getCategory({page_id:e.page_id},!0).then((function(l){e.category=l.data.category})).catch((function(l){e.loading=!1}))}}},V={class:"common-form"},w={class:"diy-special-cover"},C=m("div",null,"建议尺寸136×33",-1);e("default",i(x,[["render",function(e,l,s,i,x,k){var z=n,P=t,S=a,U=u,$=c,q=r,D=o,E=d("img-url");return g(),y("div",null,[m("div",V,[m("span",null,f(s.curItem.name),1)]),p(D,{size:"small",model:s.curItem,"label-width":"100px"},{default:j((function(){return[p(S,{label:"文章分类："},{default:j((function(){return[p(P,{modelValue:s.curItem.params.auto.category,"onUpdate:modelValue":l[0]||(l[0]=function(e){return s.curItem.params.auto.category=e})},{default:j((function(){return[p(z,{label:"全部分类",value:0}),(g(!0),y(h,null,v(x.category,(function(e){return g(),b(z,{key:e.category_id,label:e.name,value:e.category_id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),p(S,{label:"显示数量："},{default:j((function(){return[p(U,{type:"number",min:"1",modelValue:s.curItem.params.auto.showNum,"onUpdate:modelValue":l[1]||(l[1]=function(e){return s.curItem.params.auto.showNum=e}),style:{width:"auto"}},null,8,["modelValue"]),m("div",null,[_(" 文章数据请到 "),m("a",null,[m("span",{onClick:l[2]||(l[2]=function(e){return k.gotoPage("plus/article/index")})},"内容管理 - 文章列表")]),_(" 中管理 ")])]})),_:1}),p(S,{label:"图片："},{default:j((function(){return[m("div",w,[I(m("img",{alt:"",onClick:l[3]||(l[3]=function(l){return e.$parent.onEditorSelectImage(s.curItem.style,"image")})},null,512),[[E,s.curItem.style.image]]),C])]})),_:1}),p(S,{label:"显示类型："},{default:j((function(){return[p(q,{modelValue:s.curItem.style.display,"onUpdate:modelValue":l[4]||(l[4]=function(e){return s.curItem.style.display=e})},{default:j((function(){return[p($,{label:1},{default:j((function(){return[_("单行")]})),_:1}),p($,{label:2},{default:j((function(){return[_("两行")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])])}]]))}}}));
