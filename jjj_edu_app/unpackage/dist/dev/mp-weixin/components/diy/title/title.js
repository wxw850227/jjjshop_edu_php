"use strict";const e=require("../../../common/vendor.js"),o={data(){return{}},props:["itemData"],created(){},methods:{gotoPages(t){if(t&&t.params&&t.params.linkUrl){const i=t.params.linkUrl;this.gotoPage(i)}}}};Array||e.resolveComponent("u-icon")();const m=()=>"../../../uni_modules/uview-plus/components/u-icon/u-icon.js";Math||m();function c(t,i,a,r,_,n){return e.e({a:a.itemData.params.show_icon=="yes"},a.itemData.params.show_icon=="yes"?{b:a.itemData.params.icon,c:a.itemData.style.background}:{},{d:e.t(a.itemData.params.title),e:a.itemData.style.background,f:a.itemData.style.textColor,g:a.itemData.params&&a.itemData.params.linkUrl},a.itemData.params&&a.itemData.params.linkUrl?{h:e.p({width:"40rpx",height:"40rpx",color:"#999999",name:"arrow-right"}),i:e.o(l=>n.gotoPages(a.itemData))}:{},{j:a.itemData.style.paddingTop+"px 10px",k:a.itemData.style.background})}const s=e._export_sfc(o,[["render",c],["__scopeId","data-v-46b29ff4"],["__file","D:/phpstudy_pro/www3/jjj_edu_small/jjj_edu_app/components/diy/title/title.vue"]]);wx.createComponent(s);
