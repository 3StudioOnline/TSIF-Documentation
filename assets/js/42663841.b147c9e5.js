"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[2589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>o,qh:()=>p,y$:()=>a});n(87462),n(67294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const o="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const p=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},35343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),a=n(4887);const i={sidebar_position:6,title:"Upload File"},l=void 0,p={unversionedId:"ipfs-functions/upload-file",id:"version-3.1.0/ipfs-functions/upload-file",title:"Upload File",description:"Upload File Function",source:"@site/versioned_docs/version-3.1.0/ipfs-functions/upload-file.mdx",sourceDirName:"ipfs-functions",slug:"/ipfs-functions/upload-file",permalink:"/TSIF-Documentation/docs/ipfs-functions/upload-file",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.1.0/ipfs-functions/upload-file.mdx",tags:[],version:"3.1.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Upload File"},sidebar:"tutorialSidebar",previous:{title:"Upload Data",permalink:"/TSIF-Documentation/docs/ipfs-functions/upload-data"},next:{title:"IPFS Status",permalink:"/TSIF-Documentation/docs/ipfs-functions/ipfs-status"}},s={},u=[{value:"Upload File Function",id:"upload-file-function",level:2}],c={toc:u};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"upload-file-function"},"Upload File Function"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IPFS Upload File")," Uploads a local file to the ",(0,o.kt)("em",{parentName:"p"},"IPFS")," network. This function requires inputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ipfs Pinning Service ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : Struct, holds the url and name of the pinning service to send the request to."),(0,o.kt)("li",{parentName:"ul"},"Bearer Token ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : The API token for authentication."),(0,o.kt)("li",{parentName:"ul"},"File To Upload ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"})," : The path of the file to upload."),(0,o.kt)("li",{parentName:"ul"},"Save As ",(0,o.kt)(a.h8,{text:"4",mdxType:"Step"})," : Optional alternate filename for the uploaded file on IPFS.\nIf left empty, the original filename will be used.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPFS Upload File",src:n(61676).Z,width:"1293",height:"1027"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," that only means the upload to the ",(0,o.kt)("em",{parentName:"p"},"IPFS")," network was successful.")),(0,o.kt)("p",null,"If successful returns outputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request Handle ",(0,o.kt)(a.h8,{text:"5",mdxType:"Step"})," : Handle to a HTTP request, allows for cancellation of an ongoing request."),(0,o.kt)("li",{parentName:"ul"},"Bytes Sent ",(0,o.kt)(a.h8,{text:"6",mdxType:"Step"})," : Number of bytes sent while the request is still ongoing."),(0,o.kt)("li",{parentName:"ul"},"Bytes Total ",(0,o.kt)(a.h8,{text:"7",mdxType:"Step"})," : Total bytes expected to receive."),(0,o.kt)("li",{parentName:"ul"},"Response ",(0,o.kt)(a.h8,{text:"8",mdxType:"Step"})," : Struct, holds data such as headers, status code, and body of the response of the HTTP\nrequest."),(0,o.kt)("li",{parentName:"ul"},"CID ",(0,o.kt)(a.h8,{text:"9",mdxType:"Step"})," : The ",(0,o.kt)("em",{parentName:"li"},"CID")," of the uploaded data.")))}d.isMDXComponent=!0},61676:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/06_upload-file-39a2b49f821c7115fbd31a07786e0abc.png"}}]);