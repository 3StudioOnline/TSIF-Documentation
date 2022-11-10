"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[99],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{AA:()=>s,V3:()=>l,h8:()=>i,qh:()=>c,y$:()=>o});n(7462),n(7294);var r=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function a(e,t,n,i){return(0,r.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return a(0,"Released","#afa","#181")},s=e=>{let{children:t}=e;return a(0,"In Progress","#ffa","#882")},l=e=>{let{children:t}=e;return a(0,"Planned","#aff","#288")}},7657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905)),o=n(4887);const a={sidebar_position:2,title:"IPFS Gateway Config"},c=void 0,s={unversionedId:"quick-start/ipfs-gateway-config",id:"version-1.0.1/quick-start/ipfs-gateway-config",title:"IPFS Gateway Config",description:"Get IPFS Gateway Config Function",source:"@site/versioned_docs/version-1.0.1/quick-start/ipfs-gateway-config.mdx",sourceDirName:"quick-start",slug:"/quick-start/ipfs-gateway-config",permalink:"/TSIF-Documentation/docs/quick-start/ipfs-gateway-config",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-1.0.1/quick-start/ipfs-gateway-config.mdx",tags:[],version:"1.0.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"IPFS Gateway Config"},sidebar:"tutorialSidebar",previous:{title:"Debugging",permalink:"/TSIF-Documentation/docs/quick-start/Debugging"},next:{title:"IPFS Pinning Service Config",permalink:"/TSIF-Documentation/docs/quick-start/ipfs-pinning-service-config"}},l={},u=[{value:"Get IPFS Gateway Config Function",id:"get-ipfs-gateway-config-function",level:2}],p={toc:u};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-ipfs-gateway-config-function"},"Get IPFS Gateway Config Function"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Get IPFS Gateway Config")," is a helper function that holds default information for commonly used ",(0,i.kt)("inlineCode",{parentName:"p"},"IPFS")," gateways ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get IPFS Gateway Configuration",src:n(5115).Z,width:"809",height:"198"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Additional gateways will be added in future updates if needed.")),(0,i.kt)("p",null,"This function returns a ",(0,i.kt)("em",{parentName:"p"},"Struct")," that contains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.h8,{text:"2",mdxType:"Step"})," The gateway URL to send the Http requests to.")))}f.isMDXComponent=!0},5115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02_get-gateway-config-05ce054cb4dd45d3efca1e943bb1eaee.png"}}]);