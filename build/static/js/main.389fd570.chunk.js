(window["webpackJsonppeercast-live"]=window["webpackJsonppeercast-live"]||[]).push([[0],{35:function(e,n,t){e.exports=t(48)},47:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(14),i=t.n(c),o=t(31),l=t(15),u=t(18),s=t.n(u),p=t(26),d=t(32),f=t(2),m=t(3),v=t(13);function h(){var e=Object(f.a)(["\n  float: left;\n  padding: 10px;\n"]);return h=function(){return e},e}function g(){var e=Object(f.a)(['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;  width: 347px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgb(50, 47, 55);\n  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;\n']);return g=function(){return e},e}function b(){var e=Object(f.a)(['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;  width: 347px;\n\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 16.8px;\n  color: rgb(25, 23, 28);\n  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;\n  margin-top: 5px;\n  margin-bottom: 2px;\n']);return b=function(){return e},e}function E(){var e=Object(f.a)(["\n  padding: 0px 5px;\n"]);return E=function(){return e},e}function w(){var e=Object(f.a)(["\n  width: 347.5px;\n  height: 195.47px;\n"]);return w=function(){return e},e}function x(){var e=Object(f.a)(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"]);return x=function(){return e},e}m.a.button(x());var O=m.a.img(w()),y=m.a.div(E()),j=m.a.div(b()),I=m.a.div(g()),k=m.a.div(h()),C=function(e){var n=e.channel;var t="videoElement-".concat(n.streamId),a="thumnbailElement-".concat(n.streamId),c=!0;return r.createElement(v.b,{to:"/channels/".concat(n.streamId)},r.createElement(k,{onClick:function(){}},r.createElement("div",null,r.createElement(O,{id:a,src:"./live-chuu.png",hidden:!c}),r.createElement("video",{id:t,controls:!0,width:"347.5",height:"195.47",hidden:c})),r.createElement(y,null,r.createElement(j,null,function(e){var n="",t=function(e){var n=document.createElement("textarea");return n.innerHTML=e,n.textContent}(e.details.replace(/ - .*/,""))||"";return e.genre.length&&(n=e.genre,t.length&&(n+=" - ")),t.length&&(n+=t),n}(n)),r.createElement(I,null,n.name))))};function N(){var e=Object(f.a)(["\n  /* padding: 50px; */\n"]);return N=function(){return e},e}var T=m.a.div(N()),D=function(e){var n=e.channels;return r.createElement(T,null,n.filter(function(e){return"FLV"===e.type}).map(function(e,n){return r.createElement(C,{key:n,channel:e})}))};function P(){var e=Object(f.a)(["\n  float: left;\n  padding: 10px;\n"]);return P=function(){return e},e}function H(){var e=Object(f.a)(['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;  width: 347px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgb(50, 47, 55);\n  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;\n']);return H=function(){return e},e}function M(){var e=Object(f.a)(['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;  width: 347px;\n\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 16.8px;\n  color: rgb(25, 23, 28);\n  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;\n  margin-top: 5px;\n  margin-bottom: 2px;\n']);return M=function(){return e},e}function R(){var e=Object(f.a)(["\n  padding: 0px 5px;\n"]);return R=function(){return e},e}function U(){var e=Object(f.a)(["\n  width: 347.5px;\n  height: 195.47px;\n"]);return U=function(){return e},e}function A(){var e=Object(f.a)(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"]);return A=function(){return e},e}m.a.button(A()),m.a.img(U());var L=m.a.div(R()),z=m.a.div(M()),B=m.a.div(H()),S=m.a.div(P()),F=function(e){var n=e.streamId,t=e.channels.find(function(e){return e.streamId===n})||{name:"\u30c1\u30e3\u30f3\u30cd\u30eb\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093",streamId:"",tip:"",contactUrl:"",genre:"",details:"",listenerCount:0,relayCount:0,bitrate:0,type:"FLV"};var a="videoElement-".concat(t.streamId),c=("thumnbailElement-".concat(t.streamId),null);return window.scrollTo(0,0),Object(r.useEffect)(function(){var e=document.getElementById(a);if(e.hidden=!1,console.log("channel.streamId:"+t.streamId),t.streamId.length>0){console.log("aaa");var n="http://peca.live:7144/stream/".concat(t.streamId,".flv?tip=").concat(t.tip);(c=flvjs.createPlayer({type:"flv",isLive:!0,url:n})).attachMediaElement(e),c.load(),c.play(),!1}}),r.createElement(S,null,r.createElement("a",null,r.createElement("div",null,r.createElement("video",{id:a,controls:!0,width:"100%"})),r.createElement(L,null,r.createElement(z,null,function(e){var n="",t=function(e){var n=document.createElement("textarea");return n.innerHTML=e,n.textContent}(e.details.replace(/ - .*/,""))||"";return e.genre.length&&(n=e.genre,t.length&&(n+=" - ")),t.length&&(n+=t),n}(t)),r.createElement(B,null,t.name))))},J=t(10);function V(){var e=Object(f.a)(["\n  height: 50px;\n  width: 180px;\n  padding-left: 7px;\n"]);return V=function(){return e},e}function W(){var e=Object(f.a)(["\n  padding: 40px;\n"]);return W=function(){return e},e}var $,q=m.a.div(W()),G=m.a.img(V()),K=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(r.useEffect)(function(){(function(){var e=Object(p.a)(s.a.mark(function e(){var n,t,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://peca-live.herokuapp.com/api/v1/channels",{credentials:"same-origin"});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,r=t.map(function(e){var n=e.contentType;return null===n?null:{name:e.name,streamId:e.channelId,tip:e.tracker,contactUrl:e.contactUrl,genre:e.genre,details:e.description,listenerCount:e.listeners,relayCount:e.relays,bitrate:e.bitrate,type:n,album:e.album,comment:e.comment,creator:e.creator,trackTitle:e.trackTitle,trackUrl:e.trackUrl,uptime:e.uptime,yellowPage:e.yellowPage}}),c(r);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]),a.a.createElement(v.a,null,a.a.createElement(q,null,a.a.createElement(v.b,{to:"/"},a.a.createElement(G,{src:"/pecalive.png"})),a.a.createElement("div",null,a.a.createElement(J.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(D,{channels:t})}}),a.a.createElement(J.a,{path:"/channels/:streamId",render:function(e){return a.a.createElement(F,{streamId:e.match.params.streamId,channels:t})}}))))},Q=t(30);function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(t,!0).forEach(function(n){Object(Q.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}!function(e){e.ADD="COUNTER/ADD",e.DECREMENT="COUNTER/DECREMENT",e.INCREMENT="COUNTER/INCREMENT"}($||($={}));var Z={count:0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $.ADD:return Y({},e,{count:e.count+(n.amount||0)});case $.DECREMENT:return Y({},e,{count:e.count-1});case $.INCREMENT:return Y({},e,{count:e.count+1});default:n.type;return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(47);var ee=Object(l.b)(_,Z);i.a.render(a.a.createElement(o.a,{store:ee},a.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.389fd570.chunk.js.map