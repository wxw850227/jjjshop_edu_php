import{E as e,a,q as t,r as l,e as s,d as o,f as i,c as r,l as c,w as d,m as u,n,v as p}from"./element-plus-fe2e4fed.js";import{C as m}from"./course-50688b35.js";import"./qs-c6aa5595.js";import{_ as h}from"./index-68daabb5.js";import{ap as g,o as _,c as b,a as C,P as j,S as f,Q as v,a9 as y,T as w,W as k,$ as z}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const S={class:"product-list"},D={class:"common-seach-wrap"},V={class:"common-level-rail"},x={class:"product-content"},F={class:"table-wrap"},P={class:"product-info"},q={class:"pic"},U={alt:""},L={class:"pagination"};const N=h({components:{},data:()=>({activeName:"sell",activeIndex:"0",loading:!0,pageSize:10,totalDataNumber:0,curPage:1,searchForm:{search:"",category_id:"",is_show:-1,is_top:-1,is_week:-1},tableData:[],categoryList:[],product_count:{}}),created(){this.getData()},methods:{addClick(){this.$router.push({path:"/course/course/add",query:{scene:"add"}})},handleCurrentChange(e){let a=this;a.loading=!0,a.curPage=e,a.getData()},handleSizeChange(e){this.pageSize=e,this.getData()},handleClick(e,a){this.curPage=1,this.getData()},getData(){let e=this,a=e.searchForm;a.page=e.curPage,a.list_rows=e.pageSize,e.loading=!0,m.courseList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data.reverse(),e.categoryList=a.data.category,e.totalDataNumber=a.data.list.total})).catch((a=>{e.loading=!1}))},onSubmit(){this.curPage=1,this.getData()},editClick(e){this.$router.push({path:"/course/course/edit",query:{course_id:e.course_id,scene:"edit"}})},sectionClick(e){this.$router.push({path:"/course/course/detail",query:{course_id:e.course_id}})},catSet(a,t){m.courseState({course_id:t,state:a}).then((a=>{e({message:a.msg,type:"success"})}))},delClick:function(t){let l=this;a.confirm("删除后将移动到回收站，确定删除该记录吗?","提示",{type:"warning"}).then((()=>{m.delCourse({course_id:t.course_id}).then((a=>{e({message:"删除成功",type:"success"}),l.getData()}))}))}}},[["render",function(e,a,m,h,N,$){const E=t,I=l,Q=s,T=o,W=i,A=r,B=c,G=d,H=u,J=n,K=g("auth"),M=g("img-url"),O=p;return _(),b("div",S,[C("div",D,[j(A,{size:"small",inline:!0,model:N.searchForm,class:"demo-form-inline"},{default:f((()=>[j(Q,{label:"课程分类"},{default:f((()=>[j(I,{size:"small",modelValue:N.searchForm.category_id,"onUpdate:modelValue":a[0]||(a[0]=e=>N.searchForm.category_id=e),placeholder:"所有分类"},{default:f((()=>[j(E,{label:"全部",value:"0"}),(_(!0),b(v,null,y(N.categoryList,((e,a)=>(_(),w(E,{key:a,label:e.name,value:e.category_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),j(Q,{label:"课程状态"},{default:f((()=>[j(I,{size:"small",modelValue:N.searchForm.is_show,"onUpdate:modelValue":a[1]||(a[1]=e=>N.searchForm.is_show=e),placeholder:"课程状态"},{default:f((()=>[j(E,{label:"全部",value:-1}),j(E,{label:"显示",value:0}),j(E,{label:"隐藏",value:1})])),_:1},8,["modelValue"])])),_:1}),j(Q,{label:"课程名称"},{default:f((()=>[j(T,{size:"small",modelValue:N.searchForm.search,"onUpdate:modelValue":a[2]||(a[2]=e=>N.searchForm.search=e),placeholder:"请输入课程名称"},null,8,["modelValue"])])),_:1}),j(Q,null,{default:f((()=>[j(W,{size:"small",type:"primary",icon:"Search",onClick:$.onSubmit},{default:f((()=>[k("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),C("div",V,[z((_(),w(W,{size:"small",type:"primary",icon:"Plus",onClick:$.addClick},{default:f((()=>[k("添加课程")])),_:1},8,["onClick"])),[[K,"/course/course/add"]])]),C("div",x,[C("div",F,[z((_(),w(H,{size:"small",data:N.tableData,border:"",style:{width:"100%"}},{default:f((()=>[j(B,{prop:"title",label:"课程名称"}),j(B,{prop:"category.name",label:"课程分类"}),j(B,{prop:"image",label:"课程封面"},{default:f((e=>[C("div",P,[C("div",q,[z(C("img",U,null,512),[[M,e.row.image&&e.row.image.file_path]])])])])),_:1}),j(B,{prop:"real_sales",label:"购买人数"}),j(B,{prop:"is_show",label:"状态"},{default:f((e=>[j(G,{modelValue:e.row.is_show,"onUpdate:modelValue":a=>e.row.is_show=a,"active-value":0,"inactive-value":1,onChange:a=>$.catSet(a,e.row.course_id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),j(B,{prop:"sort",label:"排序"}),j(B,{prop:"create_time",label:"创建时间"}),j(B,{fixed:"right",label:"操作",width:"150"},{default:f((e=>[z((_(),w(W,{onClick:a=>$.editClick(e.row),type:"text",size:"small"},{default:f((()=>[k("编辑")])),_:2},1032,["onClick"])),[[K,"/course/course/edit"]]),j(W,{onClick:a=>$.sectionClick(e.row),type:"text",size:"small"},{default:f((()=>[k("详情")])),_:2},1032,["onClick"]),z((_(),w(W,{onClick:a=>$.delClick(e.row),type:"text",size:"small"},{default:f((()=>[k("删除")])),_:2},1032,["onClick"])),[[K,"/course/course/delete"]])])),_:1})])),_:1},8,["data"])),[[O,N.loading]])])]),C("div",L,[j(J,{onSizeChange:$.handleSizeChange,onCurrentChange:$.handleCurrentChange,background:"","current-page":N.curPage,"page-size":N.pageSize,layout:"total, prev, pager, next, jumper",total:N.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])}]]);export{N as default};
