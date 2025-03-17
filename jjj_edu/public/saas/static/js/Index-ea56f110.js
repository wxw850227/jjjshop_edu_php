import{f as e,a,e as l,b as t,k as i,t as o,v as s,c as r,d as n,g as d,h as m,j as c}from"./element-plus-1d2aab9a.js";import{R as p}from"./region-040f7912.js";import{_ as u}from"./index-14a47fc3.js";import{c as h,a as g,O as b,R as v,_ as j,S as f,o as C,P as _,a8 as y,X as k,V as z}from"./@vue-413ce838.js";import"./lodash-es-493ac664.js";import"./@vueuse-4fad2ccb.js";import"./dayjs-3f6c138b.js";import"./call-bind-a6dd5c06.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-1ce7f40b.js";import"./@popperjs-b78c3215.js";import"./escape-html-d3e23fdb.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./request-7e7ec6d1.js";import"./axios-63583d02.js";import"./qs-edfbe083.js";import"./side-channel-6da5de8a.js";import"./object-inspect-66d569d0.js";import"./vue-router-569da8b3.js";import"./pinia-1c212f4d.js";const F={data:()=>({loading:!0,tableData:[],pageSize:15,totalDataNumber:0,curPage:1,open_add:!1,open_edit:!1,userModel:{},searchForm:{name:"",level:0,province_id:"",city_id:""},areaList:[]}),created(){this.getData()},methods:{handleCurrentChange(e){let a=this;a.curPage=e,a.loading=!0,a.getData()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getData()},getData(){let e=this,a=e.searchForm;a.page=e.curPage,a.list_rows=e.pageSize,p.regionList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total,e.areaList=a.data.regionData})).catch((e=>{}))},onSubmit(){this.curPage=1,this.getData()},addClick(){this.$router.push("/region/add")},editClick(e){this.$router.push({path:"/region/edit",query:{id:e.id}})},initCity(){this.searchForm.city_id=""},deleteClick(l){let t=this;e.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{t.loading=!0,p.deleteRegion({id:l.id},!0).then((e=>{t.loading=!1,a({message:e.msg,type:"success"}),t.getData()})).catch((e=>{t.loading=!1}))})).catch((()=>{}))}}},D={class:"user"},V=g("div",{class:"common-form"},"地区列表",-1),w={class:"common-seach-wrap"},S={class:"common-level-rail"},x={class:"product-content"},P={class:"table-wrap"},L={key:0},U={key:1},q={key:2},N={class:"pagination"};const R=u(F,[["render",function(e,a,p,u,F,R){const B=r,T=n,$=d,H=m,M=l,O=t,X=c,A=i,E=o,G=s;return C(),h("div",D,[V,g("div",w,[b(O,{size:"small",inline:!0,model:F.searchForm,class:"demo-form-inline"},{default:v((()=>[b(T,{label:"名称"},{default:v((()=>[b(B,{size:"small",modelValue:F.searchForm.name,"onUpdate:modelValue":a[0]||(a[0]=e=>F.searchForm.name=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1}),b(T,{label:"地区类型"},{default:v((()=>[g("div",null,[b(H,{modelValue:F.searchForm.level,"onUpdate:modelValue":a[1]||(a[1]=e=>F.searchForm.level=e)},{default:v((()=>[b($,{label:"全部",value:0}),b($,{label:"省份",value:1}),b($,{label:"城市",value:2}),b($,{label:"地区",value:3})])),_:1},8,["modelValue"])])])),_:1}),b(T,{label:"选择上级"},{default:v((()=>[b(H,{modelValue:F.searchForm.province_id,"onUpdate:modelValue":a[2]||(a[2]=e=>F.searchForm.province_id=e),placeholder:"省",onChange:R.initCity},{default:v((()=>[b($,{label:"全部",value:""}),(C(!0),h(_,null,y(F.areaList,((e,a)=>(C(),f($,{label:e.name,value:e.id,key:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"]),""!=F.searchForm.province_id?(C(),f(H,{key:0,modelValue:F.searchForm.city_id,"onUpdate:modelValue":a[3]||(a[3]=e=>F.searchForm.city_id=e),placeholder:"市"},{default:v((()=>[b($,{label:"全部",value:""}),(C(!0),h(_,null,y(F.areaList[F.searchForm.province_id].city,((e,a)=>(C(),f($,{label:e.name,value:e.id,key:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):k("",!0)])),_:1}),b(T,null,{default:v((()=>[b(M,{size:"default",type:"primary",icon:"Search",onClick:R.onSubmit},{default:v((()=>[z("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),g("div",S,[b(M,{type:"primary",onClick:R.addClick},{default:v((()=>[z("添加")])),_:1},8,["onClick"])]),g("div",x,[g("div",P,[j((C(),f(A,{size:"small",data:F.tableData,border:"",style:{width:"100%"}},{default:v((()=>[b(X,{prop:"shortname",label:"简称"}),b(X,{prop:"name",label:"名称"}),b(X,{prop:"merger_name",label:"名称"}),b(X,{label:"级别"},{default:v((e=>[1==e.row.level?(C(),h("span",L,"省份")):k("",!0),2==e.row.level?(C(),h("span",U,"城市")):k("",!0),3==e.row.level?(C(),h("span",q,"地区")):k("",!0)])),_:1}),b(X,{prop:"lng",label:"经度"}),b(X,{prop:"lat",label:"纬度"}),b(X,{fixed:"right",label:"操作",width:"90"},{default:v((e=>[b(M,{onClick:a=>R.editClick(e.row),type:"text",size:"small"},{default:v((()=>[z("编辑")])),_:2},1032,["onClick"]),b(M,{onClick:a=>R.deleteClick(e.row),type:"text",size:"small"},{default:v((()=>[z("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[G,F.loading]])]),g("div",N,[b(E,{onSizeChange:R.handleSizeChange,onCurrentChange:R.handleCurrentChange,background:"","current-page":F.curPage,"page-size":F.pageSize,layout:"total, prev, pager, next, jumper",total:F.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])}]]);export{R as default};
