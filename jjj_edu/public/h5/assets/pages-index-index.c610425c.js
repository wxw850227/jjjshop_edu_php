import{_ as t,c as e,g as a,o as s,a as l,w as i,b as o,F as n,r as c,n as d,d as r,e as u,t as p,i as m,f as g,S as h,h as f,j as _,k as y,l as D,m as x,p as k,q as b,s as v,u as C,v as w,x as P,y as T,z as I,A as F,B as S,C as L,D as H,E as W,G as U}from"./index-4d017ba3.js";import{r as j}from"./uni-app.es.ef2ad64d.js";import{_ as N}from"./default.bf0a2d86.js";import{_ as A,a as B}from"./time.8ee7e656.js";import{_ as z}from"./u-icon.6b7addd3.js";import{_ as M}from"./score.53a72e3e.js";import{P as R}from"./uni-popup.61fff3e1.js";const $=t({props:["currentI","navList"],components:{ssScrollNavbar:t({name:"ss-scroll-navbar",props:{navArr:{type:Array,default:()=>[{name:"推荐",category_id:"recent"}]},tabCurrentIndex:{type:Number,default:0},scrollChangeIndex:{type:Number,default:0}},data:()=>({scrollLeft:0,widthList:[],screenWidth:0}),methods:{tabChange(t){this.$emit("navbarTap",t);for(var e=this.widthList,a=0,s=0;s<t+1;s++)a+=e[s];let l=e[t];a-=this.screenWidth/2,a-=l/2,this.scrollLeft=a},calculateItemWidth(){var t=[];this.navArr.forEach(((a,s)=>{e().in(this).select("#item-"+s).fields({size:!0},(e=>{t.push(e.width)})).exec()})),this.widthList=t},calculateWindowWidth(){var t=a();this.screenWidth=t.screenWidth}},created(){var t=this;this.calculateWindowWidth(),setTimeout((function(){t.calculateItemWidth()}),1e3)},watch:{scrollChangeIndex(t){this.tabChange(t)}}},[["render",function(t,e,a,f,_,y){const D=m,x=g,k=h;return s(),l(k,{class:"ss-scroll-navbar","scroll-x":"","scroll-left":_.scrollLeft,"scroll-with-animation":"true"},{default:i((()=>[(s(!0),o(n,null,c(a.navArr,((t,e)=>(s(),l(x,{key:t.category_id,class:d(["nav-item",{current:e===a.tabCurrentIndex}]),onClick:t=>y.tabChange(e),id:"item-"+e},{default:i((()=>[r(D,{class:"title"},{default:i((()=>[u(p(t.name),1)])),_:2},1024)])),_:2},1032,["class","onClick","id"])))),128))])),_:1},8,["scroll-left"])}],["__scopeId","data-v-dc2dee24"]])},data:()=>({currentIndex:0,isFixed:!1,topHeight:0,listData:[]}),onLoad(t){this.calculateTopSectionHeight()},created(){},methods:{navbarTapHandler(t){this.currentIndex=t,this.$emit("currentIndex",t)},scrollChnage(t){t.detail.scrollTop>=this.topHeight?this.isFixed=!0:this.isFixed=!1},calculateTopSectionHeight(){var t=this;e().select(".top-section").fields({size:!0},(e=>{t.topHeight=e.height})).exec()}},watch:{currentI:function(t){this.navbarTapHandler(t)}}},[["render",function(t,e,a,o,n,c){const u=f("ss-scroll-navbar"),p=g,m=h;return s(),l(p,null,{default:i((()=>[r(m,{"scroll-y":"true",class:"scroll",onScroll:c.scrollChnage},{default:i((()=>[r(p,{class:d(["navbar-section",{"navbar-fixed-section":n.isFixed}])},{default:i((()=>[r(u,{tabCurrentIndex:n.currentIndex,onNavbarTap:c.navbarTapHandler,scrollChangeIndex:a.currentI,navArr:a.navList},null,8,["tabCurrentIndex","onNavbarTap","scrollChangeIndex","navArr"])])),_:1},8,["class"])])),_:1},8,["onScroll"])])),_:1})}],["__scopeId","data-v-df5a1180"]]);const E=t({components:{banner:t({data:()=>({indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,indicatorActiveColor:"#ffffff",current:0}),props:["itemData"],created(){this.interval=this.itemData.params.interval,this.indicatorActiveColor=this.itemData.style.btnColor},methods:{changeSwiper(t){this.current=t.detail.current},gotoPages(t){this.gotoPage(t.linkUrl)}}},[["render",function(t,e,a,u,p,m){const h=y,f=D,k=x,b=g;return s(),l(b,{class:d(["diy-banner-box pr",a.itemData.style.imgShape]),style:_("background-color:"+a.itemData.style.background+";")},{default:i((()=>[r(k,{class:"swiper",autoplay:p.autoplay,interval:p.interval,duration:p.duration,onChange:m.changeSwiper,style:_("square"==a.itemData.style.imgShape?"height:"+a.itemData.style.height+"rpx;":"height:"+.92*a.itemData.style.height+"rpx;")},{default:i((()=>[(s(!0),o(n,null,c(a.itemData.data,((t,e)=>(s(),l(f,{key:e,onClick:e=>m.gotoPages(t)},{default:i((()=>[r(h,{style:_("square"==a.itemData.style.imgShape?"height:"+a.itemData.style.height+"rpx;":"height:"+.92*a.itemData.style.height+"rpx;"),src:t.imgUrl},null,8,["style","src"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["autoplay","interval","duration","onChange","style"]),r(b,{class:d(["swiper-dots ww100 d-c-c",a.itemData.style.btnShape])},{default:i((()=>[(s(!0),o(n,null,c(a.itemData.data,((t,e)=>(s(),l(b,{class:d(p.current==e?"swiper-dot active":"swiper-dot"),style:_(p.current==e?"background-color:"+p.indicatorActiveColor+";":""),key:e},null,8,["class","style"])))),128))])),_:1},8,["class"])])),_:1},8,["class","style"])}],["__scopeId","data-v-980c1a9e"]]),imagesingle:t({data:()=>({}),props:["itemData"],methods:{gotoPages(t){this.gotoPage(t.linkUrl)}}},[["render",function(t,e,a,d,u,p){const m=y,h=g;return s(),l(h,{class:"diy-imageSingle",style:_("padding-top: "+a.itemData.style.paddingTop+"px;padding-bottom:"+a.itemData.style.paddingTop+"px; padding-left:"+a.itemData.style.paddingLeft+"px;padding-right:"+a.itemData.style.paddingLeft+"px;  background:"+a.itemData.style.background)},{default:i((()=>[(s(!0),o(n,null,c(a.itemData.data,((t,e)=>(s(),l(h,{class:"d-c-c",key:e,onClick:e=>p.gotoPages(t)},{default:i((()=>[r(m,{src:t.imgUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["style"])}],["__scopeId","data-v-af640602"]]),windows:t({data:()=>({}),props:["itemData"],methods:{gotoPages(t){this.gotoPage(t.linkUrl)}}},[["render",function(t,e,a,u,p,m){const h=y,f=g;return s(),l(f,{class:"diy-window",style:_({background:a.itemData.style.background,padding:a.itemData.style.paddingTop+"px "+a.itemData.style.paddingLeft+"px"})},{default:i((()=>[a.itemData.style.layout>-1?(s(),l(f,{key:0,class:d(["data-list","column__"+a.itemData.style.layout])},{default:i((()=>[(s(!0),o(n,null,c(a.itemData.data,((t,e)=>(s(),l(f,{class:"item",key:e,onClick:e=>m.gotoPages(t)},{default:i((()=>[r(f,{class:"item-image",style:_({padding:a.itemData.style.paddingTop+"px "+a.itemData.style.paddingLeft+"px"})},{default:i((()=>[r(h,{src:t.imgUrl,mode:"aspectFill"},null,8,["src"])])),_:2},1032,["style"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["class"])):(s(),l(f,{key:1,class:"display",style:_({padding:a.itemData.style.paddingTop+"px "+a.itemData.style.paddingLeft+"px"})},{default:i((()=>[r(f,{class:"img-box-wrap-1"},{default:i((()=>[r(f,{class:"img-box",onClick:e[0]||(e[0]=t=>m.gotoPages(a.itemData.data[0]))},{default:i((()=>[r(h,{src:a.itemData.data[0].imgUrl,mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1}),r(f,{class:"percent-w50 d-s-c d-c"},{default:i((()=>[a.itemData.data.length>=2?(s(),l(f,{key:0,class:"img-box-wrap-2"},{default:i((()=>[r(f,{class:"img-box",onClick:e[1]||(e[1]=t=>m.gotoPages(a.itemData.data[1]))},{default:i((()=>[r(h,{src:a.itemData.data[1].imgUrl,mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1})):k("",!0),r(f,{class:"d-s-c img-box-wrap-3"},{default:i((()=>[a.itemData.data.length>=3?(s(),l(f,{key:0,class:"img-box-wrap-4"},{default:i((()=>[r(f,{class:"img-box",onClick:e[2]||(e[2]=t=>m.gotoPages(a.itemData.data[2]))},{default:i((()=>[r(h,{src:a.itemData.data[2].imgUrl,mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1})):k("",!0),a.itemData.data.length>=4?(s(),l(f,{key:1,class:"img-box-wrap-4"},{default:i((()=>[r(f,{class:"img-box",onClick:e[3]||(e[3]=t=>m.gotoPages(a.itemData.data[3]))},{default:i((()=>[r(h,{src:a.itemData.data[3].imgUrl,mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1})):k("",!0)])),_:1})])),_:1})])),_:1},8,["style"]))])),_:1},8,["style"])}],["__scopeId","data-v-ba7d0e6e"]]),videos:t({data:()=>({}),props:["itemData"],methods:{}},[["render",function(t,e,a,o,n,c){const d=b,u=g;return s(),l(u,{class:"diy-video",style:_({padding:a.itemData.style.paddingTop+"px 20rpx"})},{default:i((()=>[r(d,{style:_({height:2*a.itemData.style.height+"rpx"}),src:a.itemData.params.videoUrl,poster:a.itemData.params.poster,autoplay:"1"==a.itemData.params.autoplay,controls:"",objectFit:"contain"},null,8,["style","src","poster","autoplay"])])),_:1},8,["style"])}],["__scopeId","data-v-c484c99b"]]),articles:t({data:()=>({listData:[]}),props:["itemData"],created(){this.listData=this.itemData.data},methods:{errorImg(t){let e=JSON.parse(JSON.stringify(this.listData[t]));e.image=e.image||{},e.image.file_path="/static/default.png",this.listData.splice(t,1),this.listData.splice(t,0,e)},gotoPageFunc(t){let e="pages/news/detail?article_id="+t.article_id;this.gotoPage(e)},add0:t=>t<10?"0"+t:t,format(t){var e=new Date(t),a=e.getFullYear(),s=e.getMonth()+1,l=e.getDate();return a+"-"+this.add0(s)+"-"+this.add0(l)}}},[["render",function(t,e,a,h,f,_){const D=y,x=g,b=m;return s(),l(x,{class:"diy-article"},{default:i((()=>[(s(!0),o(n,null,c(f.listData,((t,e)=>(s(),l(x,{class:d(["article-item","show-type__"+a.itemData.style.display]),key:e,onClick:e=>_.gotoPageFunc(t)},{default:i((()=>[10==a.itemData.style.display?(s(),o(n,{key:0},[r(x,{class:"picture mr15"},{default:i((()=>[t.image&&t.image.file_path?(s(),l(D,{key:0,src:t.image&&t.image.file_path,mode:"aspectFill",onError:t=>_.errorImg(e)},null,8,["src","onError"])):(s(),l(D,{key:1,src:N,mode:"aspectFill"}))])),_:2},1024),r(x,{class:"d-b-c d-stretch d-c flex-1"},{default:i((()=>[r(x,{class:"text-ellipsis-2 f26"},{default:i((()=>[u(p(t.article_title),1)])),_:2},1024),r(x,{class:"label"},{default:i((()=>[u(p(t.category&&t.category.name),1)])),_:2},1024),r(x,{class:"d-b-c gray9 f24"},{default:i((()=>[r(x,{class:"d-s-c"},{default:i((()=>[r(D,{class:"time-img",src:A,mode:""}),r(b,{class:"ml10"},{default:i((()=>[u(p(t.actual_views),1)])),_:2},1024)])),_:2},1024),r(x,{class:"d-s-c"},{default:i((()=>[r(D,{class:"time-img",src:B,mode:""}),u(" "+p(_.format(t.create_time)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],64)):k("",!0),20==a.itemData.style.display?(s(),l(x,{key:1,class:"f26 text-ellipsis-2 lh200"},{default:i((()=>[u(p(t.article_title),1)])),_:2},1024)):k("",!0)])),_:2},1032,["class","onClick"])))),128))])),_:1})}],["__scopeId","data-v-20488cb4"]]),special:t({data:()=>({listData:[],styleValue:"",index_num:0,lineHeight:0,maxSize:0,timer:null}),props:["itemData"],created(){this.listData=this.itemData.data,this.init()},methods:{init(){let t=this;(1==this.itemData.style.display&&this.listData.length>1||2==this.itemData.style.display&&this.listData.length>2)&&v({success(e){t.lineHeight=e.windowWidth/750*30,t.maxSize=t.listData.length,2==t.itemData.style.display&&(t.lineHeight=2*t.lineHeight,t.maxSize=t.maxSize/2),t.timer=setInterval((function(){t.animation()}),3e3)}})},animation(){let t=this;t.index_num++,t.index_num>=t.maxSize&&(t.index_num=0),this.styleValue=-t.lineHeight*t.index_num},gotoPageFunc(t){let e=null;e=t&&void 0!==t?"pages/article/detail/detail?article_id="+t.article_id:"pages/article/list/list",this.gotoPage(e)}}},[["render",function(t,e,a,h,f,D){const x=y,b=g,v=m;return f.listData.length>0?(s(),l(b,{key:0,class:"diy-special"},{default:i((()=>[r(b,{class:"special-left"},{default:i((()=>[r(x,{src:a.itemData.style.image,mode:"aspectFill"},null,8,["src"])])),_:1}),r(b,{class:"right-shadow"}),r(b,{class:d(["special-content","display_"+a.itemData.style.display])},{default:i((()=>[r(b,{class:"special-content-list",style:_("transform: translate(0,"+f.styleValue+"px);")},{default:i((()=>[(s(!0),o(n,null,c(f.listData,((t,e)=>(s(),l(b,{class:"content-item text-ellipsis",key:e,onClick:e=>D.gotoPageFunc(t)},{default:i((()=>[r(v,null,{default:i((()=>[u(p(t.article_title),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1},8,["style"])])),_:1},8,["class"]),r(b,{class:"special-more",onClick:e[0]||(e[0]=t=>D.gotoPageFunc())},{default:i((()=>[r(v,{class:"iconfont icon-jiantou"})])),_:1})])),_:1})):k("",!0)}],["__scopeId","data-v-5b176d92"]]),notice:t({data:()=>({textData:"",n:0,textW:0,start:0,times:null}),props:["itemData"],created(){this.textData=this.itemData.params.text,this.$nextTick((()=>{this.init()})),this.horseRaceLamp()},beforeDestroy(){clearTimeout(this.times)},methods:{init(){let t=this;v({success(a){e().in(t).select(".transtext").boundingClientRect((e=>{let a=e.width;t.textW=0,t.start=2*a})).exec()}})},horseRaceLamp(){let t=this;t.times=setTimeout((function(){t.textW--,-1*t.textW>=t.start&&(t.textW=710),t.horseRaceLamp()}),10)},gotoPages(t){this.gotoPage(t.linkUrl)}}},[["render",function(t,e,a,o,n,c){const d=y,m=g;return s(),l(m,{class:"diy-notice",style:_({padding:a.itemData.style.paddingTop+"px6px",background:a.itemData.style.background}),onClick:e[0]||(e[0]=e=>c.gotoPages(t.item))},{default:i((()=>[r(m,{class:"notice-icon"},{default:i((()=>[r(d,{src:a.itemData.params.icon,mode:"aspectFill"},null,8,["src"])])),_:1}),r(m,{class:"notice-text flex-1 text-ellipsisss"},{default:i((()=>[r(m,{class:"transtext",style:_("color:"+a.itemData.style.textColor+";left:"+n.textW+"rpx")},{default:i((()=>[u(p(n.textData),1)])),_:1},8,["style"])])),_:1})])),_:1},8,["style"])}],["__scopeId","data-v-1a8a753c"]]),titles:t({data:()=>({}),props:["itemData"],created(){},methods:{gotoPages(t){if(t&&t.params&&t.params.linkUrl){const e=t.params.linkUrl;this.gotoPage(e)}}}},[["render",function(t,e,a,o,n,c){const d=y,h=g,f=m,D=j(C("u-icon"),z);return s(),l(h,{class:"diy-notice pr",style:_({padding:a.itemData.style.paddingTop+"px 10px",background:a.itemData.style.background})},{default:i((()=>[r(h,null,{default:i((()=>["yes"==a.itemData.params.show_icon?(s(),l(h,{key:0,class:"notice-icon pr",style:_({background:a.itemData.style.background})},{default:i((()=>[r(d,{src:a.itemData.params.icon,mode:"aspectFill"},null,8,["src"])])),_:1},8,["style"])):k("",!0),r(f,{class:"pr notice-text text-ellipsisss f32 fb",style:_({background:a.itemData.style.background,color:a.itemData.style.textColor})},{default:i((()=>[u(p(a.itemData.params.title),1)])),_:1},8,["style"])])),_:1}),a.itemData.params&&a.itemData.params.linkUrl?(s(),l(h,{key:0,class:"moreWrap",onClick:e[0]||(e[0]=t=>c.gotoPages(a.itemData))},{default:i((()=>[u(" 更多"),r(D,{width:"40rpx",height:"40rpx",color:"#999999",name:"arrow-right"})])),_:1})):k("",!0)])),_:1},8,["style"])}],["__scopeId","data-v-7fccdff1"]]),richText:t({data:()=>({}),props:["itemData"],created(){},methods:{formatContent:t=>w.format_content(t)}},[["render",function(t,e,a,o,n,c){const d=g;return s(),l(d,null,{default:i((()=>[r(d,{class:"diy-richText",style:_({background:a.itemData.style.background,padding:a.itemData.style.paddingTop+"px "+a.itemData.style.paddingLeft+"px"}),innerHTML:c.formatContent(a.itemData.params.content)},null,8,["style","innerHTML"])])),_:1})}]]),navBar:t({data:()=>({item_width:"25%"}),props:["itemData"],created(){this.item_width=100/Math.abs(this.itemData.style.rowsNum)+"%"},methods:{gotoDetail(t){let e=t.linkUrl,a=e.indexOf("?category_id="),s=0;a>-1&&(s=e.substr(a+13,e.length-1)),this.$store.commit("changNavTargetCategory",s),this.gotoPage(t.linkUrl)}}},[["render",function(t,e,a,d,h,f){const D=y,x=m,k=g;return s(),l(k,null,{default:i((()=>[r(k,{class:"diy-navbar",style:_({background:a.itemData.style.background})},{default:i((()=>[(s(!0),o(n,null,c(a.itemData.data,((t,e)=>(s(),l(k,{class:"item",key:e,style:_("width:"+h.item_width+";"),onClick:e=>f.gotoDetail(t)},{default:i((()=>[r(D,{src:t.imgUrl,mode:"widthFix"},null,8,["src"]),r(x,{class:"gray3",style:_({color:t.color})},{default:i((()=>[u(p(t.text),1)])),_:2},1032,["style"])])),_:2},1032,["style","onClick"])))),128))])),_:1},8,["style"])])),_:1})}],["__scopeId","data-v-fba27412"]]),service:t({data:()=>({}),props:["itemData"],methods:{callPhone(){P({phoneNumber:this.itemData.params.phone_num})}}},[["render",function(t,e,a,o,n,c){const d=y,u=g,p=T;return s(),l(u,{class:"diy-service drag optional drag__nomove",style:_({right:a.itemData.style.right+"%",bottom:a.itemData.style.bottom+"%",opacity:a.itemData.style.opacity/100})},{default:i((()=>["phone"==a.itemData.params.type?(s(),l(u,{key:0,class:"service-icon",onClick:c.callPhone},{default:i((()=>[r(d,{src:a.itemData.params.image,mode:"aspectFill"},null,8,["src"])])),_:1},8,["onClick"])):k("",!0),"chat"==a.itemData.params.type?(s(),l(p,{key:1,class:"service-icon","open-type":"contact","session-from":"wxapp"},{default:i((()=>[r(d,{src:a.itemData.params.image,mode:"aspectFill"},null,8,["src"])])),_:1})):k("",!0)])),_:1},8,["style"])}],["__scopeId","data-v-124921a4"]]),blank:t({data:()=>({}),props:["itemData"],methods:{}},[["render",function(t,e,a,i,o,n){const c=g;return s(),l(c,{class:"diy-blank",style:_({height:a.itemData.style.height+"px",background:a.itemData.style.background})},null,8,["style"])}]]),guide:t({data:()=>({}),props:["itemData"],methods:{}},[["render",function(t,e,a,o,n,c){const d=g;return s(),l(d,{class:"diy-guide",style:_({padding:a.itemData.style.paddingTop+"px 0",background:a.itemData.style.background})},{default:i((()=>[r(d,{class:"line",style:_({borderTopWidth:a.itemData.style.lineHeight+"px",borderTopColor:a.itemData.style.lineColor,borderTopStyle:a.itemData.style.lineStyle})},null,8,["style"])])),_:1},8,["style"])}]]),Lecturer:t({components:{},data:()=>({}),props:["itemData"],created(){},methods:{scroll(t){},gotoDetail(t){let e="/pages/knowledge/lecturer/detail?lecturer_id="+t;this.gotoPage(e)}}},[["render",function(t,e,a,d,m,h){const f=y,_=g;return s(),l(_,{class:"diy-lecturer"},{default:i((()=>[r(_,{class:"display__list"},{default:i((()=>[r(_,{class:"lecturer-list column__2"},{default:i((()=>[(s(!0),o(n,null,c(a.itemData.data,((t,e)=>(s(),l(_,{class:"lecturer-item",key:e,onClick:e=>h.gotoDetail(t.lecturer_id)},{default:i((()=>[r(_,{class:"tipNum"},{default:i((()=>[r(f,{src:"/h5/assets/tixing_bg-99c0d4a2.png",mode:""}),r(_,{class:"tip-num"},{default:i((()=>[u(p(e>9?e+1:"0"+(e+1)),1)])),_:2},1024)])),_:2},1024),r(_,{class:"lecturer-cover"},{default:i((()=>[r(f,{src:t.image,mode:"aspectFill"},null,8,["src"])])),_:2},1024),r(_,{class:"lecturer-info"},{default:i((()=>[r(_,{class:"lecturer-title"},{default:i((()=>[u(p(t.name)+" ",1)])),_:2},1024),r(_,{class:"scoreList"},{default:i((()=>[(s(!0),o(n,null,c(t.star,(t=>(s(),l(f,{class:"score",key:t,src:M,mode:""})))),128))])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-5ad35457"]]),Course:t({components:{},data:()=>({}),props:["itemData"],created(){},methods:{scroll(t){},gotoDetail(t){let e="/pages/course/detail/detail?course_id="+t;this.gotoPage(e)}}},[["render",function(t,e,a,d,h,f){const _=y,D=g,x=m;return s(),l(D,{class:"diy-course"},{default:i((()=>[r(D,{class:"display__list"},{default:i((()=>[r(D,{class:"course-list column__2"},{default:i((()=>[(s(!0),o(n,null,c(a.itemData.data,((e,a)=>(s(),l(D,{class:"course-item",key:a,onClick:a=>t.gotoPage("/pages/knowledge/course/detail?course_id="+e.course_id)},{default:i((()=>[r(D,{class:"course-cover"},{default:i((()=>[r(_,{src:e.image,mode:"aspectFill"},null,8,["src"])])),_:2},1024),r(D,{class:"course-info"},{default:i((()=>[r(D,{class:"course-title"},{default:i((()=>[u(p(e.title),1)])),_:2},1024),r(D,{class:"price d-b-c"},{default:i((()=>[1==e.is_pay?(s(),l(D,{key:0,class:"f30 fb dominant"},{default:i((()=>[r(x,{class:"f22"},{default:i((()=>[u("¥")])),_:1}),r(x,{class:""},{default:i((()=>[u(p(e.money),1)])),_:2},1024)])),_:2},1024)):(s(),l(D,{key:1,class:"f30 fb dominant"},{default:i((()=>[u("免费")])),_:1})),r(D,{class:"f28 gray9"},{default:i((()=>[u("共"+p(e.sectionNum)+"节",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-30b2ae0f"]]),Train:t({components:{},data:()=>({}),props:["itemData"],created(){},methods:{scroll(t){},gotoDetail(t){let e="/pages/exam/detail/detail?exam_id="+t;this.gotoPage(e)}}},[["render",function(t,e,a,d,h,f){const _=y,D=g,x=m,k=j(C("u-icon"),z);return s(),l(D,{class:"diy-exam"},{default:i((()=>[r(D,{class:"display__list"},{default:i((()=>[r(D,{class:"exam-list column__2"},{default:i((()=>[(s(!0),o(n,null,c(a.itemData.data,((e,a)=>(s(),l(D,{class:"exam-item",key:a,onClick:a=>t.gotoPage(`/pages/examination/exam/detail?paper_id=${e.paper_id}&model=practice`)},{default:i((()=>[r(D,{class:"exam-cover"},{default:i((()=>[r(_,{src:e.image,mode:"aspectFill"},null,8,["src"])])),_:2},1024),r(D,{class:"exam-info"},{default:i((()=>[r(D,{class:"exam-title"},{default:i((()=>[u(p(e.title),1)])),_:2},1024),r(D,{class:"f24 gray9"},{default:i((()=>[u(p(e.total_answer)+"人已答题",1)])),_:2},1024),r(D,{class:"price d-b-c"},{default:i((()=>[1==e.is_pay?(s(),l(D,{key:0,class:"f30 fb dominant"},{default:i((()=>[r(x,{class:"f22"},{default:i((()=>[u("¥")])),_:1}),r(x,{class:""},{default:i((()=>[u(p(e.money),1)])),_:2},1024)])),_:2},1024)):(s(),l(D,{key:1,class:"f30 fb dominant"},{default:i((()=>[u("免费")])),_:1})),r(D,{class:"answer-btn"},{default:i((()=>[r(D,{style:{"margin-top":"-4rpx"}},{default:i((()=>[r(k,{size:"32rpx",name:"/static/image/home/bi.png"})])),_:1}),u(" 答题 ")])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-a4ed139b"]]),education:t({components:{},data:()=>({}),props:["itemData"],created(){},methods:{scroll(t){},gotoDetail(t){}}},[["render",function(t,e,a,d,h,f){const _=y,D=g,x=m;return s(),l(D,{class:"diy-education-box"},{default:i((()=>[r(D,{class:"diy-education"},{default:i((()=>[r(D,{class:"display__list"},{default:i((()=>[r(D,{class:"education-list column__2"},{default:i((()=>[(s(!0),o(n,null,c(a.itemData.data,((e,a)=>(s(),l(D,{class:"education-item",key:a,onClick:a=>t.gotoPage("/pages/eduadmin/detail?course_id="+e.course_id)},{default:i((()=>[r(D,{class:"education-cover"},{default:i((()=>[r(_,{src:e.image,mode:"aspectFill"},null,8,["src"])])),_:2},1024),r(D,{class:"education-info"},{default:i((()=>[r(D,{class:"education-title"},{default:i((()=>[u(p(e.title),1)])),_:2},1024),r(D,{class:"f24 gray9"},{default:i((()=>[u(p(e.total_answer)+"人已答题",1)])),_:2},1024),r(D,{class:"price d-b-c"},{default:i((()=>[1==e.is_pay?(s(),l(D,{key:0,class:"f30 fb dominant"},{default:i((()=>[r(x,{class:"f22"},{default:i((()=>[u("¥")])),_:1}),r(x,{class:""},{default:i((()=>[u(p(e.money),1)])),_:2},1024)])),_:2},1024)):(s(),l(D,{key:1,class:"f30 fb dominant"},{default:i((()=>[u("免费")])),_:1}))])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-d5f31870"]])},data:()=>({}),props:["diyItems"],created(){}},[["render",function(t,e,a,d,r,u){const p=f("banner"),m=f("imagesingle"),h=f("windows"),_=f("videos"),y=f("articles"),D=f("special"),x=f("notice"),b=f("titles"),v=j(C("navBar"),$),w=f("service"),P=f("richText"),T=f("blank"),I=f("guide"),F=f("Train"),S=f("Course"),L=f("Lecturer"),H=f("education"),W=g;return s(),l(W,null,{default:i((()=>[(s(!0),o(n,null,c(a.diyItems,((t,e)=>(s(),o(n,{key:e},["banner"===t.type&&null!=t.data?(s(),l(p,{key:0,itemData:t},null,8,["itemData"])):k("",!0),"imageSingle"===t.type&&null!=t.data?(s(),l(m,{key:1,itemData:t},null,8,["itemData"])):k("",!0),"window"==t.type&&null!=t.data?(s(),l(h,{key:2,itemData:t},null,8,["itemData"])):k("",!0),"video"==t.type?(s(),l(_,{key:3,itemData:t},null,8,["itemData"])):k("",!0),"article"==t.type&&null!=t.data?(s(),l(y,{key:4,itemData:t},null,8,["itemData"])):k("",!0),"special"==t.type&&null!=t.data?(s(),l(D,{key:5,itemData:t},null,8,["itemData"])):k("",!0),"notice"==t.type?(s(),l(x,{key:6,itemData:t},null,8,["itemData"])):k("",!0),"title"==t.type?(s(),l(b,{key:7,itemData:t},null,8,["itemData"])):k("",!0),"navBar"===t.type&&null!=t.data?(s(),l(v,{key:8,itemData:t},null,8,["itemData"])):k("",!0),"service"==t.type?(s(),l(w,{key:9,itemData:t},null,8,["itemData"])):k("",!0),"richText"===t.type?(s(),l(P,{key:10,itemData:t},null,8,["itemData"])):k("",!0),"blank"==t.type?(s(),l(T,{key:11,itemData:t},null,8,["itemData"])):k("",!0),"guide"==t.type?(s(),l(I,{key:12,itemData:t},null,8,["itemData"])):k("",!0),"train"==t.type&&null!=t.data?(s(),l(F,{key:13,itemData:t},null,8,["itemData"])):k("",!0),"course"==t.type&&null!=t.data?(s(),l(S,{key:14,itemData:t},null,8,["itemData"])):k("",!0),"lecturer"==t.type&&null!=t.data?(s(),l(L,{key:15,itemData:t},null,8,["itemData"])):k("",!0),"education"==t.type&&null!=t.data?(s(),l(H,{key:16,itemData:t},null,8,["itemData"])):k("",!0)],64)))),128))])),_:1})}]]);const q=t({components:{diy:E,Homepush:t({components:{Popup:R},data:()=>({isPopup:!1,type:0,width:600,height:800,backgroundColor:"none",boxShadow:"none",form:{},coupon:[]}),props:["homepush_data"],created(){},mounted(){this.setData()},methods:{setData(){this.isPopup=!0,this.form=this.homepush_data,this.type=this.homepush_data.type,this.coupon=this.homepush_data.coupon},hidePopupFunc(t){I("homepush_name",this.homepush_data.name),this.isPopup=!1},jumpPage(t){this.hidePopupFunc(),this.gotoPage(t)},getCoupon(){let t=this,e=[];t.coupon.forEach((t=>{e.push(t.coupon_id)})),t._get("user.coupon/receiveList",{coupon_ids:JSON.stringify(e)},(function(e){F({title:"领取成功",icon:"success",mask:!0,duration:2e3}),t.hidePopupFunc()}))}}},[["render",function(t,e,a,h,_,D){const x=y,b=g,v=T,C=m,w=f("Popup");return s(),l(b,{class:"home-push-wrap"},{default:i((()=>[r(w,{show:_.isPopup,width:_.width,height:_.height,backgroundColor:_.backgroundColor,boxShadow:_.boxShadow,padding:0,onHidePopup:D.hidePopupFunc},{default:i((()=>[r(b,{class:d(["home-push",1==_.type||3==_.type?"home-push-bg":""])},{default:i((()=>[1==_.type?(s(),l(b,{key:0,class:"image-text"},{default:i((()=>[r(b,{class:"pic"},{default:i((()=>[r(x,{src:_.form.file_path,mode:"aspectFill"},null,8,["src"])])),_:1}),r(b,{class:"title"},{default:i((()=>[u(p(_.form.title),1)])),_:1}),r(b,{class:"des"},{default:i((()=>[u(p(_.form.remark),1)])),_:1}),r(b,{class:"btns"},{default:i((()=>[r(v,{type:"primary",onClick:e[0]||(e[0]=t=>D.jumpPage(_.form.link.url))},{default:i((()=>[u(p(_.form.des),1)])),_:1})])),_:1})])),_:1})):k("",!0),2==_.type?(s(),l(b,{key:1,class:"image-only",onClick:e[1]||(e[1]=t=>D.jumpPage(_.form.link.url))},{default:i((()=>[r(b,{class:"pic"},{default:i((()=>[r(x,{src:_.form.file_path,mode:"aspectFill"},null,8,["src"])])),_:1})])),_:1})):k("",!0),3==_.type?(s(),l(b,{key:2,class:"cuopon"},{default:i((()=>[null!=_.form.file_path&&""!=_.form.file_path?(s(),l(b,{key:0,class:"cuopon-title d-c-c"},{default:i((()=>[r(x,{src:_.form.file_path,mode:"aspectFill"},null,8,["src"])])),_:1})):k("",!0),r(b,{class:"list"},{default:i((()=>[(s(!0),o(n,null,c(_.coupon,((t,e)=>(s(),l(b,{class:"item",key:e},{default:i((()=>[r(b,{class:"info"},{default:i((()=>[r(b,{class:"num"},{default:i((()=>[r(C,{class:"f30"},{default:i((()=>[u(p(t.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),r(b,{class:"explan"},{default:i((()=>[r(C,{class:"name"},{default:i((()=>[u(p(t.type),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),r(b,{class:"btns"},{default:i((()=>[r(v,{type:"primary",onClick:e[2]||(e[2]=t=>D.getCoupon())},{default:i((()=>[u("立即领取")])),_:1})])),_:1})])),_:1})):k("",!0)])),_:1},8,["class"]),r(b,{class:"close-btns",onClick:e[3]||(e[3]=t=>D.hidePopupFunc(!0))},{default:i((()=>[r(C,{class:"icon iconfont icon-guanbi"})])),_:1})])),_:1},8,["show","width","height","backgroundColor","boxShadow","onHidePopup"])])),_:1})}],["__scopeId","data-v-3e9dd957"]])},data:()=>({loading:!0,loadding:!0,background:"",listData:[],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,items:null,is_collection:!1,is_follow:"0",is_homepush:!1,homepush_data:{},target:0,page:1,last_page:0,no_more:!1,title_name:"",title_type:"text",bgcolor:"",urldata:"",jweixin:null,toplogo:"",titleTextColor:"",diytop:0,showSearch:!1,openCategory:{color:"#000000",open:0}}),onTabItemTap(){window.location.href=config.app_url+config.h5_addr+"/pages/index/index"},onLoad(t){t.invitation_id&&I("invitation_id",t.invitation_id),t.referee_id&&I("referee_id",t.referee_id),this.isWeixin()&&(this.urldata=window.location.href),this.getData()},methods:{getData(){let t=this;S({title:"加载中"}),t._get("index/index",{url:t.urldata},(function(e){t.listData=e.data.list,t.background=e.data.background,t.items=e.data.items,t.title_name=e.data.page.params.title,t.bgcolor=e.data.page.style.titleBackgroundColor,t.setPage(e.data.page),t.toplogo=e.data.page.style.toplogo,t.title_type=e.data.page.params.title_type,t.titleTextColor=e.data.page.style.titleTextColor;let a=L("homepush_name");if(e.data.setting.homepush.is_open&&a!=e.data.setting.homepush.name&&(t.homepush_data=e.data.setting.homepush,t.is_homepush=!0,t.is_homepush=!0),""!=t.urldata){t.jweixin=t.configWxScan(e.data.signPackage);let a={};t.configWx(e.data.share.signPackage,e.data.share.shareParams,a)}H(),t.loadding=!1}))},setPage(t){W({title:t.params.name});let e="#000000";"white"==t.style.titleTextColor&&(e="#ffffff"),U({frontColor:e,backgroundColor:"#ffffff"})},scroll(t){this.diytop=t.detail.scrollTop},onShareAppMessage(){return{title:this.title_name,path:"/pages/index/index?"+this.getShareUrlParams()}},stopTouchMove:()=>!0,scanQrcode:function(){let t=this;t.jweixin.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){t.gotoPage("/pages/store/clerkorder?order_no="+e.resultStr)},error:function(t){F({title:"扫码失败，请重试"})}})},closeSearch(){this.showSearch=!1}}},[["render",function(t,e,a,o,n,c){const h=g,D=m,x=y,b=j(C("diy"),E),v=T,w=f("Homepush");return s(),l(h,{"data-theme":t.theme(),class:d(t.theme()||"")},{default:i((()=>[r(h,{class:"top_head pr",style:_("background-color: "+n.bgcolor+";")},{default:i((()=>[r(h,{class:"state_top"}),r(h,{class:"head_top",style:_("height:"+t.topBarTop()+"px;")},null,8,["style"]),r(h,{class:"d-b-c",style:_(0==t.topBarHeight()?"":"height:"+t.topBarHeight()+"px;")},{default:i((()=>[r(h,{class:"index_log"},{default:i((()=>["text"==n.title_type?(s(),l(D,{key:0,style:_("color:"+n.titleTextColor+";")},{default:i((()=>[u(p(n.title_name),1)])),_:1},8,["style"])):(s(),l(x,{key:1,src:n.toplogo||"/static/logo.png",mode:"heightFix"},null,8,["src"]))])),_:1}),r(h,{class:"d-s-c flex-1"},{default:i((()=>[r(h,{class:"top_search special gray9",style:_("height:"+t.topBarHeight()+" px;"),onClick:e[0]||(e[0]=e=>t.gotoPage("/pages/knowledge/index"))},{default:i((()=>[r(D,{class:"icon iconfont icon-sousuo"}),u("搜索... ")])),_:1},8,["style"])])),_:1}),r(h,{class:"d-e-c p-0-20"})])),_:1},8,["style"]),r(h,{style:{height:"20rpx"}})])),_:1},8,["style"]),null!=n.items?(s(),l(b,{key:0,diyItems:n.items},null,8,["diyItems"])):k("",!0),n.is_collection?(s(),l(h,{key:1,class:"collection-box",style:_("top:"+(t.topBarTop()+t.topBarHeight()+10)+"px;")},{default:i((()=>[r(h,{class:"inner"},{default:i((()=>[r(D,null,{default:i((()=>[u(" 点击“")])),_:1}),r(D,{class:"point"},{default:i((()=>[u(".")])),_:1}),r(D,{class:"point point-big"},{default:i((()=>[u(".")])),_:1}),r(D,{class:"point"},{default:i((()=>[u(".")])),_:1}),r(D,null,{default:i((()=>[u("”添加到我的小程序，\\n微信首页下拉即可快速访问店铺 ")])),_:1})])),_:1}),r(v,{type:"primary",class:"close-btn",onClick:e[1]||(e[1]=t=>n.is_collection=!1)},{default:i((()=>[u("x")])),_:1})])),_:1},8,["style"])):k("",!0),n.is_homepush?(s(),l(w,{key:2,homepush_data:n.homepush_data},null,8,["homepush_data"])):k("",!0)])),_:1},8,["data-theme","class"])}],["__scopeId","data-v-685481df"]]);export{q as default};
