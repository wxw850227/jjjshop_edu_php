import{t,u as e,A as a}from"./element-plus-fe2e4fed.js";import{f as s,S as i}from"./DateTime-9dc3a887.js";import{i as o}from"./echarts-2361e669.js";import{_ as r}from"./index-49a7d7a3.js";import{o as n,c as l,P as m,S as d,a as c}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./tslib-a4e99503.js";import"./zrender-1189e17c.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";let p=null;const h={data(){let t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),{loading:!0,activeName:"order",shortcuts:[{text:"最近一周",value:()=>{const t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),[e,t]}},{text:"最近一个月",value:()=>{const t=new Date,e=new Date;return e.setTime(e.getTime()-2592e6),[e,t]}},{text:"最近三个月",value:()=>{const t=new Date,e=new Date;return e.setTime(e.getTime()-7776e6),[e,t]}}],datePicker:[s(e),s(t)],dataList:null,option:{title:{},grid:{left:"3%",right:"4%",bottom:"6%",containLabel:!0},tooltip:{trigger:"axis"},yAxis:{}}}},created(){},mounted(){this.myEcharts()},methods:{handleClick(t){this.activeName=t,this.getData()},changeDate(){this.getData()},myEcharts(){p=o(document.getElementById("TransactionChart")),this.getData()},createOption(){if(!this.loading){let t=[],e=this.dataList.days,a=[],s=[];this.dataList.data.forEach((t=>{a.push(t.total_money),s.push(t.total_num)})),t=["成交额","成交量"],this.option.xAxis={type:"category",boundaryGap:!1,data:e},this.option.color=["red","#409EFF"],this.option.legend={data:[{name:t[0],color:"#ccc"},{name:t[1]}]},this.option.series=[{name:t[0],type:"line",data:a,lineStyle:{color:"red"}},{name:t[1],type:"line",data:s,lineStyle:{color:"#409EFF"}}],p.setOption(this.option),p.resize()}},getData(){let t=this;t.loading=!0,i.getOrderByDate({search_time:t.datePicker,type:t.activeName},!0).then((e=>{t.dataList=e.data,t.loading=!1,t.createOption()})).catch((t=>{}))}}},u={class:"mt30"},j=c("div",{class:"common-form"},"交易统计",-1),g={class:"d-b-c"},v=c("div",{class:""},[c("div",{class:"Echarts"},[c("div",{id:"TransactionChart"})])],-1);const y=r(h,[["render",function(s,i,o,r,p,h){const y=t,D=e,b=a;return n(),l("div",u,[j,m(D,{modelValue:p.activeName,"onUpdate:modelValue":i[0]||(i[0]=t=>p.activeName=t),onTabChange:h.handleClick},{default:d((()=>[m(y,{label:"总订单数",name:"order"}),m(y,{label:"课程订单",name:"course"}),m(y,{label:"教务订单",name:"edu"})])),_:1},8,["modelValue","onTabChange"]),c("div",g,[c("div",null,[m(b,{size:"small",modelValue:p.datePicker,"onUpdate:modelValue":i[1]||(i[1]=t=>p.datePicker=t),type:"daterange",align:"right","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",onChange:h.changeDate,shortcuts:p.shortcuts},null,8,["modelValue","onChange","shortcuts"])])]),v])}]]);export{y as default};
