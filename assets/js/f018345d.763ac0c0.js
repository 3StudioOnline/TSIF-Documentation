"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[4311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>i,h8:()=>a,qh:()=>l,y$:()=>o});n(7462),n(7294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function s(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},3268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(4887);const i={sidebar_position:3,title:"Get Data As Image"},s=void 0,l={unversionedId:"ipfs-functions/get-data-as-image",id:"version-2.1.0/ipfs-functions/get-data-as-image",title:"Get Data As Image",description:"Get Data As Image Function",source:"@site/versioned_docs/version-2.1.0/ipfs-functions/get-data-as-image.mdx",sourceDirName:"ipfs-functions",slug:"/ipfs-functions/get-data-as-image",permalink:"/TSIF-Documentation/docs/ipfs-functions/get-data-as-image",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.1.0/ipfs-functions/get-data-as-image.mdx",tags:[],version:"2.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Get Data As Image"},sidebar:"tutorialSidebar",previous:{title:"Get Data As String",permalink:"/TSIF-Documentation/docs/ipfs-functions/get-data-as-string"},next:{title:"Download File",permalink:"/TSIF-Documentation/docs/ipfs-functions/download-file"}},p={},c=[{value:"Get Data As Image Function",id:"get-data-as-image-function",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-data-as-image-function"},"Get Data As Image Function"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IPFS Get Data As Image")," Gets data as image from the ",(0,a.kt)("em",{parentName:"p"},"IPFS")," network for the specified CID/Path. This function requires\ninputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ipfs Pinning Service ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : Struct, holds the url and name of the pinning service the data was pinned to.\nIt can be left empty, but total number of bytes will not be known."),(0,a.kt)("li",{parentName:"ul"},"Ipfs Http Gateway ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : Struct, holds the url of the gateway to send the request to."),(0,a.kt)("li",{parentName:"ul"},"Ipfs Address ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," : Struct, holds the CID and path of the file on ",(0,a.kt)("em",{parentName:"li"},"IPFS")," network.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IPFS Get Data As Image",src:n(7484).Z,width:"1121",height:"875"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Success")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,a.kt)("em",{parentName:"p"},"IPFS")," network was successful only.")),(0,a.kt)("p",null,"If successful returns outputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request Handle ",(0,a.kt)(o.h8,{text:"4",mdxType:"Step"})," : Handle to a HTTP request, allows for cancellation of an ongoing request."),(0,a.kt)("li",{parentName:"ul"},"Bytes Received ",(0,a.kt)(o.h8,{text:"5",mdxType:"Step"})," : Number of bytes received while the request is still ongoing."),(0,a.kt)("li",{parentName:"ul"},"Bytes Total ",(0,a.kt)(o.h8,{text:"6",mdxType:"Step"})," : Total bytes expected to receive."),(0,a.kt)("li",{parentName:"ul"},"Response ",(0,a.kt)(o.h8,{text:"7",mdxType:"Step"})," : Struct, holds data such as headers, status code, and body of the response of the HTTP\nrequest."),(0,a.kt)("li",{parentName:"ul"},"Image ",(0,a.kt)(o.h8,{text:"8",mdxType:"Step"})," : image returned from the ",(0,a.kt)("em",{parentName:"li"},"IPFS")," network as ",(0,a.kt)("em",{parentName:"li"},"Texture 2D")," object reference.")))}d.isMDXComponent=!0},7484:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/03_get-data-as-image-1f38430b29f51d1926f3b4e23a272ef1.png"}}]);