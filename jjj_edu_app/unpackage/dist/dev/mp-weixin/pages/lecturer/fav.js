"use strict";const t=require("../../common/vendor.js"),g=()=>"../../components/empty.js",p=()=>"../../components/uni-load-more.js",u={components:{empty:g,uniLoadMore:p},data(){return{loading:!1,page:1,list_rows:10,listData:[],last_page:1,no_more:!1}},computed:{loadingType(){return this.loading?1:this.listData.length!=0&&this.no_more?2:0}},onShow(){},onLoad(){this.fetchData()},onReachBottom(){let e=this;e.page<e.last_page&&(e.page++,e.getData()),e.no_more=!0},methods:{fetchData(){this.page=1,this.category_id=0,this.search="",this.listData=[],this.getData()},getData(){let e=this;e._get("lecturer.Favorite/list",{page:e.page||1,list_rows:e.list_rows,category_id:e.category_id,search:e.search},a=>{e.listData=e.listData.concat(a.data.list.data),e.last_page=a.data.list.last_page,a.data.list.last_page<=1&&(e.no_more=!0),e.loading=!1,t.index.hideLoading()})},clickFav(e){let a=this;e.lecturer_id&&a._post("lecturer.Favorite/fav ",{lecturer_id:e.lecturer_id},function(n){a.fetchData()})}}};if(!Array){const e=t.resolveComponent("empty"),a=t.resolveComponent("uni-load-more");(e+a)()}function d(e,a,n,m,r,l){return t.e({a:r.listData&&r.listData.length>0},r.listData&&r.listData.length>0?{b:t.f(r.listData,(o,i,f)=>({a:o.lecturer.image&&o.lecturer.image.file_path,b:t.t(o.lecturer.name),c:t.o(s=>l.clickFav(o,i),i),d:t.f(o.lecturer.star,(s,c,_)=>({a:s})),e:t.f(o.lecturer.label,(s,c,_)=>({a:t.t(s),b:s})),f:t.o(s=>e.gotoPage(`/pages/knowledge/lecturer/detail?lecturer_id=${o.lecturer_id}`),i),g:i}))}:{},{c:r.listData.length==0&&!r.loading},r.listData.length==0&&!r.loading?{}:{d:t.p({loadingType:l.loadingType})})}const h=t._export_sfc(u,[["render",d],["__scopeId","data-v-76ead459"],["__file","D:/phpstudy_pro/www3/jjj_edu_small/jjj_edu_app/pages/lecturer/fav.vue"]]);wx.createPage(h);
