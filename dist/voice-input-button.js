(function t(e,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r();else if(typeof define==="function"&&define.amd)define("VoiceInputButton",[],r);else if(typeof exports==="object")exports["VoiceInputButton"]=r();else e["VoiceInputButton"]=r()})(window,function(){return function(r){var n={};function i(t){if(n[t]){return n[t].exports}var e=n[t]={i:t,l:false,exports:{}};r[t].call(e.exports,e,e.exports,i);e.l=true;return e.exports}i.m=r;i.c=n;i.d=function(t,e,r){if(!i.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:r})}};i.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};i.t=function(e,t){if(t&1)e=i(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);i.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};i.p="/dist/";return i(i.s=18)}([function(t){t.exports=JSON.parse('{"zh_cn":{"wait":"请稍后…","recording":"好，请讲…","say_nothing":"您好像没说什么","not_supported":"无法录音：未找到录音设备、当前浏览器不支持录音或用户未授权！","socket_error":"WebSocket连接失败","access_microphone_failed":"请求麦克风失败","missing_configuration":"缺少 appId、apiKey、apiSecret 配置"},"en_us":{"wait":"Please wait…","recording":"Recording…","say_nothing":"You don\'t seem to say anything","not_supported":"Unable to record: No recording device was found, the current browser does not support recording, or the user is not authorized!","socket_error":"socket connect failed","access_microphone_failed":"access microphone failed","missing_configuration":"Missing appId, apiKey and apiSecret configuration"}}')},function(t,e,r){"use strict";t.exports=function(r){var s=[];s.toString=function t(){return this.map(function(t){var e=n(t,r);if(t[2]){return"@media ".concat(t[2],"{").concat(e,"}")}return e}).join("")};s.i=function(t,e){if(typeof t==="string"){t=[[null,t,""]]}var r={};for(var n=0;n<this.length;n++){var i=this[n][0];if(i!=null){r[i]=true}}for(var a=0;a<t.length;a++){var o=t[a];if(o[0]==null||!r[o[0]]){if(e&&!o[2]){o[2]=e}else if(e){o[2]="(".concat(o[2],") and (").concat(e,")")}s.push(o)}}};return s};function n(t,e){var r=t[1]||"";var n=t[3];if(!n){return r}if(e&&typeof btoa==="function"){var i=o(n);var a=n.sources.map(function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")});return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}function o(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(r," */")}},function(t,e,r){"use strict";r.r(e);function u(t,e){var r=[];var n={};for(var i=0;i<e.length;i++){var a=e[i];var o=a[0];var s=a[1];var c=a[2];var u=a[3];var l={id:t+":"+i,css:s,media:c,sourceMap:u};if(!n[o]){r.push(n[o]={id:o,parts:[l]})}else{n[o].parts.push(l)}}return r}r.d(e,"default",function(){return h});var n=typeof document!=="undefined";if(typeof DEBUG!=="undefined"&&DEBUG){if(!n){throw new Error("vue-style-loader cannot be used in a non-browser environment. "+"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.")}}var l={};var i=n&&(document.head||document.getElementsByTagName("head")[0]);var a=null;var o=0;var f=false;var s=function(){};var d=null;var c="data-vue-ssr-id";var p=typeof navigator!=="undefined"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(s,t,e,r){f=e;d=r||{};var c=u(s,t);v(c);return function t(e){var r=[];for(var n=0;n<c.length;n++){var i=c[n];var a=l[i.id];a.refs--;r.push(a)}if(e){c=u(s,e);v(c)}else{c=[]}for(var n=0;n<r.length;n++){var a=r[n];if(a.refs===0){for(var o=0;o<a.parts.length;o++){a.parts[o]()}delete l[a.id]}}}}function v(t){for(var e=0;e<t.length;e++){var r=t[e];var n=l[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++){n.parts[i](r.parts[i])}for(;i<r.parts.length;i++){n.parts.push(m(r.parts[i]))}if(n.parts.length>r.parts.length){n.parts.length=r.parts.length}}else{var a=[];for(var i=0;i<r.parts.length;i++){a.push(m(r.parts[i]))}l[r.id]={id:r.id,refs:1,parts:a}}}}function g(){var t=document.createElement("style");t.type="text/css";i.appendChild(t);return t}function m(r){var n,i;var t=document.querySelector("style["+c+'~="'+r.id+'"]');if(t){if(f){return s}else{t.parentNode.removeChild(t)}}if(p){var e=o++;t=a||(a=g());n=b.bind(null,t,e,false);i=b.bind(null,t,e,true)}else{t=g();n=w.bind(null,t);i=function(){t.parentNode.removeChild(t)}}n(r);return function t(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap){return}n(r=e)}else{i()}}}var y=function(){var r=[];return function(t,e){r[t]=e;return r.filter(Boolean).join("\n")}}();function b(t,e,r,n){var i=r?"":n.css;if(t.styleSheet){t.styleSheet.cssText=y(e,i)}else{var a=document.createTextNode(i);var o=t.childNodes;if(o[e])t.removeChild(o[e]);if(o.length){t.insertBefore(a,o[e])}else{t.appendChild(a)}}}function w(t,e){var r=e.css;var n=e.media;var i=e.sourceMap;if(n){t.setAttribute("media",n)}if(d.ssrId){t.setAttribute(c,e.id)}if(i){r+="\n/*# sourceURL="+i.sources[0]+" */";r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"}if(t.styleSheet){t.styleSheet.cssText=r}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(r))}}},function(t,e,r){var n=r(9);if(typeof n==="string")n=[[t.i,n,""]];if(n.locals)t.exports=n.locals;var i=r(2).default;var a=i("3b3d9eac",n,true,{})},function(t,e,r){var n=r(11);if(typeof n==="string")n=[[t.i,n,""]];if(n.locals)t.exports=n.locals;var i=r(2).default;var a=i("44b223a9",n,true,{})},function(t,e,r){var n=r(13);if(typeof n==="string")n=[[t.i,n,""]];if(n.locals)t.exports=n.locals;var i=r(2).default;var a=i("d2dbc0ec",n,true,{})},function(t,e,r){var n=r(15);if(typeof n==="string")n=[[t.i,n,""]];if(n.locals)t.exports=n.locals;var i=r(2).default;var a=i("f8bf8032",n,true,{})},function(t,e,r){var n=r(17);if(typeof n==="string")n=[[t.i,n,""]];if(n.locals)t.exports=n.locals;var i=r(2).default;var a=i("4a02f5c0",n,true,{})},function(t,e,r){"use strict";var n=r(3);var i=r.n(n);var a=i.a},function(t,e,r){e=t.exports=r(1)(false);e.push([t.i,".loader[data-v-4d9d59ad]{width:20px;height:30px;margin:auto}\n",""])},function(t,e,r){"use strict";var n=r(4);var i=r.n(n);var a=i.a},function(t,e,r){e=t.exports=r(1)(false);e.push([t.i,".recording[data-v-4fb2e80b]{width:20px;height:30px;margin:auto}\n",""])},function(t,e,r){"use strict";var n=r(5);var i=r.n(n);var a=i.a},function(t,e,r){e=t.exports=r(1)(false);e.push([t.i,".microphone[data-v-5e1baad3]{display:block;width:20px;height:30px;margin:auto;text-decoration:none}\n",""])},function(t,e,r){"use strict";var n=r(6);var i=r.n(n);var a=i.a},function(t,e,r){e=t.exports=r(1)(false);e.push([t.i,'.recording-tip[data-v-51834f6c]{position:absolute;width:auto;max-width:270px;display:flex;justify-content:flex-end;white-space:nowrap;padding:0;border-radius:3px;pointer-events:none;border-width:2px 15px 3px;border-style:solid}.recording-tip[data-v-51834f6c]:before{position:absolute;margin:auto;content:" ";width:14px;height:14px;background-color:inherit}.recording-tip.top[data-v-51834f6c]{bottom:calc(100% + 5px);left:50%;transform:translate3d(-50%, 0, 0)}.recording-tip.top[data-v-51834f6c]:before{bottom:-7px;left:0;right:0;clip-path:polygon(0% 50%, 50% 100%, 100% 50%)}.recording-tip.right[data-v-51834f6c]{left:calc(100% + 5px);top:50%;transform:translate3d(0, -50%, 0)}.recording-tip.right[data-v-51834f6c]:before{left:-21px;top:0;bottom:0;clip-path:polygon(0% 50%, 50% 100%, 50% 0%)}.recording-tip.bottom[data-v-51834f6c]{top:calc(100% + 5px);left:50%;transform:translate3d(-50%, 0, 0)}.recording-tip.bottom[data-v-51834f6c]:before{top:-7px;left:0;right:0;clip-path:polygon(0% 50%, 50% 0%, 100% 50%)}.recording-tip.left[data-v-51834f6c]{right:calc(100% + 5px);top:50%;transform:translate3d(0, -50%, 0)}.recording-tip.left[data-v-51834f6c]:before{right:-21px;top:0;bottom:0;clip-path:polygon(100% 50%, 50% 100%, 50% 0%)}\n',""])},function(t,e,r){"use strict";var n=r(7);var i=r.n(n);var a=i.a},function(t,e,r){e=t.exports=r(1)(false);e.push([t.i,".voice-input-button[data-v-55c5b9ba]{position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center;opacity:.5}.voice-input-button.ready[data-v-55c5b9ba]{opacity:1}.voice-input-button .record-btn[data-v-55c5b9ba]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;cursor:pointer}.voice-input-button .record-btn.disabled[data-v-55c5b9ba]{pointer-events:none;cursor:not-allowed}.voice-input-button .record-btn>*[data-v-55c5b9ba]{pointer-events:none}.loader[data-v-55c5b9ba]{display:inline-block;margin:0 5px}.pop[data-v-55c5b9ba]{position:fixed;top:0;bottom:0;left:0;right:0;margin:auto;width:40%;height:100px;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.5);pointer-events:none;opacity:0;transition:opacity .1s}.pop.recording[data-v-55c5b9ba]{opacity:1}.fade-enter-active[data-v-55c5b9ba],.fade-leave-active[data-v-55c5b9ba]{transition:opacity .3s}.fade-enter[data-v-55c5b9ba],.fade-leave-to[data-v-55c5b9ba]{opacity:0}\n",""])},function(t,e,r){"use strict";r.r(e);var n=function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("div",{staticClass:"voice-input-button",class:{active:e.recording,ready:e.isAudioAvailable}},[r("div",{staticClass:"record-btn",on:{contextmenu:e.menuPop,mousedown:function(t){e.pressMode?e.start(t):e.toggle(t)},mouseup:function(t){e.pressMode&&e.stop(t)},mouseleave:function(t){e.pressMode&&e.stop(t)},touchstart:function(t){e.pressMode?e.start(t):e.toggle(t)},touchend:function(t){e.pressMode&&e.stop(t)},touchleave:function(t){e.pressMode&&e.stop(t)}}},[!e.recording?r("microphone",{attrs:{color:e.getConfig("color")}}):e.state==="ing"||e.responding||e.result?r("recording-icon",{attrs:{color:e.getConfig("color")}}):r("loading",{attrs:{color:e.getConfig("color")}}),e._v(" "),r("transition",{attrs:{name:"fade"}},[e.state==="ing"||e.state==="init"||e.responding||e.blank?r("recording-tip",{attrs:{position:e.getConfig("tipPosition"),tipTextColor:e.getConfig("tipTextColor"),tipBackgroundColor:e.getConfig("tipBackgroundColor"),tipShadowColor:e.getConfig("tipShadowColor")}},[e.state==="ing"||e.responding?e._t("recording",[e._v(e._s(e.locale.recording))]):e._e(),e._v(" "),e.state==="init"?e._t("wait",[e._v(e._s(e.locale.wait))]):e._e(),e._v(" "),e.blank?e._t("no-speak",[e._v(e._s(e.locale.say_nothing))]):e._e()],2):e._e()],1)],1)])};var i=[];var d=d||function(c,n){var t={},e=t.lib={},i=function t(){},r=e.Base={extend:function t(e){i.prototype=this;var r=new i;e&&r.mixIn(e);r.hasOwnProperty("init")||(r.init=function(){r.$super.init.apply(this,arguments)});r.init.prototype=r;r.$super=this;return r},create:function t(){var e=this.extend();e.init.apply(e,arguments);return e},init:function t(){},mixIn:function t(e){for(var r in e){e.hasOwnProperty(r)&&(this[r]=e[r])}e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function t(){return this.init.prototype.extend(this)}},u=e.WordArray=r.extend({init:function t(e,r){e=this.words=e||[];this.sigBytes=r!=n?r:4*e.length},toString:function t(e){return(e||o).stringify(this)},concat:function t(e){var r=this.words,n=e.words,i=this.sigBytes;e=e.sigBytes;this.clamp();if(i%4)for(var a=0;a<e;a++){r[i+a>>>2]|=(n[a>>>2]>>>24-8*(a%4)&255)<<24-8*((i+a)%4)}else if(65535<n.length)for(a=0;a<e;a+=4){r[i+a>>>2]=n[a>>>2]}else r.push.apply(r,n);this.sigBytes+=e;return this},clamp:function t(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-8*(r%4);e.length=c.ceil(r/4)},clone:function t(){var e=r.clone.call(this);e.words=this.words.slice(0);return e},random:function t(e){for(var r=[],n=0;n<e;n+=4){r.push(4294967296*c.random()|0)}return new u.init(r,e)}}),a=t.enc={},o=a.Hex={stringify:function t(e){var r=e.words;e=e.sigBytes;for(var n=[],i=0;i<e;i++){var a=r[i>>>2]>>>24-8*(i%4)&255;n.push((a>>>4).toString(16));n.push((a&15).toString(16))}return n.join("")},parse:function t(e){for(var r=e.length,n=[],i=0;i<r;i+=2){n[i>>>3]|=parseInt(e.substr(i,2),16)<<24-4*(i%8)}return new u.init(n,r/2)}},s=a.Latin1={stringify:function t(e){var r=e.words;e=e.sigBytes;for(var n=[],i=0;i<e;i++){n.push(String.fromCharCode(r[i>>>2]>>>24-8*(i%4)&255))}return n.join("")},parse:function t(e){for(var r=e.length,n=[],i=0;i<r;i++){n[i>>>2]|=(e.charCodeAt(i)&255)<<24-8*(i%4)}return new u.init(n,r)}},l=a.Utf8={stringify:function t(e){try{return decodeURIComponent(escape(s.stringify(e)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function t(e){return s.parse(unescape(encodeURIComponent(e)))}},f=e.BufferedBlockAlgorithm=r.extend({reset:function t(){this._data=new u.init;this._nDataBytes=0},_append:function t(e){"string"==typeof e&&(e=l.parse(e));this._data.concat(e);this._nDataBytes+=e.sigBytes},_process:function t(e){var r=this._data,n=r.words,i=r.sigBytes,a=this.blockSize,o=i/(4*a),o=e?c.ceil(o):c.max((o|0)-this._minBufferSize,0);e=o*a;i=c.min(4*e,i);if(e){for(var s=0;s<e;s+=a){this._doProcessBlock(n,s)}s=n.splice(0,e);r.sigBytes-=i}return new u.init(s,i)},clone:function t(){var e=r.clone.call(this);e._data=this._data.clone();return e},_minBufferSize:0});e.Hasher=f.extend({cfg:r.extend(),init:function t(e){this.cfg=this.cfg.extend(e);this.reset()},reset:function t(){f.reset.call(this);this._doReset()},update:function t(e){this._append(e);this._process();return this},finalize:function t(e){e&&this._append(e);return this._doFinalize()},blockSize:16,_createHelper:function t(r){return function(t,e){return new r.init(e).finalize(t)}},_createHmacHelper:function t(r){return function(t,e){return new d.HMAC.init(r,e).finalize(t)}}});var d=t.algo={};return t}(Math);(function(a){for(var t=d,e=t.lib,r=e.WordArray,n=e.Hasher,e=t.algo,i=[],v=[],o=function t(e){return 4294967296*(e-(e|0))|0},s=2,c=0;64>c;){var u;t:{u=s;for(var l=a.sqrt(u),f=2;f<=l;f++){if(!(u%f)){u=!1;break t}}u=!0}u&&(8>c&&(i[c]=o(a.pow(s,.5))),v[c]=o(a.pow(s,1/3)),c++);s++}var g=[],e=e.SHA256=n.extend({_doReset:function t(){this._hash=new r.init(i.slice(0))},_doProcessBlock:function t(e,r){for(var n=this._hash.words,i=n[0],a=n[1],o=n[2],s=n[3],c=n[4],u=n[5],l=n[6],f=n[7],d=0;64>d;d++){if(16>d)g[d]=e[r+d]|0;else{var p=g[d-15],h=g[d-2];g[d]=((p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3)+g[d-7]+((h<<15|h>>>17)^(h<<13|h>>>19)^h>>>10)+g[d-16]}p=f+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&u^~c&l)+v[d]+g[d];h=((i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22))+(i&a^i&o^a&o);f=l;l=u;u=c;c=s+p|0;s=o;o=a;a=i;i=p+h|0}n[0]=n[0]+i|0;n[1]=n[1]+a|0;n[2]=n[2]+o|0;n[3]=n[3]+s|0;n[4]=n[4]+c|0;n[5]=n[5]+u|0;n[6]=n[6]+l|0;n[7]=n[7]+f|0},_doFinalize:function t(){var e=this._data,r=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;r[i>>>5]|=128<<24-i%32;r[(i+64>>>9<<4)+14]=a.floor(n/4294967296);r[(i+64>>>9<<4)+15]=n;e.sigBytes=4*r.length;this._process();return this._hash},clone:function t(){var e=n.clone.call(this);e._hash=this._hash.clone();return e}});t.SHA256=n._createHelper(e);t.HmacSHA256=n._createHmacHelper(e)})(Math);(function(){var t=d,l=t.enc.Utf8;t.algo.HMAC=t.lib.Base.extend({init:function t(e,r){e=this._hasher=new e.init;"string"==typeof r&&(r=l.parse(r));var n=e.blockSize,i=4*n;r.sigBytes>i&&(r=e.finalize(r));r.clamp();for(var a=this._oKey=r.clone(),o=this._iKey=r.clone(),s=a.words,c=o.words,u=0;u<n;u++){s[u]^=1549556828,c[u]^=909522486}a.sigBytes=o.sigBytes=i;this.reset()},reset:function t(){var e=this._hasher;e.reset();e.update(this._iKey)},update:function t(e){this._hasher.update(e);return this},finalize:function t(e){var r=this._hasher;e=r.finalize(e);r.reset();return r.finalize(this._oKey.clone().concat(e))}})})();var v=d;(function(){var t=v,u=t.lib.WordArray;t.enc.Base64={stringify:function t(e){var r=e.words,n=e.sigBytes,i=this._map;e.clamp();e=[];for(var a=0;a<n;a+=3){for(var o=(r[a>>>2]>>>24-8*(a%4)&255)<<16|(r[a+1>>>2]>>>24-8*((a+1)%4)&255)<<8|r[a+2>>>2]>>>24-8*((a+2)%4)&255,s=0;4>s&&a+.75*s<n;s++){e.push(i.charAt(o>>>6*(3-s)&63))}}if(r=i.charAt(64))for(;e.length%4;){e.push(r)}return e.join("")},parse:function t(e){var r=e.length,n=this._map,i=n.charAt(64);i&&(i=e.indexOf(i),-1!=i&&(r=i));for(var i=[],a=0,o=0;o<r;o++){if(o%4){var s=n.indexOf(e.charAt(o-1))<<2*(o%4),c=n.indexOf(e.charAt(o))>>>6-2*(o%4);i[a>>>2]|=(s|c)<<24-8*(a%4);a++}}return u.create(i,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();var a=function t(){var i=this;this.onmessage=function(t){switch(t.data.command){case"transform":a.transaction(t.data.buffer);break}};var a={transaction:function t(e){var r=a.to16kHz(e);var n=a.to16BitPCM(r);i.postMessage({buffer:n})},to16kHz:function t(e){var r=new Float32Array(e);var n=Math.round(r.length*(16e3/44100));var i=new Float32Array(n);var a=(r.length-1)/(n-1);i[0]=r[0];for(var o=1;o<n-1;o++){var s=o*a;var c=Math.floor(s).toFixed();var u=Math.ceil(s).toFixed();var l=s-c;i[o]=r[c]+(r[u]-r[c])*l}i[n-1]=r[r.length-1];return i},to16BitPCM:function t(e){var r=e.length*(16/8);var n=new ArrayBuffer(r);var i=new DataView(n);var a=0;for(var o=0;o<e.length;o++,a+=2){var s=Math.max(-1,Math.min(1,e[o]));i.setInt16(a,s<0?s*32768:s*32767,true)}return Array.from(new Int8Array(i.buffer))},toBase64:function t(e){var r="";var n=new Uint8Array(e);var i=n.byteLength;for(var a=0;a<i;a++){r+=String.fromCharCode(n[a])}return window.btoa(r)}}};var o=a;var s=function t(e){var r=e.toString();r=r.substr(r.indexOf("{")+1);r=r.substr(0,r.lastIndexOf("}"));var n=new Blob([r]);var i=URL.createObjectURL(n);var a=new Worker(i);URL.revokeObjectURL(i);return a};var c=s;var g=r(0);var u=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(t,n.key,n)}}return function(t,e,r){if(e)n(t.prototype,e);if(r)n(t,r);return t}}();function l(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}function f(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++){r[e]=t[e]}return r}else{return Array.from(t)}}var p=c(o);var h=[];var m=window.AudioContext||window.webkitAudioContext;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;p.onmessage=function(t){h.push.apply(h,f(t.data.buffer))};var y=function(){function e(t){l(this,e);this.config=t;this.state="end";this.language=t.language||"zh_cn";this.accent=t.accent||"mandarin";this.appId=t.appId;this.apiKey=t.apiKey;this.apiSecret=t.apiSecret;this.isAudioAvailable=!!(navigator.getUserMedia&&m&&p);this.pd=t.pd;this.rlang=t.rlang;this.ptt=t.ptt;this.nunum=t.nunum;this.vad_eos=t.vad_eos}u(e,[{key:"closeTrack",value:function t(){try{if(this.recorder){this.recorder.disconnect();this.recorder=null}if(this.mediaStream){this.recorder&&this.recorder.context&&this.mediaStream.disconnect(this.recorder);this.mediaStream.mediaStream.getTracks().forEach(function(t){t.stop()})}}catch(t){console.warn(t.message)}}},{key:"initRecorder",value:function t(){var n=this;if(this.state==="end")return;if(!this.context){var e=new m;this.context=e}this.recorder=this.context.createScriptProcessor(0,1,1);var r=function t(e){if(n.state==="end"){n.closeTrack();return}var r=n.context.createMediaStreamSource(e);n.mediaStream=r;n.recorder&&(n.recorder.onaudioprocess=function(t){if(n.state==="end"){n.closeTrack();return}n.sendData(t.inputBuffer.getChannelData(0))});n.connectWebsocket()};var i=function t(e){n.recorder=null;n.mediaStream=null;n.context=null;console.warn(e.message||g[n.language].access_microphone_failed)};if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){navigator.mediaDevices.getUserMedia({audio:true,video:false}).then(function(t){r(t)}).catch(function(t){i(t)})}else{navigator.getUserMedia({audio:true,video:false},function(t){r(t)},function(t){i(t)})}}},{key:"start",value:function t(){var e=this;if(navigator.getUserMedia&&m){this.state="init";if(!this.recorder){setTimeout(function(){e.initRecorder()},100)}else{if(this.state==="end"){this.closeTrack();return}this.connectWebsocket()}}else{alert(g[this.language].not_supported)}}},{key:"stop",value:function t(){this.state="end"}},{key:"sendData",value:function t(e){p.postMessage({command:"transform",buffer:e})}},{key:"connectWebsocket",value:function t(){var e=this;var r="wss://iat-api.xfyun.cn/v2/iat";var n="iat-api.xfyun.cn";var i=this.apiKey;var a=this.apiSecret;var o=(new Date).toGMTString();var s="hmac-sha256";var c="host date request-line";var u="host: "+n+"\ndate: "+o+"\nGET /v2/iat HTTP/1.1";var l=v.HmacSHA256(u,a);var f=v.enc.Base64.stringify(l);var d='api_key="'+i+'", algorithm="'+s+'", headers="'+c+'", signature="'+f+'"';var p=btoa(d);var h=r+"?authorization="+p+"&date="+o+"&host="+n;if("WebSocket"in window){this.ws=new WebSocket(h)}else if("MozWebSocket"in window){this.ws=new MozWebSocket(h)}else{alert(g[this.language].not_supported);return null}this.ws.onopen=function(t){if(!e.mediaStream||!e.recorder){return}e.mediaStream.connect(e.recorder);e.recorder.connect(e.context.destination);e.state="ready";setTimeout(function(){e.wsOpened(t)},100);e.config.onStart&&e.config.onStart(t)};this.ws.onmessage=function(t){e.config.onMessage&&e.config.onMessage(t);e.wsOnMessage(t)};this.ws.onerror=function(t){e.stop();e.config.onError&&e.config.onError(t)};this.ws.onclose=function(t){e.stop();e.config.onClose&&e.config.onClose(t)}}},{key:"wsOpened",value:function t(){var e=this;if(this.ws.readyState!==1){return}this.state="ing";var r=h.splice(0,1280);var n={common:{app_id:this.appId},business:{language:this.language,domain:"iat",accent:this.accent,vad_eos:this.vad_eos,dwa:"wpgs",pd:this.pd,rlang:this.rlang,ptt:this.ptt,nunum:this.nunum},data:{status:0,format:"audio/L16;rate=16000",encoding:"raw",audio:this.ArrayBufferToBase64(r)}};this.ws.send(JSON.stringify(n));this.handlerInterval=setInterval(function(){if(e.ws.readyState!==1){clearInterval(e.handlerInterval);return}if(h.length===0){if(e.state==="end"){e.ws.send(JSON.stringify({data:{status:2,format:"audio/L16;rate=16000",encoding:"raw",audio:""}}));clearInterval(e.handlerInterval)}return false}var t=h.splice(0,1280);e.ws.send(JSON.stringify({data:{status:1,format:"audio/L16;rate=16000",encoding:"raw",audio:e.ArrayBufferToBase64(t)}}))},40)}},{key:"wsOnMessage",value:function t(e){var r=JSON.parse(e.data);if(r.code===0&&r.data.status===2){this.ws.close()}if(r.code!==0){this.ws.close();console.log(r.code+":"+r.message)}}},{key:"ArrayBufferToBase64",value:function t(e){var r="";var n=new Uint8Array(e);var i=n.byteLength;for(var a=0;a<i;a++){r+=String.fromCharCode(n[a])}return window.btoa(r)}}]);return e}();var b=y;var w=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"loader",attrs:{title:"loading…"}},[r("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"15px",height:"15px",viewBox:"0 0 20 20","xml:space":"preserve"}},[r("rect",{attrs:{x:"5",y:"3",width:"4",height:"15",fill:t.color}},[r("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"1; .2; 1",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),t._v(" "),r("rect",{attrs:{x:"12",y:"3",width:"4",height:"15",fill:t.color}},[r("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"1; .2; 1",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"}})]),t._v(" "),r("rect",{attrs:{x:"19",y:"3",width:"4",height:"15",fill:t.color}},[r("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"1; .2; 1",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"}})])])])};var x=[];var _={name:"loading",props:{color:{type:String,default:"#333"}}};var S=_;var C=r(8);function M(t,e,r,n,i,a,o,s){var c=typeof t==="function"?t.options:t;if(e){c.render=e;c.staticRenderFns=r;c._compiled=true}if(n){c.functional=true}if(a){c._scopeId="data-v-"+a}var u;if(o){u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext;if(!t&&typeof __VUE_SSR_CONTEXT__!=="undefined"){t=__VUE_SSR_CONTEXT__}if(i){i.call(this,t)}if(t&&t._registeredComponents){t._registeredComponents.add(o)}};c._ssrRegister=u}else if(i){u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i}if(u){if(c.functional){c._injectStyles=u;var l=c.render;c.render=function t(e,r){u.call(r);return l(e,r)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}}return{exports:t,options:c}}var k=M(S,w,x,false,null,"4d9d59ad",null);var B=k.exports;var A=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"recording",attrs:{title:"recording…"}},[r("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"15px",height:"15px",viewBox:"0 0 20 20","xml:space":"preserve"}},[r("rect",{attrs:{x:"3",y:"8",width:"4",height:"4",fill:t.color}},[r("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"4;20;4",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),t._v(" "),r("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"8; 0; 8",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),t._v(" "),r("rect",{attrs:{x:"10",y:"8",width:"4",height:"4",fill:t.color}},[r("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"4;20;4",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),t._v(" "),r("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"8; 0; 8",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),t._v(" "),r("rect",{attrs:{x:"17",y:"8",width:"4",height:"4",fill:t.color}},[r("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"4;20;4",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),t._v(" "),r("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"8; 0; 8",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])])};var T=[];var I={name:"recording-icon",props:{color:{type:String,default:"#333"}}};var O=I;var R=r(10);var U=M(O,A,T,false,null,"4fb2e80b",null);var j=U.exports;var N=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("a",{staticClass:"microphone"},[r("svg",{staticClass:"icon",attrs:{t:"1543917784414",fill:t.color,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2028","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20"}},[r("path",{attrs:{d:"M512 608 512 608c88 0 160-72 160-160L672 256c0-88-72-160-160-160l0 0c-88 0-160 72-160 160l0 192C352 536 424 608 512 608zM796.6 492.4c2.7-17.5-9.2-33.8-26.7-36.5-17.5-2.6-33.8 9.3-36.5 26.7C716.6 590.6 621.5 672 512 672c-109.5 0-204.7-81.5-221.4-189.5-2.7-17.5-19.1-29.4-36.5-26.7-17.5 2.7-29.4 19-26.7 36.5 20.2 130.5 124 227.8 252.6 241.8L480 832l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0 0-97.9C672.5 720.1 776.4 622.9 796.6 492.4z","p-id":"2029"}})])])};var L=[];var z={name:"microphone",props:{color:{type:String,default:"#333"}}};var E=z;var P=r(12);var H=M(E,N,L,false,null,"5e1baad3",null);var $=H.exports;var D=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"recording-tip",class:t.position,style:"\n    background-color: "+t.tipBackgroundColor+";\n    border-color: "+t.tipBackgroundColor+";\n    color: "+t.tipTextColor+";\n    box-shadow: "+t.tipShadowColor+" 0 2px 2px;\n  "},[t._t("default")],2)};var K=[];var W={name:"recording-tip",props:{position:String,tipTextColor:String,tipBackgroundColor:String,tipShadowColor:String}};var X=W;var V=r(14);var F=M(X,D,K,false,null,"51834f6c",null);var J=F.exports;var G={color:"#333",tipPosition:"top",tipTextColor:"#f2f2f2",tipBackgroundColor:"#4b667d",tipShadowColor:"rgba(0,0,0,.1)",interactiveMode:"press",returnMode:"increment",language:"zh_cn",vad_eos:3e3};var q={props:{color:String,tipPosition:String,appId:String,apiKey:String,apiSecret:String,interactiveMode:String,returnMode:String,language:String,accent:String,pd:String,rlang:String,ptt:Number,nunum:Number,vad_eos:Number},methods:{getConfig:function t(e){if(!this.IATConfig)this.IATConfig={};return this[e]||this.IATConfig[e]||G[e]}},computed:{pressMode:function t(){return this.getConfig("interactiveMode")!=="touch"},touchMode:function t(){return this.getConfig("interactiveMode")==="touch"},incrementMode:function t(){return this.getConfig("returnMode")==="increment"},completeMode:function t(){return this.getConfig("returnMode")==="complete"},locale:function t(){var t=g[this.getConfig("language")];return t}}};var Y=function(){function r(t,e){var r=[];var n=true;var i=false;var a=undefined;try{for(var o=t[Symbol.iterator](),s;!(n=(s=o.next()).done);n=true){r.push(s.value);if(e&&r.length===e)break}}catch(t){i=true;a=t}finally{try{if(!n&&o["return"])o["return"]()}finally{if(i)throw a}}return r}return function(t,e){if(Array.isArray(t)){return t}else if(Symbol.iterator in Object(t)){return r(t,e)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}();var Q=function t(e,r){Object.defineProperty(e,r,{configurable:false})};var Z=[];var tt={name:"voice-input-button",mixins:[q],components:{loading:B,recordingIcon:j,microphone:$,recordingTip:J},data:function t(){return{recorder:null,processing:false,recording:false,inputTarget:null,isAudioAvailable:false,blank:false,resultCache:{},result:"",responding:false}},methods:{menuPop:function t(){window.event.returnValue=false;return false},toggle:function t(e){this.recording?this.stop(e):this.start(e)},start:function t(e){e.preventDefault();if(this.recording||e&&e.which!==1)return;if(!this.isAudioAvailable){var r=this.getConfig;if(!r("appId")||!r("apiKey")||!r("apiSecret")){alert(this.locale.missing_configuration);return}alert(this.locale.not_supported);return}this.reset();this.recording=true;this.recorder.start();this.$emit("record-start")},stop:function t(e){e&&e.preventDefault();if(e&&e.which!==1)return;this.recording=false;this.recorder.stop();this.$emit("record-stop");this.processing=true},reset:function t(){var e=this;Z.splice(0);this.resultCache={};this.responding=false;setTimeout(function(){e.result=""},500)},appendResult:function t(e,r){this.resultCache[r]={text:e}},replaceResult:function t(e,r,n,i){this.appendResult(e,r);var a=this.resultCache;for(var o=n;o<=i;o++){a[o].discarded=true}},getResult:function t(){return Object.values(this.resultCache).filter(function(t){return!t.discarded}).map(function(t){return t.text}).join("")},setResult:function t(e){var r=this;this.responding=true;var n="";var i=e.ws;for(var a=0;a<i.length;a++){n=n+i[a].cw[0].w}var o=e.pgs;var s=e.sn;var c=e.ls;if(o){if(o==="apd"){this.appendResult(n,s)}else{var u=Y(e.rg,2),l=u[0],f=u[1];this.replaceResult(n,s,l,f)}}else{this.appendResult(n,s)}var d=this.getResult();this.result=d;if(this.completeMode&&!c)return;c&&this.reset();if(d){this.$emit("record",d);this.$emit("input",d);c&&this.$emit("record-complete",d)}else{this.$emit("record-blank");this.blank=true;setTimeout(function(){r.blank=false},1e3)}}},computed:{state:function t(){return this.recorder?this.recorder.state:"end"}},created:function t(){var n=this;var e=this.getConfig;var r=new b({onClose:function t(){n.stop();n.processing=false},onError:function t(){n.stop();n.reset();n.processing=false;n.$emit("record-failed",error);alert(n.locale.socket_error)},onMessage:function t(e){var r=JSON.parse(e.data);if(r.data&&r.data.result){n.setResult(r.data.result)}},onStart:function t(){},appId:e("appId"),apiKey:e("apiKey"),apiSecret:e("apiSecret"),accent:e("accent"),language:e("language"),pd:e("pd"),rlang:e("rlang"),ptt:e("ptt"),nunum:e("nunum"),vad_eos:e("vad_eos")});var i=["appId","apiSecret","apiKey","accent","language","pd","rlang","ptt","nunum","vad_eos","config"];i.forEach(function(t){Q(r,t)});this.recorder=r;this.isAudioAvailable=this.recorder.isAudioAvailable&&e("appId")&&e("apiKey")&&e("apiSecret")},beforeDestroy:function t(){this.recorder.stop();this.recorder=null}};var et=tt;var rt=r(16);var nt=M(et,n,i,false,null,"55c5b9ba",null);var it=nt.exports;it.install=function(t,e){t.prototype.IATConfig=e;t.component(it.name,it)};if(typeof window!=="undefined"&&window.Vue){window.Vue.use(it)}var at=e["default"]=it}])});
//# sourceMappingURL=voice-input-button.js.map