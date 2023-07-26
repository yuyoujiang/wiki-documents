"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49219],{3905:(e,t,s)=>{s.d(t,{Zo:()=>l,kt:()=>P});var n=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(s),h=r,P=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return s?n.createElement(P,i(i({ref:t},l),{},{components:s})):n.createElement(P,i({ref:t},l))}));function P(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,i=new Array(a);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=s[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}h.displayName="MDXCreateElement"},81197:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=s(87462),r=(s(67294),s(3905));const a={description:"HTTP API Access Guide",title:"HTTP API Access Guide",keywords:["HTTP API"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,o={unversionedId:"Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide",id:"Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide",title:"HTTP API Access Guide",description:"HTTP API Access Guide",source:"@site/docs/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide.md",sourceDirName:"Cloud_Chain/SenseCAP_API/HTTP_API",slug:"/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide",permalink:"/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"HTTP API Access Guide",title:"HTTP API Access Guide",keywords:["HTTP API"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"HTTP API Quickstart",permalink:"/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start"},next:{title:"Data OpenStream API Quickstart",permalink:"/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart"}},c={},u=[{value:"HTTP Request and Response",id:"http-request-and-response",level:2},{value:"HTTP HOST",id:"http-host",level:3},{value:"HTTP HEADER",id:"http-header",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"HTTP Basic Authentication",id:"http-basic-authentication",level:4},{value:"API Response",id:"api-response",level:4},{value:"Successful Response with String",id:"successful-response-with-string",level:4},{value:"Successful Response with Object",id:"successful-response-with-object",level:4},{value:"Successful response with Array",id:"successful-response-with-array",level:4},{value:"Error Response",id:"error-response",level:4},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:u};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"http-request-and-response"},"HTTP Request and Response"),(0,r.kt)("p",null,"  Requests are authenticated with the HTTP Basic Authentication."),(0,r.kt)("h3",{id:"http-host"},"HTTP HOST"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"China Station: ",(0,r.kt)("a",{parentName:"li",href:"https://sensecap.seeed.cn/openapi"},"https://sensecap.seeed.cn/openapi")),(0,r.kt)("li",{parentName:"ul"},"Global Station: ",(0,r.kt)("a",{parentName:"li",href:"https://sensecap.seeed.cc/openapi"},"https://sensecap.seeed.cc/openapi"))),(0,r.kt)("h3",{id:"http-header"},"HTTP HEADER"),(0,r.kt)("h4",{id:"request"},"Request"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," key"),(0,r.kt)("th",null," description")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"300"}," API-VERSION"),(0,r.kt)("td",{width:"300"}," api version"))),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," key"),(0,r.kt)("th",null," description")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"300"}," api-gateway-excute-second"),(0,r.kt)("td",{width:"300"}," Time in seconds to execute the api")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"300"}," api-gateway-mpuo-consume"),(0,r.kt)("td",{width:"300"}," The quota consumed by executing the api"))),(0,r.kt)("h4",{id:"http-basic-authentication"},"HTTP Basic Authentication"),(0,r.kt)("p",null,"  ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP Basic Authentication"),"is one of the most common ways for RESTfull API authentication. We use Access ID as username and Access Key as password. Every HTTP client library should have its built-in support for Basic Authentication, in this documentation we use curl, which uses the \u2013user option to specify Basic Authentication credential."),(0,r.kt)("p",null,"  you can create access keys via SenseCAP Portal. Please refer to quickstart to see how to get an access key."),(0,r.kt)("h4",{id:"api-response"},"API Response"),(0,r.kt)("p",null," All response key follow the lowercase and underscore convention."),(0,r.kt)("h4",{id:"successful-response-with-string"},"Successful Response with String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'  {\n     "code":"0",\n     "data":"\n         // string\n     "\n }\n')),(0,r.kt)("h4",{id:"successful-response-with-object"},"Successful Response with Object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'    {\n     "code":"0",\n     "data":{\n         // object\n     }\n }\n')),(0,r.kt)("h4",{id:"successful-response-with-array"},"Successful response with Array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'    {\n     "code":"0",\n     "data":[\n         // Array\n     ]\n }\n')),(0,r.kt)("h4",{id:"error-response"},"Error Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},' {\n     "code":"1001",\n     "msg":"error message"\n }\n')),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);