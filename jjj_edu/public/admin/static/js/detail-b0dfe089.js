import{f as e,t as i,u as s}from"./element-plus-fe2e4fed.js";import{C as t}from"./course-50688b35.js";import a from"./index-b13abbe2.js";import o from"./index-374f3115.js";import r from"./index-53ec603e.js";import{_ as d}from"./index-68daabb5.js";import{ae as l,ap as m,o as c,c as n,a as p,$ as u,X as j,T as h,S as _,W as g,P as f,Y as v}from"./@vue-0361ad4a.js";import"./lodash-es-3593bb86.js";import"./async-validator-cf877c1f.js";import"./@vueuse-19751edd.js";import"./dayjs-3a594381.js";import"./call-bind-8544b80b.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1634e2d0.js";import"./@popperjs-b78c3215.js";import"./escape-html-1590d737.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-64e93849.js";import"./pinia-3f36854e.js";import"./axios-15f6fe35.js";import"./qs-c6aa5595.js";import"./side-channel-b02c3a2b.js";import"./object-inspect-bd98d4ca.js";import"./vue-clipboard2-259f629a.js";import"./clipboard-e6665d4e.js";import"./vue-ueditor-wrap-f5452c05.js";const b={class:""},y={class:"d-b-s",style:{"margin-bottom":"10px"}},x={style:{"margin-right":"10px"}},C={style:{width:"131px",height:"74px"},alt:""},k={class:"flex-1 d-c d-b-s",style:{height:"74px"}},S={class:"f14 gray3"},N={class:"f12 orange"};const O=d({components:{Section:a,Order:o,Comment:r},data:()=>({course_id:0,loading:!0,activeName:"Section",detail:{image_id:0,image:{file_path:""}}}),created(){this.course_id=this.$route.query.course_id,this.getData()},methods:{handleClick(e,i){},getData(){let e=this;e.loading=!0;let i={course_id:e.course_id};t.getCourseDetail(i,!0).then((i=>{e.detail=i.data.model,e.loading=!1})).catch((i=>{e.loading=!1}))},addSection(){this.$router.push({path:"/course/section/add",query:{course_id:this.course_id,scene:"add"}})}}},[["render",function(t,a,o,r,d,O){const $=e,q=l("Section"),w=i,z=l("Order"),D=l("Comment"),T=s,V=m("img-url"),U=m("auth");return c(),n("div",b,[p("div",y,[p("div",x,[u(p("img",C,null,512),[[V,d.detail.image_id?d.detail.image.file_path:""]])]),p("div",k,[p("div",S,j(d.detail.title),1),p("div",N,"￥"+j(d.detail.course_price),1),u((c(),h($,{size:"mini",type:"success",onClick:O.addSection},{default:_((()=>[g("添加课时")])),_:1},8,["onClick"])),[[U,"/course/section/add"]])])]),f(T,{modelValue:d.activeName,"onUpdate:modelValue":a[0]||(a[0]=e=>d.activeName=e),onTabChange:O.handleClick},{default:_((()=>[f(w,{label:"课时列表",name:"Section"},{default:_((()=>["Section"==d.activeName?(c(),h(q,{key:0,course_id:d.course_id},null,8,["course_id"])):v("",!0)])),_:1}),f(w,{label:"学员列表",name:"Order"},{default:_((()=>["Order"==d.activeName?(c(),h(z,{key:0,course_id:d.course_id},null,8,["course_id"])):v("",!0)])),_:1}),f(w,{label:"课程评价",name:"Comment"},{default:_((()=>["Comment"==d.activeName?(c(),h(D,{key:0,course_id:d.course_id},null,8,["course_id"])):v("",!0)])),_:1})])),_:1},8,["modelValue","onTabChange"])])}]]);export{O as default};
