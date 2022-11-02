"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[829],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Maven Repository Artifacts",u={unversionedId:"artifacts/MAVEN_REPO_ARTIFACTS",id:"artifacts/MAVEN_REPO_ARTIFACTS",title:"Maven Repository Artifacts",description:'You can use a "standard" Maven repository to store your KMMBridge zip artifact. This will push the XCFramework zip archive to a standard maven/gradle endpoint. Using this artifact storage method allows for a wider range of publication possibilities, and utilizes standard Gradle publishing config.',source:"@site/docs/artifacts/MAVEN_REPO_ARTIFACTS.md",sourceDirName:"artifacts",slug:"/artifacts/MAVEN_REPO_ARTIFACTS",permalink:"/KMMBridge/artifacts/MAVEN_REPO_ARTIFACTS",draft:!1,editUrl:"https://github.com/touchlab/KMMBridge/tree/main/website/docs/artifacts/MAVEN_REPO_ARTIFACTS.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1667352074,formattedLastUpdatedAt:"11/2/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Faktory Artifacts",permalink:"/KMMBridge/artifacts/FAKTORY_ARTIFACTS"},next:{title:"CI Configuration",permalink:"/KMMBridge/category/ci-configuration"}},p={},c=[{value:"1) Configure Push Access",id:"1-configure-push-access",level:2},{value:"2) Configure Client Read Access",id:"2-configure-client-read-access",level:2},{value:"Package Metadata",id:"package-metadata",level:3},{value:"Binary Access",id:"binary-access",level:3},{value:"3) Publish Versions and Operations",id:"3-publish-versions-and-operations",level:2},{value:"Github Packages",id:"github-packages",level:2},{value:"Artifactory",id:"artifactory",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"maven-repository-artifacts"},"Maven Repository Artifacts"),(0,i.kt)("p",null,'You can use a "standard" Maven repository to store your KMMBridge zip artifact. This will push the XCFramework zip archive to a standard maven/gradle endpoint. Using this artifact storage method allows for a wider range of publication possibilities, and utilizes standard Gradle publishing config.'),(0,i.kt)("p",null,"Using Maven/Gradle repos to store your KMMBridge artifacts requires a few setup steps, and has some unique considerations. Setup requires handling the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure push access to your repository."),(0,i.kt)("li",{parentName:"ol"},"Configure artifact read access for private repos (generally the ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.netrc")," or Mac Keychain Access config)."),(0,i.kt)("li",{parentName:"ol"},"(Possibly) consolidate your publishing versions and operations.")),(0,i.kt)("h2",{id:"1-configure-push-access"},"1) Configure Push Access"),(0,i.kt)("p",null,"Each repo type has it's own unique setup, but essentially we need:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A repo url"),(0,i.kt)("li",{parentName:"ol"},"A username that can publish to the repo"),(0,i.kt)("li",{parentName:"ol"},"A password/token for that user")),(0,i.kt)("p",null,"See specific guidance for Github Packages, JetBrains Space, and Artifactory."),(0,i.kt)("p",null,"The standard Gradle publishing config looks like the following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    `maven-publish`\n    // etc\n}\n\n// ...\n\npublishing {\n    // Externally set these values. Generally ~/.gradle/gradle.properties or CI Secrets\n    val publishUsername: String by project\n    val publishPassword: String by project\n    repositories {\n        maven {\n            url = uri("https://someservice/path/to/repo")\n            credentials {\n                username = publishUsername\n                password = publishPassword\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"With publishing configured, you can publish everything with ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew publish"),", or just publish the KMMBridge artifact with ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew kmmBridgePublish"),"."),(0,i.kt)("h2",{id:"2-configure-client-read-access"},"2) Configure Client Read Access"),(0,i.kt)("p",null,"To access your published Xcode Framework package, you'll need to make sure Xcode has access to the package metadata and the binary itself. The package metadata differs depending on if you use Cocoapods or Swift Pacakge Manager. Access to the binary is the same with either."),(0,i.kt)("h3",{id:"package-metadata"},"Package Metadata"),(0,i.kt)("p",null,"Cocoapods publishes pacakge metadata to a git repo. See ",(0,i.kt)("a",{parentName:"p",href:"cocoapods/IOS_COCOAPODS"},"CocoaPods setup"),"."),(0,i.kt)("p",null,"SPM uses git for publishing and git tags for versioning. See ",(0,i.kt)("a",{parentName:"p",href:"../spm/IOS_SPM"},"SPM setup"),"."),(0,i.kt)("h3",{id:"binary-access"},"Binary Access"),(0,i.kt)("p",null,"If the binaries are stored in a private server, you'll need to configure auth access to them. You can do that with ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," or Mac Keychain Access. We'll use ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," here."),(0,i.kt)("p",null,"Open or create ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc"),". Add the server and credentials to access your files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"machine repo.example.com\n  login <user>\n  password <pass>\n")),(0,i.kt)("p",null,"If you're using GitHub Packages, you'll need your GitHub username and a Personal Access Token that can read repo and read packages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"machine maven.pkg.github.com\n  login <Github User>\n  password <PAT>\n")),(0,i.kt)("p",null,"For different repos you'll need to change the machine to point at the server where your files are kept."),(0,i.kt)("h2",{id:"3-publish-versions-and-operations"},"3) Publish Versions and Operations"),(0,i.kt)("p",null,"The Maven publishing adds a special artifact to the \"standard\" Gradle publishing config, specically for KMMBridge. We're publishing the Xcode Framework XCFramework zip file as it's own Gradle/Maven artifact. If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew publish"),", it'll attempt to publish KMMBridge along with any other configured publish targets."),(0,i.kt)("p",null,"If you do intend to publish everything, you'll likely want to disable the automatically incrementing verison support that KMMBridge provides, and use the standard Gradle publishing version management."),(0,i.kt)("p",null,"If you want to use the version from Gradle, use the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"kmmbridge {\n    mavenPublishArtifacts()\n    manualVersions()\n    // etc\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"manualVersions()")," means we're just going to use whatever version string is available and not try to auto-increment. If you don't provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"versionPrefix")," value, KMMBridge will just use the version provided to Gradle."),(0,i.kt)("h2",{id:"github-packages"},"Github Packages"),(0,i.kt)("p",null,"If you are publishing to Github Packages and you are using our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/touchlab/KMMBridgeGithubWorkflow"},"helper workflow")," with GitHub Actions, you can turn on publishing to GitHub Packages very easily with the following function at the root of your Gradle build file."),(0,i.kt)("p",null,"Pretty much everything you'd need to configure to publish to GitHub Packages is listed here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'import co.touchlab.faktory.addGithubPackagesRepository\n\nplugins {\n    kotlin("multiplatform")\n    `maven-publish`\n    id("co.touchlab.faktory.kmmbridge") version "0.3.1"\n}\n\ngroup = "co.touchlab.somegroup"\nversion = "0.2"\n\nkotlin {\n    ios {\n        binaries.framework()\n    }\n}\n\nkmmbridge {\n    mavenPublishArtifacts() // <- Publish using a Maven repo\n    gitTagVersions()\n    spm()\n}\n\naddGithubPackagesRepository() // <- Add the GitHub Packages repo\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," section, ",(0,i.kt)("inlineCode",{parentName:"p"},"group/version"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin")," blocks should looks pretty familiar to anybody who has done KMP/KMM work. You'll probably have more targets in ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin"),", and probably more entries in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),", but this setup would be complete and functional as presented."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"kmmbridge"),", notice ",(0,i.kt)("inlineCode",{parentName:"p"},"mavenPublishArtifacts()")," tells the plugin to push KMMBridge artifacts to a Maven repo. You then need to define a repo. Rather than do everything manually, you can just call ",(0,i.kt)("inlineCode",{parentName:"p"},"addGithubPackagesRepository()"),", which will add the correct repo given parameters that are passed in from GitHub Actions."),(0,i.kt)("h2",{id:"artifactory"},"Artifactory"),(0,i.kt)("p",null,"If you're using an Artifactory to store artifacts, you just have to set up a repo on Artifactory and add your repo url and credentials in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"publishing")," block (see above). NOTE: If you add the Artifactory repo with the ",(0,i.kt)("inlineCode",{parentName:"p"},"artifactory")," gradle plugin KMMBridge won't be able to find the\nrepo. For now, you'll have to also add the repo in the maven ",(0,i.kt)("inlineCode",{parentName:"p"},"publishing")," block. "),(0,i.kt)("p",null,"When publishing in a CI action, if you're using CocoaPods you won't be able to use our helper workflow because you need to\nadd the credentials to ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.netrc")," before running it to validate the podspec and GitHub doesn't allow adding steps before using a reusable workflow. "),(0,i.kt)("p",null,"For now, you'll have to set up the publish action yourself. To do that your action will need to look something like this "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'jobs:\n  publish:\n    # Needs to run on macOS\n    runs-on: macos-latest\n    steps:\n      - name: Checkout the repo\n        uses: actions/checkout@v3\n      # Needed to push to your Podspec Repo\n      - name: Apply SSH Key\n        uses: webfactory/ssh-agent@v0.5.4\n        with:\n          ssh-private-key: ${{ secrets.PODSPEC_SSH_KEY }}\n      # pod spec lint needs to be able to access your artifactory repo\n      - uses: extractions/netrc@v1\n        with:\n          machine: touchlabtest.jfrog.io\n          username: ${{ secrets.ARTIFACTORY_USERNAME }}\n          password: ${{ secrets.ARTIFACTORY_PASSWORD }}\n\n      - uses: actions/setup-java@v2\n        with:\n          distribution: "adopt"\n          java-version: "11"\n\n      - name: Build Main\n        run: ./gradlew kmmBridgePublish -PUSERNAME=${{ secrets.ARTIFACTORY_USERNAME}} -PPASSWORD=${{ secrets.ARTIFACTORY_PASSWORD }} \n')))}h.isMDXComponent=!0}}]);