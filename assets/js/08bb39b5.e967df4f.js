"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[3055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>i,h8:()=>o,qh:()=>c,y$:()=>a});r(87462),r(67294);var n=r(3905);const o=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function i(e){let{children:t,version:r}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function l(e,t,r,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},57438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(4887);const i={sidebar_position:7,title:"Upload Record"},l=void 0,c={unversionedId:"ipns/functions/low-level/record/upload-record",id:"version-3.0.1/ipns/functions/low-level/record/upload-record",title:"Upload Record",description:"Upload Record",source:"@site/versioned_docs/version-3.0.1/ipns/functions/low-level/record/upload-record.mdx",sourceDirName:"ipns/functions/low-level/record",slug:"/ipns/functions/low-level/record/upload-record",permalink:"/TSIF-Documentation/docs/3.0.1/ipns/functions/low-level/record/upload-record",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.0.1/ipns/functions/low-level/record/upload-record.mdx",tags:[],version:"3.0.1",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Upload Record"},sidebar:"tutorialSidebar",previous:{title:"Get Record",permalink:"/TSIF-Documentation/docs/3.0.1/ipns/functions/low-level/record/get-record"},next:{title:"Creation",permalink:"/TSIF-Documentation/docs/3.0.1/ipld/nodes/creation"}},s={},d=[{value:"Upload Record",id:"upload-record",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"upload-record"},"Upload Record"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IPNS Upload Record")," Uploads a record to the IPFS ecosystem through a pinning service. This function requires inputs\nas follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Record")," ",(0,o.kt)(a.h8,{text:"1",mdxType:"Step"})," : Record structure, signed record to be uploaded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ipns Service")," ",(0,o.kt)(a.h8,{text:"2",mdxType:"Step"})," : Enum, the pinning service to send the record to.")),(0,o.kt)("p",null,"There's also an optional input ",(0,o.kt)("inlineCode",{parentName:"p"},"Request Name")," ",(0,o.kt)(a.h8,{text:"3",mdxType:"Step"}),", a unique identifier for the plugin's HTTP subsystem. It\nallows to fetch the request by name. This is purely optional and only changes how the HTTP request will be managed\ninternally by the plugin."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPNS Upload Record",src:r(81705).Z,width:"892",height:"553"})),(0,o.kt)("p",null,"The returned ",(0,o.kt)("em",{parentName:"p"},"Response")," is a struct that holds data such as headers, status code, and body of the response of the HTTP\nrequest."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("em",{parentName:"p"},"Success")," is ",(0,o.kt)("em",{parentName:"p"},"True")," that only means that the response from the ",(0,o.kt)("em",{parentName:"p"},"IPFS")," network was successful only.")))}u.isMDXComponent=!0},81705:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/upload_record-7a3311db9fd6ccf2fd9f913b73b3690c.png"}}]);