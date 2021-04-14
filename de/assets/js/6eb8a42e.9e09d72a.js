(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{79:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(3),i=r(7),a=(r(0),r(89)),o=(r(90),{id:"performance_benchmark",title:"Leistungs-Benchmark"}),c={unversionedId:"performance_benchmark",id:"performance_benchmark",isDocsHomePage:!1,title:"Leistungs-Benchmark",description:"Sie k\xf6nnen sicherstellen, dass ihre Hardware die technischen Mindestanforderungen erf\xfcllt, indem Sie einen Leistungs-Benchmark ausf\xfchren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/performance_benchmark.md",slug:"/performance_benchmark",permalink:"/de/performance_benchmark",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/performance_benchmark.md",version:"current",sidebar:"sidebar",previous:{title:"Eine HydraDX Node einrichten",permalink:"/de/node_setup"},next:{title:"Node Monitoring",permalink:"/de/node_monitoring"}},s=[],u={toc:s};function l(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sie k\xf6nnen sicherstellen, dass ihre Hardware die ",Object(a.b)("a",{parentName:"p",href:"/node_setup#00-required-technical-specifications"},"technischen Mindestanforderungen")," erf\xfcllt, indem Sie einen Leistungs-Benchmark ausf\xfchren.",Object(a.b)("br",{parentName:"p"}),"\n","Nutzen Sie hierf\xfcr Folgenden Befehl:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n$ cd HydraDX-node/\n\n# Prepare for running the benchmark\n## Install Rust following https://rustup.rs\n$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\n## Configure Rust\n$ ./scripts/init.sh\n$ rustup default nightly\n\n## Install additional libraries\n$ apt install python3-pip\n$ apt install clang\n\n# Run the benchmark\n$ ./scripts/check_performance.sh\n")),Object(a.b)("p",null,"Nachdem Ihr Benchmark ausgef\xfchrt wurde sollte ihre Ausgabe \xe4hnlich zu folgedem sein:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"         Pallet          |   Time comparison (\xb5s)    |  diff* (\xb5s)   |   diff* (%)    |            |   Rerun\namm                      |     773.00 vs 680.00      |      93.00    |      12.03     |     OK     |\nexchange                 |     804.00 vs 720.00      |      84.00    |      10.44     |     OK     |\ntransaction_multi_payment|     218.00 vs 198.00      |      20.00    |       9.17     |     OK     |\n\nNotes:\n- in the diff fields you can see the difference between the reference benchmark time and the benchmark time of your machine\n- if diff is positive for all three pallets, your machine covers the minimum requirements for running a HydraDX node\n- if diff deviates by -10% or more for some of the pallets, your machine might not be suitable to run a node\n")),Object(a.b)("p",null,"Wenn die Werte in der Spalte ",Object(a.b)("inlineCode",{parentName:"p"},"diff")," alle drei positive Zahlenwerte sind, ist ihre Hardware geeignet um eine HydraDX Validator Node zu betreiben.\nSie k\xf6nnen gerne unserem Discord Channel beitreten wenn sie Ihre Benchmark Ergebnisse diskutieren wollen oder Hilfe brauchen. Unsere Community hilft Ihnen gerne!"))}l.isMDXComponent=!0},89:function(e,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return m}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var n=i.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},f=function(e){var n=l(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),p=t,m=f["".concat(o,".").concat(p)]||f[p]||d[p]||a;return r?i.a.createElement(m,c(c({ref:n},u),{},{components:r})):i.a.createElement(m,c({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90:function(e,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"a",(function(){return o}));var t=r(16),i=r(92);function a(){var e=Object(t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var a=void 0===t?{}:t,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(c)return n+r;var l=r.startsWith(n)?r:n+r.replace(/^\//,"");return u?e+l:l}(a,r,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},92:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!t(e)}r.d(n,"b",(function(){return t})),r.d(n,"a",(function(){return i}))}}]);