"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[9398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>O});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,O=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(O,i(i({ref:t},p),{},{components:r})):o.createElement(O,i({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:5,title:"iOS Dev Setup"},i="iOS Dev Setup",c={unversionedId:"IOS_DEV_SETUP",id:"IOS_DEV_SETUP",title:"iOS Dev Setup",description:"To use the published Xcode Framework, you'll need to integrate it into your Xcode project. You'll also need to understand how to add authentication information, if required by your artifact storage.",source:"@site/docs/IOS_DEV_SETUP.md",sourceDirName:".",slug:"/IOS_DEV_SETUP",permalink:"/docs/IOS_DEV_SETUP",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/IOS_DEV_SETUP.md",tags:[],version:"current",lastUpdatedBy:"Russell Wolf",lastUpdatedAt:1687283942,formattedLastUpdatedAt:"Jun 20, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"iOS Dev Setup"},sidebar:"tutorialSidebar",previous:{title:"Default GitHub Workflow",permalink:"/docs/DEFAULT_GITHUB_FLOW"},next:{title:"Troubleshooting",permalink:"/docs/TROUBLESHOOTING"}},s={},l=[{value:"Private Artifacts",id:"private-artifacts",level:2},{value:"Using CocoaPods",id:"using-cocoapods",level:2},{value:"Using SPM",id:"using-spm",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ios-dev-setup"},"iOS Dev Setup"),(0,n.kt)("p",null,"To use the published Xcode Framework, you'll need to integrate it into your Xcode project. You'll also need to understand how to add authentication information, if required by your artifact storage."),(0,n.kt)("p",null,"For developers editing Kotlin, you will want to test locally-built Kotlin code directly in your Xcode project from time to time. How that works differs depending on which dependency manager you use. For CocoaPods see  ",(0,n.kt)("a",{parentName:"p",href:"/docs/cocoapods/IOS_LOCAL_DEV_COCOAPODS"},"IOS_LOCAL_DEV_COCOAPODS"),". For SPM see  ",(0,n.kt)("a",{parentName:"p",href:"/docs/spm/IOS_LOCAL_DEV_SPM"},"IOS_LOCAL_DEV_SPM"),"."),(0,n.kt)("h2",{id:"private-artifacts"},"Private Artifacts"),(0,n.kt)("p",null,"If you are hosting artifacts somewhere private, you'll need to add auth info for that to work. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/DEFAULT_GITHUB_FLOW#private-repos"},"the section here"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"You must do this before attempting to integrate dependency managers!!!")),(0,n.kt)("h2",{id:"using-cocoapods"},"Using CocoaPods"),(0,n.kt)("p",null,"See:  ",(0,n.kt)("a",{parentName:"p",href:"/docs/cocoapods/IOS_COCOAPODS"},"IOS_COCOAPODS")),(0,n.kt)("h2",{id:"using-spm"},"Using SPM"),(0,n.kt)("p",null,"See: ",(0,n.kt)("a",{parentName:"p",href:"/docs/spm/IOS_SPM"},"IOS_SPM")))}u.isMDXComponent=!0}}]);