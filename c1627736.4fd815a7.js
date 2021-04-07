(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(87)),i=n(88),c={id:"start_validating",title:"Become a validator"},s={unversionedId:"start_validating",id:"start_validating",isDocsHomePage:!1,title:"Become a validator",description:"After setting up your HydraDX node, you need to bond HDX tokens and set the validator keys before you can start validating.",source:"@site/docs/start_validating.md",slug:"/start_validating",permalink:"/start_validating",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/start_validating.md",version:"current",sidebar:"sidebar",previous:{title:"Become a nominator",permalink:"/start_nominating"},next:{title:"Connect to a local node",permalink:"/polkadotjs_apps_local"}},l=[{value:"01 Bond HDX tokens",id:"01-bond-hdx-tokens",children:[]},{value:"02 Generate session keys",id:"02-generate-session-keys",children:[]},{value:"03 Set your session keys",id:"03-set-your-session-keys",children:[]},{value:"04 Make sure that your node is fully synced",id:"04-make-sure-that-your-node-is-fully-synced",children:[]},{value:"05 Start validating",id:"05-start-validating",children:[]},{value:"06 Check the status of your validator node",id:"06-check-the-status-of-your-validator-node",children:[]}],d={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"After ",Object(r.b)("a",{parentName:"p",href:"/node_setup"},"setting up your HydraDX node"),", you need to bond HDX tokens and set the validator keys before you can start validating."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Running a validator node requires a certain technical skillset needed for the proper setup of the node, and for guaranteeing its uptime. We also require validators to be always running the node using the latest stable release. If you are not sure what you are doing here, we recommend that you ",Object(r.b)("a",{parentName:"p",href:"/start_nominating"},"nominate your HDX")," to an experienced validator instead. By doing so, you protect yourself and your nominators against an involuntary loss of funds."))),Object(r.b)("h2",{id:"01-bond-hdx-tokens"},"01 Bond HDX tokens"),Object(r.b)("p",null,"In order to take part at the network as a validator node, you need to bond some amount of HDX tokens. If you do not have any HDX, it is not possible to participate in the ",Object(r.b)("em",{parentName:"p"},"initial")," stage of the testnet. However, some exciting news will be announced by the team in the upcoming weeks so stay posted and subscribe to our newsletter."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Are you still in possession of xHDX tokens that you bought during the Balancer LBP event? You first need to ",Object(r.b)("a",{parentName:"p",href:"/claim"},"claim your HDX")," before continuing."))),Object(r.b)("p",null,"To bond HDX, open Polkadot/apps, and connect to one of the ",Object(r.b)("a",{parentName:"p",href:"/polkadotjs_apps_public"},"public HydraDX RPC nodes"),". Make sure that you can see your account ",Object(r.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts"},"balance"),"."),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Bonded HDX tokens are at stake for guaranteeing the security of the network. Improper behavior of the validator node may be punished by slashing which can lead to an involuntary loss of funds. We strongly recommend that you only proceed if you really know what you are doing."))),Object(r.b)("p",null,"For the next step, go to ",Object(r.b)("em",{parentName:"p"},"Network")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Account actions")," > ",Object(r.b)("em",{parentName:"p"},"+ Stash")),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(i.a)("/validator-guide/bond-hdx-1.png")})),Object(r.b)("p",null,"After clicking the Stash button, you should see the bonding preferences with four editable fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"stash account"),": the account holding the majority of your HDX tokens. HDX will be staked from this account."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"controller account"),": an account holding a smaller portion of HDX needed to cover the fees associated with starting and stopping the process of validating."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"value bonded"),": the amount of HDX you are bonding. Do not bond all HDX that you have - instead, leave some to cover the transaction fees which occur later."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"payment destination"),": the account to which the validating rewards will be sent.")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Do not bond all your available HDX tokens. Leave a small reserve for covering the transactions fees. If you bond all HDX tokens that you have, you may not be able to sign the transaction for starting the validation process."))),Object(r.b)("p",null,"After adjusting the bonding preferences, click ",Object(r.b)("em",{parentName:"p"},"Bond")," and sign transaction to complete the bonding process."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"For security reasons, it is not recommended to have the same Stash and Controller accounts. However, since transfers are disabled on Snakenet, it is currently not possible to use separate accounts. We highly recommend that you switch to separate Stash and Controller accounts as soon as this becomes possible in the future."))),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(i.a)("/validator-guide/bond-hdx-2.png")})),Object(r.b)("h2",{id:"02-generate-session-keys"},"02 Generate session keys"),Object(r.b)("p",null,"The second step is to generate your session keys. The session keys are used to associate the validator node with your Controller account and the staked HDX. It is therefore important that they are set up correctly."),Object(r.b)("p",null,"To generate your session keys, run on the node:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'$ curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n\n# Example output\n{"jsonrpc":"2.0","result":"0x9257c7a88f94f858a6f477743b4180f0c9a0630a1cea85c3f47dc6ca78e503767089bebe02b18765232ecd67b35a7fb18fc3027613840f27aca5a5cc300775391cf298af0f0e0342d0d0d873b1ec703009c6816a471c64b5394267c6fc583c31884ac83d9fed55d5379bbe1579601872ccc577ad044dd449848da1f830dd3e45","id":1}\n')),Object(r.b)("p",null,"You can find your session keys under the ",Object(r.b)("em",{parentName:"p"},"result")," part of the output (",Object(r.b)("inlineCode",{parentName:"p"},"0x9257...")," in the example output above)."),Object(r.b)("h2",{id:"03-set-your-session-keys"},"03 Set your session keys"),Object(r.b)("p",null,"To associate the generated session keys with your Controller account, open in in the Polkadot/apps:\n",Object(r.b)("em",{parentName:"p"},"Developer")," > ",Object(r.b)("em",{parentName:"p"},"Extrinsics")),Object(r.b)("p",null,"Fill in the fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"using selected account"),": select your Controller account;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"submit the following extrinsic"),": select ",Object(r.b)("inlineCode",{parentName:"li"},"session")," on the left side and ",Object(r.b)("inlineCode",{parentName:"li"},"setKeys")," on the right;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"keys"),": enter your session keys from the previous step;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"proof"),": ",Object(r.b)("inlineCode",{parentName:"li"},"0"),".")),Object(r.b)("p",null,"To complete, click ",Object(r.b)("em",{parentName:"p"},"Submit Transaction")," and sign the transaction."),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(i.a)("/validator-guide/set-session-keys-1.png")})),Object(r.b)("h2",{id:"04-make-sure-that-your-node-is-fully-synced"},"04 Make sure that your node is fully synced"),Object(r.b)("p",null,"Before you continue, you should make sure that your node is running and that the synchronization process is fully complete. The most certain way to check the state of synchronization is directly on the node itself:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"\n$ journalctl -f -u hydradx-validator.service\n\n# The output will be similar to this\nMar 22 18:37:38 Ubuntu-2010-groovy-64-minimal hydra-dx[232761]: 2021-03-22 18:37:38  \ud83d\udca4 \nIdle (52 peers), best: #622028 (0x5f5a\u20261041), finalized #622025 (0x5b21\u2026a746), \u2b07 9.1kiB/s \u2b06 6.1kiB/s\n\n")),Object(r.b)("p",null,"You can compare the block number from the output (in the example above: ",Object(r.b)("inlineCode",{parentName:"p"},"#622025"),") with the current block number which you can find in ",Object(r.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/explorer"},"Polkadot/apps Explorer"),". At the time of writing, the current block is ",Object(r.b)("inlineCode",{parentName:"p"},"#622240"),", meaning that the node used for the example is not fully synced."),Object(r.b)("p",null,"Please wait until the block number shown in your local logs matches the current block number of the network."),Object(r.b)("h2",{id:"05-start-validating"},"05 Start validating"),Object(r.b)("p",null,"To start validating, navigate in Polkadot/apps:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Network")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Account actions")," > ",Object(r.b)("em",{parentName:"p"},"Validate")," (button next to your bonded HDX)"),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(i.a)("/validator-guide/validate-1.png")})),Object(r.b)("p",null,"After clicking on the ",Object(r.b)("em",{parentName:"p"},"Validate")," button you should see a popup called ",Object(r.b)("em",{parentName:"p"},"set validator preferences"),". Here, you need to set your ",Object(r.b)("em",{parentName:"p"},"reward commission percentage"),". This is the proportion of the rewards which will be paid out to you. The remaining rewards will be split across your nominators in accordance with their stake. If you decide to not take any reward commission, you can set the percentage to 0."),Object(r.b)("p",null,"To confirm, click ",Object(r.b)("em",{parentName:"p"},"Validate")," and sign the transaction."),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(i.a)("/validator-guide/validate-2.png")})),Object(r.b)("h2",{id:"06-check-the-status-of-your-validator-node"},"06 Check the status of your validator node"),Object(r.b)("p",null,"You can check the status of your validator node in the Polkadot/apps under:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Network")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Staking overview")),Object(r.b)("p",null,"This tab provides an overview of all active validators connected to the network. At the top, there is an indication of the amount of validator slots available, as well as the number of nodes that have signaled their intention to be a validator. You can confirm whether your node is in the waiting queue by clicking on the ",Object(r.b)("em",{parentName:"p"},"Waiting")," tab."),Object(r.b)("p",null,"Your validator node will remain in the waiting queue until it has been selected to be included in the validator set. The validator set is updated every era which allows for new nodes to be included, provided there are empty slots."),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(i.a)("/validator-guide/validate-3.png")})),Object(r.b)("p",null,"Thank you for supporting HydraDX by becoming a Snakenet validator! \ud83c\udf89"))}b.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(22),o=n(89);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,i=r.forcePrependBaseUrl,c=void 0!==i&&i,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(r,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},89:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}))}}]);