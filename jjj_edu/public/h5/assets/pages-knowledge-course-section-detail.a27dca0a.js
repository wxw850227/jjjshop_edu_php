import{_ as i,A as c,o as t,a as A,w as s,d as a,e,b as l,r as o,F as m,p as d,u as G,f as M,S as Z,t as N,X as Y,H as I,v as u,s as h,B as n,D,j as R,Y as j,Z as k,R as b,k as T,q as p,$ as E,a0 as g,h as y}from"./index-db1fe3c3.js";import{_ as z}from"./u-icon.6f07718a.js";import{r as Q}from"./uni-app.es.bf5e67d0.js";import{_ as w}from"./bofang.0baa9bca.js";const O=i({props:{list:{type:Array,default:[]}},components:{},data:()=>({params:{},show:!1}),methods:{open(i){this.params=i,this.show=!0},gotoLook(i){0!=i.is_see||0!=this.params.payStatus?(this.params.section_id=i.section_id,this.gotoPage(`pages/knowledge/course/section-detail?section_id=${this.params.section_id}&course_id=${this.params.course_id}`,"redirect")):c({icon:"none",title:"此章节需要购买后查看"})},closeIcon(){this.show=!1}}},[["render",function(i,c,Y,I,u,h){const n=Q(G("u-icon"),z),D=M,R=Z;return u.show?(t(),A(D,{key:0,class:"recourdMask"},{default:s((()=>[a(D,{class:"recourdBox"},{default:s((()=>[a(D,{class:"closeIcon",onClick:h.closeIcon},{default:s((()=>[a(n,{name:"close",color:"#424242",size:"40rpx"})])),_:1},8,["onClick"]),a(D,{class:"title"},{default:s((()=>[e("课程目录")])),_:1}),a(R,{"scroll-top":i.scrollTop,"scroll-y":!0,class:"content","scroll-with-animation":"true"},{default:s((()=>[a(D,{class:"list"},{default:s((()=>[(t(!0),l(m,null,o(Y.list,(i=>(t(),A(D,{class:"item",key:i,onClick:c=>h.gotoLook(i)},{default:s((()=>[a(D,{class:"txt"},{default:s((()=>[e(N(i.title),1)])),_:2},1024),1==i.is_see?(t(),A(D,{key:0,class:"status"},{default:s((()=>[e("试学")])),_:1})):d("",!0)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["scroll-top"])])),_:1})])),_:1})):d("",!0)}],["__scopeId","data-v-6d02bae6"]]),W=Y();const r=i({components:{recourdVue:O},data:()=>({section_id:null,course_id:null,course:{},detail:{},status:!1,beforeAudio:!0,duration:0,currentTime:0,progress:0,xpjAudio:null,videoPause:!1,videoContext:null,removeArea:{x:0,y:0}}),onReady(){this.videoContext=I("video",this)},onLoad(i){this.videoPause=!1;let c=u.getSceneData(i);this.section_id=i.section_id?i.section_id:c.sid,this.course_id=i.course_id?i.course_id:c.cid,this.getSystemInfo()},onShow(){this.status=!1},mounted(){this.getData()},beforeUnmount(){this.changeto()},methods:{getSystemInfo(){let i=this;h({success(c){i.removeArea.x=c.windowWidth-70,i.removeArea.y=c.windowHeight-120}})},initAudit(){W.src=this.detail.audio_link,this.getAudioInfo()},getAudioInfo(){W.onCanplay((()=>{W.duration,setTimeout((()=>{this.duration=W.duration,this.watchAuditTime()}))}))},watchAuditTime(){W.onTimeUpdate((()=>{const{currentTime:i,duration:c}=W;this.currentTime=i,this.duration==this.currentTime?(this.progress=100,this.status=!1):this.progress=i/c*100}))},gotoRecourd(){this.$refs.recourdRef.open({section_id:this.section_id,course_id:this.course_id,payStatus:this.detail.payStatus})},startVideo(){this.videoPause=!0,this.$nextTick((()=>{this.videoContext.play()}))},changeto(){this.status=!this.status,this.status?(W.play(),W.onPlay((()=>{console.log("播放!")}))):(W.pause(),this.currenttime=W.currentTime)},getData(){let i=this,c=i.section_id,t=i.course_id;i.loadding=!0,n({title:"加载中"}),i._get("course.course/sectionDetail",{course_id:t,section_id:c},(function(c){const{data:{detail:{course:t,detail:A}}}=c;i.course=t,i.detail=A,i.initAudit(),i.loadding=!1,D()}),(function(i){}))},changeSwiper(){this.isVideoPlay=!1},formatTime(i){let c=(i=Math.floor(i))%60;c<10&&(c="0"+c);let t=Math.floor(i/60);return t<10&&(t="0"+t),t+":"+c}}},[["render",function(i,c,o,G,Z,Y){const I=T,u=M,h=p,n=E,D=g,z=y("recourdVue");return i.loadding?d("",!0):(t(),A(u,{key:0,class:"wrap"},{default:s((()=>[a(u,{class:"videoWrap"},{default:s((()=>[a(u,{class:"videoBox"},{default:s((()=>[Z.videoPause?(t(),A(h,{key:1,id:"video",src:Z.detail.video_link,autoplay:!0,style:{width:"100%",height:"100%"}},null,8,["src"])):(t(),l(m,{key:0},[a(u,{class:"masterPic"},{default:s((()=>[a(I,{class:"img",src:Z.detail.video_image,mode:"scaleToFill"},null,8,["src"])])),_:1}),a(I,{class:"startIcon",src:w,mode:"scaleToFill",onClick:Y.startVideo},null,8,["onClick"])],64))])),_:1}),a(u,{class:"contnet"},{default:s((()=>[a(u,{class:"title"},{default:s((()=>[e(N(Z.detail.title),1)])),_:1}),a(u,{class:"num"},{default:s((()=>[e(N(Z.detail.update_time),1)])),_:1})])),_:1})])),_:1}),Z.detail.audio_image?(t(),A(u,{key:0,class:"auditorWrap"},{default:s((()=>[a(I,{class:"imgAuditor",src:Z.detail.audio_image,mode:"scaleToFill"},null,8,["src"]),a(u,{class:"contnet"},{default:s((()=>[a(u,{class:"title"},{default:s((()=>[e(N(Z.detail.title),1)])),_:1}),a(u,{class:"num"},{default:s((()=>[e(N(Z.detail.update_time),1)])),_:1})])),_:1}),a(u,{class:"auditorBox"},{default:s((()=>[a(u,{class:"iconList"},{default:s((()=>[Z.status?(t(),A(I,{key:1,class:"icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJomlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA5LTEzVDExOjM2OjUwKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA5LTEzVDExOjM2OjUwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wOS0xM1QxMTozNjo1MCswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNDBmNzMxNi0yNjNmLWMwNGMtYTVjZS1iN2Q0ZDkyOTU1ZDYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2OGJhYmQwYS0yNTY4LTA3NDctOTJmYi1jMjczODhiYzRlYjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYzQ2MTBmZi0yMWQ3LTQ4NGMtYmM1MS02OWNhYjBmOGYyZTYiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZjNDYxMGZmLTIxZDctNDg0Yy1iYzUxLTY5Y2FiMGY4ZjJlNiIgc3RFdnQ6d2hlbj0iMjAyMy0wOS0xM1QxMTozNjo1MCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNDBmNzMxNi0yNjNmLWMwNGMtYTVjZS1iN2Q0ZDkyOTU1ZDYiIHN0RXZ0OndoZW49IjIwMjMtMDktMTNUMTE6MzY6NTArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+MTVFRDQ4MEY0RDE3NkRFRjVCMzlDOTE3M0QwRDAwQTE8L3JkZjpsaT4gPHJkZjpsaT4zNjY1QjNEREQyMzNGRTFDNDdGMDJCQTI0MjFCRDU0OTwvcmRmOmxpPiA8cmRmOmxpPjU3QTU5NDMyNTRCOTE4NTM1MEI5OUFDNkI4REFDNzMxPC9yZGY6bGk+IDxyZGY6bGk+NjIyRUQwRjBEQTE5NUQ0NjJCOTgwMDM2OUI0OEFEODE8L3JkZjpsaT4gPHJkZjpsaT44NkFBRjkxQzFFNjVGMDgyNDcwMzlDNzZBNjE3NDgyMTwvcmRmOmxpPiA8cmRmOmxpPkE0ODk4QTI1RjE0NEY0NDYwMEU4OEY1QzAzNUMzNkZEPC9yZGY6bGk+IDxyZGY6bGk+QkRCOTAxRDYxQzEwMENEQzE5QzJBMjBEMUMyNzAzMEU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MjRmZjhiZTItNGFiMS1kYTQxLThlMTUtYTEyYjI2MzNhZmQ0PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjQ5NGExN2U3LWFkYjgtZjY0OC1iN2Y5LTNmOGJjY2M1MGVkOTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3OTk1NWRhMS1iYzRhLTY4NGYtOTU4My1hYjI5MzMwNGU5NjE8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6OWI1NzFjODQtNzc3OC05ZjRlLTlkZGEtODcxZGM5ODNiMjQxPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmFjZTkzZDFkLTJjYjUtM2U0YS04YjIxLWNlYmNhN2NhMmMxZDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6OWU4NWZmYWQtZWZhMi05OTQzLWFjOTItMmNjMzA4YzE3NTA5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpiMTcwN2U3NC03ZWNkLWI0NDUtOWI2Yy03Y2FmYzQxOTg1MmE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xQf4fAAAFCUlEQVR4nO2ca4hWRRjHf2sbscoqkkYYlnTzFkYlhJvUZrRUH2K7UJbVhpBbX6Qyqg8FRUSQkARB94hisw+lFWQLLa6tlBbBfsjLVpa1RukuomblJdftw3MMfffMOTNznnl3Xjk/OLg758ycv/9335kzz8xz6oaHhykxM2a0BcROaVAOpUE5lAblUJ9WuP+65pD3PAdoAs4DZgNnA5OABmAccAT4BzgA/JYcm4DvgG+BPaGENXauG1GWalAAmoAbgWuAy4A6y3ozK37fB3wNfAq8DwxoCTQR0qAGYDGwCJin1OYEoCU5ngPWAG8CnUrtjyBEHzQGeBz4EXgJPXMqGQvcCnwGdAM3hLiJtkGtwGbk0z1Lue0smpGvXQdwvmbDWgY1AO8Aq4EZSm36cCewFbhfq0ENgy5HRpi7FdrSoB54GXgbhf9f0QZuAjYiQ3ZstAG9wBlFGiliUDuwqsjNq8Ac5NnpQt8GfA1aArzie9MqMxUxyWvQ8DGoFXjV52ajSCOwAZjoWtHVoIuRkaoWmQp0uVZyNWiN6w0i41JghUsFF4NWAlOc5MTJg8D1thfbGrQAWOijJlI6sJww2xr0rr+WKJkILLe50MagpZwcX61KlmHxEGlj0JPFtfzPduALJCDmSh/wFRJQ0+KZvAvyDGpHon0avIDMtJuRqUm3Q91HkeDZFcm/m5U0LSHnryjPoIeUhPQif9JHk993Ip3+vxZ1uzixv9iG7oDRlnUyy6CZwHQlET0pZQPALxZ116WUbQJ2F9BzPIuzTmYZ1K4kAMC0fHvAs249cNBfzgnMQOLkqWQZ1KIkAMyxb5uY+KkpZackhxbXmk6YDJrCyBWFk5kFphMmg64MJCRWmpA1uRGYDJoVTkuUjMMQVDMZ5B2Bq2FSw8Ymg2KMMYfGyaDxAYXEyuS0QpNBYwMKiRWnTroxoJBYcTLocEAhsXI0rdBk0N8BhcTK3rRCk0Fa85xaInVeaDJoV0AhsfJHWqHJoO8DComVH9IKTQb9FFBIrGxLKzQZ1BtQSIzswhC8MxnUA+wPpSZCujEsBpgMOoTsJg2NTaJINZJJjAsIWRHFTxQFHDKUD1nUTftkDxvKfRgGPjadzDLoPSUBYJ78nm5R1zQvnOCppZIuMh5rsgzaDXyuJKIVOK2irAW7TU23pZS1oTdffD3rZN662NNKIiYD3yA77WchC3YfWda9AFiLhIGnAw8AbynpGgA+yLogb1XhS2TIv0RBzBw8NjAlXJ0c2jxFziBgszb/iIqU+NiLxVZCG4PWUvs7y9K4D0OI43hs9wfdW0hKfKwnp+85hq1Bg+guRY8mQ0gGkhUuexRfw9L1yLkd2GF7sesu14XU9kx/OfChSwVXg4aQ/K/gmX4BWIlsxHLCZ6f9IHAV8KdH3dFiNZIq5YxvrkYf8vDY71m/mnQAN/tWLpLt8zMwF3najpXngbuKNFA0X2wQmI9s0IyJg8hX6rGiDWmlZC4DbgF+V2qvCJ3ARUinXBjNpN5VyGz7RcU2XegH7kHyMNQeRbSznv9CkkVmA29gMddRYAfwMPLhqKdMhHp3xxZkMngu8ASS9KvJESRf/g4kXrSCQKvBoV9N8SvwbHLMQ6KI85Ftt67Zf9uREbMH6WespwtFqNa7O0BSIjckP48HpiF7lKcBZyIh2WNx5j3IBor+5OhD+pWqvy6rrnxFVzbl+4NyKA3KoTQoh9KgHP4DGX3Iii/kQnEAAAAASUVORK5CYII=",mode:"scaleToFill",onClick:Y.changeto},null,8,["onClick"])):(t(),A(I,{key:0,class:"icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJomlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA5LTEzVDExOjM2OjM2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA5LTEzVDExOjM2OjM2KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wOS0xM1QxMTozNjozNiswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjMGU5ZGE5Yi0xYmExLWM5NGItYTdmZi0zNGYzMmYxZmIwNzAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNjBkODY3ZC1lOWZlLTkxNGUtOTljMi0xMTdjZjExYjE4YzUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3M2JjNzBiNC1jNDk0LWJhNDQtYThmMS05OWNiNzQyMmZjMTAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjczYmM3MGI0LWM0OTQtYmE0NC1hOGYxLTk5Y2I3NDIyZmMxMCIgc3RFdnQ6d2hlbj0iMjAyMy0wOS0xM1QxMTozNjozNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMGU5ZGE5Yi0xYmExLWM5NGItYTdmZi0zNGYzMmYxZmIwNzAiIHN0RXZ0OndoZW49IjIwMjMtMDktMTNUMTE6MzY6MzYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+MTVFRDQ4MEY0RDE3NkRFRjVCMzlDOTE3M0QwRDAwQTE8L3JkZjpsaT4gPHJkZjpsaT4zNjY1QjNEREQyMzNGRTFDNDdGMDJCQTI0MjFCRDU0OTwvcmRmOmxpPiA8cmRmOmxpPjU3QTU5NDMyNTRCOTE4NTM1MEI5OUFDNkI4REFDNzMxPC9yZGY6bGk+IDxyZGY6bGk+NjIyRUQwRjBEQTE5NUQ0NjJCOTgwMDM2OUI0OEFEODE8L3JkZjpsaT4gPHJkZjpsaT44NkFBRjkxQzFFNjVGMDgyNDcwMzlDNzZBNjE3NDgyMTwvcmRmOmxpPiA8cmRmOmxpPkE0ODk4QTI1RjE0NEY0NDYwMEU4OEY1QzAzNUMzNkZEPC9yZGY6bGk+IDxyZGY6bGk+QkRCOTAxRDYxQzEwMENEQzE5QzJBMjBEMUMyNzAzMEU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MjRmZjhiZTItNGFiMS1kYTQxLThlMTUtYTEyYjI2MzNhZmQ0PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjQ5NGExN2U3LWFkYjgtZjY0OC1iN2Y5LTNmOGJjY2M1MGVkOTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3OTk1NWRhMS1iYzRhLTY4NGYtOTU4My1hYjI5MzMwNGU5NjE8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6OWI1NzFjODQtNzc3OC05ZjRlLTlkZGEtODcxZGM5ODNiMjQxPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmFjZTkzZDFkLTJjYjUtM2U0YS04YjIxLWNlYmNhN2NhMmMxZDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6OWU4NWZmYWQtZWZhMi05OTQzLWFjOTItMmNjMzA4YzE3NTA5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpiMTcwN2U3NC03ZWNkLWI0NDUtOWI2Yy03Y2FmYzQxOTg1MmE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6L/BXCAAAFNUlEQVR4nO2ce4gVVRzHP1tRiaxhhLFpC1vW5rppZRuWdbFEDCMTTISeW0LQH1GItUkP7SWZQgQVUihuGaaZopgaFbr2ljSizLJykcjKrDbFyLXa/vjdpV33nDlzZn5n7h25HxiWPY/f78d3zj1zXjNVXV1dVLBzXKkDKHcqAjmoCOSgIpCDE0yJB68eG8rf6cBo4AqgDmgEaoBqQ9nDwK/AV0A78CHwEbAjVHDVGzf3STMKpEwdMBmYBDQB/WPWOwk4o3gBTC/+/RJYD6wEPlaL0kJIgQrATGAicLyi3YbiNRPYBiwCFgJBxish+qAmYB3QBlyLrjhHMwp4HmlVt4dwoClQf+BpYCtwjaLdOJyHtKQ2pI9TQ0ugcchdvEfJXlIKSGf+mJZBDYFmA28DtQq2tHgQ2AicmtZQWoGWAHPSBhGICcCnyFM0MWkEWg3cmsZ5BtQiT7rGpAaSCrQGGdvkgYHIgyNRF5BEoEXIoC9P9ENG4YN8K/oKNIdA440MqAG2+FbyEWgs8sTKM/XAYp8KcQXqB6z1Dqc8uQ2P/jOuQM9innHnlVZizkPjCDSS/PY7NgYAC+IUjCPQC+li6cMhZKlim7JdX+4GhrgKuQQqAJeohCPsAM4BpgIXA3cABxXt+zLXVcAlkNOAJ7OBH3v8/yIwDFil7CcuNwNnRhWIEqgOGKMaDuw1pP0ATAGagd+V/cWhOSozSqCbdOMAZBnVRiuyUrgigN8obozKjBJoqnIgAFWO/J+AaUjT3x/Av4l64AJbpk2gWuD8ENHEZCkwHFiWkb8JtgybQFcGCsSHfcANxevnwL4KtgybQJcHCiQJy5D1nKUBfVyKpX+0CVQfLpZE7Ef6pWn0HiZoMRA4y5RhE2hogCA0WIE86VoD2DY2CptANQEC0KIDGbtMQcZQWpxrSszz4YVVSGt6ScmecQckzwIBHEA2DjQ6cOOZgbwL1M18BRunmBKPFYEaFGx0mhKPBYEagWcU7HSYEvMu0L3A5yTYzjHwpynRti77F3CygtNQjACeQ3fE/70p0daCvlV0rM0s4DP0p0M7TYk2gdqVnWtwIfAB+quc3ewyJdoE+iRQEEl5CNiOTCpD8AWyetAHm0DvBArElybk4MGjgf1stmXYBNpKaXcbAB4pxtGUga82W4ZNoCPICa1SMBrZM3s4I3+dwFu2zKhxkNYksCdHHPmPI2cMLwrg28Za4A9bZtT+9AZkMjhAMRibQGOQcc1IRV9xWRKVGdWC/kFnCN+To7dYqoB5wHuURpw9wBtRBVwnHOYBLcCJSgHdhQzpVwNnI6dRhynZTsL9rgKuudgh9B+xLchxuFcorTjfAa+6CsWZrD6B7tJmudAcp1Dc2fx0d5FcsRLp95zEFehN4OXE4ZQXHXjccJ/1oFuQ323emYQMX2Lhu2A2Efjbs0450QK861PBV6BdyHHgPLIAeMq3UpIl1/fJ/n2wtCxElme9SbomvR5pSYcT1s+SucCdSSunWbRvAy4DfklhIzSzgAfSGEi7q7Ed2XbZkNKONr8hD5Qn0xrS2PbZhwRzH+Xxk3sdxZumuS82n9IcwuxmJ/IOxvUoniHS3jjcjRxyugp5NTwL2pFOuAF50U+VUB8W2FS8Cohg1wGDFe13Ius4rwHLgX8Vbfci9KcpthSvGcB4ZGhQQPa4fH1/g3yKYhMyN8xkhSGLb3eAdN7r+P9nNwR5BWAEcuT4NOR1q+pi2QPIpHIv8n7HbuDrjGLtRVXlE13R5P10R3AqAjmoCOSgIpCD/wAsvs+DMuXbfgAAAABJRU5ErkJggg==",mode:"scaleToFill",onClick:Y.changeto},null,8,["onClick"]))])),_:1}),a(u,{class:"progressBox"},{default:s((()=>[a(u,{class:"progress"},{default:s((()=>[a(u,{class:"activeProgress",style:R({width:`${Z.progress}%`})},{default:s((()=>[a(u,{class:"activeRightBox"},{default:s((()=>[j(a(u,{class:"circle"},null,512),[[k,Z.progress>0]])])),_:1})])),_:1},8,["style"])])),_:1}),a(u,{class:"timeBox"},{default:s((()=>[a(u,null,{default:s((()=>[e(N(Y.formatTime(Z.currentTime)),1)])),_:1}),a(u,null,{default:s((()=>[e(N(Y.formatTime(Z.duration)),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})):d("",!0),Z.detail.content?(t(),A(u,{key:1,class:"intro"},{default:s((()=>[a(u,{innerHTML:Z.detail.content},null,8,["innerHTML"])])),_:1})):d("",!0),a(D,{class:"recordWrap"},{default:s((()=>[a(n,{x:Z.removeArea.x,y:Z.removeArea.y,direction:"all",class:"record"},{default:s((()=>[a(u,{onClick:b(Y.gotoRecourd,["stop"])},{default:s((()=>[a(I,{class:"img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0N2FlZWQ0YS04YTlhLTc1NDQtYjA5MC1hMDY3Y2VhOGJjOGIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTE4MTEyMjU1MjFEMTFFRTgxRkZDQUZGMUNEREFCNjIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTE4MTEyMjQ1MjFEMTFFRTgxRkZDQUZGMUNEREFCNjIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjljZDUyZjctZjQzYy1lZDQ1LTgyZWMtNmY4ZDk2MTBhYzkxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MjRmZjhiZTItNGFiMS1kYTQxLThlMTUtYTEyYjI2MzNhZmQ0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5syYjAAAAb5JREFUeNrsmj1OAzEQhb3LghCL4ABICEqEoAUaQskp4BZcgZ8GcQEkzgAHSBASokqBoKTgBJAiiJ+wPAvToETC7M5mHL+RXpNN1uPP9ow9cVIUhYnZUhO5EQABRG7ZgM9XoQNoHRor8f5raFszgKRPFliC7its4xJqhLQETituYxNqhjQDXqBJgbZa0FYIM6An1FbDQYgWwM9yaGkHIG2qYkK/GPAMzdTQts0OJ9Cn8EDYd79C59oA1D7YMe8Eu7FvhT94FiAAAiAAAiAAAiCA35Z5fv8KOoQmKvbDnkAXoWPtAB6gCyFfZocBwHcJTAv6ssAYQAAEoB7Am6AvTyGkwSkjVy2aGwYA35KYLSx0hXyxf8HlQu/uuDRbegZkZsTqhQyCBEAABMDjsIc9mu9bH+PK+vEObUDz0gCa0K7SwTyDdqSXQK54Nud1xIBEMYCkDgDMAgQQOYCO4r78yzffNGhvju6bcrdHJaznfBOvB4RqA+sBjAEEQAAEQAAlU2PQx/40klmR+jxojyCAts9GaBm6VX709THbwRXo7q8AjPvBEbSmcNvrsz2+gfbcgBofAEyDBEAABBCFfQkwAEFnUjSjK3aRAAAAAElFTkSuQmCC",mode:"scaleToFill"}),a(u,{class:"label"},{default:s((()=>[e("课程目录")])),_:1})])),_:1},8,["onClick"])])),_:1},8,["x","y"])])),_:1}),a(z,{list:Z.course.section,ref:"recourdRef"},null,8,["list"])])),_:1}))}],["__scopeId","data-v-2b63bb91"]]);export{r as default};
