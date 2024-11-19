"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[159],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>p});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),d=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(a.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=o,m=u["".concat(a,".").concat(p)]||u[p]||f[p]||i;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=u;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var d=2;d<i;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4887:(e,r,t)=>{t.d(r,{UE:()=>c,h8:()=>o,qh:()=>a,y$:()=>i});t(87462),t(67294);var n=t(3905);const o=e=>{let{children:r,text:t}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},i=e=>{let{children:r}=e;return(0,n.kt)("span",{style:{color:"#faa"}},r)};function c(e){let{children:r,version:t}=e;const o="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function l(e,r,t,o){return(0,n.kt)("div",{style:{backgroundColor:o,color:t,border:"1px "+t+" solid",borderRadius:"5px",padding:".1rem .4rem"}},r)}const a=e=>{let{children:r}=e;return l(0,"Released","#afa","#181")}},97738:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=t(87462),o=(t(67294),t(3905)),i=t(4887);const c={sidebar_position:3,title:"Verify Record"},l=void 0,a={unversionedId:"ipns/functions/low-level/record/verify-record",id:"version-3.0.1/ipns/functions/low-level/record/verify-record",title:"Verify Record",description:"Verify Record",source:"@site/versioned_docs/version-3.0.1/ipns/functions/low-level/record/verify-record.mdx",sourceDirName:"ipns/functions/low-level/record",slug:"/ipns/functions/low-level/record/verify-record",permalink:"/TSIF-Documentation/docs/3.0.1/ipns/functions/low-level/record/verify-record",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.0.1/ipns/functions/low-level/record/verify-record.mdx",tags:[],version:"3.0.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Verify Record"},sidebar:"tutorialSidebar",previous:{title:"Sign Record",permalink:"/TSIF-Documentation/docs/3.0.1/ipns/functions/low-level/record/sign-record"},next:{title:"Serialize Record",permalink:"/TSIF-Documentation/docs/3.0.1/ipns/functions/low-level/record/serialize-record"}},d={},s=[{value:"Verify Record",id:"verify-record",level:2}],f={toc:s};function u(e){let{components:r,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,c,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"verify-record"},"Verify Record"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IPNS Verify Record")," Verifies the validity of a given record structure. This function requires inputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Record")," ",(0,o.kt)(i.h8,{text:"1",mdxType:"Step"})," : Record structure, record to be verified.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPNS Verify Record",src:t(35595).Z,width:"663",height:"349"})))}u.isMDXComponent=!0},35595:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/verify_record-7b752b304eb866a585b593da46c85b5e.png"}}]);