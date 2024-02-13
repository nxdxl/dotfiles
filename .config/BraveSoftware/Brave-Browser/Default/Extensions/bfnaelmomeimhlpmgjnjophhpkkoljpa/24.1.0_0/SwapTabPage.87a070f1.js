(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("1fvbV",(function(a,l){var r;r=a.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),t(a.exports,"default",(function(){return w}));var o=n("3ljHn"),i=n("kram9"),s=n("29o0l"),u=n("iQL9s"),d=n("aWXnn"),c=n("75q0e"),p=n("hiI91"),m=n("fxDW6"),g=n("daIFc"),b=n("aQ8sL"),f=n("gPUr2"),h=n("gX5Te");const x=()=>{const{multichainQuoteResponse:t,hasNoRoutes:n}=(0,i.useMultichainQuote)();return e(s).createElement(f.SwapWrapper,null,e(s).createElement(d.Column,{justify:"space-between",flex:1},e(s).createElement(d.Column,{align:"normal"},e(s).createElement(m.SwapSellAssetCard,null),e(s).createElement(m.SwapBuyAssetCard,null),t||n?e(s).createElement(g.SwapInfoCard,null):null),e(s).createElement(d.Column,null,t?e(s).createElement(b.SwapReviewButton,null):null)))};var w=()=>{const{isLoadingInitialAssets:t}=(()=>{var e,t,n;const[a]=(0,u.useSearchParams)(),l=null!==(e=a.get("sellFungible"))&&void 0!==e?e:void 0,r=null!==(t=a.get("sellAmount"))&&void 0!==t?t:void 0,d=null!==(n=a.get("buyFungible"))&&void 0!==n?n:void 0,{data:[c,p,m]}=(0,o.useFeatureFlags)(["enable-bridge-pairs","enable-next-jupiter-client","enable-native-bridge-pairs"]),g=(0,i.useSwapperStore)((e=>e.resetSwapper));h.hooks.useSubscribeSwapQuoteToQueries({enableBridgePairs:c,skipInitialBuyFungible:!0,enableNextJupiterClient:p}),h.hooks.useSubscribeGasEstimation();const{isLoading:b}=h.hooks.useInitialAssets({paramsSellFungible:l,paramsSellAmount:r,paramsBuyFungible:d,enableBridgePairs:c,enableNextJupiterClient:p,enableNativeBridgePairs:m});return(0,s.useLayoutEffect)((()=>g),[g]),{isLoadingInitialAssets:b}})();return t?e(s).createElement(e(s).Fragment,null,e(s).createElement(p.SkeletonLoader,{height:"120px",borderRadius:"8px 8px 0 0"}),e(s).createElement(c.ItemSeparator,{gap:1}),e(s).createElement(p.SkeletonLoader,{height:"120px",borderRadius:"0 0 8px 8px"})):e(s).createElement(x,null)}})),n.register("fxDW6",(function(a,l){t(a.exports,"SwapSellAssetCard",(function(){return h})),t(a.exports,"SwapBuyAssetCard",(function(){return E}));var r=n("3ljHn"),o=n("43063"),i=n("29o0l"),s=n("gkfw3"),u=n("6UMd8"),d=n("qppYH"),c=n("j81qC"),p=n("27SDj"),m=n("brWcm"),g=n("gX5Te"),b=n("aC1K2");const f=e(i).memo((({onClick:t})=>e(i).createElement(C,null,e(i).createElement(T,{onClick:t},e(i).createElement(c.IconArrowDownSquare,{fill:"#000000"}))))),h=()=>{const t=(()=>{const{t:e}=(0,o.useTranslation)(),{data:[t,n,a]}=(0,r.useFeatureFlags)(["enable-bridge-pairs","enable-next-jupiter-client","enable-native-bridge-pairs"]),l=g.hooks.useSwapSellAssetProps({enableBridgePairs:t,enableNextJupiterClient:n,enableNativeBridgePairs:a,isBalanceHidden:!1}),{showSwapSellAssetSelectModal:i}=(0,m.useLegacyModals)();return Object.assign(Object.assign({},l),{onSellAssetClicked:i,t:e})})();return e(i).createElement(x,Object.assign({},t))},x=e(i).memo((({assetButtonTitle:t,decimals:n,formattedMaxSellAmount:a,sellFungible:l,notEnoughAssets:r,hasMinimumSellAmount:o,uiSellAmount:s,onSellAssetClicked:u,setMaxSellAmount:p,updateSellAmount:m})=>{const{chain:g,logoUri:f,symbol:h,tokenAddress:x}=l.data;return e(i).createElement(S,{roundedTop:!0},e(i).createElement(F,{onClick:u},e(i).createElement(d.EcosystemImage,{image:{type:"fungible",src:f,fallback:h||x},size:44,tokenType:l.type,chainMeta:g}),e(i).createElement(I,null,e(i).createElement(y,null,l.data.name),e(i).createElement(A,null,l.data.symbol)),e(i).createElement(c.IconChevronDownThin,{fill:"#999999"})),e(i).createElement(M,null,e(i).createElement(b.SwapperInput,{dropdownTestID:"swap-sell-asset-dropdown",assetButtonTitle:t,decimals:n,disabled:!1,hasWarning:r||!o,fungible:l,isLoadingAmount:!1,isLoadingAssets:!1,onClick:u,onUserInput:m,value:s,maxSellAmount:a,setMaxSellAmount:p,fontSize:28})))})),w=e(i).memo((({t:t,assetButtonTitle:n,buyAmount:a,decimals:l,buyFungible:r,isFetchingQuote:o,onBuyAssetClicked:s,onSwitchTokens:u,currencyValue:p})=>{if(!r)return e(i).createElement(k,{t:t,onClick:s});const{chain:m,logoUri:g,symbol:h,tokenAddress:x}=r.data;return e(i).createElement(e(i).Fragment,null,e(i).createElement(f,{onClick:u}),e(i).createElement(S,{roundedBottom:!0},e(i).createElement(F,{onClick:s},e(i).createElement(d.EcosystemImage,{image:{type:"fungible",src:g,fallback:h||x},size:44,tokenType:r.type,chainMeta:m}),e(i).createElement(I,null,e(i).createElement(y,null,r.data.name),e(i).createElement(A,null,r.data.symbol)),e(i).createElement(c.IconChevronDownThin,{fill:"#999999"})),e(i).createElement(M,null,e(i).createElement(b.SwapperInput,{dropdownTestID:"swap-buy-asset-dropdown",assetButtonTitle:n,decimals:l,disabled:!0,hasWarning:!1,fungible:r,isLoadingAmount:o,isLoadingAssets:!1,onClick:s,onUserInput:()=>{},value:a,currencyValue:p,fontSize:28}))))})),E=()=>{const t=(()=>{const{t:e}=(0,o.useTranslation)(),{showSwapBuyAssetSelectModal:t}=(0,m.useLegacyModals)(),n=(0,i.useCallback)((()=>{t()}),[t]),a=g.hooks.useSwapBuyAssetProps();return Object.assign(Object.assign({},a),{onBuyAssetClicked:n,t:e})})();return e(i).createElement(w,Object.assign({},t))},k=({t:t,onClick:n})=>e(i).createElement(e(i).Fragment,null,e(i).createElement(f,null),e(i).createElement(v,{onClick:n},e(i).createElement(F,null,e(i).createElement(B,null,e(i).createElement(c.IconPlusThin,{width:20})),e(i).createElement(I,null,e(i).createElement(A,{size:16,weight:600},t("swapSelectToken")))))),S=s.default.div`
  background: #2a2a2a;
  border-top-right-radius: ${e=>e.roundedTop?8:0}px;
  border-top-left-radius: ${e=>e.roundedTop?8:0}px;
  border-bottom-right-radius: ${e=>e.roundedBottom?8:0}px;
  border-bottom-left-radius: ${e=>e.roundedBottom?8:0}px;
  padding: 8px;
`,v=(0,s.default)(S).attrs({roundedBottom:!0})`
  cursor: pointer;
`,y=(0,s.default)(p.Text).attrs({size:16,color:"#FFF",weight:600,lineHeight:19,textAlign:"left"})``,A=(0,s.default)(p.Text).attrs((e=>({size:e.size||14,color:"#777",weight:e.weight||400,lineHeight:17,textAlign:"left"})))``,C=s.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 1px;
`,T=(0,s.default)(u.Circle).attrs({color:"#AB9FF2",diameter:32})`
  z-index: 0;
  cursor: pointer;
  &:hover {
    background: #e2dffe;
  }
  margin-top: -16px;
  margin-bottom: -16px;
`,B=(0,s.default)(u.Circle).attrs({color:"#181818",diameter:44})``,F=s.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
  padding: 8px;
  border-radius: 8px;
`,I=s.default.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`,M=s.default.div`
  padding: 0 0 8px 8px;
`})),n.register("aC1K2",(function(a,l){t(a.exports,"SwapperInput",(function(){return m}));var r=n("43063"),o=n("29o0l"),i=n("gkfw3"),s=n("kGh2H"),u=n("hiI91"),d=n("27SDj");const c=i.default.div`
  display: flex;
  align-items: center;
  height: 36px;
  input {
    font-size: ${e=>{var t;return null!==(t=e.fontSize)&&void 0!==t?t:34}}px;
    line-height: 1;
    font-weight: 600;
    padding: 0;
    background: none;
  }
`,p=i.default.div`
  width: 100%;
  margin-top: 11px;
  margin-bottom: 10px;
`,m=({decimals:t,disabled:n,hasWarning:a,isLoadingAmount:l,value:i,name:m="amount","aria-labelledby":b,"aria-label":f,onUserInput:h,maxSellAmount:x,setMaxSellAmount:w,currencyValue:E,fontSize:k})=>{const{t:S}=(0,r.useTranslation)();return e(o).createElement(c,{hasWarning:a,fontSize:k},l?e(o).createElement(p,null,e(o).createElement(u.SkeletonLoader,{width:"100px",height:"20px",backgroundColor:"#434343",borderRadius:"10px"})):e(o).createElement(s.NumericalInput,{"aria-labelledby":b,"aria-label":f,name:m,border:"0",placeholder:"0",warning:a,value:i,decimalLimit:t,disabled:n,onUserInput:h}),x&&void 0!==w&&e(o).createElement(g,{onClick:w},S("maxInputMax")),l?e(o).createElement(u.SkeletonLoader,{width:"50px",height:"12px",backgroundColor:"#434343",borderRadius:"10px"}):E?e(o).createElement(d.Text,{size:16,color:"#777"},E):void 0)},g=i.default.div`
  color: #ab9ff2;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 8px;
  padding: 8px;
  &:hover {
    background-color: #333333;
  }
`})),n.register("aQ8sL",(function(a,l){t(a.exports,"SwapReviewButton",(function(){return g}));var r=n("43063"),o=n("kram9"),i=n("29o0l"),s=n("hFkH3"),u=n("gX5Te"),d=n("feAoQ");const c=()=>{const{t:t}=(0,r.useTranslation)();return e(i).createElement(s.Button,{type:"submit",theme:"default",disabled:!0},t("swapFlowActionButtonText"))},p=()=>{const{disabled:t,theme:n,title:a,onClick:l}=m();return e(i).createElement(s.Button,{type:"submit",theme:n,disabled:t,onClick:l},a)},m=()=>{const{t:e}=(0,r.useTranslation)(),{hasEnoughAssets:t,hasNoRoutes:n,canSwap:a,hasNoFundsForFees:l,sourceNativeToken:s}=u.hooks.useSwapReviewButtonProps(),c=(0,o.useSwapperStore)((e=>e.setQuoteFetchIntervalToggle)),{handleShowModalVisibility:p}=(0,d.useModals)(),m=(0,i.useCallback)((()=>{l?p("insufficientBalance",{networkId:s.networkId,token:{balance:s.balance,required:s.required}}):(c(!1),p("swapReview"))}),[l,p,s.networkId,s.balance,s.required,c]);return a?{disabled:!1,theme:"primary",title:e("swapFlowActionButtonText"),onClick:m}:t?n?{disabled:!0,theme:"default",title:e("swapNoQuotesFound"),onClick:m}:{disabled:!0,theme:"default",title:e("swapFlowActionButtonText"),onClick:m}:{disabled:!0,theme:"warning",title:e("sendFormErrorInsufficientBalance"),onClick:m}},g=()=>{const{multichainQuoteResponse:t}=(0,o.useMultichainQuote)();return t?e(i).createElement(p,null):e(i).createElement(c,null)}})),n.register("gPUr2",(function(a,l){t(a.exports,"SwapWrapper",(function(){return p}));var r=n("iOvk1"),o=n("43063"),i=n("29o0l"),s=n("gkfw3"),u=n("gX5Te"),d=n("3Doua");const c=s.default.div`
  display: flex;
  flex: 1;
  padding-bottom: 16px;
  margin-bottom: -16px; // fix extension padding issue when scrollable or not
`,p=e(i).memo((({children:t})=>{const n=u.hooks.useSelectedNetworks().every((e=>r.Chains.isMainnetNetworkID(e))),{t:a}=(0,o.useTranslation)(),l=(0,i.useMemo)((()=>({availableOnlyOnMainnet:a("swapAvailableOnMainnet")})),[a]);return n?e(i).createElement(c,null,t):e(i).createElement(d.SwapNotAvailableWrapper,{message:l.availableOnlyOnMainnet,swapDisabled:!0},t)}))})),n.register("3Doua",(function(a,l){t(a.exports,"SwapNotAvailableWrapper",(function(){return g}));var r=n("29o0l"),o=n("hxhxc"),i=n("gkfw3"),s=n("27SDj");const u=i.default.div`
  overflow-y: "scroll";
  padding-top: 16px;
`,d=i.default.fieldset.attrs({disabled:!0})`
  pointer-events: none;
  user-select: none;
`,c=i.default.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${(0,o.hexToRGB)("#222222",.75)};
`,p=i.default.div`
  background-color: ${(0,o.hexToRGB)("#E5A221",.7)};
  padding: 12px 15px;
  position: absolute;
  /* TODO: change 15px to 16px and create a screen padding constant like on mobile */
  top: -15px;
  left: -15px;
  right: 15px;
  width: calc(100% + 2 * 15px);
`,m=(0,i.default)(s.Text).attrs({size:14,lineHeight:19,weight:500,color:"#fff",textAlign:"left"})``,g=({message:t,swapDisabled:n=!0,children:a})=>n?e(r).createElement(e(r).Fragment,null,e(r).createElement(c,{"data-testid":"disable-overlay"},e(r).createElement(p,null,e(r).createElement(m,null,t))),e(r).createElement(d,{"data-testid":"disable-wrapper"},a)):e(r).createElement(u,null,e(r).createElement(p,null,e(r).createElement(m,null,t)),e(r).createElement(e(r).Fragment,null,a))}))}();
//# sourceMappingURL=SwapTabPage.87a070f1.js.map
define=__define;})(window.define);