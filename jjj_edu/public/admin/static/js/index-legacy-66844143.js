System.register(["./element-plus-legacy-30dfbc6a.js","./DateTime-legacy-03e7218c.js","./Total-legacy-9ee80837.js","./Transaction-legacy-44bfc722.js","./index-legacy-2f547dc0.js","./@vue-legacy-59f40785.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./echarts-legacy-41965509.js","./tslib-legacy-46756b30.js","./zrender-legacy-699e7e9c.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(l,e){"use strict";var a,n,t,s,c,u,i,o,g,r,y;return{setters:[function(l){a=l.v},function(l){n=l.S},function(l){t=l.default},function(l){s=l.default},function(l){c=l._},function(l){u=l.ae,i=l.$,o=l.o,g=l.c,r=l.T,y=l.Y},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var e={style:{"min-height":"400px"}};l("default",c({components:{Total:t,Transaction:s},data:function(){return{loading:!0,dataModel:{}}},provide:function(){return{dataModel:this.dataModel}},created:function(){this.getData()},methods:{getData:function(){var l=this;n.getOrderTotal({},!0).then((function(e){Object.assign(l.dataModel,e.data),l.loading=!1})).catch((function(l){}))}}},[["render",function(l,n,t,s,c,j){var d=u("Total"),f=u("Transaction"),h=a;return i((o(),g("div",e,[c.loading?y("",!0):(o(),r(d,{key:0})),c.loading?y("",!0):(o(),r(f,{key:1}))])),[[h,c.loading]])}]]))}}}));
