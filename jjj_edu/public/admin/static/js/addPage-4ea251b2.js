import{E as t,f as i,v as a}from"./element-plus-fe2e4fed.js";import{_ as o,e as s}from"./index-2e57a1f5.js";import{P as e}from"./page-cdf64db4.js";import r from"./Type-be489027.js";import m from"./Model-4197875a.js";import p from"./Params-9d7bca8b.js";import{ae as d,$ as l,o as j,c as n,a as c,T as u,Y as f,P as g,S as y,W as D}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";import"./Setpages-6073c9d9.js";import"./Banner-949b25c2.js";import"./ImageSingle-016300be.js";import"./Window-0c22b42e.js";import"./Video-eb3316c2.js";import"./Article-7c434148.js";import"./Special-8f0049ed.js";import"./Notice-268fd3dd.js";import"./NavBar-625f9a37.js";import"./Lecturer-5c1376ef.js";import"./Service-b1267b28.js";import"./RichText-876aa70e.js";import"./Blank-6fdcc22d.js";import"./Guide-e8a518ce.js";import"./Title-05ebff02.js";import"./Train-7c8556e5.js";import"./Education-de484dcf.js";import"./Course-de484dcf.js";import"./vuedraggable-cabcff94.js";import"./vue-3c8001f5.js";import"./sortablejs-c079517e.js";import"./Upload-78ee26ae.js";import"./AddCategory-c921a3c2.js";import"./file-56305e6b.js";import"./Setpages-dcf66c67.js";import"./Banner-003f8ce8.js";import"./Setlink-3841cc23.js";import"./data-97822b17.js";import"./ImageSingle-0864caf4.js";import"./Window-9633798b.js";import"./Video-ca7d86f5.js";import"./Article-048d93ca.js";import"./Special-ceb9e0ac.js";import"./article-122f9a54.js";import"./Notice-4b4c99ab.js";import"./NavBar-e82ed4a7.js";import"./Lecturer-209bfdab.js";import"./Service-40e67b6e.js";import"./RichText-6fb146d8.js";import"./UE-c323e137.js";import"./Blank-8259a977.js";import"./Guide-790f479d.js";import"./Title-84f5064a.js";import"./Train-b10432c6.js";import"./Course-dffc5064.js";import"./Education-131481a7.js";import"./train-0f545876.js";import"./course-840565f7.js";const h={class:"diy-container clearfix"},v={class:"diy-menu"},b={class:"diy-phone"},S={class:"diy-info"},k={class:"common-button-wrapper"};const x=o({components:{Type:r,Model:m,Params:p},data:()=>({loading:!0,defaultData:{},diyData:{items:[]},opts:{},form:{umeditor:{},curItem:{},selectedIndex:-1}}),created(){this.getData()},methods:{getData(){let t=this;e.getHome({},!0).then((i=>{t.defaultData=i.data.defaultData,t.diyData=i.data.jsonData,t.form.curItem=t.diyData.page,t.opts=i.data.opts,t.loading=!1})).catch((i=>{t.loading=!1}))},onAddItem:function(t){let i=s(this.defaultData[t]),a=0;this.form.selectedIndex<0?(a=0,this.diyData.items.unshift(i)):(a=this.form.selectedIndex+1,this.diyData.items.splice(a,0,i)),this.$refs.model.onEditer(a)},Submit(){let i=this;i.loading=!0;let a=i.diyData,o=i.page_id;e.addhome({params:JSON.stringify(a),page_id:o},!0).then((a=>{i.loading=!1,t({message:"恭喜你，修改成功",type:"success"}),i.getData(),i.form.selectedIndex=-1})).catch((t=>{i.loading=!1}))},gotoBack(){this.$router.back(-1)}}},[["render",function(t,o,s,e,r,m){const p=d("Type"),x=d("Model"),T=d("Params"),I=i,B=a;return l((j(),n("div",h,[c("div",v,[r.loading?f("",!0):(j(),u(p,{key:0,defaultData:r.defaultData},null,8,["defaultData"]))]),c("div",b,[r.loading?f("",!0):(j(),u(x,{key:0,ref:"model",form:r.form,defaultData:r.defaultData,diyData:r.diyData},null,8,["form","defaultData","diyData"]))]),c("div",S,[r.loading?f("",!0):(j(),u(T,{key:0,form:r.form,defaultData:r.defaultData,diyData:r.diyData},null,8,["form","defaultData","diyData"]))]),c("div",k,[g(I,{size:"small",type:"info",onClick:m.gotoBack},{default:y((()=>[D("返回上一页")])),_:1},8,["onClick"]),g(I,{size:"small",type:"primary",onClick:o[0]||(o[0]=t=>m.Submit()),loading:r.loading},{default:y((()=>[D("保存")])),_:1},8,["loading"])])])),[[B,r.loading]])}]]);export{x as default};
