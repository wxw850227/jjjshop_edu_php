import{_ as e}from"./Upload-78ee26ae.js";import{i as o,s as l,e as t,q as a,r as d,d as m,y as i,f as s,j as r,k as n,G as p}from"./element-plus-fe2e4fed.js";import{d as u}from"./vuedraggable-cabcff94.js";import{_ as f}from"./index-2e57a1f5.js";import{ae as c,o as h,c as y,P as g,S as _,Q as b,a9 as j,T as v,W as V,X as k,Y as C,a as U}from"./@vue-0361ad4a.js";import"./AddCategory-c921a3c2.js";import"./file-56305e6b.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-3c8001f5.js";import"./sortablejs-c079517e.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const w={components:{Upload:e,draggable:u},data:()=>({isProductUpload:!1,config:{},file_name:"image",inputVisible:!1,inputValue:""}),inject:["form"],created(){},methods:{fromCharCode(e){for(var o=[],l=0;l<26;l++)o.push(String.fromCharCode(l+65));return o[e]},openProductUpload:function(e,o){this.file_name=o,"image"==e&&(this.config={total:9,file_type:"image"}),this.isProductUpload=!0},handleClose(e){this.form.model.label.splice(this.form.model.label.indexOf(e),1)},showInput(){this.form.model.option.push({content:"",type:this.form.model.option_type}),this.form.modelanswer=["A"]},deleteOption(e){this.form.model.option.splice(e,1)},returnProductImgsFunc(e){null!=e&&("image"==this.file_name?(this.form.model.image_id=e[0].file_id,this.form.model.image=e[0]):this.form.model.option[this.file_name].content=e[0].file_path),this.isProductUpload=!1},deleteImg(e){this.form.model.banner.splice(e,1)},delVideo(){this.form.model.video_link="",this.form.model.video_image=""},delPdf(){this.form.model.pdf_link="",this.form.model.pdf_name=""},setExpress(){this.$router.push("/setting/delivery/index")},changeDelivery(e){0==e&&(this.form.model.delivery_id="")},changeQsType(e){1==e||2==e?(this.form.model.option_type=1,this.form.model.option=[{content:"",type:1},{content:"",type:1}]):3==e&&(this.form.model.option_type=1,this.form.model.option=[{content:"正确",type:1},{content:"错误",type:1}]),this.form.modelanswer=["A"]},changeType(e){1==e?this.form.model.option=[{content:"",type:1},{content:"",type:1}]:2==e&&(this.form.model.option=[{content:"",type:2},{content:"",type:2}]),this.form.modelanswer=["A"]}}},q={class:"d-s-c"},x={key:1,class:"draggable-list"},P=["onClick"],I=["onClick"],T=["src"],A=U("div",{class:"tips"},"最多可添加10个选项",-1),Q={class:"d-s-c"},z={class:"block d-s-c",style:{height:"32px"}};const O=f(w,[["render",function(u,f,w,O,F,R){const S=o,D=l,E=t,G=a,W=d,X=m,Y=c("Plus"),$=i,B=s,H=r,J=n,K=p,L=e;return h(),y("div",null,[g(E,{label:"题型:",rules:[{required:!0,message:"题型"}],prop:"model.question_type"},{default:_((()=>[g(D,{modelValue:R.form.model.question_type,"onUpdate:modelValue":f[0]||(f[0]=e=>R.form.model.question_type=e),onChange:R.changeQsType},{default:_((()=>[(h(!0),y(b,null,j(R.form.questionType,((e,o)=>(h(),v(S,{key:e.id,label:e.id},{default:_((()=>[V(k(e.name),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),g(E,{label:"分类：",rules:[{required:!0,message:"请选择分类"}],prop:"model.category_id"},{default:_((()=>[g(W,{modelValue:R.form.model.category_id,"onUpdate:modelValue":f[1]||(f[1]=e=>R.form.model.category_id=e)},{default:_((()=>[(h(!0),y(b,null,j(R.form.category,(e=>(h(),y(b,{key:e.category_id},[g(G,{value:e.category_id,label:e.name},null,8,["value","label"]),void 0!==e.child?(h(!0),y(b,{key:0},j(e.child,(e=>(h(),y(b,{key:e.category_id},[g(G,{value:e.category_id,label:e.name,style:{"padding-left":"30px"}},null,8,["value","label"]),void 0!==e.child?(h(!0),y(b,{key:0},j(e.child,(e=>(h(),v(G,{key:e.category_id,value:e.category_id,label:e.name,style:{"padding-left":"60px"}},null,8,["value","label"])))),128)):C("",!0)],64)))),128)):C("",!0)],64)))),128))])),_:1},8,["modelValue"])])),_:1}),g(E,{label:"题干：",rules:[{required:!0,message:"请填写题干"}],prop:"model.title"},{default:_((()=>[g(X,{modelValue:R.form.model.title,"onUpdate:modelValue":f[2]||(f[2]=e=>R.form.model.title=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),3!=R.form.model.question_type?(h(),y(b,{key:0},[g(E,{label:"选择类型:",rules:[{required:!0,message:"选择类型"}],prop:"model.option_type"},{default:_((()=>[g(D,{onChange:R.changeType,modelValue:R.form.model.option_type,"onUpdate:modelValue":f[3]||(f[3]=e=>R.form.model.option_type=e)},{default:_((()=>[g(S,{label:1},{default:_((()=>[V("文本")])),_:1}),g(S,{label:2},{default:_((()=>[V("图片")])),_:1})])),_:1},8,["onChange","modelValue"])])),_:1}),g(E,{label:"",prop:"option"},{default:_((()=>[U("div",null,[(h(!0),y(b,null,j(R.form.model.option,((e,o)=>(h(),y("div",{class:"mb20",key:o},[U("div",q,[U("div",null,k(R.fromCharCode(o))+" ：",1),2!=e.type?(h(),v(X,{key:0,placeholder:"请输入选项内容",modelValue:e.content,"onUpdate:modelValue":o=>e.content=o,class:"max-w460"},null,8,["modelValue","onUpdate:modelValue"])):(h(),y("div",x,[e.content?(h(),y("div",{key:1,class:"item",onClick:e=>R.openProductUpload("image",o)},[U("img",{src:e.content,width:"100",height:"100"},null,8,T)],8,I)):(h(),y("div",{key:0,class:"item img-select",onClick:e=>R.openProductUpload("image",o)},[g($,null,{default:_((()=>[g(Y)])),_:1})],8,P))]))]),R.form.model.option.length>=3?(h(),v(B,{key:0,type:"text",onClick:e=>R.deleteOption(o)},{default:_((()=>[V("删除选项")])),_:2},1032,["onClick"])):C("",!0)])))),128))]),R.form.model.option.length<=9?(h(),v(B,{key:0,class:"button-new-tag",size:"small",onClick:R.showInput},{default:_((()=>[V("+ 添加 ")])),_:1},8,["onClick"])):C("",!0),V(),A])),_:1})],64)):C("",!0),3==R.form.model.question_type?(h(),v(E,{key:1,label:"",prop:"option"},{default:_((()=>[U("div",null,[(h(!0),y(b,null,j(R.form.model.option,((e,o)=>(h(),y("div",{class:"mb20",key:o},[U("div",Q,[U("div",null,k(R.fromCharCode(o))+" ：",1),g(X,{placeholder:"请输入选项内容",disabled:"",modelValue:e.content,"onUpdate:modelValue":o=>e.content=o,class:"max-w460"},null,8,["modelValue","onUpdate:modelValue"])])])))),128))])])),_:1})):C("",!0),g(E,{label:"正确答案:",rules:[{required:!0,message:"请选择正确答案"}],prop:"model.answer"},{default:_((()=>[2!=R.form.model.question_type?(h(),v(D,{key:0,modelValue:R.form.model.answer[0],"onUpdate:modelValue":f[4]||(f[4]=e=>R.form.model.answer[0]=e),onChange:R.changeQsType},{default:_((()=>[(h(!0),y(b,null,j(R.form.model.option,((e,o)=>(h(),v(S,{label:R.fromCharCode(o),key:o},{default:_((()=>[V(k(R.fromCharCode(o)),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue","onChange"])):(h(),v(J,{key:1,modelValue:R.form.model.answer,"onUpdate:modelValue":f[5]||(f[5]=e=>R.form.model.answer=e)},{default:_((()=>[(h(!0),y(b,null,j(R.form.model.option,((e,o)=>(h(),v(H,{key:o,label:R.fromCharCode(o)},{default:_((()=>[V(k(R.fromCharCode(o)),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"]))])),_:1}),g(E,{label:"试题难度:",rules:[{required:!0,message:"试题难度"}],prop:"model.difficulty"},{default:_((()=>[U("div",z,[g(K,{modelValue:R.form.model.difficulty,"onUpdate:modelValue":f[6]||(f[6]=e=>R.form.model.difficulty=e)},null,8,["modelValue"])])])),_:1}),g(E,{label:"试题排序：",rules:[{required:!0,message:" "}],prop:"model.sort"},{default:_((()=>[g(X,{type:"number",min:"0",modelValue:R.form.model.sort,"onUpdate:modelValue":f[7]||(f[7]=e=>R.form.model.sort=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),F.isProductUpload?(h(),v(L,{key:2,config:F.config,isupload:F.isProductUpload,onReturnImgs:R.returnProductImgsFunc},{default:_((()=>[V("上传图片 ")])),_:1},8,["config","isupload","onReturnImgs"])):C("",!0)])}]]);export{O as default};
