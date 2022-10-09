"use strict";(self.webpackChunkmy_website_ts=self.webpackChunkmy_website_ts||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"KMMBridge Intro","href":"/KMMBridge/docs/intro","docId":"intro"},{"type":"link","label":"Default Github Workflow","href":"/KMMBridge/docs/DEFAULT_GITHUB_FLOW","docId":"DEFAULT_GITHUB_FLOW"},{"type":"link","label":"iOS Dev Setup","href":"/KMMBridge/docs/IOS_DEV_SETUP","docId":"IOS_DEV_SETUP"},{"type":"category","label":"General Documentation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configuration Overview","href":"/KMMBridge/docs/general/CONFIGURATION_OVERVIEW","docId":"general/CONFIGURATION_OVERVIEW"},{"type":"link","label":"GROOVY_BUILD_SCRIPTS","href":"/KMMBridge/docs/general/GROOVY_BUILD_SCRIPTS","docId":"general/GROOVY_BUILD_SCRIPTS"}],"href":"/KMMBridge/docs/category/general-documentation"},{"type":"category","label":"Artifact Managers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Faktory Artifacts","href":"/KMMBridge/docs/artifacts/FAKTORY_ARTIFACTS","docId":"artifacts/FAKTORY_ARTIFACTS"},{"type":"link","label":"Github Release Artifacts","href":"/KMMBridge/docs/artifacts/GITHUB_RELEASE_ARTIFACTS","docId":"artifacts/GITHUB_RELEASE_ARTIFACTS"},{"type":"link","label":"S3 Public Artifacts","href":"/KMMBridge/docs/artifacts/S3_PUBLIC_ARTIFACTS","docId":"artifacts/S3_PUBLIC_ARTIFACTS"}],"href":"/KMMBridge/docs/category/artifact-managers"},{"type":"category","label":"CocoaPods","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Publishing Podspecs to GitHub","href":"/KMMBridge/docs/cocoapods/COCOAPODS_GITHUB_PODSPEC","docId":"cocoapods/COCOAPODS_GITHUB_PODSPEC"},{"type":"link","label":"Cocoapods","href":"/KMMBridge/docs/cocoapods/","docId":"cocoapods/Cocoapods"},{"type":"link","label":"Using Cocoapods","href":"/KMMBridge/docs/cocoapods/IOS_COCOAPODS","docId":"cocoapods/IOS_COCOAPODS"},{"type":"link","label":"Cocoapods Local Dev Flow","href":"/KMMBridge/docs/cocoapods/IOS_LOCAL_DEV_COCOAPODS","docId":"cocoapods/IOS_LOCAL_DEV_COCOAPODS"}],"href":"/KMMBridge/docs/category/cocoapods"},{"type":"category","label":"Swift Package Manager (SPM)","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SPM Local Dev Flow","href":"/KMMBridge/docs/spm/IOS_LOCAL_DEV_SPM","docId":"spm/IOS_LOCAL_DEV_SPM"},{"type":"link","label":"Using Swift Pacakge Manager","href":"/KMMBridge/docs/spm/IOS_SPM","docId":"spm/IOS_SPM"}],"href":"/KMMBridge/docs/category/swift-package-manager-spm"},{"type":"link","label":"Troubleshooting","href":"/KMMBridge/docs/TROUBLESHOOTING","docId":"TROUBLESHOOTING"}]},"docs":{"artifacts/FAKTORY_ARTIFACTS":{"id":"artifacts/FAKTORY_ARTIFACTS","title":"Faktory Artifacts","description":"We have a hosted service in development to make KMM easier for teams to adopt. We are doing limited private testing witth clients, and have included the artifact manager for teams using the Faktory back end.","sidebar":"tutorialSidebar"},"artifacts/GITHUB_RELEASE_ARTIFACTS":{"id":"artifacts/GITHUB_RELEASE_ARTIFACTS","title":"Github Release Artifacts","description":"Publishing binary Xcode Frameworks requires a place to publish and host your artifacts. This really just needs to be a file bucket that you can read/write to. Github doesn\'t provide raw file hosting like AWS S3, but does provide various methods to host files. One simple method is to upload files to a Github release. The benefits are:","sidebar":"tutorialSidebar"},"artifacts/S3_PUBLIC_ARTIFACTS":{"id":"artifacts/S3_PUBLIC_ARTIFACTS","title":"S3 Public Artifacts","description":"You can publish artifacts to AWS S3. However, there is no easy way to make them private using auth options available out of the box for S3. Therefore, artifacts in S3 will have publicly readable URL\'s. Those URL\'s are generated with a random UUID, so they\'re essentially unguessable, but that\'s and important restriction.","sidebar":"tutorialSidebar"},"cocoapods/Cocoapods":{"id":"cocoapods/Cocoapods","title":"Cocoapods","description":"Basic Configuration","sidebar":"tutorialSidebar"},"cocoapods/COCOAPODS_GITHUB_PODSPEC":{"id":"cocoapods/COCOAPODS_GITHUB_PODSPEC","title":"Publishing Podspecs to GitHub","description":"Cocoapods supports hosting private podspec repos. These are git repos that only host release publishing info for","sidebar":"tutorialSidebar"},"cocoapods/IOS_COCOAPODS":{"id":"cocoapods/IOS_COCOAPODS","title":"Using Cocoapods","description":"You\'ll need an Xcode project with Cocoapods set up. That means you\'ll have a Podfile that you can edit with the necessary code to integrate your Kotlin module.","sidebar":"tutorialSidebar"},"cocoapods/IOS_LOCAL_DEV_COCOAPODS":{"id":"cocoapods/IOS_LOCAL_DEV_COCOAPODS","title":"Cocoapods Local Dev Flow","description":"After you have integrated Cocoapods into Xcode, you can run local dev builds by adding the Kotlin code as a local dev Cocoapod.","sidebar":"tutorialSidebar"},"DEFAULT_GITHUB_FLOW":{"id":"DEFAULT_GITHUB_FLOW","title":"Default Github Workflow","description":"If you are hosting your repos in Github and can use Github Actions for CI, the Default Github Flow is the simplest way to start publishing Kotlin builds for iOS.","sidebar":"tutorialSidebar"},"general/CONFIGURATION_OVERVIEW":{"id":"general/CONFIGURATION_OVERVIEW","title":"Configuration Overview","description":"Components","sidebar":"tutorialSidebar"},"general/GROOVY_BUILD_SCRIPTS":{"id":"general/GROOVY_BUILD_SCRIPTS","title":"GROOVY_BUILD_SCRIPTS","description":"KMMBridge was written and tested with Kotlin Gradle scripts. It\'s possible to use from Groovy, but most syntax is less","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"KMMBridge Intro","description":"KMMBridge is a set of Gradle tooling that facilitates publishing and consuming pre-built KMM (Kotlin Multiplatform Mobile) Xcode Framework binaries.","sidebar":"tutorialSidebar"},"IOS_DEV_SETUP":{"id":"IOS_DEV_SETUP","title":"iOS Dev Setup","description":"To use the published Xcode Framework, you\'ll need to integrate it into your Xcode project. You\'ll also need to understand how to add authentication information, if required by your artifact storage.","sidebar":"tutorialSidebar"},"spm/IOS_LOCAL_DEV_SPM":{"id":"spm/IOS_LOCAL_DEV_SPM","title":"SPM Local Dev Flow","description":"After you have integrated your Kotlin module into Xcode using SPM, you may want to locally build and test your Kotlin code when making changes.","sidebar":"tutorialSidebar"},"spm/IOS_SPM":{"id":"spm/IOS_SPM","title":"Using Swift Pacakge Manager","description":"Swift Package Manager is a newer dependency manager directly from Apple. In some ways it\'s more integrated into Xcode, but is also less flexible than Cocoapods. Much of that seems by design, as it\'s very difficult to introduce side effects into the Package.swift build scripts. While that is likely to result in more reliable builds for the average Xcode project, for Kotlin builds, that means some more manual processes at present.","sidebar":"tutorialSidebar"},"TROUBLESHOOTING":{"id":"TROUBLESHOOTING","title":"Troubleshooting","description":"Error: \\"This fat framework already has a binary for architecture x64 (common for target ios_x64)\u201d (or similar for arm)","sidebar":"tutorialSidebar"}}}')}}]);