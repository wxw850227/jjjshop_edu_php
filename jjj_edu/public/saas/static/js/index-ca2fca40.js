function e(){import.meta.url,import("_").catch((()=>1))}import{E as t,J as n,K as r,ad as o,o as s,S as i,R as a,O as l,am as m}from"./@vue-413ce838.js";import{c,a as u}from"./vue-router-569da8b3.js";import{d as p,c as d}from"./pinia-1c212f4d.js";import{E as f,z as _}from"./element-plus-b1fe4ef5.js";import{E as h}from"./@element-plus-1ce7f40b.js";import"./lodash-es-12c6aa75.js";import"./async-validator-cf877c1f.js";import"./@vueuse-4fad2ccb.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const g={},E=function(e,t,n){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if(e=function(e,t){return new URL(e,t).href}(e,n),e in g)return;g[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!n)for(let n=r.length-1;n>=0;n--){const o=r[n];if(o.href===e&&(!t||"stylesheet"===o.rel))return}else if(document.querySelector('link[href="'.concat(e,'"]').concat(o)))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((t,n)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>n(new Error("Unable to preload CSS for ".concat(e)))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))};function I(e){return JSON.parse(sessionStorage.getItem(e))}function j(e,t){return sessionStorage.setItem(t,e)}let x={...{baseURL:"".concat("","/index.php"),tokenName:"token",strongToken:"jjjSingleAdminToken",isDev:!1,contentType:"application/x-www-form-urlencoded;charset=UTF-8",requestTimeout:5e4,statusName:"code",messageName:"msg",withCredentials:!0,responseType:"json"}},{strongToken:y}=x;const v=p("main",{state:()=>({token:I(y),userInfo:I("userInfo"),list:{}}),getters:{},actions:{bus_on(e,t){let n=this;n.list[e]=n.list[e]||[],n.list[e].push(t)},bus_emit(e,t){let n=this;n.list[e]&&n.list[e].forEach((e=>{e(t)}))},bus_off(e){let t=this;t.list[e]&&delete t.list[e]},async afterLogin(e){this.userInfo=this.userInfo||{};const{data:{token:t,user_name:n}}=e;this.userInfo.userName=n,this.token=t,j(JSON.stringify(t),y),j(JSON.stringify(this.userInfo),"userInfo")},afterLogout(){sessionStorage.clear(),this.token=null,this.menus=null}}});const b=[{path:"/login",name:"login",meta:{title:"登录"},component:()=>E((()=>import("./index-0444fde0.js")),["./index-0444fde0.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./user-ba68361f.js","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js","..\\css\\index-99132095.css"],import.meta.url)},{path:"/",name:"Main",meta:{title:"母版"},component:()=>E((()=>import("./Main-dda79e16.js")),["./Main-dda79e16.js","./vue-router-569da8b3.js","./@vue-413ce838.js","./element-plus-b1fe4ef5.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./pinia-1c212f4d.js","..\\css\\Main-90ee51de.css"],import.meta.url),children:[{path:"/Home",name:"Home",meta:{title:"首页",topTree:"/Home"},component:()=>E((()=>import("./Home-1d8a0155.js")),["./Home-1d8a0155.js","./user-ba68361f.js","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./vue-router-569da8b3.js","./pinia-1c212f4d.js","..\\css\\Home-ca442aee.css"],import.meta.url)},{path:"/plugs/plugs/Index",name:"plugs_index",meta:{title:"插件管理"},component:()=>E((()=>import("./Index-86d611c9.js")),["./Index-86d611c9.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./base-1c9aa973.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js","..\\css\\Index-c1094663.css"],import.meta.url)},{path:"/access/Index",name:"access_Index",meta:{title:"后台权限"},component:()=>E((()=>import("./Index-ad7c73d4.js")),["./Index-ad7c73d4.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./base-1c9aa973.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js"],import.meta.url)},{path:"/shop/Index",name:"shop_Index",meta:{title:"商城"},component:()=>E((()=>import("./Index-ea211d23.js")),["./Index-ea211d23.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./base-1c9aa973.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js","..\\css\\Index-3ce8817a.css"],import.meta.url)},{path:"/password/Index",name:"password_Index",meta:{title:"修改密码"},component:()=>E((()=>import("./Index-43e59e84.js")),["./Index-43e59e84.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./user-ba68361f.js","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js"],import.meta.url)},{path:"/message/Index",name:"message_Index",meta:{title:"消息设置"},component:()=>E((()=>import("./Index-1e226879.js")),["./Index-1e226879.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./base-1c9aa973.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js"],import.meta.url)},{path:"/setting/Index",name:"service_Index",meta:{title:"系统设置"},component:()=>E((()=>import("./index-3cb5fb1f.js")),["./index-3cb5fb1f.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js","..\\css\\index-5c45fe1d.css"],import.meta.url)},{path:"/region/Index",name:"region_index",meta:{title:"地区列表"},component:()=>E((()=>import("./Index-973c26e7.js")),["./Index-973c26e7.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./region-b3a3600a.js","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js"],import.meta.url)},{path:"/region/Add",name:"region_add",meta:{title:"地区新增"},component:()=>E((()=>import("./add-038f17ef.js")),["./add-038f17ef.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./region-b3a3600a.js","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js","..\\css\\add-75f605a6.css"],import.meta.url)},{path:"/region/Edit",name:"region_edit",meta:{title:"地区修改"},component:()=>E((()=>import("./edit-7822f3cd.js")),["./edit-7822f3cd.js","./element-plus-b1fe4ef5.js","./@vue-413ce838.js","./lodash-es-12c6aa75.js","./async-validator-cf877c1f.js","./@vueuse-4fad2ccb.js","./dayjs-3a594381.js","./call-bind-8544b80b.js","./get-intrinsic-bac01933.js","./has-symbols-456daba2.js","./has-proto-4a87f140.js","./function-bind-72d06d3b.js","./has-885c3436.js","./@element-plus-1ce7f40b.js","./@popperjs-b78c3215.js","./escape-html-1590d737.js","./normalize-wheel-es-3222b0a2.js","./@ctrl-91de2ec7.js","..\\css\\element-plus-c11bc887.css","./region-b3a3600a.js","./request-16c40424.js","./axios-15f6fe35.js","./qs-c6aa5595.js","./side-channel-b02c3a2b.js","./object-inspect-bd98d4ca.js","./vue-router-569da8b3.js","./pinia-1c212f4d.js","..\\css\\add-75f605a6.css"],import.meta.url)}]}],k=c({history:u(),routes:b});const T=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const L=T(t({components:{[f.name]:f},setup(){let e=_;const t=n({});return{...r(t),locale:e}}}),[["render",function(e,t,n,r,m,c){const u=o("router-view"),p=f;return s(),i(p,{locale:e.locale},{default:a((()=>[l(u)])),_:1},8,["locale"])}]]),O={testFilter:function(e){return"vip"+e},isNull:function(e){return null==e||null==e||""===e||"null"===e||"undefined"==e?"-":e},returnPercentage:function(e){if(null!==e&&""!==e&&void 0!==e){return(100*e).toFixed(2)+"%"}return"-"},returnToFixed:function(e,t){if(null!=e){return e.toFixed(t)}return null!=e&&""!==e?e:"-"},tenThousand:function(e){if(null!=e&&""!=e){var t=(e/1e4).toFixed(2);return(Math.round(100*t)/100).toString()}return"-"},numTabWeek:function(e){let t="";switch(e){case 1:t="一";break;case 2:t="二";break;case 3:t="三";break;case 4:t="四";break;case 5:t="五";break;case 6:t="六";break;case 7:t="日"}return t},convertSex:function(e){let t="";switch(e){case 0:t="女";break;case 1:t="男";break;default:t="其他"}return t},replaceSpace:function(e){return null!=e?e.replace(/\s*/g,""):""},hasSpace:function(e){if(null!=e){return/\s/g.test(e)}return!1},passwordForm:e=>!!new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/).test(e),isAllSpace:e=>!!e.match(/^[ ]*$/)},w=d(),P=m(L);for(const[S,R]of Object.entries(h))P.component(S,R);var A;P.config.globalProperties.$filter=O,P.use(w),P.use(k),P.mount("#app"),A=P,async function(e){let t=0;e.beforeEach((async(e,n,r)=>{const{token:o}=v(),s=["/login"];if(o){if("/login"==e.path)return void r({path:"/Home"});if(0==t)return t++,void r({...e,replace:!0});r()}else{if(s.includes(e.path))return void r();r("/login")}}))}(k),A.use(k);export{T as _,e as __vite_legacy_guard,x as o,k as r,v as u};
