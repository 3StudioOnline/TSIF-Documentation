"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[2607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>o,h8:()=>i,qh:()=>c,y$:()=>a});n(7462),n(7294);var r=n(3905);const i=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},a=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:n}=e;const i="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:i,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function l(e,t,n,i){return(0,r.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const c=e=>{let{children:t}=e;return l(0,"Released","#afa","#181")}},3057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),a=n(4887);const o={sidebar_position:3,title:"Unpack CAR File"},l=void 0,c={unversionedId:"car/unpack-car-file",id:"version-3.0.1/car/unpack-car-file",title:"Unpack CAR File",description:"Unpack CAR File Unpacks all files contained in the specified CAR file to the destination path. This function",source:"@site/versioned_docs/version-3.0.1/car/unpack-car-file.mdx",sourceDirName:"car",slug:"/car/unpack-car-file",permalink:"/TSIF-Documentation/docs/car/unpack-car-file",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.0.1/car/unpack-car-file.mdx",tags:[],version:"3.0.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Unpack CAR File"},sidebar:"tutorialSidebar",previous:{title:"Pack CAR File",permalink:"/TSIF-Documentation/docs/car/pack-car-file"},next:{title:"Overview",permalink:"/TSIF-Documentation/docs/manifest-manager/overview"}},s={},p=[],u={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Unpack CAR File")," Unpacks all files contained in the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"CAR")," file to the destination path. This function\nrequires inputs as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CAR File Path")," ",(0,i.kt)(a.h8,{text:"1",mdxType:"Step"})," : Path to the ",(0,i.kt)("inlineCode",{parentName:"li"},"CAR")," file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Destination Path")," ",(0,i.kt)(a.h8,{text:"2",mdxType:"Step"})," : Path to write the unpacked files to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Create Path If Missing")," ",(0,i.kt)(a.h8,{text:"3",mdxType:"Step"})," : Creates the destination path to where the unpacked files should be written to\nif it is missing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Overwrite Existing File")," ",(0,i.kt)(a.h8,{text:"4",mdxType:"Step"})," : If set to false and the file exists this function will abort with failure.\nOtherwise, an existing file will be overwritten.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Extract Public Key",src:n(3530).Z,width:"1610",height:"1081"})),(0,i.kt)("p",null,"If successful, returns a list of names for the unpacked files ",(0,i.kt)("em",{parentName:"p"},"Unpacked File Names")," ",(0,i.kt)(a.h8,{text:"5",mdxType:"Step"}),"."))}d.isMDXComponent=!0},3530:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/unpack-car-file-582b6ad911875733111ba8cd59594d24.png"}}]);