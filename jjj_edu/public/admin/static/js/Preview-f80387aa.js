import{_ as e,a as t}from"./train-8de135aa.js";import i from"./Setpages-6cdf833f.js";import d from"./Banner-b836d824.js";import n from"./ImageSingle-b474accf.js";import r from"./Window-b5215afa.js";import s from"./Video-e46d1c76.js";import o from"./Article-a9d1976d.js";import m from"./Special-186d59f8.js";import l from"./Notice-dfaa06e3.js";import c from"./NavBar-f1c066aa.js";import a from"./Lecturer-59506ff0.js";import p from"./Service-df74e7be.js";import x from"./RichText-5838dc61.js";import f from"./Blank-d150f459.js";import I from"./Guide-9c50c270.js";import j from"./Title-574412ed.js";import u from"./Train-aef54d7b.js";import y from"./Education-a16c578d.js";import{d as k}from"./vuedraggable-cabcff94.js";import{a as v}from"./element-plus-fe2e4fed.js";import{_ as h}from"./index-49a7d7a3.js";import{ae as g,o as b,c as S,a as T,P as w,Q as B,a9 as D,T as N,Y as A}from"./@vue-0361ad4a.js";import"./data-de50e4cf.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";import"./vue-3c8001f5.js";import"./sortablejs-c079517e.js";const E={class:"diy-phone-container"},O={class:"diy-phone-item"},R={class:"wrapper"};const V=h({components:{Setpages:i,Banner:d,ImageSingle:n,Window:r,Video:s,Articleindex:o,Special:m,Notice:l,NavBar:c,Lecturer:a,Service:p,RichText:x,Blank:f,Guide:I,draggable:k,Title:j,Train:u,Education:y},data:()=>({}),props:{form:Object,defaultData:Object,diyData:Object},created(){},methods:{onDeleleItem:function(e){let t=this;v.confirm("确定要删除吗?","提示",{type:"warning"}).then((()=>{t.diyData.items.splice(e,1),t.form.selectedIndex=-1}))},onEditer:function(e){let t=this;t.form.selectedIndex=e,t.form.curItem=t.form.selectedIndex<0?t.diyData.page:t.diyData.items[t.form.selectedIndex]},initEditor:function(){let e=this;e.$nextTick((function(){e.form.umeditor.hasOwnProperty("key")&&e.form.umeditor.destroy(),e.editorHtmlComponent(),e.form.curItem.type}))},editorHtmlComponent:function(){this.$refs["diy-editor"]}}},[["render",function(i,d,n,r,s,o){const m=g("Setpages"),l=g("Banner"),c=g("ImageSingle"),a=g("Window"),p=g("Video"),x=g("Articleindex"),f=g("Special"),I=g("Notice"),j=g("NavBar"),u=e,y=g("Service"),k=g("RichText"),v=g("Blank"),h=g("Guide"),V=g("Title"),W=t;return b(),S("div",E,[T("div",O,[w(m,{diyData:n.diyData},null,8,["diyData"])]),T("div",R,[(b(!0),S(B,null,D(n.diyData.items,((e,t)=>(b(),S("div",{class:"diy-phone-item",key:e.id},["banner"==e.type?(b(),N(l,{key:0,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"imageSingle"==e.type?(b(),N(c,{key:1,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"window"==e.type?(b(),N(a,{key:2,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"video"==e.type?(b(),N(p,{key:3,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"article"==e.type?(b(),N(x,{key:4,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"special"==e.type?(b(),N(f,{key:5,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"notice"==e.type?(b(),N(I,{key:6,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"navBar"==e.type?(b(),N(j,{key:7,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"lecturer"==e.type?(b(),N(u,{key:8,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"service"==e.type?(b(),N(y,{key:9,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"richText"==e.type?(b(),N(k,{key:10,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"blank"==e.type?(b(),N(v,{key:11,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"guide"==e.type?(b(),N(h,{key:12,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):"title"==e.type?(b(),N(V,{key:13,item:e,index:t,selectedIndex:n.form.selectedIndex},null,8,["item","index","selectedIndex"])):A("",!0),"train"==n.form.curItem.type?(b(),N(W,{key:14,curItem:n.form.curItem,selectedIndex:n.form.selectedIndex},null,8,["curItem","selectedIndex"])):A("",!0)])))),128))])])}]]);export{V as default};
