System.register(["./element-plus-legacy-30dfbc6a.js","./live-legacy-608cc8b0.js","./index-legacy-2f547dc0.js","./@vue-legacy-59f40785.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(e,l){"use strict";var a,n,o,r,u,t,s,i,c,d,f,m,p,g,y,_,V,b,v;return{setters:[function(e){a=e.E,n=e.i,o=e.e,r=e.d,u=e.q,t=e.r,s=e.c,i=e.f},function(e){c=e.L},function(e){d=e._},function(e){f=e.o,m=e.c,p=e.P,g=e.S,y=e.a,_=e.W,V=e.Q,b=e.a9,v=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={data:function(){return{form:{key:"",app_id:"",sign_key:"",is_open:0,is_record:0,is_audit:1,gift_name:"",vendor:"",region:"",bucket:"",accessKey:"",secretKey:"",username:"",password:"",domain:""},loading:!1,storage:[],region_arr:[]}},created:function(){this.getSetting()},methods:{getSetting:function(){var e=this;c.getSetting({},!0).then((function(l){e.loading=!1,e.form=l.data.vars.values,e.storage=l.data.storage,e.showRegion(e.form.vendor)})).catch((function(e){}))},onSubmit:function(){var e=this,l=e.form;e.$refs.form.validate((function(n){n&&(e.loading=!0,c.setSetting(l,!0).then((function(l){e.loading=!1,a({message:"恭喜你，保存成功",type:"success"})})).catch((function(l){e.loading=!1})))}))},showRegion:function(e){for(var l in this.region="",this.storage)this.storage[l].vendor==e&&(this.region_arr=this.storage[l].region)}}},j={class:"user"},h=y("div",{class:"common-form"},"基础设置",-1),w=y("p",{class:"gray"},"前台充值显示的礼物币名称",-1),x=y("div",{class:"common-form"},"声网sdk设置",-1),k=y("p",{class:"gray"},[_("声网APPID,"),y("a",{href:"https://www.agora.io/",target:"_blank"},"申请地址")],-1),U=y("p",{class:"gray"},"声网证书",-1),K=y("p",{class:"gray"},"如果需要录制请填写",-1),S=y("p",{class:"gray"},"如果需要录制请选择",-1),P=y("p",{class:"gray"},"第三方云存储的 bucket",-1),R=y("p",{class:"gray"},"第三方云存储的 accessKey",-1),D=y("p",{class:"gray"},"第三方云存储的 secretKey,建议提供只写权限的访问密钥",-1),q=y("p",{class:"gray"},'存储位置。举个例子，fileNamePrefix = ["directory1","directory2"]，将在录制文件名前加上前缀 "directory1/directory2/"，即 directory1/directory2/xxx.m3u8。前缀长度（包括斜杠）不得超过 128 个字符。字符串中不得出现斜杠',-1),E=y("p",{class:"gray"},"声网RESTful 客户ID",-1),N=y("p",{class:"gray"},"声网RESTful 客户秘钥",-1),T=y("p",{class:"gray"},"存储空间域名 Domain",-1),z={class:"common-button-wrapper"};e("default",d(l,[["render",function(e,l,a,c,d,C){var I=n,A=o,L=r,Q=u,W=t,$=s,B=i;return f(),m("div",j,[p($,{size:"small",ref:"form",model:d.form,"label-width":"150px"},{default:g((function(){return[h,p(A,{label:"是否开启直播"},{default:g((function(){return[y("div",null,[p(I,{modelValue:d.form.is_open,"onUpdate:modelValue":l[0]||(l[0]=function(e){return d.form.is_open=e}),label:"1"},{default:g((function(){return[_("开启")]})),_:1},8,["modelValue"]),p(I,{modelValue:d.form.is_open,"onUpdate:modelValue":l[1]||(l[1]=function(e){return d.form.is_open=e}),label:"0"},{default:g((function(){return[_("关闭")]})),_:1},8,["modelValue"])])]})),_:1}),p(A,{label:"是否开启审核"},{default:g((function(){return[y("div",null,[p(I,{modelValue:d.form.is_audit,"onUpdate:modelValue":l[2]||(l[2]=function(e){return d.form.is_audit=e}),label:"1"},{default:g((function(){return[_("开启")]})),_:1},8,["modelValue"]),p(I,{modelValue:d.form.is_audit,"onUpdate:modelValue":l[3]||(l[3]=function(e){return d.form.is_audit=e}),label:"0"},{default:g((function(){return[_("关闭")]})),_:1},8,["modelValue"])])]})),_:1}),p(A,{label:"礼物币名称",rules:[{required:!0,message:" "}],prop:"gift_name"},{default:g((function(){return[p(L,{modelValue:d.form.gift_name,"onUpdate:modelValue":l[4]||(l[4]=function(e){return d.form.gift_name=e}),placeholder:"礼物币名称",class:"max-w460"},null,8,["modelValue"]),w]})),_:1}),x,p(A,{label:"app_id",rules:[{required:!0,message:" "}],prop:"app_id"},{default:g((function(){return[p(L,{modelValue:d.form.app_id,"onUpdate:modelValue":l[5]||(l[5]=function(e){return d.form.app_id=e}),class:"max-w460"},null,8,["modelValue"]),k]})),_:1}),p(A,{label:"key",rules:[{required:!0,message:" "}],prop:"key"},{default:g((function(){return[p(L,{modelValue:d.form.key,"onUpdate:modelValue":l[6]||(l[6]=function(e){return d.form.key=e}),class:"max-w460"},null,8,["modelValue"]),U]})),_:1}),p(A,{label:"是否开启录制"},{default:g((function(){return[y("div",null,[p(I,{modelValue:d.form.is_record,"onUpdate:modelValue":l[7]||(l[7]=function(e){return d.form.is_record=e}),label:"1"},{default:g((function(){return[_("开启")]})),_:1},8,["modelValue"]),p(I,{modelValue:d.form.is_record,"onUpdate:modelValue":l[8]||(l[8]=function(e){return d.form.is_record=e}),label:"0"},{default:g((function(){return[_("关闭")]})),_:1},8,["modelValue"])])]})),_:1}),p(A,{label:"存储选择"},{default:g((function(){return[p(W,{modelValue:d.form.vendor,"onUpdate:modelValue":l[9]||(l[9]=function(e){return d.form.vendor=e}),placeholder:"请选择",onChange:C.showRegion},{default:g((function(){return[(f(!0),m(V,null,b(d.storage,(function(e,l){return f(),v(Q,{key:l,label:e.name,value:e.vendor},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"]),K]})),_:1}),p(A,{label:"存储地区选择"},{default:g((function(){return[p(W,{modelValue:d.form.region,"onUpdate:modelValue":l[10]||(l[10]=function(e){return d.form.region=e}),placeholder:"请选择"},{default:g((function(){return[(f(!0),m(V,null,b(d.region_arr,(function(e,l){return f(),v(Q,{key:e,label:l,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),S]})),_:1}),p(A,{label:"bucket",prop:"bucket"},{default:g((function(){return[p(L,{modelValue:d.form.bucket,"onUpdate:modelValue":l[11]||(l[11]=function(e){return d.form.bucket=e}),class:"max-w460"},null,8,["modelValue"]),P]})),_:1}),p(A,{label:"accessKey",prop:"accessKey"},{default:g((function(){return[p(L,{modelValue:d.form.accessKey,"onUpdate:modelValue":l[12]||(l[12]=function(e){return d.form.accessKey=e}),class:"max-w460"},null,8,["modelValue"]),R]})),_:1}),p(A,{label:"secretKey",prop:"secretKey"},{default:g((function(){return[p(L,{modelValue:d.form.secretKey,"onUpdate:modelValue":l[13]||(l[13]=function(e){return d.form.secretKey=e}),class:"max-w460"},null,8,["modelValue"]),D]})),_:1}),p(A,{label:"fileNamePrefix",prop:"fileNamePrefix"},{default:g((function(){return[p(L,{modelValue:d.form.fileNamePrefix,"onUpdate:modelValue":l[14]||(l[14]=function(e){return d.form.fileNamePrefix=e}),class:"max-w460"},null,8,["modelValue"]),q]})),_:1}),p(A,{label:"RESTful 客户ID",prop:"username"},{default:g((function(){return[p(L,{modelValue:d.form.username,"onUpdate:modelValue":l[15]||(l[15]=function(e){return d.form.username=e}),class:"max-w460"},null,8,["modelValue"]),E]})),_:1}),p(A,{label:"RESTful客户秘钥",prop:"password"},{default:g((function(){return[p(L,{modelValue:d.form.password,"onUpdate:modelValue":l[16]||(l[16]=function(e){return d.form.password=e}),type:"password",class:"max-w460"},null,8,["modelValue"]),N]})),_:1}),p(A,{label:"空间域名 Domain",prop:"domain"},{default:g((function(){return[p(L,{modelValue:d.form.domain,"onUpdate:modelValue":l[17]||(l[17]=function(e){return d.form.domain=e}),class:"max-w460"},null,8,["modelValue"]),T]})),_:1})]})),_:1},8,["model"]),y("div",z,[p(B,{size:"small",type:"primary",onClick:C.onSubmit,disabled:d.loading},{default:g((function(){return[_("保存")]})),_:1},8,["onClick","disabled"])])])}]]))}}}));
