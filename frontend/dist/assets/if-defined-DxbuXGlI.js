const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./add-DK12PeVK.js","./index-CNkW9Ivo.js","./index-C-EX5SHe.js","./index-K84fpzKK.css","./all-wallets-C_Q7VbPc.js","./arrow-bottom-circle-Dlt633-7.js","./app-store-DR-dRal_.js","./apple-BDJVwAML.js","./arrow-bottom-sRx4wfeL.js","./arrow-left-CUPriHWz.js","./arrow-right-CV5ZOd1z.js","./arrow-top-BMlcQdWi.js","./bank-BRDDlk1U.js","./browser-Dt9ZHpAu.js","./bin-B8i3hnrG.js","./bitcoin-B3gLn0Bc.js","./card-B_lZoamK.js","./checkmark-DnC9M60C.js","./checkmark-bold-BNr-6FI6.js","./chevron-bottom-D_S9c7Up.js","./chevron-left-BF6I1nEK.js","./chevron-right-jDr1_IhY.js","./chevron-top-Ccgu7AqO.js","./chrome-store-CSUDw4Ol.js","./clock-Dp41z6i9.js","./close-B5kDsbMC.js","./compass-Cv8vbrRo.js","./coinPlaceholder-ClEzR3rr.js","./copy-Lf0mVmix.js","./cursor-hPqf_LB1.js","./cursor-transparent-DEmZbK6l.js","./circle-BdiHZFV5.js","./desktop-GAYOOCeT.js","./disconnect-CjiV88m4.js","./discord-DdrbQpVG.js","./ethereum-Rp8bGJQX.js","./etherscan-CdWxuUQi.js","./extension-CaBgMl0c.js","./external-link-JnAvDYwZ.js","./facebook-BWVmGhmF.js","./farcaster-C1G9-ROC.js","./filters-DwW-Bor_.js","./github-BsTdj-Qv.js","./google-BrybXuEe.js","./help-circle-2IibbTxQ.js","./image-DKUm11B3.js","./id-DclYD2pK.js","./info-circle-DsSCCUUI.js","./lightbulb-CTy0yTb1.js","./mail-mdogO8pF.js","./mobile-DbjkqV8k.js","./more-C1Jh_RGJ.js","./network-placeholder-RU3gDPq0.js","./nftPlaceholder-XZC7-ttQ.js","./off-BpIpc438.js","./play-store-VZEi48pN.js","./plus-D_qIgq9K.js","./qr-code-CkYNSTkK.js","./recycle-horizontal-B9T9TeJQ.js","./refresh-Bf2FIFUv.js","./search-CQnZa5xa.js","./send-BXo0h7dZ.js","./swapHorizontal-Depw-zoZ.js","./swapHorizontalMedium-DbLnZkbk.js","./swapHorizontalBold-azzQt9ys.js","./swapHorizontalRoundedBold-Bdb6CJcc.js","./swapVertical-HARjyQJM.js","./solana-C6ckwS0p.js","./telegram-B5rXSMdo.js","./three-dots-CJ_JYWXq.js","./twitch-Bs7WvtpM.js","./x-8m-L9hZ5.js","./twitterIcon-CIvUW7UN.js","./verify-C1gR1uHY.js","./verify-filled-BD2EUCT4.js","./wallet-D8NwfaSk.js","./walletconnect-DKl4aWoC.js","./wallet-placeholder-aYtMixCV.js","./warning-circle-DLItsZkT.js","./info-p0Mgbdrs.js","./exclamation-triangle-BD0MUcpX.js","./reown-logo-DIwMPeXo.js","./x-mark-BPrWs2cf.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./index-C-EX5SHe.js";import{a4 as z,a5 as B,a6 as T,i as P,r as R,Y as M,a as L,x as S,a2 as j}from"./index-CNkW9Ivo.js";const w={getSpacingStyles(t,r){if(Array.isArray(t))return t[r]?`var(--wui-spacing-${t[r]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:r,charsEnd:e,truncate:a}){return t.length<=r+e?t:a==="end"?`${t.substring(0,r)}...`:a==="start"?`...${t.substring(t.length-e)}`:`${t.substring(0,Math.floor(r))}...${t.substring(t.length-Math.floor(e))}`},generateAvatarColors(t){const e=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),a=this.hexToRgb(e),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),c=100-3*Number(n?.replace("px","")),s=`${c}% ${c}% at 65% 40%`,u=[];for(let d=0;d<5;d+=1){const p=this.tintColor(a,.15*d);u.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${s}
   `},hexToRgb(t){const r=parseInt(t,16),e=r>>16&255,a=r>>8&255,n=r&255;return[e,a,n]},tintColor(t,r){const[e,a,n]=t,o=Math.round(e+(255-e)*r),c=Math.round(a+(255-a)*r),s=Math.round(n+(255-n)*r);return[o,c,s]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia&&typeof window.matchMedia=="function"?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(t){const r=t.split(".");return r.length===2?[r[0],r[1]]:["0","00"]},roundNumber(t,r,e){return t.toString().length>=r?Number(t).toFixed(e):t},formatNumberToLocalString(t,r=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r})}};function H(t,r){const{kind:e,elements:a}=r;return{kind:e,elements:a,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function U(t,r){return customElements.get(t)||customElements.define(t,r),r}function I(t){return function(e){return typeof e=="function"?U(t,e):H(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:z},G=(t=F,r,e)=>{const{kind:a,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(e.name,t),a==="accessor"){const{name:c}=e;return{set(s){const u=r.get.call(this);r.set.call(this,s),this.requestUpdate(c,u,t)},init(s){return s!==void 0&&this.C(c,void 0,t,s),s}}}if(a==="setter"){const{name:c}=e;return function(s){const u=this[c];r.call(this,s),this.requestUpdate(c,u,t)}}throw Error("Unsupported decorator location: "+a)};function l(t){return(r,e)=>typeof e=="object"?G(t,r,e):((a,n,o)=>{const c=n.hasOwnProperty(o);return n.constructor.createProperty(o,a),c?Object.getOwnPropertyDescriptor(n,o):void 0})(t,r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=t=>t===null||typeof t!="object"&&typeof t!="function",W=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2},C=t=>(...r)=>({_$litDirective$:t,values:r});let x=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,e,a){this._$Ct=r,this._$AM=e,this._$Ci=a}_$AS(r,e){return this.update(r,e)}update(r,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=(t,r)=>{const e=t._$AN;if(e===void 0)return!1;for(const a of e)a._$AO?.(r,!1),h(a,r);return!0},E=t=>{let r,e;do{if((r=t._$AM)===void 0)break;e=r._$AN,e.delete(t),t=r}while(e?.size===0)},k=t=>{for(let r;r=t._$AM;t=r){let e=r._$AN;if(e===void 0)r._$AN=e=new Set;else if(e.has(t))break;e.add(t),K(r)}};function q(t){this._$AN!==void 0?(E(this),this._$AM=t,k(this)):this._$AM=t}function Y(t,r=!1,e=0){const a=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(r)if(Array.isArray(a))for(let o=e;o<a.length;o++)h(a[o],!1),E(a[o]);else a!=null&&(h(a,!1),E(a));else h(this,t)}const K=t=>{t.type==V.CHILD&&(t._$AP??=Y,t._$AQ??=q)};class X extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(r,e,a){super._$AT(r,e,a),k(this),this.isConnected=r._$AU}_$AO(r,e=!0){r!==this.isConnected&&(this.isConnected=r,r?this.reconnected?.():this.disconnected?.()),e&&(h(this,r),E(this))}setValue(r){if(W(this._$Ct))this._$Ct._$AI(r,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=r,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Z{constructor(r){this.G=r}disconnect(){this.G=void 0}reconnect(r){this.G=r}deref(){return this.G}}class Q{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(r=>this.Z=r)}resume(){this.Z?.(),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=t=>!N(t)&&typeof t.then=="function",O=1073741823;class J extends X{constructor(){super(...arguments),this._$Cwt=O,this._$Cbt=[],this._$CK=new Z(this),this._$CX=new Q}render(...r){return r.find(e=>!D(e))??T}update(r,e){const a=this._$Cbt;let n=a.length;this._$Cbt=e;const o=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let s=0;s<e.length&&!(s>this._$Cwt);s++){const u=e[s];if(!D(u))return this._$Cwt=s,u;s<n&&u===a[s]||(this._$Cwt=O,n=0,Promise.resolve(u).then(async d=>{for(;c.get();)await c.get();const p=o.deref();if(p!==void 0){const $=p._$Cbt.indexOf(u);$>-1&&$<p._$Cwt&&(p._$Cwt=$,p.setValue(d))}}))}return T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(J);class rt{constructor(){this.cache=new Map}set(r,e){this.cache.set(r,e)}get(r){return this.cache.get(r)}has(r){return this.cache.has(r)}delete(r){this.cache.delete(r)}clear(){this.cache.clear()}}const A=new rt,et=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var f=function(t,r,e,a){var n=arguments.length,o=n<3?r:a===null?a=Object.getOwnPropertyDescriptor(r,e):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(r,e,o):c(r,e))||o);return n>3&&o&&Object.defineProperty(r,e,o),o};const b={add:async()=>(await i(async()=>{const{addSvg:t}=await import("./add-DK12PeVK.js");return{addSvg:t}},__vite__mapDeps([0,1,2,3]),import.meta.url)).addSvg,allWallets:async()=>(await i(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-C_Q7VbPc.js");return{allWalletsSvg:t}},__vite__mapDeps([4,1,2,3]),import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await i(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-Dlt633-7.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([5,1,2,3]),import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await i(async()=>{const{appStoreSvg:t}=await import("./app-store-DR-dRal_.js");return{appStoreSvg:t}},__vite__mapDeps([6,1,2,3]),import.meta.url)).appStoreSvg,apple:async()=>(await i(async()=>{const{appleSvg:t}=await import("./apple-BDJVwAML.js");return{appleSvg:t}},__vite__mapDeps([7,1,2,3]),import.meta.url)).appleSvg,arrowBottom:async()=>(await i(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-sRx4wfeL.js");return{arrowBottomSvg:t}},__vite__mapDeps([8,1,2,3]),import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await i(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-CUPriHWz.js");return{arrowLeftSvg:t}},__vite__mapDeps([9,1,2,3]),import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await i(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-CV5ZOd1z.js");return{arrowRightSvg:t}},__vite__mapDeps([10,1,2,3]),import.meta.url)).arrowRightSvg,arrowTop:async()=>(await i(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-BMlcQdWi.js");return{arrowTopSvg:t}},__vite__mapDeps([11,1,2,3]),import.meta.url)).arrowTopSvg,bank:async()=>(await i(async()=>{const{bankSvg:t}=await import("./bank-BRDDlk1U.js");return{bankSvg:t}},__vite__mapDeps([12,1,2,3]),import.meta.url)).bankSvg,browser:async()=>(await i(async()=>{const{browserSvg:t}=await import("./browser-Dt9ZHpAu.js");return{browserSvg:t}},__vite__mapDeps([13,1,2,3]),import.meta.url)).browserSvg,bin:async()=>(await i(async()=>{const{binSvg:t}=await import("./bin-B8i3hnrG.js");return{binSvg:t}},__vite__mapDeps([14,1,2,3]),import.meta.url)).binSvg,bitcoin:async()=>(await i(async()=>{const{bitcoinSvg:t}=await import("./bitcoin-B3gLn0Bc.js");return{bitcoinSvg:t}},__vite__mapDeps([15,1,2,3]),import.meta.url)).bitcoinSvg,card:async()=>(await i(async()=>{const{cardSvg:t}=await import("./card-B_lZoamK.js");return{cardSvg:t}},__vite__mapDeps([16,1,2,3]),import.meta.url)).cardSvg,checkmark:async()=>(await i(async()=>{const{checkmarkSvg:t}=await import("./checkmark-DnC9M60C.js");return{checkmarkSvg:t}},__vite__mapDeps([17,1,2,3]),import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await i(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-BNr-6FI6.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([18,1,2,3]),import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await i(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-D_S9c7Up.js");return{chevronBottomSvg:t}},__vite__mapDeps([19,1,2,3]),import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await i(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-BF6I1nEK.js");return{chevronLeftSvg:t}},__vite__mapDeps([20,1,2,3]),import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await i(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-jDr1_IhY.js");return{chevronRightSvg:t}},__vite__mapDeps([21,1,2,3]),import.meta.url)).chevronRightSvg,chevronTop:async()=>(await i(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-Ccgu7AqO.js");return{chevronTopSvg:t}},__vite__mapDeps([22,1,2,3]),import.meta.url)).chevronTopSvg,chromeStore:async()=>(await i(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-CSUDw4Ol.js");return{chromeStoreSvg:t}},__vite__mapDeps([23,1,2,3]),import.meta.url)).chromeStoreSvg,clock:async()=>(await i(async()=>{const{clockSvg:t}=await import("./clock-Dp41z6i9.js");return{clockSvg:t}},__vite__mapDeps([24,1,2,3]),import.meta.url)).clockSvg,close:async()=>(await i(async()=>{const{closeSvg:t}=await import("./close-B5kDsbMC.js");return{closeSvg:t}},__vite__mapDeps([25,1,2,3]),import.meta.url)).closeSvg,compass:async()=>(await i(async()=>{const{compassSvg:t}=await import("./compass-Cv8vbrRo.js");return{compassSvg:t}},__vite__mapDeps([26,1,2,3]),import.meta.url)).compassSvg,coinPlaceholder:async()=>(await i(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-ClEzR3rr.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([27,1,2,3]),import.meta.url)).coinPlaceholderSvg,copy:async()=>(await i(async()=>{const{copySvg:t}=await import("./copy-Lf0mVmix.js");return{copySvg:t}},__vite__mapDeps([28,1,2,3]),import.meta.url)).copySvg,cursor:async()=>(await i(async()=>{const{cursorSvg:t}=await import("./cursor-hPqf_LB1.js");return{cursorSvg:t}},__vite__mapDeps([29,1,2,3]),import.meta.url)).cursorSvg,cursorTransparent:async()=>(await i(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-DEmZbK6l.js");return{cursorTransparentSvg:t}},__vite__mapDeps([30,1,2,3]),import.meta.url)).cursorTransparentSvg,circle:async()=>(await i(async()=>{const{circleSvg:t}=await import("./circle-BdiHZFV5.js");return{circleSvg:t}},__vite__mapDeps([31,1,2,3]),import.meta.url)).circleSvg,desktop:async()=>(await i(async()=>{const{desktopSvg:t}=await import("./desktop-GAYOOCeT.js");return{desktopSvg:t}},__vite__mapDeps([32,1,2,3]),import.meta.url)).desktopSvg,disconnect:async()=>(await i(async()=>{const{disconnectSvg:t}=await import("./disconnect-CjiV88m4.js");return{disconnectSvg:t}},__vite__mapDeps([33,1,2,3]),import.meta.url)).disconnectSvg,discord:async()=>(await i(async()=>{const{discordSvg:t}=await import("./discord-DdrbQpVG.js");return{discordSvg:t}},__vite__mapDeps([34,1,2,3]),import.meta.url)).discordSvg,ethereum:async()=>(await i(async()=>{const{ethereumSvg:t}=await import("./ethereum-Rp8bGJQX.js");return{ethereumSvg:t}},__vite__mapDeps([35,1,2,3]),import.meta.url)).ethereumSvg,etherscan:async()=>(await i(async()=>{const{etherscanSvg:t}=await import("./etherscan-CdWxuUQi.js");return{etherscanSvg:t}},__vite__mapDeps([36,1,2,3]),import.meta.url)).etherscanSvg,extension:async()=>(await i(async()=>{const{extensionSvg:t}=await import("./extension-CaBgMl0c.js");return{extensionSvg:t}},__vite__mapDeps([37,1,2,3]),import.meta.url)).extensionSvg,externalLink:async()=>(await i(async()=>{const{externalLinkSvg:t}=await import("./external-link-JnAvDYwZ.js");return{externalLinkSvg:t}},__vite__mapDeps([38,1,2,3]),import.meta.url)).externalLinkSvg,facebook:async()=>(await i(async()=>{const{facebookSvg:t}=await import("./facebook-BWVmGhmF.js");return{facebookSvg:t}},__vite__mapDeps([39,1,2,3]),import.meta.url)).facebookSvg,farcaster:async()=>(await i(async()=>{const{farcasterSvg:t}=await import("./farcaster-C1G9-ROC.js");return{farcasterSvg:t}},__vite__mapDeps([40,1,2,3]),import.meta.url)).farcasterSvg,filters:async()=>(await i(async()=>{const{filtersSvg:t}=await import("./filters-DwW-Bor_.js");return{filtersSvg:t}},__vite__mapDeps([41,1,2,3]),import.meta.url)).filtersSvg,github:async()=>(await i(async()=>{const{githubSvg:t}=await import("./github-BsTdj-Qv.js");return{githubSvg:t}},__vite__mapDeps([42,1,2,3]),import.meta.url)).githubSvg,google:async()=>(await i(async()=>{const{googleSvg:t}=await import("./google-BrybXuEe.js");return{googleSvg:t}},__vite__mapDeps([43,1,2,3]),import.meta.url)).googleSvg,helpCircle:async()=>(await i(async()=>{const{helpCircleSvg:t}=await import("./help-circle-2IibbTxQ.js");return{helpCircleSvg:t}},__vite__mapDeps([44,1,2,3]),import.meta.url)).helpCircleSvg,image:async()=>(await i(async()=>{const{imageSvg:t}=await import("./image-DKUm11B3.js");return{imageSvg:t}},__vite__mapDeps([45,1,2,3]),import.meta.url)).imageSvg,id:async()=>(await i(async()=>{const{idSvg:t}=await import("./id-DclYD2pK.js");return{idSvg:t}},__vite__mapDeps([46,1,2,3]),import.meta.url)).idSvg,infoCircle:async()=>(await i(async()=>{const{infoCircleSvg:t}=await import("./info-circle-DsSCCUUI.js");return{infoCircleSvg:t}},__vite__mapDeps([47,1,2,3]),import.meta.url)).infoCircleSvg,lightbulb:async()=>(await i(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-CTy0yTb1.js");return{lightbulbSvg:t}},__vite__mapDeps([48,1,2,3]),import.meta.url)).lightbulbSvg,mail:async()=>(await i(async()=>{const{mailSvg:t}=await import("./mail-mdogO8pF.js");return{mailSvg:t}},__vite__mapDeps([49,1,2,3]),import.meta.url)).mailSvg,mobile:async()=>(await i(async()=>{const{mobileSvg:t}=await import("./mobile-DbjkqV8k.js");return{mobileSvg:t}},__vite__mapDeps([50,1,2,3]),import.meta.url)).mobileSvg,more:async()=>(await i(async()=>{const{moreSvg:t}=await import("./more-C1Jh_RGJ.js");return{moreSvg:t}},__vite__mapDeps([51,1,2,3]),import.meta.url)).moreSvg,networkPlaceholder:async()=>(await i(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-RU3gDPq0.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([52,1,2,3]),import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await i(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-XZC7-ttQ.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([53,1,2,3]),import.meta.url)).nftPlaceholderSvg,off:async()=>(await i(async()=>{const{offSvg:t}=await import("./off-BpIpc438.js");return{offSvg:t}},__vite__mapDeps([54,1,2,3]),import.meta.url)).offSvg,playStore:async()=>(await i(async()=>{const{playStoreSvg:t}=await import("./play-store-VZEi48pN.js");return{playStoreSvg:t}},__vite__mapDeps([55,1,2,3]),import.meta.url)).playStoreSvg,plus:async()=>(await i(async()=>{const{plusSvg:t}=await import("./plus-D_qIgq9K.js");return{plusSvg:t}},__vite__mapDeps([56,1,2,3]),import.meta.url)).plusSvg,qrCode:async()=>(await i(async()=>{const{qrCodeIcon:t}=await import("./qr-code-CkYNSTkK.js");return{qrCodeIcon:t}},__vite__mapDeps([57,1,2,3]),import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await i(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-B9T9TeJQ.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([58,1,2,3]),import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await i(async()=>{const{refreshSvg:t}=await import("./refresh-Bf2FIFUv.js");return{refreshSvg:t}},__vite__mapDeps([59,1,2,3]),import.meta.url)).refreshSvg,search:async()=>(await i(async()=>{const{searchSvg:t}=await import("./search-CQnZa5xa.js");return{searchSvg:t}},__vite__mapDeps([60,1,2,3]),import.meta.url)).searchSvg,send:async()=>(await i(async()=>{const{sendSvg:t}=await import("./send-BXo0h7dZ.js");return{sendSvg:t}},__vite__mapDeps([61,1,2,3]),import.meta.url)).sendSvg,swapHorizontal:async()=>(await i(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-Depw-zoZ.js");return{swapHorizontalSvg:t}},__vite__mapDeps([62,1,2,3]),import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-DbLnZkbk.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([63,1,2,3]),import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-azzQt9ys.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([64,1,2,3]),import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-Bdb6CJcc.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([65,1,2,3]),import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-HARjyQJM.js");return{swapVerticalSvg:t}},__vite__mapDeps([66,1,2,3]),import.meta.url)).swapVerticalSvg,solana:async()=>(await i(async()=>{const{solanaSvg:t}=await import("./solana-C6ckwS0p.js");return{solanaSvg:t}},__vite__mapDeps([67,1,2,3]),import.meta.url)).solanaSvg,telegram:async()=>(await i(async()=>{const{telegramSvg:t}=await import("./telegram-B5rXSMdo.js");return{telegramSvg:t}},__vite__mapDeps([68,1,2,3]),import.meta.url)).telegramSvg,threeDots:async()=>(await i(async()=>{const{threeDotsSvg:t}=await import("./three-dots-CJ_JYWXq.js");return{threeDotsSvg:t}},__vite__mapDeps([69,1,2,3]),import.meta.url)).threeDotsSvg,twitch:async()=>(await i(async()=>{const{twitchSvg:t}=await import("./twitch-Bs7WvtpM.js");return{twitchSvg:t}},__vite__mapDeps([70,1,2,3]),import.meta.url)).twitchSvg,twitter:async()=>(await i(async()=>{const{xSvg:t}=await import("./x-8m-L9hZ5.js");return{xSvg:t}},__vite__mapDeps([71,1,2,3]),import.meta.url)).xSvg,twitterIcon:async()=>(await i(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-CIvUW7UN.js");return{twitterIconSvg:t}},__vite__mapDeps([72,1,2,3]),import.meta.url)).twitterIconSvg,verify:async()=>(await i(async()=>{const{verifySvg:t}=await import("./verify-C1gR1uHY.js");return{verifySvg:t}},__vite__mapDeps([73,1,2,3]),import.meta.url)).verifySvg,verifyFilled:async()=>(await i(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-BD2EUCT4.js");return{verifyFilledSvg:t}},__vite__mapDeps([74,1,2,3]),import.meta.url)).verifyFilledSvg,wallet:async()=>(await i(async()=>{const{walletSvg:t}=await import("./wallet-D8NwfaSk.js");return{walletSvg:t}},__vite__mapDeps([75,1,2,3]),import.meta.url)).walletSvg,walletConnect:async()=>(await i(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-DKl4aWoC.js");return{walletConnectSvg:t}},__vite__mapDeps([76,1,2,3]),import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await i(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-DKl4aWoC.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([76,1,2,3]),import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-DKl4aWoC.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([76,1,2,3]),import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await i(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-aYtMixCV.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([77,1,2,3]),import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await i(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-DLItsZkT.js");return{warningCircleSvg:t}},__vite__mapDeps([78,1,2,3]),import.meta.url)).warningCircleSvg,x:async()=>(await i(async()=>{const{xSvg:t}=await import("./x-8m-L9hZ5.js");return{xSvg:t}},__vite__mapDeps([71,1,2,3]),import.meta.url)).xSvg,info:async()=>(await i(async()=>{const{infoSvg:t}=await import("./info-p0Mgbdrs.js");return{infoSvg:t}},__vite__mapDeps([79,1,2,3]),import.meta.url)).infoSvg,exclamationTriangle:async()=>(await i(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-BD0MUcpX.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([80,1,2,3]),import.meta.url)).exclamationTriangleSvg,reown:async()=>(await i(async()=>{const{reownSvg:t}=await import("./reown-logo-DIwMPeXo.js");return{reownSvg:t}},__vite__mapDeps([81,1,2,3]),import.meta.url)).reownSvg,"x-mark":async()=>(await i(async()=>{const{xMarkSvg:t}=await import("./x-mark-BPrWs2cf.js");return{xMarkSvg:t}},__vite__mapDeps([82,1,2,3]),import.meta.url)).xMarkSvg};async function it(t){if(A.has(t))return A.get(t);const e=(b[t]??b.copy)();return A.set(t,e),e}let g=class extends L{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,S`${tt(it(this.name),S`<div class="fallback"></div>`)}`}};g.styles=[R,M,et];f([l()],g.prototype,"size",void 0);f([l()],g.prototype,"name",void 0);f([l()],g.prototype,"color",void 0);f([l()],g.prototype,"aspectRatio",void 0);g=f([I("wui-icon")],g);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=C(class extends x{constructor(t){if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(r=>t[r]).join(" ")+" "}update(t,[r]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in r)r[a]&&!this.nt?.has(a)&&this.st.add(a);return this.render(r)}const e=t.element.classList;for(const a of this.st)a in r||(e.remove(a),this.st.delete(a));for(const a in r){const n=!!r[a];n===this.st.has(a)||this.nt?.has(a)||(n?(e.add(a),this.st.add(a)):(e.remove(a),this.st.delete(a)))}return T}}),ot=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var y=function(t,r,e,a){var n=arguments.length,o=n<3?r:a===null?a=Object.getOwnPropertyDescriptor(r,e):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(r,e,o):c(r,e))||o);return n>3&&o&&Object.defineProperty(r,e,o),o};let v=class extends L{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const r={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,S`<slot class=${at(r)}></slot>`}};v.styles=[R,ot];y([l()],v.prototype,"variant",void 0);y([l()],v.prototype,"color",void 0);y([l()],v.prototype,"align",void 0);y([l()],v.prototype,"lineClamp",void 0);v=y([I("wui-text")],v);const nt=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var m=function(t,r,e,a){var n=arguments.length,o=n<3?r:a===null?a=Object.getOwnPropertyDescriptor(r,e):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(c=t[s])&&(o=(n<3?c(o):n>3?c(r,e,o):c(r,e))||o);return n>3&&o&&Object.defineProperty(r,e,o),o};let _=class extends L{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&w.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&w.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&w.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&w.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&w.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&w.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&w.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&w.getSpacingStyles(this.margin,3)};
    `,S`<slot></slot>`}};_.styles=[R,nt];m([l()],_.prototype,"flexDirection",void 0);m([l()],_.prototype,"flexWrap",void 0);m([l()],_.prototype,"flexBasis",void 0);m([l()],_.prototype,"flexGrow",void 0);m([l()],_.prototype,"flexShrink",void 0);m([l()],_.prototype,"alignItems",void 0);m([l()],_.prototype,"justifyContent",void 0);m([l()],_.prototype,"columnGap",void 0);m([l()],_.prototype,"rowGap",void 0);m([l()],_.prototype,"gap",void 0);m([l()],_.prototype,"padding",void 0);m([l()],_.prototype,"margin",void 0);_=m([I("wui-flex")],_);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=t=>t??j;export{w as U,C as a,I as c,at as e,X as f,l as n,wt as o,lt as r};
