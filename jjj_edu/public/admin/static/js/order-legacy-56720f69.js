System.register(["./index-legacy-2f547dc0.js"],(function(r,e){"use strict";var t;return{setters:[function(r){t=r.r}],execute:function(){r("O",{orderlist:function(r,e){return t._post("/shop/order.order/index",r,e)},orderdetail:function(r,e){return t._post("/shop/order.order/detail",r,e)},orderrefund:function(r,e){return t._post("/shop/order.refund/index",r,e)},delivery:function(r,e){return t._post("/shop/order.order/delivery",r,e)},confirm:function(r,e){return t._post("/shop/order.Operate/confirmCancel",r,e)},refundDetail:function(r,e){return t._get("/shop/order.refund/detail",r,e)},Approval:function(r,e){return t._get("/shop/order.refund/audit",r,e)},receipt:function(r,e){return t._post("/shop/order.refund/receipt",r,e)},extract:function(r,e){return t._post("/shop/order.operate/extract",r,e)},updatePrice:function(r,e){return t._post("/shop/order.order/updatePrice",r,e)},orderplaterefund:function(r,e){return t._post("/shop/order.platerefund/index",r,e)},refundplateDetail:function(r,e){return t._get("/shop/order.platerefund/detail",r,e)},plateApproval:function(r,e){return t._get("/shop/order.platerefund/audit",r,e)},queryLogistics:function(r,e){return t._post("/shop/order.order/express",r,e)},updateAddress:function(r,e){return t._post("/shop/order.order/updateAddress",r,e)}})}}}));
