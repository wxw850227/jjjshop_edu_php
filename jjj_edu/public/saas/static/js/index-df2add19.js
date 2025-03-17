import{a as e,b as a,c as l,s as i,d as s,m as o,e as r}from"./element-plus-1d2aab9a.js";import{r as t}from"./request-354c9ec4.js";import{_ as m}from"./index-50364d71.js";import{c as p,O as d,R as n,o as c,V as u,a as _,P as f,X as v}from"./@vue-413ce838.js";import"./lodash-es-493ac664.js";import"./@vueuse-4fad2ccb.js";import"./dayjs-3f6c138b.js";import"./call-bind-a6dd5c06.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1ce7f40b.js";import"./@popperjs-b78c3215.js";import"./escape-html-d3e23fdb.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./axios-63583d02.js";import"./qs-edfbe083.js";import"./side-channel-6da5de8a.js";import"./object-inspect-66d569d0.js";import"./vue-router-569da8b3.js";import"./pinia-1c212f4d.js";let h={serviceDetail:(e,a)=>t._get("/admin/setting.service/index",e,a),editService:(e,a)=>t._post("/admin/setting.service/index",e,a)};const x={data:()=>({loading:!1,form:{service_open:1,weixin_service:{}}}),created(){this.getParams()},methods:{getParams(){let e=this;h.serviceDetail({},!0).then((a=>{e.form=a.data.vars.values,e.form.service_open=parseInt(e.form.service_open),e.form.weixin_service.is_open=parseInt(e.form.weixin_service.is_open),e.loading=!1})).catch((a=>{e.loading=!1}))},onSubmit(){let a=this,l=this.form;a.$refs.form.validate((i=>{i&&(a.loading=!0,h.editService(l,!0).then((l=>{a.loading=!1,e({message:"恭喜你，设置成功",type:"success"}),a.$router.push("/setting/Index")})).catch((e=>{a.loading=!1})))}))}}},w={class:"product-add"},j=_("div",{class:"common-form"},"管理后台设置",-1),V=_("div",{class:"common-form"},"微信服务商支付设置",-1),g={class:"button-wrapper"};const b=m(x,[["render",function(e,t,m,h,x,b){const y=l,k=i,U=s,S=o,q=r,z=a;return c(),p("div",w,[d(z,{size:"small",ref:"form",model:x.form,"label-width":"150px"},{default:n((()=>[j,d(U,{label:"管理后台名称",rules:[{required:!0,message:" "}],prop:"shop_name"},{default:n((()=>[d(y,{modelValue:x.form.shop_name,"onUpdate:modelValue":t[0]||(t[0]=e=>x.form.shop_name=e),placeholder:"管理后台名称",class:"max-w460"},null,8,["modelValue"]),d(k,{class:"tips"},{default:n((()=>[u(" shop端商城名称，显示在登录页 ")])),_:1})])),_:1}),d(U,{label:"管理后台背景",prop:"shop_bg_img"},{default:n((()=>[d(y,{modelValue:x.form.shop_bg_img,"onUpdate:modelValue":t[1]||(t[1]=e=>x.form.shop_bg_img=e),placeholder:"管理后台背景",class:"max-w460"},null,8,["modelValue"]),d(k,{class:"tips"},{default:n((()=>[u(" shop端商城登录背景，不填则为系统默认登录背景，填写网络地址 ")])),_:1})])),_:1}),V,d(U,{label:"微信服务商支付"},{default:n((()=>[_("div",null,[d(S,{modelValue:x.form.weixin_service.is_open,"onUpdate:modelValue":t[2]||(t[2]=e=>x.form.weixin_service.is_open=e),label:1},{default:n((()=>[u("开启")])),_:1},8,["modelValue"]),d(S,{modelValue:x.form.weixin_service.is_open,"onUpdate:modelValue":t[3]||(t[3]=e=>x.form.weixin_service.is_open=e),label:0},{default:n((()=>[u("关闭")])),_:1},8,["modelValue"])])])),_:1}),1==x.form.weixin_service.is_open?(c(),p(f,{key:0},[d(U,{label:"服务商户号"},{default:n((()=>[d(y,{modelValue:x.form.weixin_service.mch_id,"onUpdate:modelValue":t[4]||(t[4]=e=>x.form.weixin_service.mch_id=e),placeholder:"服务商户号",class:"max-w460"},null,8,["modelValue"]),d(k,{class:"tips"},{default:n((()=>[u(" 填写服务商户号、10位数字 ")])),_:1})])),_:1}),d(U,{label:"服务商支付秘钥apikey"},{default:n((()=>[d(y,{modelValue:x.form.weixin_service.apikey,"onUpdate:modelValue":t[5]||(t[5]=e=>x.form.weixin_service.apikey=e),placeholder:"服务商支付秘钥apikey",class:"max-w460"},null,8,["modelValue"]),d(k,{class:"tips"},{default:n((()=>[u(" 填写服务商户支付秘钥apikey ")])),_:1})])),_:1}),d(U,{label:"服务商appid"},{default:n((()=>[d(y,{modelValue:x.form.weixin_service.app_id,"onUpdate:modelValue":t[6]||(t[6]=e=>x.form.weixin_service.app_id=e),placeholder:"服务商appid",class:"max-w460"},null,8,["modelValue"]),d(k,{class:"tips"},{default:n((()=>[u(" 填写服务商户号绑定的公众号appid ")])),_:1})])),_:1}),d(U,{label:"apiclient_cert.pem"},{default:n((()=>[d(y,{type:"textarea",rows:4,placeholder:"使用文本编辑器打开apiclient_cert.pem文件，将文件的全部内容复制进来",modelValue:x.form.weixin_service.cert_pem,"onUpdate:modelValue":t[7]||(t[7]=e=>x.form.weixin_service.cert_pem=e),class:"max-w460"},null,8,["modelValue"]),d(k,{class:"tips"},{default:n((()=>[u("使用文本编辑器打开apiclient_key.pem文件，将文件的全部内容复制进来")])),_:1})])),_:1}),d(U,{label:"apiclient_key.pem"},{default:n((()=>[d(y,{type:"textarea",rows:4,placeholder:"使用文本编辑器打开apiclient_cert.pem文件，将文件的全部内容复制进来",modelValue:x.form.weixin_service.key_pem,"onUpdate:modelValue":t[8]||(t[8]=e=>x.form.weixin_service.key_pem=e),class:"max-w460"},null,8,["modelValue"]),d(k,{class:"tips"},{default:n((()=>[u("使用文本编辑器打开apiclient_key.pem文件，将文件的全部内容复制进来")])),_:1})])),_:1})],64)):v("",!0),_("div",g,[d(q,{size:"large",type:"primary",onClick:b.onSubmit,loading:x.loading},{default:n((()=>[u("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"])])}]]);export{b as default};
