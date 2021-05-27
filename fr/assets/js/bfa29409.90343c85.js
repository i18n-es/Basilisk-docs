(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[751],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2393:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"dev_pallet_hdx",title:"HDX Pallet"},l={unversionedId:"dev_pallet_hdx",id:"dev_pallet_hdx",isDocsHomePage:!1,title:"HDX Pallet",description:"Overview",source:"@site/docs/dev_pallet_hdx.md",sourceDirName:".",slug:"/dev_pallet_hdx",permalink:"/fr/dev_pallet_hdx",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/dev_pallet_hdx.md",version:"current",frontMatter:{id:"dev_pallet_hdx",title:"HDX Pallet"},sidebar:"sidebar",previous:{title:"XYK Pallet",permalink:"/fr/xyk"},next:{title:"Exchange",permalink:"/fr/dev_pallet_exchange"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Config",id:"config",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Extrinsics",id:"extrinsics",children:[]},{value:"sell / buy",id:"sell--buy",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Config: frame_system::Config + pallet_asset_registry::Config {\n    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;\n\n    /// Multi currency for transfer of currencies\n    type Currency: MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>;\n\n    /// Weight information for the extrinsics.\n    type WeightInfo: WeightInfo;\n\n    /// Trading fee rate\n    type GetExchangeFee: Get<fee::Fee>;\n}\n")),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"In XYK pool implementation - there is a new pool created for each asset pair. In HDX, we have only one pool."),(0,i.kt)("p",null,"Therefore, storage needed is little different:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"PoolAddress"),"\nPool account which must be set in genesis state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub type PoolAddress<T: Config> = StorageValue<_, T::AccountId, ValueQuery>;\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Assets"),"\nAssets in the pool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub type Assets<T: Config> = StorageMap<_, Blake2_128Concat, AssetId, (AssetId, Balance), OptionQuery>;\n")),(0,i.kt)("p",null,"This holds all the information for an asset in the pool. The value is a tuple (AssetId, Balance) where the first element is\nID assigned by asset registry, and the select element is current weight of the asset in the pool."),(0,i.kt)("h3",{id:"extrinsics"},"Extrinsics"),(0,i.kt)("h4",{id:"add_token"},"add_token"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_token(\n    origin: OriginFor<T>,\n    asset: AssetId,\n    amount: Balance,\n    initial_price: Price,\n) -> DispatchResultWithPostInfo {}\n")),(0,i.kt)("p",null,"Add new token to the pool with initial liquidity given by amount and initial price."),(0,i.kt)("h4",{id:"addremove-liquidity"},"add/remove liquidity"),(0,i.kt)("p",null,"Add and remove liquidity are easy to understand."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn add_liquidity(origin: OriginFor<T>, asset: AssetId, amount: Balance) -> DispatchResultWithPostInfo {}\npub fn remove_liquidity(origin: OriginFor<T>, asset: AssetId, amount: Balance) -> DispatchResultWithPostInfo {}\n")),(0,i.kt)("h3",{id:"sell--buy"},"sell / buy"),(0,i.kt)("p",null,"Sell and buy extrinsics are actually the same as the ones in xyk pallet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"}," #[pallet::weight(<T as Config>::WeightInfo::sell())]\npub fn sell(\n    origin: OriginFor<T>,\n    asset_in: AssetId,\n    asset_out: AssetId,\n    amount: Balance,\n    max_limit: Balance,\n    discount: bool,\n) -> DispatchResultWithPostInfo {\n    let who = ensure_signed(origin)?;\n\n    <Self as AMM<_, _, _, _>>::sell(&who, AssetPair { asset_in, asset_out }, amount, max_limit, discount)?;\n\n    Ok(().into())\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"}," #[pallet::weight(<T as Config>::WeightInfo::buy())]\npub fn buy(\n    origin: OriginFor<T>,\n    asset_out: AssetId,\n    asset_in: AssetId,\n    amount: Balance,\n    max_limit: Balance,\n    discount: bool,\n) -> DispatchResultWithPostInfo {\n    let who = ensure_signed(origin)?;\n\n    <Self as AMM<_, _, _, _>>::buy(&who, AssetPair { asset_in, asset_out }, amount, max_limit, discount)?;\n\n    Ok(().into())\n}\n")))}c.isMDXComponent=!0}}]);