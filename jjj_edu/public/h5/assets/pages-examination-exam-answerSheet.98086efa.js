import{_ as e,P as t,C as a,U as s,o as i,a as l,w as d,f as r,d as c,e as n,t as o,p,b as m,r as u,F as _,u as f,i as x,y as h,n as g}from"./index-db1fe3c3.js";import{_ as b}from"./u-icon.6f07718a.js";import{r as y}from"./uni-app.es.bf5e67d0.js";const k=e({data:()=>({paper_id:0,record_id:0,activeIndex:0,time:"",examTime:0,detail:{},question:[],type:0,model:null}),onLoad(e){this.paper_id=e.paper_id,this.record_id=e.record_id,this.model=e.model,this.type=e.type||0,this.getData(),0==this.type&&this.checkHistory()},computed:{getExamTime(){let e=this.examTime,t=parseInt(e/60/60%24);t=t<10?"0"+t:t;let a=parseInt(e/60%60);a=a<10?"0"+a:a;let s=parseInt(e%60);return s=s<10?"0"+s:s,t+":"+a+":"+s}},beforeDestroy(){clearInterval(this.intTimer),this.intTimer=null},methods:{changeInde(e){this.$fire.fire("Qsindex",e),t()},goback(){t()},getData(){let e=this,t="paper.Paper/startAnswer";0!=this.type&&(t="paper.Paper/resultAnswer"),e._get(t,{paper_id:e.paper_id},(t=>{e.detail=t.data.detail,e.question=e.detail.question}))},checkHistory(){let e=this,t=a("examTime")||{};this.examTime=t[e.record_id]||0,this.intTimer=setInterval((function(){e.examTime++}),1e3)},getexamTime(){let e=0;return e=a("examTime")[this.record_id],e},getIndex:e=>String.fromCharCode(e+65),subFunc(){let e=this;s({title:"提示",content:"确认要提交试卷吗?",confirmText:"确认提交",success(t){t.confirm&&e._post("paper.Paper/submit",{record_id:e.detail.record_id},(t=>{s({content:"提交成功",success(){e.gotoPage(`/pages/examination/record/detail?paper_id=${e.detail.paper_id}&model=${e.model}`,"redirect")}}),clearInterval(e.intTimer),e.intTimer=null}))}})}}},[["render",function(e,t,a,s,k,T){const I=y(f("u-icon"),b),C=x,v=h,w=r;return i(),l(w,{class:"p24",style:{"padding-bottom":"170rpx"}},{default:d((()=>[c(w,{class:"top-box d-b-c"},{default:d((()=>[c(w,null,{default:d((()=>[c(v,{class:"datika-btn",onClick:T.goback},{default:d((()=>[c(I,{size:"42rpx",name:"/static/image/datika.png"}),c(C,{class:"ml10 f24"},{default:d((()=>[n("返回答题")])),_:1})])),_:1},8,["onClick"])])),_:1}),0==k.type&&"practice"!=k.model?(i(),l(w,{key:0,class:"d-c-c"},{default:d((()=>[c(I,{size:"46rpx",name:"/static/image/time.png"}),c(C,{class:"ml10 f30 dominant"},{default:d((()=>[n(o(T.getExamTime),1)])),_:1})])),_:1})):p("",!0)])),_:1}),c(w,{class:"center-box"},{default:d((()=>[c(w,{class:"c-t-box d-b-c"},{default:d((()=>[c(w,{class:"f30 c-t-box-title"},{default:d((()=>[n("答题情况")])),_:1}),c(w,{class:"d-c-c f24 gray9"},{default:d((()=>[c(w,{class:"d-c-c mr16"},{default:d((()=>[c(w,{class:"statebox1"}),c(w,{class:""},{default:d((()=>[n("已答")])),_:1})])),_:1}),c(w,{class:"d-c-c"},{default:d((()=>[c(w,{class:"statebox2"}),c(w,{class:""},{default:d((()=>[n("未答")])),_:1})])),_:1})])),_:1})])),_:1}),c(w,{class:"f-w d-s-s",style:{"padding-top":"34rpx"}},{default:d((()=>[(i(!0),m(_,null,u(k.question,((e,t)=>(i(),l(w,{class:g(["anser-item",{active:e.answer_state>0}]),onClick:e=>T.changeInde(t),key:t},{default:d((()=>[n(o(t+1),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),0==k.type?(i(),l(w,{key:0,class:"bottom-box d-b-c",onClick:T.subFunc},{default:d((()=>[n("提交试卷")])),_:1},8,["onClick"])):p("",!0)])),_:1})}],["__scopeId","data-v-756b77e5"]]);export{k as default};
