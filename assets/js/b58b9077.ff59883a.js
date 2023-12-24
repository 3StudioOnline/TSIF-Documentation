"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[4755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2,title:"Record"},a=void 0,s={unversionedId:"ipns/record",id:"version-2.1.0/ipns/record",title:"Record",description:"This page contains only basic information needed to understand the plugin. Full information on protocols and the",source:"@site/versioned_docs/version-2.1.0/ipns/record.mdx",sourceDirName:"ipns",slug:"/ipns/record",permalink:"/TSIF-Documentation/docs/ipns/record",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.1.0/ipns/record.mdx",tags:[],version:"2.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Record"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/TSIF-Documentation/docs/ipns/overview"},next:{title:"Publish Name",permalink:"/TSIF-Documentation/docs/ipns/functions/ipns-publish-name"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Fields",id:"fields",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This page contains only basic information needed to understand the plugin. Full information on protocols and the\nprocess of record creation, signing and serialization can be viewed on ",(0,o.kt)("a",{parentName:"p",href:"https://specs.ipfs.tech/ipns/ipns-record"},"IPFS specs")," webpage.")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"IPNS record")," is a data structure, that drives the mechanics of IPNS. The CID pointed to by the name, the validity\nof the name and the signature used for verification of the record's authenticity are all contained in the record.\nUsually, records do not need to be accessed by the developer as the remote handles them internally and only serves the\ncontent pointed to by the record."),(0,o.kt)("h2",{id:"fields"},"Fields"),(0,o.kt)("p",null,"IPNS records contain various data fields that provide information both about the name and the data being linked to.\nThe most important fields are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Value")," : This is the actual value pointed to by the name. Usually an IPFS CID or another IPNS name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Validity")," : How long the IPNS name is valid. This can be updated when the record is republished."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequence")," : The iteration this record is on. Starts at 1 with the first publishing and increases by 1 with every republish."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Signature")," : The cryptographic signature of the data contained in the record. Provides proof of ownership, because the\nIPNS name itself is created from the public part key used in signing.")),(0,o.kt)("p",null,"More about the record, fields and protocols associated with it can be found ",(0,o.kt)("a",{parentName:"p",href:"https://specs.ipfs.tech/ipns/ipns-record"},"here"),"."))}d.isMDXComponent=!0}}]);