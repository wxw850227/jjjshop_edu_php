System.register(["./element-plus-legacy-30dfbc6a.js","./index-legacy-1e4e0dfe.js","./@vue-legacy-59f40785.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(e,l){"use strict";var n,u,t,r,o,a,c,s,d,i;return{setters:[function(e){n=e.d,u=e.e},function(e){t=e._},function(e){r=e.o,o=e.c,a=e.P,c=e.S,s=e.W,d=e.ae,i=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".max-w180{max-width:180px}\n",document.head.appendChild(l);var m={components:{Single:t({data:function(){return{rules:{product_points:[{validator:function(e,l,n){""===l?n(new Error("请输入积分")):(l<=0&&n(new Error("兑换积分不小于1")),n())},trigger:"blur"}]}}},inject:["form"]},[["render",function(e,l,t,d,i,m){var p=n,y=u;return r(),o("div",null,[a(y,{label:"兑换积分：",width:"80",rules:i.rules.product_points,prop:"model.product_points"},{default:c((function(){return[a(p,{type:"number",modelValue:m.form.model.product_points,"onUpdate:modelValue":l[0]||(l[0]=function(e){return m.form.model.product_points=e}),min:"1",class:"max-w180 mr10"},null,8,["modelValue"]),s("积分 ")]})),_:1},8,["rules"]),a(y,{label:"兑换金额：",width:"80",prop:"model.product_price"},{default:c((function(){return[a(p,{type:"number",modelValue:m.form.model.product_price,"onUpdate:modelValue":l[1]||(l[1]=function(e){return m.form.model.product_price=e}),class:"max-w180 mr10"},null,8,["modelValue"]),s("元 ")]})),_:1}),a(y,{label:"库存数量：",rules:[{required:!0,message:"请填写库存数量"}],prop:"model.product_stock"},{default:c((function(){return[a(p,{type:"number",modelValue:m.form.model.product_stock,"onUpdate:modelValue":l[2]||(l[2]=function(e){return m.form.model.product_stock=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1})])}]])},data:function(){return{restaurants:[]}},inject:["form"],methods:{}},p=i("div",{class:"common-form mt50"},"规格/库存",-1);e("default",t(m,[["render",function(e,l,n,u,t,c){var s=d("Single");return r(),o("div",null,[p,a(s)])}]]))}}}));
