import{_ as a,o as e,a as t,w as s,f as l,d,e as i,t as c,p as o,b as r,r as p,F as f,i as _,y as u,k as m}from"./index-db1fe3c3.js";import{_ as n}from"./score.53a72e3e.js";const y=a({data:()=>({isPay:!1,paper_id:0,detail:{},model:null}),components:{},onLoad(a){this.paper_id=a.paper_id||0,this.model=a.model},onShow(){this.getData()},methods:{getData(){let a=this;a._get("paper.Paper/detail",{paper_id:a.paper_id},(e=>{a.detail=e.data.detail}))},toPay(){this.gotoPage(`/pages/order/confirm?paper_id=${this.detail.paper_id}&type=paper`)},closeCashier(a){a&&this.getData(),this.isPay=!1}}},[["render",function(a,y,b,g,h,k){const x=l,D=_,P=m,$=u;return e(),t(x,{class:"p24"},{default:s((()=>[d(x,{class:"center-box"},{default:s((()=>[d(x,{class:"f32 gray3 tc mb30"},{default:s((()=>[i(c(h.detail.title),1)])),_:1}),"practice"!=h.model?(e(),t(x,{key:0,class:"d-b-c p20 pb30",style:{"border-bottom":"1rpx dashed  #DDDDDD"}},{default:s((()=>[d(x,{class:"d-b-c p-0-20 pb20 ww100 box-s-b"},{default:s((()=>[d(x,{class:"d-c-c d-c flex-1"},{default:s((()=>[d(x,{class:"f36 gray3 mb20"},{default:s((()=>[d(D,{class:"dominant fb f40 mr10"},{default:s((()=>[i(c(h.detail.exam_time),1)])),_:1}),i("分钟 ")])),_:1}),d(x,{class:"f28 gray9"},{default:s((()=>[i("建议用时")])),_:1})])),_:1}),d(x,{class:"d-c-c d-c flex-1"},{default:s((()=>[d(x,{class:"f36 gray3 mb20"},{default:s((()=>[d(D,{class:"dominant fb f40 mr10"},{default:s((()=>[i(c(h.detail.total_score),1)])),_:1}),i("分 ")])),_:1}),d(x,{class:"f28 gray9"},{default:s((()=>[i("试卷总分")])),_:1})])),_:1})])),_:1})])),_:1})):o("",!0),d(x,{class:"d-b-c f28 gray9",style:{height:"100rpx"}},{default:s((()=>[d(x,{class:""},{default:s((()=>[i(c(h.detail.total_answer)+"人已答题",1)])),_:1}),d(x,{class:"d-c-c"},{default:s((()=>[i("试题难度: "),d(x,{class:"scoreList"},{default:s((()=>[(e(!0),r(f,null,p(h.detail.difficulty,(a=>(e(),t(P,{class:"score",key:a,src:n,mode:""})))),128))])),_:1})])),_:1})])),_:1}),0==h.detail.pay_type||h.detail.payStatus>0?(e(),r(f,{key:1},[0==h.detail.record_status?(e(),t($,{key:0,class:"sub-btn",onClick:y[0]||(y[0]=e=>a.gotoPage(`/pages/examination/exam/start?type=0&paper_id=${h.detail.paper_id}&model=${h.model}`))},{default:s((()=>[i("开始答题")])),_:1})):o("",!0),1==h.detail.record_status?(e(),t($,{key:1,class:"sub-btn",onClick:y[1]||(y[1]=e=>a.gotoPage(`/pages/examination/exam/start?type=1&paper_id=${h.detail.paper_id}&model=${h.model}`))},{default:s((()=>[i("继续答题")])),_:1})):o("",!0),2==h.detail.record_status?(e(),t($,{key:2,class:"sub-btn",onClick:y[2]||(y[2]=e=>a.gotoPage(`/pages/examination/exam/start?type=0&paper_id=${h.detail.paper_id}&model=${h.model}`))},{default:s((()=>[i("再次答题")])),_:1})):o("",!0)],64)):o("",!0),1==h.detail.pay_type&&0==h.detail.payStatus?(e(),r(f,{key:2},[d(x,{class:"f42 fb dominant tc mb20"},{default:s((()=>[i("￥"+c(h.detail.money),1)])),_:1}),d($,{class:"sub-btn",onClick:k.toPay},{default:s((()=>[i("支付答题")])),_:1},8,["onClick"])],64)):o("",!0),d(x,{class:"content-detail"},{default:s((()=>[d(x,{class:"f32 mb20 gray3"},{default:s((()=>[i("题型介绍:")])),_:1}),d(x,{class:"mb20"},{default:s((()=>[d(D,{class:"f24 gray6",style:{"line-height":"1.75"}},{default:s((()=>[i(" 1.单选题（选项中只有1个正确答案)； 2.多选题（选项中至少有2个正确答案)； 3.判断题（选项中只有1个正确答案) ")])),_:1})])),_:1}),"practice"!=h.model?(e(),t(x,{key:0,class:"f32 mb20 gray3"},{default:s((()=>[i("考前必读:")])),_:1})):o("",!0),"practice"!=h.model?(e(),t(D,{key:1,class:"f24 gray6",style:{"line-height":"1.75"}},{default:s((()=>[i(" 1.答题者准备好后，可点击“开始做题”按钮开始考试； 2.做题前可看题目前的标签，明白此题是单选题、多选 题还是判断题 ")])),_:1})):o("",!0)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-67fd1b04"]]);export{y as default};
