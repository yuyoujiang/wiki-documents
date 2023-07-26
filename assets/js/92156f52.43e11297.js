"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,h=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={description:"Project Eight - Thermostat",title:"Project Eight - Thermostat",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Eight-Thermostat",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat",title:"Project Eight - Thermostat",description:"Project Eight - Thermostat",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_Eight-Thermostat",permalink:"/Project_Eight-Thermostat",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676390400,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"Project Eight - Thermostat",title:"Project Eight - Thermostat",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Eight-Thermostat",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project Seven - Temperature",permalink:"/Project_Seven-Temperature"},next:{title:"MicroPython for Arduino-supported Boards",permalink:"/Compiling_MicroPython_for_embedded_devices"}},c={},u=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The final project in our series may seem complex, but is quite simple. We use the potentiometer to allow user input of a temperature value, and using the temperature sensor \u2013 if the ambient temperature rises above the value set via the potentiometer the relay is activated."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect the Temperature Sensor to the Analog A0/A1 input jack, like it was in Project 7.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Grove produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect the Potentiometer to the Analog A4/A5 input jack.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Potentiometer produces an analog voltage on its D1 output, which is connected to Arduino A4 analog input on the A4/A5 input jack.\nConnect the Relay to the D2/D3 input jack.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Arduino's D2 pin sends a signal to the Relay on the D1 connector. The Relay's red light indicates whether the relay is on or off, and the relay makes a clicking sound when it switches."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Eight-Thermostat/img/Conn-eight.jpg",alt:null})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},"// Project Eight - Thermostat\n//\n\nint a,c,d;\nint z=3975;\nint relaypin=2;\nfloat b, q, resistance, temperature;\n\nvoid setup()\n{\n  pinMode(relaypin, OUTPUT);\n}\n\nvoid loop()\n{\n  a=analogRead(4);\n  b=0.0488*a;\n  c=int(b);\n  q=analogRead(0);\n  resistance=(float)(1023-q)*10000/q;\n  temperature=1/(log(resistance/10000)/z+1/298.15)-273.15;\n  d=int(temperature);\n  if (d&gt;=c)\n  {\n    digitalWrite(relaypin, HIGH);\n    delay(500);\n  }\n  if (d&lt;c)\n  {\n    digitalWrite(relaypin, LOW);\n    delay(500);\n  }\n}\n")),(0,n.kt)("p",null,"Try turning the potentiometer to the right and left and see if the relay turns on or off."),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}l.isMDXComponent=!0}}]);