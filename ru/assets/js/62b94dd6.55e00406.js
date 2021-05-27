(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[306],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(r),f=o,k=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(k,p(p({ref:e},u),{},{components:r})):n.createElement(k,p({ref:e},u))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return o}})},4996:function(t,e,r){"use strict";r.d(e,{C:function(){return a},Z:function(){return p}});var n=r(2263),o=r(3919);function a(){var t=(0,n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var a=void 0===n?{}:n,p=a.forcePrependBaseUrl,i=void 0!==p&&p,c=a.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(i)return e+r;var u=r.startsWith(e)?r:e+r.replace(/^\//,"");return l?t+u:u}(a,r,t,e)}}}function p(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},8275:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),p=r(4996),i={id:"polkadotjs_apps_public",title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043d\u043e\u0434\u0435"},c={unversionedId:"polkadotjs_apps_public",id:"polkadotjs_apps_public",isDocsHomePage:!1,title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043d\u043e\u0434\u0435",description:"\u0415\u0441\u0442\u044c \u0434\u0432\u0430 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0443\u0437\u043b\u0430 RPC, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f HydraDX \u0438 \u043d\u0430\u0448\u0438\u043c\u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430\u043c\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0443\u0437\u043b\u044b \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u043e Snakenet. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Polkadot/apps, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0438\u0436\u0435:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/polkadotjs_apps_public.md",sourceDirName:".",slug:"/polkadotjs_apps_public",permalink:"/ru/polkadotjs_apps_public",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/polkadotjs_apps_public.md",version:"current",frontMatter:{id:"polkadotjs_apps_public",title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043d\u043e\u0434\u0435"},sidebar:"sidebar",previous:{title:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 HydraDX",permalink:"/ru/polkadotjs_apps_local"},next:{title:"Staking",permalink:"/ru/staking"}},l=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0443\u0437\u043b\u0443 RPC \u0432\u0440\u0443\u0447\u043d\u0443\u044e",id:"connect-manually-to-an-rpc-node",children:[]}],u={toc:l};function s(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0415\u0441\u0442\u044c \u0434\u0432\u0430 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0443\u0437\u043b\u0430 RPC, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f HydraDX \u0438 \u043d\u0430\u0448\u0438\u043c\u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430\u043c\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0443\u0437\u043b\u044b \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u043e Snakenet. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Polkadot/apps, \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0438\u0436\u0435:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/explorer"},"RPC node hosted by HydraDX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-02.snakenet.hydradx.io#/explorer"},"RPC node hosted by Intergalactic"))),(0,a.kt)("h2",{id:"connect-manually-to-an-rpc-node"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0443\u0437\u043b\u0443 RPC \u0432\u0440\u0443\u0447\u043d\u0443\u044e"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 RPC \u0432\u0440\u0443\u0447\u043d\u0443\u044e, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/apps")," \u0438 \u0449\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u043b\u0435\u0432\u043e\u043c \u0443\u0433\u043b\u0443, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0435\u0442\u044c."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,p.Z)("/polkadotjs-apps/PolkadotJS-APPS-1.png")})),(0,a.kt)("p",null,"\u0429\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u043f\u043e ",(0,a.kt)("strong",{parentName:"p"},"LIVE NETWORKS")," \u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 ",(0,a.kt)("strong",{parentName:"p"},"HydraDX"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,p.Z)("/polkadotjs-apps/public-1.png")})),(0,a.kt)("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0443\u0437\u043b\u043e\u0432 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,a.kt)("strong",{parentName:"p"},"Switch"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,p.Z)("/polkadotjs-apps/public-2.png")})),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u043e\u0431\u0449\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 RPC."))}s.isMDXComponent=!0}}]);