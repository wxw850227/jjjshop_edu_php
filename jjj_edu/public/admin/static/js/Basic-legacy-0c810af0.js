System.register(["./Upload-legacy-b8ee985e.js","./element-plus-legacy-30dfbc6a.js","./vuedraggable-legacy-3fd351f9.js","./index-legacy-1e4e0dfe.js","./@vue-legacy-59f40785.js","./AddCategory-legacy-c2c86bfb.js","./file-legacy-2851dff4.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-legacy-ce17e81c.js","./sortablejs-legacy-a5a9eb1b.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(l,e){"use strict";var n,a,s,u,o,t,c,r,i,d,m,g,f,p;return{setters:[function(l){n=l._},function(l){a=l.d,s=l.e,u=l.f},function(l){o=l.d},function(l){t=l._},function(l){c=l.o,r=l.c,i=l.P,d=l.S,m=l.a,g=l.W,f=l.Y,p=l.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var e={components:{Upload:n,draggable:o},data:function(){return{formData:{},isProductUpload:!1}},inject:["form"],created:function(){this.formData=this.form},methods:{openProductUpload:function(){this.isProductUpload=!0},returnProductImgsFunc:function(l){if(null!=l){var e=l;this.form.model.file_path=e[0].file_path,this.form.model.image_id=e[0].file_id}this.isProductUpload=!1},deleteImg:function(l){this.form.model.file_path="",this.form.model.image_id=""}}},y={class:"basic-setting-content pl16 pr16"},j=m("div",{class:"common-form"},"基本信息",-1),h={class:""},v={class:"mb16"},_={key:0,class:"img"},b=["src"];l("default",t(e,[["render",function(l,e,o,t,P,U){var k=a,w=s,x=u,I=n;return c(),r("div",y,[j,i(w,{label:"商品名称：",rules:[{required:!0,message:"请填写商品名称"}],prop:"model.product_name"},{default:d((function(){return[i(k,{modelValue:U.form.model.product_name,"onUpdate:modelValue":e[0]||(e[0]=function(l){return U.form.model.product_name=l}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),i(w,{label:"商品图片：",rules:[{required:!0,message:"请上传商品图片"}],prop:"model.file_path"},{default:d((function(){return[m("div",h,[m("div",v,[i(x,{type:"primary",onClick:U.openProductUpload},{default:d((function(){return[g("选择图片")]})),_:1},8,["onClick"])]),""!=U.form.model.file_path?(c(),r("div",_,[m("img",{src:U.form.model.file_path,width:"100",height:"100"},null,8,b)])):f("",!0)])]})),_:1}),P.isProductUpload?(c(),p(I,{key:0,config:{total:9},isupload:P.isProductUpload,onReturnImgs:U.returnProductImgsFunc},{default:d((function(){return[g("上传图片")]})),_:1},8,["isupload","onReturnImgs"])):f("",!0)])}]]))}}}));
