"use strict";const i=require("../../../common/vendor.js"),p={data(){return{paper_id:0,time:"",question:{},answer:[],Qsindex:0,detail:{knowledge:[],paper:[]},list:[],wrong_id:0}},onLoad(e){this.paper_id=e.paper_id,this.getData()},watch:{},methods:{isSelect(e,s,o){return e.question.question_type==2?s.indexOf(o)!=-1:s===o},getAnswer(e){return Array.isArray(e)?e.join():e},knowFun(){let e=this;i.index.showModal({title:"提示",content:"确定已经掌握该错题了吗?",success(s){s.confirm&&e._get("paper.Wrong/submit",{paper_id:e.paper_id},o=>{e.getData()})}})},delFunc(){let e=this;i.index.showModal({title:"提示",content:"确定要把该题目从错题中删除吗?",success(s){s.confirm&&e._get("paper.Wrong/delete",{wrong_id:e.wrong_id},o=>{i.index.showModal({content:"删除成功",success(){e.Qsindex>0?e.Qsindex=e.Qsindex-1:e.Qsindex=0,e.getData()}})})}})},getData(){let e=this,s="paper.Wrong/detail";e._get(s,{paper_id:e.paper_id},o=>{const{data:{detail:u}}=o;e.list=u,e.detail=u[e.Qsindex],e.question=u[e.Qsindex].question,e.wrong_id=u[e.Qsindex].wrong_id})},slectAn(e,s){this.question[e].answer_state>0||(this.question[e].answer=this.getIndex(s))},getNum(e){return String.fromCharCode(e-65)},getIndex(e){return String.fromCharCode(e+65)},previous(){this.Qsindex<1||(this.Qsindex--,this.detail=this.list[this.Qsindex],this.question=this.list[this.Qsindex].question,this.wrong_id=this.list[this.Qsindex].wrong_id)},next(){this.Qsindex+1>=this.list.length||(this.Qsindex++,this.detail=this.list[this.Qsindex],this.question=this.list[this.Qsindex].question,this.wrong_id=this.list[this.Qsindex].wrong_id)},FavFunc(e){let s=this;s._post("paper.Favorite/fav",{paper_id:s.paper_id,question_id:e.question_id,paper_question_id:e.paper_question_id},o=>{e.is_fav==1?(i.index.showToast({icon:"none",title:"取消成功"}),e.is_fav=0):(i.index.showToast({icon:"none",title:"收藏成功，请到“我的->我的收藏”查看和管理哦"}),e.is_fav=1)})}}};if(!Array){const e=i.resolveComponent("u-icon"),s=i.resolveComponent("u-parse");(e+s)()}const l=()=>"../../../uni_modules/uview-plus/components/u-icon/u-icon.js",c=()=>"../../../uni_modules/uview-plus/components/u-parse/u-parse.js";Math||(l+c)();function _(e,s,o,u,t,r){return i.e({a:i.p({width:"96rpx",height:"92rpx",name:"/static/image/tixing_bg.png"}),b:i.t(t.question.type_name),c:i.p({size:"40rpx",name:"trash"}),d:i.o((...n)=>r.delFunc&&r.delFunc(...n)),e:i.t(t.question.title),f:i.f(t.question.option,(n,a,d)=>i.e({a:i.t(r.getIndex(a)),b:n.type==1},n.type==1?{c:i.t(n.content)}:{d:n.content},{e:r.isSelect(t.detail,t.detail.answer,r.getIndex(a))?1:"",f:a})),g:i.t(r.getAnswer(t.detail.answer)),h:i.t(r.getAnswer(t.question.answer)),i:i.f(t.detail.paper.difficulty,(n,a,d)=>({a:n}))},i.e({j:i.p({content:t.question.analysis}),k:t.question.knowledge&&t.question.knowledge.length>0},t.question.knowledge&&t.question.knowledge.length>0?{l:i.f(t.question.knowledge,(n,a,d)=>({a:i.t(n.course.title),b:"0542e2a8-3-"+d,c:i.o(h=>e.gotoPage("pages/knowledge/course/detail?course_id="+n.course_id),a),d:a})),m:i.p({name:"arrow-right",bold:!0,color:"#F2473F",size:"30rpx"})}:{}),{n:t.Qsindex==0},t.Qsindex==0?{o:i.p({width:"52rpx",height:"60rpx",name:"/static/image/back_icon.png"})}:{p:i.p({size:"52rpx",name:"/static/image/back_icon1.png"})},{q:i.o((...n)=>r.previous&&r.previous(...n)),r:i.p({size:"74rpx",name:t.detail.is_fav==1?"/static/image/shoucang_a.png":"/static/image/shoucang_p.png"}),s:i.o(n=>r.FavFunc(t.detail)),t:i.p({width:"52rpx",height:"60rpx",name:t.Qsindex===t.list.length-1?"/static/image/next_icon.png":"/static/image/next_icon1.png"}),v:i.o((...n)=>r.next&&r.next(...n))})}const g=i._export_sfc(p,[["render",_],["__file","D:/phpstudy_pro/www3/jjj_edu_small/jjj_edu_app/pages/examination/wrong/detail.vue"]]);wx.createPage(g);
