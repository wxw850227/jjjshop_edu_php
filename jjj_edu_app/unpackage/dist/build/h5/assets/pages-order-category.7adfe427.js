import{_ as t,o as s,a as e,w as a,f as r,d as o,b as l,r as d,F as i,e as c,t as p,k as g}from"./index-911d5a8b.js";const n=t({components:{},data:()=>({list:[{txt:"课程订单",img:"/static/image/dd01.png",order_type:10,url:"/pages/order/course"},{txt:"教务订单",img:"/static/image/dd03.png",order_type:30,url:"/pages/order/teacher"},{txt:"积分订单",img:"/static/image/dd03.png",order_type:"pointsMall"}]}),methods:{gotoOrder(t){"pointsMall"==t.order_type?this.gotoPage("/pages/pointsMall/orderList"):t.url&&this.gotoPage(`${t.url}?order_type=${t.order_type}`)}}},[["render",function(t,n,m,u,_,f){const x=g,y=r;return s(),e(y,{class:"wrap"},{default:a((()=>[o(y,{class:"list"},{default:a((()=>[(s(!0),l(i,null,d(_.list,(t=>(s(),e(y,{class:"item",key:t,onClick:s=>f.gotoOrder(t)},{default:a((()=>[o(x,{class:"img",src:t.img,mode:"aspectFill"},null,8,["src"]),o(y,{class:"txt"},{default:a((()=>[c(p(t.txt),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-60c9c544"]]);export{n as default};
