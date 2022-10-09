"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[3],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2128:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},l="Troubleshooting",s={unversionedId:"TROUBLESHOOTING",id:"TROUBLESHOOTING",title:"Troubleshooting",description:'Error: "This fat framework already has a binary for architecture x64 (common for target ios_x64)\u201d (or similar for arm)',source:"@site/docs/TROUBLESHOOTING.md",sourceDirName:".",slug:"/TROUBLESHOOTING",permalink:"/KMMBridge/docs/TROUBLESHOOTING",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/TROUBLESHOOTING.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1665337365,formattedLastUpdatedAt:"10/9/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Swift Pacakge Manager",permalink:"/KMMBridge/docs/spm/IOS_SPM"}},u={},p=[{value:"Error: &quot;This fat framework already has a binary for architecture <code>x64</code> (common for target <code>ios_x64</code>)\u201d (or similar for arm)",id:"error-this-fat-framework-already-has-a-binary-for-architecture-x64-common-for-target-ios_x64-or-similar-for-arm",level:3}],f={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"error-this-fat-framework-already-has-a-binary-for-architecture-x64-common-for-target-ios_x64-or-similar-for-arm"},'Error: "This fat framework already has a binary for architecture ',(0,a.kt)("inlineCode",{parentName:"h3"},"x64")," (common for target ",(0,a.kt)("inlineCode",{parentName:"h3"},"ios_x64"),")\u201d (or similar for arm)"),(0,a.kt)("p",null,"This is basically saying you have more than one framework defined for the same architecture. This most commonly happens\nbecause the project has both explicit frameworks defined in the kotlin/targets area, and the Cocoapods plugin applied."),(0,a.kt)("p",null,"If you see ",(0,a.kt)("inlineCode",{parentName:"p"},'kotlin("native.cocoapods")')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'id("org.jetbrains.kotlin.native.cocoapods")')," in the plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    kotlin("multiplatform")\n    kotlin("native.cocoapods") // <--- This\n    id("co.touchlab.faktory.kmmbridge") version "0.2.2-SNAPSHOT"\n}\n')),(0,a.kt)("p",null,"and you see framework declarations for your targets:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"kotlin {\n    iosX64 {\n        binaries.framework()\n    }\n}\n")),(0,a.kt)("p",null,"You have duplicate frameworks being declared. The Cocoapods plugin is adding frameworks automatically for all darwin/Apple\ntargets, so explicitly declaring them is redundant."))}m.isMDXComponent=!0}}]);