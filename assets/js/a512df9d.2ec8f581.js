"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[2859],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=r,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,h8:()=>r,qh:()=>s,y$:()=>i});n(7462),n(7294);var o=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,o.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,o.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const r="#ffffff";return(0,o.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,r){return(0,o.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},1015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905)),i=n(4887);const a={sidebar_position:4,title:"Download File"},l=void 0,s={unversionedId:"ipfs-functions/download-file",id:"version-3.0.0/ipfs-functions/download-file",title:"Download File",description:"Download File Function",source:"@site/versioned_docs/version-3.0.0/ipfs-functions/download-file.mdx",sourceDirName:"ipfs-functions",slug:"/ipfs-functions/download-file",permalink:"/TSIF-Documentation/docs/ipfs-functions/download-file",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.0.0/ipfs-functions/download-file.mdx",tags:[],version:"3.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Download File"},sidebar:"tutorialSidebar",previous:{title:"Get Data As Image",permalink:"/TSIF-Documentation/docs/ipfs-functions/get-data-as-image"},next:{title:"Upload Data",permalink:"/TSIF-Documentation/docs/ipfs-functions/upload-data"}},d={},p=[{value:"Download File Function",id:"download-file-function",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"download-file-function"},"Download File Function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IPFS Download File")," Downloads a file from the ",(0,r.kt)("em",{parentName:"p"},"IPFS")," network for the specified CID/Path. This function requires\ninputs as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ipfs Pinning Service ",(0,r.kt)(i.h8,{text:"1",mdxType:"Step"})," : Struct, holds the url and name of the pinning service the data was pinned to.\nIt can be left empty, but total number of bytes will not be known."),(0,r.kt)("li",{parentName:"ul"},"Ipfs Http Gateway ",(0,r.kt)(i.h8,{text:"2",mdxType:"Step"})," : Struct, holds the url of the gateway to send the request to."),(0,r.kt)("li",{parentName:"ul"},"Ipfs Address ",(0,r.kt)(i.h8,{text:"3",mdxType:"Step"})," : Struct, holds the CID and path of the file on ",(0,r.kt)("em",{parentName:"li"},"IPFS")," network."),(0,r.kt)("li",{parentName:"ul"},"Write To File path ",(0,r.kt)(i.h8,{text:"4",mdxType:"Step"})," : The filepath where the downloaded data is written to."),(0,r.kt)("li",{parentName:"ul"},"Create Path If Missing ",(0,r.kt)(i.h8,{text:"5",mdxType:"Step"})," : Creates the filepath to where the downloaded data should be written to\nif it is missing."),(0,r.kt)("li",{parentName:"ul"},"Overwrite Existing File ",(0,r.kt)(i.h8,{text:"6",mdxType:"Step"})," : If set to false and the file exists this function will abort with failure.\nOtherwise, an existing file will be overwritten.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IPFS Download File",src:n(6652).Z,width:"1481",height:"961"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("em",{parentName:"p"},"Success")," is ",(0,r.kt)("em",{parentName:"p"},"True")," that means that the response from the ",(0,r.kt)("em",{parentName:"p"},"IPFS")," network was successful and writing file to disk to\nthe specified path was also successful.")),(0,r.kt)("p",null,"If successful returns outputs as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request Handle ",(0,r.kt)(i.h8,{text:"7",mdxType:"Step"})," : Handle to a HTTP request, allows for cancellation of an ongoing request."),(0,r.kt)("li",{parentName:"ul"},"Bytes Received ",(0,r.kt)(i.h8,{text:"8",mdxType:"Step"})," : Number of bytes received while the request is still ongoing."),(0,r.kt)("li",{parentName:"ul"},"Bytes Total ",(0,r.kt)(i.h8,{text:"9",mdxType:"Step"})," : Total bytes expected to receive."),(0,r.kt)("li",{parentName:"ul"},"Response ",(0,r.kt)(i.h8,{text:"10",mdxType:"Step"})," : Struct, holds data such as headers, status code, and body of the response of the HTTP\nrequest.")))}c.isMDXComponent=!0},6652:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/04_download-file-d2a736adb37723545406497f2b657a81.png"}}]);