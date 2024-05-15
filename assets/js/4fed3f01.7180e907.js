"use strict";(self.webpackChunkcodiac=self.webpackChunkcodiac||[]).push([[2488],{1301:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=i(4848),t=i(8453);const o={},a="MongoDb Repo Plugin",r={id:"api-base/plugins/mongodb-repo-plugin",title:"MongoDb Repo Plugin",description:"A highly functional data access layer for a MongoDb database.",source:"@site/docs/api-base/plugins/mongodb-repo-plugin.md",sourceDirName:"api-base/plugins",slug:"/api-base/plugins/mongodb-repo-plugin",permalink:"/docs/api-base/plugins/mongodb-repo-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-base/plugins/mongodb-repo-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Codiac API Plugins",permalink:"/docs/api-base/plugins/"},next:{title:"Codiac OpenApi Plugin",permalink:"/docs/api-base/plugins/open-api-plugin"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mongodb-repo-plugin",children:"MongoDb Repo Plugin"}),"\n",(0,s.jsx)(n.p,{children:"A highly functional data access layer for a MongoDb database."}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Domain driven ORM"})," ",(0,s.jsx)(n.em,{children:"supporting divergence between data model and domain."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CRUD, Patch, and Upsert"})," ",(0,s.jsx)(n.em,{children:"for single and multiple entities."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding and Cascading"})," ",(0,s.jsx)(n.em,{children:"enabling full continuity for single-hit writes of parent and child entities."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Read-optimized"})," ",(0,s.jsx)(n.em,{children:"by placing the burden of joins and embedding into write operations."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"COTN"})," ",(0,s.jsx)(n.em,{children:"smart defaults and optional DDL on demand for low-code implementation of typical scenarios."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Comppliant with Standard Codiac Interfaces"})," ",(0,s.jsx)(n.em,{children:"enabling seamless use of multiple data source providers across a given domain"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.p,{children:"Add the plugin to your api startup script runner..."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Typescript",children:"codiac\n  .addPlugin(MongoDbRepoPlugin)\n  .run(myApiDef);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Register the server address for your mongoDb in your api definition's ",(0,s.jsx)(n.code,{children:"bootstrap()"})," method...\n",(0,s.jsx)(n.em,{children:"NOTE:  The plugin will automatically  register mongodb with your api using  default values, so if you plan to take all the defaults, even this step is unnecessary."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Typescript",children:'this.useMongoDb(host.appConfig["mongo-dbname"]||"localhost");\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(6540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);