System.register(["./element-plus-legacy-30dfbc6a.js","./data-legacy-ea6017a1.js","./index-legacy-325b1913.js","./@vue-legacy-59f40785.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(l,e){"use strict";var a,n,u,t,c,o,r,s,i,d,y,g,m,f,j,p,h,b,v;return{setters:[function(l){a=l.q,n=l.r,u=l.e,t=l.d,c=l.i,o=l.s,r=l.c},function(l){s=l.D},function(l){i=l._},function(l){d=l.o,y=l.c,g=l.a,m=l.X,f=l.P,j=l.S,p=l.Q,h=l.a9,b=l.T,v=l.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var e={class:"common-form"};l("default",i({data:function(){return{category:{}}},props:["curItem","selectedIndex","opts"],created:function(){this.getData()},methods:{gotoPage:function(l){this.$router.push("/"+l)},getData:function(){var l=this;s.articleCategorylist({},!0).then((function(e){l.category=e.data.category})).catch((function(e){l.loading=!1}))}}},[["render",function(l,s,i,_,I,V){var w=a,x=n,k=u,z=t,D=c,P=o,U=r;return d(),y("div",null,[g("div",e,[g("span",null,m(i.curItem.name),1)]),f(U,{size:"small",model:i.curItem,"label-width":"100px"},{default:j((function(){return[f(k,{label:"文章分类："},{default:j((function(){return[f(x,{modelValue:i.curItem.params.auto.category,"onUpdate:modelValue":s[0]||(s[0]=function(l){return i.curItem.params.auto.category=l})},{default:j((function(){return[f(w,{label:"全部分类",value:"0"}),(d(!0),y(p,null,h(I.category,(function(l){return d(),b(w,{key:l.category_id,label:l.name,value:""+l.category_id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),f(k,{label:"显示数量："},{default:j((function(){return[f(z,{type:"number",style:{width:"auto"},modelValue:i.curItem.params.auto.showNum,"onUpdate:modelValue":s[1]||(s[1]=function(l){return i.curItem.params.auto.showNum=l}),class:"w-auto"},null,8,["modelValue"]),g("div",null,[v(" 文章数据请到 "),g("a",null,[g("span",{onClick:s[2]||(s[2]=function(l){return V.gotoPage("plus/article/index")})},"内容管理 - 文章列表")]),v(" 中管理 ")])]})),_:1}),f(k,{label:"显示类型："},{default:j((function(){return[f(P,{modelValue:i.curItem.style.display,"onUpdate:modelValue":s[3]||(s[3]=function(l){return i.curItem.style.display=l})},{default:j((function(){return[f(D,{label:"10"},{default:j((function(){return[v("有图模式")]})),_:1}),f(D,{label:"20"},{default:j((function(){return[v("无图模式")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])])}]]))}}}));
