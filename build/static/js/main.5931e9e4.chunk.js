(window["webpackJsonppeercast-live"]=window["webpackJsonppeercast-live"]||[]).push([[0],{23:function(e,n,t){e.exports=t(37)},33:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(6),c=t.n(i),o=t(19),u=t(7),l=t(1),p=(t(33),t(10)),f=t.n(p),s=t(15),d=t(20),v=t(2);function m(){var e=Object(l.a)(["\n  float: left;\n  padding: 10px;\n"]);return m=function(){return e},e}function h(){var e=Object(l.a)(['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;  width: 347px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgb(50, 47, 55);\n  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;\n']);return h=function(){return e},e}function g(){var e=Object(l.a)(['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;  width: 347px;\n\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 16.8px;\n  color: rgb(25, 23, 28);\n  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;\n  margin-top: 5px;\n  margin-bottom: 2px;\n']);return g=function(){return e},e}function E(){var e=Object(l.a)(["\n  padding: 0px 5px;\n"]);return E=function(){return e},e}function b(){var e=Object(l.a)(["\n  width: 347.5px;\n  height: 195.47px;\n"]);return b=function(){return e},e}function w(){var e=Object(l.a)(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"]);return w=function(){return e},e}v.a.button(w());var O=v.a.img(b()),x=v.a.div(E()),y=v.a.div(g()),j=v.a.div(h()),D=v.a.div(m()),N=function(e){var n=e.channel;var t="videoElement-".concat(n.streamId),a="thumnbailElement-".concat(n.streamId),i=null,c=!0;return r.createElement(D,{onClick:function(){return function(){if(!i){document.getElementById(a).hidden=!0;var e=document.getElementById(t);e.hidden=!1;var r="http://peca.live:7144/stream/".concat(n.streamId,".flv?auth=JkVYNUxQTmVaTUEwWSdlMDouSWhDQnE7c1lZKCFyeXVY&tip=").concat(n.tip);(i=flvjs.createPlayer({type:"flv",isLive:!0,url:r})).attachMediaElement(e),i.load(),i.play(),c=!1}}()}},r.createElement("a",null,r.createElement("div",null,r.createElement(O,{id:a,src:"./live-chuu.png",hidden:!c}),r.createElement("video",{id:t,controls:!0,width:"347.5",height:"195.47",hidden:c})),r.createElement(x,null,r.createElement(y,null,function(e){var n="",t=function(e){var n=document.createElement("textarea");return n.innerHTML=e,n.textContent}(e.details.replace(/ - .*/,""))||"";return e.genre.length&&(n=e.genre,t.length&&(n+=" - ")),t.length&&(n+=t),n}(n)),r.createElement(j,null,n.name))))};function C(){var e=Object(l.a)(["\n  /* padding: 50px; */\n"]);return C=function(){return e},e}var T=v.a.div(C()),k=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)(function(){(function(){var e=Object(s.a)(f.a.mark(function e(){var n,t,r,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://peca-live.herokuapp.com/api/v1/channels",{credentials:"same-origin"});case 2:return n=e.sent,e.next=5,n.text();case 5:t=e.sent,r=t.split("\n"),i=r.map(function(e){var n=e.split("<>"),t=n[9];return null===t?null:{name:n[0],streamId:n[1],tip:n[2],contactUrl:n[3],genre:n[4],details:n[5],listenerCount:n[6],relayCount:n[7],bitrate:n[8],type:t}}),a(i);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]),r.createElement(T,null,t.filter(function(e){return"FLV"===e.type}).map(function(e,n){return r.createElement(N,{key:n,channel:e})}))};function I(){var e=Object(l.a)(["\n  height: 50px;\n  width: 180px;\n  padding-left: 7px;\n"]);return I=function(){return e},e}function M(){var e=Object(l.a)(["\n  padding: 40px;\n"]);return M=function(){return e},e}var P,R=v.a.div(M()),U=v.a.img(I()),A=function(){return a.a.createElement(R,null,a.a.createElement(U,{src:"pecalive.png"}),a.a.createElement(k,null))},H=t(18);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(t,!0).forEach(function(n){Object(H.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}!function(e){e.ADD="COUNTER/ADD",e.DECREMENT="COUNTER/DECREMENT",e.INCREMENT="COUNTER/INCREMENT"}(P||(P={}));var V={count:0},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case P.ADD:return B({},e,{count:e.count+(n.amount||0)});case P.DECREMENT:return B({},e,{count:e.count-1});case P.INCREMENT:return B({},e,{count:e.count+1});default:n.type;return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(36);var J=Object(u.b)(W,V);c.a.render(a.a.createElement(o.a,{store:J},a.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.5931e9e4.chunk.js.map