"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[3081],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,h8:()=>a,qh:()=>s,y$:()=>o});r(7462),r(7294);var n=r(3905);const a=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},o=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const a="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function c(e,t,r,a){return(0,n.kt)("div",{style:{backgroundColor:a,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")}},4201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(4887);const i={sidebar_position:2,title:"Digest"},c=void 0,s={unversionedId:"cryptography/digest",id:"version-2.1.0/cryptography/digest",title:"Digest",description:"Calculate Data Digest Calculates the specific digest of a byte array. This function requires inputs as follows:",source:"@site/versioned_docs/version-2.1.0/cryptography/digest.mdx",sourceDirName:"cryptography",slug:"/cryptography/digest",permalink:"/TSIF-Documentation/docs/cryptography/digest",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.1.0/cryptography/digest.mdx",tags:[],version:"2.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Digest"},sidebar:"tutorialSidebar",previous:{title:"Key Generation",permalink:"/TSIF-Documentation/docs/cryptography/key-generation"},next:{title:"Signatures",permalink:"/TSIF-Documentation/docs/cryptography/signatures"}},l={},p=[],u={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Calculate Data Digest")," Calculates the specific digest of a byte array. This function requires inputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Data")," ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : Byte array, data for which digest will be calculated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Message Digest")," ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : Enumeration, type of digest algorithm used in digest calculation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Calculate Data Digest",src:r(6546).Z,width:"876",height:"558"})),(0,a.kt)("p",null,"If successful, returns a byte array containing the calculated ",(0,a.kt)("em",{parentName:"p"},"digest")," ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"}),"."))}d.isMDXComponent=!0},6546:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/digest_sync-a4fea73c871bfb38996ff417cecaf0cd.png"}}]);