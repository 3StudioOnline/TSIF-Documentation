"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[1656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||l;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:(e,t,n)=>{n.d(t,{UE:()=>a,h8:()=>r,qh:()=>s,y$:()=>l});n(7462),n(7294);var i=n(3905);const r=e=>{let{children:t,text:n}=e;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},n)},l=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function a(e){let{children:t,version:n}=e;const r="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:r,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},n)}function o(e,t,n,r){return(0,i.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}const s=e=>{let{children:t}=e;return o(0,"Released","#afa","#181")}},187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905)),l=n(4887);const a={sidebar_position:2,title:"Installation"},o=void 0,s={unversionedId:"getting-started/installation",id:"version-2.1.0/getting-started/installation",title:"Installation",description:"Installation",source:"@site/versioned_docs/version-2.1.0/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/TSIF-Documentation/docs/2.1.0/getting-started/installation",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-2.1.0/getting-started/installation.mdx",tags:[],version:"2.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/TSIF-Documentation/docs/2.1.0/getting-started/introduction"},next:{title:"Demo Project",permalink:"/TSIF-Documentation/docs/2.1.0/getting-started/demo-project"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Install as Engine Plugin",id:"install-as-engine-plugin",level:2},{value:"Install as Project Plugin",id:"install-as-project-plugin",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"here are two common ways to install Unreal Engine plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the plugin globally as a so-called Engine Plugin simply by using the Epic Games Launcher.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the plugin as a so-called Project Plugin by copying the plugin files from the Unreal Engine's ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugins")," directory to your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugins")," directory."))),(0,r.kt)("p",null,"Which one you would want to choose depends on your project needs. In general, it is preferable to install plugins directly to a project plugin\nto prevent version and plugin update issues. However, the easiest way is to start with just installing a new plugin to Unreal Engine directly."),(0,r.kt)("h2",{id:"install-as-engine-plugin"},"Install as Engine Plugin"),(0,r.kt)("p",null,"Open the Epic Games Launcher and select Unreal Engine ",(0,r.kt)(l.h8,{text:"1",mdxType:"Step"})," on the left side."),(0,r.kt)("p",null,"Next, select the Library ",(0,r.kt)(l.h8,{text:"2",mdxType:"Step"})," tab at the top and search for ",(0,r.kt)("inlineCode",{parentName:"p"},"IPFS")," in the VAULT section ",(0,r.kt)(l.h8,{text:"3",mdxType:"Step"})," to quickly find our plugins.\nFinally, click on the ",(0,r.kt)("em",{parentName:"p"},"Install to Engine")," ",(0,r.kt)(l.h8,{text:"4",mdxType:"Step"})," button of the plugin you want to install to a specific Unreal Engine on your computer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Project settings using enhanced input",src:n(1440).Z,width:"1222",height:"892"})),(0,r.kt)("p",null,"The newly installed plugin should now be available in all your projects that are using the same\nUnreal Engine version you chose to install the plugin to."),(0,r.kt)("h2",{id:"install-as-project-plugin"},"Install as Project Plugin"),(0,r.kt)("p",null,"First, you will need to install the plugin to the Unreal Engine as described in the previous section.\nAfter doing this, the plugin should now be available here (assuming Unreal Engine has been installed to the default location):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Epic Games\\UE_"),(0,r.kt)(l.y$,{mdxType:"Highlight"},(0,r.kt)("inlineCode",{parentName:"p"},"${VERSION}")),(0,r.kt)("inlineCode",{parentName:"p"},"\\Engine\\Plugins\\Marketplace")),(0,r.kt)("p",null,"where ",(0,r.kt)(l.y$,{mdxType:"Highlight"},(0,r.kt)("inlineCode",{parentName:"p"},"${VERSION}"))," needs to be replaced with the Unreal Engine's version number you previously chose to install the plugin to:\n",(0,r.kt)("inlineCode",{parentName:"p"},"4.26"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4.27"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"5.0"),", etc."),(0,r.kt)("p",null,"Now, create a new directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugins")," in your project's root directory and copy the plugin from the engine's directory into that newly created\n",(0,r.kt)("inlineCode",{parentName:"p"},"Plugins")," directory."))}d.isMDXComponent=!0},1440:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plugin_install_using_egl-b2187aaf0e8d5993b6598fe23ebe8da4.png"}}]);