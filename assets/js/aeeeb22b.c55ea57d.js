"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[7769],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4887:(t,e,r)=>{r.d(e,{UE:()=>i,h8:()=>a,qh:()=>s,y$:()=>o});r(87462),r(67294);var n=r(3905);const a=t=>{let{children:e,text:r}=t;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},o=t=>{let{children:e}=t;return(0,n.kt)("span",{style:{color:"#faa"}},e)};function i(t){let{children:e,version:r}=t;const a="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function c(t,e,r,a){return(0,n.kt)("div",{style:{backgroundColor:a,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},e)}const s=t=>{let{children:e}=t;return c(0,"Released","#afa","#181")}},87593:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));r(4887);const o={sidebar_position:6,title:"Get Stat Data"},i=void 0,c={unversionedId:"quick-start/stat-data",id:"version-2.1.0/quick-start/stat-data",title:"Get Stat Data",description:"Get Stat Data Function",source:"@site/versioned_docs/version-2.1.0/quick-start/stat-data.mdx",sourceDirName:"quick-start",slug:"/quick-start/stat-data",permalink:"/TSIF-Documentation/docs/2.1.0/quick-start/stat-data",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.1.0/quick-start/stat-data.mdx",tags:[],version:"2.1.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Get Stat Data"},sidebar:"tutorialSidebar",previous:{title:"IPFS Pinning Service Config",permalink:"/TSIF-Documentation/docs/2.1.0/quick-start/ipfs-pinning-service-config"},next:{title:"Get Data",permalink:"/TSIF-Documentation/docs/2.1.0/ipfs-functions/get-data"}},s={},l=[{value:"Get Stat Data Function",id:"get-stat-data-function",level:2}],u={toc:l};function d(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-stat-data-function"},"Get Stat Data Function"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Get Stat Data")," is a helper function where you provide a file or directory to get useful information about it such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creation Time."),(0,a.kt)("li",{parentName:"ul"},"Access Time."),(0,a.kt)("li",{parentName:"ul"},"Modification Time."),(0,a.kt)("li",{parentName:"ul"},"File Size."),(0,a.kt)("li",{parentName:"ul"},"Is Directory."),(0,a.kt)("li",{parentName:"ul"},"Is Read Only."),(0,a.kt)("li",{parentName:"ul"},"Is Valid.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get Stat Data",src:r(14328).Z,width:"770",height:"465"})))}d.isMDXComponent=!0},14328:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/06_stat-data-c1a06db879b26310303f1f150496aaeb.png"}}]);