import{r as s}from"./index-68daabb5.js";let e={setSettings:(e,t)=>s._post("/shop/user.balance/setting",e,t),getSettings:(e,t)=>s._get("/shop/user.balance/setting",e,t),getBalanceLog:(e,t)=>s._get("/shop/user.balance/log",e,t),listPlan:(e,t)=>s._post("/shop/user.plan/index",e,t),addPlan:(e,t)=>s._get("/shop/user.plan/add",e,t),editPlan:(e,t)=>s._post("/shop/user.plan/edit",e,t),deletePlan:(e,t)=>s._get("/shop/user.plan/delete",e,t),log:(e,t)=>s._post("/shop/user.plan/log",e,t),getCashSetting:(e,t)=>s._get("/shop/user.cash/setting",e,t),cashSetting:(e,t)=>s._post("/shop/user.cash/setting",e,t),cashList:(e,t)=>s._post("/shop/user.cash/index",e,t),cashAudit:(e,t)=>s._post("/shop/user.cash/audit",e,t),cashMoney:(e,t)=>s._post("/shop/user.cash/money",e,t),cashWxpay:(e,t)=>s._post("/shop/user.cash/wxpay",e,t)};export{e as B};
