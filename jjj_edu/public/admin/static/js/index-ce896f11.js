import{v as t}from"./element-plus-fe2e4fed.js";import{S as s}from"./DateTime-afb39652.js";import o from"./Total-e5f3f960.js";import a from"./LineChart-8ffa005f.js";import i from"./Ranking-1fe97347.js";import{_ as r}from"./index-68daabb5.js";import{ae as e,$ as m,o as p,c as n,a as d,T as l,Y as j,bh as c,bf as h}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./echarts-2361e669.js";import"./tslib-a4e99503.js";import"./zrender-1189e17c.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const b={components:{Total:o,LineChart:a,Ranking:i},data:()=>({loading:!0,dataModel:{}}),provide:function(){return{dataModel:this.dataModel}},created(){this.getData()},methods:{getData(){let t=this;s.getUserTotal({},!0).then((s=>{Object.assign(t.dataModel,s.data),t.loading=!1})).catch((t=>{}))}}},f={class:"statistics-member",style:{"min-height":"400px"}},u=(t=>(c("data-v-4f9bac37"),t=t(),h(),t))((()=>d("div",{class:"common-form"},"会员统计",-1))),g={class:"d-s-stretch bd-box"},v={class:"d-s-c d-c left-box"};const y=r(b,[["render",function(s,o,a,i,r,c){const h=e("Total"),b=e("LineChart"),y=e("Ranking"),k=t;return m((p(),n("div",f,[u,d("div",g,[d("div",v,[r.loading?j("",!0):(p(),l(h,{key:0})),r.loading?j("",!0):(p(),l(b,{key:1}))])]),r.loading?j("",!0):(p(),l(y,{key:0}))])),[[k,r.loading]])}],["__scopeId","data-v-4f9bac37"]]);export{y as default};
