(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[51],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6331:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),c={id:"dev_pallet_payment",title:"Transaction Multi-Payment"},o={unversionedId:"dev_pallet_payment",id:"dev_pallet_payment",isDocsHomePage:!1,title:"Transaction Multi-Payment",description:"Overview",source:"@site/docs/dev_pallet_payment.md",sourceDirName:".",slug:"/dev_pallet_payment",permalink:"/dev_pallet_payment",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/dev_pallet_payment.md",version:"current",frontMatter:{id:"dev_pallet_payment",title:"Transaction Multi-Payment"},sidebar:"sidebar",previous:{title:"Exchange",permalink:"/dev_pallet_exchange"},next:{title:"Writing Docs",permalink:"/contributing"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Config",id:"config",children:[]},{value:"Payment for setting a currency",id:"payment-for-setting-a-currency",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Extrinsics",id:"extrinsics",children:[]},{value:"Fee payment",id:"fee-payment",children:[]}],l={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This pallet provides the functionality to accept transaction fees in other currencies."),(0,i.kt)("p",null,"It extends Substrate's ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction-payment")," pallet."),(0,i.kt)("p",null,"Transaction fees are paid in native currency by default. This pallet allows to set a different currency to pay fees with. "),(0,i.kt)("p",null,"When the transaction fees are being paid and the chosen currency is not native currency, a swap is executed to obtain fee amount in native currency first."),(0,i.kt)("p",null,"The swap (or buy) is done via selected AMM pool."),(0,i.kt)("p",null,"Subsequently, the fee is paid in the native currency."),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Config: frame_system::Config + pallet_transaction_payment::Config {\n    /// Because this pallet emits events, it depends on the runtime's definition of an event.\n    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;\n\n    /// The currency type in which fees will be paid.\n    type Currency: Currency<Self::AccountId> + Send + Sync;\n\n    /// Multi Currency\n    type MultiCurrency: MultiCurrency<Self::AccountId>\n        + MultiCurrencyExtended<Self::AccountId, CurrencyId = AssetId, Balance = Balance, Amount = Amount>;\n\n    /// AMM pool to swap for native currency\n    type AMMPool: AMM<Self::AccountId, AssetId, AssetPair, Balance>;\n\n    /// Weight information for the extrinsics.\n    type WeightInfo: WeightInfo;\n\n    /// Should fee be paid for setting a currency\n    type WithdrawFeeForSetCurrency: Get<Pays>;\n\n    /// Convert a weight value into a deductible fee based on the currency type.\n    type WeightToFee: WeightToFeePolynomial<Balance = Balance>;\n}\n")),(0,i.kt)("p",null,"Currency deals with the native asset while MultiCurrency deals with all other currencies in the system."),(0,i.kt)("p",null,"AMMPool is again (like with exchange pallet) an implementation of AMM pool which will be used to swap non-native currency for native."),(0,i.kt)("h3",{id:"payment-for-setting-a-currency"},"Payment for setting a currency"),(0,i.kt)("p",null,"We want to allow users to set currency even if they don't have any native currency. THerefore, the tx fee payment is set to ",(0,i.kt)("em",{parentName:"p"},"Pays::No")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::weight((<T as Config>::WeightInfo::set_currency(), DispatchClass::Normal, Pays::No))]\n#[transactional]\npub fn set_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}\n")),(0,i.kt)("p",null,"However, the fee is withdrawn when currency is successfully set. It is a fixed fee consisting of base fee and set_currency weight."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn withdraw_set_fee(who: &T::AccountId, currency: AssetId) -> DispatchResult {\n    let base_fee = Self::weight_to_fee(T::BlockWeights::get().get(DispatchClass::Normal).base_extrinsic);\n    let adjusted_weight_fee = Self::weight_to_fee(T::WeightInfo::set_currency());\n    let fee = base_fee.saturating_add(adjusted_weight_fee);\n\n    Self::swap_currency(who, fee)?;\n    T::MultiCurrency::withdraw(currency, who, fee)?;\n\n    Ok(())\n}\n")),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"AccountCurrencyMap")),(0,i.kt)("p",null,"A map between an account and a chosen currency in which fees are paid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n#[pallet::getter(fn get_currency)]\npub type AccountCurrencyMap<T: Config> = StorageMap<_, Blake2_128Concat, T::AccountId, Option<AssetId>, ValueQuery>;\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"AcceptedCurrencies")),(0,i.kt)("p",null,"A curated list of currencies which can be used to pay fees. It is possible to select a currency only if it is in this list."),(0,i.kt)("p",null,"Only selected members can add or remove currency from this list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"/// Curated list of currencies which fees can be paid with\n#[pallet::storage]\n#[pallet::getter(fn currencies)]\npub type AcceptedCurrencies<T: Config> = StorageValue<_, OrderedSet<AssetId>, ValueQuery>;\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Authorities")),(0,i.kt)("p",null,"List of accounts which are allowed to add or remove currencies from the list of accepted currencies."),(0,i.kt)("p",null,"Only a root can add a member to this list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n#[pallet::getter(fn authorities)]\npub type Authorities<T: Config> = StorageValue<_, Vec<T::AccountId>, ValueQuery>;\n")),(0,i.kt)("h3",{id:"extrinsics"},"Extrinsics"),(0,i.kt)("p",null,"There are few extrinsics in this pallet. All are self-explanatory and easy to understand just by look at the Implementation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn set_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}\npub fn add_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}\npub fn remove_currency(origin: OriginFor<T>, currency: AssetId) -> DispatchResultWithPostInfo {}\npub fn add_member(origin: OriginFor<T>, member: T::AccountId) -> DispatchResultWithPostInfo {}\npub fn remove_member(origin: OriginFor<T>, member: T::AccountId) -> DispatchResultWithPostInfo {}\n")),(0,i.kt)("h3",{id:"fee-payment"},"Fee payment"),(0,i.kt)("p",null,"Where is the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"hook")," in the runtime where the fees are paid? "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"/// The SignedExtension to the basic transaction logic.\npub type SignedExtra = (\n    frame_system::CheckSpecVersion<Runtime>,\n    frame_system::CheckTxVersion<Runtime>,  \n    frame_system::CheckGenesis<Runtime>,  \n    frame_system::CheckEra<Runtime>,    \n    frame_system::CheckNonce<Runtime>,\n    frame_system::CheckWeight<Runtime>,\n    pallet_transaction_payment::ChargeTransactionPayment<Runtime>,\n    pallet_claims::ValidateClaim<Runtime>,\n);\n")),(0,i.kt)("p",null,"This is list of signed extensions which every transaction has to go through. And one of them is ChargeTransactionPayment."),(0,i.kt)("p",null,"The multi payment transaction pallet implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnChargeTransaction")," trait and handles the withdraw_fee accordingly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"fn withdraw_fee(\n    who: &T::AccountId,\n    _call: &T::Call,\n    _info: &DispatchInfoOf<T::Call>,\n    fee: Self::Balance,\n    tip: Self::Balance,\n) -> Result<Self::LiquidityInfo, TransactionValidityError> {\n    if fee.is_zero() {\n        return Ok(None);\n    }\n\n    let withdraw_reason = if tip.is_zero() {\n        WithdrawReasons::TRANSACTION_PAYMENT\n    } else {\n        WithdrawReasons::TRANSACTION_PAYMENT | WithdrawReasons::TIP\n    };\n\n    if SW::swap_currency(&who, fee.into()).is_err() {\n        return Err(InvalidTransaction::Payment.into());\n    }\n\n    match C::withdraw(who, fee, withdraw_reason, ExistenceRequirement::KeepAlive) {\n        Ok(imbalance) => Ok(Some(imbalance)),\n        Err(_) => Err(InvalidTransaction::Payment.into()),\n    }\n}\n")),(0,i.kt)("p",null,"swap_currency ensures that there is enough balance of the native currency to pay the fee by swapping the chosen currency for native currency."))}u.isMDXComponent=!0}}]);