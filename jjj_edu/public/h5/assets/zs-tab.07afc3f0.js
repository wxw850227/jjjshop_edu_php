import{_ as t,o as a,a as e,w as s,a3 as n,b as o,r as c,F as l,j as r,f as u,n as y,e as d,t as i}from"./index-4d017ba3.js";const p=t({props:{data:{type:Array,default:function(){return{type:[]}}},activeName:{type:Number,default:function(){return{type:0}}},customStyle:{type:Object,default:function(){return{type:{}}}}},components:{},data:()=>({}),methods:{changeType(t){this.$emit("chang-tab",t)}}},[["render",function(t,p,f,m,b,k){const v=u;return a(),e(v,{class:"top-tabbar",style:r(f.customStyle)},{default:s((()=>[t.$slots.default?n(t.$slots,"default",{key:0},void 0,!0):(a(!0),o(l,{key:1},c(f.data,(t=>(a(),e(v,{class:y(["tab-item",{active:t.value==f.activeName}]),key:t,onClick:a=>k.changeType(t)},{default:s((()=>[d(i(t.key),1)])),_:2},1032,["class","onClick"])))),128))])),_:3},8,["style"])}],["__scopeId","data-v-f4875a99"]]);export{p as z};
