import{a as e}from"./axios-63583d02.js";import{q as t}from"./qs-edfbe083.js";import{u as s,r,o}from"./index-14a47fc3.js";import{a}from"./element-plus-1d2aab9a.js";let{baseURL:n,tokenName:i,contentType:p,withCredentials:d,responseType:m}=o;e.defaults.headers["Content-Type"]=p,e.defaults.baseURL=n,e.defaults.withCredentials=d,e.defaults.responseType=m,e.interceptors.request.use((e=>{const r=s(),{token:o}=r;return e.headers[i]=o,"post"===e.method&&(e.data=t.stringify(e.data)),e}),(e=>Promise.reject(e))),e.interceptors.response.use((e=>{if(1===e.data.code)return e.data;if(0===e.data.code)return a({showClose:!0,message:e.data.msg,type:"error"}),Promise.reject(e.data);{const e=s(),{afterLogout:t}=e;t(),r.push({path:"/login"})}}),(e=>(a({showClose:!0,message:"接口请求异常，请稍后再试~",type:"error"}),Promise.reject(e))));const u={_post:function(t,s,r){return new Promise(((o,a)=>{e.post(t,s).then((e=>{o(e)})).catch((e=>{r&&a(e)}))}))},_get:function(t,s,r){return new Promise(((o,a)=>{e.get(t,{params:s}).then((e=>{o(e)})).catch((e=>{r&&a(e)}))}))}};export{u as r};
