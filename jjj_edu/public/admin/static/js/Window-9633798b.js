import{_ as e}from"./Setlink-3841cc23.js";import{I as l,e as t,H as s,f as a,i,s as o,d,c as n}from"./element-plus-fe2e4fed.js";import{ap as m,o as r,c as u,a as p,X as c,P as f,S as j,a1 as k,W as y,Y as I,Q as b,a9 as g,$ as h,T as _}from"./@vue-0361ad4a.js";import{_ as v}from"./index-2e57a1f5.js";import"./data-97822b17.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const x={components:{Setlink:e},data:()=>({is_linkset:!1,index:null}),props:["curItem","selectedIndex"],created(){this.curItem.style.paddingTop=parseInt(this.curItem.style.paddingTop),this.curItem.style.paddingLeft=parseInt(this.curItem.style.paddingLeft)},methods:{changeLink(e){this.is_linkset=!0,this.index=e},closeLinkset(e){this.is_linkset=!1,this.curItem.data[this.index].linkUrl=e.url,this.curItem.data[this.index].name="链接到 "+e.type+" "+e.name}}},V={class:"common-form"},C={class:"d-s-c"},U={key:0,class:"red"},L=p("div",{class:"gray9"},"请确保所有图片的尺寸/比例相同。",-1),w={class:"delete-box"},D=["onClick"],T={class:"pic"},$=["onClick"],E={class:"d-s-c"},S={class:"url-box flex-1"},z=p("span",{class:"key-name"},"链接地址：",-1),q={class:"url-box ml"},A={class:"d-c-c"};const H=v(x,[["render",function(v,x,H,P,Q,R){const W=l,X=t,Y=s,B=a,F=i,G=o,J=d,K=n,M=e,N=m("img-url");return r(),u("div",null,[p("div",V,[p("span",null,c(H.curItem.name),1)]),f(K,{size:"small",model:H.curItem,"label-width":"100px"},{default:j((()=>[f(X,{label:"上下边距："},{default:j((()=>[f(W,{modelValue:H.curItem.style.paddingTop,"onUpdate:modelValue":x[0]||(x[0]=e=>H.curItem.style.paddingTop=e),"show-input":""},null,8,["modelValue"])])),_:1}),f(X,{label:"左右边距："},{default:j((()=>[f(W,{modelValue:H.curItem.style.paddingLeft,"onUpdate:modelValue":x[1]||(x[1]=e=>H.curItem.style.paddingLeft=e),min:0,max:50,"show-input":""},null,8,["modelValue"])])),_:1}),f(X,{label:"背景颜色："},{default:j((()=>[p("div",C,[f(Y,{modelValue:H.curItem.style.background,"onUpdate:modelValue":x[2]||(x[2]=e=>H.curItem.style.background=e)},null,8,["modelValue"]),f(B,{type:"button",style:{"margin-left":"10px"},onClick:x[3]||(x[3]=k((e=>v.$parent.onEditorResetColor(H.curItem.style,"background","#ffffff")),["stop"]))},{default:j((()=>[y("重置")])),_:1})])])),_:1}),f(X,{label:"布局方式："},{default:j((()=>[f(G,{modelValue:H.curItem.style.layout,"onUpdate:modelValue":x[4]||(x[4]=e=>H.curItem.style.layout=e)},{default:j((()=>[f(F,{label:"2"},{default:j((()=>[y("堆积两列")])),_:1}),f(F,{label:"3"},{default:j((()=>[y("堆积三列")])),_:1}),f(F,{label:"4"},{default:j((()=>[y("堆积四列")])),_:1}),f(F,{label:"-1"},{default:j((()=>[y("橱窗样式")])),_:1})])),_:1},8,["modelValue"]),-1==H.curItem.style.layout?(r(),u("div",U,"橱窗样式最多显示四张图片，超出隐藏")):I("",!0),L])),_:1}),f(X,{label:"图片："},{default:j((()=>[(r(!0),u(b,null,g(H.curItem.data,((e,l)=>(r(),u("div",{class:"param-img-item",key:l},[p("div",w,[p("i",{class:"el-icon-delete-solid",onClick:e=>v.$parent.onEditorDeleleData(l,H.selectedIndex)},null,8,D)]),p("div",T,[h(p("img",{alt:"",onClick:l=>v.$parent.onEditorSelectImage(e,"imgUrl")},null,8,$),[[N,e.imgUrl]])]),p("div",E,[p("div",S,[z,f(J,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["modelValue","onUpdate:modelValue"])]),p("div",q,[f(B,{type:"primary",onClick:e=>R.changeLink(l)},{default:j((()=>[y("选择链接")])),_:2},1032,["onClick"])])])])))),128)),p("div",A,[f(B,{onClick:v.$parent.onEditorAddData},{default:j((()=>[y("添加一个")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["model"]),Q.is_linkset?(r(),_(M,{key:0,is_linkset:Q.is_linkset,onCloseDialog:R.closeLinkset},{default:j((()=>[y("选择链接")])),_:1},8,["is_linkset","onCloseDialog"])):I("",!0)])}]]);export{H as default};
