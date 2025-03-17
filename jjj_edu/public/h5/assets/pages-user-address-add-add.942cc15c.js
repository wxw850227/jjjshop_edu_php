import{_ as e,A as a,o as t,a as l,w as s,n as i,f as o,d,e as n,p as r,i as c,I as u,af as m,ae as f,y as p,a2 as y,h as _}from"./index-4d017ba3.js";import{m as h}from"./mpvueCityPicker.e6ea2085.js";const g=e({components:{mpvueCityPicker:h},data:()=>({cityPickerValueDefault:[0,0,0],selectCity:"",province_id:0,city_id:0,region_id:0,address:{},delta:1,province:[],city:[],area:[],is_load:!1}),onLoad:function(e){this.delta=e.delta,this.getData()},methods:{getData(){let e=this;e._post("settings/getRegion",{},(function(a){e.province=a.data.regionData[0],e.city=a.data.regionData[1],e.area=a.data.regionData[2],e.is_load=!0}))},formSubmit:function(e){let t=this;var l=e.detail.value;return l.province_id=t.province_id,l.city_id=t.city_id,l.region_id=t.region_id,""==l.name?(a({title:"请输入收货人姓名",duration:1e3,icon:"none"}),!1):""==l.phone?(a({title:"请输入手机号码",duration:1e3,icon:"none"}),!1):0!=l.province_id&&0!=l.city_id&&!l.region_id||""!=l.detail?""==l.detail?(a({title:"请输入街道小区楼牌号等",duration:1e3,icon:"none"}),!1):void t._post("user.address/add",l,(function(e){t.showSuccess(e.msg,(function(){history.go(-t.delta)}))})):(a({title:"请选择完整省市区",duration:1e3,icon:"none"}),!1)},formReset:function(e){console.log("清空数据")},showMulLinkageThreePicker(){console.log("kkkk"),this.$refs.mpvueCityPicker.show()},onConfirm(e){this.selectCity=e.label,this.province_id=e.cityCode[0],this.city_id=e.cityCode[1],this.region_id=e.cityCode[2]}}},[["render",function(e,a,h,g,k,b){const v=c,C=u,V=o,x=m,D=f,P=p,w=y,R=_("mpvue-city-picker");return t(),l(V,{class:i(["address-form",e.theme()||""]),"data-theme":e.theme()},{default:s((()=>[d(w,{onSubmit:b.formSubmit,onReset:b.formReset},{default:s((()=>[d(V,{class:"bg-white p-0-30 f30 br12"},{default:s((()=>[d(V,{class:"d-s-c border-b-e"},{default:s((()=>[d(v,{class:"key-name"},{default:s((()=>[n("姓名")])),_:1}),d(C,{class:"ml20 flex-1 f32 p-30-0",name:"name",type:"text","placeholder-class":"grary9",modelValue:k.address.name,"onUpdate:modelValue":a[0]||(a[0]=e=>k.address.name=e),placeholder:"请输入收货人姓名"},null,8,["modelValue"])])),_:1}),d(V,{class:"d-s-c border-b-e"},{default:s((()=>[d(v,{class:"key-name"},{default:s((()=>[n("手机号")])),_:1}),d(C,{class:"ml20 flex-1 f32 p-30-0",name:"phone",type:"text","placeholder-class":"grary9",modelValue:k.address.phone,"onUpdate:modelValue":a[1]||(a[1]=e=>k.address.phone=e),placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1}),d(V,{class:"d-s-c border-b-e"},{default:s((()=>[d(v,{class:"key-name"},{default:s((()=>[n("所在地区")])),_:1}),d(V,{class:"input-box flex-1",onClick:b.showMulLinkageThreePicker},{default:s((()=>[d(C,{class:"ml20 f32 flex-1 p-30-0",type:"text","placeholder-class":"grary9",placeholder:"选择省,市,区",modelValue:k.selectCity,"onUpdate:modelValue":a[2]||(a[2]=e=>k.selectCity=e),disabled:"",style:{"pointer-events":"none"}},null,8,["modelValue"])])),_:1},8,["onClick"])])),_:1}),d(V,{class:"d-s-c border-b-e"},{default:s((()=>[d(v,{class:"key-name"},{default:s((()=>[n("详细地址")])),_:1}),d(x,{class:"ml20 flex-1 p-30-0 lh150",name:"detail","auto-height":!0,"placeholder-class":"grary9",modelValue:k.address.detail,"onUpdate:modelValue":a[3]||(a[3]=e=>k.address.detail=e),placeholder:"请输入小区、街道或公司名称"},null,8,["modelValue"])])),_:1}),d(V,{class:"d-s-c"},{default:s((()=>[d(v,{class:"key-name"},{default:s((()=>[n("设为默认地址")])),_:1}),d(C,{disabled:"",class:"ml20 flex-1 f32 p-30-0"}),d(D,{style:{transform:"scale(0.6)"}})])),_:1})])),_:1}),d(V,{class:"btnFixed"},{default:s((()=>[d(V,{class:"p30"},{default:s((()=>[d(P,{"form-type":"submit",class:"addBtn"},{default:s((()=>[n("保存")])),_:1})])),_:1})])),_:1})])),_:1},8,["onSubmit","onReset"]),k.is_load?(t(),l(R,{key:0,ref:"mpvueCityPicker",province:k.province,city:k.city,area:k.area,pickerValueDefault:k.cityPickerValueDefault,onOnConfirm:b.onConfirm},null,8,["province","city","area","pickerValueDefault","onOnConfirm"])):r("",!0)])),_:1},8,["data-theme","class"])}],["__scopeId","data-v-6e643590"]]);export{g as default};
