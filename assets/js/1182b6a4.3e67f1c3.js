"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},l="Calling our GitHub Actions Workflow",i={unversionedId:"ciconfig/GITHUB_ACTIONS",id:"ciconfig/GITHUB_ACTIONS",title:"Calling our GitHub Actions Workflow",description:"You can easily configure GitHub Actions to run and publish builds. We have a set of external workflows that your project",source:"@site/docs/ciconfig/01_GITHUB_ACTIONS.md",sourceDirName:"ciconfig",slug:"/ciconfig/GITHUB_ACTIONS",permalink:"/KMMBridge/ciconfig/GITHUB_ACTIONS",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/ciconfig/01_GITHUB_ACTIONS.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1673546798,formattedLastUpdatedAt:"Jan 12, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CI Configuration",permalink:"/KMMBridge/category/ci-configuration"},next:{title:"CocoaPods",permalink:"/KMMBridge/category/cocoapods"}},s={},u=[{value:"Workflow Options",id:"workflow-options",level:2},{value:"Setup",id:"setup",level:2},{value:"Params",id:"params",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"calling-our-github-actions-workflow"},"Calling our GitHub Actions Workflow"),(0,a.kt)("p",null,"You can easily configure GitHub Actions to run and publish builds. We have a set of external workflows that your project\ncan use to do this."),(0,a.kt)("h2",{id:"workflow-options"},"Workflow Options"),(0,a.kt)("p",null,"There are currently two workflow options available. One builds and publishes from the branch you run it in, while the other creates a temporary branch, publishes from there, then deletes the branch."),(0,a.kt)("p",null,"Same branch: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KMMBridgeGithubWorkflow/blob/main/.github/workflows/faktorybuild.yml"},"faktorybuild.yml")),(0,a.kt)("p",null,"Build branch: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KMMBridgeGithubWorkflow/blob/main/.github/workflows/faktorybuildbranches.yml"},"faktorybuildbranches.yml")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Generally speaking, if you're using SPM, we'd suggest the version that creates a new branch. Building in the same branch will require you to pull locally before you can push, and occasionally you'll have ",(0,a.kt)("inlineCode",{parentName:"p"},"Package.swift")," conflicts. They're generally not actual conflicts. ",(0,a.kt)("inlineCode",{parentName:"p"},"Package.swift")," is automatically generated when publishing and when doing local dev for SPM, but git will complain.")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"In your Kotlin project, find or create the ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows")," folder. Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"yml")," file in it. Call it something descriptive, like ",(0,a.kt)("inlineCode",{parentName:"p"},"kmmbridgepublish.yml"),". From there, add workflow triggers, and call our workflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: KMM Bridge Publish Release\non:\n  workflow_dispatch:\n  push:\n    branches:\n      - "main"\njobs:\n  call-kmmbridge-publish:\n    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.3\n    secrets:\n      PODSPEC_SSH_KEY: ${{ secrets.PODSPEC_SSH_KEY }}\n')),(0,a.kt)("p",null,'Notice the "on" section. In our example, you can run the workflow manually with ',(0,a.kt)("inlineCode",{parentName:"p"},"workflow_dispatch:"),", or have it run whenever you push to the main branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  push:\n    branches:\n      - "main"\n')),(0,a.kt)("p",null,"Then call our workflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  call-kmmbridge-publish:\n    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.3\n    secrets:\n      PODSPEC_SSH_KEY: ${{ secrets.PODSPEC_SSH_KEY }}\n")),(0,a.kt)("p",null,"If you are publishing to Cocoapods, you'll likely need the ",(0,a.kt)("inlineCode",{parentName:"p"},"PODSPEC_SSH_KEY")," secret. See ",(0,a.kt)("a",{parentName:"p",href:"../cocoapods/COCOAPODS_GITHUB_PODSPEC"},"COCOAPODS_GITHUB_PODSPEC")," for more detail."),(0,a.kt)("h2",{id:"params"},"Params"),(0,a.kt)("p",null,"There are 4 optional parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gradle_params - If your Gradle build needs custom params, like properties, pass them here."),(0,a.kt)("li",{parentName:"ul"},"PODSPEC_SSH_KEY - The SSH key for publishing."),(0,a.kt)("li",{parentName:"ul"},"module - the module to run the publish task in, used when you have multiple publishable modules"),(0,a.kt)("li",{parentName:"ul"},"publishTask - the task to run if not ",(0,a.kt)("inlineCode",{parentName:"li"},"kmmBridgePublish"),". If using this make sure the task you give will also run ",(0,a.kt)("inlineCode",{parentName:"li"},"kmmBridgePublish"))),(0,a.kt)("p",null,"When publishing in a CI action you may need to add the credentials to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.netrc")," before running publish, for example to validate the podspec or to authenticate to your artifact hosting. To do this simply pass the custom ",(0,a.kt)("inlineCode",{parentName:"p"},"netrc")," params in our GitHub Workflow."),(0,a.kt)("p",null,"You'll also need to add the username and password gradle params through the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle_params")," secret in our workflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  call-kmmbridge-publish:\n    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.7\n    with: \n      netrcMachine: touchlabartifactory.jfrog.io\n    secrets:\n      PODSPEC_SSH_KEY: ${{ secrets.PODSPEC_SSH_KEY }}\n      gradle_params: -PUSERNAME=${{ secrets.ARTIFACTORY_USERNAME}} -PPASSWORD=${{ secrets.ARTIFACTORY_PASSWORD }}\n")),(0,a.kt)("p",null,"or set them separately like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  call-kmmbridge-publish:\n    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.7\n    with: \n      netrcMachine: touchlabartifactory.jfrog.io\n    secrets:\n      PODSPEC_SSH_KEY: ${{ secrets.PODSPEC_SSH_KEY }}\n      netrcUsername: ${{ secrets.ARTIFACTORY_USERNAME }} \n      netrcPassword: ${{ secrets.ARTIFACTORY_PASSWORD }} \n")))}p.isMDXComponent=!0}}]);