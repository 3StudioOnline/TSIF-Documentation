"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[1755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,h8:()=>o,qh:()=>l,y$:()=>i});n(87462),n(67294);var r=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const o="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function s(e,t,n,o){return(0,r.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return s(0,"Released","#afa","#181")}},25690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905)),i=n(4887);const a={sidebar_position:1,title:"Debugging"},s=void 0,l={unversionedId:"quick-start/Debugging",id:"version-1.1.0/quick-start/Debugging",title:"Debugging",description:"Debug IPFS Network Communication",source:"@site/versioned_docs/version-1.1.0/quick-start/Debugging.mdx",sourceDirName:"quick-start",slug:"/quick-start/Debugging",permalink:"/TSIF-Documentation/docs/1.1.0/quick-start/Debugging",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-1.1.0/quick-start/Debugging.mdx",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Debugging"},sidebar:"tutorialSidebar",previous:{title:"Demo Project",permalink:"/TSIF-Documentation/docs/1.1.0/getting-started/demo-project"},next:{title:"IPFS Gateway Config",permalink:"/TSIF-Documentation/docs/1.1.0/quick-start/ipfs-gateway-config"}},c={},u=[{value:"Debug IPFS Network Communication",id:"debug-ipfs-network-communication",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"debug-ipfs-network-communication"},"Debug IPFS Network Communication"),(0,o.kt)("p",null,"Sometimes it is helpful being able to take a look at the data sent and received through Http requests to IPFS network.\nThis debugging feature can be enabled by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit | Project Settings | 3Studio | IPFS [User Settings]")," ",(0,o.kt)(i.h8,{text:"1",mdxType:"Step"}),"."),(0,o.kt)("p",null,"You can select what is the data you want to be printed in the log when sending requests to IPFS, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(i.h8,{text:"2",mdxType:"Step"})," enables debug logging for IPFS Download File or Get Data functions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)(i.h8,{text:"3",mdxType:"Step"})," enables debug logging for IPFS Upload File or Data functions.")),(0,o.kt)("p",null,"This will help you visualize the data in the ",(0,o.kt)("em",{parentName:"p"},"requests")," sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"IPFS")," network and the ",(0,o.kt)("em",{parentName:"p"},"responses")," that you will get\nback from it. Also, all errors will be logged if something wrong happened during the process."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Debugging Transactions",src:n(68266).Z,width:"1928",height:"1048"})))}d.isMDXComponent=!0},68266:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01_debugging-ipfs-c65e65b1f0c012165c71261148fdee1c.png"}}]);