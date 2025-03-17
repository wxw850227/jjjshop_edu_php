import{_ as e,B as a,D as l,o as t,a as c,w as s,p as i,f as r,d as o,b as d,r as n,F as u,e as f,t as m,n as _,k as p,i as g,af as h,u as b,y as k,a2 as x,h as D}from"./index-4d017ba3.js";import{_ as C}from"./u-icon.6b7addd3.js";import{r as y}from"./uni-app.es.ef2ad64d.js";import{U as L}from"./upload.cedb4a65.js";const v=e({components:{Upload:L},data:()=>({loadding:!0,order_id:"",lecturer_id:"",lecturerDetail:{},paramsLecturer:{image_list:[]},tableData:[],score:10,isUpload:!1,image_id:[],img:"/static/temp/photo.jpg",index:""}),onLoad(e){e.order_id?(this.order_id=e.order_id,this.getCourse()):e.lecturer_id&&(this.lecturer_id=e.lecturer_id,this.getLecturer())},methods:{getCourse(){let e=this,t=e.order_id;e.loadding=!0,a({title:"加载中"}),e._get("course.Comment/order",{order_id:t},(function(a){e.tableData=a.data.order.product,e.tableData.forEach(((a,l)=>{e.tableData[l].score=10,e.tableData[l].image_list=[]})),e.loadding=!1,l()}))},getLecturer(){let e=this,a=e.lecturer_id;e._get("lecturer.Comment/add",{lecturer_id:a},(function(a){const{data:{detail:t}}=a;e.lecturerDetail=t,e.paramsLecturer.score=10,e.loadding=!1,l()}))},gradeFunc(e,a,l){e.score=a,this.tableData[l]=e},changScore(e){this.paramsLecturer.score=e},formSubmit:function(e){this.order_id?this.saveOrder():this.lecturer_id&&this.saveLecturer()},saveOrder(){let e=this,a=e.order_id,l={};this.tableData&&this.tableData.length>0&&this.tableData.forEach((e=>{l.image_list=e.image_list,l.content=e.content,l.score=e.score})),e._post("course.comment/order",{order_id:a,formData:JSON.stringify(l)},(function(a){e.showSuccess("评价成功！",(function(){e.gotoPage("/pages/order/category","redirect")}))}))},saveLecturer(){let e=this,a=e.lecturer_id;e._post("lecturer.Comment/add ",{lecturer_id:a,formData:JSON.stringify(e.paramsLecturer)},(function(l){e.showSuccess("评价成功！",(function(){e.gotoPage(`/pages/knowledge/lecturer/detail?lecturer_id=${a}`,"redirect")}))}))},openUpload(e){this.index=e,this.isUpload=!0},getImgsFunc(e){let a=this;if(e&&void 0!==e)if(a.order_id){let l=a.index;a.tableData[l].image_list=a.tableData[l].image_list.concat(e)}else a.lecturer_id&&(a.paramsLecturer.image_list=a.paramsLecturer.image_list.concat(e));a.isUpload=!1},deleteImg(e,a,l){"order"==e?this.tableData[a].image_list.splice(l,1):"lecturer"==e&&this.paramsLecturer.image_list.splice(l,1)}}},[["render",function(e,a,l,L,v,U){const S=p,j=r,F=g,I=h,V=y(b("u-icon"),C),w=k,z=x,O=D("Upload");return v.loadding?i("",!0):(t(),c(j,{key:0,class:"evaluate pb100"},{default:s((()=>[o(z,{onSubmit:U.formSubmit,onReset:e.formReset},{default:s((()=>[v.order_id?(t(!0),d(u,{key:0},n(v.tableData,((e,a)=>(t(),c(j,{class:"evaluate-item p30",key:a},{default:s((()=>[o(j,{class:"product d-s-c"},{default:s((()=>[o(j,{class:"cover"},{default:s((()=>[o(S,{src:e.image.file_path,mode:"aspectFit"},null,8,["src"])])),_:2},1024),o(j,{class:"info ml20"},{default:s((()=>[o(j,{class:"name f28"},{default:s((()=>[f(m(e.product_name),1)])),_:2},1024),o(j,{class:"price pt10 f22 red"},{default:s((()=>[f(" ¥ "),o(F,{class:"f40"},{default:s((()=>[f(m(e.product_price),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(j,{class:"grade d-b-c p-30-0 mt30"},{default:s((()=>[o(j,{class:_(10==e.score?"flex-1 d-c-c active":"flex-1 d-c-c"),onClick:l=>U.gradeFunc(e,10,a)},{default:s((()=>[o(j,{class:"item d-c-c"},{default:s((()=>[o(F,{class:"icon iconfont icon-pingjiahaoping"}),o(F,{class:"ml10"},{default:s((()=>[f("好评")])),_:1})])),_:1})])),_:2},1032,["class","onClick"]),o(j,{class:_(20==e.score?"flex-1 d-c-c active":"flex-1 d-c-c"),onClick:l=>U.gradeFunc(e,20,a)},{default:s((()=>[o(j,{class:"item d-c-c"},{default:s((()=>[o(F,{class:"icon iconfont icon-pingjiazhongping"}),o(F,{class:"ml10"},{default:s((()=>[f("中评")])),_:1})])),_:1})])),_:2},1032,["class","onClick"]),o(j,{class:_(30==e.score?"flex-1 d-c-c active":"flex-1 d-c-c"),onClick:l=>U.gradeFunc(e,30,a)},{default:s((()=>[o(j,{class:"item d-c-c"},{default:s((()=>[o(F,{class:"icon iconfont icon-pingjiachaping"}),o(F,{class:"ml10"},{default:s((()=>[f("差评")])),_:1})])),_:1})])),_:2},1032,["class","onClick"])])),_:2},1024),o(j,{class:"textarea-box d-s-c f28"},{default:s((()=>[o(I,{class:"p10 box-s-b border flex-1",modelValue:e.content,"onUpdate:modelValue":a=>e.content=a,placeholder:"请输入评价内容"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),o(j,{class:"upload-list d-s-c"},{default:s((()=>[(t(!0),d(u,null,n(e.image_list,((e,l)=>(t(),c(j,{class:"item",key:l,onClick:e=>U.deleteImg("order",a,l)},{default:s((()=>[o(j,{class:"closeIcon",onClick:e=>U.deleteImg("lecturer",a,l)},{default:s((()=>[o(V,{name:"close-circle-fill",color:"#999999",size:"32rpx"})])),_:2},1032,["onClick"]),o(S,{src:e.file_path,mode:"aspectFit"},null,8,["src"])])),_:2},1032,["onClick"])))),128)),e.image_list.length<9?(t(),c(j,{key:0,class:"item upload-btn d-c-c d-c",onClick:e=>U.openUpload(a)},{default:s((()=>[o(F,{class:"icon iconfont icon-yunshangchuan_o"}),o(F,{class:"gray9"},{default:s((()=>[f("上传图片")])),_:1})])),_:2},1032,["onClick"])):i("",!0)])),_:2},1024)])),_:2},1024)))),128)):v.lecturer_id?(t(),c(j,{key:1,class:"evaluate-item p30"},{default:s((()=>[o(j,{class:"product d-s-c"},{default:s((()=>[o(j,{class:"cover"},{default:s((()=>[o(S,{src:v.lecturerDetail.image&&v.lecturerDetail.image.file_path,mode:"aspectFit"},null,8,["src"])])),_:1}),o(j,{class:"info ml20"},{default:s((()=>[o(j,{class:"header"},{default:s((()=>[o(j,{class:"name f28"},{default:s((()=>[f(m(v.lecturerDetail.name),1)])),_:1}),v.lecturerDetail.label&&v.lecturerDetail.label.length>0?(t(),c(j,{key:0,class:"labelList"},{default:s((()=>[o(j,{class:"label"},{default:s((()=>[f(m(v.lecturerDetail.label[0]),1)])),_:1})])),_:1})):i("",!0)])),_:1}),o(j,{class:"price pt10 f22 gray6"},{default:s((()=>[f(m(v.lecturerDetail.describe),1)])),_:1})])),_:1})])),_:1}),o(j,{class:"grade d-b-c p-30-0 mt30"},{default:s((()=>[o(j,{class:_(10==v.paramsLecturer.score?"flex-1 d-c-c active":"flex-1 d-c-c"),onClick:a[0]||(a[0]=e=>U.changScore(10))},{default:s((()=>[o(j,{class:"item d-c-c"},{default:s((()=>[o(F,{class:"icon iconfont icon-pingjiahaoping"}),o(F,{class:"ml10"},{default:s((()=>[f("好评")])),_:1})])),_:1})])),_:1},8,["class"]),o(j,{class:_(20==v.paramsLecturer.score?"flex-1 d-c-c active":"flex-1 d-c-c"),onClick:a[1]||(a[1]=e=>U.changScore(20))},{default:s((()=>[o(j,{class:"item d-c-c"},{default:s((()=>[o(F,{class:"icon iconfont icon-pingjiazhongping"}),o(F,{class:"ml10"},{default:s((()=>[f("中评")])),_:1})])),_:1})])),_:1},8,["class"]),o(j,{class:_(30==v.paramsLecturer.score?"flex-1 d-c-c active":"flex-1 d-c-c"),onClick:a[2]||(a[2]=e=>U.changScore(30))},{default:s((()=>[o(j,{class:"item d-c-c"},{default:s((()=>[o(F,{class:"icon iconfont icon-pingjiachaping"}),o(F,{class:"ml10"},{default:s((()=>[f("差评")])),_:1})])),_:1})])),_:1},8,["class"])])),_:1}),o(j,{class:"textarea-box d-s-c f28"},{default:s((()=>[o(I,{class:"p10 box-s-b border flex-1",modelValue:v.paramsLecturer.content,"onUpdate:modelValue":a[3]||(a[3]=e=>v.paramsLecturer.content=e),placeholder:"请输入评价内容"},null,8,["modelValue"])])),_:1}),o(j,{class:"upload-list d-s-c"},{default:s((()=>[(t(!0),d(u,null,n(v.paramsLecturer.image_list,((e,a)=>(t(),c(j,{class:"item",key:a},{default:s((()=>[o(j,{class:"closeIcon",onClick:e=>U.deleteImg("lecturer",v.index,a)},{default:s((()=>[o(V,{name:"close-circle-fill",color:"#999999",size:"32rpx"})])),_:2},1032,["onClick"]),o(S,{src:e.file_path,mode:"aspectFit"},null,8,["src"])])),_:2},1024)))),128)),v.paramsLecturer.image_list.length<9?(t(),c(j,{key:0,class:"item upload-btn d-c-c d-c",onClick:a[4]||(a[4]=e=>U.openUpload(v.index))},{default:s((()=>[o(F,{class:"icon iconfont icon-yunshangchuan_o"}),o(F,{class:"gray9"},{default:s((()=>[f("上传图片")])),_:1})])),_:1})):i("",!0)])),_:1})])),_:1})):i("",!0),o(j,{class:"foot-btns"},{default:s((()=>[o(w,{"form-type":"submit",class:"btn-red"},{default:s((()=>[f("确认提交")])),_:1})])),_:1})])),_:1},8,["onSubmit","onReset"]),v.isUpload?(t(),c(O,{key:0,onGetImgs:U.getImgsFunc},null,8,["onGetImgs"])):i("",!0)])),_:1}))}],["__scopeId","data-v-5c3db5c8"]]);export{v as default};
