import{a as e,E as t,f as a,l as o,m as s,v as i,t as d,u as l}from"./element-plus-fe2e4fed.js";import{_ as r,e as n}from"./index-68daabb5.js";import p from"./index-fba01734.js";import{A as c}from"./ad-03e6559e.js";import m from"./Edit-31137d73.js";import u from"./Add-4f1574bb.js";import{ae as g,o as y,c as j,a as h,P as _,S as f,W as C,$ as b,T as v,Y as x}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const k={class:"common-level-rail"},D={class:"table-wrap"};const w={class:"user"},T={class:"common-seach-wrap"};const z=r({components:{adIndex:p,CategoryIndex:r({components:{Edit:m,Add:u},data:()=>({categoryData:[],open_add:!1,open_edit:!1,userModel:{},commentData:[],loading:!0}),created(){this.getTableList()},methods:{getTableList(){let e=this;c.adCategory({},!0).then((t=>{e.loading=!1,e.categoryData=t.data.category})).catch((t=>{e.loading=!1}))},deleteCategory(a){let o=this;e.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{o.loading=!0,c.deleteAdCategory({category_id:a.category_id},!0).then((e=>{o.loading=!1,t({message:e.msg,type:"success"}),o.getTableList()})).catch((e=>{o.loading=!1}))})).catch((()=>{}))},handleClick(e,t){},addCategory(){this.open_add=!0},editCategory(e){this.userModel=n(e),this.open_edit=!0},closeDialogFunc(e,t){"add"==t&&(this.open_add=e.openDialog,"success"==e.type&&this.getTableList()),"edit"==t&&(this.open_edit=e.openDialog,"success"==e.type&&this.getTableList())}}},[["render",function(e,t,d,l,r,n){const p=a,c=o,m=s,u=g("Add"),w=g("Edit"),T=i;return y(),j("div",null,[h("div",k,[_(p,{size:"small",type:"primary",onClick:n.addCategory},{default:f((()=>[C("添加分类")])),_:1},8,["onClick"])]),h("div",D,[b((y(),v(m,{data:r.categoryData,style:{width:"100%"}},{default:f((()=>[_(c,{prop:"category_id",label:"分类ID",width:"180"}),_(c,{prop:"name",label:"\t分类名称"}),_(c,{prop:"create_time",label:"添加时间",width:"180"}),_(c,{prop:"name",label:"操作",width:"150"},{default:f((e=>[_(p,{onClick:t=>n.editCategory(e.row),type:"text",size:"small"},{default:f((()=>[C("编辑")])),_:2},1032,["onClick"]),_(p,{onClick:t=>n.deleteCategory(e.row),type:"text",size:"small"},{default:f((()=>[C("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[T,r.loading]]),r.open_add?(y(),v(u,{key:0,open_add:r.open_add,onCloseDialog:t[0]||(t[0]=e=>n.closeDialogFunc(e,"add"))},null,8,["open_add"])):x("",!0),r.open_edit?(y(),v(w,{key:1,open_edit:r.open_edit,form:r.userModel,onCloseDialog:t[1]||(t[1]=e=>n.closeDialogFunc(e,"edit"))},null,8,["open_edit","form"])):x("",!0)])])}]])},data:()=>({activeName:"article",loading:!0}),created(){},methods:{}},[["render",function(e,t,a,o,s,i){const r=g("adIndex"),n=d,p=g("CategoryIndex"),c=l;return y(),j("div",w,[h("div",T,[_(c,{modelValue:s.activeName,"onUpdate:modelValue":t[0]||(t[0]=e=>s.activeName=e)},{default:f((()=>[_(n,{label:"广告管理",name:"article"},{default:f((()=>["article"==s.activeName?(y(),v(r,{key:0})):x("",!0)])),_:1}),_(n,{label:"分类管理",name:"category"},{default:f((()=>["category"==s.activeName?(y(),v(p,{key:0})):x("",!0)])),_:1})])),_:1},8,["modelValue"])])])}]]);export{z as default};
