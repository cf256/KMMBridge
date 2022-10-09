"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[94],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(f,l(l({ref:t},s),{},{components:o})):n.createElement(f,l({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3852:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),l=["components"],c={},i="Using Cocoapods",p={unversionedId:"cocoapods/IOS_COCOAPODS",id:"cocoapods/IOS_COCOAPODS",title:"Using Cocoapods",description:"You'll need an Xcode project with Cocoapods set up. That means you'll have a Podfile that you can edit with the necessary code to integrate your Kotlin module.",source:"@site/docs/cocoapods/IOS_COCOAPODS.md",sourceDirName:"cocoapods",slug:"/cocoapods/IOS_COCOAPODS",permalink:"/KMMBridge/docs/cocoapods/IOS_COCOAPODS",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/cocoapods/IOS_COCOAPODS.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1665337365,formattedLastUpdatedAt:"10/9/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cocoapods",permalink:"/KMMBridge/docs/cocoapods/"},next:{title:"Cocoapods Local Dev Flow",permalink:"/KMMBridge/docs/cocoapods/IOS_LOCAL_DEV_COCOAPODS"}},s={},u=[{value:"Local Kotlin Dev",id:"local-kotlin-dev",level:2}],d={toc:u};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-cocoapods"},"Using Cocoapods"),(0,a.kt)("p",null,"You'll need an Xcode project with Cocoapods set up. That means you'll have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Podfile")," that you can edit with the necessary code to integrate your Kotlin module."),(0,a.kt)("p",null,"You'll need to add the podspec repo to Cocoapods and to your ",(0,a.kt)("inlineCode",{parentName:"p"},"Podfile"),". First, tell Cocoapods about it. In our case, we're using ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/touchlab/PublicPodspecs.git")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: You can use either ssh or https, depending on how your git/Github access is configured.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pod repo add touchlabpublic https://github.com/touchlab/PublicPodspecs.git\n")),(0,a.kt)("p",null,'Replace "touchlabpublic" with whatever you want to call your repo.'),(0,a.kt)("p",null,"Then, in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Podfile"),", add the module and the source. An example ",(0,a.kt)("inlineCode",{parentName:"p"},"Podfile")," might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '13'\n\nsource 'https://github.com/touchlab/PublicPodspecs.git'\n\ntarget 'KMMBridgeSampleCocoaPods' do\n  pod 'shared', '0.2.1'\nend\n\n")),(0,a.kt)("p",null,"Then, to initialize Cocoapods, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pod install\n")),(0,a.kt)("p",null,"Assuming that all worked, you should be able to open the project and build it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"VERY IMPORTANT!!!"))),(0,a.kt)("p",null,"After you run ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install"),", Cocoapods generates an ",(0,a.kt)("inlineCode",{parentName:"p"},"xcworkspace")," file. There is usually both an ",(0,a.kt)("inlineCode",{parentName:"p"},"xcodeproj")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"xcworkspace"),". Make sure you open the ",(0,a.kt)("inlineCode",{parentName:"p"},"xcworkspace")," file!!!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_09-11-xcworkspacefile.png",alt:"xcworkspacefile"})),(0,a.kt)("h2",{id:"local-kotlin-dev"},"Local Kotlin Dev"),(0,a.kt)("p",null,"If you are editing Kotlin, you will probably want to test it locally. To do that, see  ",(0,a.kt)("a",{parentName:"p",href:"/KMMBridge/docs/cocoapods/IOS_LOCAL_DEV_COCOAPODS"},"IOS_LOCAL_DEV_COCOAPODS"),"."))}m.isMDXComponent=!0}}]);