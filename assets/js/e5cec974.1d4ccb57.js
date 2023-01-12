"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="JetBrains Space Artifacts",s={unversionedId:"artifacts/SPACE_ARTIFACTS",id:"artifacts/SPACE_ARTIFACTS",title:"JetBrains Space Artifacts",description:"If you're using JetBrains Space to store artifacts, you just have to set up a repo on Space and add your repo url and credentials in the",source:"@site/docs/artifacts/SPACE_ARTIFACTS.md",sourceDirName:"artifacts",slug:"/artifacts/SPACE_ARTIFACTS",permalink:"/KMMBridge/artifacts/SPACE_ARTIFACTS",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/artifacts/SPACE_ARTIFACTS.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1673546798,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Maven Repository Artifacts",permalink:"/KMMBridge/artifacts/MAVEN_REPO_ARTIFACTS"},next:{title:"CI Configuration",permalink:"/KMMBridge/category/ci-configuration"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jetbrains-space-artifacts"},"JetBrains Space Artifacts"),(0,a.kt)("p",null,"If you're using JetBrains Space to store artifacts, you just have to set up a repo on Space and add your repo url and credentials in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"publishing")," block ",(0,a.kt)("a",{parentName:"p",href:"/KMMBridge/artifacts/MAVEN_REPO_ARTIFACTS#1-configure-push-access"},"see this example"),", as well as ",(0,a.kt)("a",{parentName:"p",href:"/KMMBridge/artifacts/MAVEN_REPO_ARTIFACTS#2-configure-client-read-access"},"configure client read access")),(0,a.kt)("p",null,"When publishing in a CI action, if you're using CocoaPods you need to add the credentials to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.netrc")," before running publish\nto validate the podspec. To do this simply use the custom netrc params in our GitHub Workflow."),(0,a.kt)("p",null,"You'll also need to add the username and password gradle params through the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle_params")," secret in our workflow or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  call-kmmbridge-publish:\n    uses: touchlab/KMMBridgeGithubWorkflow/.github/workflows/faktorybuildbranches.yml@v0.7\n    with: \n      netrcMachine: maven.pkg.jetbrains.space \n    secrets:\n      PODSPEC_SSH_KEY: ${{ secrets.PODSPEC_SSH_KEY }}\n      netrcUsername: ${{ secrets.SPACE_USERNAME }} \n      netrcPassword: ${{ secrets.SPACE_PASSWORD }} \n      gradle_params: -PUSERNAME=${{ secrets.SPACE_USERNAME}} -PPASSWORD=${{ secrets.SPACE_PASSWORD }}\n")))}u.isMDXComponent=!0}}]);