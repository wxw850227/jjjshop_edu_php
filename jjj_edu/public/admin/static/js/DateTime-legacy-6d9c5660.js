System.register(["./index-legacy-325b1913.js"],(function(t,e){"use strict";var s;return{setters:[function(t){s=t.r}],execute:function(){t("f",(function(t,e){var s=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",r=(t.getDate()<10?"0"+t.getDate():t.getDate())+" ",o=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",c=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",u=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return"".concat(s).concat(n).concat(r).concat(o).concat(c).concat(u)})),t("S",{getOrderTotal:function(t,e){return s._post("/shop/statistics.sales/index",t,e)},getOrderByDate:function(t,e){return s._post("/shop/statistics.sales/order",t,e)},getProductByDate:function(t,e){return s._post("/shop/statistics.sales/product",t,e)},getUserTotal:function(t,e){return s._post("/shop/statistics.user/index",t,e)},getUserScale:function(t,e){return s._post("/shop/statistics.user/scale",t,e)},getNewUser:function(t,e){return s._post("/shop/statistics.user/new_user",t,e)},getPayUser:function(t,e){return s._post("/shop/statistics.user/pay_user",t,e)}})}}}));
