import{_ as a,B as t,A as s,D as e,o as l,a as i,w as o,f as d,d as c,b as n,r as _,F as p,n as u,e as r,t as g,R as f,i as h,k as m}from"./index-db1fe3c3.js";const k=a({components:{},data:()=>({list_rows:10,page:1,loading:!1,listData:[],last_page:1,no_more:!1,points:0,tabList:[{key:"全部订单",value:0},{key:"已完成",value:2},{key:"进行中",value:1}],dataType:0}),onShow(){this.fetchData()},onLoad(a){},onReachBottom(){let a=this;a.page<a.last_page&&(a.page++,a.getData()),a.no_more=!0},methods:{saveReceipt(a){let l=this;t({title:"加载中"}),l._get("plus.points.order/receipt",{order_id:a.order_id},(a=>{const{msg:t}=a;s(t),l.loading=!1,e(),this.fetchData()}))},fetchData(){this.listData=[],this.page=1,this.getData()},getData(){let a=this;t({title:"加载中"}),a._get("plus.points.order/lists",{page:a.page||1,list_rows:a.list_rows,dataType:a.dataType},(t=>{a.listData=a.listData.concat(t.data.list.data),a.last_page=t.data.list.last_page,a.points=t.data.points,t.data.list.last_page<=1&&(a.no_more=!0),a.loading=!1,e()}))},changTab(a){a.value!=this.dataType&&(this.dataType=a.value,this.fetchData())}}},[["render",function(a,t,s,e,k,y){const D=h,v=d,b=m;return l(),i(v,{class:"wrap"},{default:o((()=>[c(v,{class:"tabList"},{default:o((()=>[(l(!0),n(p,null,_(k.tabList,(a=>(l(),i(v,{class:"item",key:a,onClick:t=>y.changTab(a)},{default:o((()=>[c(D,{class:u(["txt",{active:a.value==k.dataType}])},{default:o((()=>[r(g(a.key),1)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1}),c(v,{class:"list"},{default:o((()=>[(l(!0),n(p,null,_(k.listData,(s=>(l(),i(v,{class:"item",key:s,onClick:t=>a.gotoPage(`/pages/pointsMall/orderDetail?order_id=${s.order_id}`)},{default:o((()=>[c(v,{class:"topBox"},{default:o((()=>[c(v,{class:"masterPic"},{default:o((()=>[c(b,{mode:"scaleToFill",class:"img",src:s.file_path},null,8,["src"])])),_:2},1024),c(v,{class:"info"},{default:o((()=>[c(v,{class:"title"},{default:o((()=>[r(g(s.product_name),1)])),_:2},1024),c(v,{class:"txtList"},{default:o((()=>[c(v,null,{default:o((()=>[r("兑换时间: "+g(s.create_time),1)])),_:2},1024),c(v,null,{default:o((()=>[r("兑换金额: ￥"+g(s.pay_price)+"+"+g(s.points_num)+"积分",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),c(v,{class:"boxBottom"},{default:o((()=>[(l(),i(v,{key:0,class:"status"},{default:o((()=>[r(g(s.state_text),1)])),_:2},1024)),20==s.delivery_status.value&&10==s.order_status.value?(l(),i(v,{key:2,class:"btn",onClick:f((a=>y.saveReceipt(s)),["stop"])},{default:o((()=>[r("确认收货")])),_:2},1032,["onClick"])):(l(),i(v,{key:3,class:"btn",onClick:t[0]||(t[0]=f((t=>a.gotoPage("/pages/pointsMall/index","reLaunch")),["stop"]))},{default:o((()=>[r("更多商品")])),_:1}))])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-c1c9e810"]]);export{k as default};
