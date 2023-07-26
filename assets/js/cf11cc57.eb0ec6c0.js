"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67442],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),c=p(o),k=r,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||i;return o?n.createElement(m,l(l({ref:e},u),{},{components:o})):n.createElement(m,l({ref:e},u))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=o.length,l=new Array(i);l[0]=k;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[c]="string"==typeof t?t:r,l[1]=a;for(var p=2;p<i;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},77425:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const i={description:"LinkIt ONE Tutorial - Hello World",title:"LinkIt ONE Tutorial - Hello World",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Hello_World",last_update:{date:"1/13/2023",author:"shuxu hu"}},l=void 0,a={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Hello_World",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Hello_World",title:"LinkIt ONE Tutorial - Hello World",description:"LinkIt ONE Tutorial - Hello World",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Hello_World.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-Hello_World",permalink:"/LinkIt_ONE_Tutorial-Hello_World",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Hello_World.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"LinkIt ONE Tutorial - Hello World",title:"LinkIt ONE Tutorial - Hello World",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Hello_World",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Get temperature with Webpage",permalink:"/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage"},next:{title:"LinkIt ONE Tutorial - Light Sensor",permalink:"/LinkIt_ONE_Tutorial-Light-Sensor"}},s={},p=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p};function c(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What We're Doing")),(0,r.kt)("p",null,"In the previous section we've got an insight about how to control an LED with electronic components but lets do some gimmicks with software for automatic control of the LED. You just have to upload the code that is available in this section. The code written initially switches ON the LED, after a delay of 3sec it switches it OFF. Let's start using the LinkIt board."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Things you need")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Break board x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resistors 330\u03a9,1k\u03a9 x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"5mm LED x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transistor\uff082N3904) x 1"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Schematic")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_1.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connection")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_2.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code")),(0,r.kt)("p",null,"Please click on the button below to download the code for the kit:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/Code_sidekick_linkit.png",alt:null}))),(0,r.kt)("p",null,"You can unzip the file to the ",(0,r.kt)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,r.kt)("p",null,"To access the demo code open:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L2_Control_LED")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const int pinLED = 3;                      // LED connect to D13\n\nvoid setup()\n{\n    pinMode(pinLED, OUTPUT);                // set direction of D13-OUTPUT\n}\n\nvoid loop()\n{\n    digitalWrite(pinLED, HIGH);             // LED on\n    delay(3000);\n    digitalWrite(pinLED, LOW);              // LED off\n    delay(100);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Trouble in Uploading the code\uff1f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'In this case, the possible problem should be due to wrong selection of the transfer port. You should probably modify it into "Tools',">"," Serial port",">",'".'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unable to Stop the process\uff1f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This occurs when your code is running in an infinite loop so in order to terminate the process  disconnect the power supply from the board.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_2_3.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Making it better")),(0,r.kt)("p",null,"In the previous section we used a capacitor to grow the brightness of the LED slowly and fade its luminosity slowly. Lets do the same thing without the capacitor but by purely changing the code."),(0,r.kt)("p",null,"To open the demo code\uff1a"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L2_Breath_LED")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"More ideas")),(0,r.kt)("p",null,"How do you change the frequency of the LED by modifying the code?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reference")),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);