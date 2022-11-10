"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[757],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6765:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="SPM Local Dev Flow",u={unversionedId:"spm/IOS_LOCAL_DEV_SPM",id:"spm/IOS_LOCAL_DEV_SPM",title:"SPM Local Dev Flow",description:"After you have integrated your Kotlin module into Xcode using SPM, you may want to locally build and test your Kotlin code when making changes.",source:"@site/docs/spm/02_IOS_LOCAL_DEV_SPM.md",sourceDirName:"spm",slug:"/spm/IOS_LOCAL_DEV_SPM",permalink:"/KMMBridge/spm/IOS_LOCAL_DEV_SPM",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/spm/02_IOS_LOCAL_DEV_SPM.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1668101944,formattedLastUpdatedAt:"11/10/2022",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Swift Package Manager",permalink:"/KMMBridge/spm/IOS_SPM"}},p={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spm-local-dev-flow"},"SPM Local Dev Flow"),(0,o.kt)("p",null,"After you have ",(0,o.kt)("a",{parentName:"p",href:"/KMMBridge/spm/IOS_SPM"},"integrated your Kotlin module into Xcode using SPM"),", you may want to locally build and test your Kotlin code when making changes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Experimental:"))," ",(0,o.kt)("em",{parentName:"p"},"While all of KMMBridge is relatively new, the SPM dev flow is very experimental. The most likely issues with be path resolutions.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As mentioned, SPM is not really integrated out of the box with Kotlin, and SPM itself does not make integrations easy (generally speaking). We have some support for local dev flow, but we are looking for feedback and improvements.")),(0,o.kt)("p",null,"Since KMMBridge is generating your ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.swift")," files, the first step is to run a dev build step to build the local dev ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.swift")," and locally build a debug version of the Kotlin code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew spmDevBuild\n")),(0,o.kt)("p",null,"This should:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build a debug version of the XCFramework"),(0,o.kt)("li",{parentName:"ul"},"Write a local dev path to ",(0,o.kt)("inlineCode",{parentName:"li"},"Package.swift"))),(0,o.kt)("p",null,"Next, you need to manually copy the whole Kotlin project into Xcode. That means, quite literally, drag the Kotlin project's folder into Xcode."),(0,o.kt)("video",{src:"https://tl-navigator-images.s3.amazonaws.com/docimages/dragspm.mp4"}),(0,o.kt)("p",null,"In the sample above, the pacakge ",(0,o.kt)("inlineCode",{parentName:"p"},"allshared")," is inside ",(0,o.kt)("inlineCode",{parentName:"p"},"KevsKmmTest"),". When you drag it in, if Xcode properly recognizes it, you'll see ",(0,o.kt)("inlineCode",{parentName:"p"},"allshared")," disappear, but when you build, things should work as expected."),(0,o.kt)("p",null,"When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"spmDevBuild"),", it will build all architectures, which you probably don't need for testing on a simulator. To restrict architectures when building, you can pass in a Gradle param."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew spmDevBuild -PspmBuildTargets=ios_x64\n")),(0,o.kt)("p",null,"For Intel Macs, use ",(0,o.kt)("inlineCode",{parentName:"p"},"ios_x64"),". For arm Macs, use ",(0,o.kt)("inlineCode",{parentName:"p"},"ios_simulator_arm64"),". You can pass in multiple architectures by separating them with commas."),(0,o.kt)("p",null,'When you are done making and testing local changes, select the folder you dragged in, and remove it by right-clicking it and selecting "Delete". Make sure to select "Remove References" on the popup. Xcode should then reload the remote version you had previously.'),(0,o.kt)("video",{src:"https://tl-navigator-images.s3.amazonaws.com/docimages/removelocal.mp4"}))}m.isMDXComponent=!0}}]);