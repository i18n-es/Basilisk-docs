(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[454],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1659:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var a=n(2122),i=n(9756),s=(n(7294),n(3905)),r={id:"dev_pallet_xyk",title:"XYK Pallet",slug:"/xyk"},o={unversionedId:"dev_pallet_xyk",id:"dev_pallet_xyk",isDocsHomePage:!1,title:"XYK Pallet",description:"Overview",source:"@site/docs/dev_pallet_xyk.md",sourceDirName:".",slug:"/xyk",permalink:"/es/xyk",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/dev_pallet_xyk.md",version:"current",frontMatter:{id:"dev_pallet_xyk",title:"XYK Pallet",slug:"/xyk"},sidebar:"sidebar",previous:{title:"Asset Registry",permalink:"/es/registry"},next:{title:"HDX Pallet",permalink:"/es/dev_pallet_hdx"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Config",id:"config",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Extrinsics",id:"extrinsics",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Uniswap AMM model implementation."),(0,s.kt)("p",null,"This pallet also implements the AMM trait which makes it possible to plug it into exchange pallet."),(0,s.kt)("h3",{id:"config"},"Config"),(0,s.kt)("p",null,"Config is pretty straight-forward."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Config: frame_system::Config + pallet_asset_registry::Config {\n    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;\n\n    /// Share token support\n    type AssetPairAccountId: AssetPairAccountIdFor<AssetId, Self::AccountId>;\n\n    /// Multi currency for transfer of currencies\n    type Currency: MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>;\n\n    /// Native Asset Id\n    type NativeAssetId: Get<AssetId>;    \n\n    /// Weight information for the extrinsics.\n    type WeightInfo: WeightInfo;\n\n    /// Trading fee rate\n    type GetExchangeFee: Get<fee::Fee>;\n}\n")),(0,s.kt)("h3",{id:"storage"},"Storage"),(0,s.kt)("p",null,"A pool is created for each asset pair. Information about the existing pools is kept in the following storage structures:"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"ShareToken")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub type ShareToken<T: Config> = StorageMap<_, Blake2_128Concat, \n    T::AccountId, \n    AssetId, \n    ValueQuery>;\n")),(0,s.kt)("p",null,"Mapping between a pool account and an asset id obtained from the registry."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"PoolAssets")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub type PoolAssets<T: Config> = StorageMap<_, \n    Blake2_128Concat, \n    T::AccountId, \n    (AssetId, AssetId), \n    ValueQuery>;\n")),(0,s.kt)("p",null,"Mapping between a pool account and a tuple of assets in this pool. This is useful only when listing existing pools and their assets (eg. for FE)."),(0,s.kt)("h3",{id:"extrinsics"},"Extrinsics"),(0,s.kt)("p",null,"This pallet has the following extrinsics:"),(0,s.kt)("h4",{id:"create_pool"},"create_pool"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::weight(<T as Config>::WeightInfo::create_pool())]\n#[transactional]\npub fn create_pool(\n    origin: OriginFor<T>,\n    asset_a: AssetId,\n    asset_b: AssetId,\n    amount: Balance,\n    initial_price: Price,\n) -> DispatchResultWithPostInfo {}\n")),(0,s.kt)("p",null,"As the name suggests, this creates a pool between asset A and asset B (if such pool does not already exist) with initial liquidity determined by the amount and initial price.\nIt generates a name for this asset pair and asks the registry to return an id for the name (either assigning a new one or reusing a previously assigned name, if such pool existed)."),(0,s.kt)("p",null,"It also constructs a pool account for this pair and stores the mapping in storage under ShareToken as described above. "),(0,s.kt)("p",null,'You may ask "How do we know the account if we add liquidity for example"? Constructing the pool account id is deterministic, so adding liquidity into the pool of  asset A and B would generate the same account id. This is demonstrated in the following example:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'fn from_assets(asset_a: AssetId, asset_b: AssetId) -> T::AccountId {\n    let mut buf = Vec::new();\n    buf.extend_from_slice(b"hydradx");\n    if asset_a < asset_b {\n        buf.extend_from_slice(&asset_a.to_le_bytes());\n        buf.extend_from_slice(&asset_b.to_le_bytes());\n    } else {\n        buf.extend_from_slice(&asset_b.to_le_bytes());\n        buf.extend_from_slice(&asset_a.to_le_bytes());\n    }\n    T::AccountId::unchecked_from(T::Hashing::hash(&buf[..]))\n}\n')),(0,s.kt)("h4",{id:"add_liquidity"},"add_liquidity"),(0,s.kt)("h4",{id:"remove_liquidity"},"remove_liquidity"),(0,s.kt)("p",null,"Add and remove liquidity are pretty straight-forward and easy to understand by checking the implementation."),(0,s.kt)("h4",{id:"buy--sell"},"buy / sell"),(0,s.kt)("p",null,"Probably the most interesting part of the pallet. Sell and buy are very similar however they differ in few minor details - what and how is checked\nwhen resolving the transaction (mostly multiple limits)."),(0,s.kt)("p",null,"Sell:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::weight(<T as Config>::WeightInfo::sell())]\npub fn sell(\n    origin: OriginFor<T>,\n    asset_in: AssetId,\n    asset_out: AssetId,\n    amount: Balance,\n    min_limit: Balance,\n    discount: bool,\n) -> DispatchResultWithPostInfo {\n    let who = ensure_signed(origin)?;\n\n    <Self as AMM<_, _, _, _>>::sell(&who, AssetPair { asset_in, asset_out }, amount, min_limit, discount)?;\n\n    Ok(().into())\n}\n")),(0,s.kt)("p",null,"In the case of sell, the user specifies min_limit of an asset_out which should be exchanged for a certain amount of asset_in."),(0,s.kt)("p",null,"buy:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::weight(<T as Config>::WeightInfo::buy())]\npub fn buy(\n    origin: OriginFor<T>,\n    asset_out: AssetId,\n    asset_in: AssetId,\n    amount: Balance,\n    max_limit: Balance,\n    discount: bool,\n) -> DispatchResultWithPostInfo {\n    let who = ensure_signed(origin)?;\n\n    <Self as AMM<_, _, _, _>>::buy(&who, AssetPair { asset_in, asset_out }, amount, max_limit, discount)?;\n\n    Ok(().into())\n}\n")),(0,s.kt)("p",null,"In the case of buy, the user specifies max_limit of an asset_in to be exchanged for a certain amount of asset_out."),(0,s.kt)("p",null,"If you look at the implementation of the buy/sell functions, you will see that they make calls under the hood to the AMM trait implementation for this pallet. This helps with avoiding code duplication and making this pallet easily usable in an exchange."))}c.isMDXComponent=!0}}]);