System.register(["./Upload-legacy-9dc4a0f3.js","./element-plus-legacy-30dfbc6a.js","./vuedraggable-legacy-3fd351f9.js","./index-legacy-325b1913.js","./@vue-legacy-59f40785.js","./AddCategory-legacy-9b7b4bb1.js","./file-legacy-4a2ffd74.js","./lodash-es-legacy-27e5889b.js","./async-validator-legacy-aa1fd2de.js","./@vueuse-legacy-ebb5a640.js","./dayjs-legacy-8ebd75bf.js","./call-bind-legacy-d478cafe.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-4e67b6ea.js","./@popperjs-legacy-876caf52.js","./escape-html-legacy-3c43edca.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-legacy-ce17e81c.js","./sortablejs-legacy-a5a9eb1b.js","./vue-router-legacy-864b4314.js","./pinia-legacy-58e828b1.js","./axios-legacy-cdbd96a0.js","./qs-legacy-c928afd5.js","./side-channel-legacy-99cdf772.js","./object-inspect-legacy-01bbff00.js","./vue-clipboard2-legacy-2172b392.js","./clipboard-legacy-2560e285.js","./vue-ueditor-wrap-legacy-8311ee72.js"],(function(e,l){"use strict";var t,n,o,i,a,r,u,d,s,c,m,f,p,g,y,h,b,_,x,v,j,k,V,C,w,U;return{setters:[function(e){t=e._},function(e){n=e.i,o=e.s,i=e.e,a=e.q,r=e.r,u=e.d,d=e.y,s=e.f,c=e.j,m=e.k,f=e.G},function(e){p=e.d},function(e){g=e._},function(e){y=e.ae,h=e.o,b=e.c,_=e.P,x=e.S,v=e.Q,j=e.a9,k=e.T,V=e.W,C=e.X,w=e.Y,U=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".mb20{margin-bottom:20px}.edit_container{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;line-height:20px;color:#2c3e50}.ql-editor{height:400px}.draggable-list{display:flex;justify-content:flex-start;flex-wrap:wrap}.draggable-list .wrapper>span{display:flex;justify-content:flex-start;flex-wrap:wrap}.draggable-list .item{position:relative;width:110px;height:110px;margin-top:10px;margin-right:10px;border-radius:8px;overflow:hidden;border:1px solid #dddddd}.draggable-list .delete-btn{position:absolute;top:0;right:0;width:16px;height:16px;background:red;line-height:16px;font-size:16px;color:#fff;display:none}.draggable-list .item:hover .delete-btn{display:block}.draggable-list .item img{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-height:100%;max-width:100%}.draggable-list .img-select{display:flex;justify-content:center;align-items:center;border:1px dashed #dddddd;font-size:30px}.draggable-list .img-select i{color:#409eff}.el-tag+.el-tag{margin-left:10px}.button-new-tag{margin-left:22px;height:32px;line-height:30px;padding-top:0;padding-bottom:0}.input-new-tag{width:90px;margin-left:10px;vertical-align:bottom}.el-input.is-disabled .el-input__inner{background-color:#fff;border-color:#dcdfe6;color:#606266;cursor:auto}\n",document.head.appendChild(l);var q={components:{Upload:t,draggable:p},data:function(){return{isProductUpload:!1,config:{},file_name:"image",inputVisible:!1,inputValue:""}},inject:["form"],created:function(){},methods:{fromCharCode:function(e){for(var l=[],t=0;t<26;t++)l.push(String.fromCharCode(t+65));return l[e]},openProductUpload:function(e,l){this.file_name=l,"image"==e&&(this.config={total:9,file_type:"image"}),this.isProductUpload=!0},handleClose:function(e){this.form.model.label.splice(this.form.model.label.indexOf(e),1)},showInput:function(){this.form.model.option.push({content:"",type:this.form.model.option_type}),this.form.modelanswer=["A"]},deleteOption:function(e){this.form.model.option.splice(e,1)},returnProductImgsFunc:function(e){null!=e&&("image"==this.file_name?(this.form.model.image_id=e[0].file_id,this.form.model.image=e[0]):this.form.model.option[this.file_name].content=e[0].file_path),this.isProductUpload=!1},deleteImg:function(e){this.form.model.banner.splice(e,1)},delVideo:function(){this.form.model.video_link="",this.form.model.video_image=""},delPdf:function(){this.form.model.pdf_link="",this.form.model.pdf_name=""},setExpress:function(){this.$router.push("/setting/delivery/index")},changeDelivery:function(e){0==e&&(this.form.model.delivery_id="")},changeQsType:function(e){1==e||2==e?(this.form.model.option_type=1,this.form.model.option=[{content:"",type:1},{content:"",type:1}]):3==e&&(this.form.model.option_type=1,this.form.model.option=[{content:"正确",type:1},{content:"错误",type:1}]),this.form.modelanswer=["A"]},changeType:function(e){1==e?this.form.model.option=[{content:"",type:1},{content:"",type:1}]:2==e&&(this.form.model.option=[{content:"",type:2},{content:"",type:2}]),this.form.modelanswer=["A"]}}},P={class:"d-s-c"},A={key:1,class:"draggable-list"},I=["onClick"],T=["onClick"],z=["src"],Q=U("div",{class:"tips"},"最多可添加10个选项",-1),O={class:"d-s-c"},S={class:"block d-s-c",style:{height:"32px"}};e("default",g(q,[["render",function(e,l,p,g,q,E){var F=n,R=o,D=i,G=a,H=r,W=u,X=y("Plus"),Y=d,$=s,B=c,J=m,K=f,L=t;return h(),b("div",null,[_(D,{label:"题型:",rules:[{required:!0,message:"题型"}],prop:"model.question_type"},{default:x((function(){return[_(R,{modelValue:E.form.model.question_type,"onUpdate:modelValue":l[0]||(l[0]=function(e){return E.form.model.question_type=e}),onChange:E.changeQsType},{default:x((function(){return[(h(!0),b(v,null,j(E.form.questionType,(function(e,l){return h(),k(F,{key:e.id,label:e.id},{default:x((function(){return[V(C(e.name),1)]})),_:2},1032,["label"])})),128))]})),_:1},8,["modelValue","onChange"])]})),_:1}),_(D,{label:"分类：",rules:[{required:!0,message:"请选择分类"}],prop:"model.category_id"},{default:x((function(){return[_(H,{modelValue:E.form.model.category_id,"onUpdate:modelValue":l[1]||(l[1]=function(e){return E.form.model.category_id=e})},{default:x((function(){return[(h(!0),b(v,null,j(E.form.category,(function(e){return h(),b(v,{key:e.category_id},[_(G,{value:e.category_id,label:e.name},null,8,["value","label"]),void 0!==e.child?(h(!0),b(v,{key:0},j(e.child,(function(e){return h(),b(v,{key:e.category_id},[_(G,{value:e.category_id,label:e.name,style:{"padding-left":"30px"}},null,8,["value","label"]),void 0!==e.child?(h(!0),b(v,{key:0},j(e.child,(function(e){return h(),k(G,{key:e.category_id,value:e.category_id,label:e.name,style:{"padding-left":"60px"}},null,8,["value","label"])})),128)):w("",!0)],64)})),128)):w("",!0)],64)})),128))]})),_:1},8,["modelValue"])]})),_:1}),_(D,{label:"题干：",rules:[{required:!0,message:"请填写题干"}],prop:"model.title"},{default:x((function(){return[_(W,{modelValue:E.form.model.title,"onUpdate:modelValue":l[2]||(l[2]=function(e){return E.form.model.title=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),3!=E.form.model.question_type?(h(),b(v,{key:0},[_(D,{label:"选择类型:",rules:[{required:!0,message:"选择类型"}],prop:"model.option_type"},{default:x((function(){return[_(R,{onChange:E.changeType,modelValue:E.form.model.option_type,"onUpdate:modelValue":l[3]||(l[3]=function(e){return E.form.model.option_type=e})},{default:x((function(){return[_(F,{label:1},{default:x((function(){return[V("文本")]})),_:1}),_(F,{label:2},{default:x((function(){return[V("图片")]})),_:1})]})),_:1},8,["onChange","modelValue"])]})),_:1}),_(D,{label:"",prop:"option"},{default:x((function(){return[U("div",null,[(h(!0),b(v,null,j(E.form.model.option,(function(e,l){return h(),b("div",{class:"mb20",key:l},[U("div",P,[U("div",null,C(E.fromCharCode(l))+" ：",1),2!=e.type?(h(),k(W,{key:0,placeholder:"请输入选项内容",modelValue:e.content,"onUpdate:modelValue":function(l){return e.content=l},class:"max-w460"},null,8,["modelValue","onUpdate:modelValue"])):(h(),b("div",A,[e.content?(h(),b("div",{key:1,class:"item",onClick:function(e){return E.openProductUpload("image",l)}},[U("img",{src:e.content,width:"100",height:"100"},null,8,z)],8,T)):(h(),b("div",{key:0,class:"item img-select",onClick:function(e){return E.openProductUpload("image",l)}},[_(Y,null,{default:x((function(){return[_(X)]})),_:1})],8,I))]))]),E.form.model.option.length>=3?(h(),k($,{key:0,type:"text",onClick:function(e){return E.deleteOption(l)}},{default:x((function(){return[V("删除选项")]})),_:2},1032,["onClick"])):w("",!0)])})),128))]),E.form.model.option.length<=9?(h(),k($,{key:0,class:"button-new-tag",size:"small",onClick:E.showInput},{default:x((function(){return[V("+ 添加 ")]})),_:1},8,["onClick"])):w("",!0),V(),Q]})),_:1})],64)):w("",!0),3==E.form.model.question_type?(h(),k(D,{key:1,label:"",prop:"option"},{default:x((function(){return[U("div",null,[(h(!0),b(v,null,j(E.form.model.option,(function(e,l){return h(),b("div",{class:"mb20",key:l},[U("div",O,[U("div",null,C(E.fromCharCode(l))+" ：",1),_(W,{placeholder:"请输入选项内容",disabled:"",modelValue:e.content,"onUpdate:modelValue":function(l){return e.content=l},class:"max-w460"},null,8,["modelValue","onUpdate:modelValue"])])])})),128))])]})),_:1})):w("",!0),_(D,{label:"正确答案:",rules:[{required:!0,message:"请选择正确答案"}],prop:"model.answer"},{default:x((function(){return[2!=E.form.model.question_type?(h(),k(R,{key:0,modelValue:E.form.model.answer[0],"onUpdate:modelValue":l[4]||(l[4]=function(e){return E.form.model.answer[0]=e}),onChange:E.changeQsType},{default:x((function(){return[(h(!0),b(v,null,j(E.form.model.option,(function(e,l){return h(),k(F,{label:E.fromCharCode(l),key:l},{default:x((function(){return[V(C(E.fromCharCode(l)),1)]})),_:2},1032,["label"])})),128))]})),_:1},8,["modelValue","onChange"])):(h(),k(J,{key:1,modelValue:E.form.model.answer,"onUpdate:modelValue":l[5]||(l[5]=function(e){return E.form.model.answer=e})},{default:x((function(){return[(h(!0),b(v,null,j(E.form.model.option,(function(e,l){return h(),k(B,{key:l,label:E.fromCharCode(l)},{default:x((function(){return[V(C(E.fromCharCode(l)),1)]})),_:2},1032,["label"])})),128))]})),_:1},8,["modelValue"]))]})),_:1}),_(D,{label:"试题难度:",rules:[{required:!0,message:"试题难度"}],prop:"model.difficulty"},{default:x((function(){return[U("div",S,[_(K,{modelValue:E.form.model.difficulty,"onUpdate:modelValue":l[6]||(l[6]=function(e){return E.form.model.difficulty=e})},null,8,["modelValue"])])]})),_:1}),_(D,{label:"试题排序：",rules:[{required:!0,message:" "}],prop:"model.sort"},{default:x((function(){return[_(W,{type:"number",min:"0",modelValue:E.form.model.sort,"onUpdate:modelValue":l[7]||(l[7]=function(e){return E.form.model.sort=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),q.isProductUpload?(h(),k(L,{key:2,config:q.config,isupload:q.isProductUpload,onReturnImgs:E.returnProductImgsFunc},{default:x((function(){return[V("上传图片 ")]})),_:1},8,["config","isupload","onReturnImgs"])):w("",!0)])}]]))}}}));
