"use strict";const t=require("../../common/vendor.js"),c=require("../../common/utils.js"),s=()=>"../../components/app-share.js",l={components:{AppShare:s},data(){return{loadding:!1,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,article_id:0,article:{image:{}},urldata:"",isAppShare:!1,appParams:{title:"",summary:"",path:""}}},onLoad(e){this.article_id=e.article_id},mounted(){this.getData()},onShareAppMessage(){let e=this,a=e.getShareUrlParams({article_id:e.article_id});return{title:e.article.article_title,path:"/pages/news/detail?"+a}},methods:{copyUrl(){var e=document.createElement("input");let a=window.location.href;e.value=a,document.body.appendChild(e),e.select(),e.setSelectionRange(0,e.value.length),document.execCommand("Copy"),document.body.removeChild(e),t.index.showToast({title:"复制成功",icon:"success",mask:!0,duration:2e3})},shareFunc(){},closeAppShare(e){this.isAppShare=!1},getData(){let e=this;t.index.showLoading({title:"加载中"}),e.loading=!0;let a=e.article_id;e._get("plus.article.article/detail",{article_id:a,url:e.urldata},function(r){r.data.detail.article_content=c.utils.format_content(r.data.detail.article_content),console.log(r.data.detail.article_content),e.article=r.data.detail,e.loadding=!0,t.index.hideLoading()})}}};if(!Array){const e=t.resolveComponent("tabBar"),a=t.resolveComponent("AppShare");(e+a)()}function d(e,a,r,u,i,n){return t.e({a:i.loadding},i.loadding?{b:t.t(i.article.article_title),c:t.t(i.article.category.name),d:t.t(i.article.create_time),e:t.o((...o)=>n.shareFunc&&n.shareFunc(...o)),f:i.article.article_content,g:t.o(n.closeAppShare),h:t.p({isAppShare:i.isAppShare,appParams:i.appParams}),i:e.theme(),j:t.n(e.theme()||"")}:{})}const p=t._export_sfc(l,[["render",d],["__file","D:/phpstudy_pro/www3/jjj_edu_small/jjj_edu_app/pages/news/detail.vue"]]);l.__runtimeHooks=2;wx.createPage(p);
