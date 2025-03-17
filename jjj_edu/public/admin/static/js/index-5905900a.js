import{a as e,E as t,f as a,l as i,m as s,n as l,v as o}from"./element-plus-fe2e4fed.js";import{L as r}from"./live-4f34f8e4.js";import d from"./Add-6c0eed21.js";import p from"./Edit-e9fa969e.js";import{_ as n}from"./index-2e57a1f5.js";import{ae as m,ap as c,o as u,c as h,a as g,$ as j,T as _,S as b,W as f,P as C,X as v,Y as k}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./Upload-78ee26ae.js";import"./AddCategory-c921a3c2.js";import"./file-56305e6b.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const y={class:"list"},z={class:"common-level-rail"},w={class:"product-content"},x={class:"table-wrap"},S={style:{width:"30px",height:"30px"},alt:""},L={class:"pagination"};const T=n({components:{Add:d,Edit:p},inject:["reload"],data:()=>({loading:!1,tableData:[{}],pageSize:20,totalDataNumber:0,curPage:1,searchForm:{search:""},open:!1,curModel:{},open_add:!1,open_edit:!1}),created(){this.getTableList()},methods:{searchSubmit(){this.curPage=1,this.getTableList()},handleCurrentChange(e){let t=this;t.curPage=e,t.loading=!0,t.getTableList()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getTableList()},getTableList(){let e=this,t={page:e.curPage,list_rows:e.pageSize,username:e.searchForm.search};r.getGift(t,!0).then((t=>{e.loading=!1,e.tableData=t.data.list.data,e.totalDataNumber=t.data.list.total})).catch((e=>{}))},deleteClick(a){let i=this;e.confirm("删除后不可恢复，确认删除该记录吗?","提示",{type:"warning"}).then((()=>{r.deleteGift({gift_id:a.gift_id}).then((e=>{t({message:"删除成功",type:"success"}),i.getTableList()}))}))},addClick(){this.open_add=!0},closeAdd(){this.open_add=!1,this.getTableList()},editClick(e){this.curModel=e,this.open_edit=!0},closeEdit(e,t){this.open_edit=!1,this.getTableList()}}},[["render",function(e,t,r,d,p,n){const T=a,P=i,D=s,A=l,E=m("Add"),M=m("Edit"),N=c("auth"),F=c("img-url"),G=o;return u(),h("div",y,[g("div",z,[j((u(),_(T,{size:"small",type:"primary",onClick:n.addClick,icon:"Plus"},{default:b((()=>[f("添加礼物")])),_:1},8,["onClick"])),[[N,"/plus/live/gift/add"]])]),g("div",w,[g("div",x,[j((u(),_(D,{size:"small",data:p.tableData,border:"",style:{width:"100%"}},{default:b((()=>[C(P,{prop:"gift_id",label:"id",width:"70"}),C(P,{prop:"image_id",label:"图标",width:"70"},{default:b((e=>[j(g("img",S,null,512),[[F,e.row.file_path]])])),_:1}),C(P,{prop:"gift_name",label:"礼物名称"}),C(P,{prop:"price",label:"礼物价格"}),C(P,{prop:"is_hot",label:"是否热门"},{default:b((e=>[f(v(1!=e.row.is_hot?"否":"是"),1)])),_:1}),C(P,{prop:"is_active",label:"是否活动"},{default:b((e=>[f(v(1!=e.row.is_active?"否":"是"),1)])),_:1}),C(P,{prop:"create_time",label:"添加时间"}),C(P,{fixed:"right",label:"操作",width:"100"},{default:b((e=>[j((u(),_(T,{onClick:t=>n.editClick(e.row),type:"text",size:"small"},{default:b((()=>[f("编辑")])),_:2},1032,["onClick"])),[[N,"/plus/live/gift/edit"]]),j((u(),_(T,{onClick:t=>n.deleteClick(e.row),type:"text",size:"small"},{default:b((()=>[f("删除")])),_:2},1032,["onClick"])),[[N,"/plus/live/gift/delete"]])])),_:1})])),_:1},8,["data"])),[[G,p.loading]])]),g("div",L,[C(A,{onSizeChange:n.handleSizeChange,onCurrentChange:n.handleCurrentChange,background:"","current-page":p.curPage,"page-size":p.pageSize,layout:"total, prev, pager, next, jumper",total:p.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]),p.open_add?(u(),_(E,{key:0,open_add:p.open_add,onClose:t[0]||(t[0]=e=>n.closeAdd(e,"add"))},null,8,["open_add"])):k("",!0),p.open_edit?(u(),_(M,{key:1,open_edit:p.open_edit,form:p.curModel,onClose:t[1]||(t[1]=e=>n.closeEdit(e,"edit"))},null,8,["open_edit","form"])):k("",!0)])}]]);export{T as default};
