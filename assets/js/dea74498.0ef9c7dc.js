"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[8078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>o,qh:()=>p,y$:()=>r});n(7462),n(7294);var a=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const o="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,o){return(0,a.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const p=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},4518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(4887);const i={sidebar_position:5,title:"Upload Data"},l=void 0,p={unversionedId:"ipfs-functions/upload-data",id:"version-2.1.0/ipfs-functions/upload-data",title:"Upload Data",description:"Upload Data Function",source:"@site/versioned_docs/version-2.1.0/ipfs-functions/upload-data.mdx",sourceDirName:"ipfs-functions",slug:"/ipfs-functions/upload-data",permalink:"/TSIF-Documentation/docs/2.1.0/ipfs-functions/upload-data",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.1.0/ipfs-functions/upload-data.mdx",tags:[],version:"2.1.0",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Upload Data"},sidebar:"tutorialSidebar",previous:{title:"Download File",permalink:"/TSIF-Documentation/docs/2.1.0/ipfs-functions/download-file"},next:{title:"Upload File",permalink:"/TSIF-Documentation/docs/2.1.0/ipfs-functions/upload-file"}},s={},d=[{value:"Upload Data Function",id:"upload-data-function",level:2}],u={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"upload-data-function"},"Upload Data Function"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IPFS Upload Data")," Uploads data to the ",(0,o.kt)("em",{parentName:"p"},"IPFS")," network. This function requires inputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ipfs Pinning Service ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : Struct, holds the url and name of the pinning service to send the request to."),(0,o.kt)("li",{parentName:"ul"},"Bearer Token ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," : The API token for authentication."),(0,o.kt)("li",{parentName:"ul"},"Data To Upload ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"})," : The data to upload(as an array of bytes)."),(0,o.kt)("li",{parentName:"ul"},"Save As ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"})," : Mandatory filename for the uploaded data on IPFS.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPFS Upload Data",src:n(5743).Z,width:"931",height:"811"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," that only means the upload to the ",(0,o.kt)("em",{parentName:"p"},"IPFS")," network was successful.")),(0,o.kt)("p",null,"If successful returns outputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request Handle ",(0,o.kt)(r.h8,{text:"5",mdxType:"Step"})," : Handle to a HTTP request, allows for cancellation of an ongoing request."),(0,o.kt)("li",{parentName:"ul"},"Bytes Sent ",(0,o.kt)(r.h8,{text:"6",mdxType:"Step"})," : Number of bytes sent while the request is still ongoing."),(0,o.kt)("li",{parentName:"ul"},"Bytes Total ",(0,o.kt)(r.h8,{text:"7",mdxType:"Step"})," : Total bytes expected to receive."),(0,o.kt)("li",{parentName:"ul"},"Response ",(0,o.kt)(r.h8,{text:"8",mdxType:"Step"})," : Struct, holds data such as headers, status code, and body of the response of the HTTP\nrequest."),(0,o.kt)("li",{parentName:"ul"},"CID ",(0,o.kt)(r.h8,{text:"9",mdxType:"Step"})," : The ",(0,o.kt)("em",{parentName:"li"},"CID")," of the uploaded data.")))}c.isMDXComponent=!0},5743:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/05_upload-data-5c69fe45f9f381994cec3b5a67f1983f.png"}}]);