!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,u,i=[],c=!0,l=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw a}}return i}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=a(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,u=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw u}}}}function a(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./@vue-legacy-2d91c92a.js"],(function(a,o){"use strict";var u,i,c,l,f,s,v,p,h,d,m,g;return{setters:[function(e){u=e.B,i=e.u,c=e.ao,l=e.n,f=e.y,s=e.E,v=e.J,p=e.i,h=e.ac,d=e.D,m=e.r,g=e.w}],execute:function(){a({a:function(e){(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#");return function(e){e=function(e){if(!e)if(o){var t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";"/"!==e[0]&&"#"!==e[0]&&(e="/"+e);return R(e)}(e);var t=function(e){var t=window,r=t.history,n=t.location,a={value:T(e,n)},o={value:r.state};o.value||u(a.value,{back:null,current:a.value,forward:null,position:r.length-1,replaced:!0,scroll:null},!0);function u(t,a,u){var i=e.indexOf("#"),c=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+t:_()+e+t;try{r[u?"replaceState":"pushState"](a,"",c),o.value=a}catch(l){n[u?"replace":"assign"](c)}}function i(e,t){u(e,y({},r.state,D(o.value.back,e,o.value.forward,!0),t,{position:o.value.position}),!0),a.value=e}function c(e,t){var n=y({},o.value,r.state,{forward:e,scroll:L()});u(n.current,n,!0),u(e,y({},D(a.value,e,null),{position:n.position+1},t),!1),a.value=e}return{location:a,state:o,push:c,replace:i}}(e),r=function(e,t,r,a){var o=[],u=[],i=null,c=function(n){var u=n.state,c=T(e,location),l=r.value,f=t.value,s=0;if(u){if(r.value=c,t.value=u,i&&i===l)return void(i=null);s=f?u.position-f.position:0}else a(c);o.forEach((function(e){e(r.value,l,{delta:s,type:w.pop,direction:s?s>0?E.forward:E.back:E.unknown})}))};function l(){i=r.value}function f(e){o.push(e);var t=function(){var t=o.indexOf(e);t>-1&&o.splice(t,1)};return u.push(t),t}function s(){var e=window.history;e.state&&e.replaceState(y({},e.state,{scroll:L()}),"")}function v(){var e,t=n(u);try{for(t.s();!(e=t.n()).done;){(0,e.value)()}}catch(r){t.e(r)}finally{t.f()}u=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:l,listen:f,destroy:v}}(e,t.state,t.location,t.replace);function a(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1]||r.pauseListeners(),history.go(e)}var u=y({location:"",base:e,go:a,createHref:I.bind(null,e)},t,r);return Object.defineProperty(u,"location",{enumerable:!0,get:function(){return t.location.value}}),Object.defineProperty(u,"state",{enumerable:!0,get:function(){return t.state.value}}),u}(e)},c:function(t){var a=function(e,t){var r=[],a=new Map;function o(e){return a.get(e)}function u(e,r,a){var o=!a,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:re(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);c.aliasOf=a&&a.record;var f,s,v=oe(t,e),p=[c];if("alias"in e){var h,d=n("string"==typeof e.alias?[e.alias]:e.alias);try{for(d.s();!(h=d.n()).done;){var m=h.value;p.push(y({},c,{components:a?a.record.components:c.components,path:m,aliasOf:a?a.record:c}))}}catch(P){d.e(P)}finally{d.f()}}for(var g=0,b=p;g<b.length;g++){var w=b[g],E=w.path;if(r&&"/"!==E[0]){var S=r.record.path,k="/"===S[S.length-1]?"":"/";w.path=r.record.path+(E&&k+E)}if(f=ee(w,r,v),a?a.alias.push(f):((s=s||f)!==f&&s.alias.push(f),o&&e.name&&!ne(f)&&i(e.name)),c.children)for(var R=c.children,j=0;j<R.length;j++)u(R[j],f,a&&a.children[j]);a=a||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return s?function(){i(s)}:O}function i(e){if(U(e)){var t=a.get(e);t&&(a.delete(e),r.splice(r.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{var n=r.indexOf(e);n>-1&&(r.splice(n,1),e.record.name&&a.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function c(){return r}function l(e){for(var t=0;t<r.length&&X(e,r[t])>=0&&(e.record.path!==r[t].record.path||!ue(e,r[t]));)t++;r.splice(t,0,e),e.record.name&&!ne(e)&&a.set(e.record.name,e)}function f(e,t){var n,o,u,i={};if("name"in e&&e.name){if(!(n=a.get(e.name)))throw V(1,{location:e});u=n.record.name,i=y(te(t.params,n.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}))),e.params&&te(e.params,n.keys.map((function(e){return e.name})))),o=n.stringify(i)}else if("path"in e)o=e.path,(n=r.find((function(e){return e.re.test(o)})))&&(i=n.parse(o),u=n.record.name);else{if(!(n=t.name?a.get(t.name):r.find((function(e){return e.re.test(t.path)}))))throw V(1,{location:e,currentLocation:t});u=n.record.name,i=y({},t.params,e.params),o=n.stringify(i)}for(var c=[],l=n;l;)c.unshift(l.record),l=l.parent;return{name:u,path:o,params:i,matched:c,meta:ae(c)}}return t=oe({strict:!1,end:!0,sensitive:!1},t),e.forEach((function(e){return u(e)})),{addRoute:u,resolve:f,removeRoute:i,getRoutes:c,getRecordMatcher:o}}(t.routes,t),f=t.parseQuery||Re,s=t.stringifyQuery||je,v=t.history,p=Ie(),h=Ie(),d=Ie(),m=u($),g=$;o&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");var E,k=b.bind(null,(function(e){return""+e})),R=b.bind(null,Se),P=b.bind(null,ke);function A(e,t){if(t=y({},t||m.value),"string"==typeof e){var r=j(f,e,t.path),n=a.resolve({path:r.path},t),o=v.createHref(r.fullPath);return y(r,n,{params:P(n.params),hash:ke(r.hash),redirectedFrom:void 0,href:o})}var u;if("path"in e)u=y({},e,{path:j(f,e.path,t.path).path});else{var i=y({},e.params);for(var c in i)null==i[c]&&delete i[c];u=y({},e,{params:R(i)}),t.params=R(t.params)}var l=a.resolve(u,t),p=e.hash||"";l.params=k(P(l.params));var h,d=function(e,t){var r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}(s,y({},e,{hash:(h=p,Ee(h).replace(ge,"{").replace(be,"}").replace(de,"^")),path:l.path})),g=v.createHref(d);return y({fullPath:d,hash:p,query:s===je?Pe(e.query):e.query||{}},l,{redirectedFrom:void 0,href:g})}function q(e){return"string"==typeof e?j(f,e,m.value.path):y({},e)}function M(e,t){if(g!==e)return V(8,{from:t,to:e})}function I(e){return T(e)}function _(e){var t=e.matched[e.matched.length-1];if(t&&t.redirect){var r=t.redirect,n="function"==typeof r?r(e):r;return"string"==typeof n&&((n=n.includes("?")||n.includes("#")?n=q(n):{path:n}).params={}),y({query:e.query,hash:e.hash,params:"path"in n?{}:e.params},n)}}function T(e,t){var n=g=A(e),a=m.value,o=e.state,u=e.force,i=!0===e.replace,c=_(n);if(c)return T(y(q(c),{state:"object"===r(c)?y({},o,c.state):o,force:u,replace:i}),t||n);var l,f=n;return f.redirectedFrom=t,!u&&function(e,t,r){var n=t.matched.length-1,a=r.matched.length-1;return n>-1&&n===a&&x(t.matched[n],r.matched[a])&&C(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}(s,a,n)&&(l=V(16,{to:f,from:a}),ce(a,a,!0,!1)),(l?Promise.resolve(l):F(f,a)).catch((function(e){return z(e)?z(e,2)?e:ie(e):Z(e,f,a)})).then((function(e){if(e){if(z(e,2))return T(y({replace:i},q(e.to),{state:"object"===r(e.to)?y({},o,e.to.state):o,force:u}),t||f)}else e=H(f,a,!0,i,o);return K(f,a,e),e}))}function D(e,t){var r=M(e,t);return r?Promise.reject(r):Promise.resolve()}function W(e){var t=se.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function F(t,r){var a,o=function(e,t){for(var r=[],n=[],a=[],o=Math.max(t.matched.length,e.matched.length),u=function(){var o=t.matched[i];o&&(e.matched.find((function(e){return x(e,o)}))?n.push(o):r.push(o));var u=e.matched[i];u&&(t.matched.find((function(e){return x(e,u)}))||a.push(u))},i=0;i<o;i++)u();return[r,n,a]}(t,r),u=e(o,3),i=u[0],c=u[1],l=u[2];a=Be(i.reverse(),"beforeRouteLeave",t,r);var f,s=n(i);try{for(s.s();!(f=s.n()).done;){f.value.leaveGuards.forEach((function(e){a.push(Le(e,t,r))}))}}catch(d){s.e(d)}finally{s.f()}var v=D.bind(null,t,r);return a.push(v),pe(a).then((function(){a=[];var e,o=n(p.list());try{for(o.s();!(e=o.n()).done;){var u=e.value;a.push(Le(u,t,r))}}catch(d){o.e(d)}finally{o.f()}return a.push(v),pe(a)})).then((function(){a=Be(c,"beforeRouteUpdate",t,r);var e,o=n(c);try{for(o.s();!(e=o.n()).done;){e.value.updateGuards.forEach((function(e){a.push(Le(e,t,r))}))}}catch(d){o.e(d)}finally{o.f()}return a.push(v),pe(a)})).then((function(){a=[];var e,o=n(l);try{for(o.s();!(e=o.n()).done;){var u=e.value;if(u.beforeEnter)if(S(u.beforeEnter)){var i,c=n(u.beforeEnter);try{for(c.s();!(i=c.n()).done;){var f=i.value;a.push(Le(f,t,r))}}catch(d){c.e(d)}finally{c.f()}}else a.push(Le(u.beforeEnter,t,r))}}catch(d){o.e(d)}finally{o.f()}return a.push(v),pe(a)})).then((function(){return t.matched.forEach((function(e){return e.enterCallbacks={}})),(a=Be(l,"beforeRouteEnter",t,r)).push(v),pe(a)})).then((function(){a=[];var e,o=n(h.list());try{for(o.s();!(e=o.n()).done;){var u=e.value;a.push(Le(u,t,r))}}catch(d){o.e(d)}finally{o.f()}return a.push(v),pe(a)})).catch((function(e){return z(e,8)?e:Promise.reject(e)}))}function K(e,t,r){d.list().forEach((function(n){return W((function(){return n(e,t,r)}))}))}function H(e,t,r,n,a){var u=M(e,t);if(u)return u;var i=t===$,c=o?history.state:{};r&&(n||i?v.replace(e.fullPath,y({scroll:i&&c&&c.scroll},a)):v.push(e.fullPath,a)),m.value=e,ce(e,t,r,i),ie()}function N(){E||(E=v.listen((function(e,t,r){if(ve.listening){var n=A(e),a=_(n);if(a)T(y(a,{replace:!0}),n).catch(O);else{g=n;var u,i,c=m.value;o&&(u=B(c.fullPath,r.delta),i=L(),G.set(u,i)),F(n,c).catch((function(e){return z(e,12)?e:z(e,2)?(T(e.to,n).then((function(e){z(e,20)&&!r.delta&&r.type===w.pop&&v.go(-1,!1)})).catch(O),Promise.reject()):(r.delta&&v.go(-r.delta,!1),Z(e,n,c))})).then((function(e){(e=e||H(n,c,!1))&&(r.delta&&!z(e,8)?v.go(-r.delta,!1):r.type===w.pop&&z(e,20)&&v.go(-1,!1)),K(n,c,e)})).catch(O)}}})))}var Q,Y=Ie(),J=Ie();function Z(e,t,r){ie(e);var n=J.list();return n.length&&n.forEach((function(n){return n(e,t,r)})),Promise.reject(e)}function ie(t){return Q||(Q=!t,N(),Y.list().forEach((function(r){var n=e(r,2),a=n[0],o=n[1];return t?o(t):a()})),Y.reset()),t}function ce(e,r,n,a){var u=t.scrollBehavior;if(!o||!u)return Promise.resolve();var i,c,f=!n&&(i=B(e.fullPath,0),c=G.get(i),G.delete(i),c)||(a||!n)&&history.state&&history.state.scroll||null;return l().then((function(){return u(e,r,f)})).then((function(e){return e&&function(e){var t;if("el"in e){var r=e.el,n="string"==typeof r&&r.startsWith("#"),a="string"==typeof r?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!a)return;t=function(e,t){var r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e)})).catch((function(t){return Z(t,e,r)}))}var le,fe=function(e){return v.go(e)},se=new Set,ve={currentRoute:m,listening:!0,addRoute:function(e,t){var r,n;return U(e)?(r=a.getRecordMatcher(e),n=t):n=e,a.addRoute(n,r)},removeRoute:function(e){var t=a.getRecordMatcher(e);t&&a.removeRoute(t)},hasRoute:function(e){return!!a.getRecordMatcher(e)},getRoutes:function(){return a.getRoutes().map((function(e){return e.record}))},resolve:A,options:t,push:I,replace:function(e){return I(y(q(e),{replace:!0}))},go:fe,back:function(){return fe(-1)},forward:function(){return fe(1)},beforeEach:p.add,beforeResolve:h.add,afterEach:d.add,onError:J.add,isReady:function(){return Q&&m.value!==$?Promise.resolve():new Promise((function(e,t){Y.add([e,t])}))},install:function(e){e.component("RouterLink",_e),e.component("RouterView",We),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:function(){return i(m)}}),o&&!le&&m.value===$&&(le=!0,I(v.location).catch((function(e){})));var t={},r=function(e){Object.defineProperty(t,e,{get:function(){return m.value[e]},enumerable:!0})};for(var n in $)r(n);e.provide(Ae,this),e.provide(qe,c(t)),e.provide(Me,m);var a=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=$,E&&E(),E=null,m.value=$,le=!1,Q=!1),a()}}};function pe(e){return e.reduce((function(e,t){return e.then((function(){return W(t)}))}),Promise.resolve())}return ve},u:function(){return f(qe)}});
/*!
        * vue-router v4.2.4
        * (c) 2023 Eduardo San Martin Morote
        * @license MIT
        */
var o="undefined"!=typeof window;var y=Object.assign;function b(e,t){var r={};for(var n in t){var a=t[n];r[n]=S(a)?a.map(e):e(a)}return r}var w,E,O=function(){},S=Array.isArray,k=/\/$/,R=function(e){return e.replace(k,"")};function j(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",a={},o="",u="",i=t.indexOf("#"),c=t.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(r=t.slice(0,c),a=e(o=t.slice(c+1,i>-1?i:t.length))),i>-1&&(r=r||t.slice(0,i),u=t.slice(i,t.length)),{fullPath:(r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;var r=t.split("/"),n=e.split("/"),a=n[n.length-1];".."!==a&&"."!==a||n.push("");var o,u,i=r.length-1;for(o=0;o<n.length;o++)if("."!==(u=n[o])){if(".."!==u)break;i>1&&i--}return r.slice(0,i).join("/")+"/"+n.slice(o-(o===n.length?1:0)).join("/")}(null!=r?r:t,n))+(o&&"?")+o+u,path:r,query:a,hash:u}}function P(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function x(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function C(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var r in e)if(!A(e[r],t[r]))return!1;return!0}function A(e,t){return S(e)?q(e,t):S(t)?q(t,e):e===t}function q(e,t){return S(t)?e.length===t.length&&e.every((function(e,r){return e===t[r]})):1===e.length&&e[0]===t}!function(e){e.pop="pop",e.push="push"}(w||(w={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(E||(E={}));var M=/^[^#]+#/;function I(e,t){return e.replace(M,"#")+t}var L=function(){return{left:window.pageXOffset,top:window.pageYOffset}};function B(e,t){return(history.state?history.state.position-t:-1)+e}var G=new Map;var _=function(){return location.protocol+"//"+location.host};function T(e,t){var r=t.pathname,n=t.search,a=t.hash,o=e.indexOf("#");if(o>-1){var u=a.includes(e.slice(o))?e.slice(o).length:1,i=a.slice(u);return"/"!==i[0]&&(i="/"+i),P(i,"")}return P(r,e)+n+a}function D(e,t,r){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return{back:e,current:t,forward:r,replaced:arguments.length>3&&void 0!==arguments[3]&&arguments[3],position:window.history.length,scroll:n?L():null}}function U(e){return"string"==typeof e||"symbol"===r(e)}var W,$={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},F=Symbol("");function V(e,r){return y(new Error,t({type:e},F,!0),r)}function z(e,t){return e instanceof Error&&F in e&&(null==t||!!(e.type&t))}!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(W||(W={}));var K="[^/]+?",H={sensitive:!1,strict:!1,start:!0,end:!0},N=/[.+*?^${}()[\]/\\]/g;function Q(e,t){for(var r=0;r<e.length&&r<t.length;){var n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){for(var r=0,n=e.score,a=t.score;r<n.length&&r<a.length;){var o=Q(n[r],a[r]);if(o)return o;r++}if(1===Math.abs(a.length-n.length)){if(Y(n))return 1;if(Y(a))return-1}return a.length-n.length}function Y(e){var t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var J={type:0,value:""},Z=/[a-zA-Z0-9_]/;function ee(e,t,r){var a=function(e,t){var r,a=y({},H,t),o=[],u=a.start?"^":"",i=[],c=n(e);try{for(c.s();!(r=c.n()).done;){var l=r.value,f=l.length?[]:[90];a.strict&&!l.length&&(u+="/");for(var s=0;s<l.length;s++){var v=l[s],p=40+(a.sensitive?.25:0);if(0===v.type)s||(u+="/"),u+=v.value.replace(N,"\\$&"),p+=40;else if(1===v.type){var h=v.value,d=v.repeatable,m=v.optional,g=v.regexp;i.push({name:h,repeatable:d,optional:m});var b=g||K;if(b!==K){p+=10;try{new RegExp("(".concat(b,")"))}catch(k){throw new Error('Invalid custom RegExp for param "'.concat(h,'" (').concat(b,"): ")+k.message)}}var w=d?"((?:".concat(b,")(?:/(?:").concat(b,"))*)"):"(".concat(b,")");s||(w=m&&l.length<2?"(?:/".concat(w,")"):"/"+w),m&&(w+="?"),u+=w,p+=20,m&&(p+=-8),d&&(p+=-20),".*"===b&&(p+=-50)}f.push(p)}o.push(f)}}catch(k){c.e(k)}finally{c.f()}if(a.strict&&a.end){var E=o.length-1;o[E][o[E].length-1]+=.7000000000000001}a.strict||(u+="/?"),a.end?u+="$":a.strict&&(u+="(?:/|$)");var O=new RegExp(u,a.sensitive?"":"i");return{re:O,score:o,keys:i,parse:function(e){var t=e.match(O),r={};if(!t)return null;for(var n=1;n<t.length;n++){var a=t[n]||"",o=i[n-1];r[o.name]=a&&o.repeatable?a.split("/"):a}return r},stringify:function(t){var r,a="",o=!1,u=n(e);try{for(u.s();!(r=u.n()).done;){var i=r.value;o&&a.endsWith("/")||(a+="/"),o=!1;var c,l=n(i);try{for(l.s();!(c=l.n()).done;){var f=c.value;if(0===f.type)a+=f.value;else if(1===f.type){var s=f.value,v=f.repeatable,p=f.optional,h=s in t?t[s]:"";if(S(h)&&!v)throw new Error('Provided param "'.concat(s,'" is an array but it is not repeatable (* or + modifiers)'));var d=S(h)?h.join("/"):h;if(!d){if(!p)throw new Error('Missing required param "'.concat(s,'"'));i.length<2&&(a.endsWith("/")?a=a.slice(0,-1):o=!0)}a+=d}}}catch(k){l.e(k)}finally{l.f()}}}catch(k){u.e(k)}finally{u.f()}return a||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[J]];if(!e.startsWith("/"))throw new Error('Invalid path "'.concat(e,'"'));function t(e){throw new Error("ERR (".concat(n,')/"').concat(l,'": ').concat(e))}var r,n=0,a=n,o=[];function u(){r&&o.push(r),r=[]}var i,c=0,l="",f="";function s(){l&&(0===n?r.push({type:0,value:l}):1===n||2===n||3===n?(r.length>1&&("*"===i||"+"===i)&&t("A repeatable param (".concat(l,") must be alone in its segment. eg: '/:ids+.")),r.push({type:1,value:l,regexp:f,repeatable:"*"===i||"+"===i,optional:"*"===i||"?"===i})):t("Invalid state to consume buffer"),l="")}function v(){l+=i}for(;c<e.length;)if("\\"!==(i=e[c++])||2===n)switch(n){case 0:"/"===i?(l&&s(),u()):":"===i?(s(),n=1):v();break;case 4:v(),n=a;break;case 1:"("===i?n=2:Z.test(i)?v():(s(),n=0,"*"!==i&&"?"!==i&&"+"!==i&&c--);break;case 2:")"===i?"\\"==f[f.length-1]?f=f.slice(0,-1)+i:n=3:f+=i;break;case 3:s(),n=0,"*"!==i&&"?"!==i&&"+"!==i&&c--,f="";break;default:t("Unknown state")}else a=n,n=4;return 2===n&&t('Unfinished custom RegExp for param "'.concat(l,'"')),s(),u(),o}(e.path),r),o=y(a,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function te(e,t){var r,a={},o=n(t);try{for(o.s();!(r=o.n()).done;){var u=r.value;u in e&&(a[u]=e[u])}}catch(i){o.e(i)}finally{o.f()}return a}function re(e){var t={},n=e.props||!1;if("component"in e)t.default=n;else for(var a in e.components)t[a]="object"===r(n)?n[a]:n;return t}function ne(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ae(e){return e.reduce((function(e,t){return y(e,t.meta)}),{})}function oe(e,t){var r={};for(var n in e)r[n]=n in t?t[n]:e[n];return r}function ue(e,t){return t.children.some((function(t){return t===e||ue(e,t)}))}var ie=/#/g,ce=/&/g,le=/\//g,fe=/=/g,se=/\?/g,ve=/\+/g,pe=/%5B/g,he=/%5D/g,de=/%5E/g,me=/%60/g,ge=/%7B/g,ye=/%7C/g,be=/%7D/g,we=/%20/g;function Ee(e){return encodeURI(""+e).replace(ye,"|").replace(pe,"[").replace(he,"]")}function Oe(e){return Ee(e).replace(ve,"%2B").replace(we,"+").replace(ie,"%23").replace(ce,"%26").replace(me,"`").replace(ge,"{").replace(be,"}").replace(de,"^")}function Se(e){return null==e?"":function(e){return Ee(e).replace(ie,"%23").replace(se,"%3F")}(e).replace(le,"%2F")}function ke(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Re(e){var t={};if(""===e||"?"===e)return t;for(var r=("?"===e[0]?e.slice(1):e).split("&"),n=0;n<r.length;++n){var a=r[n].replace(ve," "),o=a.indexOf("="),u=ke(o<0?a:a.slice(0,o)),i=o<0?null:ke(a.slice(o+1));if(u in t){var c=t[u];S(c)||(c=t[u]=[c]),c.push(i)}else t[u]=i}return t}function je(e){var t="",r=function(r){var n=e[r];if(r=Oe(r).replace(fe,"%3D"),null==n)return void 0!==n&&(t+=(t.length?"&":"")+r),1;(S(n)?n.map((function(e){return e&&Oe(e)})):[n&&Oe(n)]).forEach((function(e){void 0!==e&&(t+=(t.length?"&":"")+r,null!=e&&(t+="="+e))}))};for(var n in e)r(n);return t}function Pe(e){var t={};for(var r in e){var n=e[r];void 0!==n&&(t[r]=S(n)?n.map((function(e){return null==e?null:""+e})):null==n?n:""+n)}return t}var xe=Symbol(""),Ce=Symbol(""),Ae=Symbol(""),qe=Symbol(""),Me=Symbol("");function Ie(){var e=[];return{add:function(t){return e.push(t),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}},list:function(){return e.slice()},reset:function(){e=[]}}}function Le(e,t,n,a,o){var u=a&&(a.enterCallbacks[o]=a.enterCallbacks[o]||[]);return function(){return new Promise((function(i,c){var l=function(e){var l;!1===e?c(V(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(l=e)||l&&"object"===r(l)?c(V(2,{from:t,to:e})):(u&&a.enterCallbacks[o]===u&&"function"==typeof e&&u.push(e),i())},f=e.call(a&&a.instances[o],t,n,l),s=Promise.resolve(f);e.length<3&&(s=s.then(l)),s.catch((function(e){return c(e)}))}))}}function Be(e,t,a,o){var u,i=[],c=n(e);try{var l=function(){var e=u.value,n=function(n){var u,c=e.components[n];if("beforeRouteEnter"!==t&&!e.instances[n])return 1;if("object"===r(u=c)||"displayName"in u||"props"in u||"__vccOpts"in u){var l=(c.__vccOpts||c)[t];l&&i.push(Le(l,a,o,e,n))}else{var f=c();i.push((function(){return f.then((function(r){if(!r)return Promise.reject(new Error("Couldn't resolve component \"".concat(n,'" at "').concat(e.path,'"')));var u,i=(u=r).__esModule||"Module"===u[Symbol.toStringTag]?r.default:r;e.components[n]=i;var c=(i.__vccOpts||i)[t];return c&&Le(c,a,o,e,n)()}))}))}};for(var c in e.components)n(c)};for(c.s();!(u=c.n()).done;)l()}catch(f){c.e(f)}finally{c.f()}return i}function Ge(e){var t=f(Ae),r=f(qe),n=p((function(){return t.resolve(i(e.to))})),a=p((function(){var e=n.value.matched,t=e.length,a=e[t-1],o=r.matched;if(!a||!o.length)return-1;var u=o.findIndex(x.bind(null,a));if(u>-1)return u;var i=Te(e[t-2]);return t>1&&Te(a)===i&&o[o.length-1].path!==i?o.findIndex(x.bind(null,e[t-2])):u})),o=p((function(){return a.value>-1&&function(e,t){var r,n=function(){var r=t[a],n=e[a];if("string"==typeof r){if(r!==n)return{v:!1}}else if(!S(n)||n.length!==r.length||r.some((function(e,t){return e!==n[t]})))return{v:!1}};for(var a in t)if(r=n())return r.v;return!0}(r.params,n.value.params)})),u=p((function(){return a.value>-1&&a.value===r.matched.length-1&&C(r.params,n.value.params)}));return{route:n,href:p((function(){return n.value.href})),isActive:o,isExactActive:u,navigate:function(){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})?t[i(e.replace)?"replace":"push"](i(e.to)).catch(O):Promise.resolve()}}}var _e=s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup:function(e,r){var n=r.slots,a=v(Ge(e)),o=f(Ae).options,u=p((function(){var r;return t(r={},De(e.activeClass,o.linkActiveClass,"router-link-active"),a.isActive),t(r,De(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active"),a.isExactActive),r}));return function(){var t=n.default&&n.default(a);return e.custom?t:h("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:u.value},t)}}});function Te(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}var De=function(e,t,r){return null!=e?e:null!=t?t:r};function Ue(e,t){if(!e)return null;var r=e(t);return 1===r.length?r[0]:r}var We=s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup:function(t,r){var n=r.attrs,a=r.slots,o=f(Me),u=p((function(){return t.route||o.value})),c=f(Ce,0),l=p((function(){for(var e,t=i(c),r=u.value.matched;(e=r[t])&&!e.components;)t++;return t})),s=p((function(){return u.value.matched[l.value]}));d(Ce,p((function(){return l.value+1}))),d(xe,s),d(Me,u);var v=m();return g((function(){return[v.value,s.value,t.name]}),(function(t,r){var n=e(t,3),a=n[0],o=n[1],u=n[2],i=e(r,3),c=i[0],l=i[1];i[2];o&&(o.instances[u]=a,l&&l!==o&&a&&a===c&&(o.leaveGuards.size||(o.leaveGuards=l.leaveGuards),o.updateGuards.size||(o.updateGuards=l.updateGuards))),!a||!o||l&&x(o,l)&&c||(o.enterCallbacks[u]||[]).forEach((function(e){return e(a)}))}),{flush:"post"}),function(){var e=u.value,r=t.name,o=s.value,i=o&&o.components[r];if(!i)return Ue(a.default,{Component:i,route:e});var c=o.props[r],l=c?!0===c?e.params:"function"==typeof c?c(e):c:null,f=h(i,y({},l,n,{onVnodeUnmounted:function(e){e.component.isUnmounted&&(o.instances[r]=null)},ref:v}));return Ue(a.default,{Component:f,route:e})||f}}})}}}))}();
