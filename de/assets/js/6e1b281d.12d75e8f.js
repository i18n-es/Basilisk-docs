(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[754],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(2263),i=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,s=void 0!==a&&a,u=o.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},3679:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=n(4996),s={id:"tip_request",title:"Request a Treasury Tip"},u={unversionedId:"tip_request",id:"tip_request",isDocsHomePage:!1,title:"Request a Treasury Tip",description:"With the launch of the HydraDX New Deal incentives program, community members can request HDX tips from the Treasury as a reward for their contributions. This guide walks you through the process of tip requests. You can find more information about the different types of activities that get rewarded in this post.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tip_request.md",sourceDirName:".",slug:"/tip_request",permalink:"/de/tip_request",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/tip_request.md",version:"current",frontMatter:{id:"tip_request",title:"Request a Treasury Tip"},sidebar:"sidebar",previous:{title:"Beanspruchen Ihrer Staking Rewards",permalink:"/de/staking_claim_rewards"},next:{title:"Mit einer lokalen Node verbinden",permalink:"/de/polkadotjs_apps_local"}},l=[{value:"01 Publish the Tip Request in Commonwealth.im",id:"01-publish-tip-request",children:[]},{value:"02 Submit the Tip Request On-Chain",id:"02-submit-on-chain",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With the launch of the ",(0,o.kt)("a",{parentName:"p",href:"#link-to-new-deal"},"HydraDX New Deal incentives program"),", community members can request HDX tips from the Treasury as a reward for their contributions. This guide walks you through the process of tip requests. You can find more information about the different types of activities that get rewarded in ",(0,o.kt)("a",{parentName:"p",href:"/new_deal"},"this post"),"."),(0,o.kt)("p",null,"The process of requesting a Treasury tip consists of two steps. In the first step, contributors need to publish their tip request in Commonwealth.im with a description of the contribution. As a second step, the Treasury tip request must be submitted on-chain using Polkadot/apps."),(0,o.kt)("h2",{id:"01-publish-tip-request"},"01 Publish the Tip Request in Commonwealth.im"),(0,o.kt)("p",null,"To safeguard transparency, all Treasury tip requests must be published in a thread on the ",(0,o.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx"},"HydraDX Commonwealth page"),". Before opening a thread, you need to link your HydraDX wallet to Commonwealth.im: Click ",(0,o.kt)("em",{parentName:"p"},"Log in")," (top right corner) and select ",(0,o.kt)("em",{parentName:"p"},"Connect with wallet > polkadot-js"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"login",src:(0,a.Z)("/tip-request/login.jpg"),width:"300px"})),(0,o.kt)("p",null,"After selecting your HDX address in the popup, you will be asked to sign the message using your wallet and to set a display name for this wallet."),(0,o.kt)("p",null,"Once logged in, you need to create a new thread for your tip request. Navigate to the top-right part of the page and click on ",(0,o.kt)("em",{parentName:"p"},"New thread > New thread"),". You can also directly use this link: ",(0,o.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/new/thread"},"https://commonwealth.im/hydradx/new/thread"),"."),(0,o.kt)("p",null,"You can use the title of the thread to indicate the subject (tip request) and the topic of the contribution. In the body of the thread, please provide the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Period when the contribution was made"),(0,o.kt)("li",{parentName:"ul"},"A brief summary of the contribution"),(0,o.kt)("li",{parentName:"ul"},"The amount of the requested tip (in HDX)"),(0,o.kt)("li",{parentName:"ul"},"Time spent on the contribution (in hours)"),(0,o.kt)("li",{parentName:"ul"},"If needed, a more detailed description including the relevance of the contribution to HydraDX")),(0,o.kt)("p",null,"For reference, you can take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/proposal/discussion/1165-tip-request-add-documentation-for-staking"},"this example tip request"),"."),(0,o.kt)("p",null,"After filling out the information, post the thread and it should become available in the general list."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Nominators and validators who overbonded their HDX and got "stuck" can request a Treasury tip of 1 HDX which will allow them to unbond some of their tokens. If this applies to your case, please create a Commonwealth thread following ',(0,o.kt)("a",{parentName:"p",href:"https://commonwealth.im/hydradx/proposal/discussion/1166-tip-request-overbonded-staker"},"this example"),"."))),(0,o.kt)("h2",{id:"02-submit-on-chain"},"02 Submit the Tip Request On-Chain"),(0,o.kt)("p",null,"After publishing your Treasury tip request, you need to submit it on-chain. For this purpose, your wallet needs to hold a small amount of HDX to cover the transaction fees. If you currently do not hold any HDX, you do not need to execute this step - someone else will submit your tip request on-chain for you."),(0,o.kt)("p",null,"Treasury tip requests can be submitted on-chain with Polkadot/apps using the following link: ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/treasury/tips"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/treasury/tips"),"."),(0,o.kt)("p",null,"To submit a new tip request, click on ",(0,o.kt)("em",{parentName:"p"},"Propose tip")," and provide the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"submit with account")," - select the account which will sign the transaction for submitting the tip request on-chain. This account needs to hold a small amount of HDX for transaction costs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"beneficiary")," - select or enter the address of the account which will receive the Treasury tip. This account must correspond to the account which opened the Commonwealth thread."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tip reason")," - provide a URL to the Commonwealth thread.")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"login",src:(0,a.Z)("/tip-request/submit-on-chain.jpg")})),(0,o.kt)("p",null,"To submit the tip request, click on ",(0,o.kt)("em",{parentName:"p"},"Propose tip")," and sign the transaction. "),(0,o.kt)("p",null,"Once the transaction is confirmed, you should see the tip request on the overview page."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"login",src:(0,a.Z)("/tip-request/tip-requests.jpg")})))}c.isMDXComponent=!0}}]);