"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[8113],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4887:(e,t,r)=>{r.d(t,{UE:()=>o,h8:()=>i,qh:()=>c,y$:()=>a});r(7462),r(7294);var n=r(3905);const i=e=>{let{children:t,text:r}=e;return(0,n.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},r)},a=e=>{let{children:t}=e;return(0,n.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:r}=e;const i="#ffffff";return(0,n.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},r)}function l(e,t,r,i){return(0,n.kt)("div",{style:{backgroundColor:i,color:r,border:"1px "+r+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),i=(r(7294),r(3905)),a=r(4887);const o={sidebar_position:2,title:"Pack CAR File"},l=void 0,c={unversionedId:"car/pack-car-file",id:"version-2.1.0/car/pack-car-file",title:"Pack CAR File",description:"Pack CAR File Packs a file or directory (non-recursively) as a CAR file. This function requires inputs as follows:",source:"@site/versioned_docs/version-2.1.0/car/pack-car-file.mdx",sourceDirName:"car",slug:"/car/pack-car-file",permalink:"/TSIF-Documentation/docs/2.1.0/car/pack-car-file",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.1.0/car/pack-car-file.mdx",tags:[],version:"2.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Pack CAR File"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/TSIF-Documentation/docs/2.1.0/car/introduction"},next:{title:"Unpack CAR File",permalink:"/TSIF-Documentation/docs/2.1.0/car/unpack-car-file"}},s={},p=[],u={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Pack CAR File")," Packs a file or directory (non-recursively) as a ",(0,i.kt)("inlineCode",{parentName:"p"},"CAR")," file. This function requires inputs as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Source File Path")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : Path to the source file or directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Destination Path")," ",(0,i.kt)(a.h8,{text:"2",mdxType:"Step"})," : Path to write the ",(0,i.kt)("inlineCode",{parentName:"li"},"CAR")," file to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Car File Name")," ",(0,i.kt)(a.h8,{text:"3",mdxType:"Step"})," : Name of the ",(0,i.kt)("inlineCode",{parentName:"li"},"CAR")," file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Create Path If Missing")," ",(0,i.kt)(a.h8,{text:"4",mdxType:"Step"})," : Creates the destination path to where the ",(0,i.kt)("inlineCode",{parentName:"li"},"CAR")," file will be written to\nif it is missing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Overwrite Existing File")," ",(0,i.kt)(a.h8,{text:"5",mdxType:"Step"})," : If set to false and the file exists this function will abort with failure.\nOtherwise, an existing file will be overwritten.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Extract Public Key",src:r(5693).Z,width:"1603",height:"1171"})),(0,i.kt)("p",null,"If successful, returns a string containing the path to the packed ",(0,i.kt)("inlineCode",{parentName:"p"},"CAR")," file ",(0,i.kt)("em",{parentName:"p"},"Car File Path")," ",(0,i.kt)(a.h8,{text:"6",mdxType:"Step"}),"."))}d.isMDXComponent=!0},5693:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pack-car-file-8be19903ab6643b21da100f8c26eb684.png"}}]);