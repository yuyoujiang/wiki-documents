"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||n;return r?o.createElement(m,s(s({ref:t},l),{},{components:r})):o.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},92113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const n={description:"Stepper Motor Driver v2.3",title:"Stepper Motor Driver v2.3",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Stepper_Motor_Driver_v2.3",last_update:{date:"1/13/2023",author:"shuxu hu"}},s=void 0,a={unversionedId:"Seeed_Elderly/Discrete Product/Stepper_Motor_Driver_v2.3",id:"Seeed_Elderly/Discrete Product/Stepper_Motor_Driver_v2.3",title:"Stepper Motor Driver v2.3",description:"Stepper Motor Driver v2.3",source:"@site/docs/Seeed_Elderly/Discrete Product/Stepper_Motor_Driver_v2.3.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/Stepper_Motor_Driver_v2.3",permalink:"/Stepper_Motor_Driver_v2.3",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/Stepper_Motor_Driver_v2.3.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Stepper Motor Driver v2.3",title:"Stepper Motor Driver v2.3",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Stepper_Motor_Driver_v2.3",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Stepper Motor Driver",permalink:"/Stepper_Motor_Driver"},next:{title:"4WD Driver Platform V1.0",permalink:"/4WD_Driver_Platform_V1.0"}},p={},c=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Stepper_Motor_Driver_v2.3/img/Steperdriver.jpg",alt:null})),(0,i.kt)("p",null,"This board allows you to control one stepper motor, as well as receive input from two limit switches. It is based around the Allegro A3982 Stepper Motor Driver with Translator. The A3982 is capable of driving up to 2A per coil. This board was designed to improve upon and replace the v1.x series of stepper drivers which are based upon the venerable L297/L298 stepper drivers. The A3982 offers a number of improvements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only one chip to solder, as opposed to the two chip L297/L298 combo"),(0,i.kt)("li",{parentName:"ul"},"Superior DMOS technology (no heatsink required!)"),(0,i.kt)("li",{parentName:"ul"},"Built-in diodes and synchronous rectification (no large diode array!)"),(0,i.kt)("li",{parentName:"ul"},"Much cheaper and smaller than the L297/L298 (about $10 cheaper, total!)")),(0,i.kt)("p",null,"The downside is that the board is mostly SMT, although we made a conscious design decision to stick with some of the largest and easiest to solder SMT components on the market. We used 1206 sized resistors and the A3982 itself is in a SOIC package. The board is very easy to put together, even for a beginner. Using a technique such as solder paste + hot plate, the board becomes ridiculously easy to solder. I found that it is much easier to solder SMT boards in this fashion than to solder pin after pin manually with through-hole components."),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);