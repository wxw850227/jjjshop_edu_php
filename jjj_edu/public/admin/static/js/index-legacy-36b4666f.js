System.register(["./element-plus-legacy-30dfbc6a.js","./index-legacy-1e4e0dfe.js","./@vue-legacy-59f40785.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(t,e){"use strict";var l,n,a,s,i,o,r,u,c,d,g,p,f,m,y;return{setters:[function(t){l=t.E,n=t.w,a=t.e,s=t.f,i=t.c},function(t){o=t.r,r=t._,u=t.j},function(t){c=t.o,d=t.c,g=t.a,p=t.P,f=t.S,m=t.W,y=t.b},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".attention{display:-webkit-box;display:-ms-flexbox;display:flex}.attention-left{width:375px;margin-right:30px}.attention-right .alert-warning{position:relative;padding:16px 16px 16px 69px;border-radius:6px;margin-bottom:10px;color:#495060;line-height:1.5;border:1px solid #ffebcc;background-color:#fff5e6}.attention-right .alert-warning .alert-icon{position:absolute;top:20px;left:24px}.attention-right .alert-warning .alert-icon .svg-icon{color:#f90}.attention .attention-left img{width:100%;border:1px solid #eeeeee}\n",document.head.appendChild(e);var h=function(t,e){return o._get("/shop/plus.officia/index",t,e)},j=function(t,e){return o._post("/shop/plus.officia/index",t,e)},b={data:function(){return{mobile_url:u,form:{status:!1},Data:[],loading:!1,rules:{status:[{required:!0,message:"请输入活动名称",trigger:"blur"}]}}},created:function(){this.getData()},methods:{getData:function(){var t=this;h({},!0).then((function(e){t.loading=!1,"1"==e.data.vars.values.status?t.form.status=!0:t.form.status=!1})).catch((function(e){t.loading=!1}))},onSubmit:function(){var t=this,e={};t.form.status?e.status=1:e.status=0,t.loading=!0,j(e,!0).then((function(e){t.loading=!1,1==e.code?(l({message:"恭喜你，保存成功",type:"success"}),t.getData()):t.loading=!1})).catch((function(e){t.loading=!1}))}}},v={class:"attention pb50"},x={class:"attention-left"},w=["src"],_={class:"attention-right"},k=y('<div class="alert-warning"><div class="alert-icon"><span class="icon iconfont icon-gantanhao"></span></div><span class="alert-desc"><div> 1.使用该功能前，需前往小程序后台，在“设置”-&gt;“接口设置”-&gt;“公众号关注组件”中设置要展示的公众号。注：设置的公众号需与小程序主体一致。 <a href="https://mp.weixin.qq.com" target="_blank">去配置</a></div><div>2.若没有配置公众号，功能将不生效。</div><div class="attention-tips"> 3.在一个小程序的生命周期内，只有从以下场景进入小程序，才具有展示引导关注公众号的能力: <p>a）当小程序从扫小程序码打开时。</p><p>b）当从其他小程序返回小程序时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态。</p></div></span></div>',1),q={class:"common-button-wrapper"};t("default",r(b,[["render",function(t,e,l,o,r,u){var y=n,h=a,j=s,b=i;return c(),d("div",v,[g("div",x,[g("img",{src:r.mobile_url,alt:"mobile"},null,8,w)]),g("div",_,[k,p(b,{ref:"form",size:"small",model:r.form,rules:r.rules,"label-width":"100px"},{default:f((function(){return[p(h,{label:"公众号关注",prop:"status"},{default:f((function(){return[p(y,{modelValue:r.form.status,"onUpdate:modelValue":e[0]||(e[0]=function(t){return r.form.status=t})},null,8,["modelValue"])]})),_:1}),g("div",q,[p(j,{type:"primary",size:"small",onClick:u.onSubmit,loading:r.loading},{default:f((function(){return[m("提交")]})),_:1},8,["onClick","loading"])])]})),_:1},8,["model","rules"])])])}]]))}}}));
