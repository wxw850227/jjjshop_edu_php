import{r as e}from"./index-68daabb5.js";let r={orderlist:(r,o)=>e._post("/shop/order.order/index",r,o),orderdetail:(r,o)=>e._post("/shop/order.order/detail",r,o),orderrefund:(r,o)=>e._post("/shop/order.refund/index",r,o),delivery:(r,o)=>e._post("/shop/order.order/delivery",r,o),confirm:(r,o)=>e._post("/shop/order.Operate/confirmCancel",r,o),refundDetail:(r,o)=>e._get("/shop/order.refund/detail",r,o),Approval:(r,o)=>e._get("/shop/order.refund/audit",r,o),receipt:(r,o)=>e._post("/shop/order.refund/receipt",r,o),extract:(r,o)=>e._post("/shop/order.operate/extract",r,o),updatePrice:(r,o)=>e._post("/shop/order.order/updatePrice",r,o),orderplaterefund:(r,o)=>e._post("/shop/order.platerefund/index",r,o),refundplateDetail:(r,o)=>e._get("/shop/order.platerefund/detail",r,o),plateApproval:(r,o)=>e._get("/shop/order.platerefund/audit",r,o),queryLogistics:(r,o)=>e._post("/shop/order.order/express",r,o),updateAddress:(r,o)=>e._post("/shop/order.order/updateAddress",r,o)};export{r as O};
