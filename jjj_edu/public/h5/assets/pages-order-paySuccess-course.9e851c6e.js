import{_ as e,B as t,D as a,o as s,a as r,w as d,f as o,d as l,e as i,t as c,p as _,k as u,i as p}from"./index-4d017ba3.js";import{_ as n}from"./success.c31e23a3.js";const f=e({components:{},data:()=>({loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,order_id:0,detail:{order_status:[],address:{region:[]},product:[],pay_type:[],delivery_type:[],pay_status:[],order_type:null}}),onLoad(e){this.order_id=e.order_id,this.order_type=e.order_type},mounted(){t({title:"加载中"}),this.getData()},methods:{getData(){let e=this,t=e.order_id,s="user.order/detail";"point"==e.order_type&&(s="plus.points.order/detail"),e._get(s,{order_id:t},(function(s){e.detail=s.data.order,e.loadding=!1,a(),s.data.show_table&&e.showSuccess("您的订单需要补充相关信息，请在订单详情补充",(function(){e.gotoPage("/pages/order/order-detail?order_id="+t)}))}))},goMyorder(){"point"==this.order_type?this.gotoPage("/pages/pointsMall/orderList","reLaunch"):"course"==this.order_type?this.gotoPage("/pages/order/course?order_type=10","reLaunch"):"eduadmin"==this.order_type?this.gotoPage("/pages/order/teacher?order_type=30","reLaunch"):"paper"==this.order_type&&this.gotoPage("/pages/order/exam?order_type=20","reLaunch")}}},[["render",function(e,t,a,f,y,g){const h=u,m=o,x=p;return s(),r(m,{class:"wrap"},{default:d((()=>[l(m,{class:"header"},{default:d((()=>[l(m,{class:"imgBox"},{default:d((()=>[l(h,{class:"img",src:n})])),_:1}),l(m,{class:"txt"},{default:d((()=>[i("支付成功")])),_:1})])),_:1}),l(m,{class:"orderWrap"},{default:d((()=>[l(m,{class:"line"}),l(m,{class:"orderInfo"},{default:d((()=>[l(m,{class:"price"},{default:d((()=>[l(x,{class:"symbol"},{default:d((()=>[i("￥")])),_:1}),l(x,{class:"num"},{default:d((()=>[i(c(y.detail.pay_price),1)])),_:1})])),_:1}),l(m,{class:"common"},{default:d((()=>[l(m,{class:"item"},{default:d((()=>[l(m,{class:"pre"},{default:d((()=>[i("订单编号：")])),_:1}),l(m,{class:"txt"},{default:d((()=>[i(c(y.detail.order_no),1)])),_:1})])),_:1}),l(m,{class:"item"},{default:d((()=>[l(m,{class:"pre"},{default:d((()=>[i("下单时间：")])),_:1}),l(m,{class:"txt"},{default:d((()=>[i(c(y.detail.create_time),1)])),_:1})])),_:1}),l(m,{class:"item"},{default:d((()=>[l(m,{class:"pre"},{default:d((()=>[i("支付方式：")])),_:1}),l(m,{class:"txt"},{default:d((()=>[i(c(y.detail.pay_type&&y.detail.pay_type.text),1)])),_:1})])),_:1}),l(m,{class:"item"},{default:d((()=>[l(m,{class:"pre"},{default:d((()=>[i("订单类型：")])),_:1}),"point"==e.order_type?(s(),r(m,{key:0,class:"txt"},{default:d((()=>[i("积分商城")])),_:1})):(s(),r(m,{key:1,class:"txt"},{default:d((()=>[i(c(y.detail.order_source_text),1)])),_:1}))])),_:1})])),_:1})])),_:1}),l(m,{class:"btnList"},{default:d((()=>["course"==e.order_type?(s(),r(m,{key:0,class:"orderBtn plain",onClick:t[0]||(t[0]=t=>e.gotoPage(`/pages/knowledge/course/detail?course_id=${y.detail.product&&y.detail.product[0]&&y.detail.product[0].product_id}`,"reLaunch"))},{default:d((()=>[i("立即学习")])),_:1})):_("",!0),l(m,{class:"orderBtn",onClick:g.goMyorder},{default:d((()=>[i("订单详情")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-14dbadae"]]);export{f as default};
