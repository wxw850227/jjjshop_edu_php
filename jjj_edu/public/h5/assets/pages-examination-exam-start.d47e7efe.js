import{a6 as e,_ as t,a7 as i,a8 as s,u as a,o as n,a as o,w as l,d as r,R as u,b as c,F as d,r as h,n as m,j as p,p as _,f,T as g,A as x,C as y,z as v,U as q,e as k,t as b,i as w,y as I,k as C}from"./index-db1fe3c3.js";import{_ as S}from"./u-icon.6f07718a.js";import{r as T}from"./uni-app.es.bf5e67d0.js";import{_ as Q}from"./u-parse.d0690550.js";const $=t({name:"u-rate",mixins:[i,s,{props:{modelValue:{type:[String,Number],default:e.rate.value},count:{type:[String,Number],default:e.rate.count},disabled:{type:Boolean,default:e.rate.disabled},readonly:{type:Boolean,default:e.rate.readonly},size:{type:[String,Number],default:e.rate.size},inactiveColor:{type:String,default:e.rate.inactiveColor},activeColor:{type:String,default:e.rate.activeColor},gutter:{type:[String,Number],default:e.rate.gutter},minCount:{type:[String,Number],default:e.rate.minCount},allowHalf:{type:Boolean,default:e.rate.allowHalf},activeIcon:{type:String,default:e.rate.activeIcon},inactiveIcon:{type:String,default:e.rate.inactiveIcon},touchable:{type:Boolean,default:e.rate.touchable}}}],data(){return{elId:uni.$u.guid(),elClass:uni.$u.guid(),rateBoxLeft:0,activeIndex:this.modelValue,rateWidth:0,moving:!1}},watch:{modelValue(e){this.activeIndex=e},activeIndex:"emitEvent"},emits:["update:modelValue","change"],methods:{init(){uni.$u.sleep().then((()=>{this.getRateItemRect(),this.getRateIconWrapRect()}))},async getRateItemRect(){await uni.$u.sleep(),this.$uGetRect("#"+this.elId).then((e=>{this.rateBoxLeft=e.left}))},getRateIconWrapRect(){this.$uGetRect("."+this.elClass).then((e=>{this.rateWidth=e.width}))},touchMove(e){if(!this.touchable)return;this.preventEvent(e);const t=e.changedTouches[0].pageX;this.getActiveIndex(t)},touchEnd(e){if(!this.touchable)return;this.preventEvent(e);const t=e.changedTouches[0].pageX;this.getActiveIndex(t)},clickHandler(e,t){if("ios"===uni.$u.os()&&this.moving)return;this.preventEvent(e);let i=0;i=e.changedTouches[0].pageX,this.getActiveIndex(i,!0)},emitEvent(){this.$emit("change",this.activeIndex),this.$emit("update:modelValue",this.activeIndex)},getActiveIndex(e,t=!1){if(this.disabled||this.readonly)return;const i=this.rateWidth*this.count+this.rateBoxLeft,s=e=uni.$u.range(this.rateBoxLeft,i,e)-this.rateBoxLeft;let a;if(this.allowHalf){a=Math.floor(s/this.rateWidth);const e=s%this.rateWidth;e<=this.rateWidth/2&&e>0?a+=.5:e>this.rateWidth/2&&a++}else{a=Math.floor(s/this.rateWidth);const e=s%this.rateWidth;t?e>0&&a++:e>this.rateWidth/2&&a++}this.activeIndex=Math.min(a,this.count),this.activeIndex<this.minCount&&(this.activeIndex=this.minCount),setTimeout((()=>{this.moving=!0}),10),setTimeout((()=>{this.moving=!1}),10)}},mounted(){this.init()}},[["render",function(e,t,i,s,g,x){const y=T(a("u-icon"),S),v=f;return n(),o(v,{class:"u-rate",id:g.elId,ref:"u-rate",style:p([e.$u.addStyle(e.customStyle)])},{default:l((()=>[r(v,{class:"u-rate__content",onTouchmove:u(x.touchMove,["stop"]),onTouchend:u(x.touchEnd,["stop"])},{default:l((()=>[(n(!0),c(d,null,h(Number(e.count),((t,i)=>(n(),o(v,{class:m(["u-rate__content__item",[g.elClass]]),key:i},{default:l((()=>[r(v,{class:"u-rate__content__item__icon-wrap",ref_for:!0,ref:"u-rate__content__item__icon-wrap",onClick:u((e=>x.clickHandler(e,i+1)),["stop"])},{default:l((()=>[r(y,{name:Math.floor(g.activeIndex)>i?e.activeIcon:e.inactiveIcon,color:e.disabled?"#c8c9cc":Math.floor(g.activeIndex)>i?e.activeColor:e.inactiveColor,"custom-style":{padding:`0 ${e.$u.addUnit(e.gutter/2)}`},size:e.size},null,8,["name","color","custom-style","size"])])),_:2},1032,["onClick"]),e.allowHalf?(n(),o(v,{key:0,onClick:u((e=>x.clickHandler(e,i+1)),["stop"]),class:"u-rate__content__item__icon-wrap u-rate__content__item__icon-wrap--half",style:p([{width:e.$u.addUnit(g.rateWidth/2)}]),ref_for:!0,ref:"u-rate__content__item__icon-wrap"},{default:l((()=>[r(y,{name:Math.ceil(g.activeIndex)>i?e.activeIcon:e.inactiveIcon,color:e.disabled?"#c8c9cc":Math.ceil(g.activeIndex)>i?e.activeColor:e.inactiveColor,"custom-style":{padding:`0 ${e.$u.addUnit(e.gutter/2)}`},size:e.size},null,8,["name","color","custom-style","size"])])),_:2},1032,["onClick","style"])):_("",!0)])),_:2},1032,["class"])))),128))])),_:1},8,["onTouchmove","onTouchend"])])),_:1},8,["id","style"])}],["__scopeId","data-v-d51c1c48"]]);const A=t({data:()=>({paper_id:0,record_id:0,time:"",question:[],answer:[],Qsindex:0,clock:!1,examTime:0,timer:1,intTimer:null,examTimeText:"",model:null,muultipleStem:!0}),onLoad(e){this.paper_id=e.paper_id,this.model=e.model,this.getData(),this.$fire.on("Qsindex",(e=>{this.Qsindex=e}))},beforeDestroy(){clearInterval(this.intTimer),this.intTimer=null},watch:{},computed:{getExamTime(){let e=this.examTime;this.detail&&this.detail.exam_time;let t=parseInt(e/60/60%24);t=t<10?"0"+t:t;let i=parseInt(e/60%60);i=i<10?"0"+i:i;let s=parseInt(e%60);return s=s<10?"0"+s:s,t+":"+i+":"+s},qusetionStem(){return this.Qsindex=this.Qsindex||0,this.question&&this.question.length>0?this.question[this.Qsindex]:{question:{}}}},methods:{gotoCard(){let e=this;clearInterval(e.intTimer),e.intTimer=null;let t=`/pages/examination/exam/answerSheet?paper_id=${e.paper_id}&record_id=${e.record_id}&model=${e.model}`;g({url:t,success:function(){console.log("跳转成功")},fail:function(e){console.log("跳转失败",e)}})},FavFunc(e){this._post("paper.Favorite/fav",{paper_id:this.paper_id,question_id:e.question_id,paper_question_id:e.paper_question_id},(t=>{1==e.is_fav?(x({icon:"none",title:"取消成功"}),e.is_fav=0):(x({icon:"none",title:"收藏成功，请到“我的->我的收藏”查看和管理哦"}),e.is_fav=1)}))},isSelect:(e,t,i)=>2==e.question.question_type?-1!=t.indexOf(i):t===i,getData(){let e=this;e._get("paper.Paper/startAnswer",{paper_id:e.paper_id},(t=>{e.detail=t.data.detail,e.record_id=t.data.detail.record_id,e.question=e.detail.question,e.checkHistory()}))},checkHistory(){let e=this,t=y("examTime")||{};this.examTime=t[e.record_id]||0,this.intTimer=setInterval((function(){e.examTime++,2===e.timer&&e.recordHistory(e.examTime),e.timer++}),1e3)},recordHistory(e){let t=y("examTime")||{};t[this.record_id]=e,v("examTime",t),this.timer=1},subAnser(){let e=this,t=e.question[e.Qsindex].answer;if(!t||e.clock)return;let i=e.question[e.Qsindex].id;e.clock=!0;e._get("paper.Paper/submitAnswer",{id:i,answer:t},(t=>{e.clock=!1,e.question[e.Qsindex].answer_state=1,e.getData()}),(t=>{e.clock=!1}))},slectAn(e,t){let i=this.question[e];if("practice"==this.model){if(2!=i.question.question_type&&this.qusetionStem.answer)return;if(2==i.question.question_type&&this.qusetionStem.answer&&this.muultipleStem)return}if(2!=i.question.question_type)i.answer=this.getIndex(t);else{let e=i.answer||[],s=this.getIndex(t);"string"==typeof e&&(e=i.answer.split(","));let a=e.indexOf(s);a>-1?e.splice(a,1):e.push(this.getIndex(t)),i.answer=e.join(",")}"practice"==this.model?2!=i.question.question_type?(this.muultipleStem=!0,this.subAnser()):2==i.question.question_type&&(this.muultipleStem=!1):2!=i.question.question_type&&(this.subAnser(),setTimeout((()=>{this.Qsindex<this.question.length-1&&(this.Qsindex=this.Qsindex+1)}),400))},getNum:e=>String.fromCharCode(e-65),getIndex:e=>String.fromCharCode(e+65),previous(){this.Qsindex<1||this.clock||this.Qsindex--},next(){if(this.Qsindex+1>=this.question.length||this.clock)return this.subAnser(),void this.gotoCard();this.subAnser(),this.Qsindex++},multiNext(){if(this.Qsindex+1>=this.question.length||this.clock)return this.muultipleStem=!0,void this.subAnser();"practice"==this.model?(this.muultipleStem=!0,this.subAnser()):(this.subAnser(),this.Qsindex++)},subFunc(){let e=this;e._post("paper.Paper/submit",{record_id:e.detail.record_id},(t=>{q({content:"时间到，试卷已提交",success(){e.gotoPage("/pages/examination/record/detail?paper_id="+e.detail.paper_id)}}),clearInterval(e.intTimer),e.intTimer=null}))},allSubExam(){let e=!1;return this.question&&this.question.length>0&&(e=this.question.every((e=>e.answer_state>0))),e}}},[["render",function(e,t,i,s,u,p){const g=f,x=T(a("u-icon"),S),y=w,v=I,q=C,A=T(a("u-rate"),$),z=T(a("u-parse"),Q);return n(),o(g,{class:"wrap"},{default:l((()=>[r(g,{class:"p24",style:{"padding-bottom":"120rpx"}},{default:l((()=>[r(g,{class:"dominant f30 tc mb30"},{default:l((()=>[k("温馨提示：请点击“答题卡”前去提交考试哦！")])),_:1}),r(g,{class:"top-box"},{default:l((()=>[r(g,null,{default:l((()=>[r(v,{class:"datika-btn",onClick:p.gotoCard},{default:l((()=>[r(x,{size:"42rpx",name:"/static/image/datika.png"}),r(y,{class:"ml10"},{default:l((()=>[k("答题卡")])),_:1})])),_:1},8,["onClick"])])),_:1}),"practice"!=u.model?(n(),o(g,{key:0,class:"d-c-c"},{default:l((()=>[r(x,{size:"46rpx",name:"/static/image/time.png"}),r(y,{class:"ml10 f30 dominant"},{default:l((()=>[k(b(p.getExamTime),1)])),_:1})])),_:1})):_("",!0)])),_:1}),(n(!0),c(d,null,h(u.question,((e,t)=>(n(),c(d,{key:t},[u.Qsindex==t?(n(),o(g,{key:0,class:"center-box"},{default:l((()=>[r(g,{class:"d-b-c mb24"},{default:l((()=>[r(g,{class:"type-box d-c-c"},{default:l((()=>[r(x,{width:"96rpx",height:"92rpx",name:"/static/image/tixing_bg.png"}),r(g,{class:"f24 white type-name"},{default:l((()=>[k(b(e.question.type_name),1)])),_:2},1024)])),_:2},1024),r(g,{class:"gray9 f28"},{default:l((()=>[r(y,{class:"gray3"},{default:l((()=>[k(b(t+1),1)])),_:2},1024),k("/"+b(u.question.length),1)])),_:2},1024)])),_:2},1024),r(g,{class:"f32 gray3",style:{"padding-bottom":"40rpx"}},{default:l((()=>[k(b(e.question.title),1)])),_:2},1024),r(g,null,{default:l((()=>[(n(!0),c(d,null,h(e.question.option,((i,s)=>(n(),o(g,{key:s,onClick:e=>p.slectAn(t,s),class:m(["anser-item",{active:p.isSelect(e,e.answer,p.getIndex(s))}])},{default:l((()=>[r(y,{class:""},{default:l((()=>[k(b(p.getIndex(s))+".",1)])),_:2},1024),1==i.type?(n(),o(y,{key:0},{default:l((()=>[k(b(i.content),1)])),_:2},1024)):(n(),o(q,{key:1,src:i.content,mode:"widthFix",style:{width:"400rpx","flex-shrink":"0"}},null,8,["src"]))])),_:2},1032,["onClick","class"])))),128))])),_:2},1024),!p.qusetionStem.question||2!=p.qusetionStem.question.question_type||"practice"==this.model&&this.qusetionStem.answer&&this.muultipleStem?_("",!0):(n(),o(g,{key:0,class:"nextBtn",onClick:p.multiNext},{default:l((()=>[k(" 确认")])),_:1},8,["onClick"]))])),_:2},1024)):_("",!0)],64)))),128)),"practice"==u.model&&p.qusetionStem.answer&&u.muultipleStem?(n(),o(g,{key:0,class:"center-box"},{default:l((()=>[r(g,{class:"c-t-box d-b-c"},{default:l((()=>[r(g,{class:"f30 c-t-box-title"},{default:l((()=>[k("你的答案："),r(y,{style:{color:"#F2473F"}},{default:l((()=>[k(b(p.qusetionStem.answer),1)])),_:1})])),_:1}),r(g,{class:"f30 gray3"},{default:l((()=>[k("正确答案："),r(y,{style:{color:"#99E3D6"}},{default:l((()=>[k(b(p.qusetionStem.question&&p.qusetionStem.question.answer),1)])),_:1})])),_:1})])),_:1}),r(g,null,{default:l((()=>[r(g,{style:{height:"70rpx","line-height":"70rpx","padding-left":"4rpx"},class:"f28 gray3"},{default:l((()=>[k("回答 "),1==p.qusetionStem.answer_state?(n(),o(y,{key:0,style:{color:"#99E3D6"}},{default:l((()=>[k("正确")])),_:1})):(n(),o(y,{key:1,class:"dominant"},{default:l((()=>[k("错误")])),_:1}))])),_:1}),r(g,{class:"d-s-c f28 gray3 mb20"},{default:l((()=>[k("试题难度:"),r(A,{count:"5",value:p.qusetionStem.question.difficulty,readonly:"",activeColor:"#F2473F"},null,8,["value"])])),_:1}),(n(),c(d,{key:0},[r(g,{class:"f28 gray3 mb20"},{default:l((()=>[k("答案解析: ")])),_:1}),r(g,{class:"mb20"},{default:l((()=>[r(z,{content:p.qusetionStem.question.analysis},null,8,["content"])])),_:1}),p.qusetionStem.question.knowledge&&p.qusetionStem.question.knowledge.length>0?(n(),c(d,{key:0},[r(g,{class:"f30 c-t-box-title"},{default:l((()=>[k("关联知识点：")])),_:1}),r(g,null,{default:l((()=>[(n(!0),c(d,null,h(p.qusetionStem.question.knowledge,((t,i)=>(n(),o(g,{key:i,class:"f26 dominant p-30-0 d-b-c",onClick:i=>e.gotoPage("pages/knowledge/course/detail?course_id="+t.course_id)},{default:l((()=>[r(g,{class:"flex-1"},{default:l((()=>[r(y,{class:"dot-red"}),k(b(t.course.title),1)])),_:2},1024),r(g,null,{default:l((()=>[r(x,{name:"arrow-right",bold:"",color:"#F2473F",size:"30rpx"})])),_:1})])),_:2},1032,["onClick"])))),128))])),_:1})],64)):_("",!0)],64))])),_:1})])),_:1})):_("",!0),r(g,{class:"bottom-box d-b-c"},{default:l((()=>[r(g,{onClick:p.previous},{default:l((()=>[0==u.Qsindex?(n(),o(x,{key:0,width:"52rpx",height:"60rpx",name:"/static/image/back_icon.png"})):(n(),o(x,{key:1,size:"52rpx",name:"/static/image/back_icon1.png"}))])),_:1},8,["onClick"]),r(g,{onClick:t[0]||(t[0]=e=>p.FavFunc(u.question[u.Qsindex]))},{default:l((()=>[r(x,{size:"74rpx",name:u.question[u.Qsindex]&&1==u.question[u.Qsindex].is_fav?"/static/image/shoucang_a.png":"/static/image/shoucang_p.png"},null,8,["name"])])),_:1}),r(g,{onClick:p.next},{default:l((()=>[u.question&&u.question.length-1==u.Qsindex?(n(),o(x,{key:0,width:"52rpx",height:"60rpx",name:"/static/image/next_icon.png"})):(n(),o(x,{key:1,width:"52rpx",height:"60rpx",name:"/static/image/next_icon1.png"}))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-4a73f622"]]);export{A as default};
