import{q as e,r as a,v as t,f as l,e as i,c as n,l as o,m as s,n as c,t as r,u as d,F as u,d as g,o as h}from"./element-plus-fe2e4fed.js";import{_ as p}from"./index-2e57a1f5.js";import{o as m,T as y,S as b,c as v,Q as _,a9 as f,$ as C,a as D,P as k,W as z,ap as V,Y as F,X as w,ae as S}from"./@vue-0361ad4a.js";import{D as P}from"./data-97822b17.js";const x=p({data:()=>({pages:[{url:"/pages/user/collect/subject",name:"收藏的题",type:"菜单"},{url:"/pages/user/collect/index",name:"我的课程",type:"菜单"},{url:"/pages/order/category",name:"我的订单",type:"菜单"},{url:"/pages/user/learning/record",name:"学习记录",type:"菜单"},{url:"/pages/user/my-wallet/my-wallet",name:"我的余额",type:"菜单"},{url:"/pages/order/recharge",name:"充值中心",type:"菜单"},{url:"/pages/news/list",name:"新闻列表",type:"菜单"},{url:"/pages/plus/signin/signin",name:"签到有礼",type:"菜单"},{url:"/pages/user/set/set",name:"设置",type:"菜单"},{url:"/pages/user/class/index",name:"我的班级",type:"菜单"},{url:"/pages/lecturer/list",name:"教师列表",type:"菜单"},{url:"/pages/lecturer/fav",name:"关注的讲师",type:"菜单"}],activePage:"收藏的题"}),created(){this.changeFunc(this.pages[0])},methods:{changeFunc(e){this.$emit("changeData",e)}}},[["render",function(t,l,i,n,o,s){const c=e,r=a;return m(),y(r,{modelValue:o.activePage,"onUpdate:modelValue":l[0]||(l[0]=e=>o.activePage=e),placeholder:"请选择",class:"percent-w100",onChange:s.changeFunc,"value-key":"url"},{default:b((()=>[(m(!0),v(_,null,f(o.pages,(e=>(m(),y(c,{key:e.url,"value-key":e.name,label:e.name,value:e},null,8,["value-key","label","value"])))),128))])),_:1},8,["modelValue","onChange"])}]]);const T=p({data:()=>({loading:!0,pages:[],activePage:{}}),created(){this.getData()},methods:{getData(){let e=this;P.getPageList({},!0).then((a=>{e.loading=!1;let t=[];for(let e=0,l=a.data.list.length;e<l;e++){let l=a.data.list[e],i={url:"/pages/diy-page/diy-page?page_id="+l.page_id,name:l.page_name,type:"自定义页面"};t.push(i)}e.pages=t,e.pages.length>0&&(e.activePage=e.pages[0],e.changeFunc(e.activePage))})).catch((a=>{e.loading=!1}))},changeFunc(e){this.$emit("changeData",e)}}},[["render",function(l,i,n,o,s,c){const r=e,d=a,u=t;return C((m(),y(d,{modelValue:s.activePage,"onUpdate:modelValue":i[0]||(i[0]=e=>s.activePage=e),placeholder:"请选择",class:"percent-w100",onChange:c.changeFunc,"value-key":"url"},{default:b((()=>[(m(!0),v(_,null,f(s.pages,(e=>(m(),y(r,{key:e.url,label:e.name,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])),[[u,s.loading]])}]]),L={class:"article-box"},N={class:"common-seach-wrap"},U={class:"article-content"},A={class:"table-wrap"},I={class:"pagination"};const $=p({data:()=>({activeTab:"second",pageSize:5,totalDataNumber:0,curPage:1,loading:!0,tableData:[],activePage:{}}),created(){this.chooseList(),this.getData()},watch:{},methods:{handleCurrentChange(e){this.curPage=e,this.getData()},handleSizeChange(e){this.pageSize=e,this.curPage=1,this.getData()},getData(){let e=this;e.loading=!0;let a={};a.page=e.curPage,a.list_rows=e.pageSize,P.articlelist(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total})).catch((e=>{}))},changeFunc(e){let a={};a.name=e.article_title,a.url="/pages/news/detail?article_id="+e.article_id,a.type="文章",this.$emit("changeData",a)},chooseList(){let e={name:"文章列表",url:"/pages/news/list",type:"文章"};this.$emit("changeData",e)}}},[["render",function(e,a,t,r,d,u){const g=l,h=i,p=n,y=o,_=s,f=c;return m(),v("div",L,[D("div",N,[k(p,{size:"small",inline:!0,class:"demo-form-inline"},{default:b((()=>[k(h,null,{default:b((()=>[k(g,{size:"small",icon:"el-icon-notebook-2",onClick:u.chooseList},{default:b((()=>[z("选择文章列表")])),_:1},8,["onClick"])])),_:1})])),_:1})]),D("div",U,[D("div",A,[k(_,{size:"mini",data:d.tableData,border:"",style:{width:"100%"}},{default:b((()=>[k(y,{prop:"article_title",label:"文章标题"}),k(y,{prop:"category.name",label:"文章分类",width:"80"}),k(y,{label:"操作",width:"80"},{default:b((e=>[k(g,{size:"mini",onClick:a=>u.changeFunc(e.row)},{default:b((()=>[z("选择")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),D("div",I,[k(f,{onSizeChange:u.handleSizeChange,onCurrentChange:u.handleCurrentChange,background:"","current-page":d.curPage,"page-size":d.pageSize,layout:"total, prev, pager, next, jumper",total:d.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])}]]);const j=p({data:()=>({pages:[{url:"/pages/index/index",name:"首页",type:"页面"},{url:"/pages/user/index",name:"我的",type:"页面"},{url:"/pages/knowledge/index",name:"课程",type:"页面"},{url:"/pages/eduadmin/index",name:"教务",type:"页面"},{url:"/pages/examination/index",name:"题库",type:"页面"},{url:"/pages/user/collect/subject",name:"收藏的题",type:"页面"},{url:"/pages/order/category",name:"我的订单",type:"页面"},{url:"/pages/pointsMall/index",name:"积分商城",type:"页面"},{url:"/pages/user/collect/index",name:"我的课程",type:"页面"},{url:"/pages/examination/wrong/list",name:"我的错题",type:"页面"},{url:"/pages/examination/record/list",name:"学习记录",type:"页面"}],activePage:"首页"}),created(){this.changeFunc(this.pages[0])},methods:{changeFunc(e){this.$emit("changeData",e)}}},[["render",function(t,l,i,n,o,s){const c=e,r=a;return m(),y(r,{modelValue:o.activePage,"onUpdate:modelValue":l[0]||(l[0]=e=>o.activePage=e),placeholder:"请选择",class:"percent-w100",onChange:s.changeFunc,"value-key":"url"},{default:b((()=>[(m(!0),v(_,null,f(o.pages,(e=>(m(),y(c,{key:e.url,"value-key":e.name,label:e.name,value:e},null,8,["value-key","label","value"])))),128))])),_:1},8,["modelValue","onChange"])}]]),E={class:"marketing-box"},M={key:0,class:"product"},q={class:"product-content"},H={class:"table-wrap type-table"},Q={key:1,class:"product-list"},W={class:"common-seach-wrap"},X={class:"product-content"},Y={class:"table-wrap setlink-product-table"},B={class:"product-info"},G={class:"pic"},J={alt:""},K={class:"info"},O={class:"name text-ellipsis"},R={class:"red"},Z={class:"pagination"};const ee=p({data:()=>({loading:!0,activeTab:"type",categoryList:[],categoryActive:[],searchForm:{category_id:"",search:""},tableData:[],pageSize:5,totalDataNumber:0,curPage:1,activePage:null}),created(){this.getCategory()},watch:{activeTab:function(e,a){e!=a&&(this.tableData=[],"type"==e&&this.autoType(),"detail"==e&&(this.searchForm.course_type=1,this.getData()))}},methods:{getCategory(){let e=this;e.loading=!0,P.cateList({},!0).then((a=>{e.categoryList=a.data.list,e.autoType(),e.loading=!1})).catch((a=>{e.loading=!1}))},autoType(e){if(this.categoryActive=[],this.categoryList.length>0){let e=this.categoryList[0];this.categoryActive.push(e.category_id),this.changeFunc(e)}},changeCategory(e){let a=this.$refs.cascader.getCheckedNodes();this.changeFunc(a[0].data)},handleCurrentChange(e){this.curPage=e,this.getData()},handleSizeChange(e){this.pageSize=e,this.curPage=0,this.getData()},getData(){let e=this;e.loading=!0;let a=e.searchForm;a.page=e.curPage,a.list_rows=e.pageSize,P.coursesList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total,1==e.curPage&&e.tableData.length>0&&e.changeFunc(e.tableData[0])})).catch((a=>{e.loading=!1}))},onSubmit(){this.curPage=1,this.getData()},changeFunc(e){let a={};"type"==this.activeTab&&(a.name=e.name,a.url="/pages/knowledge/index?category_id="+e.category_id,a.type="课程分类"),"detail"==this.activeTab&&(a.name=e.title,a.url="/pages/knowledge/course/detail?course_id="+e.course_id,a.type="课程详情"),this.$emit("changeData",a)}}},[["render",function(h,p,S,P,x,T){const L=r,N=d,U=u,A=e,I=a,$=i,j=g,ee=l,ae=n,te=o,le=s,ie=c,ne=t,oe=V("img-url");return m(),v("div",E,[k(N,{modelValue:x.activeTab,"onUpdate:modelValue":p[0]||(p[0]=e=>x.activeTab=e)},{default:b((()=>[k(L,{label:"分类",name:"type"}),k(L,{label:"课程",name:"detail"})])),_:1},8,["modelValue"]),"type"==x.activeTab?(m(),v("div",M,[C((m(),v("div",q,[D("div",H,[k(U,{class:"ww100",ref:"cascader",modelValue:x.categoryActive,"onUpdate:modelValue":p[1]||(p[1]=e=>x.categoryActive=e),options:x.categoryList,props:{children:"child",value:"category_id",label:"name"},onChange:T.changeCategory},null,8,["modelValue","options","onChange"])])])),[[ne,x.loading]])])):F("",!0),"detail"==x.activeTab?C((m(),v("div",Q,[D("div",W,[k(ae,{size:"small",inline:!0,model:x.searchForm,class:"demo-form-inline"},{default:b((()=>[k($,{label:"课程分类"},{default:b((()=>[k(I,{size:"small",modelValue:x.searchForm.category_id,"onUpdate:modelValue":p[2]||(p[2]=e=>x.searchForm.category_id=e),placeholder:"所有分类"},{default:b((()=>[k(A,{label:"全部",value:"0"}),(m(!0),v(_,null,f(x.categoryList,((e,a)=>(m(),y(A,{key:a,label:e.name,value:e.category_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),k($,{label:"课程名称"},{default:b((()=>[k(j,{size:"small",modelValue:x.searchForm.search,"onUpdate:modelValue":p[3]||(p[3]=e=>x.searchForm.search=e),placeholder:"请输入课程名称"},null,8,["modelValue"])])),_:1}),k($,null,{default:b((()=>[k(ee,{size:"small",icon:"Search",onClick:T.onSubmit},{default:b((()=>[z("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),D("div",X,[D("div",Y,[k(le,{size:"small",data:x.tableData,border:"",style:{width:"100%"}},{default:b((()=>[k(te,{prop:"course_name",label:"课程"},{default:b((e=>[D("div",B,[D("div",G,[C(D("img",J,null,512),[[oe,e.row.image.file_path]])]),D("div",K,[D("div",O,w(e.row.title),1)])])])),_:1}),k(te,{prop:"course_price",label:"价格",width:"100"},{default:b((e=>[D("span",R,w(e.row.course_price),1)])),_:1}),k(te,{label:"操作",width:"80"},{default:b((e=>[k(ee,{size:"small",onClick:a=>T.changeFunc(e.row)},{default:b((()=>[z("选择")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])]),D("div",Z,[k(ie,{onSizeChange:T.handleSizeChange,onCurrentChange:T.handleCurrentChange,background:"","current-page":x.curPage,"page-size":x.pageSize,layout:"total, prev, pager, next, jumper",total:x.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])),[[ne,x.loading]]):F("",!0)])}],["__scopeId","data-v-57e062f3"]]),ae={class:"marketing-box"},te={key:0,class:"product"},le={class:"product-content"},ie={class:"table-wrap type-table"},ne={key:1,class:"product-list"},oe={class:"common-seach-wrap"},se={class:"product-content"},ce={class:"table-wrap setlink-product-table"},re={class:"product-info"},de={class:"pic"},ue={alt:""},ge={class:"pagination"};const he=p({data:()=>({loading:!0,activeTab:"type",categoryList:[],categoryActive:[],searchForm:{category_id:"",search:""},tableData:[],pageSize:5,totalDataNumber:0,curPage:1,activePage:null}),created(){this.getCategory()},watch:{activeTab:function(e,a){e!=a&&(this.tableData=[],"type"==e&&this.autoType(),"detail"==e&&(this.searchForm.course_type=1,this.getData()))}},methods:{getCategory(){let e=this;e.loading=!0,P.cateLecturerList({},!0).then((a=>{e.categoryList=a.data.list,e.autoType(),e.loading=!1})).catch((a=>{e.loading=!1}))},autoType(e){if(this.categoryActive=[],this.categoryList.length>0){let e=this.categoryList[0];this.categoryActive.push(e.category_id),this.changeFunc(e)}},changeCategory(e){let a=this.$refs.cascader.getCheckedNodes();this.changeFunc(a[0].data)},handleCurrentChange(e){this.curPage=e,this.getData()},handleSizeChange(e){this.pageSize=e,this.curPage=0,this.getData()},getData(){let e=this;e.loading=!0;let a=e.searchForm;a.page=e.curPage,a.list_rows=e.pageSize,P.lecturerList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total,1==e.curPage&&e.tableData.length>0&&e.changeFunc(e.tableData[0])})).catch((a=>{e.loading=!1}))},onSubmit(){this.curPage=1,this.getData()},changeFunc(e){let a={};"type"==this.activeTab&&(a.name=e.name,a.url="/pages/lecturer/list?category_id="+e.category_id,a.type="讲师分类"),"detail"==this.activeTab&&(a.name=e.title,a.url="/pages/knowledge/lecturer/detail?lecturer_id="+e.lecturer_id,a.type="讲师详情"),this.$emit("changeData",a)}}},[["render",function(h,p,w,S,P,x){const T=r,L=d,N=u,U=e,A=a,I=i,$=g,j=l,E=n,M=o,q=s,H=c,Q=t,W=V("img-url");return m(),v("div",ae,[k(L,{modelValue:P.activeTab,"onUpdate:modelValue":p[0]||(p[0]=e=>P.activeTab=e)},{default:b((()=>[k(T,{label:"分类",name:"type"}),k(T,{label:"讲师",name:"detail"})])),_:1},8,["modelValue"]),"type"==P.activeTab?(m(),v("div",te,[C((m(),v("div",le,[D("div",ie,[k(N,{class:"ww100",ref:"cascader",modelValue:P.categoryActive,"onUpdate:modelValue":p[1]||(p[1]=e=>P.categoryActive=e),options:P.categoryList,props:{children:"child",value:"category_id",label:"name"},onChange:x.changeCategory},null,8,["modelValue","options","onChange"])])])),[[Q,P.loading]])])):F("",!0),"detail"==P.activeTab?C((m(),v("div",ne,[D("div",oe,[k(E,{size:"small",inline:!0,model:P.searchForm,class:"demo-form-inline"},{default:b((()=>[k(I,{label:"讲师分类"},{default:b((()=>[k(A,{size:"small",modelValue:P.searchForm.category_id,"onUpdate:modelValue":p[2]||(p[2]=e=>P.searchForm.category_id=e),placeholder:"所有分类"},{default:b((()=>[k(U,{label:"全部",value:"0"}),(m(!0),v(_,null,f(P.categoryList,((e,a)=>(m(),y(U,{key:a,label:e.name,value:e.category_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),k(I,{label:"讲师名称"},{default:b((()=>[k($,{size:"small",modelValue:P.searchForm.search,"onUpdate:modelValue":p[3]||(p[3]=e=>P.searchForm.search=e),placeholder:"请输入讲师名称"},null,8,["modelValue"])])),_:1}),k(I,null,{default:b((()=>[k(j,{size:"small",icon:"Search",onClick:x.onSubmit},{default:b((()=>[z("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),D("div",se,[D("div",ce,[k(q,{size:"small",data:P.tableData,border:"",style:{width:"100%"}},{default:b((()=>[k(M,{prop:"name",label:"讲师名称"}),k(M,{prop:"category.name",label:"讲师分类"}),k(M,{prop:"image",label:"讲师封面"},{default:b((e=>[D("div",re,[D("div",de,[C(D("img",ue,null,512),[[W,0!=e.row.image_id?e.row.image.file_path:""]])])])])),_:1}),k(M,{label:"操作",width:"80"},{default:b((e=>[k(j,{size:"small",onClick:a=>x.changeFunc(e.row)},{default:b((()=>[z("选择")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])]),D("div",ge,[k(H,{onSizeChange:x.handleSizeChange,onCurrentChange:x.handleCurrentChange,background:"","current-page":P.curPage,"page-size":P.pageSize,layout:"total, prev, pager, next, jumper",total:P.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])),[[Q,P.loading]]):F("",!0)])}],["__scopeId","data-v-913a9cbd"]]),pe={class:"marketing-box"},me={key:0,class:"product"},ye={class:"product-content"},be={class:"table-wrap type-table"},ve={key:1,class:"product-list"},_e={class:"common-seach-wrap"},fe={class:"product-content"},Ce={class:"table-wrap setlink-product-table"},De={class:"product-info"},ke={class:"pic"},ze={alt:""},Ve={class:"pagination"};const Fe=p({data:()=>({loading:!0,activeTab:"type",categoryList:[],categoryActive:[],searchForm:{category_id:"",search:""},tableData:[],pageSize:5,totalDataNumber:0,curPage:1,activePage:null}),created(){this.getCategory()},watch:{activeTab:function(e,a){e!=a&&(this.tableData=[],"type"==e&&this.autoType(),"detail"==e&&this.getData())}},methods:{getCategory(){let e=this;e.loading=!0,P.catePaperList({paper_type:1},!0).then((a=>{e.categoryList=a.data.list,e.autoType(),e.loading=!1})).catch((a=>{e.loading=!1}))},autoType(e){if(this.categoryActive=[],this.categoryList.length>0){let e=this.categoryList[0];this.categoryActive.push(e.category_id),this.changeFunc(e)}},changeCategory(e){let a=this.$refs.cascader.getCheckedNodes();this.changeFunc(a[0].data)},handleCurrentChange(e){this.curPage=e,this.getData()},handleSizeChange(e){this.pageSize=e,this.curPage=0,this.getData()},getData(){let e=this;e.loading=!0;let a=e.searchForm;a.paper_type=1,a.page=e.curPage,a.list_rows=e.pageSize,P.paperList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total,1==e.curPage&&e.tableData.length>0&&e.changeFunc(e.tableData[0])})).catch((a=>{e.loading=!1}))},onSubmit(){this.curPage=1,this.getData()},changeFunc(e){let a={};"type"==this.activeTab&&(a.name=e.name,a.url="/pages/examination/practice/list?paper_type=1&category_id="+e.category_id,a.type="练习分类"),"detail"==this.activeTab&&(a.name=e.title,a.url="/pages/examination/exam/detail?paper_id="+e.paper_id,a.type="练习详情"),this.$emit("changeData",a)}}},[["render",function(h,p,w,S,P,x){const T=r,L=d,N=u,U=e,A=a,I=i,$=g,j=l,E=n,M=o,q=s,H=c,Q=t,W=V("img-url");return m(),v("div",pe,[k(L,{modelValue:P.activeTab,"onUpdate:modelValue":p[0]||(p[0]=e=>P.activeTab=e)},{default:b((()=>[k(T,{label:"分类",name:"type"}),k(T,{label:"练习",name:"detail"})])),_:1},8,["modelValue"]),"type"==P.activeTab?(m(),v("div",me,[C((m(),v("div",ye,[D("div",be,[k(N,{class:"ww100",ref:"cascader",modelValue:P.categoryActive,"onUpdate:modelValue":p[1]||(p[1]=e=>P.categoryActive=e),options:P.categoryList,props:{children:"child",value:"category_id",label:"name"},onChange:x.changeCategory},null,8,["modelValue","options","onChange"])])])),[[Q,P.loading]])])):F("",!0),"detail"==P.activeTab?C((m(),v("div",ve,[D("div",_e,[k(E,{size:"small",inline:!0,model:P.searchForm,class:"demo-form-inline"},{default:b((()=>[k(I,{label:"练习分类"},{default:b((()=>[k(A,{size:"small",modelValue:P.searchForm.category_id,"onUpdate:modelValue":p[2]||(p[2]=e=>P.searchForm.category_id=e),placeholder:"所有分类"},{default:b((()=>[k(U,{label:"全部",value:"0"}),(m(!0),v(_,null,f(P.categoryList,((e,a)=>(m(),y(U,{key:a,label:e.name,value:e.category_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),k(I,{label:"练习名称"},{default:b((()=>[k($,{size:"small",modelValue:P.searchForm.search,"onUpdate:modelValue":p[3]||(p[3]=e=>P.searchForm.search=e),placeholder:"请输入练习名称"},null,8,["modelValue"])])),_:1}),k(I,null,{default:b((()=>[k(j,{size:"small",icon:"Search",onClick:x.onSubmit},{default:b((()=>[z("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),D("div",fe,[D("div",Ce,[k(q,{size:"small",data:P.tableData,border:"",style:{width:"100%"}},{default:b((()=>[k(M,{prop:"title",label:"练习名称"}),k(M,{prop:"image",label:"封面"},{default:b((e=>[D("div",De,[D("div",ke,[C(D("img",ze,null,512),[[W,e.row.image.file_path]])])])])),_:1}),k(M,{prop:"category.name",label:"练习分类"}),k(M,{label:"操作",width:"80"},{default:b((e=>[k(j,{size:"small",onClick:a=>x.changeFunc(e.row)},{default:b((()=>[z("选择")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])]),D("div",Ve,[k(H,{onSizeChange:x.handleSizeChange,onCurrentChange:x.handleCurrentChange,background:"","current-page":P.curPage,"page-size":P.pageSize,layout:"total, prev, pager, next, jumper",total:P.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])),[[Q,P.loading]]):F("",!0)])}],["__scopeId","data-v-26b38eed"]]),we={class:"marketing-box"},Se={key:0,class:"product"},Pe={class:"product-content"},xe={class:"table-wrap type-table"},Te={key:1,class:"product-list"},Le={class:"common-seach-wrap"},Ne={class:"product-content"},Ue={class:"table-wrap setlink-product-table"},Ae={class:"product-info"},Ie={class:"pic"},$e={alt:""},je={class:"info"},Ee={class:"name text-ellipsis"},Me={class:"red"},qe={class:"pagination"};const He=p({data:()=>({loading:!0,activeTab:"type",categoryList:[],categoryActive:[],searchForm:{category_id:"",search:""},tableData:[],pageSize:5,totalDataNumber:0,curPage:1,activePage:null}),created(){this.getCategory()},watch:{activeTab:function(e,a){e!=a&&(this.tableData=[],"type"==e&&this.autoType(),"edu"==e&&(this.searchForm.course_type=2,this.getData()))}},methods:{getCategory(){let e=this;e.loading=!0,P.cateList({},!0).then((a=>{e.categoryList=a.data.list,e.autoType(),e.loading=!1})).catch((a=>{e.loading=!1}))},autoType(e){if(this.categoryActive=[],this.categoryList.length>0){let e=this.categoryList[0];this.categoryActive.push(e.category_id),this.changeFunc(e)}},changeCategory(e){let a=this.$refs.cascader.getCheckedNodes();this.changeFunc(a[0].data)},handleCurrentChange(e){this.curPage=e,this.getData()},handleSizeChange(e){this.pageSize=e,this.curPage=0,this.getData()},getData(){let e=this;e.loading=!0;let a=e.searchForm;a.page=e.curPage,a.list_rows=e.pageSize,P.coursesList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total,1==e.curPage&&e.tableData.length>0&&e.changeFunc(e.tableData[0])})).catch((a=>{e.loading=!1}))},onSubmit(){this.curPage=1,this.getData()},changeFunc(e){let a={};"type"==this.activeTab&&(a.name=e.name,a.url="/pages/eduadmin/index?category_id="+e.category_id,a.type="教务分类"),"edu"==this.activeTab&&(a.name=e.title,a.url="/pages/eduadmin/detail?course_id="+e.course_id,a.type="教务详情"),this.$emit("changeData",a)}}},[["render",function(h,p,S,P,x,T){const L=r,N=d,U=u,A=e,I=a,$=i,j=g,E=l,M=n,q=o,H=s,Q=c,W=t,X=V("img-url");return m(),v("div",we,[k(N,{modelValue:x.activeTab,"onUpdate:modelValue":p[0]||(p[0]=e=>x.activeTab=e)},{default:b((()=>[k(L,{label:"分类",name:"type"}),k(L,{label:"教务",name:"edu"})])),_:1},8,["modelValue"]),"type"==x.activeTab?(m(),v("div",Se,[C((m(),v("div",Pe,[D("div",xe,[k(U,{class:"ww100",ref:"cascader",modelValue:x.categoryActive,"onUpdate:modelValue":p[1]||(p[1]=e=>x.categoryActive=e),options:x.categoryList,props:{children:"child",value:"category_id",label:"name"},onChange:T.changeCategory},null,8,["modelValue","options","onChange"])])])),[[W,x.loading]])])):F("",!0),"edu"==x.activeTab?C((m(),v("div",Te,[D("div",Le,[k(M,{size:"small",inline:!0,model:x.searchForm,class:"demo-form-inline"},{default:b((()=>[k($,{label:"课程分类"},{default:b((()=>[k(I,{size:"small",modelValue:x.searchForm.category_id,"onUpdate:modelValue":p[2]||(p[2]=e=>x.searchForm.category_id=e),placeholder:"所有分类"},{default:b((()=>[k(A,{label:"全部",value:"0"}),(m(!0),v(_,null,f(x.categoryList,((e,a)=>(m(),y(A,{key:a,label:e.name,value:e.category_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),k($,{label:"课程名称"},{default:b((()=>[k(j,{size:"small",modelValue:x.searchForm.search,"onUpdate:modelValue":p[3]||(p[3]=e=>x.searchForm.search=e),placeholder:"请输入课程名称"},null,8,["modelValue"])])),_:1}),k($,null,{default:b((()=>[k(E,{size:"small",icon:"Search",onClick:T.onSubmit},{default:b((()=>[z("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),D("div",Ne,[D("div",Ue,[k(H,{size:"small",data:x.tableData,border:"",style:{width:"100%"}},{default:b((()=>[k(q,{prop:"course_name",label:"课程"},{default:b((e=>[D("div",Ae,[D("div",Ie,[C(D("img",$e,null,512),[[X,e.row.image.file_path]])]),D("div",je,[D("div",Ee,w(e.row.title),1)])])])),_:1}),k(q,{prop:"course_price",label:"价格",width:"100"},{default:b((e=>[D("span",Me,w(e.row.course_price),1)])),_:1}),k(q,{label:"操作",width:"80"},{default:b((e=>[k(E,{size:"small",onClick:a=>T.changeFunc(e.row)},{default:b((()=>[z("选择")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])]),D("div",qe,[k(Q,{onSizeChange:T.handleSizeChange,onCurrentChange:T.handleCurrentChange,background:"","current-page":x.curPage,"page-size":x.pageSize,layout:"total, prev, pager, next, jumper",total:x.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])),[[W,x.loading]]):F("",!0)])}],["__scopeId","data-v-366695f5"]]),Qe={data:()=>({formmodel:{}}),methods:{changeFunc(e){this.$emit("changeData",e)}}},We=D("p",null,"注意一：同一个小程序链接其他小程序，最多只能链接10个，超过将不生效",-1),Xe=D("p",null,"注意二：不能填写自身小程序appid",-1),Ye=D("p",null,"注意三：小程序链接留空默认跳到小程序首页",-1);const Be=p(Qe,[["render",function(e,a,t,l,o,s){const c=g,r=i,d=n;return m(),y(d,{"label-width":"80px",model:o.formmodel},{default:b((()=>[k(r,{label:"appid "},{default:b((()=>[k(c,{modelValue:o.formmodel.name,"onUpdate:modelValue":a[0]||(a[0]=e=>o.formmodel.name=e)},null,8,["modelValue"])])),_:1}),k(r,{label:"页面路径 "},{default:b((()=>[k(c,{modelValue:o.formmodel.name,"onUpdate:modelValue":a[1]||(a[1]=e=>o.formmodel.name=e)},null,8,["modelValue"])])),_:1}),k(r,{label:""},{default:b((()=>[We,Xe,Ye])),_:1})])),_:1},8,["model"])}]]),Ge={data:()=>({formmodel:{}}),methods:{changeFunc(e){let a={name:"",url:"https://"+e};this.$emit("changeData",a)}}},Je=D("p",null,"注意一：链接的网页必须支持SSL ，链接必须以 https:// 开头，否则无法跳转",-1),Ke=D("p",null,"注意二：链接的域名必须是备案域名，否则无法跳转",-1),Oe=D("p",null,"注意三：您的网站域名必须加到微信小程序公众平台的业务域名处,详细说明？",-1);const Re={components:{Menu:x,Pages:j,Article:$,SmallProgram:Be,CourseIndex:ee,H5:p(Ge,[["render",function(e,a,t,l,o,s){const c=g,r=i,d=n;return m(),y(d,{"label-width":"80px",model:o.formmodel},{default:b((()=>[k(r,{label:"https://"},{default:b((()=>[k(c,{modelValue:o.formmodel.name,"onUpdate:modelValue":a[0]||(a[0]=e=>o.formmodel.name=e),onInput:s.changeFunc},null,8,["modelValue","onInput"])])),_:1}),k(r,{label:""},{default:b((()=>[Je,Ke,Oe])),_:1})])),_:1},8,["model"])}]]),DiyPage:T,LectureIndex:he,TrainIndex:Fe,EducationIndex:He},data:()=>({dialogVisible:!0,activeData:null,activeName:"pages"}),props:["is_linkset"],created(){this.dialogVisible=this.is_linkset},methods:{dialogFormVisible(e){e?this.$emit("closeDialog",this.activeData):this.$emit("closeDialog",null)},activeDataFunc(e){this.activeData=e}}},Ze={class:"dialog-footer d-b-c"},ea={class:"flex-1"},aa={key:0,class:"d-s-s d-c tl"},ta={class:"text-ellipsis setlink-set-link"},la=D("span",null,"当前链接：",-1),ia={class:"gray9"},na=D("span",{class:"p-0-10 gray"},"/",-1),oa={class:"blue"},sa={class:"text-ellipsis gray",style:{"font-size":"10px"}},ca={key:1,class:"tl"},ra={class:"setlink-footer-btn"};const da=p(Re,[["render",function(e,a,t,i,n,o){const s=j,c=r,u=$,g=S("CourseIndex"),p=S("EducationIndex"),_=S("LectureIndex"),f=S("TrainIndex"),C=T,V=x,P=d,L=l,N=h;return m(),y(N,{title:"超链接设置",modelValue:n.dialogVisible,"onUpdate:modelValue":a[3]||(a[3]=e=>n.dialogVisible=e),onClose:o.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:b((()=>[D("div",Ze,[D("div",ea,[null!=n.activeData?(m(),v("div",aa,[D("p",ta,[la,D("span",ia,w(n.activeData.type),1),na,D("span",oa,w(n.activeData.name),1)]),D("p",sa,w(n.activeData.url),1)])):(m(),v("div",ca," 暂无 "))]),D("div",ra,[k(L,{size:"small",onClick:a[1]||(a[1]=e=>o.dialogFormVisible(!1))},{default:b((()=>[z("取 消")])),_:1}),k(L,{size:"small",type:"primary",onClick:a[2]||(a[2]=e=>o.dialogFormVisible(!0))},{default:b((()=>[z("确 定")])),_:1})])])])),default:b((()=>[k(P,{type:"border-card",modelValue:n.activeName,"onUpdate:modelValue":a[0]||(a[0]=e=>n.activeName=e)},{default:b((()=>[k(c,{label:"页面",name:"pages"},{default:b((()=>["pages"==n.activeName?(m(),y(s,{key:0,onChangeData:o.activeDataFunc},null,8,["onChangeData"])):F("",!0)])),_:1}),k(c,{label:"文章",name:"Article"},{default:b((()=>["Article"==n.activeName?(m(),y(u,{key:0,onChangeData:o.activeDataFunc},null,8,["onChangeData"])):F("",!0)])),_:1}),k(c,{label:"课程",name:"CourseIndex"},{default:b((()=>["CourseIndex"==n.activeName?(m(),y(g,{key:0,onChangeData:o.activeDataFunc},null,8,["onChangeData"])):F("",!0)])),_:1}),k(c,{label:"教务",name:"EducationIndex"},{default:b((()=>["EducationIndex"==n.activeName?(m(),y(p,{key:0,onChangeData:o.activeDataFunc},null,8,["onChangeData"])):F("",!0)])),_:1}),k(c,{label:"讲师",name:"LectureIndex"},{default:b((()=>["LectureIndex"==n.activeName?(m(),y(_,{key:0,onChangeData:o.activeDataFunc},null,8,["onChangeData"])):F("",!0)])),_:1}),k(c,{label:"练习",name:"TrainIndex"},{default:b((()=>["TrainIndex"==n.activeName?(m(),y(f,{key:0,onChangeData:o.activeDataFunc},null,8,["onChangeData"])):F("",!0)])),_:1}),k(c,{label:"自定义",name:"diypage"},{default:b((()=>["diypage"==n.activeName?(m(),y(C,{key:0,onChangeData:o.activeDataFunc},null,8,["onChangeData"])):F("",!0)])),_:1}),k(c,{label:"我的菜单",name:"menu"},{default:b((()=>["menu"==n.activeName?(m(),y(V,{key:0,onChangeData:o.activeDataFunc},null,8,["onChangeData"])):F("",!0)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue","onClose"])}]]);export{da as _};
