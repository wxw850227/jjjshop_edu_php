import{i as e,s as a,e as t,F as o,d as r,y as l,f as s,c as i}from"./element-plus-fe2e4fed.js";import{D as c}from"./data-97822b17.js";import{d as u}from"./vuedraggable-cabcff94.js";import{ae as d,ap as m,o as p,c as n,a as g,X as h,P as y,S as j,W as f,Q as b,T as _,Y as C,$ as I,a1 as v}from"./@vue-0361ad4a.js";import{_ as V}from"./index-2e57a1f5.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-3c8001f5.js";import"./sortablejs-c079517e.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const k={class:"common-form"},w={class:"d-s-c f-w"},x={class:"item"},L={class:"delete-box"},A={alt:""};const D=V({components:{draggable:u},data:()=>({loading:!0,CategoryList:[],currCategory:[]}),props:["curItem","selectedIndex","opts"],created(){this.getData()},watch:{selectedIndex:function(e,a){this.currCategory=this.currCategoryAuto(this.CategoryList)}},methods:{getData(){let e=this;c.catePaperList({page_id:e.page_id,paper_type:1},!0).then((a=>{e.CategoryList=a.data.list,e.currCategory=e.currCategoryAuto(a.data.list),e.loading=!1})).catch((a=>{e.loading=!1}))},currCategoryAuto(e){let a=[];for(let t=0;t<e.length;t++){let o=e[t];if(o.category_id==this.curItem.params.auto.category){a.push(o.category_id);break}if("[object Array]"==Object.prototype.toString.call(o.child)&&o.child.length>0)for(let e=0;e<o.child.length;e++)if(o.child[e].category_id==this.curItem.params.auto.category){a.push(o.category_id),a.push(o.child[e].category_id);break}}return a},check(e,a){let t=e?1:0;this.curItem.style.show[a]=t},changeCategory(e){if(e.length>0){let e=this.$refs.cascader.getCheckedNodes();this.curItem.params.auto.category=e[0].data.category_id}else this.curItem.params.auto.category=0}}},[["render",function(c,u,V,D,S,U){const $=e,z=a,N=t,P=o,F=r,T=d("CircleCloseFilled"),q=l,E=d("draggable"),O=s,Q=i,W=m("img-url");return p(),n("div",null,[g("div",k,[g("span",null,h(V.curItem.name),1)]),y(Q,{size:"small",model:V.curItem,"label-width":"100px"},{default:j((()=>[y(N,{label:"练习来源："},{default:j((()=>[y(z,{modelValue:V.curItem.params.source,"onUpdate:modelValue":u[0]||(u[0]=e=>V.curItem.params.source=e)},{default:j((()=>[y($,{label:"auto"},{default:j((()=>[f("自动获取")])),_:1}),y($,{label:"choice"},{default:j((()=>[f("手动选择")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"auto"==V.curItem.params.source?(p(),n(b,{key:0},[y(N,{label:"练习分类："},{default:j((()=>[S.CategoryList.length>0?(p(),_(P,{key:0,class:"ww100",modelValue:S.currCategory,"onUpdate:modelValue":u[1]||(u[1]=e=>S.currCategory=e),ref:"cascader",options:S.CategoryList,props:{checkStrictly:!0,children:"child",value:"category_id",label:"name"},onChange:U.changeCategory,clearable:""},null,8,["modelValue","options","onChange"])):C("",!0)])),_:1}),y(N,{label:"练习排序："},{default:j((()=>[y(z,{modelValue:V.curItem.params.auto.productSort,"onUpdate:modelValue":u[2]||(u[2]=e=>V.curItem.params.auto.productSort=e)},{default:j((()=>[y($,{label:"all"},{default:j((()=>[f("综合")])),_:1}),y($,{label:"sales"},{default:j((()=>[f("销量")])),_:1})])),_:1},8,["modelValue"])])),_:1}),y(N,{label:"显示数量："},{default:j((()=>[y(F,{modelValue:V.curItem.params.auto.showNum,"onUpdate:modelValue":u[3]||(u[3]=e=>V.curItem.params.auto.showNum=e),class:"w-auto"},null,8,["modelValue"])])),_:1})],64)):C("",!0),"choice"==V.curItem.params.source?(p(),_(N,{key:1,label:"练习列表："},{default:j((()=>[g("div",null,[y(E,{modelValue:V.curItem.data,"onUpdate:modelValue":u[4]||(u[4]=e=>V.curItem.data=e),options:{draggable:".item",animation:500},class:"choice-product-list"},{item:j((({element:e,index:a})=>[g("div",w,[g("div",x,[g("div",L,[y(q,{onClick:e=>c.$parent.onEditorDeleleData(a,V.selectedIndex)},{default:j((()=>[y(T)])),_:2},1032,["onClick"])]),I(g("img",A,null,512),[[W,e.image]])])])])),_:1},8,["modelValue","options"])]),g("div",null,[y(O,{icon:"Plus",onClick:u[5]||(u[5]=v((e=>c.$parent.openTrain(V.curItem.data,!0)),["stop"]))},{default:j((()=>[f("选择练习")])),_:1})])])),_:1})):C("",!0)])),_:1},8,["model"])])}]]);export{D as default};
