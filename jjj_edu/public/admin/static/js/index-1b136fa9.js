import{E as e,a as t,q as a,r as s,e as o,d as i,f as l,c as r,l as n,m as c,n as u,v as d}from"./element-plus-fe2e4fed.js";import{Q as p}from"./question-22f139d5.js";import m from"./index-442dc649.js";import{q as h}from"./qs-c6aa5595.js";import{_ as g}from"./index-68daabb5.js";import{ae as _,ap as y,o as C,c as q,a as j,P as b,S as f,Q as k,a9 as v,T as z,W as w,$ as x,X as D,Y as P}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./course-5bb65e85.js";import"./data-8d58e140.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const S={class:"product-list"},F={class:"common-seach-wrap"},U={class:"common-level-rail"},V={class:"product-content"},L={class:"table-wrap"},N=["onClick"],E={class:"blue"},Q={class:"text-ellipsis"},$={class:"pagination"};const R=g({components:{relation:m},data:()=>({isPopUp:!1,question_id:0,activeName:"sell",activeIndex:"0",loading:!0,pageSize:10,totalDataNumber:0,curPage:1,searchForm:{search:"",category_id:"0",question_type:"0"},tableData:[],categoryList:[],product_count:{}}),created(){this.getData()},methods:{addClick(){this.$router.push({path:"/question/question/add",query:{scene:"add"}})},handleCurrentChange(e){let t=this;t.loading=!0,t.curPage=e,t.getData()},handleSizeChange(e){this.pageSize=e,this.getData()},handleClick(e,t){this.curPage=1,this.getData()},onExport:function(){let e=window.location.protocol+"//"+window.location.host;window.location.href=e+"/index.php/shop/question.question/export?"+h.stringify(this.searchForm)},getData(){let e=this,t=e.searchForm;t.page=e.curPage,t.list_rows=e.pageSize,e.loading=!0,p.questionList(t,!0).then((t=>{e.loading=!1,e.tableData=t.data.list.data,e.categoryList=t.data.category,e.totalDataNumber=t.data.list.total})).catch((t=>{e.loading=!1}))},onSubmit(){this.curPage=1,this.getData()},categoryClick(e){this.curPage=1,this.searchForm.category_id=e,this.getData()},editClick(e){this.$router.push({path:"/question/question/edit",query:{question_id:e.question_id,scene:"edit"}})},sectionClick(e){this.isPopUp=!0,this.question_id=e.question_id},closeRelation(){this.isPopUp=!1,this.question_id=0},catSet(t,a){p.questionState({question_id:a,state:t}).then((t=>{e({message:t.msg,type:"success"})}))},topSet(t,a){p.questionTop({question_id:a,state:t}).then((t=>{e({message:t.msg,type:"success"})}))},delClick:function(a){let s=this;t.confirm("确认后将永久删除，确定删除该试题吗?","提示",{type:"warning"}).then((()=>{p.delQs({question_id:a.question_id}).then((t=>{e({message:"删除成功",type:"success"}),s.getData()}))}))}}},[["render",function(e,t,p,m,h,g){const R=a,T=s,B=o,I=i,W=l,X=r,Y=n,A=c,G=u,H=_("relation"),J=y("auth"),K=d;return C(),q("div",S,[j("div",F,[b(X,{size:"small",inline:!0,model:h.searchForm,class:"demo-form-inline"},{default:f((()=>[b(B,{label:"试题分类"},{default:f((()=>[b(T,{size:"small",modelValue:h.searchForm.category_id,"onUpdate:modelValue":t[0]||(t[0]=e=>h.searchForm.category_id=e),placeholder:"所有分类"},{default:f((()=>[b(R,{label:"全部",value:"0"}),(C(!0),q(k,null,v(h.categoryList,((e,t)=>(C(),z(R,{key:t,label:e.name,value:e.category_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(B,{label:"题型"},{default:f((()=>[b(T,{size:"small",modelValue:h.searchForm.question_type,"onUpdate:modelValue":t[1]||(t[1]=e=>h.searchForm.question_type=e),placeholder:"所有分类"},{default:f((()=>[b(R,{label:"全部",value:"0"}),b(R,{label:"单选题",value:"1"}),b(R,{label:"多选题",value:"2"}),b(R,{label:"判断题",value:"3"})])),_:1},8,["modelValue"])])),_:1}),b(B,{label:"试题名称"},{default:f((()=>[b(I,{size:"small",modelValue:h.searchForm.search,"onUpdate:modelValue":t[2]||(t[2]=e=>h.searchForm.search=e),placeholder:"请输入试题名称"},null,8,["modelValue"])])),_:1}),b(B,null,{default:f((()=>[b(W,{size:"small",type:"primary",icon:"Search",onClick:g.onSubmit},{default:f((()=>[w("查询")])),_:1},8,["onClick"])])),_:1}),b(B,null,{default:f((()=>[x((C(),z(W,{size:"small",type:"success",onClick:g.onExport},{default:f((()=>[w("导出")])),_:1},8,["onClick"])),[[J,"/question/question/export"]])])),_:1})])),_:1},8,["model"])]),j("div",U,[x((C(),z(W,{size:"small",type:"primary",icon:"Plus",onClick:g.addClick},{default:f((()=>[w(" 添加试题")])),_:1},8,["onClick"])),[[J,"/question/question/add"]])]),j("div",V,[j("div",L,[x((C(),z(A,{size:"small",data:h.tableData,border:"",style:{width:"100%"}},{default:f((()=>[b(Y,{prop:"category.name",label:"试题分类"},{default:f((e=>[e.row.category.name?(C(),q("div",{key:0,class:"text-ellipsis",onClick:t=>g.categoryClick(e.row.category_id)},[w(D(e.row.category.name),1),j("span",E,"（"+D(e.row.category_num||0)+"）",1)],8,N)):P("",!0)])),_:1}),b(Y,{prop:"title",label:"试题名称"}),b(Y,{prop:"title",label:"题干"},{default:f((e=>[j("div",Q,D(e.row.title),1)])),_:1}),b(Y,{prop:"sort",label:"排序"}),b(Y,{prop:"create_time",label:"创建时间"}),b(Y,{fixed:"right",label:"操作",width:"150"},{default:f((e=>[x((C(),z(W,{onClick:t=>g.editClick(e.row),type:"text",size:"small"},{default:f((()=>[w(" 编辑试题 ")])),_:2},1032,["onClick"])),[[J,"/question/question/edit"]]),b(W,{onClick:t=>g.sectionClick(e.row),type:"text",size:"small"},{default:f((()=>[w("关联知识点")])),_:2},1032,["onClick"]),x((C(),z(W,{onClick:t=>g.delClick(e.row),type:"text",size:"small"},{default:f((()=>[w(" 删除试题")])),_:2},1032,["onClick"])),[[J,"/question/question/delete"]])])),_:1})])),_:1},8,["data"])),[[K,h.loading]])])]),j("div",$,[b(G,{onSizeChange:g.handleSizeChange,onCurrentChange:g.handleCurrentChange,background:"","current-page":h.curPage,"page-size":h.pageSize,layout:"total, prev, pager, next, jumper",total:h.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),b(H,{isPopUp:h.isPopUp,question_id:h.question_id,onCloseDialog:g.closeRelation},null,8,["isPopUp","question_id","onCloseDialog"])])}]]);export{R as default};
