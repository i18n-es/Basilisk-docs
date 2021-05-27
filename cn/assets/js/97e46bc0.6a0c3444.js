(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[890],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?t.createElement(d,i(i({ref:n},l),{},{components:r})):t.createElement(d,i({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3919:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!t(e)}r.d(n,{b:function(){return t},Z:function(){return o}})},4996:function(e,n,r){"use strict";r.d(n,{C:function(){return a},Z:function(){return i}});var t=r(2263),o=r(3919);function a(){var e=(0,t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var a=void 0===t?{}:t,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(c)return n+r;var l=r.startsWith(n)?r:n+r.replace(/^\//,"");return s?e+l:l}(a,r,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},3651:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),i=(r(4996),{id:"performance_benchmark",title:"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5"}),c={unversionedId:"performance_benchmark",id:"performance_benchmark",isDocsHomePage:!1,title:"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5",description:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u6d4b\u8bd5\u7a0b\u5e8f\u6765\u786e\u5b9a\u81ea\u5df1\u7684\u8ba1\u7b97\u673a\u662f\u5426\u7b26\u5408 \u57fa\u672c\u6027\u80fd\u8981\u6c42 \u3002 \u8bf7\u8fd0\u884c\u4e00\u4e0b\u4ee3\u7801\uff1a",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/performance_benchmark.md",sourceDirName:".",slug:"/performance_benchmark",permalink:"/cn/performance_benchmark",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/performance_benchmark.md",version:"current",frontMatter:{id:"performance_benchmark",title:"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5"},sidebar:"sidebar",previous:{title:"\u642d\u5efa HydraDX \u8282\u70b9",permalink:"/cn/node_setup"},next:{title:"\u8282\u70b9\u76d1\u63a7",permalink:"/cn/node_monitoring"}},u=[],s={toc:u};function l(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u6d4b\u8bd5\u7a0b\u5e8f\u6765\u786e\u5b9a\u81ea\u5df1\u7684\u8ba1\u7b97\u673a\u662f\u5426\u7b26\u5408 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/node_setup#00-required-technical-specifications"},"\u57fa\u672c\u6027\u80fd\u8981\u6c42"))," \u3002 \u8bf7\u8fd0\u884c\u4e00\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n$ cd HydraDX-node/\n\n# Prepare for running the benchmark\n## Install Rust following https://rustup.rs\n$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\n## Configure Rust\n$ ./scripts/init.sh\n$ rustup default nightly\n\n## Install additional libraries\n$ apt install python3-pip\n$ apt install clang\n\n# Run the benchmark\n$ ./scripts/check_performance.sh\n")),(0,a.kt)("p",null,"\u5728\u6d4b\u8bd5\u7a0b\u5e8f\u8fd0\u884c\u5b8c\u6bd5\u540e\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u4e0e\u4ee5\u4e0b\u7c7b\u4f3c\u7684\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"         Pallet          |   Time comparison (\xb5s)    |  diff* (\xb5s)   |   diff* (%)    |            |   Rerun\namm                      |     773.00 vs 680.00      |      93.00    |      12.03     |     OK     |\nexchange                 |     804.00 vs 720.00      |      84.00    |      10.44     |     OK     |\ntransaction_multi_payment|     218.00 vs 198.00      |      20.00    |       9.17     |     OK     |\n\nNotes:\n- in the diff fields you can see the difference between the reference benchmark time and the benchmark time of your machine\n- if diff is positive for all three pallets, your machine covers the minimum requirements for running a HydraDX node\n- if diff deviates by -10% or more for some of the pallets, your machine might not be suitable to run a node\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 ",(0,a.kt)("strong",{parentName:"p"},"diff* (%)")," \u5217\u4e2d\u770b\u5230\u60a8\u7684\u8ba1\u7b97\u673a\u7ee9\u6548\u53c2\u6570\u4e0e\u542f\u52a8\u8282\u70b9\u6240\u9700\u6700\u4f4e\u8981\u6c42\u4e4b\u95f4\u7684\u5dee\u5f02\u3002 \u5982\u679c\u6b64\u5217\u7684\u4e09\u4e2a\u6570\u503c\u5747\u4e3a\u6b63\u6570\uff0c\u5219\u8868\u793a\u60a8\u7684\u8ba1\u7b97\u673a\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c HydraDX \u9a8c\u8bc1\u8282\u70b9\u3002 \u4e09\u4e2a\u6570\u503c\uff0c\u5982\u679c\u4efb\u4f55\u4e00\u4e2a\u6570\u503c\u4f4e\u4e8e ",(0,a.kt)("em",{parentName:"p"},"-10\uff05")," \uff0c\u5219\u4e0d\u5efa\u8bae\u4f7f\u7528\u8be5\u673a\u8fd0\u884c HydraDX \u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u8ba8\u8bba\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5\u7ed3\u679c\uff0c\u8bf7\u52a0\u5165\u6211\u4eec\u7684 Discord \uff0c\u793e\u533a\u5f88\u4e50\u610f\u63d0\u4f9b\u60a8\uff01"))}l.isMDXComponent=!0}}]);