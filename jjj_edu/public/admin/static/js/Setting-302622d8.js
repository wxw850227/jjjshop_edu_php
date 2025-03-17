import{E as e,d as s,e as o,f as t,c as a}from"./element-plus-fe2e4fed.js";import{P as i}from"./points-26669350.js";import{_ as r}from"./index-68daabb5.js";import{o as l,c as m,P as p,S as n,a as d,W as c}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const u={data:()=>({form:{points_name:"",describe:""},loading:!1}),created(){this.getData()},methods:{getData(){let e=this;i.getPoints({},!0).then((s=>{e.form=s.data.values})).catch((e=>{}))},onSubmit(){let s=this,o=s.form;s.$refs.form.validate((t=>{t&&(s.loading=!0,i.setPoints(o,!0).then((o=>{s.loading=!1,1==o.code?e({message:"恭喜你，保存成功",type:"success"}):s.loading=!1})).catch((e=>{s.loading=!1})))}))}}},j={class:"pb50"},f=d("div",{class:"common-form"},"积分设置",-1),b=d("div",{class:"lh18 mt10 gray9"},[d("p",null,"注：修改积分名称后，在买家端的所有页面里，看到的都是自定义的名称"),d("p",null,"例：商家使用自定义的积分名称来做品牌运营。如京东把积分称为“京豆”，淘宝把积分称为“淘金币”")],-1),h={class:"common-button-wrapper"};const g=r(u,[["render",function(e,i,r,u,g,v){const y=s,_=o,x=t,w=a;return l(),m("div",j,[p(w,{ref:"form",size:"small",model:g.form,"label-width":"200px"},{default:n((()=>[f,p(_,{label:"积分名称 ",prop:"points_name",rules:[{required:!0,message:" "}]},{default:n((()=>[p(y,{modelValue:g.form.points_name,"onUpdate:modelValue":i[0]||(i[0]=e=>g.form.points_name=e),autocomplete:"off",class:"max-w460"},null,8,["modelValue"]),b])),_:1}),p(_,{label:"积分说明",rules:[{required:!0,message:" "}]},{default:n((()=>[p(y,{type:"textarea",rows:"5",modelValue:g.form.describe,"onUpdate:modelValue":i[1]||(i[1]=e=>g.form.describe=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),d("div",h,[p(x,{type:"primary",size:"small",onClick:v.onSubmit,loading:g.loading},{default:n((()=>[c("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"])])}]]);export{g as default};
