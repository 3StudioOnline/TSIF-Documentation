"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[3868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,title:"Overview"},i=void 0,s={unversionedId:"ipns/overview",id:"version-3.1.0/ipns/overview",title:"Overview",description:"What is IPNS",source:"@site/versioned_docs/version-3.1.0/ipns/overview.mdx",sourceDirName:"ipns",slug:"/ipns/overview",permalink:"/TSIF-Documentation/docs/ipns/overview",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.1.0/ipns/overview.mdx",tags:[],version:"3.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Key Conversions",permalink:"/TSIF-Documentation/docs/cryptography/key-conversions"},next:{title:"Record",permalink:"/TSIF-Documentation/docs/ipns/record"}},l={},c=[{value:"What is IPNS",id:"what-is-ipns",level:2},{value:"What is a name",id:"what-is-a-name",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-ipns"},"What is IPNS"),(0,a.kt)("p",null,"IPNS, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/concepts/ipns/"},"the InterPlanetary Name System"),", is one of the IPFS subcomponents. It is a\nnaming system created to refer to the immutable IPFS CIDs in a mutable, updatable way. Every IPNS name is associated\nwith a value, usually an IPFS CID, and resolving that value allows access to the content linked to by the IPNS name."),(0,a.kt)("p",null,"All that means, that IPNS allows developers to create dynamically-linked content, when using statically-addressed\nsystems like IPFS."),(0,a.kt)("h2",{id:"what-is-a-name"},"What is a name"),(0,a.kt)("p",null,"IPNS names are CIDs. They follow the same rules as other CIDs, but the hash used to generate them is not the hash\nof the contents pointed to by the name. Instead, it is the public key associated with the name, hashed and converted\ninto a CID. IPNS names are generally encoded in base36 to distinguish them from the base32-encoded IPFS CIDs."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Somewhat simple use-case for ",(0,a.kt)("strong",{parentName:"p"},"IPNS names")," is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new resource."),(0,a.kt)("li",{parentName:"ol"},"Upload the resource to IPFS and save the CID."),(0,a.kt)("li",{parentName:"ol"},"Acquire a private key."),(0,a.kt)("li",{parentName:"ol"},"Publish an ",(0,a.kt)("strong",{parentName:"li"},"IPNS name")," using the key and the resource CID."),(0,a.kt)("li",{parentName:"ol"},"Modify the resource."),(0,a.kt)("li",{parentName:"ol"},"Upload the modified resource to IPFS, save the new CID."),(0,a.kt)("li",{parentName:"ol"},"Republish the name using the same key, and the new resource CID.")),(0,a.kt)("p",null,"In this process two CIDs for the initial resource and the modified resource were created. Projects accessing that resource\nthrough IPFS would need to update their project and modify the CID. That is not the case when using an ",(0,a.kt)("strong",{parentName:"p"},"IPNS name"),",\nbecause only one name was created in this situation. This allows projects relying on content from IPFS network to access\nrequired data no matter how many times the content itself (and with it, the CID) is changed or updated."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IPNS names")," behave much like well-known web links. The content they point to might change, but all a web\nbrowser needs to know to access them is the link itself."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"IPNS is not the only way of accessing IPFS contents without updating the CID. ",(0,a.kt)("strong",{parentName:"p"},"DNSLink")," or a dedicated server can\naccomplish fetching resources as well. However, with IPNS, everyone can do it. The process of creation and access to\nresources is not bottle-necked by any issues with the provider chosen for this task. The system is decentralized,\nand any provider implementing IPNS protocols can fetch and supply the required resource. The use of cryptography and\nidentifying everything through hashes and keys ensures the security of data being accessed this way.")))}d.isMDXComponent=!0}}]);