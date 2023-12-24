"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[9714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),y=o,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>a,h8:()=>o,qh:()=>p,y$:()=>i});r(7462),r(7294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},i=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function c(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const p=e=>{let{children:t}=e;return c(0,"Released","#afa","#181")}},6381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905)),i=r(4887);const a={sidebar_position:4,title:"Extract Public Key"},c=void 0,p={unversionedId:"cryptography/extract-public-key",id:"version-2.0.0/cryptography/extract-public-key",title:"Extract Public Key",description:"Extract Public Key Retrieves the public key associated with a given private key. This function requires inputs as follows:",source:"@site/versioned_docs/version-2.0.0/cryptography/extract-public-key.mdx",sourceDirName:"cryptography",slug:"/cryptography/extract-public-key",permalink:"/TSIF-Documentation/docs/2.0.0/cryptography/extract-public-key",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.0.0/cryptography/extract-public-key.mdx",tags:[],version:"2.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Extract Public Key"},sidebar:"tutorialSidebar",previous:{title:"Signatures",permalink:"/TSIF-Documentation/docs/2.0.0/cryptography/signatures"},next:{title:"Key Conversions",permalink:"/TSIF-Documentation/docs/2.0.0/cryptography/key-conversions"}},l={},s=[],u={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Extract Public Key")," Retrieves the public key associated with a given private key. This function requires inputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Private Key (PEM)")," ",(0,o.kt)(i.h8,{text:"1",mdxType:"Step"})," : Byte array, private key bytes encoded as ",(0,o.kt)("inlineCode",{parentName:"li"},"PEM"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Password")," ",(0,o.kt)(i.h8,{text:"2",mdxType:"Step"})," : UTF-8 String, pass-phrase used to decrypt the private key\n(should stay empty if the key is not encrypted).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Extract Public Key",src:r(9377).Z,width:"743",height:"497"})),(0,o.kt)("p",null,"If successful, returns a byte array containing the associated ",(0,o.kt)("em",{parentName:"p"},"public key")," ",(0,o.kt)(i.h8,{text:"3",mdxType:"Step"}),"."))}d.isMDXComponent=!0},9377:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/extract_public_key-475d5980296c50a1d74bae742b1473b6.png"}}]);