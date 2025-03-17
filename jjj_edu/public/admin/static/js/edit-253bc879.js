import{E as e,d as l,e as a,f as s,i as t,s as i,c as o,v as r}from"./element-plus-fe2e4fed.js";import{_ as m}from"./Setlink-3841cc23.js";import{_ as d}from"./Upload-78ee26ae.js";import{A as n}from"./ad-cdea8f31.js";import{_ as p}from"./index-2e57a1f5.js";import{ap as u,$ as c,o as f,c as g,P as _,S as h,a as j,W as y,T as k,Y as b,X as x}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./data-97822b17.js";import"./AddCategory-c921a3c2.js";import"./file-56305e6b.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const v={components:{Upload:d,Setlink:m},data:()=>({loading:!0,isupload:!1,is_linkset:!1,tips_Id:"",form:{ad_id:"",title:"",category_id:"",image_id:"",image:{},sort:1,status:"0",background:""},category:[],rules:{title:[{required:!0,message:"请输入广告标题",trigger:"blur"}],image_id:[{required:!0,message:"请上传图片",trigger:"blur"}]}}),created(){this.getDetail()},methods:{changeLink(){this.is_linkset=!0},closeLinkset(e){this.is_linkset=!1,null!=e&&(this.form.link_url=e.url,this.form.name="链接到 "+e.type+" "+e.name,this.tips_Id="链接到 "+e.type+" "+e.name)},openUpload(){this.isupload=!0},returnImgsFunc(e){null!=e&&(this.form.image_id=e[0].file_id,this.form.image.file_path=e[0].file_path),this.isupload=!1},getDetail(){let e=this;const l=e.$route.query.ad_id;n.adDetail({ad_id:l},!0).then((l=>{e.form=l.data.detail,e.tips_Id=l.data.detail.name,e.form.image||(e.form.image={}),e.category=l.data.catgory,e.loading=!1})).catch((e=>{}))},onSubmit(){let l=this,a=this.form;n.editAd(a,!0).then((a=>{e({message:a.msg,type:"success"}),l.$router.push("/plus/ad/ad/index")})).catch((e=>{}))},cancelFunc(){this.$router.push({path:"/plus/ad/ad/index"})}}},V={class:"product-add pb50"},C=j("div",{class:"common-form"},"编辑广告",-1),w={class:"mt10",width:120,alt:""},U=j("div",{style:{color:"red"}},null,-1),I={class:"url-box flex-1"},z={class:"tips",id:"tips",style:{color:"#000"}},D=j("div",{class:"url-box ml10",style:{float:"right"}},null,-1),S={class:"common-button-wrapper"};const q=p(v,[["render",function(e,n,p,v,q,F){const L=l,$=a,A=s,R=d,E=t,P=i,T=m,W=o,X=u("img-url"),Y=r;return c((f(),g("div",V,[_(W,{size:"small",model:q.form,ref:"form",rules:q.rules,"label-width":"100px"},{default:h((()=>[C,_($,{label:"广告标题",prop:"title"},{default:h((()=>[_(L,{modelValue:q.form.title,"onUpdate:modelValue":n[0]||(n[0]=e=>q.form.title=e),placeholder:"请输入广告标题",class:"max-w460"},null,8,["modelValue"])])),_:1}),_($,{label:"广告图",prop:"image_id"},{default:h((()=>[j("div",null,[_(A,{type:"primary",onClick:F.openUpload},{default:h((()=>[y("上传图片")])),_:1},8,["onClick"]),c(j("img",w,null,512),[[X,q.form.image.file_path]]),U,q.isupload?(f(),k(R,{key:0,isupload:q.isupload,onReturnImgs:F.returnImgsFunc},{default:h((()=>[y("上传图片")])),_:1},8,["isupload","onReturnImgs"])):b("",!0)])])),_:1}),_($,{label:"广告状态"},{default:h((()=>[_(P,{modelValue:q.form.status,"onUpdate:modelValue":n[1]||(n[1]=e=>q.form.status=e)},{default:h((()=>[_(E,{label:1},{default:h((()=>[y("显示")])),_:1}),_(E,{label:0},{default:h((()=>[y("隐藏")])),_:1})])),_:1},8,["modelValue"])])),_:1}),_($,{label:"排序"},{default:h((()=>[_(L,{type:"number",modelValue:q.form.sort,"onUpdate:modelValue":n[2]||(n[2]=e=>q.form.sort=e),placeholder:"请输入数字",class:"max-w460"},null,8,["modelValue"])])),_:1}),_($,{label:"链接",prop:"image_id"},{default:h((()=>[j("div",I,[_(L,{modelValue:q.form.link_url,"onUpdate:modelValue":n[3]||(n[3]=e=>q.form.link_url=e),type:"text",class:"max-w460",style:{width:"380px"}},null,8,["modelValue"]),_(A,{type:"primary",onClick:n[4]||(n[4]=e=>F.changeLink())},{default:h((()=>[y("选择链接")])),_:1}),j("div",z,x(q.tips_Id),1),_(L,{modelValue:q.form.name,"onUpdate:modelValue":n[5]||(n[5]=e=>q.form.name=e),type:"hidden",class:"max-w460"},null,8,["modelValue"])]),D])),_:1}),q.is_linkset?(f(),k(T,{key:0,is_linkset:q.is_linkset,onCloseDialog:F.closeLinkset},{default:h((()=>[y("选择链接")])),_:1},8,["is_linkset","onCloseDialog"])):b("",!0),j("div",S,[_(A,{size:"small",type:"info",onClick:F.cancelFunc,loading:q.loading},{default:h((()=>[y("取消")])),_:1},8,["onClick","loading"]),_(A,{size:"small",type:"primary",onClick:F.onSubmit,loading:q.loading},{default:h((()=>[y("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model","rules"])])),[[Y,q.loading]])}]]);export{q as default};
