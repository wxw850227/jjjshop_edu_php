import{_ as e,o as t,a,w as o,j as s,p as d,n as p,e as l,t as u,a4 as i,f as n}from"./index-db1fe3c3.js";const f=e({props:{show:{type:Boolean,default:!1},type:{type:String,default:"middle"},width:{type:Number,default:600},heigth:{type:Number,default:800},padding:{type:Number,default:30},backgroundColor:{type:String,default:"#ffffff"},boxShadow:{type:String,default:"0 0 30upx rgba(0, 0, 0, .1)"},msg:{type:String,default:""}},data(){let e=0;return e=0,{offsetTop:0}},methods:{hide:function(){this.$emit("hidePopup")}}},[["render",function(e,f,r,h,g,y){const c=n;return t(),a(c,null,{default:o((()=>[r.show?(t(),a(c,{key:0,class:"uni-mask",style:s({top:g.offsetTop+"px"}),onClick:y.hide},null,8,["style","onClick"])):d("",!0),r.show?(t(),a(c,{key:1,class:p(["uni-popup","uni-popup-"+r.type]),style:s("width:"+r.width+"rpx; heigth:"+r.heigth+"rpx;padding:"+r.padding+"rpx;background-color:"+r.backgroundColor+";box-shadow:"+r.boxShadow+";")},{default:o((()=>[""!=r.msg?(t(),a(c,{key:0,class:"popup-head"},{default:o((()=>[l(u(r.msg),1)])),_:1})):d("",!0),i(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])):d("",!0)])),_:3})}],["__scopeId","data-v-92fd5dbe"]]);export{f as P};
