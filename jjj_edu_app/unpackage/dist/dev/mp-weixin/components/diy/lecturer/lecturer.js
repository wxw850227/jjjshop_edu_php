"use strict";const e=require("../../../common/vendor.js"),_={components:{},data(){return{}},props:["itemData"],created(){},methods:{scroll(o){},gotoDetail(o){let r="/pages/knowledge/lecturer/detail?lecturer_id="+o;this.gotoPage(r)}}};function d(o,r,n,u,i,s){return{a:e.f(n.itemData.data,(a,t,l)=>({a:e.t(t>9?t+1:"0"+(t+1)),b:a.image,c:e.t(a.name),d:e.f(a.star,(c,m,f)=>({a:c})),e:t,f:e.o(c=>s.gotoDetail(a.lecturer_id),t)}))}}const p=e._export_sfc(_,[["render",d],["__scopeId","data-v-be0fa7bd"],["__file","D:/phpstudy_pro/www3/jjj_edu_small/jjj_edu_app/components/diy/lecturer/lecturer.vue"]]);wx.createComponent(p);
