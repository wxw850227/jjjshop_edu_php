"use strict";const t=require("../../../common/vendor.js"),l=()=>"../../../components/concatMask.js",r=()=>"../../../components/empty.js",c=()=>"../../../components/uni-load-more.js",_={components:{concatMask:l,empty:r,uniLoadMore:c},data(){return{list_rows:10,page:1,loading:!1,listData:[],last_page:1,no_more:!1}},computed:{loadingType(){return this.loading?1:this.listData.length!=0&&this.no_more?2:0}},onShow(){this.listData=[],this.page=1,this.getData()},onReachBottom(){let e=this;e.page<e.last_page&&(e.page++,e.getData()),e.no_more=!0},methods:{getData(){let e=this;t.index.showLoading({title:"加载中"}),e._get("user.Order/myClasses",{page:e.page||1,list_rows:e.list_rows},o=>{e.listData=e.listData.concat(o.data.list.data),e.last_page=o.data.list.last_page,o.data.list.last_page<=1&&(e.no_more=!0),e.loading=!1,t.index.hideLoading()})},gotoClass(e){this.$refs.concatRef.openShow(e)}}};if(!Array){const e=t.resolveComponent("empty"),o=t.resolveComponent("uni-load-more"),n=t.resolveComponent("concatMask");(e+o+n)()}function p(e,o,n,m,s,i){return t.e({a:t.f(s.listData,(a,d,u)=>t.e({a:t.t(a.title),b:a.wx_image},a.wx_image?{}:a.qq_image?{}:{},{c:a.qq_image,d:t.o(h=>i.gotoClass(a),a),e:a})),b:s.listData.length==0&&!s.loading},s.listData.length==0&&!s.loading?{}:{c:t.p({loadingType:i.loadingType})},{d:t.sr("concatRef","91e740dc-2")})}const g=t._export_sfc(_,[["render",p],["__file","D:/phpstudy_pro/www3/jjj_edu_small/jjj_edu_app/pages/user/class/index.vue"]]);wx.createPage(g);
