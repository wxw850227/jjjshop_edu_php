!function(){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},r(t)}System.register(["./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js"],(function(t,e){"use strict";var o,n,a,y;return{setters:[function(r){o=r.h},function(r){n=r.h},function(r){a=r.f},function(r){y=r.s}],execute:function(){var e,i=SyntaxError,p=Function,f=TypeError,c=function(r){try{return p('"use strict"; return ('+r+").constructor;")()}catch(t){}},u=Object.getOwnPropertyDescriptor;if(u)try{u({},"")}catch(k){u=null}var l=function(){throw new f},s=u?function(){try{return l}catch(r){try{return u(arguments,"callee").get}catch(t){return l}}}():l,A=o(),d=n(),P=Object.getPrototypeOf||(d?function(r){return r.__proto__}:null),g={},m="undefined"!=typeof Uint8Array&&P?P(Uint8Array):e,S={"%AggregateError%":"undefined"==typeof AggregateError?e:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?e:ArrayBuffer,"%ArrayIteratorPrototype%":A&&P?P([][Symbol.iterator]()):e,"%AsyncFromSyncIteratorPrototype%":e,"%AsyncFunction%":g,"%AsyncGenerator%":g,"%AsyncGeneratorFunction%":g,"%AsyncIteratorPrototype%":g,"%Atomics%":"undefined"==typeof Atomics?e:Atomics,"%BigInt%":"undefined"==typeof BigInt?e:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?e:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?e:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?e:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?e:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?e:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?e:FinalizationRegistry,"%Function%":p,"%GeneratorFunction%":g,"%Int8Array%":"undefined"==typeof Int8Array?e:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?e:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?e:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":A&&P?P(P([][Symbol.iterator]())):e,"%JSON%":"object"===("undefined"==typeof JSON?"undefined":r(JSON))?JSON:e,"%Map%":"undefined"==typeof Map?e:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&A&&P?P((new Map)[Symbol.iterator]()):e,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?e:Promise,"%Proxy%":"undefined"==typeof Proxy?e:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?e:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?e:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&A&&P?P((new Set)[Symbol.iterator]()):e,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?e:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":A&&P?P(""[Symbol.iterator]()):e,"%Symbol%":A?Symbol:e,"%SyntaxError%":i,"%ThrowTypeError%":s,"%TypedArray%":m,"%TypeError%":f,"%Uint8Array%":"undefined"==typeof Uint8Array?e:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?e:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?e:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?e:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?e:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?e:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?e:WeakSet};if(P)try{null.error}catch(k){var b=P(P(k));S["%Error.prototype%"]=b}var h=function r(t){var e;if("%AsyncFunction%"===t)e=c("async function () {}");else if("%GeneratorFunction%"===t)e=c("function* () {}");else if("%AsyncGeneratorFunction%"===t)e=c("async function* () {}");else if("%AsyncGenerator%"===t){var o=r("%AsyncGeneratorFunction%");o&&(e=o.prototype)}else if("%AsyncIteratorPrototype%"===t){var n=r("%AsyncGenerator%");n&&P&&(e=P(n.prototype))}return S[t]=e,e},E={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},I=a,F=y,U=I.call(Function.call,Array.prototype.concat),v=I.call(Function.apply,Array.prototype.splice),R=I.call(Function.call,String.prototype.replace),w=I.call(Function.call,String.prototype.slice),B=I.call(Function.call,RegExp.prototype.exec),O=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,x=/\\(\\)?/g,j=function(r,t){var e,o=r;if(F(E,o)&&(o="%"+(e=E[o])[0]+"%"),F(S,o)){var n=S[o];if(n===g&&(n=h(o)),void 0===n&&!t)throw new f("intrinsic "+r+" exists, but is not available. Please file an issue!");return{alias:e,name:o,value:n}}throw new i("intrinsic "+r+" does not exist!")};t("g",(function(r,t){if("string"!=typeof r||0===r.length)throw new f("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new f('"allowMissing" argument must be a boolean');if(null===B(/^%?[^%]*%?$/,r))throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var e=function(r){var t=w(r,0,1),e=w(r,-1);if("%"===t&&"%"!==e)throw new i("invalid intrinsic syntax, expected closing `%`");if("%"===e&&"%"!==t)throw new i("invalid intrinsic syntax, expected opening `%`");var o=[];return R(r,O,(function(r,t,e,n){o[o.length]=e?R(n,x,"$1"):t||r})),o}(r),o=e.length>0?e[0]:"",n=j("%"+o+"%",t),a=n.name,y=n.value,p=!1,c=n.alias;c&&(o=c[0],v(e,U([0,1],c)));for(var l=1,s=!0;l<e.length;l+=1){var A=e[l],d=w(A,0,1),P=w(A,-1);if(('"'===d||"'"===d||"`"===d||'"'===P||"'"===P||"`"===P)&&d!==P)throw new i("property names with quotes must have matching quotes");if("constructor"!==A&&s||(p=!0),F(S,a="%"+(o+="."+A)+"%"))y=S[a];else if(null!=y){if(!(A in y)){if(!t)throw new f("base intrinsic for "+r+" exists, but the property is not available.");return}if(u&&l+1>=e.length){var g=u(y,A);y=(s=!!g)&&"get"in g&&!("originalValue"in g.get)?g.get:y[A]}else s=F(y,A),y=y[A];s&&!p&&(S[a]=y)}}return y}))}}}))}();
