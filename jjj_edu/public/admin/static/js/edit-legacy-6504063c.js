System.register(["./element-plus-legacy-30dfbc6a.js","./setting-legacy-44d89013.js","./index-legacy-325b1913.js","./@vue-legacy-59f40785.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(e,l){"use strict";var n,t,s,a,o,r,u,c,i,d,f,m,p,g,y;return{setters:[function(e){n=e.E,t=e.d,s=e.K,a=e.h,o=e.e,r=e.f,u=e.c},function(e){c=e.S},function(e){i=e._},function(e){d=e.o,f=e.c,m=e.P,p=e.S,g=e.W,y=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".tips{color:#ccc}\n",document.head.appendChild(l);var j={data:function(){return{form:{express_id:"",express_name:"",express_code:"",sort:""},loading:!1}},created:function(){this.getData()},methods:{getData:function(){var e=this,l=this.$route.query.express_id;c.expressDetail({express_id:l},!0).then((function(l){var n=l.data.detail;e.form.express_id=n.express_id,e.form.express_name=n.express_name,e.form.express_code=n.express_code,e.form.sort=n.sort})).catch((function(e){}))},onSubmit:function(){var e=this;e.loading=!0;var l=this.form;c.editExpress(l,!0).then((function(l){e.loading=!1,n({message:"恭喜你，修改成功",type:"success"}),e.$router.push("/setting/express/index")})).catch((function(l){e.loading=!1}))},gotoCompany:function(){var e=window.location.protocol+"//"+window.location.host;window.location.href=e+"/express.xlsx"}}},x={class:"product-add"},_=y("div",{class:"common-form"},"修改物流公司",-1),h={class:"common-button-wrapper"};e("default",i(j,[["render",function(e,l,n,c,i,j){var v=t,b=s,w=a,V=o,C=r,S=u;return d(),f("div",x,[m(S,{size:"small",ref:"form",model:i.form,"label-width":"200px"},{default:p((function(){return[_,m(V,{label:"物流公司名称 "},{default:p((function(){return[m(v,{modelValue:i.form.express_name,"onUpdate:modelValue":l[0]||(l[0]=function(e){return i.form.express_name=e}),class:"max-w460"},null,8,["modelValue"]),m(w,{class:"tips"},{default:p((function(){return[g(" 请对照 "),m(b,{type:"primary",underline:!1,onClick:l[1]||(l[1]=function(e){return j.gotoCompany()})},{default:p((function(){return[g("物流公司编码表")]})),_:1}),g(" 填写 ")]})),_:1})]})),_:1}),m(V,{label:"物流公司代码 "},{default:p((function(){return[m(v,{modelValue:i.form.express_code,"onUpdate:modelValue":l[2]||(l[2]=function(e){return i.form.express_code=e}),class:"max-w460"},null,8,["modelValue"]),m(w,{class:"tips"},{default:p((function(){return[g("用于快递100API查询物流信息，务必填写正确")]})),_:1})]})),_:1}),m(V,{label:"排序"},{default:p((function(){return[m(v,{modelValue:i.form.sort,"onUpdate:modelValue":l[3]||(l[3]=function(e){return i.form.sort=e}),type:"number",class:"max-w460"},null,8,["modelValue"]),m(w,{class:"tips"},{default:p((function(){return[g("数字越小越靠前")]})),_:1})]})),_:1}),y("div",h,[m(C,{type:"primary",onClick:j.onSubmit,loading:i.loading},{default:p((function(){return[g("提交")]})),_:1},8,["onClick","loading"])])]})),_:1},8,["model"])])}]]))}}}));
