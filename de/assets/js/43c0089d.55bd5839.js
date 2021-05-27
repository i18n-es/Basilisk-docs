(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[48],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return h}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),d=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||i;return r?t.createElement(m,s(s({ref:n},l),{},{components:r})):t.createElement(m,s({ref:n},l))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3919:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}r.d(n,{b:function(){return t},Z:function(){return a}})},4996:function(e,n,r){"use strict";r.d(n,{C:function(){return i},Z:function(){return s}});var t=r(2263),a=r(3919);function i(){var e=(0,t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var i=void 0===t?{}:t,s=i.forcePrependBaseUrl,o=void 0!==s&&s,u=i.absolute,d=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return n+r;var l=r.startsWith(n)?r:n+r.replace(/^\//,"");return d?e+l:l}(i,r,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},4958:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var t=r(2122),a=r(9756),i=(r(7294),r(3905)),s=r(4996),o={id:"staking_claim_rewards",title:"Beanspruchen Ihrer Staking Rewards"},u={unversionedId:"staking_claim_rewards",id:"staking_claim_rewards",isDocsHomePage:!1,title:"Beanspruchen Ihrer Staking Rewards",description:'Am Ende jeder \xc4ra werden den Validator-Pools ihre Staking rewards zugewiesen, die aus Base rewards, Era points und Tipps bestehen. Diese "Rewards" werden jedoch nicht automatisch auf die Konten des Validators und seiner Nominatoren verteilt. Dies geschieht erst, nachdem die Einsatzpr\xe4mien durch **Beanspruchen einer Auszahlung** ausgezahlt wurden. Staking rewards_ m\xfcssen innerhalb von 84 Epochen beansprucht werden, nachdem sie verdient wurden. Nach Ablauf dieser Frist werden die relevanten Reward-Informationen aus Chain gel\xf6scht und der Validator-Pool kann seine Rewards f\xfcr diese Zeit nicht mehr erhalten.',source:"@site/i18n/de/docusaurus-plugin-content-docs/current/staking_claim_rewards.md",sourceDirName:".",slug:"/staking_claim_rewards",permalink:"/de/staking_claim_rewards",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/staking_claim_rewards.md",version:"current",frontMatter:{id:"staking_claim_rewards",title:"Beanspruchen Ihrer Staking Rewards"},sidebar:"sidebar",previous:{title:"Identit\xe4t festlegen",permalink:"/de/identity"},next:{title:"Request a Treasury Tip",permalink:"/de/tip_request"}},d=[{value:"Ausl\xf6sung der Auszahlung",id:"ausl\xf6sung-der-auszahlung",children:[]}],l={toc:d};function c(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Am Ende jeder \xc4ra werden den Validator-Pools ihre ",(0,i.kt)("a",{parentName:"p",href:"/staking_rewards"},"Staking rewards"),' zugewiesen, die aus Base rewards, Era points und Tipps bestehen. Diese "Rewards" werden jedoch nicht automatisch auf die Konten des Validators und seiner Nominatoren verteilt. Dies geschieht erst, nachdem die Einsatzpr\xe4mien durch ',(0,i.kt)("strong",{parentName:"p"},"Beanspruchen einer Auszahlung")," ausgezahlt wurden. ",(0,i.kt)("em",{parentName:"p"},"Staking rewards")," m\xfcssen ",(0,i.kt)("strong",{parentName:"p"},"innerhalb von 84 Epochen")," beansprucht werden, nachdem sie verdient wurden. Nach Ablauf dieser Frist werden die relevanten Reward-Informationen aus Chain gel\xf6scht und der Validator-Pool kann seine Rewards f\xfcr diese Zeit nicht mehr erhalten."),(0,i.kt)("p",null,"Das manuelle Beanspruchen einer Auszahlung innerhalb eines begrenzten Zeitraums ist ein wichtiges Sicherheitsmerkmal. Durch die Anforderung, dass f\xfcr jeden Validatorpool und f\xfcr jede Epoche eine Auszahlungstransaktion eingereicht wird, wird die Verteilung von Rewards auf mehrere Bl\xf6cke gew\xe4hrleistet. Wenn alle Rewards innerhalb eines Blocks an alle Validatoren und Nominatoren verteilt w\xfcrden, k\xf6nnte die Chain-Stabilit\xe4t  m\xf6glicherweise gef\xe4hrdet sein."),(0,i.kt)("h2",{id:"ausl\xf6sung-der-auszahlung"},"Ausl\xf6sung der Auszahlung"),(0,i.kt)("p",null,"Eine Auszahlung kann sowohl von Validatoren als auch von deren Nominatoren mithilfe von Polkadot / Apps problemlos ausgel\xf6st werden. Navigieren Sie bitte zu ",(0,i.kt)("em",{parentName:"p"},"Network > Staking > Payouts"),". Alternativ k\xf6nnen Sie den folgenden Link verwenden:\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/staking/payout"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/staking/payout")),(0,i.kt)("p",null,"Unter ",(0,i.kt)("em",{parentName:"p"},"My stashes"),", sollten Sie alle Rewards sehen, die f\xfcr die Auszahlung von gesetzten Token verf\xfcgbar sind, mit Angabe der jeweiligen Epochennummern. Durch Klicken auf ",(0,i.kt)("em",{parentName:"p"},"Payout all")," ist es m\xf6glich, eine Reihe von Transaktionen einzureichen, um alle verf\xfcgbaren Rewards f\xfcr die vergangenen Epochen zu erhalten."),(0,i.kt)("img",{src:(0,s.Z)("/staking-claim-rewards/payouts.jpg")}),(0,i.kt)("p",null,"Nach dem Ausl\xf6sen der Auszahlung werden Sie aufgefordert, die Transaktion(en) mit Ihrem HDX-Konto zu unterzeichnen. Nach der Best\xe4tigung werden Rewards f\xfcr die ausgew\xe4hlten Epochen an die jeweiligen Validatoren und deren Nominatoren verteilt."))}c.isMDXComponent=!0}}]);