import{_ as t,v as e,B as a,D as s,A as n,o as i,a as l,w as d,n as o,p as u,f as r,d as c,e as g,t as h,R as y,b as f,r as _,F as m,k as p,i as k}from"./index-4d017ba3.js";const w=t({data:()=>({loading:!0,weeklist:["日","一","二","三","四","五","六"],daylist:[],year:null,today_year:null,month:null,today_month:null,day:null,today_day:null,list:[],reward:[],days:0,today:0,is_sign:!1,point:[],rule:""}),mounted(){this.init()},onShow(){this.getData(),this.getRule()},methods:{getRule(){let t=this;t._get("plus.sign.sign/getSign",{},(function(a){a.data.detail=e.format_content(a.data.detail),t.rule=a.data.detail}))},getData(){let t=this;a({title:"加载中"}),t._get("plus.sign.sign/index",{},(function(e){t.list=e.data.list[0],t.days=e.data.list[1],t.today=e.data.list[2],t.reward=e.data.arr,t.point=e.data.point,t.list.indexOf(t.day)>=0&&(t.is_sign=!0),t.loading=!1,s()}))},onSign(){let t=this;if(t.is_sign)return n({title:"今天已签到",duration:2e3}),!1;a({title:"正在提交",mask:!0}),t._get("plus.sign.sign/add",{},(function(e){s(),t.showSuccess(e.data.msg,(function(){t.getData()}))}))},init(){if(null===this.year&&null===this.month&&null===this.day){let t=new Date;this.year=t.getFullYear(),this.today_year=t.getFullYear(),this.month=t.getMonth(),this.today_month=t.getMonth()+1,this.day=t.getDate(),this.today_day=t.getDate()}this.joinDay()},joinDay(){let t=[],e=this.getMonthCount(this.year,this.month),a=this.getPreMonthCount(this.year,this.month),s=this.getNextMonthCount(this.year,this.month),n=this.getWeekday(this.year,this.month),i=[];0!=n&&(i=a.slice(-1*n));let l=s.slice(0,42-e.length-n),d=this.numConvertNode(i,"pre"),o=this.numConvertNode(e,null),u=this.numConvertNode(l,"next");t=[].concat(d,o,u),this.daylist=t},numConvertNode(t,e){let a=0,s=[],n=t.length;null!=e&&("pre"==e?a=-1:(a=1,n>7&&(n-=7)));for(let i=0;i<n;i++){let e={type:a,day:t[i]};s.push(e)}return s},isLeapYear:t=>t%400==0||t%100!=0&&t%4==0,getMonthCount(t,e){let a=[31,null,31,30,31,30,31,31,30,31,30,31][e]||(this.isLeapYear(t)?29:28);return Array.from(new Array(a),((t,e)=>e+1))},getWeekday:(t,e)=>new Date(t,e,1).getDay(),getPreMonthCount(t,e){return 0===e?this.getMonthCount(t-1,11):this.getMonthCount(t,e-1)},getNextMonthCount(t,e){return 11===e?this.getMonthCount(t+1,0):this.getMonthCount(t,e+1)},gotoRuleFunc(){this.gotoPage("/pages/plus/signin/rule/rule")}}},[["render",function(t,e,a,s,n,w){const x=p,b=k,C=r;return n.loading?u("",!0):(i(),l(C,{key:0,"data-theme":t.theme(),class:o([t.theme()||"","signin-container"])},{default:d((()=>[c(C,{class:"pr signin-top"},{default:d((()=>[c(x,{class:"bg-signin",src:"/h5/assets/signinBg-8b267f11.png",mode:""}),c(C,{class:"d-b-c top-box"},{default:d((()=>[n.reward.length>0&&n.reward[0]>=1?(i(),l(C,{key:0},{default:d((()=>[g(" 签到"),c(b,{class:"p-0-10 text2 fb"},{default:d((()=>[g(h(n.reward[0]),1)])),_:1}),g(" 天可额外得到"),c(b,{class:"p-0-10 text2 fb"},{default:d((()=>[g(h(n.point[n.reward[0]]),1)])),_:1}),g(h(t.points_name()),1)])),_:1})):u("",!0),n.reward.length>0&&1==n.reward[0]&&!n.is_sign?(i(),l(C,{key:1},{default:d((()=>[g("(今天签到即可得到额外奖励)")])),_:1})):u("",!0)])),_:1}),c(C,{class:"signin-click1"},{default:d((()=>[c(x,{class:"signin-circle",src:"/h5/assets/signinCircle-cbbc3384.png",mode:""}),c(C,{class:"signin-click2"},{default:d((()=>[n.is_sign?(i(),l(C,{key:1,class:"signin-click4 d-c d-c-c"},{default:d((()=>[c(b,null,{default:d((()=>[g("今日")])),_:1}),c(b,null,{default:d((()=>[g("已签")])),_:1})])),_:1})):(i(),l(C,{key:0,class:"signin-click3",onClick:y(w.onSign,["stop"])},{default:d((()=>[c(C,{class:"signin-click"},{default:d((()=>[g("签到")])),_:1})])),_:1},8,["onClick"]))])),_:1})])),_:1}),c(C,{class:"signinDay"},{default:d((()=>[g("已经累计签到"),c(b,{class:"p-0-10 text2 fb",style:{color:"#EBBF4C"}},{default:d((()=>[g(h(n.days),1)])),_:1}),g("天")])),_:1})])),_:1}),c(C,{class:"sign-main"},{default:d((()=>[c(C,{class:"sign-main-bg"},{default:d((()=>[c(C,{class:"sign-calendar-wrap"},{default:d((()=>[c(C,{class:"date-text"},{default:d((()=>[c(b,{style:{"font-size":"28rpx"},class:"mr20 icon iconfont icon-sanjiao1 dominant"}),c(b,null,{default:d((()=>[g(h(n.today_year)+"-"+h(n.today_month),1)])),_:1}),c(b,{style:{"font-size":"28rpx"},class:"ml20 icon iconfont icon-sanjiao1 dominant"})])),_:1}),c(C,{class:"week-list"},{default:d((()=>[(i(!0),f(m,null,_(n.weeklist,((t,e)=>(i(),l(C,{class:"week-item",key:e},{default:d((()=>[g(h(t),1)])),_:2},1024)))),128))])),_:1}),c(C,{class:"date-list-wrap"},{default:d((()=>[(i(!0),f(m,null,_(n.daylist,((t,e)=>(i(),l(C,{class:o(["date-item",0!=t.type?"secondary-date-item":""]),key:e},{default:d((()=>[n.list.indexOf(t.day)>-1&&0==t.type?(i(),l(b,{key:0,class:"icon-box"},{default:d((()=>[g(h(t.day),1)])),_:2},1024)):u("",!0),-1==n.list.indexOf(t.day)?(i(),f(m,{key:1},[n.reward.indexOf(t.day-n.today)>-1&&0==t.type?(i(),l(b,{key:0,class:"iconfont icon-libao"})):u("",!0),0==t.type&&-1==n.reward.indexOf(t.day-n.today)?(i(),l(C,{key:1},{default:d((()=>[c(b,null,{default:d((()=>[g(h(t.day),1)])),_:2},1024)])),_:2},1024)):u("",!0)],64)):u("",!0)])),_:2},1032,["class"])))),128))])),_:1})])),_:1})])),_:1}),c(C,{class:"rule-box"},{default:d((()=>[c(C,{class:"rule-title"},{default:d((()=>[g("活动规则")])),_:1}),c(C,{class:"content p30 bg-white f30 lh200 radius8",innerHTML:n.rule},null,8,["innerHTML"])])),_:1})])),_:1})])),_:1},8,["data-theme","class"]))}],["__scopeId","data-v-fbcb419b"]]);export{w as default};
