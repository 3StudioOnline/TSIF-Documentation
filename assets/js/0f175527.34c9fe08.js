"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[8930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,s=c["".concat(u,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>r,qh:()=>u,y$:()=>l});n(7462),n(7294);var a=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},l=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const r="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function o(e,t,n,r){return(0,a.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const u=e=>{let{children:t}=e;return o(0,"Released","#afa","#181")}},4966:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(4887);const l={},i="Changelog",o={type:"mdx",permalink:"/TSIF-Documentation/changelog",source:"@site/src/pages/changelog.mdx",title:"Changelog",description:"2.1.0 - [2023-12-24]",frontMatter:{}},u=[{value:"2.1.0 - 2023-12-24",id:"210---2023-12-24",level:3},{value:"2.0.0 - 2023-12-11",id:"200---2023-12-11",level:3},{value:"1.1.0",id:"110",level:3},{value:"1.0.2 - 2023-09-14",id:"102---2023-09-14",level:3},{value:"1.0.2 - 2022-05-12",id:"102---2022-05-12",level:3},{value:"1.0.2 - 2022-11-21",id:"102---2022-11-21",level:3},{value:"1.0.1 - 2022-11-06",id:"101---2022-11-06",level:3},{value:"1.0.0 - 2022-10-01",id:"100---2022-10-01",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"210---2023-12-24"},"2.1.0 - ","[2023-12-24]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"General Reader/Writer interface for any kind of data"),(0,r.kt)("li",{parentName:"ul"},"Specialized File Reader/Writer for binary, string, and image data"),(0,r.kt)("li",{parentName:"ul"},"IPFS HTTP Gateway: ",(0,r.kt)("inlineCode",{parentName:"li"},"4everland.io")))),(0,r.kt)("li",{parentName:"ul"},"Changed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Improved Manifest Manager UI"))),(0,r.kt)("li",{parentName:"ul"},"Removed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Obsolete ",(0,r.kt)("inlineCode",{parentName:"li"},"TSIF_LoadFromFile")," classes"),(0,r.kt)("li",{parentName:"ul"},"Obsolete ",(0,r.kt)("inlineCode",{parentName:"li"},"TSIF_SaveToFile")," classes")))),(0,r.kt)("h3",{id:"200---2023-12-11"},"2.0.0 - ","[2023-12-11]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cryptography support",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Key generation"),(0,r.kt)("li",{parentName:"ul"},"Signing and Verifying signatures"),(0,r.kt)("li",{parentName:"ul"},"Digest functions"))),(0,r.kt)("li",{parentName:"ul"},"Support for IPLD"),(0,r.kt)("li",{parentName:"ul"},"Support for IPNS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creating and Signing records"),(0,r.kt)("li",{parentName:"ul"},"Uploading and Downloading records"),(0,r.kt)("li",{parentName:"ul"},"IPNS functions, that behave the same as IPFS functions do"),(0,r.kt)("li",{parentName:"ul"},"IPNS Publish function for easy record creation and publishing in one function"))),(0,r.kt)("li",{parentName:"ul"},"CAR file support",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CAR Packing and Unpacking"),(0,r.kt)("li",{parentName:"ul"},"CAR Upload And Download"))),(0,r.kt)("li",{parentName:"ul"},"PAK file loading & mounting support at runtime"),(0,r.kt)("li",{parentName:"ul"},"IPFS Chunker",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Managing game .Pak files for dynamic access from IPFS"),(0,r.kt)("li",{parentName:"ul"},"Bluetility widget streamlining the chunker workflow, making it accessible and easy to use",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Profile management"),(0,r.kt)("li",{parentName:"ul"},"Key management"),(0,r.kt)("li",{parentName:"ul"},"IPNS Manifest creation and management"))))))),(0,r.kt)("li",{parentName:"ul"},"Removed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support for Unreal Engine 5.0")))),(0,r.kt)("h3",{id:"110"},"1.1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HTTP request management subsystem"),(0,r.kt)("li",{parentName:"ul"},"IPFS Status function"))),(0,r.kt)("li",{parentName:"ul"},"Changed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All IPFS functions now use the new subsystem"))),(0,r.kt)("li",{parentName:"ul"},"Fixed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Various small bugs and nullptr errors"))),(0,r.kt)("li",{parentName:"ul"},"Removed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support for Unreal Engine 4.27")))),(0,r.kt)("h3",{id:"102---2023-09-14"},"1.0.2 - ","[2023-09-14]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support for Unreal Engine 5.3")))),(0,r.kt)("h3",{id:"102---2022-05-12"},"1.0.2 - ","[2022-05-12]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support for Unreal Engine 5.2")))),(0,r.kt)("h3",{id:"102---2022-11-21"},"1.0.2 - ","[2022-11-21]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support for Unreal Engine 5.1")))),(0,r.kt)("h3",{id:"101---2022-11-06"},"1.0.1 - ","[2022-11-06]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support for macOS"),(0,r.kt)("li",{parentName:"ul"},"Support for iOS")))),(0,r.kt)("h3",{id:"100---2022-10-01"},"1.0.0 - ","[2022-10-01]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initial release")))}m.isMDXComponent=!0}}]);