(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[222],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4756:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={id:"dev_pallet_exchange",title:"Exchange"},s={unversionedId:"dev_pallet_exchange",id:"dev_pallet_exchange",isDocsHomePage:!1,title:"Exchange",description:"Overview",source:"@site/docs/dev_pallet_exchange.md",sourceDirName:".",slug:"/dev_pallet_exchange",permalink:"/cn/dev_pallet_exchange",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/dev_pallet_exchange.md",version:"current",frontMatter:{id:"dev_pallet_exchange",title:"Exchange"},sidebar:"sidebar",previous:{title:"HDX Pallet",permalink:"/cn/dev_pallet_hdx"},next:{title:"Transaction Multi-Payment",permalink:"/cn/dev_pallet_payment"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Config",id:"config",children:[]},{value:"Intention id",id:"intention-id",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Dispatchables",id:"dispatchables",children:[]},{value:"on_initialize",id:"on_initialize",children:[]},{value:"on_finalize and order matching algorithm",id:"on_finalize-and-order-matching-algorithm",children:[]},{value:"Direct trade",id:"direct-trade",children:[]},{value:"Determining the resolution of an intention",id:"determining-the-resolution-of-an-intention",children:[]},{value:"validate and execute",id:"validate-and-execute",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The exchange pallet handles the HydraDX order matching implementation."),(0,o.kt)("p",null,"You can check out the following presentation to learn some fundamentals about the HydraDX exchange concept."),(0,o.kt)("p",null,"Presentation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=RnOJNjjuMJQ"},"Video")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1mFWDOXrZ1Z5iZ_yGc-FyTu1FosDQeuEOi4VNkxutXZ4/edit#slide=id.gc8e33d26a6_0_50"},"Slides")),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("p",null,"The Exchange pallet config has the following types which are needed for the pallet to work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::config]\npub trait Config: frame_system::Config {\n    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;\n\n    /// AMM pool implementation\n    type AMMPool: AMM<Self::AccountId, AssetId, AssetPair, Balance>;\n\n    /// Intention resolver\n    type Resolver: Resolver<Self::AccountId, Intention<Self>, Error<Self>>;\n\n    /// Currency for transfers\n    type Currency: MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>\n        + MultiReservableCurrency<Self::AccountId>;\n\n    /// Weight information for the extrinsics.\n    type WeightInfo: WeightInfo;\n}\n")),(0,o.kt)("p",null,"AMMPool is an implementation of an AMM pool which is used to resolve a transaction or a partial transaction if it can't be directly traded with another transaction."),(0,o.kt)("p",null,"Resolver determines how an intention should be resolved. Its interface is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Resolver<AccountId, Intention, E> {\n    /// Resolve an intention via AMM pool.\n    fn resolve_single_intention(intention: &Intention);\n\n    /// Resolve intentions by either directly trading with each other or via AMM pool.\n    /// Intention ```intention``` must be validated prior to call this function.\n    fn resolve_matched_intentions(pair_account: &AccountId, intention: &Intention, matched: &[Intention]);\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Resolver will be probably removed in the future from the config of the Exchange pallet."))),(0,o.kt)("h3",{id:"intention-id"},"Intention id"),(0,o.kt)("p",null,"Intention id is an unique identifier of an intention (surprise!). It helps to track and determine how a transaction/intention has been resolved. On the frontend, this information is used to notify users about transactions."),(0,o.kt)("p",null,"IntentionID is currently generated as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn generate_intention_id(account: &T::AccountId, c: u32, assets: &AssetPair) -> IntentionId<T> {\n    let b = <system::Pallet<T>>::current_block_number();\n    (c, \n        &account, \n        b, \n        assets.ordered_pair().0, \n        assets.ordered_pair().1).using_encoded(T::Hashing::hash)\n}\n")),(0,o.kt)("h3",{id:"storage"},"Storage"),(0,o.kt)("p",null,"The pallet has to keep track of all intentions for current block. Intention represents a sell or buy trade."),(0,o.kt)("p",null,"We use actual storage to store list of intentions for each asset pair:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub type ExchangeAssetsIntentions<T: Config> = StorageMap<_, Blake2_128Concat, \n    (AssetId, AssetId), \n    Vec<Intention<T>>, \n    ValueQuery>;\n")),(0,o.kt)("p",null,"A count for each asset pair is stored separately:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub type ExchangeAssetsIntentionCount<T: Config> = StorageMap<_, Blake2_128Concat, \n    (AssetId, AssetId), \n    u32, \n    ValueQuery>;\n")),(0,o.kt)("p",null,"However, this is never committed to the storage as it is cleared et end of the block in ",(0,o.kt)("inlineCode",{parentName:"p"},"on_finalize")," by removing all stored information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"ExchangeAssetsIntentionCount::<T>::remove_all();\nExchangeAssetsIntentions::<T>::remove_all();\n")),(0,o.kt)("h3",{id:"dispatchables"},"Dispatchables"),(0,o.kt)("h4",{id:"buy--sell"},"buy / sell"),(0,o.kt)("p",null,"Buy and sell work basically as proxy for an AMM pool implementation - whichever is configured to be used with Exchange. "),(0,o.kt)("p",null,"Instead of resolving the sell or buy transaction immediately, it registers the intention of a user to trade."),(0,o.kt)("p",null,"As in the hdx and xyk pallets, the sell and buy are nearly the same:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::weight(< T as Config >::WeightInfo::sell_intention() + < T as Config >::WeightInfo::on_finalize_for_one_sell_extrinsic() - < T as Config >::WeightInfo::known_overhead_for_on_finalize())]\npub fn sell(\n    origin: OriginFor<T>,\n    asset_sell: AssetId,\n    asset_buy: AssetId,\n    amount_sell: Balance,\n    min_bought: Balance,\n    discount: bool,\n) -> DispatchResultWithPostInfo {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::weight(<T as Config>::WeightInfo::buy_intention() + <T as Config>::WeightInfo::on_finalize_for_one_buy_extrinsic() -  <T as Config>::WeightInfo::known_overhead_for_on_finalize())]\npub fn buy(\n    origin: OriginFor<T>,\n    asset_buy: AssetId,\n    asset_sell: AssetId,\n    amount_buy: Balance,\n    max_sold: Balance,\n    discount: bool,\n) -> DispatchResultWithPostInfo {}\n")),(0,o.kt)("p",null,"After the intention is registered, an event is emitted with the intention id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"IntentionRegistered(T::AccountId, AssetId, AssetId, Balance, IntentionType, IntentionId<T>)\n")),(0,o.kt)("p",null,"The intention id helps to track resolution of the transaction."),(0,o.kt)("h3",{id:"on_initialize"},"on_initialize"),(0,o.kt)("p",null,"In Substrate, on finalize does not return weight due to the fact that it is done at the very end while the total block weight\nneeds to be known in advance. "),(0,o.kt)("p",null,"In the Exchange pallet, all the magic happens in the on_finalize therefore we need to include the known overhead as well.\non_initialize is called at the beginning, and it is possible to return some weight which should be taken into account. "),(0,o.kt)("p",null,"Exchange pallet takes this opportunity and returns known overhead for on finalize, as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"fn on_initialize(_n: T::BlockNumber) -> Weight {\n    T::WeightInfo::known_overhead_for_on_finalize()\n}\n")),(0,o.kt)("h3",{id:"on_finalize-and-order-matching-algorithm"},"on_finalize and order matching algorithm"),(0,o.kt)("p",null,"This is where the matching happens. When a block is finalized, we go through all the intentions for that block, try to match them and resolve them."),(0,o.kt)("p",null,"Intentions are grouped by the asset pairs involved in the transaction. For each asset pair, we retrieve the corresponding list of intentions. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let asset_a_ins = <ExchangeAssetsIntentions<T>>::get((asset_2, asset_1));\nlet asset_b_ins = <ExchangeAssetsIntentions<T>>::get((asset_1, asset_2));\n")),(0,o.kt)("p",null,"This means that all intentions in asset_a_ins are ",(0,o.kt)("em",{parentName:"p"},"SELL")," asset A transactions or ",(0,o.kt)("em",{parentName:"p"},"BUY")," asset A transactions.\nAll intentions in asset_b_ins are ",(0,o.kt)("em",{parentName:"p"},"SELL")," asset B transactions or ",(0,o.kt)("em",{parentName:"p"},"BUY")," asset B transactions."),(0,o.kt)("p",null,"The current algorithm takes asset_a_ins as a main group and for each transaction it tries to match as many transactions as possible from the asset_b_ins group."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This part could be improved to determine which group is better as main one (but this could have additional performance impact if not done right), subject to discussions."))),(0,o.kt)("p",null,"The sum of the amounts of all matched intentions must cover the selling amount of the main intention."),(0,o.kt)("p",null,"Let's have a look:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"for intention in a_ins {\n    if !Self::verify_intention(&intention) {\n        continue;\n    }\n\n    let mut bvec = Vec::<Intention<T>>::new();\n    let mut total = 0;\n\n    while let Some(matched) = b_copy.pop() {\n        bvec.push(matched.clone());\n        total += matched.amount_in;\n\n        if total >= intention.amount_in {\n        break;\n     }\n    }\n\n    T::Resolver::resolve_matched_intentions(pair_account, &intention, &bvec);\n}\n")),(0,o.kt)("p",null,"At this point we have one main intention, and some matched intentions (1 or more). We can resolve these and make trades happen\ndirectly between the accounts."),(0,o.kt)("p",null,"This is a very complicated part as several possible scenarios can occur. Let's break them down. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The matched intention can be traded directly and in full",(0,o.kt)("br",{parentName:"li"}),"This means that matched intention's amount is less than what's left in main intention's amount"),(0,o.kt)("li",{parentName:"ol"},"The matched intention CANNOT be traded directly and in full",(0,o.kt)("br",{parentName:"li"}),"This usually happens when resolving last matched intentions and main intention's amount is not enough to cover the amount in matched intention."),(0,o.kt)("li",{parentName:"ol"},"Exact match",(0,o.kt)("br",{parentName:"li"}),"Amounts in both intentions are the same - the trade can directly take place.")),(0,o.kt)("p",null,"Note that with respect to any of these 3 scenarios, the use-case must be differentiated: whether the intention is SELL or BUY, fee, rests etc."),(0,o.kt)("p",null,"Deep dive in the source code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-node/blob/5a3889345ad592f15b5f73aa8479bf6ec6a9a34e/pallets/exchange/src/lib.rs#L547"},"here"),"."),(0,o.kt)("h3",{id:"direct-trade"},"Direct trade"),(0,o.kt)("p",null,"Direct trade simply means that token amounts are exchanged directly between the accounts of each matched pair of transactions."),(0,o.kt)("h3",{id:"determining-the-resolution-of-an-intention"},"Determining the resolution of an intention"),(0,o.kt)("p",null,"Transactions can be resolved in multiple different ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"AMM trade - sell or buy transactions are resolved when trading through amm pool. This can happen when no matched transaction is found or there is some amount left to trade."),(0,o.kt)("li",{parentName:"ol"},"Direct trade - transaction is resolved by trading with another matched transaction."),(0,o.kt)("li",{parentName:"ol"},"Combination of 1 or 2 - transaction can be partially resolved by direct trade, and the rest can be exchanged via AMM pool."),(0,o.kt)("li",{parentName:"ol"},"Error - transaction can result in error due to various reasons (limits, not enough pool asset etc.)")),(0,o.kt)("p",null,"For each of those cases, a specific event is emitted with the intention id involved. By using intention id from IntentionRegistered event, it is possible to track how any given transaction has been resolved."),(0,o.kt)("h3",{id:"validate-and-execute"},"validate and execute"),(0,o.kt)("p",null,"You may have already noticed that intentions (or transactions) are only executed once they have been validated. This prevents that a transaction goes through the whoe matching algorithm only to fail at the end."))}d.isMDXComponent=!0}}]);