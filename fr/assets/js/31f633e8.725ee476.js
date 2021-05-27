(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[708],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6969:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"dev_pallets",title:"Intro"},l={unversionedId:"dev_pallets",id:"dev_pallets",isDocsHomePage:!1,title:"Intro",description:"Here is an overview of the available pallets in HydraDX-node:",source:"@site/docs/dev_pallets.md",sourceDirName:".",slug:"/dev_pallets",permalink:"/fr/dev_pallets",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/dev_pallets.md",version:"current",frontMatter:{id:"dev_pallets",title:"Intro"},sidebar:"sidebar",previous:{title:"HydraDX Math Crate",permalink:"/fr/dev_math"},next:{title:"Asset Registry",permalink:"/fr/registry"}},c=[{value:"Asset Registry",id:"asset-registry",children:[]},{value:"XYK",id:"xyk",children:[]},{value:"HDX",id:"hdx",children:[]},{value:"Exchange",id:"exchange",children:[]},{value:"Transaction multi payment",id:"transaction-multi-payment",children:[]}],s={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here is an overview of the available pallets in HydraDX-node:"),(0,i.kt)("h3",{id:"asset-registry"},"Asset Registry"),(0,i.kt)("p",null,"Asset registry provides the functionality to create, store and keep track of the existing assets on the chain."),(0,i.kt)("h3",{id:"xyk"},"XYK"),(0,i.kt)("p",null,"Implementation of a Uniswap-like AMM model. ",(0,i.kt)("a",{parentName:"p",href:"/xyk"},"More details"),"."),(0,i.kt)("h3",{id:"hdx"},"HDX"),(0,i.kt)("p",null,"HydraDX Omnipool implementation. ",(0,i.kt)("a",{parentName:"p",href:"/dev_pallet_hdx"},"More details"),"."),(0,i.kt)("h3",{id:"exchange"},"Exchange"),(0,i.kt)("p",null,"Order matching implementation. ",(0,i.kt)("a",{parentName:"p",href:"/dev_pallet_exchange"},"More details"),"."),(0,i.kt)("h3",{id:"transaction-multi-payment"},"Transaction multi payment"),(0,i.kt)("p",null,"Provides support to pay transaction fees in another currency than the native one. It is possible for a users to select in which currency they wish to pay the transactions fees."))}p.isMDXComponent=!0}}]);