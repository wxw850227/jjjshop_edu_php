System.register(["./element-plus-legacy-30dfbc6a.js","./points-legacy-ee975778.js","./index-legacy-1e4e0dfe.js","./@vue-legacy-59f40785.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(l,e){"use strict";var n,a,t,s,u,o,c,i,r,d,m,f,g;return{setters:[function(l){n=l.E,a=l.d,t=l.e,s=l.f,u=l.c},function(l){o=l.P},function(l){c=l._},function(l){i=l.o,r=l.c,d=l.P,m=l.S,f=l.a,g=l.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var e={data:function(){return{form:{points_name:"",describe:""},loading:!1}},created:function(){this.getData()},methods:{getData:function(){var l=this;o.getPoints({},!0).then((function(e){l.form=e.data.values})).catch((function(l){}))},onSubmit:function(){var l=this,e=l.form;l.$refs.form.validate((function(a){a&&(l.loading=!0,o.setPoints(e,!0).then((function(e){l.loading=!1,1==e.code?n({message:"恭喜你，保存成功",type:"success"}):l.loading=!1})).catch((function(e){l.loading=!1})))}))}}},y={class:"pb50"},p=f("div",{class:"common-form"},"积分设置",-1),j=f("div",{class:"lh18 mt10 gray9"},[f("p",null,"注：修改积分名称后，在买家端的所有页面里，看到的都是自定义的名称"),f("p",null,"例：商家使用自定义的积分名称来做品牌运营。如京东把积分称为“京豆”，淘宝把积分称为“淘金币”")],-1),b={class:"common-button-wrapper"};l("default",c(e,[["render",function(l,e,n,o,c,h){var v=a,_=t,x=s,w=u;return i(),r("div",y,[d(w,{ref:"form",size:"small",model:c.form,"label-width":"200px"},{default:m((function(){return[p,d(_,{label:"积分名称 ",prop:"points_name",rules:[{required:!0,message:" "}]},{default:m((function(){return[d(v,{modelValue:c.form.points_name,"onUpdate:modelValue":e[0]||(e[0]=function(l){return c.form.points_name=l}),autocomplete:"off",class:"max-w460"},null,8,["modelValue"]),j]})),_:1}),d(_,{label:"积分说明",rules:[{required:!0,message:" "}]},{default:m((function(){return[d(v,{type:"textarea",rows:"5",modelValue:c.form.describe,"onUpdate:modelValue":e[1]||(e[1]=function(l){return c.form.describe=l}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),f("div",b,[d(x,{type:"primary",size:"small",onClick:h.onSubmit,loading:c.loading},{default:m((function(){return[g("提交")]})),_:1},8,["onClick","loading"])])]})),_:1},8,["model"])])}]]))}}}));
