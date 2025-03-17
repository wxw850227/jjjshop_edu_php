import{E as e,d as t,e as a,f as l,q as o,r as i,i as r,s,c as m,v as d}from"./element-plus-fe2e4fed.js";import{_ as n}from"./Upload-78ee26ae.js";import{A as u}from"./article-122f9a54.js";import{U as c}from"./UE-c323e137.js";import{_ as p}from"./index-2e57a1f5.js";import{ae as f,ap as g,$ as _,o as h,c as j,P as b,S as y,a as v,W as V,T as x,Y as C,Q as U,a9 as w}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./AddCategory-c921a3c2.js";import"./file-56305e6b.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const k={components:{Uediter:c,Upload:n},data:()=>({loading:!0,isupload:!1,ueditor:{text:"",config:{initialFrameWidth:400,initialFrameHeight:500}},form:{article_title:"",category_id:"",image_id:"",image:{},article_sort:1,article_status:"0",virtual_views:1,article_content:""},category:[],rules:{article_title:[{required:!0,message:"请输入文章标题",trigger:"blur"}],dec:[{required:!0,message:"请输入文章描述",trigger:"blur"}]}}),created(){this.getDetail()},methods:{contentChangeFunc(e){this.form.article_content=e},openUpload(){this.isupload=!0},returnImgsFunc(e){null!=e&&(this.form.image_id=e[0].file_id,this.form.image.file_path=e[0].file_path),this.isupload=!1},getContent:function(){return this.$refs.ue.getUEContent()},getDetail(){let e=this;const t=e.$route.query.article_id;u.toEditArticle({article_id:t},!0).then((t=>{e.ueditor.text=t.data.model.article_content,e.form=t.data.model,e.form.image||(e.form.image={}),e.category=t.data.catgory,e.loading=!1})).catch((e=>{}))},onSubmit(){let t=this,a=this.form;u.editArticle(a,!0).then((a=>{e({message:a.msg,type:"success"}),t.$router.push("/plus/article/index")})).catch((e=>{}))},cancelFunc(){this.$router.push({path:"/plus/article/index"})}}},F={class:"product-add pb50"},q=v("div",{class:"common-form"},"编辑文章",-1),z={class:"mt10",width:"120",alt:""},$={class:"edit_container"},A={class:"common-button-wrapper"};const E=p(k,[["render",function(e,u,c,p,k,E){const I=t,S=a,D=l,R=n,W=o,H=i,P=r,Q=s,T=f("Uediter"),Y=m,B=g("img-url"),G=d;return _((h(),j("div",F,[b(Y,{size:"small",model:k.form,ref:"form",rules:k.rules,"label-width":"100px"},{default:y((()=>[q,b(S,{label:"文章标题",prop:"article_title"},{default:y((()=>[b(I,{modelValue:k.form.article_title,"onUpdate:modelValue":u[0]||(u[0]=e=>k.form.article_title=e),placeholder:"请输入文章标题",class:"max-w460"},null,8,["modelValue"])])),_:1}),b(S,{label:"描述",prop:"dec"},{default:y((()=>[b(I,{modelValue:k.form.dec,"onUpdate:modelValue":u[1]||(u[1]=e=>k.form.dec=e),placeholder:"请输入文章描述",class:"max-w460"},null,8,["modelValue"])])),_:1}),b(S,{label:"文章缩略图"},{default:y((()=>[v("div",null,[b(D,{type:"primary",onClick:E.openUpload},{default:y((()=>[V("上传图片")])),_:1},8,["onClick"]),_(v("img",z,null,512),[[B,k.form.image.file_path]]),k.isupload?(h(),x(R,{key:0,isupload:k.isupload,onReturnImgs:E.returnImgsFunc},{default:y((()=>[V("上传图片")])),_:1},8,["isupload","onReturnImgs"])):C("",!0)])])),_:1}),b(S,{label:"文章分类"},{default:y((()=>[b(H,{modelValue:k.form.category_id,"onUpdate:modelValue":u[2]||(u[2]=e=>k.form.category_id=e),placeholder:"请选择"},{default:y((()=>[(h(!0),j(U,null,w(k.category,((e,t)=>(h(),x(W,{key:t,label:e.name,value:e.category_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(S,{label:"虚拟阅读量"},{default:y((()=>[b(I,{type:"number",modelValue:k.form.virtual_views,"onUpdate:modelValue":u[3]||(u[3]=e=>k.form.virtual_views=e),placeholder:"请输入数字",class:"max-w460"},null,8,["modelValue"])])),_:1}),b(S,{label:"文章状态"},{default:y((()=>[b(Q,{modelValue:k.form.article_status,"onUpdate:modelValue":u[4]||(u[4]=e=>k.form.article_status=e)},{default:y((()=>[b(P,{label:1},{default:y((()=>[V("显示")])),_:1}),b(P,{label:0},{default:y((()=>[V("隐藏")])),_:1})])),_:1},8,["modelValue"])])),_:1}),b(S,{label:"文章内容"},{default:y((()=>[v("div",$,[k.loading?C("",!0):(h(),x(T,{key:0,text:k.ueditor.text,config:k.ueditor.config,ref:"ue",onContentChange:E.contentChangeFunc},null,8,["text","config","onContentChange"]))])])),_:1}),b(S,{label:"排序"},{default:y((()=>[b(I,{type:"number",modelValue:k.form.article_sort,"onUpdate:modelValue":u[5]||(u[5]=e=>k.form.article_sort=e),placeholder:"请输入数字",class:"max-w460"},null,8,["modelValue"])])),_:1}),v("div",A,[b(D,{size:"small",type:"info",onClick:E.cancelFunc,loading:k.loading},{default:y((()=>[V("取消")])),_:1},8,["onClick","loading"]),b(D,{size:"small",type:"primary",onClick:E.onSubmit,loading:k.loading},{default:y((()=>[V("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model","rules"])])),[[G,k.loading]])}]]);export{E as default};
