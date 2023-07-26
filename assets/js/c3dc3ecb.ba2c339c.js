"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88557],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:e},d),{},{components:a})):n.createElement(h,o({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31334:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={description:"Grove - Magnetic Switch",title:"Grove - Magnetic Switch",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Magnetic_Switch",last_update:{date:"2/22/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Magnetic_Switch",id:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Magnetic_Switch",title:"Grove - Magnetic Switch",description:"Grove - Magnetic Switch",source:"@site/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Magnetic_Switch.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Switch&Button",slug:"/Grove-Magnetic_Switch",permalink:"/Grove-Magnetic_Switch",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Magnetic_Switch.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676995200,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{description:"Grove - Magnetic Switch",title:"Grove - Magnetic Switch",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Magnetic_Switch",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Thumb Joystick",permalink:"/Grove-Thumb_Joystick"},next:{title:"Grove - Joint v2.0",permalink:"/Grove-Joint_v2.0"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Demonstration",id:"demonstration",level:4},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function c(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d.jpg",alt:null})),(0,r.kt)("p",null,"This is a Grove interface compatible Magnetic switch module. It is based on encapsulated dry reed switch CT10. CT10 is single-pole, single throw (SPST) type, having normally open ruthenium contacts. The sensor is a double-ended type and may be actuated with an electromagnet, a permanent magnet or a combination of both. The magnetic switch is a wonderful tool for designers who would like to turn a circuit on and off based on proximity."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Grove compatible interface"),(0,r.kt)("li",{parentName:"ul"},"2.0cm x 2.0cm Grove module"),(0,r.kt)("li",{parentName:"ul"},"Minimum external parts"),(0,r.kt)("li",{parentName:"ul"},"10W rating"),(0,r.kt)("li",{parentName:"ul"},"Rugged encapsulation")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,r.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proximity Sensor"),(0,r.kt)("li",{parentName:"ul"},"Security Alarm Sensor"),(0,r.kt)("li",{parentName:"ul"},"Level Sensor"),(0,r.kt)("li",{parentName:"ul"},"Flow Sensor"),(0,r.kt)("li",{parentName:"ul"},"Pulse Counter")),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("table",{border:"1"},(0,r.kt)("tr",null,(0,r.kt)("th",{scope:"col"},"Items"),(0,r.kt)("th",{scope:"col"},"Min"),(0,r.kt)("th",{scope:"col"},"Norm"),(0,r.kt)("th",{scope:"col"},"Max"),(0,r.kt)("th",{scope:"col"},"Unit")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",null,"Working Voltage"),(0,r.kt)("td",null,"3.3"),(0,r.kt)("td",null,"5.0"),(0,r.kt)("td",null,"5.25"),(0,r.kt)("td",null,"V")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",null,"Switched Power"),(0,r.kt)("td",{colspan:"3"},"10"),(0,r.kt)("td",null,"W")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",null,"Switched Voltage AC,RMS value(max)"),(0,r.kt)("td",{colspan:"3"},"< 140"),(0,r.kt)("td",null,"V")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",null,"Switched Current DC"),(0,r.kt)("td",{colspan:"3"},"< 500"),(0,r.kt)("td",null,"mA")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",null,"Carry Current DC"),(0,r.kt)("td",{colspan:"3"},"< 0.5"),(0,r.kt)("td",null,"A")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",null,"Contact Resistance"),(0,r.kt)("td",{colspan:"3"},"<200"),(0,r.kt)("td",null,"m\u03a9")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",null,"Insulation Resistance"),(0,r.kt)("td",{colspan:"3"},">10",(0,r.kt)("sup",null,"6")),(0,r.kt)("td",null,"M\u03a9")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",null,"Operating Temperature"),(0,r.kt)("td",null,"-40"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"125"),(0,r.kt)("td",null,"\u2103")),(0,r.kt)("tr",{align:"center"},(0,r.kt)("td",null,"Operate Range"),(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"40"),(0,r.kt)("td",null,"AT"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we firmly recommend you to see ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,r.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.kt)("h4",{id:"demonstration"},"Demonstration"),(0,r.kt)("p",null,"The SIG pin of the module output LOW normally. When a magnet approaches the switch, the magnetic switch close and the SIG pin output HIGH."),(0,r.kt)("h4",{id:"hardware"},"Hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Magnetic Switch"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html"},"Get One Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove - Magnetic Switch to port ",(0,r.kt)("strong",{parentName:"li"},"D2")," of Grove-Base Shield."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_ardu.jpg",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove-Magnetic-Switch to Seeeduino as below.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove-Magnetic_Switch"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5V/3.3V"),(0,r.kt)("td",{parentName:"tr",align:null},"Red")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Black")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC"),(0,r.kt)("td",{parentName:"tr",align:null},"White")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D2"),(0,r.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"/*******************************************************************************/\n\n/*macro definitions of magnetic pin and LED pin*/\n#define MAGNECTIC_SWITCH 2\n#define LED 13//the on board LED of the Arduino or Seeeduino\n\nvoid setup()\n{\n    pinsInit();\n}\n\nvoid loop() \n{\n    if(isNearMagnet())//if the magnetic switch is near the magnet?\n    {\n        turnOnLED();\n    }\n    else\n    {\n        turnOffLED();\n    }\n}\nvoid pinsInit()\n{\n    pinMode(MAGNECTIC_SWITCH, INPUT);\n    pinMode(LED,OUTPUT);\n}\n\n/*If the magnetic switch is near the magnet, it will return ture, */\n/*otherwise it will return false                                */\nboolean isNearMagnet()\n{\n    int sensorValue = digitalRead(MAGNECTIC_SWITCH);\n    if(sensorValue == HIGH)//if the sensor value is HIGH?\n    {\n        return true;//yes,return ture\n    }\n    else\n    {\n        return false;//no,return false\n    }\n}\nvoid turnOnLED()\n{\n    digitalWrite(LED,HIGH);\n}\nvoid turnOffLED()\n{\n    digitalWrite(LED,LOW);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2."),"  Then the LED turns on when there is Magnetic approaches the switch. Have a try!")),(0,r.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,r.kt)("h4",{id:"hardware-1"},"Hardware"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Magnetic Switch to port D2 of a Base Shield."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,r.kt)("h4",{id:"software-1"},"Software"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,r.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this is your first time using Codecraft, see also ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/"},"Guide for Codecraft using Arduino"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/cc_Magnetic_Switch.png",alt:"cc"})),(0,r.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,r.kt)("admonition",{title:"success",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When the code finishes uploaded, move the magnet close to the magnetic switch and you will see the LED on the Arduino 13 pin turns on.")),(0,r.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,r.kt)("h4",{id:"hardware-2"},"Hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Magnetic Switch"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/45d_small.jpg",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html"},"Get One Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Magnetic-Switch ranger to ",(0,r.kt)("strong",{parentName:"li"},"D2")," port of GrovePi_Plus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/with_rpi.jpg",alt:null})),(0,r.kt)("h4",{id:"software-2"},"Software"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using ",(0,r.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,r.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to the demos' directory:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," To see the code (this demo has the same usage with tilt switch)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import time\nimport grovepi\n\n# Connect the Grove Tilt Switch to digital port D2\n# SIG,NC,VCC,GND\ntilt_switch = 2\n\ngrovepi.pinMode(tilt_switch,"INPUT")\n\nwhile True:\n    try:\n        print grovepi.digitalRead(tilt_switch)\n        time.sleep(.5)\n\n    except IOError:\n        print "Error"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Run the demo.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo python grovepi_tilt_switch.py\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5.")," Result")),(0,r.kt)("p",null,"Put a magnet upon the sensor, the SIG pin will output HIGH."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/img/Grovepi_tilt_Switch_00.png",alt:null})),(0,r.kt)("h1",{id:"grove-magnetic-switch-v09"},"Grove-Magnetic Switch v0.9"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h1",{id:"grove-magnetic-switch-v13"},"Grove-Magnetic Switch v1.3"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Eagle]"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Magnetic_Switch.zip"},"Grove-Magnetic Switch v0.9 Schematic"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Eagle]"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_Eagle_File.zip"},"Grove-Magnetic Switch v1.3 Schematic"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove-Magnetic_Switch_v1.3_PDF_File.pdf"},"Grove-Magnetic Switch v1.3 PDF File"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Datasheet]"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/CT10.pdf"},"CT10 Datasheet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Codecraft]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Magnetic_Switch/res/Grove_Magnetic_Switch_CDC_File.zip"},"CDC File")))),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);