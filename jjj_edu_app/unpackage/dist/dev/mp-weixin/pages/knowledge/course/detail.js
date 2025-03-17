"use strict";const i=require("../../../common/vendor.js"),g=require("../../../common/utils.js"),p=()=>"./part/share.js",_=()=>"./part/buy.js",h=()=>"./part/comment.js",f=()=>"../../../components/empty.js",m={components:{Buy:_,share:p,comment:h,empty:f},data(){return{tabList:[{key:"目录",value:0},{key:"详情",value:1},{key:"评价",value:2}],videoContext:null,phoneHeight:0,scrollviewHigh:0,loadding:!0,indicatorDots:!0,autoplay:!1,interval:6e3,duration:500,isPopup:!1,isPassword:!1,isbottmpanel:!1,isPay:!1,course_id:null,detail:{sectionNum:0,buyCount:0,title:"",commentCount:0,browse_count:0,banner:[]},appParams:{share_type:0,title:"",summary:"",path:"",image:""},isVideoPlay:!1,is_fav:!1,activeName:0,comment_list:[],room_id:0,item:null,ios_login:"20",platform:"",videoAutoplay:!0,shareloading:!1}},onReady(){this.videoContext=i.index.createVideoContext("myVideo"),i.index.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#F5F5F5"})},onHide(){this.videoPause()},onLoad(t){let o=g.utils.getSceneData(t);t.room_id&&(this.room_id=t.room_id),this.course_id=t.course_id?t.course_id:o.gid},mounted(){this.init(),this.getData(),this.getList()},methods:{changTab(t){this.activeName=t.value,this.activeName==2&&this.$nextTick(()=>{this.$refs.commentRef.getData(this.course_id)})},gotoLast(){let t=this,s=(i.index.getStorageSync("courseLast")||{})[t.course_id];console.log(s),s&&t.gotoPage("/pages/knowledge/course/section-detail?section_id="+s+"&course_id="+t.course_id)},dowloadPDF(t,o){let s=this;i.index.showLoading({title:"加载中"}),i.index.downloadFile({url:t,success:function(a){if(console.log(a),a.statusCode==200){var e=a.tempFilePath;i.index.saveFile({tempFilePath:e,success:function(n){var l=n.savedFilePath;s.fSetFileName(l,o,t)},fail:n=>{i.index.showToast({title:"保存文件失败请重试",icon:"none"})}})}else i.index.showToast({title:"打开文件失败请重试",icon:"none"});i.index.hideLoading()},fail:a=>{i.index.hideLoading(),i.index.showToast({title:"加载失败请重试",icon:"none"})}})},fSetFileName(t,a,s){var a=a.split("/")[a.split("/").length-1],e=t.split("/").splice(0,t.split("/").length-1),n=s;let l=plus.downloader.createDownload(n,{filename:"file://"+e.join("/")+"/"+a},(r,c)=>{if(c==200){let d=plus.io.convertLocalFileSystemURL(r.filename);this.fGetSavedFileList(),i.index.openDocument({filePath:d,fail:u=>{i.index.showToast({title:"打开失败"+u})}})}else plus.downloader.clear()});l.setRequestHeader("Authorization","Bearer "+i.index.getStorageSync("SET_TOKEN")),l.start()},fGetSavedFileList(){i.index.getSavedFileList({success:t=>{t.fileList.forEach(o=>{let s=o.filePath.split("/"),a=s[s.length-1].split(".")[0];parseFloat(a).toString()=="NaN"?console.log(t.fileList):plus.io.resolveLocalFileSystemURL(o.filePath,e=>{e.remove(n=>{plus.console.log("Remove succeeded")},n=>{alert(n.message)})})})}})},MoveTo(t,o){let s=t.split("/"),a=s.reverse()[0];s=s.reverse(),s=s.slice(0,-1);let e=s.join("/")+"/";console.log(a),console.log(e);let n=o;plus.io.resolveLocalFileSystemURL(e+a,function(l){l.moveTo({fullPath:e},n,function(r){i.index.showToast({title:"保存成功",icon:"none"})},function(r){i.index.showToast({title:"文件保存失败或者文件已存在",icon:"none"})})},function(l){console.log("失败"),console.log(l)})},getimg(){return this.detail.banner&&this.detail.banner.length>0?this.detail.banner[0].file_path:""},videoPause(){this.videoContext.pause()},openMaservice(){this.gotoPage("pages/common/service")},submit(){this.isPopup=!0},closeBuy(t){t=="pay"&&(this.isPay=!0),t=="password"&&(this.isPassword=!0),this.isPopup=!1},closePassword(t){let o=this;if(t){let s=i.index.getStorageSync("coursePss")||{};s[o.course_id]=t,i.index.setStorageSync("coursePss",s),o.gotoPage("/pages/knowledge/course/section-detail?section_id="+o.section_id+"&course_id="+o.course_id)}this.isPassword=!1},closeCashier(t){t&&(this.getData(),this.getList()),this.isPay=!1},init(){let t=this;i.index.getSystemInfo({success(o){t.phoneHeight=o.windowHeight,i.index.createSelectorQuery().select(".btns-wrap").boundingClientRect(a=>{let e=t.phoneHeight-a.height;t.scrollviewHigh=e}).exec()}})},getList(){let t=this,o=t.course_id;i.index.showLoading({title:"加载中"}),t._get("course.comment/list",{course_id:o},function(s){t.comment_list=s.data.list.data,t.loadding=!1,i.index.hideLoading()})},getData(){let t=this,o=t.course_id;i.index.showLoading({title:"加载中"}),t._get("course.course/detail",{course_id:o},function(s){t.ios_login=s.data.ios_login,t.detail=s.data.detail,t.is_fav=s.data.detail.isFav,t.loadding=!1,i.index.hideLoading()})},lookEvaluate(t){this.gotoPage("/pages/product/detail/look-evaluate/look-evaluate?course_id="+t)},goback(){getCurrentPages().length<=1?i.index.switchTab({url:"/pages/index/index"}):i.index.navigateBack()},changeSwiper(){this.isVideoPlay=!1},toLogin(){let t=this;i.index.showActionSheet({title:"开通账号,可享受平台会员权益,游客身份仅对当前设备有效",itemList:["登录账号(推荐)","继续以游客身份操作"],success:function(o){o.tapIndex==0?t.gotoPage("/pages/login/openlogin"):t.visitorLogin()},fail:function(o){console.log(o.errMsg)}})},visitorLogin(){let t=this,o=plus.device.uuid;t._post("user.useropen/visitLogin",{UUID:o},function(s){console.log(s),i.index.setStorageSync("token",s.data.token),i.index.setStorageSync("user_id",s.data.user_id),t.toPay()},s=>{console.log(s)})},toPay(){let t=this;if(t.platform=i.index.getSystemInfoSync().platform,t.ios_login=="10"&&t.platform=="ios"&&!i.index.getStorageSync("token")){t.toLogin();return}t.gotoPage(`/pages/order/confirm?course_id=${t.course_id}&type=course`)},gotoOrderSection(t){let o=this;if(!t){i.index.showModal({title:"提示",content:"该课程暂无章节"});return}o.section_id=t.section_id;let s={course_id:o.course_id,pay_source:o.getPlatform()};o._post("course.order/buy",s,function(a){let e="/pages/knowledge/course/section-detail?section_id="+t.section_id+"&course_id="+o.course_id;o.gotoPage(e,"reLaunch")})},gotoSection(t){let o=this;if(!t){i.index.showModal({title:"提示",content:"该课程暂无章节"});return}if(o.section_id=t.section_id,o.detail.is_pay==0){o.gotoPage("/pages/knowledge/course/section-detail?section_id="+t.section_id+"&course_id="+o.course_id);return}if(t.is_see&&o.gotoPage("/pages/knowledge/course/section-detail?section_id="+t.section_id+"&course_id="+o.course_id),o.detail.payStatus>0){o.gotoPage("/pages/knowledge/course/section-detail?section_id="+t.section_id+"&course_id="+o.course_id);return}},showShare(){let t=this;t.isbottmpanel=!0},closeBottmpanel(t){this.isbottmpanel=!1,t.type==2&&(this.poster_img=t.poster_img,this.isCreatedImg=!0)},favorite(){let t=this;t._post("course.Favorite/fav",{course_id:t.course_id},o=>{t.is_fav?(i.index.showToast({icon:"none",title:"取消成功"}),t.is_fav=!1):(i.index.showToast({icon:"none",title:"收藏成功，请到“我的->我的课程”查看和管理哦"}),t.is_fav=!0)})},showHShare(){window.location.href=this.websiteUrl+"/download?id="+this.course_id+"&type=2"}}};if(!Array){const t=i.resolveComponent("empty"),o=i.resolveComponent("comment"),s=i.resolveComponent("share"),a=i.resolveComponent("Cashier"),e=i.resolveComponent("Buy");(t+o+s+a+e)()}function v(t,o,s,a,e,n){return i.e({a:!e.loadding},e.loadding?{}:i.e({b:e.detail.video_link!=""},e.detail.video_link!=""?i.e({c:!e.isVideoPlay},e.isVideoPlay?{}:{d:i.o(l=>e.isVideoPlay=!0)},{e:!e.isVideoPlay},e.isVideoPlay?{}:{f:e.detail.video_image?e.detail.video_image:n.getimg(),g:i.o(l=>e.isVideoPlay=!0)},{h:e.isVideoPlay},e.isVideoPlay?{i:e.isVideoPlay,j:e.detail.video_link}:{}):{},{k:i.f(e.detail.banner,(l,r,c)=>({a:i.o(d=>n.gotoLast(),r),b:l.file_path,c:r})),l:e.indicatorDots,m:e.autoplay,n:e.interval,o:e.duration,p:i.o((...l)=>n.changeSwiper&&n.changeSwiper(...l)),q:i.t(e.detail.title),r:i.f(e.detail.label,(l,r,c)=>({a:i.t(l),b:r})),s:e.detail.is_pay==0},e.detail.is_pay==0?{}:{},{t:e.detail.is_pay==1},e.detail.is_pay==1?{v:i.t(e.detail.course_price)}:{},{w:e.is_fav?"/static/image/sc_add.png":"/static/image/sc_quxiao.png",x:i.n(e.is_fav?"red":"gray6"),y:i.o(l=>n.favorite()),z:i.o((...l)=>n.showShare&&n.showShare(...l)),A:i.t(e.detail.sectionNum),B:i.t(e.detail.browse_count),C:e.detail.lecturer},e.detail.lecturer?{D:e.detail.lecturer&&e.detail.lecturer.image&&e.detail.lecturer.image.file_path,E:i.t(e.detail.lecturer.name),F:i.f(e.detail.label,(l,r,c)=>({a:i.t(l),b:r})),G:i.o(l=>t.gotoPage("/pages/knowledge/lecturer/detail?lecturer_id="+e.detail.lecturer.lecturer_id))}:{},{H:i.f(e.tabList,(l,r,c)=>({a:i.t(l.key),b:l,c:l.value==e.activeName?1:"",d:i.o(d=>n.changTab(l),l)})),I:e.activeName==0},e.activeName==0?i.e({J:e.detail.section&&e.detail.section.length>0},e.detail.section&&e.detail.section.length>0?{K:i.f(e.detail.section,(l,r,c)=>i.e({a:i.t(l.title)},e.detail.is_pay==1?i.e({b:e.detail.payStatus==0&&!l.is_see},e.detail.payStatus==0&&!l.is_see?{}:e.detail.payStatus!=0?{}:e.detail.payStatus==0?{}:{},{c:e.detail.payStatus!=0,d:e.detail.payStatus==0}):{},{e:r,f:i.o(d=>n.gotoSection(l),r)})),L:e.detail.is_pay==1}:{M:i.p({desc:"暂无目录"})}):{},{N:e.activeName==1},e.activeName==1?i.e({O:e.detail.content},e.detail.content?{P:e.detail.content}:{Q:i.p({desc:"暂无详情"})}):{},{R:e.activeName==2},e.activeName==2?{S:i.sr("commentRef","01539dcb-2")}:{},{T:i.s("height:"+e.scrollviewHigh+"px")}),{U:i.o(l=>t.gotoPage("/pages/index/index")),V:e.detail.is_pay==1},e.detail.is_pay==1?i.e({W:e.detail.payStatus==0},e.detail.payStatus==0?{X:i.t(e.detail.course_price),Y:i.o(l=>n.toPay())}:{}):i.e({Z:e.detail.payStatus>0},e.detail.payStatus>0?{aa:i.o(l=>n.gotoSection(e.detail.section[0]))}:{},{ab:e.detail.payStatus==0},e.detail.payStatus==0?{ac:i.o(l=>n.gotoOrderSection(e.detail.section[0]))}:{}),{ad:i.o(n.closeBottmpanel),ae:i.p({isbottmpanel:e.isbottmpanel,course_id:e.course_id}),af:i.o(n.closeCashier),ag:i.p({isPopup:e.isPay,course_id:e.course_id,room_id:e.room_id,price:e.detail.course_price}),ah:i.o(n.closeBuy),ai:i.p({isPopup:e.isPopup})})}const y=i._export_sfc(m,[["render",v],["__scopeId","data-v-01539dcb"],["__file","D:/phpstudy_pro/www3/jjj_edu_small/jjj_edu_app/pages/knowledge/course/detail.vue"]]);wx.createPage(y);
