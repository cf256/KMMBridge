"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,title:"KMMBridge Intro"},s="KMMBridge for Teams",u={unversionedId:"intro",id:"intro",title:"KMMBridge Intro",description:"KMMBridge is a set of Gradle tooling that facilitates publishing and consuming pre-built KMM (Kotlin Multiplatform Mobile) Xcode Framework binaries.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/KMMBridge/docs/intro",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1665329225,formattedLastUpdatedAt:"10/9/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"KMMBridge Intro"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/KMMBridge/docs/general/TROUBLESHOOTING"},next:{title:"Swift Package Manager (SPM)",permalink:"/KMMBridge/docs/category/swift-package-manager-spm"}},d={},p=[{value:"Who is this for?",id:"who-is-this-for",level:2},{value:"Simple Getting Started Setup",id:"simple-getting-started-setup",level:2},{value:"Basic Flow",id:"basic-flow",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Detailed Configuration Documentation",id:"detailed-configuration-documentation",level:2},{value:"Local Kotlin Testing",id:"local-kotlin-testing",level:2},{value:"Project Status",id:"project-status",level:2},{value:"Some notes",id:"some-notes",level:3},{value:"See Also",id:"see-also",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kmmbridge-for-teams"},"KMMBridge for Teams"),(0,a.kt)("p",null,"KMMBridge is a set of Gradle tooling that facilitates publishing and consuming pre-built KMM (Kotlin Multiplatform Mobile) Xcode Framework binaries."),(0,a.kt)("p",null,"The modules can be published to various back ends, public or private, and (currently) consumed by either Cocoapods or Swift Package Manager."),(0,a.kt)("h2",{id:"who-is-this-for"},"Who is this for?"),(0,a.kt)("p",null,"Different types of teams and different types of projects use Kotlin Multiplatform in different ways. Native mobile dev teams often want to start by including a prebuilt Xcode Framework in the iOS build rather than having every member of the team building Kotlin locally. This is especially true when adding KMM to an existing app, and/or when the teams are larger than 2-3 developers."),(0,a.kt)("p",null,'Building and publishing binary Xcode Frameworks from Kotlin is certainly possible, but not easily supported "out of the box". Where those binaries are published, and how they are included in the iOS build, also varies. Most teams we have talked to go through the same process getting started. They first need to build some kind of publishing architecture, which is non-trivial, and make a lot of the same mistakes along the way.'),(0,a.kt)("p",null,"For more context, see Nate Ebel\u2019s talk from Droidcon NYC 2022: ",(0,a.kt)("a",{parentName:"p",href:"https://www.droidcon.com/2022/09/29/adopting-kotlin-multiplatform-in-brownfield-applications/"},"Adopting Kotlin Multiplatform in Brownfield Applications"),". It's a very good overview of the startup issues teams face."),(0,a.kt)("h2",{id:"simple-getting-started-setup"},"Simple Getting Started Setup"),(0,a.kt)("p",null,"If you are using Github for source control, and are OK with using Github Actions to build and Github releases for published artifacts, we have a simple setup flow you can use. It is the easiest default to start from."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/KMMBridge/docs/general/DEFAULT_GITHUB_FLOW"},"DEFAULT_GITHUB_FLOW")," for setup instructions."),(0,a.kt)("h2",{id:"basic-flow"},"Basic Flow"),(0,a.kt)("p",null,"The basic concept is that after making some changes to Kotlin code, you'll want to publish an updated iOS Framework that Xcode can grab and use. Most native mobile projects exist as 2 separate repos: one for Android and one for iOS. To add some shared Kotlin code, you can either add a KMM module to the Android project, or create a separte repo just for the shared Kotlin code. In either configuration, you publish the iOS Framework and integrate it into the Xcode project."),(0,a.kt)("p",null,"Changes are made and tested to the shared Kotlin, then pushed to source control. When that happens, you can run CI to publish a new build. Doing that will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new version number"),(0,a.kt)("li",{parentName:"ul"},"Publish the Xcode Framework zip"),(0,a.kt)("li",{parentName:"ul"},"Generate ",(0,a.kt)("inlineCode",{parentName:"li"},"Package.swift")," file and/or a Cocoapods podspec file")),(0,a.kt)("p",null,"The iOS app can then include these frameworks through SPM or Cocoapods."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-07_09-13-kmmbridge_diagram2.png",alt:"kmmbridge_diagram2"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The plugin is currently published to the maven central repo. If needed, makes sure to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repo to ",(0,a.kt)("inlineCode",{parentName:"p"},"pluginManagement")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"buildscript")," block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"pluginManagement {\n    repositories {\n        gradlePluginPortal()\n        mavenCentral()\n    }\n}\n")),(0,a.kt)("p",null,"Note: If you're using a SNAPSHOT version of the plugin, add the SNAPSHOT repo as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'pluginManagement {\n    repositories {\n        gradlePluginPortal()\n        mavenCentral()\n        maven("https://oss.sonatype.org/content/repositories/snapshots")\n    }\n}\n')),(0,a.kt)("p",null,"Then add the plugin to the module that is actually building the Xcode Framework. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    kotlin("multiplatform")\n    id("co.touchlab.faktory.kmmbridge") version "{{VERSION_NAME}}"\n}\n')),(0,a.kt)("p",null,"At the top level in the same file, put the ",(0,a.kt)("inlineCode",{parentName:"p"},"kmmbridge")," configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'kmmbridge {\n    githubReleaseArtifacts()\n    githubReleaseVersions()\n    spm()\n    cocoapods("git@github.com:touchlab/PodSpecs.git")\n    versionPrefix.set("0.3")\n    //etc\n}\n')),(0,a.kt)("h2",{id:"detailed-configuration-documentation"},"Detailed Configuration Documentation"),(0,a.kt)("p",null,"For non-Github installations, other artifact locations, etc, see ",(0,a.kt)("a",{parentName:"p",href:"/KMMBridge/docs/general/CONFIGURATION_OVERVIEW"},"CONFIGURATION_OVERVIEW"),"."),(0,a.kt)("h2",{id:"local-kotlin-testing"},"Local Kotlin Testing"),(0,a.kt)("p",null,'KMMBridge also provides some support for locally building and testing Kotlin-generated Frameworks directly in your Xcode project. You can "flip a switch" to run your Xcode project against Kotlin locally, to test your changes. This process differs depending on if you\'re using ',(0,a.kt)("a",{parentName:"p",href:"/KMMBridge/docs/cocoapods/IOS_LOCAL_DEV_COCOAPODS"},"Cocoapods")," and ",(0,a.kt)("a",{parentName:"p",href:"/KMMBridge/docs/spm/IOS_LOCAL_DEV_SPM"},"SPM"),"."),(0,a.kt)("h2",{id:"project-status"},"Project Status"),(0,a.kt)("p",null,"This project is new. The code was extracted from a longer running internal effort, which went through a lot of experimentation\nand code written for specific use cases. Please let us know if you run into issues or find setup confusing."),(0,a.kt)("h3",{id:"some-notes"},"Some notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Groovy was not a focus during dev. All testing effort has been with Kotlin Gradle scripts. See ",(0,a.kt)("a",{parentName:"li",href:"/KMMBridge/docs/general/GROOVY_BUILD_SCRIPTS"},"GROOVY_BUILD_SCRIPTS")," for suggestions and samples if needed."),(0,a.kt)("li",{parentName:"ul"},"We are working on a more standard Gradle/Maven back end that should let you use things like Github packages and Artifactory. If you have alternate implementation ideas, we'd love to hear from you.")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/KMMBridge/docs/general/TROUBLESHOOTING"},"TROUBLESHOOTING")),(0,a.kt)("blockquote",null,(0,a.kt)("h2",{parentName:"blockquote",id:"subscribe"},"Subscribe!"),(0,a.kt)("p",{parentName:"blockquote"},"We build solutions that get teams started smoothly with Kotlin Multiplatform Mobile and ensure their success in production. Join our community to learn how your peers are adopting KMM.\n",(0,a.kt)("a",{parentName:"p",href:"https://go.touchlab.co/newsletter"},"Sign up here"),"!")))}m.isMDXComponent=!0}}]);