import{h as a,g as s,l as t,m as e,f as l,v as i}from"./element-plus-fe2e4fed.js";import{O as r}from"./order-c4d9238a.js";import{_ as p}from"./index-49a7d7a3.js";import{ap as o,$ as d,o as c,c as n,a as m,P as u,S as _,W as v,X as y,Y as f}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const j={components:{},data:()=>({active:0,loading:!0,detail:{pay_status:[],pay_type:[],delivery_type:[],user:{},address:[],product:[],order_status:[]},open_add:!1,pageSize:20,totalDataNumber:0,curPage:1,order:{},userModel:{},create_time:""}),created(){this.getParams()},methods:{next(){this.active++>4&&(this.active=0)},getParams(){let a=this;const s=this.$route.query.order_id;r.orderdetail({order_id:s},!0).then((s=>{a.loading=!1,a.detail=s.data.detail})).catch((s=>{a.loading=!1}))},cancelFunc(){this.$router.back(-1)}}},b={class:"pb50"},g={class:"product-content"},h=m("div",{class:"common-form"},"基本信息",-1),w={class:"table-wrap"},x={class:"pb16"},k=m("span",{class:"gray9"},"订单号：",-1),z={class:"pb16"},P=m("span",{class:"gray9"},"买家：",-1),$={class:"pb16"},q=m("span",{class:"gray9"},"订单金额 (元)：",-1),C={key:0,class:"pb16"},D=m("span",{class:"gray9"},"积分抵扣 (元)：",-1),F={class:"pb16"},N=m("span",{class:"gray9"},"实付款金额 (元)：",-1),S={class:"pb16"},I=m("span",{class:"gray9"},"支付方式：",-1),M={class:"pb16"},O=m("span",{class:"gray9"},"交易状态：",-1),W=m("div",{class:"common-form mt16"},"商品信息",-1),X={class:"table-wrap"},Y={class:"product-info"},A={class:"pic"},B={class:"info"},E={class:"name"},G={class:"price"},H={class:"gray6"},J={key:0,class:"table-wrap"},K=m("div",{class:"common-form mt16"},"付款信息",-1),L={class:"table-wrap"},Q={class:"pb16"},R=m("span",{class:"gray9"},"应付款金额：",-1),T={class:"pb16"},U=m("span",{class:"gray9"},"支付方式：",-1),V={class:"pb16"},Z=m("span",{class:"gray9"},"支付流水号：",-1),aa={class:"pb16"},sa=m("span",{class:"gray9"},"付款状态：",-1),ta={class:"pb16"},ea=m("span",{class:"gray9"},"付款时间：",-1),la={class:"common-button-wrapper"};const ia=p(j,[["render",function(r,p,j,ia,ra,pa){const oa=a,da=s,ca=t,na=e,ma=l,ua=o("img-url"),_a=i;return d((c(),n("div",b,[m("div",g,[h,m("div",w,[u(da,null,{default:_((()=>[u(oa,{span:5},{default:_((()=>[m("div",x,[k,v(" "+y(ra.detail.order_no),1)])])),_:1}),u(oa,{span:5},{default:_((()=>[m("div",z,[P,v(" "+y(ra.detail.user.nickName)+" ",1),m("span",null,"用户ID：("+y(ra.detail.user.user_id)+")",1)])])),_:1}),u(oa,{span:5},{default:_((()=>[m("div",$,[q,v(" "+y(ra.detail.order_price),1)])])),_:1}),u(oa,{span:5},{default:_((()=>[ra.detail.points_money>0?(c(),n("div",C,[D,v(" "+y(ra.detail.points_money),1)])):f("",!0)])),_:1}),u(oa,{span:5},{default:_((()=>[m("div",F,[N,v(" "+y(ra.detail.pay_price),1)])])),_:1}),u(oa,{span:5},{default:_((()=>[m("div",S,[I,v(" "+y(ra.detail.pay_type.text),1)])])),_:1}),u(oa,{span:5},{default:_((()=>[m("div",M,[O,v(" "+y(ra.detail.order_status.text),1)])])),_:1})])),_:1})]),W,m("div",X,[u(na,{size:"small",data:ra.detail.product,border:"",style:{width:"100%"}},{default:_((()=>[u(ca,{prop:"product_name",label:"商品",width:"400"},{default:_((a=>[m("div",Y,[m("div",A,[d(m("img",null,null,512),[[ua,a.row.image.file_path]])]),m("div",B,[m("div",E,y(a.row.title),1),m("div",G,[m("span",H,"￥ "+y(a.row.product_price),1)])])])])),_:1}),u(ca,{prop:"total_num",label:"购买数量"},{default:_((a=>[m("p",null,"x "+y(a.row.total_num),1)])),_:1}),u(ca,{prop:"total_price",label:"商品总价(元)"},{default:_((a=>[m("p",null,"￥ "+y(a.row.total_price),1)])),_:1})])),_:1},8,["data"])]),20==ra.detail.pay_status.value?(c(),n("div",J,[K,m("div",L,[u(da,null,{default:_((()=>[u(oa,{span:5},{default:_((()=>[m("div",Q,[R,v(" "+y(ra.detail.pay_price),1)])])),_:1}),u(oa,{span:5},{default:_((()=>[m("div",T,[U,v(" "+y(ra.detail.pay_type.text),1)])])),_:1}),u(oa,{span:5},{default:_((()=>[m("div",V,[Z,v(" "+y(ra.detail.transaction_id),1)])])),_:1}),u(oa,{span:5},{default:_((()=>[m("div",aa,[sa,v(" "+y(ra.detail.pay_status.text),1)])])),_:1}),u(oa,{span:5},{default:_((()=>[m("div",ta,[ea,v(" "+y(ra.detail.pay_time_text),1)])])),_:1})])),_:1})])])):f("",!0)]),m("div",la,[u(ma,{size:"small",type:"info",onClick:pa.cancelFunc},{default:_((()=>[v("返回上一页")])),_:1},8,["onClick"])])])),[[_a,ra.loading]])}]]);export{ia as default};
