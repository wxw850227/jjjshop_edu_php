System.register(["./element-plus-legacy-b1bc9429.js","./region-legacy-e4fca795.js","./index-legacy-b51f2f74.js","./@vue-legacy-defb427e.js","./lodash-es-legacy-74aa31b9.js","./@vueuse-legacy-27799edc.js","./dayjs-legacy-c88d724a.js","./call-bind-legacy-288cbb35.js","./get-intrinsic-legacy-ae4be0ce.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-d664dd08.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-6ad630d1.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./request-legacy-e0ba8d8b.js","./axios-legacy-d06d9fd6.js","./qs-legacy-1fb74c88.js","./side-channel-legacy-760b1d7c.js","./object-inspect-legacy-8a8d4a81.js","./vue-router-legacy-7cea2139.js","./pinia-legacy-eefee76f.js"],(function(e,l){"use strict";var n,a,o,u,t,r,i,c,d,m,f,s,p,g,y,V,_,v,h,j;return{setters:[function(e){n=e.a,a=e.b,o=e.m,u=e.d,t=e.g,r=e.h,i=e.c,c=e.e},function(e){d=e.R},function(e){m=e._},function(e){f=e.c,s=e.O,p=e.R,g=e.o,y=e.a,V=e.V,_=e.S,v=e.P,h=e.a8,j=e.X},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".tips{color:#ccc}\n",document.head.appendChild(l);var b={data:function(){return{loading:!1,form:{province_id:"",city_id:"",level:1},areaList:[]}},created:function(){this.getData()},methods:{getData:function(){var e=this;d.toAddRegion({},!0).then((function(l){e.areaList=l.data.regionData})).catch((function(e){}))},onSubmit:function(){var e=this,l=this.form;e.$refs.form.validate((function(a){a&&(e.loading=!0,d.addRegion(l,!0).then((function(l){e.loading=!1,n({message:"恭喜你，添加成功",type:"success"}),e.$router.push("/region/Index")})).catch((function(l){e.loading=!1})))}))},initCity:function(){this.form.city_id=""}}},x={class:"product-add"},U=y("div",{class:"common-form"},"新增物流公司",-1),w=y("div",{class:"tips"},"数字越小越靠前",-1);e("default",m(b,[["render",function(e,l,n,d,m,b){var C=o,k=u,z=t,L=r,R=i,S=c,q=a;return g(),f("div",x,[s(q,{size:"small",ref:"form",model:m.form,"label-width":"200px"},{default:p((function(){return[U,s(k,{label:"地区类型"},{default:p((function(){return[y("div",null,[s(C,{modelValue:m.form.level,"onUpdate:modelValue":l[0]||(l[0]=function(e){return m.form.level=e}),label:1},{default:p((function(){return[V("省份")]})),_:1},8,["modelValue"]),s(C,{modelValue:m.form.level,"onUpdate:modelValue":l[1]||(l[1]=function(e){return m.form.level=e}),label:2},{default:p((function(){return[V("城市")]})),_:1},8,["modelValue"]),s(C,{modelValue:m.form.level,"onUpdate:modelValue":l[2]||(l[2]=function(e){return m.form.level=e}),label:3},{default:p((function(){return[V("地区")]})),_:1},8,["modelValue"])])]})),_:1}),m.form.level>1?(g(),_(k,{key:0,label:"选择上级"},{default:p((function(){return[m.form.level>1?(g(),_(L,{key:0,modelValue:m.form.province_id,"onUpdate:modelValue":l[3]||(l[3]=function(e){return m.form.province_id=e}),placeholder:"省",onChange:b.initCity},{default:p((function(){return[(g(!0),f(v,null,h(m.areaList,(function(e,l){return g(),_(z,{label:e.name,value:e.id,key:l},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])):j("",!0),""!=m.form.province_id&&m.form.level>2?(g(),_(L,{key:1,modelValue:m.form.city_id,"onUpdate:modelValue":l[4]||(l[4]=function(e){return m.form.city_id=e}),placeholder:"市"},{default:p((function(){return[(g(!0),f(v,null,h(m.areaList[m.form.province_id].city,(function(e,l){return g(),_(z,{label:e.name,value:e.id,key:l},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])):j("",!0)]})),_:1})):j("",!0),s(k,{label:"地区名称 ",prop:"name",rules:[{required:!0,message:" "}]},{default:p((function(){return[s(R,{modelValue:m.form.name,"onUpdate:modelValue":l[5]||(l[5]=function(e){return m.form.name=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),s(k,{label:"简称",prop:"shortname"},{default:p((function(){return[s(R,{modelValue:m.form.shortname,"onUpdate:modelValue":l[6]||(l[6]=function(e){return m.form.shortname=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),s(k,{label:"全称",prop:"merger_name"},{default:p((function(){return[s(R,{modelValue:m.form.merger_name,"onUpdate:modelValue":l[7]||(l[7]=function(e){return m.form.merger_name=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),s(k,{label:"拼音",prop:"pinyin"},{default:p((function(){return[s(R,{modelValue:m.form.pinyin,"onUpdate:modelValue":l[8]||(l[8]=function(e){return m.form.pinyin=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),s(k,{label:"邮编",prop:"zip_code"},{default:p((function(){return[s(R,{modelValue:m.form.zip_code,"onUpdate:modelValue":l[9]||(l[9]=function(e){return m.form.zip_code=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),s(k,{label:"首字母",prop:"first"},{default:p((function(){return[s(R,{modelValue:m.form.first,"onUpdate:modelValue":l[10]||(l[10]=function(e){return m.form.first=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),s(k,{label:"经度",prop:"lng"},{default:p((function(){return[s(R,{modelValue:m.form.lng,"onUpdate:modelValue":l[11]||(l[11]=function(e){return m.form.lng=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),s(k,{label:"纬度",prop:"lat"},{default:p((function(){return[s(R,{modelValue:m.form.lat,"onUpdate:modelValue":l[12]||(l[12]=function(e){return m.form.lat=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),s(k,{label:"排序"},{default:p((function(){return[s(R,{modelValue:m.form.sort,"onUpdate:modelValue":l[13]||(l[13]=function(e){return m.form.sort=e}),type:"number",class:"max-w460"},null,8,["modelValue"]),w]})),_:1}),s(k,null,{default:p((function(){return[s(S,{type:"primary",onClick:b.onSubmit,loading:m.loading},{default:p((function(){return[V("提交")]})),_:1},8,["onClick","loading"])]})),_:1})]})),_:1},8,["model"])])}]]))}}}));
