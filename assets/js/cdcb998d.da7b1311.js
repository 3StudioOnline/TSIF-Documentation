"use strict";(self.webpackChunktsif_documentation=self.webpackChunktsif_documentation||[]).push([[3986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1,title:"Introduction"},o=void 0,s={unversionedId:"getting-started/introduction",id:"version-3.0.0/getting-started/introduction",title:"Introduction",description:"IPFS Plugin",source:"@site/versioned_docs/version-3.0.0/getting-started/introduction.mdx",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/TSIF-Documentation/docs/getting-started/introduction",draft:!1,editUrl:"https://github.com/3StudioOnline/TSIF-Documentation/edit/master/versioned_docs/version-3.0.0/getting-started/introduction.mdx",tags:[],version:"3.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/TSIF-Documentation/docs/getting-started/installation"}},l={},p=[{value:"IPFS Plugin",id:"ipfs-plugin",level:2},{value:"What Is IPFS",id:"what-is-ipfs",level:2},{value:"IPFS is a protocol:",id:"ipfs-is-a-protocol",level:3},{value:"IPFS is a file system:",id:"ipfs-is-a-file-system",level:3},{value:"IPFS is a web:",id:"ipfs-is-a-web",level:3},{value:"IPFS is modular:",id:"ipfs-is-modular",level:3},{value:"IPFS uses crypto:",id:"ipfs-uses-crypto",level:3},{value:"IPFS is p2p:",id:"ipfs-is-p2p",level:3},{value:"IPFS is a CDN:",id:"ipfs-is-a-cdn",level:3},{value:"IPFS has a name service:",id:"ipfs-has-a-name-service",level:3},{value:"How IPFS works",id:"how-ipfs-works",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ipfs-plugin"},"IPFS Plugin"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IPFS")," Plugin is built for ",(0,a.kt)("em",{parentName:"p"},"Unreal Engine")," to allow game developers make use of the ",(0,a.kt)("em",{parentName:"p"},"IPFS")," technology.\nThis plugin offers the ability to interact with ",(0,a.kt)("em",{parentName:"p"},"IPFS")," nodes via HTTP. It offers downloading and uploading files\ndirectly in engine."),(0,a.kt)("h2",{id:"what-is-ipfs"},"What Is IPFS"),(0,a.kt)("p",null,"IPFS ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/concepts/what-is-ipfs/"},"the InterPlanetary File System")," is a hypermedia distribution\nprotocol addressed by content and identities. It enables the creation of completely distributed applications,\nand in doing so aims to make the web faster, safer, and more open."),(0,a.kt)("h3",{id:"ipfs-is-a-protocol"},"IPFS is a protocol:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Defines a content-addressed file system."),(0,a.kt)("li",{parentName:"ul"},"Coordinates content delivery."),(0,a.kt)("li",{parentName:"ul"},"Combines Kademlia + BitTorrent + Git.")),(0,a.kt)("h3",{id:"ipfs-is-a-file-system"},"IPFS is a file system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Has directories and files."),(0,a.kt)("li",{parentName:"ul"},"Is a mountable filesystem (via FUSE).")),(0,a.kt)("h3",{id:"ipfs-is-a-web"},"IPFS is a web:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can be used to view documents like the conventional web."),(0,a.kt)("li",{parentName:"ul"},"Files are accessible via HTTP at ",(0,a.kt)("inlineCode",{parentName:"li"},"https://ipfs.io/<path>"),"."),(0,a.kt)("li",{parentName:"ul"},"Browsers and extensions can learn to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"ipfs://")," URL or ",(0,a.kt)("inlineCode",{parentName:"li"},"ipns://")," URI schemes directly."),(0,a.kt)("li",{parentName:"ul"},"Hash-addressed content guarantees authenticity.")),(0,a.kt)("h3",{id:"ipfs-is-modular"},"IPFS is modular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connection layer over any network protocol."),(0,a.kt)("li",{parentName:"ul"},"Routing layer."),(0,a.kt)("li",{parentName:"ul"},"Uses a routing layer DHT (Kademlia/Coral)."),(0,a.kt)("li",{parentName:"ul"},"Uses a path-based naming service."),(0,a.kt)("li",{parentName:"ul"},"Uses a BitTorrent-inspired block exchange.")),(0,a.kt)("h3",{id:"ipfs-uses-crypto"},"IPFS uses crypto:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cryptographic-hash content addressing."),(0,a.kt)("li",{parentName:"ul"},"Block-level deduplication."),(0,a.kt)("li",{parentName:"ul"},"File integrity plus versioning."),(0,a.kt)("li",{parentName:"ul"},"File-system-level encryption plus signing support.")),(0,a.kt)("h3",{id:"ipfs-is-p2p"},"IPFS is p2p:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Worldwide peer-to-peer file transfers."),(0,a.kt)("li",{parentName:"ul"},"Completely decentralized architecture."),(0,a.kt)("li",{parentName:"ul"},"No central point of failure.")),(0,a.kt)("h3",{id:"ipfs-is-a-cdn"},"IPFS is a CDN:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a file to the file system locally, and it's now available to the world."),(0,a.kt)("li",{parentName:"ul"},"Caching-friendly (content-hash naming)."),(0,a.kt)("li",{parentName:"ul"},"BitTorrent-based bandwidth distribution.")),(0,a.kt)("h3",{id:"ipfs-has-a-name-service"},"IPFS has a name service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IPNS, an SFS-inspired name system."),(0,a.kt)("li",{parentName:"ul"},"Global namespace based on PKI."),(0,a.kt)("li",{parentName:"ul"},"It serves to build trust chains."),(0,a.kt)("li",{parentName:"ul"},"It's compatible with other NSes."),(0,a.kt)("li",{parentName:"ul"},"Can map DNS, .onion, .bit, etc to IPNS.")),(0,a.kt)("h2",{id:"how-ipfs-works"},"How IPFS works"),(0,a.kt)("p",null,"Here's what happens when you add a file to IPFS \u2014 whether you're storing that file on your own local node or\none operated by a pinning service or IPFS-enabled app."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you add a file to IPFS, your file is split into smaller chunks, cryptographically hashed, and given a unique\nfingerprint called a ",(0,a.kt)("a",{parentName:"li",href:"https://proto.school/anatomy-of-a-cid"},"content identifier")," (CID). This CID acts as a permanent record of your file as it exists\nat that point in time."),(0,a.kt)("li",{parentName:"ul"},"When other nodes look up your file, they ask their peer nodes who's storing the content referenced by the file's CID.\nWhen they view or download your file, they cache a copy \u2014 and become another provider of your content until their\ncache is cleared."),(0,a.kt)("li",{parentName:"ul"},"A node can ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ipfs.tech/concepts/persistence/"},"pin content")," in order to keep (and provide) it forever, or discard content it hasn't used in a while to\nsave space. This means each node in the network stores only content it is interested in, plus some indexing information\nthat helps figure out which node is storing what."),(0,a.kt)("li",{parentName:"ul"},"If you add a new version of your file to IPFS, its cryptographic hash is different, and so it gets a new CID.\nThis means files stored on IPFS are resistant to tampering and censorship \u2014 any changes to a file don't overwrite\nthe original, and common chunks across files can be reused in order to minimize storage costs."),(0,a.kt)("li",{parentName:"ul"},"However, this doesn't mean you need to remember a long string of CIDs \u2014 IPFS can find the latest version of your\nfile using the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ipfs.tech/concepts/ipns/"},"IPNS")," decentralized naming system,\nand ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ipfs.tech/concepts/dnslink/"},"DNSLink")," can be used to map CIDs to human-readable DNS names.")))}c.isMDXComponent=!0}}]);