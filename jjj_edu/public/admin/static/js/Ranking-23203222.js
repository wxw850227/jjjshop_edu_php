import{t as a,u as s}from"./element-plus-fe2e4fed.js";import{_ as e}from"./index-2e57a1f5.js";import{ap as t,o as i,c as l,a as o,P as m,S as r,Q as c,a9 as d,X as n,$ as p,Y as u,W as j,bh as v,bf as h}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const k={data:()=>({activeName:"sale",listData:[]}),inject:["dataModel"],created(){this.listData=this.dataModel.productSaleRanking},mounted(){},methods:{handleClick(){"sale"==this.activeName?this.listData=this.dataModel.productSaleRanking:"view"==this.activeName?this.listData=this.dataModel.productViewRanking:"refund"==this.activeName&&(this.listData=this.dataModel.productRefundRanking)}}},b={class:"right-box d-s-s d-c"},f=(a=>(v("data-v-69062c5a"),a=a(),h(),a))((()=>o("div",{class:"lh30 f16 tl"},"商品排行榜",-1))),y={class:"ww100 mt10"},g={class:"list ww100"},w={key:0},N={class:"key-box"},_={key:0,alt:"",class:"ml10"},x={key:1,alt:"",class:"ml10"},D={key:2,alt:"",class:"ml10"},M={class:"text-ellipsis-2 flex-1 ml10"},R={class:"gray9 tr",style:{width:"80px"}},T={key:1,class:"tc pt30"};const C=e(k,[["render",function(e,v,h,k,C,P){const V=a,O=s,S=t("img-url");return i(),l("div",b,[f,o("div",y,[m(O,{modelValue:C.activeName,"onUpdate:modelValue":v[0]||(v[0]=a=>C.activeName=a),type:"card",onTabClick:P.handleClick},{default:r((()=>[m(V,{label:"销量TOP10",name:"sale"}),m(V,{label:"浏览TOP10",name:"view"}),m(V,{label:"退款TOP10",name:"refund"})])),_:1},8,["modelValue","onTabClick"])]),o("div",g,[C.listData.length>0?(i(),l("ul",w,[(i(!0),l(c,null,d(C.listData,((a,s)=>(i(),l("li",{key:s,class:"d-s-c p-6-0 border-b-d"},[o("span",N,n(s+1),1),o("span",null,["sale"==C.activeName?p((i(),l("img",_,null,512)),[[S,e.image_path]]):u("",!0),"refund"==C.activeName?p((i(),l("img",x,null,512)),[[S,e.image_path]]):u("",!0),"view"==C.activeName?p((i(),l("img",D,null,512)),[[S,a.image[0].file_path]]):u("",!0)]),o("span",M,n(a.product_name),1),o("span",R,["sale"==C.activeName?(i(),l(c,{key:0},[j(" 销量："+n(a.total_sales_num),1)],64)):u("",!0),"view"==C.activeName?(i(),l(c,{key:1},[j(" 浏览："+n(a.view_times),1)],64)):u("",!0),"refund"==C.activeName?(i(),l(c,{key:2},[j(" 退款："+n(a.refund_count),1)],64)):u("",!0)])])))),128))])):(i(),l("div",T,"暂无上榜记录"))])])}],["__scopeId","data-v-69062c5a"]]);export{C as default};
