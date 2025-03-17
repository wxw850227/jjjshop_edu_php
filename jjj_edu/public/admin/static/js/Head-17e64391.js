import{a as s,E as e,t,u as a}from"./element-plus-fe2e4fed.js";import{_ as i,u as o}from"./index-68daabb5.js";import{b as r}from"./vue-router-64e93849.js";import n from"./UpdatePassword-7395895c.js";import{F as p,K as u,z as l,L as c,ae as m,o as h,c as d,a as b,X as y,P as v,S as j,Q as _,a9 as f,T as g,Y as x}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";import"./user-2b4a453e.js";const w=p({components:{UpdatePassword:n},setup(){const s=r(),{userInfo:e,bus_on:t,bus_emit:a,bus_off:i,afterLogout:n}=o(),p=u({menu_title:"菜单",tabList:[],activeValue:0,is_password:!1,tab_type:""});return t("MenuName",(s=>{p.menu_title=s})),t("tabData",(s=>{p.tabList=s.list,p.activeValue=s.active,p.tab_type=s.tab_type})),t("activeValue",(s=>{p.activeValue=s})),t("noTarget",(s=>{p.activeValue=s})),a("headLoad",!0),l((()=>{i("menuName"),i("tabData")})),{...c(p),userInfo:e,afterLogout:n,router:s,bus_emit:a}},methods:{exit(){s.confirm("此操作将退出登录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.logout()})).catch((()=>{e({type:"info",message:"已取消退出"})}))},async logout(){await this.afterLogout(),this.router.push("/login")},tabClick(s){let e=s.props;"card"==this.tab_type&&this.router.push({path:"/plus/card/event",query:{type:e.name}}),"agent"==this.tab_type&&this.router.push({path:"/plus/agent/index",query:{type:e.name}}),"coupon"==this.tab_type&&this.router.push({path:"/plus/coupon/index",query:{type:e.name}}),"points"==this.tab_type&&this.router.push({path:"/plus/points/index",query:{type:e.name}}),"seckill"==this.tab_type&&this.router.push({path:"/plus/seckill/index",query:{type:e.name}}),"assemble"==this.tab_type&&this.router.push({path:"/plus/assemble/index",query:{type:e.name}}),"bargain"==this.tab_type&&this.router.push({path:"/plus/bargain/index",query:{type:e.name}}),"store"==this.tab_type&&this.router.push({path:"/store/index",query:{type:e.name}}),"appopen"==this.tab_type&&this.router.push({path:"/appsetting/appopen/event",query:{type:e.name}}),this.activeValue=e.name,this.bus_emit("activeValue",e.name)},passwordFunc(){this.is_password=!0},closeFunc(){this.is_password=!1}}}),k={class:"common-header"},q={class:"breadcrumb"},C={class:"baseInfo-left-base d-s-c"},L={class:"name"},V={class:"el-tabs-container"},T={class:"header-navbar"},F={class:"header-navbar-icon"},I={class:"gray"},P={class:"header-navbar-icon"},z=b("span",{class:"ml4 icon iconfont icon-geren9"},null,-1),N={class:"text ml4 blue"},U=b("div",{class:"header-navbar-icon"},[b("span",{class:"gray"},"|")],-1),B=[b("span",{class:"text"},"修改密码",-1)],D=[b("span",{class:"icon iconfont icon-tuichu"},null,-1),b("span",{class:"text ml4"},"退出",-1)];const E=i(w,[["render",function(s,e,i,o,r,n){const p=t,u=a,l=m("UpdatePassword");return h(),d("div",k,[b("div",q,[b("div",C,[b("span",L,y(s.menu_title),1),b("div",V,[v(u,{"model-value":s.activeValue,onTabClick:s.tabClick},{default:j((()=>[(h(!0),d(_,null,f(s.tabList,((s,e)=>(h(),g(p,{label:s.value,name:s.key,key:e},null,8,["label","name"])))),128))])),_:1},8,["model-value","onTabClick"])])]),b("div",T,[b("div",F,[b("span",I,"当前版本："+y(s.userInfo.version),1)]),b("div",P,[z,b("span",N,y(s.userInfo.userName)+"，欢迎您！",1)]),U,b("div",{class:"header-navbar-icon",onClick:e[0]||(e[0]=e=>s.passwordFunc())},B),b("div",{class:"header-navbar-icon login-out",onClick:e[1]||(e[1]=e=>s.exit())},D)])]),s.is_password?(h(),g(l,{key:0,onClose:s.closeFunc},null,8,["onClose"])):x("",!0)])}]]);export{E as default};
