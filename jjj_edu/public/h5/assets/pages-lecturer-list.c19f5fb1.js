import{_ as a,B as t,D as e,o as s,a as l,w as i,f as o,d as c,e as r,n as d,b as n,r as g,F as u,i as _,I as h,h as p,t as f,R as m,p as y,k}from"./index-911d5a8b.js";import{e as C}from"./empty.6806bb69.js";import{u as D}from"./uni-load-more.3bb687c9.js";import{_ as v}from"./score.53a72e3e.js";const F=a({components:{uniLoadMore:D,empty:C},data:()=>({categoryList:[],category_id:0,loading:!1,page:1,list_rows:10,listData:[],last_page:1,no_more:!1,search:""}),computed:{loadingType(){return this.loading?1:0!=this.listData.length&&this.no_more?2:0}},onShow(){},onLoad(){this.getCategory()},onReachBottom(){let a=this;a.page<a.last_page&&(a.page++,a.getData()),a.no_more=!0},methods:{getCategory(){let a=this;t({title:"加载中"}),a._get("lecturer.Category/list",{},(t=>{const{data:{list:e}}=t;a.categoryList=e,a.fetchData()}))},fetchData(){this.page=1,this.category_id=0,this.search="",this.getData()},getData(){let a=this;a._get("lecturer.Lecturer/list",{page:a.page||1,list_rows:a.list_rows,category_id:a.category_id,search:a.search},(t=>{a.listData=a.listData.concat(t.data.list.data),a.last_page=t.data.list.last_page,t.data.list.last_page<=1&&(a.no_more=!0),a.loading=!1,e()}))},gotoDetail(a){this.gotoPage(`/pages/eduadmin/detail?course_id=${a.course_id}`)},searchFunc(){this.listData=[],this.page=1,this.getData()},changeCat(a){this.category_id=-1==a?0:a.category_id,this.listData=[],this.page=1,this.getData()},clickFav(a){a.lecturer_id&&this._post("lecturer.Favorite/fav ",{lecturer_id:a.lecturer_id},(function(t){a.isFav=1==a.isFav?0:1}))}}},[["render",function(a,t,e,C,D,F){const b=_,L=h,w=o,x=k,j=p("empty"),T=p("uni-load-more");return s(),l(w,null,{default:i((()=>[c(w,{class:"top-box"},{default:i((()=>[c(w,{class:"top-search"},{default:i((()=>[c(w,{class:"search-box"},{default:i((()=>[c(b,{class:"icon iconfont icon-sousuo"}),c(L,{type:"text",class:"flex-1 search-input",modelValue:D.search,"onUpdate:modelValue":t[0]||(t[0]=a=>D.search=a),placeholder:"请输入..."},null,8,["modelValue"]),c(w,{class:"search-btn",onClick:F.searchFunc},{default:i((()=>[r("搜索")])),_:1},8,["onClick"])])),_:1})])),_:1}),c(w,{class:"top-nav"},{default:i((()=>[c(w,{class:d(["top-nav-item",{active:0==D.category_id}]),onClick:t[1]||(t[1]=a=>F.changeCat(-1))},{default:i((()=>[r("全部 ")])),_:1},8,["class"]),(s(!0),n(u,null,g(D.categoryList,((a,t)=>(s(),l(w,{key:t,class:d(["top-nav-item",{active:D.category_id==a.category_id}]),onClick:t=>F.changeCat(a)},{default:i((()=>[r(f(a.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),c(w,{class:"pt24 lecturer"},{default:i((()=>[(s(!0),n(u,null,g(D.listData,(t=>(s(),l(w,{class:"item",key:t,onClick:e=>a.gotoPage("/pages/knowledge/lecturer/detail?lecturer_id="+t.lecturer_id)},{default:i((()=>[c(w,{class:"l"},{default:i((()=>[c(x,{class:"img",src:t.image&&t.image.file_path,mode:"aspectFill"},null,8,["src"])])),_:2},1024),c(w,{class:"r"},{default:i((()=>[c(w,{class:"t"},{default:i((()=>[c(w,{class:"header"},{default:i((()=>[c(w,{class:"title"},{default:i((()=>[r(f(t.name),1)])),_:2},1024),1==t.isFav?(s(),l(w,{key:0,class:"btn active",onClick:m((a=>F.clickFav(t)),["stop"])},{default:i((()=>[r("已关注")])),_:2},1032,["onClick"])):0==t.isFav?(s(),l(w,{key:1,class:"btn",onClick:m((a=>F.clickFav(t)),["stop"])},{default:i((()=>[r("+关注")])),_:2},1032,["onClick"])):y("",!0)])),_:2},1024),c(w,{class:"scoreList"},{default:i((()=>[(s(!0),n(u,null,g(t.star,(a=>(s(),l(x,{class:"score",key:a,src:v,mode:"widthFix"})))),128))])),_:2},1024)])),_:2},1024),c(w,{class:"b"},{default:i((()=>[c(w,{class:"labelList"},{default:i((()=>[(s(!0),n(u,null,g(t.label,(a=>(s(),l(w,{class:"label",key:a},{default:i((()=>[r(f(a),1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),0!=D.listData.length||D.loading?(s(),l(T,{key:1,loadingType:F.loadingType},null,8,["loadingType"])):(s(),l(j,{key:0}))])),_:1})])),_:1})}],["__scopeId","data-v-8aabdb88"]]);export{F as default};
