import{a as e,E as t,f as a,l as s,m as i,v as o}from"./element-plus-fe2e4fed.js";import{_ as l,A as r}from"./index-68daabb5.js";import{ap as d,o as p,c as n,a as c,$ as m,T as u,S as h,W as j,P as b}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const f={class:"user"},g={class:"common-level-rail"},_={class:"product-content"},k={class:"table-wrap"};const v=l({components:{},inject:["reload"],data:()=>({loading:!0,tableData:[],formInline:{user:"",region:""},open_add:!1,open_edit:!1,userModel:{}}),created(){this.getTableList()},methods:{getTableList(){let e=this;r.roleList({},!0).then((t=>{e.loading=!1,e.tableData=t.data.list})).catch((t=>{e.loading=!1}))},addClick(){this.$router.push("/auth/role/add")},editClick(e){this.$router.push({path:"/auth/role/edit",query:{role_id:e.role_id}})},refresh(){this.reload()},deleteClick(a){let s=this;e.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{s.loading=!0,r.roleDelete({role_id:a.role_id},!0).then((e=>{s.loading=!1,1==e.code?(t({message:"恭喜你，该角色删除成功",type:"success"}),s.getTableList()):s.loading=!1})).catch((e=>{s.loading=!1}))})).catch((()=>{}))}}},[["render",function(e,t,l,r,v,y){const C=a,x=s,w=i,z=d("auth"),T=o;return p(),n("div",f,[c("div",g,[m((p(),u(C,{size:"small",type:"primary",icon:"Plus",onClick:y.addClick},{default:h((()=>[j("添加角色")])),_:1},8,["onClick"])),[[z,"/auth/role/add"]])]),c("div",_,[c("div",k,[m((p(),u(w,{size:"small",data:v.tableData,border:"",style:{width:"100%"}},{default:h((()=>[b(x,{prop:"role_id",label:"角色ID"}),b(x,{prop:"role_name_h1",label:"角色名称"}),b(x,{prop:"sort",label:"排序"}),b(x,{prop:"create_time",label:"添加时间"}),b(x,{fixed:"right",label:"操作",width:"90"},{default:h((e=>[m((p(),u(C,{onClick:t=>y.editClick(e.row),type:"text",size:"small"},{default:h((()=>[j("编辑")])),_:2},1032,["onClick"])),[[z,"/auth/role/edit"]]),m((p(),u(C,{onClick:t=>y.deleteClick(e.row),type:"text",size:"small"},{default:h((()=>[j("删除")])),_:2},1032,["onClick"])),[[z,"/auth/role/delete"]])])),_:1})])),_:1},8,["data"])),[[T,v.loading]])])])])}]]);export{v as default};
