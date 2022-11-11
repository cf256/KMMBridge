"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[301],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:3,title:"Default GitHub Workflow"},s="Default GitHub Flow",u={unversionedId:"DEFAULT_GITHUB_FLOW",id:"DEFAULT_GITHUB_FLOW",title:"Default GitHub Workflow",description:"If you are hosting your repos in GitHub and can use GitHub Actions for CI, the Default GitHub Flow is the simplest way to start publishing Kotlin builds for iOS.",source:"@site/docs/DEFAULT_GITHUB_FLOW.md",sourceDirName:".",slug:"/DEFAULT_GITHUB_FLOW",permalink:"/KMMBridge/DEFAULT_GITHUB_FLOW",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/DEFAULT_GITHUB_FLOW.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1668126151,formattedLastUpdatedAt:"11/11/2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Default GitHub Workflow"},sidebar:"tutorialSidebar",previous:{title:"KMMBridge Intro",permalink:"/KMMBridge/intro"},next:{title:"iOS Dev Setup",permalink:"/KMMBridge/IOS_DEV_SETUP"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Kotlin Repo",id:"kotlin-repo",level:2},{value:"Spec Repo",id:"spec-repo",level:2},{value:"Configure The Kotlin Repo",id:"configure-the-kotlin-repo",level:2},{value:"1 Access the Gradle plugin",id:"1-access-the-gradle-plugin",level:3},{value:"2 Modify the Gradle Build",id:"2-modify-the-gradle-build",level:3},{value:"3 Add the GitHub Actions workflow call",id:"3-add-the-github-actions-workflow-call",level:3},{value:"4 Add and push your code",id:"4-add-and-push-your-code",level:3},{value:"Publish a Build!",id:"publish-a-build",level:2},{value:"iOS Dev Machine Config",id:"ios-dev-machine-config",level:2},{value:"Private Repos",id:"private-repos",level:4},{value:"Next Steps",id:"next-steps",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"default-github-flow"},"Default GitHub Flow"),(0,i.kt)("p",null,"If you are hosting your repos in GitHub and can use GitHub Actions for CI, the Default GitHub Flow is the simplest way to start publishing Kotlin builds for iOS."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This flow depends on calling our GitHub Actions workflow. Many of the features of KMMBridge assume operations that the GitHub Actions workflow is performing. SPM in particular uses git repo structure and tags to manage versions, so however you run publishing, you'll need to expect that KMMBridge is performing git operaitons automatically. If you intend to implement your own workflow, please be aware of what the plugin is doing inside git."))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This flow allows you to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Publish to public or private repos."),(0,i.kt)("li",{parentName:"ul"},"Uses Maven artifacts with GitHub Packages. Standard tools!"),(0,i.kt)("li",{parentName:"ul"},"Upload Xcode Framework artifacts to GitHub Packages. No external storage or auth configuration is required. All auth is manages through GitHub."),(0,i.kt)("li",{parentName:"ul"},"Can use either CocoaPods, SPM, or both."),(0,i.kt)("li",{parentName:"ul"},"Publish iOS and (optionally) Android binaries.")),(0,i.kt)("h2",{id:"kotlin-repo"},"Kotlin Repo"),(0,i.kt)("p",null,"You'll need to find or add the Kotlin Multiplatform module to publish. This module can be in the same project as your Android code (if any), or in a separate repo. In the Kotlin repo you'll add the Gradle config and CI to publish Xcode Frameworks."),(0,i.kt)("h2",{id:"spec-repo"},"Spec Repo"),(0,i.kt)("p",null,"If you are going to publish for CocoaPods, you'll also need a CocoaPods spec repo. This is a separate repo that CocoaPods uses to store published version information. This config is somewhat more complex, but still reasonably straightforward to configure."),(0,i.kt)("h2",{id:"configure-the-kotlin-repo"},"Configure The Kotlin Repo"),(0,i.kt)("h3",{id:"1-access-the-gradle-plugin"},"1 Access the Gradle plugin"),(0,i.kt)("p",null,"Make sure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"mavenCental()")," set up for Gradle plugins. That means adding it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginManagement")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"buildscript")," blocks. In ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.gradle.kts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"pluginManagement {\n    repositories {\n        gradlePluginPortal()\n        mavenCentral()\n    }\n}\n")),(0,i.kt)("p",null,"Note: If you're using a SNAPSHOT version of the plugin, add the SNAPSHOT repo as well:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'pluginManagement {\n    repositories {\n        gradlePluginPortal()\n        mavenCentral()\n        maven("https://oss.sonatype.org/content/repositories/snapshots")\n    }\n}\n')),(0,i.kt)("h3",{id:"2-modify-the-gradle-build"},"2 Modify the Gradle Build"),(0,i.kt)("p",null,"Find the ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," file where you configure the multiplatform module you'd like to publish. Add the KMMBridge Gradle plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    kotlin("multiplatform")\n    id("co.touchlab.faktory.kmmbridge") version "0.3.2"\n    `maven-publish`\n}\n')),(0,i.kt)("p",null,"Just FYI. You'll also need the ",(0,i.kt)("inlineCode",{parentName:"p"},"maven-publish")," plugin."),(0,i.kt)("p",null,"Later in the same file, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"kmmbridge")," config block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'kmmbridge {\n    mavenPublishArtifacts()\n    githubReleaseVersions()\n    spm()\n    cocoapods("git@github.com:touchlab/PodSpecs.git")\n    versionPrefix.set("0.3")\n}\n')),(0,i.kt)("p",null,"Finally, you'll need to add a Maven repository you can publish to, along with the necessary config. However, in our flow, assuming you're using our GitHub Actions scripts, just add this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"addGithubPackagesRepository()\n")),(0,i.kt)("p",null,"When running on CI, that will add the GitHub Packages Maven repo, for this project, using the auth provided by GitHub automatically. No extra auth config!"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"githubReleaseVersions()")," is highly recommended. This will use GitHub releases for release tracking and incrementing. You can use a different version manager, but you need to configure one. See: ",(0,i.kt)("a",{parentName:"p",href:"/KMMBridge/general/CONFIGURATION_OVERVIEW#version-managers"},"Version Managers")," for more detail."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spm()")," only needs to be added if you want to support SPM. The parameter points at the root directory of your repo. In this case, we have the KMP module in a folder under the repo, so the repo root is one level up. This is where your ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.swift")," file should be stored."),(0,i.kt)("p",null,"Note: this config is only for SPM publishing. To understand how to integrate an SPM build into Xcode, and how to locally build and test Kotlin changes, see ",(0,i.kt)("a",{parentName:"p",href:"/KMMBridge/spm/IOS_SPM"},"IOS_SPM"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'cocoapods("[some git repo].git")')," is only needed if you plan to publish for CocoaPods. You will need the spec repo mentioned above, properly configured for deployment. See  ",(0,i.kt)("a",{parentName:"p",href:"/KMMBridge/cocoapods/COCOAPODS_GITHUB_PODSPEC"},"COCOAPODS_GITHUB_PODSPEC")," for details on getting the podspec repo configured."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"versionPrefix")," is optional. By default, KMMBridge takes the version from Gradle and uses that as a prefix to generate the iOS published versions. Versioning strategy differs depending on how you intend to work and publish. See ",(0,i.kt)("a",{parentName:"p",href:"general/CONFIGURATION_OVERVIEW#version-managers"},"Version Managers")," for more detail."),(0,i.kt)("h3",{id:"3-add-the-github-actions-workflow-call"},"3 Add the GitHub Actions workflow call"),(0,i.kt)("p",null,"At the top of your project, if it does not already exist, add the folders ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows"),". Add a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"kmmbridgepnblish.yml")," there, and copy the following into it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: KMMBridge Publish Release\non: workflow_dispatch\n\njobs:\n  call-kmmbridge-publish:\n    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.6\n")),(0,i.kt)("p",null,"Note: if you are using CocoaPods and a podspec repo, your file should look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: KMMBridge Publish Release\non: workflow_dispatch\n\njobs:\n  call-kmmbridge-publish:\n    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.6\n    secrets:\n      PODSPEC_SSH_KEY: ${{ secrets.PODSPEC_SSH_KEY }}\n")),(0,i.kt)("p",null,"You need to pass the ssh key configured earlier."),(0,i.kt)("p",null,"There are actually 2 versions of the workflow script. The other file, ",(0,i.kt)("inlineCode",{parentName:"p"},"faktorybuild.yml"),", performs all operations in the same branch it's run on. ",(0,i.kt)("inlineCode",{parentName:"p"},"faktorybuildbranches.yml")," creates a temporary branch to run builds. This is generally better, as the build process involves git operations which can overwrite files and possibly cause conflics."),(0,i.kt)("h3",{id:"4-add-and-push-your-code"},"4 Add and push your code"),(0,i.kt)("p",null,"Push your changes to GitHub, and make sure they're in the default branch."),(0,i.kt)("h2",{id:"publish-a-build"},"Publish a Build!"),(0,i.kt)("p",null,'Assuming your configuration is set up correctly, you should be able to publish your first build. In the Kotlin repo\'s GitHub home page, go to "Actions", select "KMMBridge Publish Release", and manually run it.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-04_21-14-runbuild.png",alt:"runbuild"})),(0,i.kt)("p",null,"When that run is complete, you should see a green result. If not, please reach out :) This sample project is very small. A larger project may take considerably longer to build, so be prepared to wait..."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-04_21-19-image-20221004211903511.png",alt:"image-20221004211903511"})),(0,i.kt)("h2",{id:"ios-dev-machine-config"},"iOS Dev Machine Config"),(0,i.kt)("p",null,"If you're publishing to a public repo, you won't need to configure auth for your machine. Private repos need to have authentication configured so the binaries can be accessed."),(0,i.kt)("h4",{id:"private-repos"},"Private Repos"),(0,i.kt)("p",null,"For private builds, you'll need to tell the local machine how to access the private file. You can do this either by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file, or by adding the info to your local keychain."),(0,i.kt)("p",null,"First, get a personal access token from GitHub. Make sure it has at least ",(0,i.kt)("inlineCode",{parentName:"p"},"repo")," permissions. You can add an expiration, but if you do, you'll need to remember to create a new one later..."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-09-29_08-17-Screen%20Shot%202022-09-29%20at%208.16.31%20AM.png",alt:"Screen Shot 2022-09-29 at 8.16.31 AM"})),(0,i.kt)("p",null,"Add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file (create the file if it doesn't exist):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"machine maven.pkg.github.com\n  login [github username]\n  password [your new personal access token]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file tells curl and other networking tools how to authenticate to servers matching each ",(0,i.kt)("inlineCode",{parentName:"p"},"machine")," entry. If you use a different back end you'll need to have a different ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," entry."),(0,i.kt)("p",null,"Alternatively, you can use the Mac's keychain to manage access. See ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/geekculture/xcode-13-3-supports-spm-binary-dependency-in-private-github-release-8d60a47d5e45"},"this blog post for more detail"),"."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"You'll want to pull this new build into Xcode. For more information on how to do that, see  ",(0,i.kt)("a",{parentName:"p",href:"/KMMBridge/cocoapods/IOS_COCOAPODS"},"IOS_COCOAPODS")," or ",(0,i.kt)("a",{parentName:"p",href:"/KMMBridge/spm/IOS_SPM"},"IOS_SPM"),"."),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/KMMBridge/TROUBLESHOOTING"},"TROUBLESHOOTING")))}h.isMDXComponent=!0}}]);