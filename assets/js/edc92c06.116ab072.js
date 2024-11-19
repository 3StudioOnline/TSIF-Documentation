"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,h=u["".concat(s,".").concat(p)]||u[p]||f[p]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:1,title:"Introduction"},o="Introduction to CAR Files in IPFS",c={unversionedId:"car/introduction",id:"version-3.0.1/car/introduction",title:"Introduction",description:"What Is A CAR File",source:"@site/versioned_docs/version-3.0.1/car/introduction.mdx",sourceDirName:"car",slug:"/car/introduction",permalink:"/TSIF-Documentation/docs/3.0.1/car/introduction",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.0.1/car/introduction.mdx",tags:[],version:"3.0.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Other",permalink:"/TSIF-Documentation/docs/3.0.1/ipld/nodes/other"},next:{title:"Pack CAR File",permalink:"/TSIF-Documentation/docs/3.0.1/car/pack-car-file"}},s={},l=[{value:"What Is A CAR File",id:"what-is-a-car-file",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Content Addressing",id:"content-addressing",level:3},{value:"Efficient Packaging",id:"efficient-packaging",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Data Migration and Preservation",id:"data-migration-and-preservation",level:3},{value:"Efficient Content Distribution",id:"efficient-content-distribution",level:3},{value:"CAR v1 Specification",id:"car-v1-specification",level:2}],d={toc:l};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-car-files-in-ipfs"},"Introduction to CAR Files in IPFS"),(0,r.kt)("h2",{id:"what-is-a-car-file"},"What Is A CAR File"),(0,r.kt)("p",null,"A CAR file (Content Addressable aRchives) is a type of compressed archive file that might contain multiple files. It can\nbe used to store content addressable objects in the form of IPLD block data as a sequence of bytes; typically in a file with\na ",(0,r.kt)("inlineCode",{parentName:"p"},".car")," filename extension."),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("h3",{id:"content-addressing"},"Content Addressing"),(0,r.kt)("p",null,"At the core of the CAR file format is the concept of content addressing. Each file within a CAR file is uniquely\nidentified by a cryptographic hash derived from its content. This not only ensures data integrity but also facilitates\nefficient and reliable content retrieval, regardless of the file's physical location."),(0,r.kt)("h3",{id:"efficient-packaging"},"Efficient Packaging"),(0,r.kt)("p",null,"CAR files are designed for optimal packaging of content, enabling the bundling of multiple files and directories into\na single archive. This streamlines the process of sharing and distributing data across the IPFS network, promoting\nresource efficiency and reducing redundancy."),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("h3",{id:"data-migration-and-preservation"},"Data Migration and Preservation"),(0,r.kt)("p",null,"CAR files are particularly well-suited for data migration and preservation tasks. Their ability to encapsulate content\nwith content-addressed identifiers ensures that data remains intact and retrievable over time, making them valuable for\nlong-term archival purposes."),(0,r.kt)("h3",{id:"efficient-content-distribution"},"Efficient Content Distribution"),(0,r.kt)("p",null,"The packaging efficiency of CAR files makes them an ideal choice for efficient content distribution. Whether you're\nsharing a collection of files or an entire dataset, CAR files simplify the process, offering a streamlined solution\nfor decentralized data exchange."),(0,r.kt)("h2",{id:"car-v1-specification"},"CAR v1 Specification"),(0,r.kt)("p",null,"For more details regarding the specifications of the CAR v1 implementation, check the official link ",(0,r.kt)("a",{parentName:"p",href:"https://ipld.io/specs/transport/car/carv1/"},"here"),"."))}f.isMDXComponent=!0}}]);