"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55677],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),l=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(u.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=l(n),h=r,k=c["".concat(u,".").concat(h)]||c[h]||d[h]||i;return n?o.createElement(k,a(a({ref:e},p),{},{components:n})):o.createElement(k,a({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[c]="string"==typeof t?t:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55773:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={description:"LinkIt ONE Tutorial - Push Button",title:"LinkIt ONE Tutorial - Push Button",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Push_Button",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,s={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Push_Button",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Push_Button",title:"LinkIt ONE Tutorial - Push Button",description:"LinkIt ONE Tutorial - Push Button",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Push_Button.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-Push_Button",permalink:"/LinkIt_ONE_Tutorial-Push_Button",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Push_Button.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"LinkIt ONE Tutorial - Push Button",title:"LinkIt ONE Tutorial - Push Button",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Push_Button",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Mini Servo",permalink:"/LinkIt-ONE-Tutorial---Mini-Servo"},next:{title:"LinkIt ONE Tutorial - SMS control the LED",permalink:"/LinkIt_ONE_Tutorial-SMS_control_the_LED"}},u={},l=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:l};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What We\u2019re Doing")),(0,r.kt)("p",null,"We now got an insight of how a software and hardware works from the previous chapter. In this chapter we will learn how to integrate both software and hardware for the control of the LED. Make breadboard connections as shown in the Fig 3.2 and upload the code. Now this circuit operates as a two way switch when you press the left side push button switch the LED glows and when the right side push button is pressed the LED is switched OFF."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Things you need")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Break board x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resistors 330\u03a9,1k\u03a9 x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resistor 10k\u03a9 x 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"5mm LED x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transistor(2N3904) x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Push Button switches x 2"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Schematic")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_1.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connection")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_2.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code")),(0,r.kt)("p",null,"Please click on the button below to download the code for the kit:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/Code_sidekick_linkit.png",alt:null}))),(0,r.kt)("p",null,"You can unzip the file to the ",(0,r.kt)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,r.kt)("p",null,"To access the demo code open:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L3_Control_LED_Button")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const int pinLED = 3;                      // LED connect to D13\n\nconst int btnOn  = 5;                       // button on\nconst int btnOff = 6;                       // button off\n\nvoid setup()\n{\n    pinMode(pinLED, OUTPUT);                // set direction of D13-OUTPUT\n    pinMode(btnOff, INPUT);                 // set direction of D2-INPUT\n    pinMode(btnOn, INPUT);\n}\n\nvoid loop()\n{\n    if(0 == digitalRead(btnOn))            // button on pressed\n    {\n        digitalWrite(pinLED, HIGH);\n    }\n\n    if(0 == digitalRead(btnOff))\n    {\n        digitalWrite(pinLED, LOW);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Making it better")),(0,r.kt)("p",null,"Keeping the same hardware connection upload the following code. The luminosity brightens when the left push button switch is pressed and fades when the right push button switch is pressed."),(0,r.kt)("p",null,"To access the demo code open:\uff1a"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L3_Brightness")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"More ideas")),(0,r.kt)("p",null,"How will you modify the code such that the blinking frequency of the LED changes?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reference")),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);