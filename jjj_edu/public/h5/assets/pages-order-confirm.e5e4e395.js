import{_ as e,B as t,D as a,o as r,a as s,w as d,f as o,d as l,e as i,t as u,k as c,i as p}from"./index-911d5a8b.js";const _=e({components:{},data:()=>({loading:!1,orderInfo:{},productList:{},course_id:null,paper_id:null,type:null,temlIds:[]}),onShow(){this.getData()},onLoad(e){this.course_id=e.course_id,this.paper_id=e.paper_id,this.type=e.type},methods:{getData(){let e=this;t({title:"加载中"}),"paper"==e.type?e._get("paper.order/buy",{paper_id:e.paper_id,pay_source:e.getPlatform()},(function(t){e.temlIds=t.data.template_arr,e.orderInfo=t.data.orderInfo,e.productList=t.data.orderInfo.productList[0],e.productList.course_price=e.productList.money,e.loading=!1,a()})):e._get("course.order/buy",{course_id:e.course_id,pay_source:e.getPlatform()},(function(t){e.temlIds=t.data.template_arr,e.orderInfo=t.data.orderInfo,e.productList=t.data.orderInfo.productList[0],e.loading=!1,a()}))},SubmitOrder(){let e=this,t="",a={};"course"==this.type?(a={course_id:e.course_id},t="course.order/buy"):"eduadmin"==this.type?(a={course_id:e.course_id},t="course.order/eduBuy"):"paper"==this.type&&(a={paper_id:e.paper_id},t="paper.Order/buy");e.subMessage(e.temlIds,(function(){e._post(t,a,(function(t){let a=`/pages/order/cashier?order_id=${t.data.order_id}&order_type=${t.data.order_type}&type=`+e.type;e.gotoPage(a,"reLaunch")}))}))}}},[["render",function(e,t,a,_,n,f){const m=o,y=c,g=p;return r(),s(m,{class:"wrap"},{default:d((()=>[l(m,{class:"orderInfo"},{default:d((()=>[l(m,{class:"title"},{default:d((()=>[i("订单信息")])),_:1}),l(m,{class:"product"},{default:d((()=>[l(m,{class:"masterPic"},{default:d((()=>[l(y,{mode:"scaleToFill",class:"img",src:n.productList.image&&n.productList.image.file_path},null,8,["src"])])),_:1}),l(m,{class:"info"},{default:d((()=>[l(m,{class:"name"},{default:d((()=>[i(u(n.productList.title),1)])),_:1}),l(m,{class:"price"},{default:d((()=>[l(g,{class:"symbol"},{default:d((()=>[i("￥")])),_:1}),l(g,null,{default:d((()=>[i(u(n.productList.course_price),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),l(m,{class:"fixedBottom"},{default:d((()=>[l(m,{class:"content"},{default:d((()=>[l(m,{class:"l"},{default:d((()=>[l(g,{class:"txt"},{default:d((()=>[i("应付：")])),_:1}),l(g,{class:"symbol"},{default:d((()=>[i("￥")])),_:1}),l(g,null,{default:d((()=>[i(u(n.orderInfo.order_pay_price),1)])),_:1})])),_:1}),l(m,{class:"payBtn",onClick:f.SubmitOrder},{default:d((()=>[i("确认支付")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-adb56a84"]]);export{_ as default};
