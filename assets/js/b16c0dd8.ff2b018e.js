"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[365],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4530:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={},l="Using Swift Pacakge Manager",p={unversionedId:"spm/IOS_SPM",id:"spm/IOS_SPM",title:"Using Swift Pacakge Manager",description:"Swift Package Manager is a newer dependency manager directly from Apple. In some ways it's more integrated into Xcode, but is also less flexible than Cocoapods. Much of that seems by design, as it's very difficult to introduce side effects into the Package.swift build scripts. While that is likely to result in more reliable builds for the average Xcode project, for Kotlin builds, that means some more manual processes at present.",source:"@site/docs/spm/01_IOS_SPM.md",sourceDirName:"spm",slug:"/spm/IOS_SPM",permalink:"/KMMBridge/docs/spm/IOS_SPM",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/spm/01_IOS_SPM.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1665341198,formattedLastUpdatedAt:"10/9/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Swift Package Manager (SPM)",permalink:"/KMMBridge/docs/category/swift-package-manager-spm"},next:{title:"SPM Local Dev Flow",permalink:"/KMMBridge/docs/spm/IOS_LOCAL_DEV_SPM"}},c={},u=[{value:"Kotlin Project Configuration",id:"kotlin-project-configuration",level:2},{value:"Xcode Configuration",id:"xcode-configuration",level:2},{value:"Updating Builds",id:"updating-builds",level:2},{value:"Local Kotlin Dev",id:"local-kotlin-dev",level:2}],d={toc:u};function g(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-swift-pacakge-manager"},"Using Swift Pacakge Manager"),(0,r.kt)("p",null,"Swift Package Manager is a newer dependency manager directly from Apple. In some ways it's more integrated into Xcode, but is also less flexible than Cocoapods. Much of that seems by design, as it's very difficult to introduce side effects into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.swift")," build scripts. While that is likely to result in more reliable builds for the average Xcode project, for Kotlin builds, that means some more manual processes at present."),(0,r.kt)("p",null,"Out of the box, the official Kotlin tools are far less integrated into SPM. We have some basic support for SPM development, but this is a work in progress. Feedback welcome."),(0,r.kt)("h2",{id:"kotlin-project-configuration"},"Kotlin Project Configuration"),(0,r.kt)("p",null,"After setting up KMMBridge in your Kotlin project, you should configure SPM for library publishing. Generally speaking, SPM wants to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.swift")," file in the root of the repo. Xcode and SPM use git repos as an organizational and discovery unit. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.swift")," file goes in the root, and Xcode clones from Github (or others) to read info about the library and source code."),(0,r.kt)("p",null,"If you don't have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.swift")," file, or don't know how to set one up, that's OK. KMMBridge currently generates these files for you."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If you'd prefer, or need to, manage your own ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.swift")," file, please reach out. An earlier version of the plugin modified the file rather than replacing it. We may add that feature back after KMMBridge is more stable.")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"kmmbridge")," block, add ",(0,r.kt)("inlineCode",{parentName:"p"},"spm()"),". If you call it without parameters, KMMBridge assumes you want the ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.swift")," file at the root of your repo (we also assume you're using git)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"kmmbridge {\n    spm()\n    // Other config...\n}\n")),(0,r.kt)("p",null,"In the example above, the Kotlin module is one folder down, so we add the parent path string ",(0,r.kt)("inlineCode",{parentName:"p"},"..")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_06-43-spmfolder.png",alt:"spmfolder"})),(0,r.kt)("p",null,"SPM uses git for versioning, so you'll want to use either git tag or Github release version managers, and likely want to use Github artifacts."),(0,r.kt)("p",null,"Here is the suggested config for SPM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'kmmbridge {\n    githubReleaseArtifacts()\n    githubReleaseVersions()\n    versionPrefix.set("0.1")\n    spm()\n}\n')),(0,r.kt)("p",null,"Once this is all set up, run a build so you have at least one version available."),(0,r.kt)("h2",{id:"xcode-configuration"},"Xcode Configuration"),(0,r.kt)("p",null,"Open or create an Xcode project. To add an SPM package, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"File > Add Packages"),' in the Xcode menu. Add your source control account (presumably Github). You can usually browse for the package at that point, but depending on how many repos you have, it may be easier to copy/paste the repo URL in the top/right search bar. After finding the package, you should generally add the pacakge by version ("Up to Next Major Version" suggested).'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_06-57-addpackages.png",alt:"addpackages"})),(0,r.kt)("p",null,"Once added, you should be able to import the Kotlin module into Swift/Objc files and build!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_07-00-import.png",alt:"import"})),(0,r.kt)("h2",{id:"updating-builds"},"Updating Builds"),(0,r.kt)("p",null,'Run the KMMBridge build again. It should automatically create another build version and publish that to the Github repo. In Xcode, you can update your imported version by right-clicking on the module and selecting "Update Package":'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_07-04-updatepackage.png",alt:"updatepackage"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-06_07-17-updatepackagedone.png",alt:"updatepackagedone"})),(0,r.kt)("h2",{id:"local-kotlin-dev"},"Local Kotlin Dev"),(0,r.kt)("p",null,"If you are going to locally build and test Kotlin with SPM, see  ",(0,r.kt)("a",{parentName:"p",href:"/KMMBridge/docs/spm/IOS_LOCAL_DEV_SPM"},"IOS_LOCAL_DEV_SPM"),"."))}g.isMDXComponent=!0}}]);