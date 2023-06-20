"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[3301],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return o?n.createElement(m,r(r({ref:t},p),{},{components:o})):n.createElement(m,r({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8656:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const i={sidebar_position:3,title:"Default GitHub Workflow"},r="Default GitHub Flow",l={unversionedId:"DEFAULT_GITHUB_FLOW",id:"DEFAULT_GITHUB_FLOW",title:"Default GitHub Workflow",description:"If you are hosting your repos in GitHub and can use GitHub Actions for CI, the Default GitHub Flow is the simplest way to start publishing Kotlin builds for iOS.",source:"@site/docs/DEFAULT_GITHUB_FLOW.md",sourceDirName:".",slug:"/DEFAULT_GITHUB_FLOW",permalink:"/docs/DEFAULT_GITHUB_FLOW",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/DEFAULT_GITHUB_FLOW.md",tags:[],version:"current",lastUpdatedBy:"Russell Wolf",lastUpdatedAt:1687283942,formattedLastUpdatedAt:"Jun 20, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Default GitHub Workflow"},sidebar:"tutorialSidebar",previous:{title:"KMMBridge Intro",permalink:"/docs/"},next:{title:"iOS Dev Setup",permalink:"/docs/IOS_DEV_SETUP"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Kotlin Repo",id:"kotlin-repo",level:2},{value:"Spec Repo",id:"spec-repo",level:2},{value:"Configure The Kotlin Repo",id:"configure-the-kotlin-repo",level:2},{value:"1 Access the Gradle plugin",id:"1-access-the-gradle-plugin",level:3},{value:"2 Modify the Gradle Build",id:"2-modify-the-gradle-build",level:3},{value:"3 Add the GitHub Actions workflow call",id:"3-add-the-github-actions-workflow-call",level:3},{value:"4 Add and push your code",id:"4-add-and-push-your-code",level:3},{value:"Publish a Build!",id:"publish-a-build",level:2},{value:"iOS Dev Machine Config",id:"ios-dev-machine-config",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"default-github-flow"},"Default GitHub Flow"),(0,a.kt)("p",null,"If you are hosting your repos in GitHub and can use GitHub Actions for CI, the Default GitHub Flow is the simplest way to start publishing Kotlin builds for iOS."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This flow depends on calling our GitHub Actions workflow. Many of the features of KMMBridge assume operations that the GitHub Actions workflow is performing. SPM in particular uses git repo structure and tags to manage versions, so however you run publishing, you'll need to expect that KMMBridge is performing git operaitons automatically. If you intend to implement your own workflow, please be aware of what the plugin is doing inside git.")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This flow allows you to do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Publish to public or private repos."),(0,a.kt)("li",{parentName:"ul"},"Uses Maven artifacts with GitHub Packages. Standard tools!"),(0,a.kt)("li",{parentName:"ul"},"Upload Xcode Framework artifacts to GitHub Packages. No external storage or auth configuration is required. All auth is manages through GitHub."),(0,a.kt)("li",{parentName:"ul"},"Can use either CocoaPods, SPM, or both."),(0,a.kt)("li",{parentName:"ul"},"Publish iOS and (optionally) Android binaries.")),(0,a.kt)("h2",{id:"kotlin-repo"},"Kotlin Repo"),(0,a.kt)("p",null,"You'll need to find or add the Kotlin Multiplatform module to publish. This module can be in the same project as your Android code (if any), or in a separate repo. In the Kotlin repo you'll add the Gradle config and CI to publish Xcode Frameworks."),(0,a.kt)("h2",{id:"spec-repo"},"Spec Repo"),(0,a.kt)("p",null,"If you are going to publish for CocoaPods, you'll also need a CocoaPods spec repo. This is a separate repo that CocoaPods uses to store published version information. This config is somewhat more complex, but still reasonably straightforward to configure."),(0,a.kt)("h2",{id:"configure-the-kotlin-repo"},"Configure The Kotlin Repo"),(0,a.kt)("h3",{id:"1-access-the-gradle-plugin"},"1 Access the Gradle plugin"),(0,a.kt)("p",null,"Make sure you have ",(0,a.kt)("inlineCode",{parentName:"p"},"mavenCental()")," set up for Gradle plugins. That means adding it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pluginManagement")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"buildscript")," blocks. In ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.gradle.kts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"pluginManagement {\n    repositories {\n        gradlePluginPortal()\n        mavenCentral()\n    }\n}\n")),(0,a.kt)("p",null,"Note: If you're using a SNAPSHOT version of the plugin, add the SNAPSHOT repo as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'pluginManagement {\n    repositories {\n        gradlePluginPortal()\n        mavenCentral()\n        maven("https://oss.sonatype.org/content/repositories/snapshots")\n    }\n}\n')),(0,a.kt)("h3",{id:"2-modify-the-gradle-build"},"2 Modify the Gradle Build"),(0,a.kt)("p",null,"Find the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," file where you configure the multiplatform module you'd like to publish. Add the KMMBridge Gradle plugin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    kotlin("multiplatform")\n    id("co.touchlab.faktory.kmmbridge") version "0.3.7"\n    `maven-publish`\n}\n')),(0,a.kt)("p",null,"Just FYI. You'll also need the ",(0,a.kt)("inlineCode",{parentName:"p"},"maven-publish")," plugin."),(0,a.kt)("p",null,"Later in the same file, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"kmmbridge")," config block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'kmmbridge {\n    mavenPublishArtifacts()\n    githubReleaseVersions()\n    spm()\n    cocoapods("git@github.com:touchlab/PodSpecs.git")\n    versionPrefix.set("0.3")\n}\n')),(0,a.kt)("p",null,"Finally, you'll need to add a Maven repository you can publish to, along with the necessary config. However, in our flow, assuming you're using our GitHub Actions scripts, just add this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"addGithubPackagesRepository()\n")),(0,a.kt)("p",null,"When running on CI, that will add the GitHub Packages Maven repo, for this project, using the auth provided by GitHub automatically. No extra auth config!"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"githubReleaseVersions()")," is highly recommended. This will use GitHub releases for release tracking and incrementing. You can use a different version manager, but you need to configure one. See: ",(0,a.kt)("a",{parentName:"p",href:"/docs/general/CONFIGURATION_OVERVIEW#version-managers"},"Version Managers")," for more detail."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"spm()")," only needs to be added if you want to support SPM. The parameter points at the root directory of your repo. In this case, we have the KMP module in a folder under the repo, so the repo root is one level up. This is where your ",(0,a.kt)("inlineCode",{parentName:"p"},"Package.swift")," file should be stored."),(0,a.kt)("p",null,"Note: this config is only for SPM publishing. To understand how to integrate an SPM build into Xcode, and how to locally build and test Kotlin changes, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/spm/IOS_SPM"},"IOS_SPM"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'cocoapods("[some git repo].git")')," is only needed if you plan to publish for CocoaPods. You will need the spec repo mentioned above, properly configured for deployment. See  ",(0,a.kt)("a",{parentName:"p",href:"/docs/cocoapods/COCOAPODS_GITHUB_PODSPEC"},"COCOAPODS_GITHUB_PODSPEC")," for details on getting the podspec repo configured."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"versionPrefix")," is optional. By default, KMMBridge takes the version from Gradle and uses that as a prefix to generate the iOS published versions. Versioning strategy differs depending on how you intend to work and publish. See ",(0,a.kt)("a",{parentName:"p",href:"general/CONFIGURATION_OVERVIEW#version-managers"},"Version Managers")," for more detail."),(0,a.kt)("h3",{id:"3-add-the-github-actions-workflow-call"},"3 Add the GitHub Actions workflow call"),(0,a.kt)("p",null,"At the top of your project, if it does not already exist, add the folders ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows"),". Add a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"kmmbridgepnblish.yml")," there, and copy the following into it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: KMMBridge Publish Release\non: workflow_dispatch\n\njobs:\n  call-kmmbridge-publish:\n    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.8\n")),(0,a.kt)("p",null,"Note: if you are using CocoaPods and a podspec repo, your file should look like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: KMMBridge Publish Release\non: workflow_dispatch\n\njobs:\n  call-kmmbridge-publish:\n    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.8\n    secrets:\n      PODSPEC_SSH_KEY: ${{ secrets.PODSPEC_SSH_KEY }}\n")),(0,a.kt)("p",null,"You need to pass the ssh key configured earlier."),(0,a.kt)("p",null,"There are actually 2 versions of the workflow script. The other file, ",(0,a.kt)("inlineCode",{parentName:"p"},"faktorybuild.yml"),", performs all operations in the same branch it's run on. ",(0,a.kt)("inlineCode",{parentName:"p"},"faktorybuildbranches.yml")," creates a temporary branch to run builds. This is generally better, as the build process involves git operations which can overwrite files and possibly cause conflics."),(0,a.kt)("h3",{id:"4-add-and-push-your-code"},"4 Add and push your code"),(0,a.kt)("p",null,"Push your changes to GitHub, and make sure they're in the default branch."),(0,a.kt)("h2",{id:"publish-a-build"},"Publish a Build!"),(0,a.kt)("p",null,'Assuming your configuration is set up correctly, you should be able to publish your first build. In the Kotlin repo\'s GitHub home page, go to "Actions", select "KMMBridge Publish Release", and manually run it.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-04_21-14-runbuild.png",alt:"runbuild"})),(0,a.kt)("p",null,"When that run is complete, you should see a green result. If not, please reach out :) This sample project is very small. A larger project may take considerably longer to build, so be prepared to wait..."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-04_21-19-image-20221004211903511.png",alt:"image-20221004211903511"})),(0,a.kt)("h2",{id:"ios-dev-machine-config"},"iOS Dev Machine Config"),(0,a.kt)("p",null,"If you're using the github packages for artifact hosting via ",(0,a.kt)("inlineCode",{parentName:"p"},"addGithubPackagesRepository()"),", accessing the artifacts requires authentication even for public repos. You'll need to tell the local machine how to access the private file. You can do this either by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file, or by adding the info to your local keychain."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"These steps are needed for any private artifact hosting, but won't be necessary if your artifacts are hosted somewhere publicly accessible.")),(0,a.kt)("p",null,"First, get a personal access token from GitHub. Make sure it has at least ",(0,a.kt)("inlineCode",{parentName:"p"},"repo")," permissions. You can add an expiration, but if you do, you'll need to remember to create a new one later..."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-09-29_08-17-Screen%20Shot%202022-09-29%20at%208.16.31%20AM.png",alt:"Screen Shot 2022-09-29 at 8.16.31 AM"})),(0,a.kt)("p",null,"Add the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file (create the file if it doesn't exist):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"machine maven.pkg.github.com\n  login [github username]\n  password [your new personal access token]\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file tells curl and other networking tools how to authenticate to servers matching each ",(0,a.kt)("inlineCode",{parentName:"p"},"machine")," entry. If you use a different back end you'll need to have a different ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.netrc")," entry."),(0,a.kt)("p",null,"Alternatively, you can use the Mac's keychain to manage access. See ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/geekculture/xcode-13-3-supports-spm-binary-dependency-in-private-github-release-8d60a47d5e45"},"this blog post for more detail"),"."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"You'll want to pull this new build into Xcode. For more information on how to do that, see  ",(0,a.kt)("a",{parentName:"p",href:"/docs/cocoapods/IOS_COCOAPODS"},"IOS_COCOAPODS")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/spm/IOS_SPM"},"IOS_SPM"),"."),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/TROUBLESHOOTING"},"TROUBLESHOOTING")))}d.isMDXComponent=!0}}]);