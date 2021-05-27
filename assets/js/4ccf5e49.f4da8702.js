(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[741],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4813:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"dev_intro",title:"Intro to Development"},c={unversionedId:"dev_intro",id:"dev_intro",isDocsHomePage:!1,title:"Intro to Development",description:"The purpose of the Build section of the HydraDX documentation is to share technical knowledge with the community and to empower individual contributions. HydraDX is a community-driven project which invests heavily in incentivizing community involvement, and we especially appreciate technical contributions!",source:"@site/docs/dev_intro.md",sourceDirName:".",slug:"/dev_intro",permalink:"/dev_intro",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/dev_intro.md",version:"current",frontMatter:{id:"dev_intro",title:"Intro to Development"},sidebar:"sidebar",previous:{title:"Node Monitoring",permalink:"/node_monitoring"},next:{title:"Set up a Development Chain",permalink:"/build_dev_chain"}},u=[{value:"How to Start",id:"how-to-start",children:[]},{value:"How to Continue",id:"how-to-continue",children:[]}],l={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The purpose of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Build")," section of the HydraDX documentation is to share technical knowledge with the community and to empower individual contributions. HydraDX is a community-driven project which invests heavily in incentivizing community involvement, and we especially appreciate technical contributions!"),(0,i.kt)("p",null,"All technical contributions which are aligned with the goals of HydraDX are eligible for generous rewards which are paid out as Treasury tips in HDX. You can find more information about our reward scheme under the following links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hydradx.substack.com/p/incentivized-testnet-reward-scheme"},"New Deal reward scheme announcement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/new_deal"},"Example tasks which brings rewards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/tip_request"},"How to claim Treasury tips"))),(0,i.kt)("h2",{id:"how-to-start"},"How to Start"),(0,i.kt)("p",null,"HydraDX is powered by Substrate which is a cutting-edge blockchain framework built on Rust. Knowledge of Rust is therefore an important prerequisite for chain development. If you want to learn Rust, a good place to start is the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/book/"},'"Rust Book"'),"."),(0,i.kt)("p",null,"A further requirement is basic knowledge of the Substrate framework. If you want to get up to speed quickly, we highly recommend you to subscribe to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.industryconnect.org/substrate-runtime-developer-academy/"},"Acala Runtime Developer Academy"),"."),(0,i.kt)("h2",{id:"how-to-continue"},"How to Continue"),(0,i.kt)("p",null,"Check out the docs under ",(0,i.kt)("inlineCode",{parentName:"p"},"Build"),". Ask questions on Discord. Fork us. Open a PR with your contribution."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-node"},"https://github.com/galacticcouncil/HydraDX-node"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/Basilisk-node"},"https://github.com/galacticcouncil/Basilisk-node")))}s.isMDXComponent=!0}}]);