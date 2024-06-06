"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[5727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>o,h8:()=>a,qh:()=>l,y$:()=>i});n(7462),n(7294);var r=n(3905);const a=e=>{let{children:t,text:n}=e;return(0,r.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},i=e=>{let{children:t}=e;return(0,r.kt)("span",{style:{color:"#faa"}},t)};function o(e){let{children:t,version:n}=e;const a="#ffffff";return(0,r.kt)("span",{style:{backgroundColor:"#414141",color:a,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function p(e,t,n,a){return(0,r.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const l=e=>{let{children:t}=e;return p(0,"Released","#afa","#181")}},2543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),i=n(4887);const o={sidebar_position:1,title:"Key Generation"},p=void 0,l={unversionedId:"cryptography/key-generation",id:"version-2.1.0/cryptography/key-generation",title:"Key Generation",description:"Specific cryptographic key generation algorithms are available with the plugin,",source:"@site/versioned_docs/version-2.1.0/cryptography/key-generation.mdx",sourceDirName:"cryptography",slug:"/cryptography/key-generation",permalink:"/TSIF-Documentation/docs/2.1.0/cryptography/key-generation",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.1.0/cryptography/key-generation.mdx",tags:[],version:"2.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Key Generation"},sidebar:"tutorialSidebar",previous:{title:"IPFS Status",permalink:"/TSIF-Documentation/docs/2.1.0/ipfs-functions/ipfs-status"},next:{title:"Digest",permalink:"/TSIF-Documentation/docs/2.1.0/cryptography/digest"}},s={},c=[{value:"Ed25519",id:"ed25519",level:2},{value:"RSA",id:"rsa",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Specific cryptographic key generation algorithms are available with the plugin,\nharnessing the ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenSSL")," implementation included in ",(0,a.kt)("em",{parentName:"p"},"Unreal Engine"),"'s codebase."),(0,a.kt)("h2",{id:"ed25519"},"Ed25519"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Generate Crypto Key (Ed25519)")," Generates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Ed25519")," keypair. This function requires no inputs, however\nthere is an optional input for ",(0,a.kt)("inlineCode",{parentName:"p"},"Password")," ",(0,a.kt)(i.h8,{text:"1",mdxType:"Step"}),". The password used for private key encryption is encoded as UTF8.\nLeaving the ",(0,a.kt)("inlineCode",{parentName:"p"},"Password")," field empty (which is the default behavior), will leave the key unencrypted."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generate Crypto Key (Ed25519)",src:n(9988).Z,width:"846",height:"607"})),(0,a.kt)("p",null,"If successful, returns two byte arrays containing the generated ",(0,a.kt)("em",{parentName:"p"},"public")," ",(0,a.kt)(i.h8,{text:"2",mdxType:"Step"})," and ",(0,a.kt)("em",{parentName:"p"},"private")," ",(0,a.kt)(i.h8,{text:"3",mdxType:"Step"})," keys encoded as ",(0,a.kt)("inlineCode",{parentName:"p"},"PEM"),"."),(0,a.kt)("h2",{id:"rsa"},"RSA"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Generate Crypto Key (RSA)")," Generates a new ",(0,a.kt)("inlineCode",{parentName:"p"},"RSA")," keypair. This function requires no inputs,\nhowever there are two optional inputs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Key Size")," ",(0,a.kt)(i.h8,{text:"1",mdxType:"Step"})," : Integer, size of the ",(0,a.kt)("inlineCode",{parentName:"li"},"RSA")," key (Set to 2048 by default)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Password")," ",(0,a.kt)(i.h8,{text:"2",mdxType:"Step"})," : UTF-8 String, a pass-phrase used to encrypt the generated key.")),(0,a.kt)("p",null,"Leaving the ",(0,a.kt)("inlineCode",{parentName:"p"},"Password")," field empty (which is the default behavior), will leave the key unencrypted."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generate Crypto Key (Ed25519)",src:n(374).Z,width:"703",height:"547"})),(0,a.kt)("p",null,"If successful, returns two byte arrays containing the generated ",(0,a.kt)("em",{parentName:"p"},"public")," ",(0,a.kt)(i.h8,{text:"3",mdxType:"Step"})," and ",(0,a.kt)("em",{parentName:"p"},"private")," ",(0,a.kt)(i.h8,{text:"4",mdxType:"Step"})," keys encoded as ",(0,a.kt)("inlineCode",{parentName:"p"},"PEM"),"."))}u.isMDXComponent=!0},9988:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/crypto_keygen_ed25519-67dcc50ae97f530c5b248ac2cc4818b7.png"},374:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/crypto_keygen_rsa-31093404f5f38467ba643f693825c008.png"}}]);