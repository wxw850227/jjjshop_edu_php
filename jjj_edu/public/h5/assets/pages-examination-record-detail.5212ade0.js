import{_ as a,P as e,o as s,a as t,w as l,f as c,d,e as r,t as i,p as u,b as o,r as _,F as n,u as p,i as f,n as m}from"./index-4d017ba3.js";import{_ as b}from"./u-icon.6b7addd3.js";import{r as x}from"./uni-app.es.ef2ad64d.js";const g=a({data:()=>({paper_id:0,activeIndex:0,time:"",examTime:0,detail:{paper:{}},question:[],user:{},model:null}),onLoad(a){this.paper_id=a.paper_id,this.model=a.model,this.getData()},computed:{},methods:{getExamTime(a){let e=parseInt(a/60/60%24);e=e<10?"0"+e:e;let s=parseInt(a/60%60);s=s<10?"0"+s:s;let t=parseInt(a%60);return t=t<10?"0"+t:t,1*e>0?e+"'"+s+"'"+t:s+"'"+t},goback(){e()},getData(){let a=this;a._get("paper.Paper/resultAnswer",{paper_id:a.paper_id},(e=>{a.detail=e.data.detail,a.user=e.data.user,a.question=a.detail.question}))},getIndex:a=>String.fromCharCode(a+65)}},[["render",function(a,e,g,y,k,h){const v=c,w=x(p("u-icon"),b),I=f;return s(),t(v,{class:"p24",style:{"padding-bottom":"170rpx","padding-top":"60rpx"}},{default:l((()=>[d(v,{class:"top-bg"}),d(v,{class:"user-box d-c-c d-c"},{default:l((()=>[d(v,{class:"user-ava d-c-c"},{default:l((()=>[d(w,{size:"106rpx",name:k.user.avatarUrl||""},null,8,["name"])])),_:1}),d(v,{class:"f28 gray3 mb20"},{default:l((()=>[r(i(k.user.nickName),1)])),_:1}),"practice"!=k.model?(s(),t(v,{key:0,class:"f28 gray3 mb20"},{default:l((()=>[d(I,{class:"dominant fb"},{default:l((()=>[r(i(k.detail.score),1)])),_:1}),r("分 ")])),_:1})):u("",!0),d(v,null,{default:l((()=>["practice"!=k.model?(s(),t(I,{key:0,class:"t-totalscore"},{default:l((()=>[r("试卷总分"+i(k.detail.paper.total_score)+"分",1),k.detail.grade?(s(),t(I,{key:0},{default:l((()=>[r("("+i(k.detail.grade)+")",1)])),_:1})):u("",!0)])),_:1})):u("",!0)])),_:1})])),_:1}),d(v,{class:"center-box mb24"},{default:l((()=>[d(v,{class:"c-t-box d-b-c"},{default:l((()=>[d(v,{class:"f30 c-t-box-title"},{default:l((()=>[r("基本信息")])),_:1})])),_:1}),d(v,{class:"d-b-c",style:{"padding-top":"34rpx"}},{default:l((()=>[d(v,{class:"circular"},{default:l((()=>[d(v,{class:"circular-t"},{default:l((()=>[r(i(k.detail.paper.item_number),1)])),_:1}),d(v,{class:"circular-name"},{default:l((()=>[r("题目数")])),_:1})])),_:1}),d(v,{class:"circular"},{default:l((()=>[d(v,{class:"circular-t"},{default:l((()=>[r(i(k.detail.no_answer),1)])),_:1}),d(v,{class:"circular-name"},{default:l((()=>[r("未答数")])),_:1})])),_:1}),d(v,{class:"circular"},{default:l((()=>[d(v,{class:"circular-t"},{default:l((()=>[r(i(k.detail.accuracy)+"%",1)])),_:1}),d(v,{class:"circular-name"},{default:l((()=>[r("正确率")])),_:1})])),_:1}),d(v,{class:"circular"},{default:l((()=>[d(v,{class:"circular-t"},{default:l((()=>[r(i(h.getExamTime(1*k.detail.duration)),1)])),_:1}),d(v,{class:"circular-name"},{default:l((()=>[r("答题用时")])),_:1})])),_:1})])),_:1})])),_:1}),d(v,{class:"center-box"},{default:l((()=>[d(v,{class:"c-t-box d-b-c"},{default:l((()=>[d(v,{class:"f30 c-t-box-title"},{default:l((()=>[r("答题情况")])),_:1}),d(v,{class:"d-c-c f24 gray9"},{default:l((()=>[d(v,{class:"d-c-c mr16"},{default:l((()=>[d(v,{class:"statebox1"}),d(v,{class:""},{default:l((()=>[r("正确")])),_:1})])),_:1}),d(v,{class:"d-c-c mr16"},{default:l((()=>[d(v,{class:"statebox2"}),d(v,{class:""},{default:l((()=>[r("错误")])),_:1})])),_:1}),d(v,{class:"d-c-c"},{default:l((()=>[d(v,{class:"statebox3"}),d(v,{class:""},{default:l((()=>[r("未答")])),_:1})])),_:1})])),_:1})])),_:1}),d(v,{class:"f-w d-s-s",style:{"padding-top":"34rpx"}},{default:l((()=>[(s(!0),o(n,null,_(k.question,((a,e)=>(s(),t(v,{class:m(["anser-item",{active:1==a.answer_state,active2:2==a.answer_state}]),key:e},{default:l((()=>[r(i(e+1),1)])),_:2},1032,["class"])))),128))])),_:1})])),_:1}),d(v,{class:"bottom-box d-b-c"},{default:l((()=>[d(v,{class:"b-btn1",onClick:e[0]||(e[0]=e=>a.gotoPage("/pages/examination/exam/analysis?paper_id="+k.detail.paper_id))},{default:l((()=>[r("查看解析 ")])),_:1}),d(v,{class:"b-btn2",onClick:e[1]||(e[1]=e=>a.gotoPage(`/pages/examination/exam/start?paper_id=${k.detail.paper_id}&model=${k.model}`))},{default:l((()=>[r("再考一次 ")])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-68a0402c"]]);export{g as default};
