webpackJsonp([0x620f737b6699],{405:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(418),i=n(419),a=n(420),g=n(421),u=n(422);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=g,r.prototype.set=u,t.exports=r},406:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(426),i=n(427),a=n(428),g=n(429),u=n(430);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=g,r.prototype.set=u,t.exports=r},407:function(t,e,n){var r=n(180),o=n(117),i=r(o,"Map");t.exports=i},408:function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(431),i=n(432),a=n(433),g=n(434),u=n(435);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=a,r.prototype.has=g,r.prototype.set=u,t.exports=r},116:function(t,e,n){var r=n(117),o=r.Symbol;t.exports=o},409:function(t,e){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}t.exports=n},83:function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(441);t.exports=r},410:function(t,e,n){function r(t,e){e=o(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[i(e[n++])];return n&&n==r?t:void 0}var o=n(413),i=n(439);t.exports=r},179:function(t,e,n){function r(t){return null==t?void 0===t?u:g:c&&c in Object(t)?i(t):a(t)}var o=n(116),i=n(416),a=n(437),g="[object Null]",u="[object Undefined]",c=o?o.toStringTag:void 0;t.exports=r},411:function(t,e,n){function r(t){if(!a(t)||i(t))return!1;var e=o(t)?C:c;return e.test(g(t))}var o=n(443),i=n(425),a=n(181),g=n(440),u=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,l=Function.prototype,p=Object.prototype,s=l.toString,I=p.hasOwnProperty,C=RegExp("^"+s.call(I).replace(u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},412:function(t,e,n){function r(t){if("string"==typeof t)return t;if(a(t))return i(t,r)+"";if(g(t))return l?l.call(t):"";var e=t+"";return"0"==e&&1/t==-u?"-0":e}var o=n(116),i=n(409),a=n(118),g=n(119),u=1/0,c=o?o.prototype:void 0,l=c?c.toString:void 0;t.exports=r},413:function(t,e,n){function r(t,e){return o(t)?t:i(t,e)?[t]:a(g(t))}var o=n(118),i=n(423),a=n(438),g=n(446);t.exports=r},414:function(t,e,n){var r=n(117),o=r["__core-js_shared__"];t.exports=o},415:function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},84:function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(424);t.exports=r},180:function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(411),i=n(417);t.exports=r},416:function(t,e,n){function r(t){var e=a.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=g.call(t);return r&&(e?t[u]=n:delete t[u]),o}var o=n(116),i=Object.prototype,a=i.hasOwnProperty,g=i.toString,u=o?o.toStringTag:void 0;t.exports=r},417:function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},418:function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(85);t.exports=r},419:function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},420:function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return g.call(e,t)?e[t]:void 0}var o=n(85),i="__lodash_hash_undefined__",a=Object.prototype,g=a.hasOwnProperty;t.exports=r},421:function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:a.call(e,t)}var o=n(85),i=Object.prototype,a=i.hasOwnProperty;t.exports=r},422:function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(85),i="__lodash_hash_undefined__";t.exports=r},423:function(t,e,n){function r(t,e){if(o(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(g.test(t)||!a.test(t)||null!=e&&t in Object(e))}var o=n(118),i=n(119),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g=/^\w*$/;t.exports=r},424:function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},425:function(t,e,n){function r(t){return!!i&&i in t}var o=n(414),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},426:function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},427:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():a.call(e,n,1),--this.size,!0}var o=n(83),i=Array.prototype,a=i.splice;t.exports=r},428:function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(83);t.exports=r},429:function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(83);t.exports=r},430:function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(83);t.exports=r},431:function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(a||i),string:new o}}var o=n(405),i=n(406),a=n(407);t.exports=r},432:function(t,e,n){function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(84);t.exports=r},433:function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(84);t.exports=r},434:function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(84);t.exports=r},435:function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(84);t.exports=r},436:function(t,e,n){function r(t){var e=o(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}var o=n(445),i=500;t.exports=r},85:function(t,e,n){var r=n(180),o=r(Object,"create");t.exports=o},437:function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},117:function(t,e,n){var r=n(415),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},438:function(t,e,n){var r=n(436),o=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,g=r(function(t){var e=[];return o.test(t)&&e.push(""),t.replace(i,function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)}),e});t.exports=g},439:function(t,e,n){function r(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}var o=n(119),i=1/0;t.exports=r},440:function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},441:function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},442:function(t,e,n){function r(t,e,n){var r=null==t?void 0:o(t,e);return void 0===r?n:r}var o=n(410);t.exports=r},118:function(t,e){var n=Array.isArray;t.exports=n},443:function(t,e,n){function r(t){if(!i(t))return!1;var e=o(t);return e==g||e==u||e==a||e==c}var o=n(179),i=n(181),a="[object AsyncFunction]",g="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";t.exports=r},181:function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},444:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},119:function(t,e,n){function r(t){return"symbol"==typeof t||i(t)&&o(t)==a}var o=n(179),i=n(444),a="[object Symbol]";t.exports=r},445:function(t,e,n){function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(r.Cache||o),n}var o=n(408),i="Expected a function";r.Cache=o,t.exports=r},446:function(t,e,n){function r(t){return null==t?"":o(t)}var o=n(412);t.exports=r},573:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwcHgiIGhlaWdodD0iNDA1cHgiIHZpZXdCb3g9IjAgMCA2MDAgNDA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjExMDQiIGhlaWdodD0iNTIyIj48L3JlY3Q+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMyIgeD0iMCIgeT0iMCIgd2lkdGg9IjExNDkiIGhlaWdodD0iMTkzIj48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iMDUt4oCTLUVtYWlscyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlVwY29taW5nLfCfkqsiPgogICAgICAgICAgICA8ZyBpZD0iQkciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMzcuMDAwMDAwLCAtMTYxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIuMDAwMDAwLCA4NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJNYXNrIj48L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgbWFzaz0idXJsKCNtYXNrLTIpIiBpZD0iRmlsbC0xIiBmaWxsPSIjNjA3OUYyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzNi4wMDY2MTIsIC00MzQuMzkxNjA4KSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA3NS4yMzUyOCw5MTUuNjY1NzA1IEwyMjEuNDczOTMyLDgyMC44MDIyMzcgQzE3Ny4wODYyMDksODE1Ljg1Njc0OSAxNDAuODQ1NTk5LDc4My4wNjQ3ODYgMTMxLjQ5MDQ2NSw3MzkuMzk4MzY3IEwyLjA5MTgyMjE3LDEzNS4zMTgxNDYgQy0xMC4xMDA3NTUxLDc4LjUwMTIyMzIgMzIuNTE3MDc4MywyNC42NjI4MzM0IDkwLjYxNDQyOCwyMy40NTQ1NjA2IEwxMjM4LjYyNzA1LDAuMDE5Njg3Mzg0NCBDMTI5OC4yMTMzNSwtMS4xODg1ODU0NiAxMzQzLjM1OTYsNTMuNDA4NDg3MyAxMzMwLjk5ODQ2LDExMS42ODY1NzcgTDExNzUuOTIyMzYsODQyLjk0NDU0IEMxMTY2LjAzMzQ1LDg4OS40NDg5OTQgMTEyMi41MTY2Myw5MjAuOTIwMjg3IDEwNzUuMjM1MjgsOTE1LjY2NTcwNSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSI+CiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTWFzayI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxnIG1hc2s9InVybCgjbWFzay00KSIgaWQ9IkZpbGwtMSIgZmlsbD0iIzYwNzlGMiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDguNjMyNjEwLCA0OC41NTM0NTkpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDc1LjIyNDQ1LDkxMy40NDgxOTYgTDIyMS40NzE3MDIsODE4LjgxNDQ2NCBDMTc3LjA4NDQyNSw4MTMuODgwOTUyIDE0MC44NDQxODEsNzgxLjE2ODQwMiAxMzEuNDg5MTQxLDczNy42MDc3MzMgTDIuMDkxODAxMSwxMzQuOTkwNDQgQy0xMC4xMDA2NTM0LDc4LjMxMTExMzMgMzIuNTE2NzUwOSwyNC42MDMxMDYzIDkwLjYxMzUxNTUsMjMuMzk3NzU5NiBMMTIzOC42MTQ1OCwwLjAxOTYzOTcwNjYgQzEyOTguMjAwMjgsLTEuMTg1NzA3IDEzNDMuMzQ2MDcsNTMuMjc5MTQ1NSAxMzMwLjk4NTA2LDExMS40MTYxMDEgTDExNzUuOTEwNTIsODQwLjkwMzE0MyBDMTE2Ni4wMjE3MSw4ODcuMjk0OTc2IDExMjIuNTA1MzMsOTE4LjY5MDA1MyAxMDc1LjIyNDQ1LDkxMy40NDgxOTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},236:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=t.list,n=void 0===e?[]:e;return a.default.createElement("ul",{className:"tag-list"},n.map(function(t){return a.default.createElement("li",{key:t},a.default.createElement(u.default,{to:"/tags/"+t},t))}))}e.__esModule=!0,e.default=o;var i=n(1),a=r(i),g=n(13),u=r(g);t.exports=e.default},250:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=t.data,n=t.pathContext,r=e.markdownRemark,o=n.next,i=n.prev;return a.default.createElement(h,null,a.default.createElement(u.default,{title:"Your Blog Name - "+r.frontmatter.title}),a.default.createElement(y,null),a.default.createElement(v,null,a.default.createElement(N,null,a.default.createElement(l.default,{to:"/blog"},a.default.createElement(x.default,{name:"back",color:"white"}),"Back to Blog")),a.default.createElement("h5",null,r.frontmatter.title),a.default.createElement(D,{dangerouslySetInnerHTML:{__html:r.html}})),a.default.createElement(m,null,i&&a.default.createElement(l.default,{to:i.frontmatter.path},a.default.createElement(x.default,{name:"back",color:"#6079F2"})," ",a.default.createElement("h5",null,i.frontmatter.title)),o&&a.default.createElement(l.default,{to:o.frontmatter.path},a.default.createElement("h5",null,o.frontmatter.title)," ",a.default.createElement(x.default,{name:"forward",color:"#6079F2"}))))}e.__esModule=!0,e.pageQuery=void 0,e.default=o;var i=n(1),a=r(i),g=n(24),u=r(g);n(21);var c=n(13),l=r(c),p=n(442),s=(r(p),n(7)),I=r(s),C=n(8),f=n(573),A=r(f),d=n(25),x=r(d),M=n(236),h=(r(M),I.default.div.withConfig({displayName:"blog-post__BlogPostContainer"})(["display:flex;flex-direction:column;align-items:center;margin:0 auto;width:100%;background-color:",";@media screen and (max-width:615px){background-color:white;}"],C.TINY_BKG)),y=I.default.div.withConfig({displayName:"blog-post__BlogPostBackground"})(["display:flex;position:absolute;width:100vw;height:120vh;bottom:200px;background-image:url(",");background-size:cover;background-position:top;"],A.default),v=I.default.div.withConfig({displayName:"blog-post__BlogPost"})(["display:flex;position:relative;z-index:3;flex-direction:column;align-items:flex-start;width:750px;margin:150px 25px 25px 25px;padding:50px;border-radius:8px;background-color:white;box-shadow:0px 4px 10px ",";h5{margin:0px 10px;}@media screen and (max-width:768px){width:90%;}@media screen and (max-width:615px){width:100%;border-radius:0px;box-shadow:0px 4px 0px transparent;}"],C.TINY_SHADOW),D=I.default.div.withConfig({displayName:"blog-post__BlogPostContent"})(["margin:20px 10px;h1{font-weight:normal;font-size:28px;letter-spacing:0.1px;margin:10px 0px 30px 0px;}h3{font-weight:normal;font-size:22px;letter-spacing:0.1px;margin:35px 0px 5px 0px;}p{font-weight:normal;font-size:16px;line-height:26px;letter-spacing:0.1px;margin:0px 0px 25px 0px;:last-child{margin-top:50px;}}em{display:flex;position:relative;top:-20px;margin:0px 50px;font-size:14px;color:",";text-align:center;line-height:18px;}a:hover{}"],C.SECONDARY_TEXT),m=I.default.div.withConfig({displayName:"blog-post__NextPost"})(["width:700px;display:flex;justify-content:center;margin:0px 0px 150px 0px;a{display:flex;padding:0px 25px;transition:all 200ms ease;:hover{transform:translateY(-2px);}}h5{font-weight:400;}div{position:relative;top:3px;padding:0px 10px;}@media screen and (max-width:768px){width:90%;}@media screen and (max-width:615px){align-items:center;flex-direction:column;justify-content:center;a{padding:10px 0px;}div{position:relative;top:0px;padding:0px 10px;:nth-child(1){padding-left:0;}:nth-child(2){padding-right:0;}}}"]),N=I.default.div.withConfig({displayName:"blog-post__BackToBlog"})(["position:relative;top:-100px;display:flex;a{color:white;display:flex;transition:all 200ms ease;:hover{transform:translateX(-3px);}div{padding-right:10px;position:relative;top:1px;}}"]);e.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-512978fb6d7b6d890d48.js.map