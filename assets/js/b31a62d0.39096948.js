"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[641],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(o),m=r,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return o?n.createElement(f,l(l({ref:t},u),{},{components:o})):n.createElement(f,l({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},2698:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),l=["components"],i={},c="Cocoapods Local Dev Flow",p={unversionedId:"cocoapods/IOS_LOCAL_DEV_COCOAPODS",id:"cocoapods/IOS_LOCAL_DEV_COCOAPODS",title:"Cocoapods Local Dev Flow",description:"After you have integrated Cocoapods into Xcode, you can run local dev builds by adding the Kotlin code as a local dev Cocoapod.",source:"@site/docs/cocoapods/IOS_LOCAL_DEV_COCOAPODS.md",sourceDirName:"cocoapods",slug:"/cocoapods/IOS_LOCAL_DEV_COCOAPODS",permalink:"/KMMBridge/docs/cocoapods/IOS_LOCAL_DEV_COCOAPODS",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/cocoapods/IOS_LOCAL_DEV_COCOAPODS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Cocoapods",permalink:"/KMMBridge/docs/cocoapods/IOS_COCOAPODS"},next:{title:"Artifact Managers",permalink:"/KMMBridge/docs/category/artifact-managers"}},u={},d=[],s={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cocoapods-local-dev-flow"},"Cocoapods Local Dev Flow"),(0,a.kt)("p",null,"After you have ",(0,a.kt)("a",{parentName:"p",href:"/KMMBridge/docs/cocoapods/IOS_COCOAPODS"},"integrated Cocoapods into Xcode"),", you can run local dev builds by adding the Kotlin code as a local dev Cocoapod."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For this example, we will assume you have cloned both the Xcode repo and the Kotln repo to the same directory, although you can clone them anywhere on your local drive. Just replace the path accordingly.")),(0,a.kt)("p",null,"Modify your ",(0,a.kt)("inlineCode",{parentName:"p"},"Podfile")," to check environment variables for a local dev path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '13'\n\nsource 'https://github.com/touchlab/PublicPodspecs.git'\n\ntarget 'KMMBridgeSampleCocoaPods' do\n  if ENV.include?(\"LOCAL_KOTLIN_PATH\")\n    pod 'shared', :path => ENV[\"LOCAL_KOTLIN_PATH\"]\n  else\n    pod 'shared', '0.2.1'\n  end\nend\n")),(0,a.kt)("p",null,"If you run ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," without any environment variable changes, you will get the prebuilt binary. However, you can use the local binary by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export LOCAL_KOTLIN_PATH=../KMMBridgeSampleKotlin/shared\npod install\n")),(0,a.kt)("p",null,"In our example, the Kotlin project is called ",(0,a.kt)("inlineCode",{parentName:"p"},"KMMBridgeSampleKotlin")," and the Kotlin code is in a module called ",(0,a.kt)("inlineCode",{parentName:"p"},"shared"),". Replace with your project and module names."),(0,a.kt)("p",null,"After running ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install"),", close and reopen the ",(0,a.kt)("inlineCode",{parentName:"p"},"xcworkspace")," file. You should now be in the standard Kotlin local Cocoapods build flow."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: It is ",(0,a.kt)("em",{parentName:"p"},"highly")," recommended that you run ",(0,a.kt)("inlineCode",{parentName:"p"},"linkPodDebugFrameworkIosX64")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"linkPodDebugFrameworkIosSimulatorArm64"),", depending on your Mac architecture, before you run ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install"),", due to a minor issue with the Kotlin Cocoapods integration.")),(0,a.kt)("p",null,"Once your changes are complete, push them to your repo and run the KMMBridge build process again. When complete, you should be able to remove the local dev flow by removing the environment variable and running ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," again."))}m.isMDXComponent=!0}}]);