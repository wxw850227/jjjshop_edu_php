import{E as t,f as i,v as a}from"./element-plus-fe2e4fed.js";import{_ as o,e as s}from"./index-49a7d7a3.js";import{P as e}from"./page-60f4b84c.js";import r from"./Type-afb45b38.js";import m from"./Model-77a639ba.js";import p from"./Params-dcd4ca5c.js";import{ae as d,$ as l,o as j,c as n,a as c,T as u,Y as f,P as g,S as y,W as D}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";import"./Setpages-6cdf833f.js";import"./Banner-b836d824.js";import"./ImageSingle-b474accf.js";import"./Window-b5215afa.js";import"./Video-e46d1c76.js";import"./Article-a9d1976d.js";import"./Special-186d59f8.js";import"./Notice-dfaa06e3.js";import"./NavBar-f1c066aa.js";import"./Lecturer-59506ff0.js";import"./Service-df74e7be.js";import"./RichText-5838dc61.js";import"./Blank-d150f459.js";import"./Guide-9c50c270.js";import"./Title-574412ed.js";import"./Train-aef54d7b.js";import"./Education-a16c578d.js";import"./Course-a16c578d.js";import"./vuedraggable-cabcff94.js";import"./vue-3c8001f5.js";import"./sortablejs-c079517e.js";import"./Upload-ecf46188.js";import"./AddCategory-1e090b14.js";import"./file-437a81f7.js";import"./Setpages-72f8ab13.js";import"./Banner-fee35c5d.js";import"./Setlink-a75914e0.js";import"./data-de50e4cf.js";import"./ImageSingle-3e2110da.js";import"./Window-f1cb1459.js";import"./Video-9c14d40d.js";import"./Article-0b07c961.js";import"./Special-f74c1c01.js";import"./article-af9d88c9.js";import"./Notice-d0991d75.js";import"./NavBar-4f09cd5c.js";import"./Lecturer-a5ffb71c.js";import"./Service-35ac3369.js";import"./RichText-47da3bdc.js";import"./UE-87f17702.js";import"./Blank-3a240eac.js";import"./Guide-ba268a90.js";import"./Title-1d067053.js";import"./Train-02adaf7e.js";import"./Course-950d9a6c.js";import"./Education-f63a9d10.js";import"./train-8de135aa.js";import"./course-3aefee7c.js";const h={class:"diy-container clearfix"},v={class:"diy-menu"},S={class:"diy-phone"},b={class:"diy-info"},k={class:"common-button-wrapper"};const x=o({components:{Type:r,Model:m,Params:p},data:()=>({loading:!0,defaultData:{},diyData:{items:[]},opts:{},form:{umeditor:{},curItem:{},selectedIndex:-1}}),created(){this.getData()},methods:{getData(){let t=this;t.page_id=t.$route.query.page_id,e.editPage({page_id:t.page_id},!0).then((i=>{t.defaultData=i.data.defaultData,t.diyData=i.data.jsonData,t.form.curItem=t.diyData.page,t.opts=i.data.opts,t.loading=!1})).catch((i=>{t.loading=!1}))},onAddItem:function(t){let i=s(this.defaultData[t]),a=0;this.form.selectedIndex<0?(a=0,this.diyData.items.unshift(i)):(a=this.form.selectedIndex+1,this.diyData.items.splice(a,0,i)),this.$refs.model.onEditer(a)},Submit(){let i=this;i.loading=!0;let a=i.diyData,o=i.page_id;e.SavePage({params:JSON.stringify(a),page_id:o},!0).then((a=>{i.loading=!1,t({message:"恭喜你，修改成功",type:"success"}),i.getData()})).catch((t=>{i.loading=!1}))},gotoBack(){this.$router.back(-1)}}},[["render",function(t,o,s,e,r,m){const p=d("Type"),x=d("Model"),T=d("Params"),_=i,B=a;return l((j(),n("div",h,[c("div",v,[r.loading?f("",!0):(j(),u(p,{key:0,defaultData:r.defaultData},null,8,["defaultData"]))]),c("div",S,[r.loading?f("",!0):(j(),u(x,{key:0,ref:"model",form:r.form,defaultData:r.defaultData,diyData:r.diyData},null,8,["form","defaultData","diyData"]))]),c("div",b,[r.loading?f("",!0):(j(),u(T,{key:0,form:r.form,defaultData:r.defaultData,diyData:r.diyData},null,8,["form","defaultData","diyData"]))]),c("div",k,[g(_,{size:"small",type:"info",onClick:m.gotoBack},{default:y((()=>[D("返回上一页")])),_:1},8,["onClick"]),g(_,{size:"small",type:"primary",onClick:o[0]||(o[0]=t=>m.Submit()),loading:r.loading},{default:y((()=>[D("保存")])),_:1},8,["loading"])])])),[[B,r.loading]])}]]);export{x as default};
