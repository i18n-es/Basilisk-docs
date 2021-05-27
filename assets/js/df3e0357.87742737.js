(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[868],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3919:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return a}})},4996:function(e,n,t){"use strict";t.d(n,{C:function(){return o},Z:function(){return i}});var r=t(2263),a=t(3919);function o(){var e=(0,r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+s:s}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},3954:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=t(4996),l={id:"build_dev_chain",title:"Set up a Development Chain"},c={unversionedId:"build_dev_chain",id:"build_dev_chain",isDocsHomePage:!1,title:"Set up a Development Chain",description:"This section runs you through the process of setting up a local HydraDX chain instance for development.",source:"@site/docs/build_dev_chain.md",sourceDirName:".",slug:"/build_dev_chain",permalink:"/build_dev_chain",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/build_dev_chain.md",version:"current",frontMatter:{id:"build_dev_chain",title:"Set up a Development Chain"},sidebar:"sidebar",previous:{title:"Intro to Development",permalink:"/dev_intro"},next:{title:"AMM Pools",permalink:"/dev_pools"}},u=[{value:"01 Install dependencies",id:"01-install-dependencies",children:[]},{value:"02 Build",id:"02-build",children:[]},{value:"03 Run",id:"03-run",children:[]},{value:"04 Connect to your local chain instance",id:"04-connect-to-your-local-chain-instance",children:[]}],s={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section runs you through the process of setting up a local HydraDX chain instance for development. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Are you looking to set up a node for validation purposes? Please move to our ",(0,o.kt)("a",{parentName:"p",href:"/node_setup"},"validator setup guide"),"."))),(0,o.kt)("h2",{id:"01-install-dependencies"},"01 Install dependencies"),(0,o.kt)("p",null,"To prepare a local HydraDX chain instance for development, your machine needs to cover all dependencies for running a Substrate chain. You will need to install a Rust developer environment and make sure that it is configured properly for compiling Substrate runtime code to the WebAssembly (Wasm) target."),(0,o.kt)("p",null,"You can install and configure all dependencies manually following the ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/getting-started"},"Substrate guide"),", or you could let this script do all the work for you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://getsubstrate.io -sSf | bash -s -- --fast\n$ source ~/.cargo/env\n")),(0,o.kt)("h2",{id:"02-build"},"02 Build"),(0,o.kt)("p",null,"Build the Wasm and native execution environments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n\n# Build the binary\n$ cd HydraDX-node/\n$ cargo build --release\n")),(0,o.kt)("p",null,"You should be able to find the build under ",(0,o.kt)("inlineCode",{parentName:"p"},"./target/release/hydra-dx"),"."),(0,o.kt)("h2",{id:"03-run"},"03 Run"),(0,o.kt)("p",null,"Before running your build you can purge any existing development chains on your machine (you will need to do this often in the development process):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./target/release/hydra-dx purge-chain --dev\n")),(0,o.kt)("p",null,"Run your build using one of the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./target/release/hydra-dx --dev\n\n# Run with detailed logging\n$ RUST_LOG=debug RUST_BACKTRACE=1 ./target/release/hydra-dx -lruntime=debug --dev\n")),(0,o.kt)("h2",{id:"04-connect-to-your-local-chain-instance"},"04 Connect to your local chain instance"),(0,o.kt)("p",null,"You can connect to your HydraDX development node using Polkadot/apps and changing network to ",(0,o.kt)("inlineCode",{parentName:"p"},"Development"),". You can also use this link:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer"},"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer")),(0,o.kt)("img",{alt:"connect to node",src:(0,i.Z)("/building/connect-to-node.jpg")}))}d.isMDXComponent=!0}}]);