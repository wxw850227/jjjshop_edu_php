import{_ as e}from"./Setlink-9ee89cb7.js";import{i as l,s as a,e as t,d as s,H as o,f as i,y as d,c as n}from"./element-plus-fe2e4fed.js";import{ae as r,ap as m,o as u,c as p,a as c,X as f,P as b,S as j,W as k,a1 as _,Q as h,a9 as y,$ as I,T as V,Y as g}from"./@vue-0361ad4a.js";import{_ as v}from"./index-68daabb5.js";import"./data-8d58e140.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const x={components:{Setlink:e},data:()=>({is_linkset:!1,index:null}),props:["curItem","selectedIndex"],methods:{changeLink(e){this.is_linkset=!0,this.index=e},closeLinkset(e){this.is_linkset=!1,e&&(this.curItem.data[this.index].linkUrl=e.url,this.curItem.data[this.index].name="链接到 "+e.type+" "+e.name)}}},C={class:"common-form"},U={class:"d-s-c"},S={class:"d-s-c"},D=c("p",null,"轮播图自动切换的间隔时间，单位：毫秒",-1),$={class:"delete-box"},E={class:"pic"},L=["onClick"],w={class:"d-s-c"},z={class:"url-box flex-1"},q=c("span",{class:"key-name"},"链接地址：",-1),R={class:"url-box ml10"},A={class:"d-c-c"};const F=v(x,[["render",function(v,x,F,H,P,Q){const T=l,W=a,X=t,Y=s,B=o,G=i,J=r("DeleteFilled"),K=d,M=n,N=e,O=m("img-url");return u(),p("div",null,[c("div",C,[c("span",null,f(F.curItem.name),1)]),b(M,{size:"small",model:F.curItem,"label-width":"100px"},{default:j((()=>[b(X,{label:"轮播图显示："},{default:j((()=>[b(W,{modelValue:F.curItem.style.imgShape,"onUpdate:modelValue":x[0]||(x[0]=e=>F.curItem.style.imgShape=e)},{default:j((()=>[b(T,{label:"round"},{default:j((()=>[k("圆形")])),_:1})])),_:1},8,["modelValue"])])),_:1}),b(X,{label:"指示点形状："},{default:j((()=>[b(W,{modelValue:F.curItem.style.btnShape,"onUpdate:modelValue":x[1]||(x[1]=e=>F.curItem.style.btnShape=e)},{default:j((()=>[b(T,{label:"round"},{default:j((()=>[k("圆形")])),_:1}),b(T,{label:"square"},{default:j((()=>[k("正方形")])),_:1}),b(T,{label:"rectangle"},{default:j((()=>[k("长方形")])),_:1})])),_:1},8,["modelValue"])])),_:1}),b(X,{label:"图片宽度(px):"},{default:j((()=>[b(Y,{placeholder:"请输入图片宽度",value:"702",disabled:""})])),_:1}),b(X,{label:"图片高度(px):"},{default:j((()=>[b(Y,{placeholder:"请输入图片高度",modelValue:F.curItem.style.height,"onUpdate:modelValue":x[2]||(x[2]=e=>F.curItem.style.height=e)},null,8,["modelValue"])])),_:1}),b(X,{label:"指示点颜色："},{default:j((()=>[c("div",U,[b(B,{modelValue:F.curItem.style.btnColor,"onUpdate:modelValue":x[3]||(x[3]=e=>F.curItem.style.btnColor=e)},null,8,["modelValue"]),b(G,{type:"button",style:{"margin-left":"10px"},onClick:x[4]||(x[4]=_((e=>v.$parent.onEditorResetColor(F.curItem.style,"btnColor","#ffffff")),["stop"]))},{default:j((()=>[k("重置 ")])),_:1})])])),_:1}),b(X,{label:"背景颜色："},{default:j((()=>[c("div",S,[b(B,{modelValue:F.curItem.style.background,"onUpdate:modelValue":x[5]||(x[5]=e=>F.curItem.style.background=e)},null,8,["modelValue"]),b(G,{type:"button",style:{"margin-left":"10px"},onClick:x[6]||(x[6]=_((e=>v.$parent.onEditorResetColor(F.curItem.style,"background","#f6f6f6")),["stop"]))},{default:j((()=>[k("重置 ")])),_:1})])])),_:1}),b(X,{label:"切换时间："},{default:j((()=>[b(Y,{modelValue:F.curItem.params.interval,"onUpdate:modelValue":x[7]||(x[7]=e=>F.curItem.params.interval=e)},null,8,["modelValue"]),D])),_:1}),b(X,{label:"图片："},{default:j((()=>[(u(!0),p(h,null,y(F.curItem.data,((e,l)=>(u(),p("div",{class:"param-img-item",key:l},[c("div",$,[b(K,{onClick:e=>v.$parent.onEditorDeleleData(l,F.selectedIndex)},{default:j((()=>[b(J)])),_:2},1032,["onClick"])]),c("div",E,[I(c("img",{alt:"",onClick:l=>v.$parent.onEditorSelectImage(e,"imgUrl")},null,8,L),[[O,e.imgUrl]])]),c("div",w,[c("div",z,[q,b(Y,{placeholder:"请选择链接地址",modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["modelValue","onUpdate:modelValue"])]),c("div",R,[b(G,{type:"primary",onClick:e=>Q.changeLink(l)},{default:j((()=>[k("选择链接")])),_:2},1032,["onClick"])])])])))),128)),c("div",A,[b(G,{onClick:v.$parent.onEditorAddData},{default:j((()=>[k("添加一个")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["model"]),P.is_linkset?(u(),V(N,{key:0,is_linkset:P.is_linkset,onCloseDialog:Q.closeLinkset},{default:j((()=>[k("选择链接")])),_:1},8,["is_linkset","onCloseDialog"])):g("",!0)])}]]);export{F as default};
