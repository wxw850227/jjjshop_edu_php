import{_ as a,o as t,a as e,w as s,f as l,d as i,b as d,r as o,F as p,h as n,e as g,t as r,p as _,k as c}from"./index-db1fe3c3.js";import{z as u}from"./zs-tab.0ea1306f.js";const m=a({components:{zsTab:u},data:()=>({type:1,loading:!0,listData:[],last_page:0,page:1,list_rows:10,no_more:!1,tabList:[{key:"练习",value:1},{key:"真题",value:2}],type:1}),onShow(){this.page=1,this.listData=[],this.getData()},computed:{loadingType(){return this.loading?1:0!=this.listData.length&&this.no_more?2:0}},onReachBottom(){let a=this;a.page<a.last_page&&(a.page++,a.getData()),a.no_more=!0},methods:{getData(){let a=this;a.loading=!0,a._get("paper.Record/index",{page:a.page||1,list_rows:a.list_rows,paper_type:a.type},(function(t){a.loading=!1,a.listData=a.listData.concat(t.data.detail.data),a.last_page=t.data.detail.last_page,t.data.detail.last_page<=1&&(a.no_more=!0)}))},changeType(a){this.type!=a.value&&(this.type=a.value,this.page=1,this.listData=[],this.getData())}}},[["render",function(a,u,m,f,h,b){const y=n("zsTab"),x=c,D=l;return t(),e(D,null,{default:s((()=>[i(y,{data:h.tabList,activeName:h.type,onChangTab:b.changeType},null,8,["data","activeName","onChangTab"]),i(D,{class:"p24"},{default:s((()=>[(t(!0),d(p,null,o(h.listData,((l,o)=>(t(),e(D,{class:"data-item d-b-s flex-1",key:o},{default:s((()=>[i(D,{class:"imgbox"},{default:s((()=>[i(x,{class:"data-img",src:l.paper.image.file_path,mode:""},null,8,["src"])])),_:2},1024),i(D,{class:"data-text ml20 flex-1"},{default:s((()=>[i(D,null,{default:s((()=>[i(D,{class:"text-ellipsis-2 data-title f26 gray3"},{default:s((()=>[g(r(l.paper.title),1)])),_:2},1024)])),_:2},1024),i(D,{class:"d-b-c data-bottom"},{default:s((()=>[0==l.is_submit?(t(),d(p,{key:0},[i(D,{class:"gray9 f24"},{default:s((()=>[g("未完成")])),_:1}),i(D,{class:"data-btn f26 redF24",onClick:t=>a.gotoPage("/pages/examination/exam/start?paper_id="+l.paper_id)},{default:s((()=>[g("继续答题")])),_:2},1032,["onClick"])],64)):_("",!0),1==l.is_submit?(t(),d(p,{key:1},[i(D,{class:"dominant f24"},{default:s((()=>[g("已完成")])),_:1}),i(D,{class:"data-btn f26 redF24",onClick:t=>a.gotoPage("/pages/examination/record/detail?paper_id="+l.paper_id)},{default:s((()=>[g("查看解析")])),_:2},1032,["onClick"])],64)):_("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})}],["__scopeId","data-v-db5cb89d"]]);export{m as default};
