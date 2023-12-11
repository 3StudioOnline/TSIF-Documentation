"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[9178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>a,qh:()=>l,y$:()=>o});n(7462),n(7294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function p(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return p(0,"Released","#afa","#181")}},5541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4887);const i={sidebar_position:5,title:"Upload Data"},p=void 0,l={unversionedId:"ipfs-functions/upload-data",id:"version-1.0.2/ipfs-functions/upload-data",title:"Upload Data",description:"Upload Data Function",source:"@site/versioned_docs/version-1.0.2/ipfs-functions/upload-data.mdx",sourceDirName:"ipfs-functions",slug:"/ipfs-functions/upload-data",permalink:"/TSIF-Documentation/docs/1.0.2/ipfs-functions/upload-data",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-1.0.2/ipfs-functions/upload-data.mdx",tags:[],version:"1.0.2",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Upload Data"},sidebar:"tutorialSidebar",previous:{title:"Download File",permalink:"/TSIF-Documentation/docs/1.0.2/ipfs-functions/download-file"},next:{title:"Upload File",permalink:"/TSIF-Documentation/docs/1.0.2/ipfs-functions/upload-file"}},s={},d=[{value:"Upload Data Function",id:"upload-data-function",level:2}],u={toc:d};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"upload-data-function"},"Upload Data Function"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IPFS Upload Data")," Uploads data to the ",(0,a.kt)("em",{parentName:"p"},"IPFS")," network. This function requires inputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ipfs Pinning Service ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : Struct, holds the url and name of the pinning service to send the request to."),(0,a.kt)("li",{parentName:"ul"},"Bearer Token ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : The API token for authentication."),(0,a.kt)("li",{parentName:"ul"},"Data To Upload ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," : The data to upload(as an array of bytes)."),(0,a.kt)("li",{parentName:"ul"},"Save As ",(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," : Mandatory filename for the uploaded data on IPFS.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IPFS Upload Data",src:n(1886).Z,width:"868",height:"465"})),(0,a.kt)("p",null,"The returned ",(0,a.kt)("em",{parentName:"p"},"Response")," is a struct that holds data such as headers, status code, and body of the response of the HTTP\nrequest."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Success")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means the upload to the ",(0,a.kt)("em",{parentName:"p"},"IPFS")," network was successful.")),(0,a.kt)("p",null,"If successful, returns the ",(0,a.kt)("em",{parentName:"p"},"CID")," ",(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," of the uploaded data in ",(0,a.kt)("em",{parentName:"p"},"String")," format."))}c.isMDXComponent=!0},1886:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/05_upload-data-1f3bf400756a639cd15115c0614b75b2.png"}}]);