import{a as t,E as e,f as a,l as i,m as s,n as l,v as r}from"./element-plus-fe2e4fed.js";import{A as o}from"./article-af9d88c9.js";import{_ as p}from"./index-49a7d7a3.js";import{ap as n,o as c,c as d,a as m,P as u,S as g,W as h,$ as _,T as b,Y as j,X as y}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const w={class:"common-level-rail"},C={class:"table-wrap"},f={key:0,class:"pic"},v={width:30,height:30},z=["title"],x={key:0,class:"green"},T={key:1,class:"gray"},k={class:"pagination"};const D=p({components:{},data:()=>({categoryData:[],tableData:[],open_add:!1,open_edit:!1,userModel:{},commentData:[],loading:!0,pageSize:20,totalDataNumber:0,curPage:1}),created(){this.getTableList()},methods:{getTableList(){let t=this,e={};e.page=t.curPage,e.list_rows=t.pageSize,o.articlelist(e,!0).then((e=>{t.loading=!1,t.tableData=e.data.list.data,t.totalDataNumber=e.data.list.total})).catch((e=>{t.loading=!1}))},addArticle(){this.$router.push({path:"/plus/article/article/Add"})},editArticle(t){let e=t.article_id;this.$router.push({path:"/plus/article/article/Edit",query:{article_id:e}})},handleCurrentChange(t){let e=this;e.curPage=t,e.loading=!0,e.getTableList()},handleSizeChange(t){this.curPage=1,this.pageSize=t,this.getTableList()},deleteArticle(a){let i=this;t.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{i.loading=!0,o.deleteArticle({article_id:a.article_id},!0).then((t=>{e({message:t.msg,type:"success"}),i.loading=!1,i.getTableList()})).catch((t=>{}))})).catch((()=>{}))},deleteCategory(a){let i=this;t.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{o.deleteCategory({category_id:a.category_id},!0).then((t=>{e({message:t.msg,type:"success"}),i.getTableList()})).catch((t=>{}))})).catch((()=>{e({type:"info",message:"已取消删除"})}))},handleClick(t,e){},addCategory(){this.open_add=!0},editCategory(t){this.userModel=t,this.open_edit=!0},closeDialogFunc(t,e){"add"==e&&(this.open_add=t.openDialog,"success"==t.type&&this.getTableList()),"edit"==e&&(this.open_edit=t.openDialog,"success"==t.type&&this.getTableList())}}},[["render",function(t,e,o,p,D,A){const S=a,L=i,P=s,B=l,N=n("img-url"),$=r;return c(),d("div",null,[m("div",w,[u(S,{size:"small",type:"primary",icon:"Plus",onClick:A.addArticle},{default:g((()=>[h("添加文章")])),_:1},8,["onClick"])]),m("div",C,[_((c(),b(P,{data:D.tableData,style:{width:"100%"}},{default:g((()=>[u(L,{prop:"article_id",label:"文章ID",width:"60"}),u(L,{prop:"address",label:"封面",width:"50"},{default:g((t=>[t.row.image?(c(),d("div",f,[_(m("img",v,null,512),[[N,t.row.image.file_path]])])):j("",!0)])),_:1}),u(L,{prop:"article_title",label:"文章标题"},{default:g((t=>[m("div",{class:"text-ellipsis",title:t.row.article_title},y(t.row.article_title),9,z)])),_:1}),u(L,{prop:"category.name",label:"文章分类",width:"120"}),u(L,{prop:"virtual_views",label:"实际阅读量",width:"100"}),u(L,{prop:"article_sort",label:"文章排序",width:"100"}),u(L,{prop:"article_status",label:"状态",width:"100"},{default:g((t=>[1==t.row.article_status?(c(),d("span",x,"显示")):j("",!0),0==t.row.article_status?(c(),d("span",T,"隐藏")):j("",!0)])),_:1}),u(L,{prop:"create_time",label:"添加时间",width:"140"}),u(L,{prop:"update_time",label:"更新时间",width:"140"}),u(L,{prop:"name",label:"操作",width:"90"},{default:g((t=>[u(S,{onClick:e=>A.editArticle(t.row),type:"text",size:"small"},{default:g((()=>[h("编辑")])),_:2},1032,["onClick"]),u(S,{onClick:e=>A.deleteArticle(t.row),type:"text",size:"small"},{default:g((()=>[h("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[$,D.loading]]),m("div",k,[u(B,{onSizeChange:A.handleSizeChange,onCurrentChange:A.handleCurrentChange,background:"","current-page":D.curPage,"page-size":D.pageSize,layout:"total, prev, pager, next, jumper",total:D.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])}]]);export{D as default};
