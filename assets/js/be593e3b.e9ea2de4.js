"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[9832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,h8:()=>o,qh:()=>l,y$:()=>r});n(7462),n(7294);var i=n(3905);const o=e=>{let{children:t,text:n}=e;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},r=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const o="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:o,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function d(e,t,n,o){return(0,i.kt)("div",{style:{backgroundColor:o,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return d(0,"Released","#afa","#181")}},2371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),o=(n(7294),n(3905)),r=n(4887);const a={sidebar_position:2,title:"Modification"},d=void 0,l={unversionedId:"ipld/nodes/modification",id:"version-3.0.0/ipld/nodes/modification",title:"Modification",description:"Setting",source:"@site/versioned_docs/version-3.0.0/ipld/nodes/modification.mdx",sourceDirName:"ipld/nodes",slug:"/ipld/nodes/modification",permalink:"/TSIF-Documentation/docs/ipld/nodes/modification",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.0.0/ipld/nodes/modification.mdx",tags:[],version:"3.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Modification"},sidebar:"tutorialSidebar",previous:{title:"Creation",permalink:"/TSIF-Documentation/docs/ipld/nodes/creation"},next:{title:"Other",permalink:"/TSIF-Documentation/docs/ipld/nodes/other"}},p={},s=[{value:"Setting",id:"setting",level:2},{value:"Getting",id:"getting",level:2},{value:"Kind",id:"kind",level:2},{value:"Get Kind",id:"get-kind",level:3},{value:"Is Kind",id:"is-kind",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setting"},"Setting"),(0,o.kt)("p",null,"IPLD node value can be ",(0,o.kt)("em",{parentName:"p"},"Set")," using a ",(0,o.kt)("inlineCode",{parentName:"p"},"Set")," function corresponding to the desired kind.\nAll ",(0,o.kt)("inlineCode",{parentName:"p"},"Set")," functions assign a new ",(0,o.kt)("em",{parentName:"p"},"value")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," to the node and, if applicable, change its kind."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPLD Node Set",src:n(2016).Z,width:"713",height:"541"})),(0,o.kt)("h2",{id:"getting"},"Getting"),(0,o.kt)("p",null,"IPLD node value can be ",(0,o.kt)("em",{parentName:"p"},"obtained")," using a ",(0,o.kt)("inlineCode",{parentName:"p"},"Get")," function corresponding to its kind.\nAll ",(0,o.kt)("inlineCode",{parentName:"p"},"Get")," functions return the ",(0,o.kt)("em",{parentName:"p"},"value")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," assigned to the node."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPLD Node Get",src:n(3037).Z,width:"665",height:"277"})),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"All ",(0,o.kt)("inlineCode",{parentName:"p"},"Get")," functions should be called only on specific IPLD node kinds\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Boolean")," should only be called on a Boolean node). Kind can be checked using ",(0,o.kt)("a",{parentName:"p",href:"#kind"},"Kind Functions"),".")),(0,o.kt)("h2",{id:"kind"},"Kind"),(0,o.kt)("h3",{id:"get-kind"},"Get Kind"),(0,o.kt)("p",null,"IPLD node kind can be ",(0,o.kt)("em",{parentName:"p"},"obtained")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Kind")," property getter, that returns an ",(0,o.kt)("em",{parentName:"p"},"enum value")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),"\ncontaining the kind of the node."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPLD Node Get Kind",src:n(3369).Z,width:"697",height:"250"})),(0,o.kt)("h3",{id:"is-kind"},"Is Kind"),(0,o.kt)("p",null,"IPLD node kind can be ",(0,o.kt)("em",{parentName:"p"},"Checked")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Is Kind")," function. This function requires inputs as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," : IPLD Node Object, the IPLD node that will be checked."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Kind")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," : Enum, the kind that will be compared to the node's kind.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IPLD Node Is Kind",src:n(9058).Z,width:"869",height:"349"})),(0,o.kt)("p",null,"This function returns a ",(0,o.kt)("em",{parentName:"p"},"boolean value")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"}),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the IPLD Node Kind is equal to the specified value, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."))}u.isMDXComponent=!0},3037:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ipld_node_get-edcb756fa622a79bcb7862037ab943c8.png"},3369:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ipld_node_get_kind-3ea6feb7e0c8f1ef3ba390b391cf9dbe.png"},9058:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ipld_node_is_kind-28f0c7dd957e12b4d7920719e7c3bc8e.png"},2016:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ipld_node_set-4cd4d26a9f675277100af647af87104d.png"}}]);