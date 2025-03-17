import{_ as e}from"./Upload-78ee26ae.js";import{_ as t,e as r}from"./index-2e57a1f5.js";import s from"./Setpages-dcf66c67.js";import i from"./Banner-003f8ce8.js";import o from"./ImageSingle-0864caf4.js";import m from"./Window-9633798b.js";import c from"./Video-ca7d86f5.js";import d from"./Article-048d93ca.js";import u from"./Special-ceb9e0ac.js";import l from"./Notice-4b4c99ab.js";import a from"./NavBar-e82ed4a7.js";import n from"./Lecturer-209bfdab.js";import I from"./Service-40e67b6e.js";import p from"./RichText-6fb146d8.js";import f from"./Blank-8259a977.js";import x from"./Guide-790f479d.js";import h from"./Title-84f5064a.js";import j from"./Train-b10432c6.js";import y from"./Course-dffc5064.js";import g from"./Education-131481a7.js";import{_ as k,a as v}from"./train-0f545876.js";import{_ as S}from"./course-840565f7.js";import{E as T}from"./element-plus-fe2e4fed.js";import{ae as _,o as C,c as D,Q as E,T as L,Y as b,P as B,S as w,W as F}from"./@vue-0361ad4a.js";import"./AddCategory-c921a3c2.js";import"./file-56305e6b.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./@element-plus-1634e2d0.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./Setlink-3841cc23.js";import"./data-97822b17.js";import"./article-122f9a54.js";import"./vuedraggable-cabcff94.js";import"./vue-3c8001f5.js";import"./sortablejs-c079517e.js";import"./UE-c323e137.js";const A={id:"diy-editor",ref:"diy-editor",class:"diy-editor form-horizontal"};const N=t({components:{Setpages:s,Banner:i,ImageSingle:o,Window:m,Video:c,Articleindex:d,Special:u,Notice:l,NavBar:a,LecturerIndex:n,Service:I,RichText:p,Blank:f,Guide:x,EducationIndex:g,Upload:e,LecturerSelect:k,TrainSelect:v,CourseSelect:S,Title:h,Trainindex:j,CourseIndex:y},data:()=>({isupload:!1,imgModel:null,isLecturer:!1,isTrain:!1,isCourse:!1,excludeIds:[],islist:!1,course_type:1}),props:["form","defaultData","diyData","opts"],created(){},methods:{onEditorAddData:function(){let e=this;var t=r(e.defaultData[e.form.curItem.type].data[0]);e.form.curItem.data.push(t)},onEditorResetColor:function(e,t,r){e[t]=r},onEditorDeleleData:function(e,t){if(this.diyData.items[t].data.length<=1)return T({message:"至少保留一个",type:"error"}),!1;this.diyData.items[t].data.splice(e,1)},onEditorSelectImage:function(e,t){this.isupload=!0,this.imgModel={index:e,imgUrl:t}},returnImgsFunc(e){null!=e&&(this.imgModel.index[this.imgModel.imgUrl]=e[0].file_path),this.isupload=!1},openLecturer(e,t){let r=[];e.forEach((e=>{r.push(e.lecturer_id)})),this.excludeIds=r,this.islist=!(!t||void 0===t),this.isLecturer=!0},openTrain(e,t){let r=[];e.forEach((e=>{r.push(e.paper_id)})),this.excludeIds=r,this.islist=!(!t||void 0===t),this.isTrain=!0},openCourse(e,t){let r=[];e.forEach((e=>{r.push(e.course_id)})),this.excludeIds=r,this.course_type=1,this.islist=!(!t||void 0===t),this.isCourse=!0},openEdu(e,t){let r=[];e.forEach((e=>{r.push(e.course_id)})),this.excludeIds=r,this.course_type=2,this.islist=!(!t||void 0===t),this.isCourse=!0},closeLecturerDialogFunc(e){null!=this.form.curItem&&(this.isLecturer=!1,"success"==e.type&&(this.form.curItem.data.length>0&&this.form.curItem.data[0].is_default&&(this.form.curItem.data=[]),this.islist?this.form.curItem.data=this.form.curItem.data.concat(e.params):this.form.curItem.data.push(e.params)))},closeTrainDialogFunc(e){null!=this.form.curItem&&(this.isTrain=!1,"success"==e.type&&(this.form.curItem.data.length>0&&this.form.curItem.data[0].is_default&&(this.form.curItem.data=[]),this.islist?this.form.curItem.data=this.form.curItem.data.concat(e.params):this.form.curItem.data.push(e.params)))},closeCourseDialogFunc(e){null!=this.form.curItem&&(this.isCourse=!1,"success"==e.type&&(this.form.curItem.data.length>0&&this.form.curItem.data[0].is_default&&(this.form.curItem.data=[]),this.islist?this.form.curItem.data=this.form.curItem.data.concat(e.params):this.form.curItem.data.push(e.params)))}}},[["render",function(t,r,s,i,o,m){const c=_("Setpages"),d=_("Banner"),u=_("ImageSingle"),l=_("Window"),a=_("Video"),n=_("Articleindex"),I=_("Special"),p=_("Notice"),f=_("NavBar"),x=_("LecturerIndex"),h=_("Service"),j=_("RichText"),y=_("Blank"),g=_("Guide"),k=_("Title"),v=_("Trainindex"),S=_("CourseIndex"),T=_("EducationIndex"),N=e,R=_("LecturerSelect"),U=_("TrainSelect"),z=_("CourseSelect");return C(),D("div",A,[s.form.curItem?(C(),D(E,{key:0},["page"==s.form.curItem.type?(C(),L(c,{key:0,curItem:s.form.curItem},null,8,["curItem"])):b("",!0),"banner"==s.form.curItem.type?(C(),L(d,{key:1,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"imageSingle"==s.form.curItem.type?(C(),L(u,{key:2,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"window"==s.form.curItem.type?(C(),L(l,{key:3,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"video"==s.form.curItem.type?(C(),L(a,{key:4,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"article"==s.form.curItem.type?(C(),L(n,{key:5,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"special"==s.form.curItem.type?(C(),L(I,{key:6,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"notice"==s.form.curItem.type?(C(),L(p,{key:7,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"navBar"==s.form.curItem.type?(C(),L(f,{key:8,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"lecturer"==s.form.curItem.type?(C(),L(x,{key:9,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"service"==s.form.curItem.type?(C(),L(h,{key:10,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"richText"==s.form.curItem.type?(C(),L(j,{key:11,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"blank"==s.form.curItem.type?(C(),L(y,{key:12,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"guide"==s.form.curItem.type?(C(),L(g,{key:13,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"title"==s.form.curItem.type?(C(),L(k,{key:14,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"train"==s.form.curItem.type?(C(),L(v,{key:15,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"course"==s.form.curItem.type?(C(),L(S,{key:16,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0),"education"==s.form.curItem.type?(C(),L(T,{key:17,curItem:s.form.curItem,selectedIndex:s.form.selectedIndex},null,8,["curItem","selectedIndex"])):b("",!0)],64)):b("",!0),o.isupload?(C(),L(N,{key:1,isupload:o.isupload,config:{total:3},onReturnImgs:m.returnImgsFunc},null,8,["isupload","onReturnImgs"])):b("",!0),B(R,{isLecturer:o.isLecturer,excludeIds:o.excludeIds,islist:o.islist,onCloseDialog:r[0]||(r[0]=e=>m.closeLecturerDialogFunc(e))},{default:w((()=>[F("讲师列表弹出层")])),_:1},8,["isLecturer","excludeIds","islist"]),B(U,{isTrain:o.isTrain,excludeIds:o.excludeIds,islist:o.islist,onCloseDialog:r[1]||(r[1]=e=>m.closeTrainDialogFunc(e))},{default:w((()=>[F("练习列表弹出层")])),_:1},8,["isTrain","excludeIds","islist"]),B(z,{iscourse:o.isCourse,excludeIds:o.excludeIds,islist:o.islist,onCloseDialog:r[2]||(r[2]=e=>m.closeCourseDialogFunc(e)),course_type:o.course_type},{default:w((()=>[F(" 练习列表弹出层")])),_:1},8,["iscourse","excludeIds","islist","course_type"])],512)}]]);export{N as default};
