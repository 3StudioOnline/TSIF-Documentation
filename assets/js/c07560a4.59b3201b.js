"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{AA:()=>c,V3:()=>l,h8:()=>a,qh:()=>s,y$:()=>o});r(7462),r(7294);var n=r(3905);const a=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},o=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e,t,r,a){return(0,n.kt)("div",{style:{backgroundColor:a,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return i(0,"Released","#afa","#181")},c=e=>{let{children:t}=e;return i(0,"In Progress","#ffa","#882")},l=e=>{let{children:t}=e;return i(0,"Planned","#aff","#288")}},3417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(4887);const i={sidebar_position:1,title:"Get Data"},s=void 0,c={unversionedId:"ipfs-functions/get-data",id:"version-1.0.0/ipfs-functions/get-data",title:"Get Data",description:"Get Data",source:"@site/versioned_docs/version-1.0.0/ipfs-functions/get-data.mdx",sourceDirName:"ipfs-functions",slug:"/ipfs-functions/get-data",permalink:"/TSIF-Documentation/docs/ipfs-functions/get-data",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-1.0.0/ipfs-functions/get-data.mdx",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Get Data"},sidebar:"tutorialSidebar",previous:{title:"Get Stat Data",permalink:"/TSIF-Documentation/docs/quick-start/stat-data"},next:{title:"Get Data As String",permalink:"/TSIF-Documentation/docs/ipfs-functions/get-data-as-string"}},l={},p=[{value:"Get Data",id:"get-data",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-data"},"Get Data"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IPFS Get Data")," Gets data from the IPFS network for the specified CID/Path. This function requires inputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ipfs Http Gateway ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : Struct, holds the url of the gateway to send the request to."),(0,a.kt)("li",{parentName:"ul"},"Ipfs Address ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : Struct, holds the CID and path of the file on ",(0,a.kt)("em",{parentName:"li"},"IPFS")," network.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IPFS Get Data",src:r(2034).Z,width:"774",height:"420"})),(0,a.kt)("p",null,"The returned ",(0,a.kt)("em",{parentName:"p"},"Response")," is a struct that holds data such as headers, status code, and body of the response of the HTTP\nrequest."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Success")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,a.kt)("em",{parentName:"p"},"IPFS")," network was successful only.")),(0,a.kt)("p",null,"If successful, returns the ",(0,a.kt)("em",{parentName:"p"},"Data")," ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," which is an array of bytes."))}d.isMDXComponent=!0},2034:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/01_get-data-5e029ae5a34e7e75e8b2e66d299b7c3f.png"}}]);