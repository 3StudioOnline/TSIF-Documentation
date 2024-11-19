"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[95],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return t?n.createElement(m,a(a({ref:r},d),{},{components:t})):n.createElement(m,a({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4887:(e,r,t)=>{t.d(r,{UE:()=>a,h8:()=>o,qh:()=>s,y$:()=>i});t(87462),t(67294);var n=t(3905);const o=e=>{let{children:r,text:t}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},i=e=>{let{children:r}=e;return(0,n.kt)("span",{style:{color:"#faa"}},r)};function a(e){let{children:r,version:t}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function c(e,r,t,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:t,border:"1px "+t+" solid",borderRadius:"5px",padding:".1rem .4rem"}},r)}const s=e=>{let{children:r}=e;return c(0,"Released","#afa","#181")}},67836:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=t(87462),o=(t(67294),t(3905)),i=t(4887);const a={sidebar_position:5,title:"Parse Record"},c=void 0,s={unversionedId:"ipns/functions/low-level/record/parse-record",id:"version-3.0.1/ipns/functions/low-level/record/parse-record",title:"Parse Record",description:"Parse Record",source:"@site/versioned_docs/version-3.0.1/ipns/functions/low-level/record/parse-record.mdx",sourceDirName:"ipns/functions/low-level/record",slug:"/ipns/functions/low-level/record/parse-record",permalink:"/TSIF-Documentation/docs/3.0.1/ipns/functions/low-level/record/parse-record",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.0.1/ipns/functions/low-level/record/parse-record.mdx",tags:[],version:"3.0.1",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Parse Record"},sidebar:"tutorialSidebar",previous:{title:"Serialize Record",permalink:"/TSIF-Documentation/docs/3.0.1/ipns/functions/low-level/record/serialize-record"},next:{title:"Get Record",permalink:"/TSIF-Documentation/docs/3.0.1/ipns/functions/low-level/record/get-record"}},l={},d=[{value:"Parse Record",id:"parse-record",level:2}],p={toc:d};function u(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"parse-record"},"Parse Record"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IPNS Parse Record")," Parses a given protobuf-encoded byte array into an IPNS record structure. This function requires\ninputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Ipns Name")," ",(0,o.kt)(i.h8,{text:"1",mdxType:"Step"})," : UTF-8 String, holds the ",(0,o.kt)("strong",{parentName:"li"},"IPNS name")," associated with given record data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Serialized")," ",(0,o.kt)(i.h8,{text:"2",mdxType:"Step"})," : Byte array, the serialized IPNS record structure.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPNS Parse Record",src:t(27914).Z,width:"675",height:"385"})),(0,o.kt)("p",null,"If successful, returns the ",(0,o.kt)("em",{parentName:"p"},"Record")," ",(0,o.kt)(i.h8,{text:"3",mdxType:"Step"})," data structure."))}u.isMDXComponent=!0},27914:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/parse_record-5d5aa13c11e39f53fa4413201df9b03c.png"}}]);