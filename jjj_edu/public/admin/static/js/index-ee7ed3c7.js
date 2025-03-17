import{E as e,a,d as t,e as s,f as i,c as o,l,w as r,m as n,n as c,v as d}from"./element-plus-fe2e4fed.js";import{C as p}from"./course-51f18a14.js";import{_ as u}from"./index-49a7d7a3.js";import{ap as m,o as h,c as g,a as j,P as _,S as C,W as b,$ as f,T as y,X as w}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const z={class:"product-list"},v={class:"common-seach-wrap"},S={class:"product-content"},k={class:"table-wrap"},D={class:"pagination"};const x=u({components:{},data:()=>({loading:!0,pageSize:10,totalDataNumber:0,curPage:1,searchForm:{search:"",category_id:""},tableData:[],categoryList:[]}),props:["course_id"],mounted(){this.getData()},methods:{addClick(){this.$router.push({path:"/course/section/add",query:{course_id:this.course_id,scene:"add"}})},handleCurrentChange(e){let a=this;a.loading=!0,a.curPage=e,a.getData()},handleSizeChange(e){this.pageSize=e,this.getData()},handleClick(e,a){this.curPage=1,this.getData()},getData(){let e=this,a=e.searchForm;a.page=e.curPage,a.course_id=e.course_id,a.list_rows=e.pageSize,e.loading=!0,p.sectionList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.categoryList=a.data.category,e.totalDataNumber=a.data.list.total})).catch((a=>{e.loading=!1}))},onSubmit(){this.curPage=1,this.getData()},editClick(e){this.$router.push({path:"/course/section/edit",query:{section_id:e.section_id,course_id:this.course_id,scene:"edit"}})},catSet(a,t){p.sectionState({section_id:t,state:a}).then((a=>{e({message:a.msg,type:"success"})}))},delClick:function(t){let s=this;a.confirm("删除后将移动到回收站，确定删除该记录吗?","提示",{type:"warning"}).then((()=>{p.delSection({section_id:t.section_id}).then((a=>{e({message:"删除成功",type:"success"}),s.getData()}))}))}}},[["render",function(e,a,p,u,x,P){const V=t,F=s,q=i,L=o,N=l,U=r,$=n,E=c,T=m("auth"),W=d;return h(),g("div",z,[j("div",v,[_(L,{size:"small",inline:!0,model:x.searchForm,class:"demo-form-inline"},{default:C((()=>[_(F,{label:"课时名称"},{default:C((()=>[_(V,{size:"small",modelValue:x.searchForm.search,"onUpdate:modelValue":a[0]||(a[0]=e=>x.searchForm.search=e),placeholder:"请输入课时名称"},null,8,["modelValue"])])),_:1}),_(F,null,{default:C((()=>[_(q,{size:"small",type:"primary",icon:"Search",onClick:P.onSubmit},{default:C((()=>[b("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),j("div",S,[j("div",k,[f((h(),y($,{size:"small",data:x.tableData,border:"",style:{width:"100%"}},{default:C((()=>[_(N,{prop:"title",label:"课时名称"}),_(N,{prop:"is_see",label:"试看"},{default:C((e=>[b(w(0===e.row.is_see?"否":"是"),1)])),_:1}),_(N,{prop:"play_count",label:"观看人数"}),_(N,{prop:"is_show",label:"状态"},{default:C((e=>[_(U,{modelValue:e.row.is_show,"onUpdate:modelValue":a=>e.row.is_show=a,"active-value":0,"inactive-value":1,onChange:a=>P.catSet(a,e.row.section_id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),_(N,{prop:"sort",label:"排序"}),_(N,{fixed:"right",label:"操作",width:"120"},{default:C((e=>[f((h(),y(q,{onClick:a=>P.editClick(e.row),type:"text",size:"small"},{default:C((()=>[b("编辑 ")])),_:2},1032,["onClick"])),[[T,"/course/section/edit"]]),f((h(),y(q,{onClick:a=>P.delClick(e.row),type:"text",size:"small"},{default:C((()=>[b("删除 ")])),_:2},1032,["onClick"])),[[T,"/course/section/delete"]])])),_:1})])),_:1},8,["data"])),[[W,x.loading]])])]),j("div",D,[_(E,{onSizeChange:P.handleSizeChange,onCurrentChange:P.handleCurrentChange,background:"","current-page":x.curPage,"page-size":x.pageSize,layout:"total, prev, pager, next, jumper",total:x.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])}]]);export{x as default};
