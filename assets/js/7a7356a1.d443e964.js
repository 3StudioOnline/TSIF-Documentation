"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[7845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=i,m=c["".concat(u,".").concat(g)]||c[g]||p[g]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,h8:()=>i,qh:()=>u,y$:()=>o});n(7462),n(7294);var r=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},o=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const i="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,i){return(0,r.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const u=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},1184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=n(7462),i=(n(7294),n(3905)),o=n(4887);const a={sidebar_position:1,title:"Debugging"},l=void 0,u={unversionedId:"quick-start/Debugging",id:"version-2.0.0/quick-start/Debugging",title:"Debugging",description:"Debug Settings",source:"@site/versioned_docs/version-2.0.0/quick-start/Debugging.mdx",sourceDirName:"quick-start",slug:"/quick-start/Debugging",permalink:"/TSIF-Documentation/docs/quick-start/Debugging",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.0.0/quick-start/Debugging.mdx",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Debugging"},sidebar:"tutorialSidebar",previous:{title:"Demo Project",permalink:"/TSIF-Documentation/docs/getting-started/demo-project"},next:{title:"IPFS Gateway Config",permalink:"/TSIF-Documentation/docs/quick-start/ipfs-gateway-config"}},s={},d=[{value:"Debug Settings",id:"debug-settings",level:2},{value:"Debug IPFS Network Communication",id:"debug-ipfs-network-communication",level:2},{value:"Debug IPNS Network Communication",id:"debug-ipns-network-communication",level:2},{value:"Debug uint64 data type",id:"debug-uint64-data-type",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"debug-settings"},"Debug Settings"),(0,i.kt)("p",null,"It is beneficial to examine the data we are interacting with, including the information transmitted via HTTP requests to\nIPFS and IPNS networks. Additionally, understanding the exposed ",(0,i.kt)("em",{parentName:"p"},"uint64")," values in Blueprints provides valuable insights.\nThese debugging features can be enabled by going to ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit | Project Settings | 3Studio | IPFS [User Settings]")," ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,i.kt)("h2",{id:"debug-ipfs-network-communication"},"Debug IPFS Network Communication"),(0,i.kt)("p",null,"You can select what is the data you want to be printed in the log when sending requests to IPFS, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.h8,{text:"2",mdxType:"Step"})," Enables debug logging for IPFS Download File or Get Data functions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.h8,{text:"3",mdxType:"Step"})," Enables debug logging for IPFS Upload File or Data functions.")),(0,i.kt)("p",null,"This will help you visualize the data in the ",(0,i.kt)("em",{parentName:"p"},"requests")," sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"IPFS")," network and the ",(0,i.kt)("em",{parentName:"p"},"responses")," that you will get\nback from it. Also, all errors will be logged if something wrong happened during the process."),(0,i.kt)("h2",{id:"debug-ipns-network-communication"},"Debug IPNS Network Communication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.h8,{text:"4",mdxType:"Step"})," Enables debug logging for all IPNS functions.")),(0,i.kt)("p",null,"This will help you visualize the data in the ",(0,i.kt)("em",{parentName:"p"},"requests")," sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"IPNS")," network and the ",(0,i.kt)("em",{parentName:"p"},"responses")," that you will get\nback from it. Also, all errors will be logged if something wrong happened during the process."),(0,i.kt)("h2",{id:"debug-uint64-data-type"},"Debug uint64 data type"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)(o.h8,{text:"5",mdxType:"Step"})," Enable Debug Logging for the exposed *uint64* data type.")),(0,i.kt)("p",null,"This will help you to visualize the value of the exposed ",(0,i.kt)("em",{parentName:"p"},"uint64")," data type while debugging in the editor."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Debugging Transactions",src:n(4539).Z,width:"3839",height:"2040"})))}c.isMDXComponent=!0},4539:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01_debugging-7411ee72ba448e8a7f51b2d7ae522e0c.png"}}]);