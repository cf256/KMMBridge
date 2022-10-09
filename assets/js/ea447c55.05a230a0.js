"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[690],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,b=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?r.createElement(b,n(n({ref:t},c),{},{components:a})):r.createElement(b,n({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var u=2;u<i;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4132:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=a(7462),o=a(3366),i=(a(7294),a(3905)),n=["components"],s={},l="Github Release Artifacts",u={unversionedId:"artifacts/GITHUB_RELEASE_ARTIFACTS",id:"artifacts/GITHUB_RELEASE_ARTIFACTS",title:"Github Release Artifacts",description:"Publishing binary Xcode Frameworks requires a place to publish and host your artifacts. This really just needs to be a file bucket that you can read/write to. Github doesn't provide raw file hosting like AWS S3, but does provide various methods to host files. One simple method is to upload files to a Github release. The benefits are:",source:"@site/docs/artifacts/GITHUB_RELEASE_ARTIFACTS.md",sourceDirName:"artifacts",slug:"/artifacts/GITHUB_RELEASE_ARTIFACTS",permalink:"/KMMBridge/docs/artifacts/GITHUB_RELEASE_ARTIFACTS",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/artifacts/GITHUB_RELEASE_ARTIFACTS.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1665335972,formattedLastUpdatedAt:"10/9/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Faktory Artifacts",permalink:"/KMMBridge/docs/artifacts/FAKTORY_ARTIFACTS"},next:{title:"S3 Public Artifacts",permalink:"/KMMBridge/docs/artifacts/S3_PUBLIC_ARTIFACTS"}},c={},p=[{value:"Note: Experimental",id:"note-experimental",level:2},{value:"Config",id:"config",level:2},{value:"Gradle Build",id:"gradle-build",level:3},{value:"iOS Build",id:"ios-build",level:3},{value:"Public Repos",id:"public-repos",level:4},{value:"Private Repos",id:"private-repos",level:4}],d={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github-release-artifacts"},"Github Release Artifacts"),(0,i.kt)("p",null,"Publishing binary Xcode Frameworks requires a place to publish and host your artifacts. This really just needs to be a file bucket that you can read/write to. Github doesn't provide raw file hosting like AWS S3, but does provide various methods to host files. One simple method is to upload files to a Github release. The benefits are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can publish as many files as you want to a release"),(0,i.kt)("li",{parentName:"ul"},"There is no (published) total limit on files, although each file has to be 2 gigabytes or less."),(0,i.kt)("li",{parentName:"ul"},"There are no (published) restrictions on bandwidth.")),(0,i.kt)("p",null,"Logically, it would make sense to publish your binary files with a versioned github release. However, we need a binary URL to be able to publish releases, at least for SPM, so you have a chicken/egg problem."),(0,i.kt)("p",null,'However, you can add binary files to an existing release. We\'re going to use special Github releases as "file buckets". They only exist to add binary files to for hosting. While this seems a bit hacky, there are benefits to this approach:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is simple"),(0,i.kt)("li",{parentName:"ul"},"You can use it for public or private deployments"),(0,i.kt)("li",{parentName:"ul"},"It works for SPM or Cocoapods"),(0,i.kt)("li",{parentName:"ul"},"Access is handled by Github, so you can add or remove developers as you normally would")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-10-04_16-48-image-20221004164855858.png",alt:"image-20221004164855858"})),(0,i.kt)("h2",{id:"note-experimental"},"Note: Experimental"),(0,i.kt)("p",null,"This is experimental. According to GIthub docs and policies, this will work fine, but it's not exactly the way they intend you to use releases. There are no published limits to uploads or bandwidth, but if you're using this a lot, there may be upper bounds we haven't encountered yet. However, for most standard use cases this should be fine."),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("h3",{id:"gradle-build"},"Gradle Build"),(0,i.kt)("p",null,"If you are using our Github Actions CI ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KMMBridgeGithubWorkflow"},"touchlab/KMMBridgeGithubWorkflow"),", you don't need to pass any parameters. Just add this to your ",(0,i.kt)("inlineCode",{parentName:"p"},"kmmbridge")," config in your Gradle build file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-koltin"},"kmmbridge {\n    githubReleaseArtifacts()\n    githubReleaseVersions() // Highly recommended that you add this also...\n}\n")),(0,i.kt)("p",null,"You should also usually add a version manager, and if you're using Github artifacts, versioning with Girhub releases also makes sense, so you should add ",(0,i.kt)("inlineCode",{parentName:"p"},"githubReleaseVersions()"),", unless you have a specific reason not to. See:  ",(0,i.kt)("a",{parentName:"p",href:"/KMMBridge/docs/general/CONFIGURATION_OVERVIEW"},"CONFIGURATION_OVERVIEW")," for more detail on version managers."),(0,i.kt)("p",null,"The CI script passes some arguments to Gradle directly that allow KMMBridge to publish zip files to releases.  If you aren't using our CI script, you'll need to add those parameters on your own. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KMMBridgeGithubWorkflow/blob/f6075b60151caf15b8759c811b0d2458fbdd08a7/.github/workflows/faktorybuild.yml#L49"},"Here is the relevant code from our CI script"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"./gradlew kmmBridgePublish -PGITHUB_PUBLISH_TOKEN=${{ secrets.GITHUB_TOKEN }} -PGITHUB_REPO=${{ github.repository }}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_PUBLISH_TOKEN")," is the access token we pass to Github. ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_REPO")," is the repo we'll be publishing to."),(0,i.kt)("h3",{id:"ios-build"},"iOS Build"),(0,i.kt)("h4",{id:"public-repos"},"Public Repos"),(0,i.kt)("p",null,"For public projects, you should not need to do any configuration. Cocoapods and SPM can access public release files directly with no auth."),(0,i.kt)("h4",{id:"private-repos"},"Private Repos"),(0,i.kt)("p",null,"For private builds, you'll need to tell the local machine how to access the private file. You can do this either by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file, or by adding the info to your local keychain."),(0,i.kt)("p",null,"First, get a personal access token from GIthub. Make sure it has at least ",(0,i.kt)("inlineCode",{parentName:"p"},"repo")," permissions. You can add an expiration, but if you do, you'll need to remember to create a new one later..."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tl-navigator-images.s3.us-east-1.amazonaws.com/docimages/2022-09-29_08-17-Screen%20Shot%202022-09-29%20at%208.16.31%20AM.png",alt:"Screen Shot 2022-09-29 at 8.16.31 AM"})),(0,i.kt)("p",null,"Add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," file (create it if it doesn't exist):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"machine api.github.com\n  login [github username]\n  password [your new personal access token]\n")),(0,i.kt)("p",null,"Once that is set up, assuming you have access to the private repo where the artifacts are stored, you should be able to sync and build Xcode successfully."),(0,i.kt)("p",null,"Alternatively, you can use the Mac's keychain to manage access. See ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/geekculture/xcode-13-3-supports-spm-binary-dependency-in-private-github-release-8d60a47d5e45"},"this blog post for more detail"),". Also, a big thanks to the author of that post for connecting a lot of the dots!"))}h.isMDXComponent=!0}}]);