webpackJsonp([50739212244294],{234:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.children,l=e.className,a=e.to;return r.default.createElement(f.default,{className:["link"].concat(l||[]).join(" "),to:a},t)}t.__esModule=!0,t.default=u;var n=l(1),r=a(n),d=l(13),f=a(d);e.exports=t.default},253:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.pathContext,l=t.posts,a=t.post,u=t.tag;return u?r.default.createElement("div",null,r.default.createElement("h1",null,a.length," post",1===a.length?"":"s"," tagged with ",u),r.default.createElement("ul",null,a.map(function(e){var t=e.id,l=e.frontmatter,a=e.excerpt;return r.default.createElement("li",{key:t},r.default.createElement("h1",null,r.default.createElement(f.default,{to:l.path},l.title)),r.default.createElement("p",null,a))})),r.default.createElement(i.default,{to:"/tags"},"All tags")):r.default.createElement("div",null,r.default.createElement("h1",null,"Tags"),r.default.createElement("ul",{className:"tags"},Object.keys(l).map(function(e){l[e];return r.default.createElement("li",{key:e},r.default.createElement(f.default,{to:"/tags/"+e},e))})),r.default.createElement(i.default,{to:"/"},r.default.createElement(o.default,{name:"home",color:"#6079F2"})," All posts"))}t.__esModule=!0,t.default=u;var n=l(1),r=a(n),d=l(13),f=a(d),c=l(25),o=a(c),s=l(7),m=(a(s),l(234)),i=a(m);e.exports=t.default}});
//# sourceMappingURL=component---src-templates-tags-js-8159c72661602b9b1bd1.js.map