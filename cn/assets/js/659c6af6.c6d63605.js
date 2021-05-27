(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[672],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(n),k=r,u=s["".concat(p,".").concat(k)]||s[k]||c[k]||i;return n?a.createElement(u,l(l({ref:e},d),{},{components:n})):a.createElement(u,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5352:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l={id:"contributing",title:"\u64b0\u5199\u6587\u4ef6"},o={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"\u64b0\u5199\u6587\u4ef6",description:"\u60a8\u53ef\u4ee5\u4f7f\u7528 GitHub \u98ce\u683c\u7684 Markdown \u8bed\u6cd5 \u7f16\u5199\u5185\u5bb9\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/cn/contributing",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/contributing.md",version:"current",frontMatter:{id:"contributing",title:"\u64b0\u5199\u6587\u4ef6"},sidebar:"sidebar",previous:{title:"Transaction Multi-Payment",permalink:"/cn/dev_pallet_payment"}},p=[{value:"Markdown \u8bed\u6cd5",id:"markdown-syntax",children:[]},{value:"\u6807\u9898",id:"headers",children:[]},{value:"H2 - \u521b\u5efa\u6700\u4f73\u6587\u6863",id:"h2---create-the-best-documentation",children:[{value:"H3 - \u521b\u5efa\u6700\u4f73\u6587\u6863",id:"h3---create-the-best-documentation",children:[]}]},{value:"\u91cd\u70b9",id:"emphasis",children:[]},{value:"\u76ee\u5f55",id:"lists",children:[]},{value:"\u94fe\u63a5",id:"links",children:[]},{value:"\u56fe\u7247",id:"images",children:[]},{value:"\u4ee3\u7801",id:"code",children:[]},{value:"\u8868\u683c",id:"tables",children:[]},{value:"\u5757\u5f15\u7528",id:"blockquotes",children:[]},{value:"\u5185\u5d4c HTML",id:"inline-html",children:[]},{value:"\u6362\u884c",id:"line-breaks",children:[]},{value:"\u544a\u8beb",id:"admonitions",children:[]}],m={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.github.com/gfm/"},"GitHub \u98ce\u683c\u7684 Markdown \u8bed\u6cd5"))," \u7f16\u5199\u5185\u5bb9\u3002"),(0,i.kt)("h2",{id:"markdown-syntax"},"Markdown \u8bed\u6cd5"),(0,i.kt)("p",null,"\u5728\u8bbe\u8ba1\u57fa\u4e8e markdown \u7684 Docusaurus \u7f51\u7ad9\u65f6\uff0c\u7528\u4f5c\u793a\u4f8b\u9875\u9762\u3002"),(0,i.kt)("h2",{id:"headers"},"\u6807\u9898"),(0,i.kt)("h1",{id:"h1---create-the-best-documentation"},"H1 - \u521b\u5efa\u6700\u4f73\u6587\u6863"),(0,i.kt)("h2",{id:"h2---create-the-best-documentation"},"H2 - \u521b\u5efa\u6700\u4f73\u6587\u6863"),(0,i.kt)("h3",{id:"h3---create-the-best-documentation"},"H3 - \u521b\u5efa\u6700\u4f73\u6587\u6863"),(0,i.kt)("h4",{id:"h4---create-the-best-documentation"},"H4 - \u521b\u5efa\u6700\u4f73\u6587\u6863"),(0,i.kt)("h5",{id:"h5---create-the-best-documentation"},"H5 - \u521b\u5efa\u6700\u4f73\u6587\u6863"),(0,i.kt)("h6",{id:"h6---create-the-best-documentation"},"H6 - \u521b\u5efa\u6700\u4f73\u6587\u6863"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"emphasis"},"\u91cd\u70b9"),(0,i.kt)("p",null,"\u5f3a\u8c03\uff1a\u53c8\u79f0\u659c\u4f53\uff0c\u53ef\u5728\u6587\u5b57\u524d\u540e\u6dfb\u52a0 ",(0,i.kt)("em",{parentName:"p"},"\u5355\u661f\u53f7")," \u6216 ",(0,i.kt)("em",{parentName:"p"},"\u4e0b\u5212\u7ebf")," \u3002"),(0,i.kt)("p",null,"\u91cd\u70b9\u7a81\u51fa\uff1a\u53c8\u79f0\u9ed1\u4f53\uff0c\u53ef\u5728\u6587\u5b57\u524d\u540e\u6dfb\u52a0 ",(0,i.kt)("strong",{parentName:"p"},"\u53cc\u661f\u53f7")," \u6216 ",(0,i.kt)("em",{parentName:"p"},"\u4e0b\u5212\u7ebf")," \u3002"),(0,i.kt)("p",null,"\u7ec4\u5408\u5f3a\u8c03\uff1a\u53ef\u5728\u6587\u5b57\u524d\u540e\u540c\u65f6\u6dfb\u52a0 ",(0,i.kt)("strong",{parentName:"p"},"\u53cc\u661f\u53f7\u548c",(0,i.kt)("em",{parentName:"strong"},"\u4e0b\u5212\u7ebf"))," \u3002"),(0,i.kt)("p",null,"\u5220\u9664\u7ebf\uff1a\u5728\u6587\u5b57\u524d\u540e\u6dfb\u52a0\u4e24\u4e2a\u6ce2\u6d6a\u53f7 ",(0,i.kt)("del",{parentName:"p"},"\u8fd9\u662f\u5565\u4e1c\u4e1c\uff1f")," \u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"lists"},"\u76ee\u5f55"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9996\u4e2a\u76ee\u5f55\u9879"),(0,i.kt)("li",{parentName:"ol"},"\u53e6\u4e00\u76ee\u5f55\u9879",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u65e0\u5e8f\u53f7\u5b50\u76ee\u5f55"))),(0,i.kt)("li",{parentName:"ol"},"\u5b9e\u9645\u6570\u5b57\u5e76\u4e0d\u91cd\u8981\uff0c\u53ea\u662f\u4e00\u4e2a\u6570\u5b57",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u6709\u5e8f\u53f7\u5b50\u76ee\u5f55"))),(0,i.kt)("li",{parentName:"ol"},"\u518d\u4e00\u4e2a\u76ee\u5f55\u9879")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65e0\u5e8f\u5b50\u76ee\u5f55\u53ef\u4ee5\u4f7f\u7528\u661f\u53f7")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6216\u51cf\u53f7")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6216\u52a0\u53f7")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"links"},"\u94fe\u63a5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/"},"\u5185\u5d4c\u578b\u94fe\u63a5")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/",title:"Google's Homepage"},"\u6807\u9898\u5185\u5d4c\u578b\u94fe\u63a5")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.mozilla.org/"},"\u53c2\u8003\u578b\u94fe\u63a5")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://slashdot.org/"},"\u7528\u6570\u5b57\u5b9a\u4e49\u7684\u53c2\u8003\u578b\u94fe\u63a5")),(0,i.kt)("p",null,"\u6216\u7559\u7a7a\u5e76\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"http://www.reddit.com/"},"\u94fe\u63a5\u6587\u672c\u672c\u8eab")),(0,i.kt)("p",null,"URL\u548c\u5c16\u62ec\u53f7\u4e2d\u7684URL\uff0c\u5c06\u81ea\u52a8\u53d8\u4e3a\u94fe\u63a5\u3002 ",(0,i.kt)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," \u6216 ",(0,i.kt)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," \uff0c\u6709\u65f6\u662f example.com\uff08\u4e3e\u4f8b\uff0c\u4e0d\u5728 GitHub \u4e0a\uff09\u3002"),(0,i.kt)("p",null,"\u4e00\u4e9b\u6587\u672c\u8868\u660e\u53c2\u8003\u94fe\u63a5\u53ef\u4ee5\u5728\u4ee5\u540e\u4f7f\u7528\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"images"},"\u56fe\u7247"),(0,i.kt)("p",null,"\u8fd9\u662f\u6211\u4eec\u7684\u6807\u5fd7\uff08\u60ac\u505c\u4ee5\u67e5\u770b\u6807\u9898\u6587\u672c\uff09:"),(0,i.kt)("p",null,"\u5185\u5d4c\u578b\uff1a ",(0,i.kt)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"\u6807\u5fd7\u6807\u9898\u6587\u672c 1"})),(0,i.kt)("p",null,"\u53c2\u8003\u578b\uff1a ",(0,i.kt)("img",{parentName:"p",src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"\u6807\u5fd7\u6807\u9898\u6587\u672c 2"})),(0,i.kt)("p",null,"\u901a\u8fc7\u63d0\u4f9b\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u6587\u4ef6\u5939\u4e2d\u7684\u56fe\u50cf\u3002\u8def\u5f84\u5e94\u6307\u5411 markdown \u6587\u4ef6\u3002"),(0,i.kt)("p",null,"![img]","{useBaseUrl('/static/img/logo.svg')}"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"code"},"\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var s = 'JavaScript syntax highlighting';\nalert(s);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'s = "Python syntax highlighting"\nprint(s)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tables"},"\u8868\u683c"),(0,i.kt)("p",null,"\u5192\u53f7\uff08:\uff09\uff0c\u53ef\u7528\u4e8e\u5217\u7684\u5bf9\u9f50\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tables"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Are"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Cool"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"col 3 is"),(0,i.kt)("td",{parentName:"tr",align:"center"},"right-aligned"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\\$1600")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"col 2 is"),(0,i.kt)("td",{parentName:"tr",align:"center"},"centered"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\\$12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zebra stripes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"are neat"),(0,i.kt)("td",{parentName:"tr",align:"right"},"\\$1")))),(0,i.kt)("p",null,"\u6bcf\u4e2a\u6807\u9898\u5355\u5143\u683c\uff0c\u81f3\u5c11\u987b\u6709 3 \u4e2a\u7834\u6298\u53f7\uff08-\uff09\u3002 \u5916\u6846\u7ebf\uff08|\uff09\u662f\u53ef\u9009\u7684\uff0c\u60a8\u4e0d\u9700\u8981\u628a\u539f\u59cb Markdown \u6392\u5217\u5f97\u5f88\u6f02\u4eae\uff08\u4f1a\u81ea\u52a8\u6392\u5217\u6574\u9f50\uff09\u3002 \u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5185\u5d4c Markdown \u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Markdown"),(0,i.kt)("th",{parentName:"tr",align:null},"Less"),(0,i.kt)("th",{parentName:"tr",align:null},"Pretty"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Still")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"renders")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"nicely"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"3")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"blockquotes"},"\u5757\u5f15\u7528"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u7535\u5b50\u90ae\u4ef6\u4e2d\u7684\u5757\u5f15\u7528\u975e\u5e38\u6709\u7528\uff0c\u53ef\u4ee5\u6a21\u62df\u56de\u590d\u6587\u672c\u3002\u8be5\u884c\u662f\u540c\u4e00\u5f15\u7528\u7684\u4e00\u90e8\u5206\u3002")),(0,i.kt)("p",null,"\u5f15\u7528\u65ad\u5f00"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e00\u884c\u5f88\u957f\uff0c\u5f53\u5b83\u6362\u884c\u65f6\u4ecd\u4f1a\u88ab\u6b63\u786e\u5f15\u7528\u3002 \u54e6\uff0cboy\uff0c\u8ba9\u6211\u4eec\u7ee7\u7eed\uff0c\u786e\u4fdd\u5b83\u591f\u957f\uff0c\u4ee5\u6ee1\u8db3\u6240\u6709\u4eba\u7684\u5b9e\u9645\u9700\u8981\u3002\u54e6\uff0c\u60a8\u4e5f\u53ef\u4ee5\u5c06 ",(0,i.kt)("strong",{parentName:"p"},"Markdown")," ",(0,i.kt)("em",{parentName:"p"},"\u653e\u5165")," \u5757\u5f15\u7528\u4e2d\u3002")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"inline-html"},"\u5185\u5d4c HTML"),(0,i.kt)("dl",null,(0,i.kt)("dt",null,"\u5b9a\u4e49\u6e05\u5355"),(0,i.kt)("dd",null,"\u662f\u4eba\u4eec\u6709\u65f6\u4f1a\u7528\u5230\u7684\u4e1c\u897f\u3002"),(0,i.kt)("dt",null,"Markdown \u5728 HTML \u4e2d"),(0,i.kt)("dd",null," *\u4e0d* \u662f **\u5f88** \u597d\u7528\u3002\u4f7f\u7528 HTML ",(0,i.kt)("em",null,"\u6807\u8bb0"),"\u3002")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"line-breaks"},"\u6362\u884c"),(0,i.kt)("p",null,"\u8fd9\u662f\u6211\u4eec\u8981\u5f00\u59cb\u7684\u7b2c\u4e00\u884c\u3002"),(0,i.kt)("p",null,"\u672c\u884c\u4e0e\u4e0a\u9762\u4e00\u884c\u4e4b\u95f4\uff0c\u6709\u4e24\u4e2a\u6362\u884c\u7b26\uff0c\u56e0\u6b64\u5b83\u5c06\u6210\u4e3a\u4e00\u4e2a",(0,i.kt)("em",{parentName:"p"},"\u5355\u72ec\u6bb5\u843d")," \u3002"),(0,i.kt)("p",null,"\u672c\u884c\u4e5f\u662f\u4e00\u4e2a\u5355\u72ec\u6bb5\u843d\uff0c\u4f46\u662f......\u8fd9\u4e00\u884c\u53ea\u7528\u4e00\u4e2a\u6362\u884c\u7b26\u9694\u5f00\uff0c\u6240\u4ee5\u5b83\u662f",(0,i.kt)("em",{parentName:"p"},"\u540c\u4e00\u6bb5\u843d")," \u4e2d\u7684\u5355\u72ec\u4e00\u884c\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"admonitions"},"\u544a\u8beb"),(0,i.kt)("p",null,"\u6ce8\uff1a\u8bf7\u4fdd\u6301\u9898\u5934\uff1anote\u3001tip\u3001important\u3001caution \u548c warning \u4e3a\u539f\u59cb\u82f1\u6587\u72b6\u6001\uff0c\u5185\u5bb9\u53ef\u6839\u636e\u60a8\u7684\u9700\u8981\u64b0\u5199\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a note"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a tip"))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is important"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a caution"))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a warning"))))}d.isMDXComponent=!0}}]);