"use strict";const t=require("../../common/vendor.js"),s={components:{},data(){return{loading:!1,orderInfo:{},productList:{},course_id:null,paper_id:null,type:null,temlIds:[]}},onShow(){this.getData()},onLoad(e){this.course_id=e.course_id,this.paper_id=e.paper_id,this.type=e.type},methods:{getData(){let e=this;t.index.showLoading({title:"加载中"}),e.type=="paper"?e._get("paper.order/buy",{paper_id:e.paper_id,pay_source:e.getPlatform()},function(r){e.temlIds=r.data.template_arr,e.orderInfo=r.data.orderInfo,e.productList=r.data.orderInfo.productList[0],e.productList.course_price=e.productList.money,e.loading=!1,t.index.hideLoading()}):e._get("course.order/buy",{course_id:e.course_id,pay_source:e.getPlatform()},function(r){e.temlIds=r.data.template_arr,e.orderInfo=r.data.orderInfo,e.productList=r.data.orderInfo.productList[0],e.loading=!1,t.index.hideLoading()})},SubmitOrder(){let e=this,r="",p="/pages/order/cashier?order_id=",d={};this.type=="course"?(d={course_id:e.course_id},r="course.order/buy"):this.type=="eduadmin"?(d={course_id:e.course_id},r="course.order/eduBuy"):this.type=="paper"&&(d={paper_id:e.paper_id},r="paper.Order/buy");let o=function(){e._post(r,d,function(i){let a=p+`${i.data.order_id}&order_type=${i.data.order_type}&type=`+e.type;e.gotoPage(a,"reLaunch")})};e.subMessage(e.temlIds,o)}}};function u(e,r,p,d,o,i){return{a:o.productList.image&&o.productList.image.file_path,b:t.t(o.productList.title),c:t.t(o.productList.course_price),d:t.t(o.orderInfo.order_pay_price),e:t.o((...a)=>i.SubmitOrder&&i.SubmitOrder(...a))}}const c=t._export_sfc(s,[["render",u],["__scopeId","data-v-324e7894"],["__file","D:/phpstudy_pro/www3/jjj_edu_small/jjj_edu_app/pages/order/confirm.vue"]]);wx.createPage(c);
