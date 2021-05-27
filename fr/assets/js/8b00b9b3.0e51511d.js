(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[981],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7583:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s={id:"dev_primitives",title:"Primitives Crate"},o={unversionedId:"dev_primitives",id:"dev_primitives",isDocsHomePage:!1,title:"Primitives Crate",description:"Overview",source:"@site/docs/dev_primitives.md",sourceDirName:".",slug:"/dev_primitives",permalink:"/fr/dev_primitives",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/dev_primitives.md",version:"current",frontMatter:{id:"dev_primitives",title:"Primitives Crate"},sidebar:"sidebar",previous:{title:"AMM Pools",permalink:"/fr/dev_pools"},next:{title:"HydraDX Math Crate",permalink:"/fr/dev_math"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Common Types",id:"common-types",children:[{value:"Asset",id:"asset",children:[]},{value:"Exchange",id:"exchange",children:[]},{value:"Traits",id:"traits",children:[]}]}],u={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The purpose of the primitives crate is to put all common types used in HydraDX or Basilisk at one place."),(0,i.kt)("h2",{id:"common-types"},"Common Types"),(0,i.kt)("p",null,"Among others, the following are worth mentioning:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AssetId")),(0,i.kt)("p",null,"Asset id type used in the system."),(0,i.kt)("p",null,"Current type: u32"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Balance")),(0,i.kt)("p",null,"Current type: u128"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Price")),(0,i.kt)("p",null,"Current type: FixedU128"),(0,i.kt)("h3",{id:"asset"},"Asset"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AssetPair")),(0,i.kt)("p",null,"Asset pair representation for AMM trades. This is a structure holding the ids of the assets involved in a trade."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'[cfg_attr(feature = "std", derive(Serialize, Deserialize))]\n#[derive(Debug, Encode, Decode, Copy, Clone, PartialEq, Eq, Default)]\npub struct AssetPair {\n    pub asset_in: AssetId,\n    pub asset_out: AssetId,\n}\n')),(0,i.kt)("p",null,"A couple of useful methods implemented for AssetPair:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn ordered_pair(&self) -> (AssetId,AssetId){...}\npub fn name(&self) -> Vec<u8>{...}\n")),(0,i.kt)("p",null,"The ordered_pair function returns a tuple where first asset id < second asset id."),(0,i.kt)("p",null,"The name function constructs a name for the asset pair. This might change slightly in the future because it currently has a hardcoded 'HDT' prefix."),(0,i.kt)("h3",{id:"exchange"},"Exchange"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IntentionType")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg_attr(feature = "std", derive(Serialize, Deserialize))]\n#[derive(Debug, Encode, Decode, Clone, Copy, PartialEq, Eq)]\npub enum IntentionType {\n    SELL,\n    BUY,\n}\n')),(0,i.kt)("p",null,"Defaults to SELL"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ExchangeIntention")),(0,i.kt)("p",null,"Structure which represents an intention for trade."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[cfg_attr(feature = "std", derive(Serialize, Deserialize))]\n#[derive(Encode, Decode, Default, Clone, PartialEq)]\npub struct ExchangeIntention<AccountId, Balance, IntentionID> {\n    pub who: AccountId,\n    pub assets: asset::AssetPair,\n    pub amount_in: Balance,\n    pub amount_out: Balance,\n    pub trade_limit: Balance,\n    pub discount: bool,\n    pub sell_or_buy: IntentionType,\n    pub intention_id: IntentionID,\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ExchangeIntention might be moved to the exchange pallet as it is only used in the exchange algorithm."))),(0,i.kt)("h3",{id:"traits"},"Traits"),(0,i.kt)("p",null,"An AMM trait is an interface which needs to be implemented by a pool in order to be able to plug it into the exchange pallet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait AMM<AccountId, AssetId, AssetPair, Amount> {\n    /// Check if both assets exist in a pool.\n    fn exists(assets: AssetPair) -> bool;\n\n    /// Return pair account.\n    fn get_pair_id(assets: AssetPair) -> AccountId;\n\n    /// Return list of active assets in a given pool.\n    fn get_pool_assets(pool_account_id: &AccountId) -> Option<Vec<AssetId>>;\n\n    /// Calculate spot price for asset a and b.\n    fn get_spot_price_unchecked(asset_a: AssetId, asset_b: AssetId, amount: Amount) -> Amount;                                                                                                         \n                                                                                                                                                                                                       \n    /// Sell trade validation                                                                                                                                                                          \n    /// Perform all necessary checks to validate an intended sale.                                                                                                                                     \n    fn validate_sell(                                                                                                                                                                                  \n        origin: &AccountId,                                                                                                                                                                            \n        assets: AssetPair,                                                                                                                                                                             \n        amount: Amount,                                                                                                                                                                                \n        min_bought: Amount,                                                                                                                                                                            \n        discount: bool,                                                                                                                                                                                \n    ) -> Result<AMMTransfer<AccountId, AssetPair, Amount>, frame_support::sp_runtime::DispatchError>;                                                                                                  \n                                                                                                                                                                                                       \n    /// Execute buy for given validated transfer.                                                                                                                                                      \n    fn execute_sell(transfer: &AMMTransfer<AccountId, AssetPair, Amount>) -> dispatch::DispatchResult;                                                                                                 \n                                                                                                                                                                                                       \n    /// Perform asset swap.                                                                                                                                                                            \n    /// Call execute following the validation.                                                                                                                                                         \n    fn sell(                                                                                                                                                                                           \n        origin: &AccountId,                                                                                                                                                                            \n        assets: AssetPair,                                                                                                                                                                             \n        amount: Amount,                                                                                                                                                                                \n        min_bought: Amount,                                                                                                                                                                            \n        discount: bool,                                                                                                                                                                                \n    ) -> dispatch::DispatchResult {                                                                                                                                                                    \n        Self::execute_sell(&Self::validate_sell(origin, assets, amount, min_bought, discount)?)?;                                                                                                      \n        Ok(())                                                                                                                                                                                         \n    }                                                                                                                                                                                                  \n                                                                                                                                                                                                       \n    /// Buy trade validation                                                                                                                                                                           \n    /// Perform all necessary checks to validate an intended buy.                                                                                                                                      \n    fn validate_buy(                                                                                                                                                                                   \n        origin: &AccountId,                                                                                                                                                                            \n        assets: AssetPair,                                                                                                                                                                             \n        amount: Amount,                                                                                                                                                                                \n        max_limit: Amount,\n        discount: bool,   \n    ) -> Result<AMMTransfer<AccountId, AssetPair, Amount>, frame_support::sp_runtime::DispatchError>;\n    \n    /// Execute buy for given validated transfer.\n    fn execute_buy(transfer: &AMMTransfer<AccountId, AssetPair, Amount>) -> dispatch::DispatchResult;\n    \n    /// Perform asset swap.\n    fn buy(\n        origin: &AccountId,\n        assets: AssetPair, \n        amount: Amount,   \n        max_limit: Amount,\n        discount: bool,   \n    ) -> dispatch::DispatchResult {\n        Self::execute_buy(&Self::validate_buy(origin, assets, amount, max_limit, discount)?)?;\n        Ok(())\n    }\n}    \n")))}c.isMDXComponent=!0}}]);