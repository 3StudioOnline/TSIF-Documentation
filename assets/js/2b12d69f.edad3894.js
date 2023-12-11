"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[6402],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:e},l),{},{components:n})):r.createElement(m,i({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(t,e,n)=>{n.d(e,{UE:()=>i,h8:()=>a,qh:()=>c,y$:()=>o});n(7462),n(7294);var r=n(3905);const a=t=>{let{children:e,text:n}=t;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=t=>{let{children:e}=t;return(0,r.kt)("span",{style:{color:"#faa"}},e)};function i(t){let{children:e,version:n}=t;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function s(t,e,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},e)}const c=t=>{let{children:e}=t;return s(0,"Released","#afa","#181")}},9190:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905)),o=n(4887);const i={sidebar_position:2,title:"Get Data As String"},s=void 0,c={unversionedId:"ipfs-functions/get-data-as-string",id:"version-1.0.2/ipfs-functions/get-data-as-string",title:"Get Data As String",description:"Get Data As String Function",source:"@site/versioned_docs/version-1.0.2/ipfs-functions/get-data-as-string.mdx",sourceDirName:"ipfs-functions",slug:"/ipfs-functions/get-data-as-string",permalink:"/TSIF-Documentation/docs/1.0.2/ipfs-functions/get-data-as-string",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-1.0.2/ipfs-functions/get-data-as-string.mdx",tags:[],version:"1.0.2",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Get Data As String"},sidebar:"tutorialSidebar",previous:{title:"Get Data",permalink:"/TSIF-Documentation/docs/1.0.2/ipfs-functions/get-data"},next:{title:"Get Data As Image",permalink:"/TSIF-Documentation/docs/1.0.2/ipfs-functions/get-data-as-image"}},p={},l=[{value:"Get Data As String Function",id:"get-data-as-string-function",level:2}],u={toc:l};function d(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-data-as-string-function"},"Get Data As String Function"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IPFS Get Data As String")," Gets data as string from the ",(0,a.kt)("em",{parentName:"p"},"IPFS")," network for the specified CID/Path. This function requires\ninputs as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ipfs Http Gateway ",(0,a.kt)(o.h8,{text:"1",mdxType:"Step"})," : Struct, holds the url of the gateway to send the request to."),(0,a.kt)("li",{parentName:"ul"},"Ipfs Address ",(0,a.kt)(o.h8,{text:"2",mdxType:"Step"})," : Struct, holds the CID and path of the file on ",(0,a.kt)("em",{parentName:"li"},"IPFS")," network.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IPFS Get Data As String",src:n(9750).Z,width:"818",height:"418"})),(0,a.kt)("p",null,"The returned ",(0,a.kt)("em",{parentName:"p"},"Response")," is a struct that holds data such as headers, status code, and body of the response of the HTTP\nrequest."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If ",(0,a.kt)("em",{parentName:"p"},"Success")," is ",(0,a.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,a.kt)("em",{parentName:"p"},"IPFS")," network was successful only.")),(0,a.kt)("p",null,"If successful, returns the ",(0,a.kt)("em",{parentName:"p"},"String")," ",(0,a.kt)(o.h8,{text:"3",mdxType:"Step"})," which is the data returned in ",(0,a.kt)("em",{parentName:"p"},"String")," format."))}d.isMDXComponent=!0},9750:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/02_get-data-as-string-db9b6c2a91b475e20fe1a7ad3b70e5e5.png"}}]);