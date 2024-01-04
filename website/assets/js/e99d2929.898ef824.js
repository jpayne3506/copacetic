"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,b=p["".concat(c,".").concat(f)]||p[f]||g[f]||o;return n?r.createElement(b,l(l({ref:t},s),{},{components:n})):r.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={title:"Troubleshooting"},l=void 0,a={unversionedId:"troubleshooting",id:"version-v0.6.x/troubleshooting",title:"Troubleshooting",description:"Filtering Vulnerabilities",source:"@site/versioned_docs/version-v0.6.x/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/copacetic/website/troubleshooting",draft:!1,tags:[],version:"v0.6.x",frontMatter:{title:"Troubleshooting"},sidebar:"sidebar",previous:{title:"Output",permalink:"/copacetic/website/output"},next:{title:"Design",permalink:"/copacetic/website/design"}},c={},u=[{value:"Filtering Vulnerabilities",id:"filtering-vulnerabilities",level:2},{value:"Rego Policy",id:"rego-policy",level:3},{value:"Ignore File",id:"ignore-file",level:3}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"filtering-vulnerabilities"},"Filtering Vulnerabilities"),(0,i.kt)("p",null,"You might want to filter/ignore some of the vulnerabilities while patching. To do so, you need to first filter those undesired vulnerabilities from your scanner output."),(0,i.kt)("p",null,"For Trivy, vulnerabilities can be filtered by the following 2 ways:"),(0,i.kt)("h3",{id:"rego-policy"},"Rego Policy"),(0,i.kt)("p",null,"An example rego file which demonstrates how to ignore certain Vulnerability IDs or Package Names:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat trivy_ignore.rego\n\npackage trivy\n\nimport data.lib.trivy\n\ndefault ignore = false\n\n\n# Ignore the following Vulnerability IDs\nignore_vulnerability_ids := {\n   "CVE-2018-14618"\n}\n# Ignore the following Package Names\nignore_pkgs := {"bash", "vim"}\n\n\n# For ignoring vulnID\nignore {\n   input.VulnerabilityID == ignore_vulnerability_ids[_]\n}\n# For ignoring pkgName\nignore {\n    input.PkgName == ignore_pkgs[_]\n}\n\n')),(0,i.kt)("p",null,"After adding the above rego file, run the image scan with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore-policy")," flag followed by the file name to ignore them while scanning:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"trivy image --ignore-policy trivy_ignore.rego ruby:2.4.0\n")),(0,i.kt)("p",null,'In the above example, the vulnerability "CVE-2018-14618"  and the packages "bash" & "vim" are ignored while scanning, and hence patching the image.'),(0,i.kt)("h3",{id:"ignore-file"},"Ignore File"),(0,i.kt)("p",null,"Use a ",(0,i.kt)("inlineCode",{parentName:"p"},".trivyignore")," file to list all the vulnerabilities you want to ignore."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat .trivyignore\n\n# Accept the risk\nCVE-2018-14618\n")),(0,i.kt)("p",null,"In the above example, the vulnerability CVE-2018-14618 is ignored while scanning, and hence while patching the image."),(0,i.kt)("p",null,"For a more detailed explanation on how to ignore certain vulnerabilities with Trivy, please refer to the official documentation ",(0,i.kt)("a",{parentName:"p",href:"https://aquasecurity.github.io/trivy/v0.44/docs/configuration/filtering/"},"here"),"."))}p.isMDXComponent=!0}}]);