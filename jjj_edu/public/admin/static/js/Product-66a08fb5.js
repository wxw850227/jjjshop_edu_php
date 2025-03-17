import{i as e,s as t,e as a,F as o,d as s,y as r,f as l,c as i}from"./element-plus-fe2e4fed.js";import{C as c}from"./course-ddb6da57.js";import{d as u}from"./vuedraggable-cabcff94.js";import{ae as d,ap as m,o as p,c as n,a as h,X as g,P as y,S as j,W as f,Q as b,T as I,Y as w,$ as _,a1 as C}from"./@vue-0361ad4a.js";import{_ as S}from"./index-2e57a1f5.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-3c8001f5.js";import"./sortablejs-c079517e.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const v={class:"common-form"},V={class:"choice-product-list"},k={class:"item"},P={class:"delete-box"},x={alt:""};const L=S({components:{draggable:u},data:()=>({loading:!0,CategoryList:[],currCategory:[],productNameShow:!1,productPriceShow:!1,linePriceShow:!1,sellingPointShow:!1,productSalesShow:!1}),props:["curItem","selectedIndex","opts"],created(){this.getData(),this.productNameShow=1==this.curItem.style.show.productName,this.productPriceShow=1==this.curItem.style.show.productPrice,this.linePriceShow=1==this.curItem.style.show.linePrice,this.sellingPointShow=1==this.curItem.style.show.sellingPoint,this.productSalesShow=1==this.curItem.style.show.productSales},watch:{selectedIndex:function(e,t){this.currCategory=this.currCategoryAuto(this.CategoryList)}},methods:{getData(){let e=this;c.catList({page_id:e.page_id},!0).then((t=>{e.CategoryList=t.data.list,e.currCategory=e.currCategoryAuto(t.data.list),e.loading=!1})).catch((t=>{e.loading=!1}))},currCategoryAuto(e){let t=[];for(let a=0;a<e.length;a++){let o=e[a];if(o.category_id==this.curItem.params.auto.category){t.push(o.category_id);break}if("[object Array]"==Object.prototype.toString.call(o.child)&&o.child.length>0)for(let e=0;e<o.child.length;e++)if(o.child[e].category_id==this.curItem.params.auto.category){t.push(o.category_id),t.push(o.child[e].category_id);break}}return t},check(e,t){let a=e?1:0;this.curItem.style.show[t]=a},changeCategory(e){if(e.length>0){let e=this.$refs.cascader.getCheckedNodes();this.curItem.params.auto.category=e[0].data.category_id}else this.curItem.params.auto.category=0}}},[["render",function(c,u,S,L,N,A){const U=e,D=t,$=a,z=o,F=s,q=d("CircleCloseFilled"),E=r,O=d("draggable"),Q=l,T=i,W=m("img-url");return p(),n("div",null,[h("div",v,[h("span",null,g(S.curItem.name),1)]),y(T,{size:"small",model:S.curItem,"label-width":"100px"},{default:j((()=>[y($,{label:"课程来源："},{default:j((()=>[y(D,{modelValue:S.curItem.params.source,"onUpdate:modelValue":u[0]||(u[0]=e=>S.curItem.params.source=e)},{default:j((()=>[y(U,{label:"auto"},{default:j((()=>[f("自动获取")])),_:1}),y(U,{label:"choice"},{default:j((()=>[f("手动选择")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"auto"==S.curItem.params.source?(p(),n(b,{key:0},[y($,{label:"课程分类："},{default:j((()=>[N.CategoryList.length>0?(p(),I(z,{key:0,class:"ww100",modelValue:N.currCategory,"onUpdate:modelValue":u[1]||(u[1]=e=>N.currCategory=e),ref:"cascader",options:N.CategoryList,props:{checkStrictly:!0,children:"child",value:"category_id",label:"name"},onChange:A.changeCategory,clearable:""},null,8,["modelValue","options","onChange"])):w("",!0)])),_:1}),y($,{label:"课程排序："},{default:j((()=>[y(D,{modelValue:S.curItem.params.auto.productSort,"onUpdate:modelValue":u[2]||(u[2]=e=>S.curItem.params.auto.productSort=e)},{default:j((()=>[y(U,{label:"all"},{default:j((()=>[f("综合")])),_:1}),y(U,{label:"sales"},{default:j((()=>[f("销量")])),_:1}),y(U,{label:"price"},{default:j((()=>[f("价格")])),_:1})])),_:1},8,["modelValue"])])),_:1}),y($,{label:"显示数量："},{default:j((()=>[y(F,{modelValue:S.curItem.params.auto.showNum,"onUpdate:modelValue":u[3]||(u[3]=e=>S.curItem.params.auto.showNum=e),class:"w-auto"},null,8,["modelValue"])])),_:1})],64)):w("",!0),"choice"==S.curItem.params.source?(p(),I($,{key:1,label:"课程列表："},{default:j((()=>[h("div",V,[y(O,{modelValue:S.curItem.data,"onUpdate:modelValue":u[4]||(u[4]=e=>S.curItem.data=e),options:{draggable:".item",animation:500}},{item:j((({element:e,index:t})=>[h("div",k,[h("div",P,[y(E,{onClick:e=>c.$parent.onEditorDeleleData(t,S.selectedIndex)},{default:j((()=>[y(q)])),_:2},1032,["onClick"])]),_(h("img",x,null,512),[[W,e.image]])])])),_:1},8,["modelValue","options"])]),h("div",null,[y(Q,{icon:"Plus",onClick:u[5]||(u[5]=C((e=>c.$parent.openProduct(S.curItem.data,!0)),["stop"]))},{default:j((()=>[f("选择产品")])),_:1})])])),_:1})):w("",!0)])),_:1},8,["model"])])}]]);export{L as default};
