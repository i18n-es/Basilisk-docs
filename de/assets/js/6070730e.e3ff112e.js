(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[32],{3905:function(e,n,i){"use strict";i.d(n,{Zo:function(){return u},kt:function(){return h}});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function d(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=t.createContext({}),l=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):d(d({},n),e)),i},u=function(e){var n=l(e.components);return t.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(i),h=r,g=c["".concat(o,".").concat(h)]||c[h]||m[h]||a;return i?t.createElement(g,d(d({ref:n},u),{},{components:i})):t.createElement(g,d({ref:n},u))}));function h(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,d=new Array(a);d[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,d[1]=s;for(var l=2;l<a;l++)d[l]=i[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},3919:function(e,n,i){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!t(e)}i.d(n,{b:function(){return t},Z:function(){return r}})},4996:function(e,n,i){"use strict";i.d(n,{C:function(){return a},Z:function(){return d}});var t=i(2263),r=i(3919);function a(){var e=(0,t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,i=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,i,t){var a=void 0===t?{}:t,d=a.forcePrependBaseUrl,s=void 0!==d&&d,o=a.absolute,l=void 0!==o&&o;if(!i)return i;if(i.startsWith("#"))return i;if((0,r.b)(i))return i;if(s)return n+i;var u=i.startsWith(n)?i:n+i.replace(/^\//,"");return l?e+u:u}(a,i,e,n)}}}function d(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},8137:function(e,n,i){"use strict";i.r(n),i.d(n,{frontMatter:function(){return d},metadata:function(){return s},toc:function(){return o},default:function(){return u}});var t=i(2122),r=i(9756),a=(i(7294),i(3905)),d=(i(4996),{id:"staking",title:"Staking"}),s={unversionedId:"staking",id:"staking",isDocsHomePage:!1,title:"Staking",description:"Dieser Abschnitt dient als kurze Einf\xfchrung wie Staking im HydraDX Netzwerk funktioniert. Wenn Sie bisher keinerlei Erfahrung mit dem Staking in Substrate Netzwerken haben, empfehlen wir, dass Sie dies lesen bevor Sie sich entschlie\xdfen, teilzunehmen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/staking.md",sourceDirName:".",slug:"/staking",permalink:"/de/staking",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/staking.md",version:"current",frontMatter:{id:"staking",title:"Staking"},sidebar:"sidebar",previous:{title:"Mit einer \xf6ffentlichen Node verbinden",permalink:"/de/polkadotjs_apps_public"},next:{title:"Staking Rewards",permalink:"/de/staking_rewards"}},o=[{value:"Validatoren",id:"validators",children:[]},{value:"Nominatoren",id:"nominators",children:[]}],l={toc:o};function u(e){var n=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dieser Abschnitt dient als kurze Einf\xfchrung wie Staking im HydraDX Netzwerk funktioniert. Wenn Sie bisher keinerlei Erfahrung mit dem Staking in Substrate Netzwerken haben, empfehlen wir, dass Sie dies lesen bevor Sie sich entschlie\xdfen, teilzunehmen.\nDer Mechanismus des HydraDX Stakings funktioniert im Kern nach dem NPoS (Nominated-Proof-of-Stake). NPoS ist eine Variation des Proof-of-Stakes und wird in Substrate-basierten Netzwerken verwendet wie beispielsweise Polkadot und Kusama. Die zwei zentralen S\xe4ulen im NPoS sind die ",(0,a.kt)("a",{parentName:"p",href:"#validators"},(0,a.kt)("strong",{parentName:"a"},"Validatoren"))," und die ",(0,a.kt)("a",{parentName:"p",href:"#nominators"},(0,a.kt)("strong",{parentName:"a"},"Nominatoren")),"."),(0,a.kt)("h3",{id:"validators"},"Validatoren"),(0,a.kt)("p",null,"Die Validatoren betreiben die Validator Nodes im Netzwerk, welche die Infrastruktur f\xfcr das HydraDX Netzwerk bereistellen um sicher funktionieren zu k\xf6nnen. Validator Nodes erf\xfcllen drei \xe4u\xdferst wichtige Funktionen. Erstens validieren Sie die Informationen in den Blocks, wie beispielsweise die Identit\xe4t der Parteien oder den Inhalt der Vertr\xe4ge. Zweitens nehmen Validatoren an dem Prozess der Produktion neuer Blocks teil basierend auf den Validit\xe4tsbest\xe4tigungen der anderen Validatoren. Drittens garantieren sie die Endg\xfcltigkeit von Blockchain Transaktionen.\nEine wichtige Eigenschaft des NPoS ist, dass nicht alle Validatoren an dem Validierungsprozess gleichzeitig teilnehmen. Lediglich jene Validatoren, die im ",(0,a.kt)("em",{parentName:"p"},"aktiven Validator Set")," sind, f\xfchren die oben genannten Vorg\xe4nge durch und verdienen dadurch Belohnungen. Die Gruppe der aktiven Validatoren ist beschr\xe4nkt durch die feste Anzahl der Nodes. Im ",(0,a.kt)("a",{parentName:"p",href:"/snakenet"},"HydraDX Snakenet")," erwarten wir eine Anzahl von ungef\xe4hr 300 Nodes, mit dem Plan der Erweiterung auf dem Weg hin zum Mainnet.\nValidatoren werden nach dem Prinzip der ",(0,a.kt)("em",{parentName:"p"},"proportional justified representation")," in das aktive Set gew\xe4hlt. Dieses Prinzip sch\xfctzt die Dezentralisierung und die faire Repr\xe4sentation indem die verf\xfcgbaren Slots im Verh\xe4ltnis zu der Menge an gestaketen Token verteilt werden. In anderen Worten, je mehr Token bei einem Validator gestaket sind, desto h\xf6her die Wahrscheinlichkeit ist, dass diese Node in das aktive Set von Validatoren gew\xe4hlt wird. Validatoren, welche nicht im aktiven Set sind, kommen auf eine Warteliste. Das Set von aktiven Validatoren wird zum Beginn jeder \xc4ra aktualisiert, wodurch jeder neue Validator die M\xf6glichkeit erhalten sollte, ins aktive Set aufgenommen zu werden."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In einem Substrate-basierten Netzwerk ist die Zeit in ",(0,a.kt)("strong",{parentName:"p"},"\xc4ras")," eingeteilt. Im ",(0,a.kt)("a",{parentName:"p",href:"/snakenet"},"HydraDX Snakenet")," dauert eine \xc4ra 24 Stunden."))),(0,a.kt)("p",null,"Das Betreiben und Erstellen einer Validator Node setzt ein gewisses Ma\xdf an technischen F\xe4higkeiten voraus, die ben\xf6tigt werden um den fehlerfreien Betrieb der Node zu gew\xe4hrleisten. Wenn Sie sich mit Validator Nodes nicht auskennen empfehlen wir, dass Sie einen erfahrenen Validator ",(0,a.kt)("a",{parentName:"p",href:"/start_nominating"},"mit Ihren HDX nominieren"),". Wenn Sie allerdings der Meinung sind, das n\xf6tige technische Know-How mitzubringen, k\xf6nnen Sie sich gerne unsere ",(0,a.kt)("a",{parentName:"p",href:"/node_setup"},"Validator Anleitung")," ansehen."),(0,a.kt)("h3",{id:"nominators"},"Nominatoren"),(0,a.kt)("p",null,"Nominatoren helfen das Netzwerk sicherer zu machen, indem sie Validatoren nominieren, damit diese wiederum ins aktive Validator Set gew\xe4hlt werden. Dies tun die Nominatoren indem sie ihre HDX Token bei einem Validator ihrer Wahl staken. Das Nominieren bedarf nicht dem Betrieb einer Node, was diesen Vorgang ideal f\xfcr Einsteiger macht. Token, die gestaked wurden, sind ",(0,a.kt)("em",{parentName:"p"},"gebunden"),". Das bedeutet, dass diese eingefroren sind und nicht f\xfcr andere Zwecke einsetzbar sind. Es ist wohl jederzeit m\xf6glich die Nominierung zu stoppen, allerdings wird dies immer erst am Ende der laufenden \xc4ra aktiv. Es ist auch m\xf6glich, Ihre Token teilweise oder vollst\xe4ndig zu entbinden, in welchem Fall die Token Ihnen erst nach Ablauf von 28 Tagen zur Verf\xfcgung stehen werden.\nVor dem Nominieren sollten Sie sich \xfcber die Validatoren, die Sie in Betracht ziehen, ausgiebig informieren. Dies k\xf6nnen Sie zum Beispiel tun, durch die Performance des Validators in der Vergangenheit zu \xfcberpr\xfcfen, wie zum Beispiel die \xc4ra Points, die vergangenen Rewards oder die H\xe4ufigkeit von Slashing. Zum Beginn des Snakenets kann es schwierig sein an all diese Informationen zu kommen. Im Zweifel k\xf6nnen Sie gerne in unserem Discord vorbeischauen und wir teilen unsere von der Community erstellte Liste mit vertrauensw\xfcrdigen Validatoren.\nEin weiterer Punkt, der bei der Wahl eines Validators zu erw\xe4gen ist, ist dessen ",(0,a.kt)("em",{parentName:"p"},"Kommission"),". Dieser Wert in Prozent gibt an wieviel die Nominatoren von Ihren Rewards an den Validator abgeben m\xfcssen daf\xfcr, dass Sie dessen Node verwenden. Die niedrigste Kommission ist nicht immer die beste - denn das Betreiben einer Node ist mit hohen Betriebskosten verbunden, die der Validator auch nur mit Hilfe einer realistischen Kommission decken kann.\nIn HydraDX ist es m\xf6glich ",(0,a.kt)("strong",{parentName:"p"},"maximal 16 Validatoren")," mit Ihren Token zu nominieren. Wenn Sie mehr als einen Validator nominieren bedeutet dies nicht direkt, dass Ihr Stake allen von Ihnen gew\xe4hlten Validatoren gleichzeitig zugewiesen wird. Zum Beginn einer neuen \xc4ra wird durch eine Abfolge mehrerer komplexer Algorithmen die optimale Verteilung aller Nominierungen festgestellt, um letztendlich entscheiden zu k\xf6nnen, welche Validatoren in das aktive Set der Validatoren aufgenommen werden. Wenn keiner der von Ihnen gew\xe4hlten Validatoren ins aktive Set gelangt, bleiben Ihre Nominierungen inaktiv f\xfcr diese \xc4ra (24 Stunden) und Sie erhalten auch keine Rewards f\xfcr Ihre inaktive Nominierungen. Um Ihre Chancen zu maximieren, dass Ihr Stake in das aktive Set von Validatoren landet, empfehlen wir sehr, dass Sie ",(0,a.kt)("strong",{parentName:"p"},"mehrere Validatoren nominieren"),", das wiederum der Dezentralisierung zugute kommt."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Beachten Sie, dass Sie keine Validatoren nominieren sollten, die bereits voll oder \xfcberf\xfcllt sind. Momentan gibt es pro Validator ein ",(0,a.kt)("strong",{parentName:"p"},"Limit von 64 Nominierungen"),", bei mehr ist er \xfcberbelegt. Wenn die neue \xc4ra beginnt wird ein \xfcberbelegter Validator nur mit der maximalen Nominierungsanzahl aktiv. Wenn dies passiert bleiben die h\xf6chsten Nominierungen erhalten, w\xe4hrend die Nominierungen mit den niedrigsten Stakingbetr\xe4gen nicht beachtet werden und keine Rewards erhalten.\nNominieren ist eine einfachere Art des Stakings, allerdings birgt es auch Risiken. Validatoren, die sich nicht an die Regeln halten, k\xf6nnten mit Slashing bestraft werden, was zum teilweisen oder kompletten Verlust des Kapitals des Validators und der Nominatoren f\xfchren kann. Nominieren Sie deshalb nur bekannte und bew\xe4hrte Validator Nodes."))),(0,a.kt)("p",null,"Haben Sie Interesse Ihre HDX Token zu staken indem Sie Nominator werden? Dann k\xf6nnte Ihnen ",(0,a.kt)("a",{parentName:"p",href:"/start_nominating"},"unser Nominator Guide")," weiterhelfen."))}u.isMDXComponent=!0}}]);