"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81089],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(o),g=r,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return o?n.createElement(m,a(a({ref:e},c),{},{components:o})):n.createElement(m,a({ref:e},c))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,a=new Array(i);a[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},67614:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const i={description:"Project Two - Digital Input v1.0b",title:"Project Two - Digital Input v1.0b",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Two-Digital_Input_v1.0b",last_update:{date:"2/15/2023",author:"jianjing Huang"}},a=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input_v1.0b",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input_v1.0b",title:"Project Two - Digital Input v1.0b",description:"Project Two - Digital Input v1.0b",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input_v1.0b.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_Two-Digital_Input_v1.0b",permalink:"/Project_Two-Digital_Input_v1.0b",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input_v1.0b.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676390400,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"Project Two - Digital Input v1.0b",title:"Project Two - Digital Input v1.0b",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Two-Digital_Input_v1.0b",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project Two \u2013 Digital Input",permalink:"/Project_Two-Digital_Input"},next:{title:"Project Three \u2013 Analog Input v1.0b",permalink:"/Project_Three-Analog_Input_v1b"}},l={},u=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:u};function p(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of this project is to demonstrate two forms of digital input \u2013 using the button Grove and the tilt switch Grove . Pressing the button will light the LED, and activating the tilt-switch will light the LED."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wiring it:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect the LED Module to the D1/D2 Digital I/O jack, like it was in Projects 1.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Arduino Pin D1 powers the LED on the Grove's SIG connector, and Arduino Pin D2 connect to the LED Grove's NC connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect the Tilt Switch Grove to the D5/D6 Digital I/O jack.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Tilt Switch Grove's SIG connector sends a high or low signal to the Arduino's D5 digital input.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect the Button Module to the D7/D8 input jack (on the second row.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Button Grove uses the SIG connector to send a signal to the Arduino's D7 digital input.\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Two-Digital_Input_v1.0b/img/Digitalv1.0b.jpg",alt:null})))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"// Project Two - Digital Inputs\n//\n\nvoid setup()\n{\n  pinMode(1, OUTPUT);\n  pinMode(5, INPUT);\n  pinMode(7, INPUT);\n}\n\nvoid loop()\n{\n\nif (digitalRead(5)==HIGH)\n  {\n    digitalWrite(1, HIGH);\n    delay(100);\n    digitalWrite(1, LOW);\n  }\n\n  if (digitalRead(7)==HIGH)\n  {\n    digitalWrite(1, HIGH);\n    delay(200);\n    digitalWrite(1, LOW);\n  }\n\n}\n")),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);