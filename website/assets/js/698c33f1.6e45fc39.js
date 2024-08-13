"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6266],{9594:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(4848),a=i(8453);const s={},r="Maintainer Guidelines",l={id:"maintainer-guidelines",title:"Maintainer Guidelines",description:"Semantic Release Management",source:"@site/versioned_docs/version-v0.7.x/maintainer-guidelines.md",sourceDirName:".",slug:"/maintainer-guidelines",permalink:"/copacetic/website/maintainer-guidelines",draft:!1,unlisted:!1,tags:[],version:"v0.7.x",frontMatter:{},sidebar:"sidebar",previous:{title:"Development and Testing Tips",permalink:"/copacetic/website/development-tips"},next:{title:"Release Process",permalink:"/copacetic/website/release"}},o={},c=[{value:"Semantic Release Management",id:"semantic-release-management",level:2},{value:"Breaking change",id:"breaking-change",level:3},{value:"Deprecation",id:"deprecation",level:3},{value:"Publishing a Release",id:"publishing-a-release",level:2},{value:"Publish a new major/minor version release",id:"publish-a-new-majorminor-version-release",level:3},{value:"Publish a patch revision release",id:"publish-a-patch-revision-release",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"maintainer-guidelines",children:"Maintainer Guidelines"})}),"\n",(0,t.jsx)(n.h2,{id:"semantic-release-management",children:"Semantic Release Management"}),"\n",(0,t.jsxs)(n.p,{children:["This project uses ",(0,t.jsx)(n.a,{href:"https://github.com/go-semantic-release/semantic-release",children:"go-semantic-release"})," to automatically generate the appropriate ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"semantic version"})," and changelog for a release based on ",(0,t.jsx)(n.a,{href:"https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format",children:"Angular commit message format"}),". Of note to maintainers is the need to enforce an empty line-separate format:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<HEADER>\n<-- blank line --\x3e\n<BODY>\n<-- blank line --\x3e\n<FOOTER>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For contributor PRs, instead of trying to ensure adherence in every commit message, it's easiest to adopt a ",(0,t.jsx)(n.a,{href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests",children:"squash and merge"})," strategy so that the PR description is used as the final commit description with the appropriate semantic release format."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition to the semantic release types called out in the ",(0,t.jsx)(n.a,{href:"/copacetic/website/contributing#pull-requests",children:"contributor pull request guidelines"}),", there are several other categories supported by the ",(0,t.jsx)(n.a,{href:"https://github.com/go-semantic-release/changelog-generator-default",children:"default changelog generator"})," that maintainers should be aware of:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"chore:"})," Reserved for automated maintenance changes, such as minor version go dependency updates initiated by Dependabot."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"revert:"})," Maintainers should use this to mark commits that revert a previous commit, followed by the header of the reverted commit. The message body should include the SHA of the reverted commit, as well as a clear description of the reason for the revert."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"style:"})," This is unused for this project."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["There are also two special categories to be added to the ",(0,t.jsx)(n.a,{href:"https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit-message-footer",children:"message footer"})," that maintainers need to pay special attention to when merging changes:"]}),"\n",(0,t.jsx)(n.h3,{id:"breaking-change",children:"Breaking change"}),"\n",(0,t.jsx)(n.p,{children:"Breaking changes should be described in the footer as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"BREAKING CHANGE: <breaking change summary>\n<-- blank line --\x3e\n<breaking change description & migration instructions>\n<-- blank line --\x3e\n<-- blank line --\x3e\nCloses #<issue number>\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note that this project currently uses the ",(0,t.jsx)(n.code,{children:"allow-initial-development-versions"})," flag for go-semantic-release, so ",(0,t.jsx)(n.strong,{children:"breaking changes will still be handled as minor releases"})," until the workflow is updated for the v1.0.0 release."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deprecation",children:"Deprecation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"DEPRECATED: <summary of deprecated feature>\n<-- blank line --\x3e\n<deprecated feature description & migration/workaround instructions>\n<-- blank line --\x3e\n<-- blank line --\x3e\nCloses #<issue number>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"publishing-a-release",children:"Publishing a Release"}),"\n",(0,t.jsxs)(n.p,{children:["To avoid inconsistencies in tagging and release branching, this project uses the ",(0,t.jsx)(n.a,{href:"https://github.com/project-copacetic/copacetic/actions/workflows/release.yml",children:"Publish release"})," GitHub Actions workflow to automate the creation of releases."]}),"\n",(0,t.jsx)(n.h3,{id:"publish-a-new-majorminor-version-release",children:"Publish a new major/minor version release"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Review the ",(0,t.jsx)(n.code,{children:"main"})," branch to ensure that it has all the desired changes for the new release branch and that there are no PR merge workflows in flight."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.em,{children:"Run workflow"})," on the ",(0,t.jsx)(n.a,{href:"https://github.com/project-copacetic/copacetic/actions/workflows/release.yml",children:"Publish release"})," against the ",(0,t.jsx)(n.code,{children:"main"})," branch. This will:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new tag with the incremented semantic version (e.g. ",(0,t.jsx)(n.code,{children:"v0.9.0"}),") against the latest commit in ",(0,t.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Create a new GitHub release against that tag with an automatically generated changelog."}),"\n",(0,t.jsx)(n.li,{children:"Build and upload the new release version of Copa to the GitHub release."}),"\n",(0,t.jsxs)(n.li,{children:["Create a new release branch if it does not already exist (e.g. ",(0,t.jsx)(n.code,{children:"release-0.9"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Verify that the workflow ran successfully and review the expected outputs listed above."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"publish-a-patch-revision-release",children:"Publish a patch revision release"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Review the appropriate release branch that the revision patches (e.g. ",(0,t.jsx)(n.code,{children:"release-0.9"})," for an anticipated new ",(0,t.jsx)(n.code,{children:"v0.9.x"})," tag) to ensure that it has all the desired changes for the release and that there are no PR merge workflows in flight.","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["If there are fixes in ",(0,t.jsx)(n.code,{children:"main"})," intended for the patch release in the latest release branch, they need to be manually ported to the release branch first and the revision released from there."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.em,{children:"Run workflow"})," on the ",(0,t.jsx)(n.a,{href:"https://github.com/project-copacetic/copacetic/actions/workflows/release.yml",children:"Publish release"})," against the target ",(0,t.jsx)(n.code,{children:"release-x.y"})," branch. This will:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new tag with the incremented semantic version (e.g. ",(0,t.jsx)(n.code,{children:"v0.9.4"}),") against the latest commit in the release branch."]}),"\n",(0,t.jsx)(n.li,{children:"Create a new GitHub release against that tag with an automatically generated changelog."}),"\n",(0,t.jsx)(n.li,{children:"Build and upload the new release version of Copa to the GitHub release."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Verify that the workflow ran successfully and review the expected outputs listed above."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);