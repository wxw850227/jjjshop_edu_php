import{_ as e,B as t,D as a,U as s,o as l,a as o,w as d,f as r,d as i,b as u,r as c,F as n,e as _,h as p,i as g,t as f,R as y,p as m,k as h}from"./index-911d5a8b.js";import{u as k}from"./uni-load-more.3bb687c9.js";import{z as v}from"./zs-tab.5a9c8dc2.js";const b=e({components:{uniLoadMore:k,zsTab:v},data:()=>({list_rows:10,page:1,loading:!1,listData:[],last_page:1,no_more:!1,tabList:[{key:"全部订单",value:null},{key:"待支付",value:"payment"},{key:"已完成",value:"finish"},{key:"待评价",value:"comment"}],order_type:0,type:null}),onLoad(e){e.order_type&&(this.order_type=e.order_type)},onShow(){this.page=1,this.listData=[],this.getData()},computed:{loadingType(){return this.loading?1:0!=this.listData.length&&this.no_more?2:0}},onReachBottom(){let e=this;e.page<e.last_page&&(e.page++,e.getData()),e.no_more=!0},methods:{getData(){let e=this,s=e.page,l=e.list_rows;e.loading=!0,t({title:"加载中"}),e._get("user.Order/lists",{order_type:e.order_type,page:s||1,list_rows:l,type:e.type},(t=>{e.listData=e.listData.concat(t.data.list.data),e.last_page=t.data.list.last_page,t.data.list.last_page<=1&&(e.no_more=!0),e.loading=!1,a()}))},deleteFunc(e,l){let o=this;s({title:"提示",content:"确定要删除该订单吗?",success(d){d.confirm&&(o.loading=!0,t({title:"加载中"}),o._get("user.Order/delete",{order_id:e},(e=>{s({content:"删除成功",success(){o.listData.splice(l,1),o.loading=!1,a()}})})))}})},changeType(e){this.type!=e.value&&(this.type=e.value,this.listData=[],this.page=1,this.getData())}}},[["render",function(e,t,a,s,k,v){const b=p("zsTab"),D=h,C=r,T=g,w=p("uni-load-more");return l(),o(C,null,{default:d((()=>[i(b,{data:k.tabList,activeName:k.type,onChangTab:v.changeType},null,8,["data","activeName","onChangTab"]),i(C,{class:"order-list"},{default:d((()=>[(l(!0),u(n,null,c(k.listData,((a,s)=>(l(),o(C,{class:"order-item",key:s,onClick:t=>e.gotoPage("/pages/order/detail?order_id="+a.order_id)},{default:d((()=>[i(C,{class:"item-top"},{default:d((()=>[i(D,{class:"item-t-img",src:a.product[0].image.file_path,mode:""},null,8,["src"]),i(C,{class:"item-t-center"},{default:d((()=>[i(C,null,{default:d((()=>[i(C,{class:"f26 gray1 text-ellipsis"},{default:d((()=>[_(f(a.product[0].title),1)])),_:2},1024),i(C,{class:"f24 gray9"},{default:d((()=>[_(f(a.product[0].create_time),1)])),_:2},1024)])),_:2},1024),i(C,{class:"f24 gray9"},{default:d((()=>[_("支付金额"),i(T,{class:"redF24 f28 fb"},{default:d((()=>[_("￥"+f(a.pay_price),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),i(C,{class:"d-b-c item-bottom"},{default:d((()=>[10==a.pay_status.value?(l(),o(C,{key:0,class:"redF24 f24"},{default:d((()=>[_(f(a.pay_status.text),1)])),_:2},1024)):30==a.order_status.value&&0==a.is_comment?(l(),o(C,{key:1,class:"redF24 f24"},{default:d((()=>[_("待评价")])),_:1})):(l(),o(C,{key:2,class:"redF24 f24"},{default:d((()=>[_(f(a.order_status.text),1)])),_:2},1024)),i(C,{class:"d-e-c flex-1"},{default:d((()=>[10==a.pay_status.value?(l(),o(C,{key:0,class:"order-btn full",onClick:y((t=>e.gotoPage(`/pages/order/cashier?order_id=${a.order_id}&order_type=10&type=course`)),["stop"])},{default:d((()=>[_("去支付")])),_:2},1032,["onClick"])):a.order_status&&30==a.order_status.value&&0==a.is_comment?(l(),o(C,{key:1,class:"order-btn full",onClick:y((t=>e.gotoPage(`pages/order/evaluate?order_id=${a.order_id}`)),["stop"])},{default:d((()=>[_("去评价")])),_:2},1032,["onClick"])):m("",!0),30==a.order_status.value?(l(),o(C,{key:2,class:"order-btn full",onClick:y((t=>e.gotoPage(`/pages/knowledge/course/detail?course_id=${a.product&&a.product[0]&&a.product[0].product_id}`)),["stop"])},{default:d((()=>[_("立即学习")])),_:2},1032,["onClick"])):(l(),o(C,{key:3,class:"order-btn full",onClick:t[0]||(t[0]=y((t=>e.gotoPage("/pages/knowledge/index")),["stop"]))},{default:d((()=>[_("更多课程")])),_:1})),10==a.pay_type.value&&30!=a.order_status.value?(l(),o(C,{key:4,class:"order-btn",onClick:y((e=>v.deleteFunc(a.order_id,s)),["stop"])},{default:d((()=>[_("删除订单")])),_:2},1032,["onClick"])):m("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),i(C,{class:""},{default:d((()=>[0!=k.listData.length||k.loading?(l(),o(w,{key:1,loadingType:v.loadingType},null,8,["loadingType"])):(l(),o(C,{key:0,class:"d-c-c p30"},{default:d((()=>[i(T,{class:"iconfont icon-wushuju"}),i(T,{class:"cont"},{default:d((()=>[_("亲，暂无相关记录哦")])),_:1})])),_:1}))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-1ca5f034"]]);export{b as default};
