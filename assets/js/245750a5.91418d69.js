"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,m=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?r.createElement(m,a(a({ref:t},f),{},{components:n})):r.createElement(m,a({ref:t},f))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{AA:()=>d,UE:()=>a,V3:()=>f,h8:()=>o,qh:()=>s,y$:()=>i});n(7462),n(7294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const o="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")},d=e=>{let{children:t}=e;return l(0,"In Progress","#ffa","#882")},f=e=>{let{children:t}=e;return l(0,"Planned","#aff","#288")}},4930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>f});var r=n(7462),o=(n(7294),n(3905)),i=n(4887);const a={sidebar_position:4,title:"Download File"},l=void 0,s={unversionedId:"ipfs-functions/download-file",id:"version-1.0.2/ipfs-functions/download-file",title:"Download File",description:"Download File Function",source:"@site/versioned_docs/version-1.0.2/ipfs-functions/download-file.mdx",sourceDirName:"ipfs-functions",slug:"/ipfs-functions/download-file",permalink:"/TSIF-Documentation/docs/ipfs-functions/download-file",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-1.0.2/ipfs-functions/download-file.mdx",tags:[],version:"1.0.2",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Download File"},sidebar:"tutorialSidebar",previous:{title:"Get Data As Image",permalink:"/TSIF-Documentation/docs/ipfs-functions/get-data-as-image"},next:{title:"Upload Data",permalink:"/TSIF-Documentation/docs/ipfs-functions/upload-data"}},d={},f=[{value:"Download File Function",id:"download-file-function",level:2}],p={toc:f};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"download-file-function"},"Download File Function"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IPFS Download File")," Downloads a file from the ",(0,o.kt)("em",{parentName:"p"},"IPFS")," network for the specified CID/Path. This function requires\ninputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ipfs Http Gateway ",(0,o.kt)(i.h8,{text:"1",mdxType:"Step"})," : Struct, holds the url of the gateway to send the request to."),(0,o.kt)("li",{parentName:"ul"},"Ipfs Address ",(0,o.kt)(i.h8,{text:"2",mdxType:"Step"})," : Struct, holds the CID and path of the file on ",(0,o.kt)("em",{parentName:"li"},"IPFS")," network."),(0,o.kt)("li",{parentName:"ul"},"Write To File path ",(0,o.kt)(i.h8,{text:"3",mdxType:"Step"})," : The filepath where the downloaded data is written to."),(0,o.kt)("li",{parentName:"ul"},"Create Path If Missing ",(0,o.kt)(i.h8,{text:"4",mdxType:"Step"})," : Creates the filepath to where the downloaded data should be written to\nif it is missing."),(0,o.kt)("li",{parentName:"ul"},"Overwrite Existing File ",(0,o.kt)(i.h8,{text:"5",mdxType:"Step"})," : If set to false and the file exists this function will abort with failure.\nOtherwise, an existing file will be overwritten.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPFS Download File",src:n(5567).Z,width:"818",height:"433"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," is a struct that holds data such as headers, status code, and body of the response of the HTTP\nrequest."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," that means that the response from the ",(0,o.kt)("em",{parentName:"p"},"IPFS")," network was successful and writing file to disk to\nthe specified path was also successful.")))}c.isMDXComponent=!0},5567:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/04_download-file-f203ecb0d47a2adf09fbb0d648700c21.png"}}]);