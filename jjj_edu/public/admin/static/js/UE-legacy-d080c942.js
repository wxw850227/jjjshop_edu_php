!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./Upload-legacy-9dc4a0f3.js","./index-legacy-325b1913.js","./@vue-legacy-59f40785.js"],(function(t,r){"use strict";var o,i,u,c,l,a,s,f,p,d,b,y,m,g;return{setters:[function(t){o=t._},function(t){i=t._},function(t){u=t.K,c=t.w,l=t.L,a=t.ae,s=t.o,f=t.c,p=t.P,d=t.T,b=t.S,y=t.W,m=t.Y,g=t.Q}],execute:function(){var r={components:{Upload:o},props:["text","editorId"],setup:function(t,r){var o=r.emit,i=u({msg:t.text,editor:null,isupload:!1,hasCallback:!1,callback:null,this_config:{autoFloatEnabled:!1}});return c((function(){return i.msg}),(function(t){o("contentChange",t)})),function(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},l(i))},methods:{ready:function(){window.openUpload=this.openUpload},openUpload:function(t){this.isupload=!0,t&&(this.hasCallback=!0,this.callback=t)},returnImgsFunc:function(t){null!=t&&this.hasCallback&&this.callback(t),this.isupload=!1}}};t("U",i(r,[["render",function(t,e,n,r,i,u){var c=a("vue-ueditor-wrap"),l=o;return s(),f(g,null,[p(c,{modelValue:t.msg,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.msg=e}),config:t.this_config,"editor-id":n.editorId,onReady:u.ready},null,8,["modelValue","config","editor-id","onReady"]),t.isupload?(s(),d(l,{key:0,config:{total:9},isupload:t.isupload,onReturnImgs:u.returnImgsFunc},{default:b((function(){return[y("上传图片")]})),_:1},8,["isupload","onReturnImgs"])):m("",!0)],64)}]]))}}}))}();
