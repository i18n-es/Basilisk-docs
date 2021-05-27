(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[824],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||s;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9470:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var n=r(2122),a=r(9756),s=(r(7294),r(3905)),i={id:"dev_pallet_asset_registry",title:"Asset Registry",slug:"/registry"},o={unversionedId:"dev_pallet_asset_registry",id:"dev_pallet_asset_registry",isDocsHomePage:!1,title:"Asset Registry",description:"Overview",source:"@site/docs/dev_pallet_asset_registry.md",sourceDirName:".",slug:"/registry",permalink:"/cn/registry",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/dev_pallet_asset_registry.md",version:"current",frontMatter:{id:"dev_pallet_asset_registry",title:"Asset Registry",slug:"/registry"},sidebar:"sidebar",previous:{title:"Intro",permalink:"/cn/dev_pallets"},next:{title:"XYK Pallet",permalink:"/cn/xyk"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Details",id:"details",children:[]}],p={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"overview"},"Overview"),(0,s.kt)("p",null,"This pallet provides the functionality to create, store and keep track of the existing assets on the chain."),(0,s.kt)("h3",{id:"storage"},"Storage"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"CoreAssetId")),(0,s.kt)("p",null,"Id of the core asset in the system."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n#[pallet::getter(fn core_asset_id)]\npub type CoreAssetId<T: Config> = StorageValue<_, T::AssetId, ValueQuery>;\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"NextAssetId")," "),(0,s.kt)("p",null,"Next asset id to be assigned for an asset. It is incremented each time a new asset is added to the registry."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n#[pallet::getter(fn next_asset_id)]\npub type NextAssetId<T: Config> = StorageValue<_, T::AssetId, ValueQuery>;\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"AssetIds")),(0,s.kt)("p",null,"Assets currently present in the system. It represents a mapping between the name of the asset and its id."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n#[pallet::getter(fn asset_ids)]\npub type AssetIds<T: Config> = StorageMap<_, Twox64Concat, Vec<u8>, Option<T::AssetId>, ValueQuery>;\n")),(0,s.kt)("h3",{id:"details"},"Details"),(0,s.kt)("p",null,"Asset registry provides one method which gets or creates an asset. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get_or_create_asset(name: Vec<u8>) -> Result<T::AssetId, DispatchError> {}\n")),(0,s.kt)("p",null,"Given a name, the pallet checks whether an asset with the provided name already exists. If not, it generates next asset id and stores it in a map together with the name."))}c.isMDXComponent=!0}}]);