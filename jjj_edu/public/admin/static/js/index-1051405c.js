import{E as s,w as t,e as a,f as i,c as o}from"./element-plus-fe2e4fed.js";import{r as e,_ as r,j as l}from"./index-49a7d7a3.js";import{o as n,c as p,a as m,P as d,S as u,W as c,b as j}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";let g={getData:(s,t)=>e._get("/shop/plus.officia/index",s,t),saveData:(s,t)=>e._post("/shop/plus.officia/index",s,t)};const f={data:()=>({mobile_url:l,form:{status:!1},Data:[],loading:!1,rules:{status:[{required:!0,message:"请输入活动名称",trigger:"blur"}]}}),created(){this.getData()},methods:{getData(){let s=this;g.getData({},!0).then((t=>{s.loading=!1,"1"==t.data.vars.values.status?s.form.status=!0:s.form.status=!1})).catch((t=>{s.loading=!1}))},onSubmit(){let t=this,a={};t.form.status?a.status=1:a.status=0,t.loading=!0,g.saveData(a,!0).then((a=>{t.loading=!1,1==a.code?(s({message:"恭喜你，保存成功",type:"success"}),t.getData()):t.loading=!1})).catch((s=>{t.loading=!1}))}}},v={class:"attention pb50"},h={class:"attention-left"},b=["src"],_={class:"attention-right"},x=j('<div class="alert-warning"><div class="alert-icon"><span class="icon iconfont icon-gantanhao"></span></div><span class="alert-desc"><div> 1.使用该功能前，需前往小程序后台，在“设置”-&gt;“接口设置”-&gt;“公众号关注组件”中设置要展示的公众号。注：设置的公众号需与小程序主体一致。 <a href="https://mp.weixin.qq.com" target="_blank">去配置</a></div><div>2.若没有配置公众号，功能将不生效。</div><div class="attention-tips"> 3.在一个小程序的生命周期内，只有从以下场景进入小程序，才具有展示引导关注公众号的能力: <p>a）当小程序从扫小程序码打开时。</p><p>b）当从其他小程序返回小程序时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态。</p></div></span></div>',1),D={class:"common-button-wrapper"};const w=r(f,[["render",function(s,e,r,l,j,g){const f=t,w=a,y=i,k=o;return n(),p("div",v,[m("div",h,[m("img",{src:j.mobile_url,alt:"mobile"},null,8,b)]),m("div",_,[x,d(k,{ref:"form",size:"small",model:j.form,rules:j.rules,"label-width":"100px"},{default:u((()=>[d(w,{label:"公众号关注",prop:"status"},{default:u((()=>[d(f,{modelValue:j.form.status,"onUpdate:modelValue":e[0]||(e[0]=s=>j.form.status=s)},null,8,["modelValue"])])),_:1}),m("div",D,[d(y,{type:"primary",size:"small",onClick:g.onSubmit,loading:j.loading},{default:u((()=>[c("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model","rules"])])])}]]);export{w as default};
