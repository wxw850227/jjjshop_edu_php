import{g as a,v as t,h as s}from"./element-plus-fe2e4fed.js";import{I as o}from"./index-5b0379bc.js";import d from"./Transaction-34a64bef.js";import e from"./Ranking-36422e54.js";import{_ as i}from"./index-49a7d7a3.js";import{ae as r,$ as n,c as l,a as c,P as p,S as m,T as u,Y as _,o as f,X as g,bh as h,bf as y}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./echarts-2361e669.js";import"./tslib-a4e99503.js";import"./zrender-1189e17c.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const j=""+new URL("../png/home01-954e0aa9.png",import.meta.url).href,v=""+new URL("../png/home02-8c6d40fb.png",import.meta.url).href,k=""+new URL("../png/home03-132d4f5a.png",import.meta.url).href,R=""+new URL("../png/home04-b999e17d.png",import.meta.url).href,b={components:{Transaction:d,Ranking:e},data:()=>({loading:!0,topData:[],today_data:{order_total_price:{},order_total:{},new_course_total:{},new_user_total:{}},rankData:{courseRank:[],paperRank:[]},dataRank:{courseRank:[],paperRank:[]},statistics:{data:[],days:[]}}),provide:function(){return{dataRank:this.rankData,datastatistic:this.statistics}},mounted(){this.dataRank.courseRank=this.rankData.courseRank,this.dataRank.paperRank=this.rankData.paperRank,this.getData()},methods:{getData(){let a=this;a.loading=!0,o.getCount(!0).then((t=>{a.loading=!1,a.topData=t.data.data.top_data,Object.assign(a.statistics,t.data.data.statistics),a.today_data=t.data.data.today_data,Object.assign(a.rankData,t.data.data.rank_data)})).catch((a=>{}))}}},w=a=>(h("data-v-35f18fd0"),a=a(),y(),a),D={class:"home"},x={class:"operation-wrap",style:{"background-color":"#FFFFFF"}},F={class:"grid-content purple"},z={class:"info"},L=w((()=>c("p",{class:"cards"},"营业额",-1))),T=w((()=>c("div",{style:{width:"90px",height:"90px","margin-left":"35px"}},[c("img",{src:j})],-1))),U={class:"grid-content yellow"},q={class:"info"},I=w((()=>c("p",{class:"cards"},"订单数量",-1))),O=w((()=>c("div",{class:"img"},[c("img",{src:v})],-1))),C={class:"grid-content orderred"},P={class:"info"},S=w((()=>c("p",{class:"cards"},"用户总量",-1))),X=w((()=>c("div",{class:"img"},[c("img",{src:k})],-1))),Y={class:"grid-content blue"},$={class:"info"},A=w((()=>c("p",{class:"cards"},"课程总量",-1))),B=w((()=>c("div",{class:"img"},[c("img",{src:R})],-1))),E={class:"home-index"},G={class:"flex-1"},H={class:"main-index"},J=w((()=>c("div",{class:"common-form mt16",style:{"font-size":"18px"}}," 今日概况 ",-1))),K={class:"grid-content"},M={class:"info t-c"},N=w((()=>c("p",{class:"des"},"销售额(元)",-1))),Q={class:"yesterday"},V={class:"grid-content"},W={class:"info"},Z=w((()=>c("p",{class:"des"},"支付订单数",-1))),aa={class:"yesterday"},ta={class:"grid-content"},sa={class:"info"},oa=w((()=>c("p",{class:"des"},"新增用户数",-1))),da={class:"yesterday"},ea={class:"grid-content"},ia={class:"info"},ra=w((()=>c("p",{class:"des"},"新增课程",-1))),na={class:"yesterday"},la={class:"matters-wrap",style:{width:"100%"}},ca={class:"matters-wrap"};const pa=i(b,[["render",function(o,d,e,i,h,y){const j=s,v=a,k=r("Transaction"),R=r("Ranking"),b=t;return n((f(),l("div",D,[c("div",x,[p(v,{gutter:20},{default:m((()=>[p(j,{span:6,class:"d-c-c"},{default:m((()=>[c("div",F,[c("div",z,[L,c("h3",null,g(h.topData.order_money),1)]),T])])),_:1}),p(j,{span:6,class:"d-c-c"},{default:m((()=>[c("div",U,[c("div",q,[I,c("h3",null,g(h.topData.order_count),1)]),O])])),_:1}),p(j,{span:6,class:"d-c-c"},{default:m((()=>[c("div",C,[c("div",P,[S,c("h3",null,g(h.topData.user_count),1)]),X])])),_:1}),p(j,{span:6,class:"d-c-c"},{default:m((()=>[c("div",Y,[c("div",$,[A,c("h3",null,g(h.topData.course_count),1)]),B])])),_:1})])),_:1})]),c("div",E,[c("div",G,[c("div",H,[J,p(v,{class:"border-b-l"},{default:m((()=>[p(j,{span:6},{default:m((()=>[c("div",K,[c("div",M,[N,c("h4",null,g(h.today_data.order_total_price.tday),1),c("p",Q,"昨日："+g(h.today_data.order_total_price.ytd),1)])])])),_:1}),p(j,{span:6},{default:m((()=>[c("div",V,[c("div",W,[Z,c("h4",null,g(h.today_data.order_total.tday),1),c("p",aa,"昨日："+g(h.today_data.order_total.ytd),1)])])])),_:1}),p(j,{span:6},{default:m((()=>[c("div",ta,[c("div",sa,[oa,c("h4",null,g(h.today_data.new_user_total.tday),1),c("p",da,"昨日："+g(h.today_data.new_user_total.ytd),1)])])])),_:1}),p(j,{span:6},{default:m((()=>[c("div",ea,[c("div",ia,[ra,c("h4",null,g(h.today_data.new_course_total.tday),1),c("p",na,"昨日："+g(h.today_data.new_course_total.ytd),1)])])])),_:1})])),_:1}),c("div",null,[c("div",la,[h.loading?_("",!0):(f(),u(k,{key:0}))])])])]),c("div",ca,[h.loading?_("",!0):(f(),u(R,{key:0}))])])])),[[b,h.loading]])}],["__scopeId","data-v-35f18fd0"]]);export{pa as default};
