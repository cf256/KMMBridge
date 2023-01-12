"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>O});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),p=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=n,O=c["".concat(u,".").concat(f)]||c[f]||d[f]||i;return r?o.createElement(O,a(a({ref:t},s),{},{components:r})):o.createElement(O,a({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:5,title:"iOS Dev Setup"},a="iOS Dev Setup",l={unversionedId:"IOS_DEV_SETUP",id:"IOS_DEV_SETUP",title:"iOS Dev Setup",description:"To use the published Xcode Framework, you'll need to integrate it into your Xcode project. You'll also need to understand how to add authentication information, if required by your artifact storage.",source:"@site/docs/IOS_DEV_SETUP.md",sourceDirName:".",slug:"/IOS_DEV_SETUP",permalink:"/KMMBridge/IOS_DEV_SETUP",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/IOS_DEV_SETUP.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1673546798,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"iOS Dev Setup"},sidebar:"tutorialSidebar",previous:{title:"Default GitHub Workflow",permalink:"/KMMBridge/DEFAULT_GITHUB_FLOW"},next:{title:"Troubleshooting",permalink:"/KMMBridge/TROUBLESHOOTING"}},u={},p=[{value:"Private GitHub Releases",id:"private-github-releases",level:2},{value:"Using CocoaPods",id:"using-cocoapods",level:2},{value:"Using SPM",id:"using-spm",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ios-dev-setup"},"iOS Dev Setup"),(0,n.kt)("p",null,"To use the published Xcode Framework, you'll need to integrate it into your Xcode project. You'll also need to understand how to add authentication information, if required by your artifact storage."),(0,n.kt)("p",null,"For developers editing Kotlin, you will want to test locally-built Kotlin code directly in your Xcode project from time to time. How that works differs depending on which dependency manager you use. For CocoaPods see  ",(0,n.kt)("a",{parentName:"p",href:"/KMMBridge/cocoapods/IOS_LOCAL_DEV_COCOAPODS"},"IOS_LOCAL_DEV_COCOAPODS"),". For SPM see  ",(0,n.kt)("a",{parentName:"p",href:"/KMMBridge/spm/IOS_LOCAL_DEV_SPM"},"IOS_LOCAL_DEV_SPM"),"."),(0,n.kt)("h2",{id:"private-github-releases"},"Private GitHub Releases"),(0,n.kt)("p",null,"If you are using private GitHub artifacts, you'll need to add auth info for that to work. See ",(0,n.kt)("a",{parentName:"p",href:"/KMMBridge/DEFAULT_GITHUB_FLOW#private-repos"},"the section here"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"You must do this before attempting to integrate dependency managers!!!")),(0,n.kt)("h2",{id:"using-cocoapods"},"Using CocoaPods"),(0,n.kt)("p",null,"See:  ",(0,n.kt)("a",{parentName:"p",href:"/KMMBridge/cocoapods/IOS_COCOAPODS"},"IOS_COCOAPODS")),(0,n.kt)("h2",{id:"using-spm"},"Using SPM"),(0,n.kt)("p",null,"See: ",(0,n.kt)("a",{parentName:"p",href:"/KMMBridge/spm/IOS_SPM"},"IOS_SPM")))}c.isMDXComponent=!0}}]);