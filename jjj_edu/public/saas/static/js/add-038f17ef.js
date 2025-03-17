import{a as e,b as l,m as a,d as o,g as m,h as t,c as r,e as d}from"./element-plus-b1fe4ef5.js";import{R as s}from"./region-b3a3600a.js";import{_ as i}from"./index-ca2fca40.js";import{c as n,O as u,R as p,o as f,a as c,V,S as _,P as j,a8 as b,X as h}from"./@vue-413ce838.js";import"./lodash-es-12c6aa75.js";import"./async-validator-cf877c1f.js";import"./@vueuse-4fad2ccb.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1ce7f40b.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./request-16c40424.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-router-569da8b3.js";import"./pinia-1c212f4d.js";const v={data:()=>({loading:!1,form:{province_id:"",city_id:"",level:1},areaList:[]}),created(){this.getData()},methods:{getData(){let e=this;s.toAddRegion({},!0).then((l=>{e.areaList=l.data.regionData})).catch((e=>{}))},onSubmit(){let l=this,a=this.form;l.$refs.form.validate((o=>{o&&(l.loading=!0,s.addRegion(a,!0).then((a=>{l.loading=!1,e({message:"恭喜你，添加成功",type:"success"}),l.$router.push("/region/Index")})).catch((e=>{l.loading=!1})))}))},initCity(){this.form.city_id=""}}},g={class:"product-add"},y=c("div",{class:"common-form"},"新增物流公司",-1),x=c("div",{class:"tips"},"数字越小越靠前",-1);const U=i(v,[["render",function(e,s,i,v,U,w){const k=a,C=o,z=m,q=t,L=r,R=d,D=l;return f(),n("div",g,[u(D,{size:"small",ref:"form",model:U.form,"label-width":"200px"},{default:p((()=>[y,u(C,{label:"地区类型"},{default:p((()=>[c("div",null,[u(k,{modelValue:U.form.level,"onUpdate:modelValue":s[0]||(s[0]=e=>U.form.level=e),label:1},{default:p((()=>[V("省份")])),_:1},8,["modelValue"]),u(k,{modelValue:U.form.level,"onUpdate:modelValue":s[1]||(s[1]=e=>U.form.level=e),label:2},{default:p((()=>[V("城市")])),_:1},8,["modelValue"]),u(k,{modelValue:U.form.level,"onUpdate:modelValue":s[2]||(s[2]=e=>U.form.level=e),label:3},{default:p((()=>[V("地区")])),_:1},8,["modelValue"])])])),_:1}),U.form.level>1?(f(),_(C,{key:0,label:"选择上级"},{default:p((()=>[U.form.level>1?(f(),_(q,{key:0,modelValue:U.form.province_id,"onUpdate:modelValue":s[3]||(s[3]=e=>U.form.province_id=e),placeholder:"省",onChange:w.initCity},{default:p((()=>[(f(!0),n(j,null,b(U.areaList,((e,l)=>(f(),_(z,{label:e.name,value:e.id,key:l},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])):h("",!0),""!=U.form.province_id&&U.form.level>2?(f(),_(q,{key:1,modelValue:U.form.city_id,"onUpdate:modelValue":s[4]||(s[4]=e=>U.form.city_id=e),placeholder:"市"},{default:p((()=>[(f(!0),n(j,null,b(U.areaList[U.form.province_id].city,((e,l)=>(f(),_(z,{label:e.name,value:e.id,key:l},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):h("",!0)])),_:1})):h("",!0),u(C,{label:"地区名称 ",prop:"name",rules:[{required:!0,message:" "}]},{default:p((()=>[u(L,{modelValue:U.form.name,"onUpdate:modelValue":s[5]||(s[5]=e=>U.form.name=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),u(C,{label:"简称",prop:"shortname"},{default:p((()=>[u(L,{modelValue:U.form.shortname,"onUpdate:modelValue":s[6]||(s[6]=e=>U.form.shortname=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),u(C,{label:"全称",prop:"merger_name"},{default:p((()=>[u(L,{modelValue:U.form.merger_name,"onUpdate:modelValue":s[7]||(s[7]=e=>U.form.merger_name=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),u(C,{label:"拼音",prop:"pinyin"},{default:p((()=>[u(L,{modelValue:U.form.pinyin,"onUpdate:modelValue":s[8]||(s[8]=e=>U.form.pinyin=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),u(C,{label:"邮编",prop:"zip_code"},{default:p((()=>[u(L,{modelValue:U.form.zip_code,"onUpdate:modelValue":s[9]||(s[9]=e=>U.form.zip_code=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),u(C,{label:"首字母",prop:"first"},{default:p((()=>[u(L,{modelValue:U.form.first,"onUpdate:modelValue":s[10]||(s[10]=e=>U.form.first=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),u(C,{label:"经度",prop:"lng"},{default:p((()=>[u(L,{modelValue:U.form.lng,"onUpdate:modelValue":s[11]||(s[11]=e=>U.form.lng=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),u(C,{label:"纬度",prop:"lat"},{default:p((()=>[u(L,{modelValue:U.form.lat,"onUpdate:modelValue":s[12]||(s[12]=e=>U.form.lat=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),u(C,{label:"排序"},{default:p((()=>[u(L,{modelValue:U.form.sort,"onUpdate:modelValue":s[13]||(s[13]=e=>U.form.sort=e),type:"number",class:"max-w460"},null,8,["modelValue"]),x])),_:1}),u(C,null,{default:p((()=>[u(R,{type:"primary",onClick:w.onSubmit,loading:U.loading},{default:p((()=>[V("提交")])),_:1},8,["onClick","loading"])])),_:1})])),_:1},8,["model"])])}]]);export{U as default};
