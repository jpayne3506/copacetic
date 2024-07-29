"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9727],{4725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(4848),o=n(8453);const a={title:"Output"},s=void 0,r={id:"output",title:"Output",description:"Experimental: This feature might change without preserving backwards compatibility.",source:"@site/versioned_docs/version-v0.5.x/output.md",sourceDirName:".",slug:"/output",permalink:"/copacetic/website/v0.5.x/output",draft:!1,unlisted:!1,tags:[],version:"v0.5.x",frontMatter:{title:"Output"},sidebar:"sidebar",previous:{title:"Quick Start",permalink:"/copacetic/website/v0.5.x/quick-start"},next:{title:"Troubleshooting",permalink:"/copacetic/website/v0.5.x/troubleshooting"}},c={},l=[{value:"OpenVEX",id:"openvex",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"Experimental: This feature might change without preserving backwards compatibility."})}),"\n",(0,i.jsx)(t.p,{children:"Copa optionally outputs a Vulnerability Exploitability eXchange (VEX) file as a result of the patching process to surface the vulnerabilities and packages that were patched."}),"\n",(0,i.jsxs)(t.p,{children:["Currently, Copa supports the ",(0,i.jsx)(t.a,{href:"https://github.com/openvex",children:"OpenVEX"})," format, but it can be extended to support other formats."]}),"\n",(0,i.jsx)(t.h2,{id:"openvex",children:"OpenVEX"}),"\n",(0,i.jsxs)(t.p,{children:["OpenVEX is an implementation of Vulnerability Exploitability eXchange (VEX) format. For more information, see ",(0,i.jsx)(t.a,{href:"https://github.com/openvex/spec/",children:"OpenVEX specification"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"COPA_VEX_AUTHOR"})," environment variable to set the author of the VEX document. If it's not set, the author will default to ",(0,i.jsx)(t.code,{children:"Project Copacetic"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"A VEX document must contain at least one VEX statement. If there are no fixed vulnerabilities, Copa will not generate a VEX document."}),"\n"]}),"\n"]})}),"\n",(0,i.jsxs)(t.p,{children:["To generate a VEX document using OpenVEX, use ",(0,i.jsx)(t.code,{children:'--format="openvex"'})," flag, and use ",(0,i.jsx)(t.code,{children:"--output"})," to specify a file path. For example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'copa patch -i docker.io/library/nginx:1.21.6 -r nginx.1.21.6.json -t 1.21.6-patched --format="openvex" --output "nginx.1.21.6-vex.json"\n'})}),"\n",(0,i.jsx)(t.p,{children:"This will generate a VEX Document that looks like:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "@context": "https://openvex.dev/ns",\n  "@id": "https://openvex.dev/docs/public/vex-a6c44ec1d79e9dd4190dc01b4ecf7527ebb26bd37c01e32e6efcd203ae00d2a5",\n  "author": "Project Copacetic",\n  "timestamp": "2023-10-11T00:15:00.114768055Z",\n  "version": 1,\n  "tooling": "Project Copacetic",\n  "statements": [\n    {\n      "vulnerability": {\n        "@id": "CVE-2021-22945"\n      },\n      "products": [\n        {\n          "@id": "pkg:oci/docker.io/library/nginx:1.21.6-patched",\n          "subcomponents": [\n            {\n              "@id": "pkg:deb/debian/curl@7.74.0-1.3+deb11u2?arch=amd64"\n            },\n            {\n              "@id": "pkg:deb/debian/libcurl4@7.74.0-1.3+deb11u2?arch=amd64"\n            }\n          ]\n        }\n      ],\n      "status": "fixed"\n    },\n    ...\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(6540);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);