"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Grove - Speech Recognizer",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Speech_Recognizer/",slug:"/Grove-Speech_Recognizer",last_update:{date:"01/06/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Sound/Grove-Speech_Recognizer",id:"Sensor/Grove/Grove_Sensors/Sound/Grove-Speech_Recognizer",title:"Grove - Speech Recognizer",description:"enter image description here",source:"@site/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Speech_Recognizer.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Sound",slug:"/Grove-Speech_Recognizer",permalink:"/Grove-Speech_Recognizer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Speech_Recognizer.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641398400,formattedLastUpdatedAt:"Jan 5, 2022",frontMatter:{title:"Grove - Speech Recognizer",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Speech_Recognizer/",slug:"/Grove-Speech_Recognizer",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Loudness Sensor",permalink:"/Grove-Loudness_Sensor"},next:{title:"Grove - Sound Recorder",permalink:"/Grove-Sound_Recorder"}},p={},s=[{value:"Application Ideas",id:"application-ideas",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Command Return",id:"command-return",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion-1",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cover.jpg",alt:"enter image description here"})),(0,a.kt)("p",null,"Use voice to interact with things around you can always be one of the most interesting things of IoT application, we want to make something more different and cooler. Recently we just launched the voice control solution \u201cRespeaker\u201d on Kickstarter and it becomes the blockbuster. However not everybody needs a Respeaker to build voice control project, sometimes people only need a simple solution, here we would like to introduce the first generation of grove speech recognizer to realize your dream of smart home easily and fast."),(0,a.kt)("p",null,"Grove speech recognizer is a designed for voice control application such as smart home, smart toy, voice control robot, anything you would like to control through voice, it worth a try. The board includes a Nuvoton ISD9160, a microphone, 1 SPI flash, 1 grove connector,1 speaker connector and 1 led to reflect to your voice."),(0,a.kt)("p",null,"Nuvoton ISD9160 is (SoC) Chipcorder that based on Cortex\u2122-M0, it provides strong and economic solution for voice control applications. ISD9160 is not the only amazing thing in this grove. Let\u2019s look at the microphone. Remember the uncomfortable moment when you have to speak directly and closely to the voice recognizer device to make sure it can hear you? It won\u2019t happen this time! The microphone on grove-speech recognizer is Omni-directional, which means that whether a user speaks into the microphone from the front, back, left or right side, the microphone will record the signals all with equal gain."),(0,a.kt)("p",null,"This speech recognizer can recognize 22 pieces of commands including 'start', 'stop', 'Play music' and so on. Every time it recognizes a command, it will return a value and then the loudspeaker that connected to it will repeat the command. This value can be used to control other devices like motor, music player. We have tested it for hours to make sure it possesses a high recognition rate and a very low false trigger."),(0,a.kt)("p",null,"Here are some notes that you must know before using it:\nAwaken Word: Hicell (Please pronounce it as one word)\nWhen it recognizes the awaken word, LED turn red, then you can say the command word, if it recognize the command word, LED will turn blue."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"The firmware of the module was wrote by the third party vendor, it's not open source.\n"))),(0,a.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Internet of Things"),(0,a.kt)("li",{parentName:"ul"},"Smart House"),(0,a.kt)("li",{parentName:"ul"},"Human Machine Interface"),(0,a.kt)("li",{parentName:"ul"},"Lighting Control"),(0,a.kt)("li",{parentName:"ul"},"Sensor Hub"),(0,a.kt)("li",{parentName:"ul"},"Robot")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Local Voice Recognition"),(0,a.kt)("li",{parentName:"ul"},"Very low rate of false triggering"),(0,a.kt)("li",{parentName:"ul"},"Speaker connector(JST2.0, speaker is not include)"),(0,a.kt)("li",{parentName:"ul"},"Built-in microphone"),(0,a.kt)("li",{parentName:"ul"},"3.3/5V working voltage"),(0,a.kt)("li",{parentName:"ul"},"22 recognition entry"),(0,a.kt)("li",{parentName:"ul"},"Default Baudrate: 9600")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Platform Support")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Wio"),(0,a.kt)("th",{parentName:"tr",align:null},"BeagleBone"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null},"LinkIt"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg",alt:"enter image description here"}))))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typ"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Condition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3V"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3V"),(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"25 \u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Current"),(0,a.kt)("td",{parentName:"tr",align:null},"25mA"),(0,a.kt)("td",{parentName:"tr",align:null},"26.5mA"),(0,a.kt)("td",{parentName:"tr",align:null},"80mA@playing"),(0,a.kt)("td",{parentName:"tr",align:null},"VCC = 3.3V 25\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Current"),(0,a.kt)("td",{parentName:"tr",align:null},"25mA"),(0,a.kt)("td",{parentName:"tr",align:null},"26.5mA"),(0,a.kt)("td",{parentName:"tr",align:null},"130mA@playing"),(0,a.kt)("td",{parentName:"tr",align:null},"VCC = 5V 25\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"0\u2103"),(0,a.kt)("td",{parentName:"tr",align:null},"25\u2103"),(0,a.kt)("td",{parentName:"tr",align:null},"85\u2103"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Size"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"40*20mm"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Weigth"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"5g"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flash"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"2Mbytes"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Microphone Sensitivity"),(0,a.kt)("td",{parentName:"tr",align:null},"-43dB"),(0,a.kt)("td",{parentName:"tr",align:null},"-40dB"),(0,a.kt)("td",{parentName:"tr",align:null},"-37dB"),(0,a.kt)("td",{parentName:"tr",align:null},"VCC = 5V 25\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Microphone SNR"),(0,a.kt)("td",{parentName:"tr",align:null},"58dB"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Microphone Directivity"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Omni-directional"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Speaker Power"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"1W"),(0,a.kt)("td",{parentName:"tr",align:null},"VCC = 5V 25\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Processor core"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Cortex-M0"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Processor Frequency"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"32.768MHz"),(0,a.kt)("td",{parentName:"tr",align:null},"50MHz"),(0,a.kt)("td",{parentName:"tr",align:null},"VCC = 5V 25\u2103")))),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/hw.png",alt:"enter image description here"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Grove Connector"),(0,a.kt)("li",{parentName:"ol"},'Red Led - lights when "HIcell" is recognized'),(0,a.kt)("li",{parentName:"ol"},"Blue Led - lights when a command is recognized"),(0,a.kt)("li",{parentName:"ol"},"Speaker Connector - You can connect a speaker to get the voice return"),(0,a.kt)("li",{parentName:"ol"},"Microphone"),(0,a.kt)("li",{parentName:"ol"},"ISD9160CFI - controller")),(0,a.kt)("h2",{id:"command-return"},"Command Return"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Turn on the light"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Turn off the light"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Play music"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pause"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Next"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Previous"),(0,a.kt)("td",{parentName:"tr",align:null},"6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Up"),(0,a.kt)("td",{parentName:"tr",align:null},"7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Down"),(0,a.kt)("td",{parentName:"tr",align:null},"8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Turn on the TV"),(0,a.kt)("td",{parentName:"tr",align:null},"9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Turn off the TV"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Increase temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"11")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Decrease temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"12")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"What\u2019s the time"),(0,a.kt)("td",{parentName:"tr",align:null},"13")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Open the door"),(0,a.kt)("td",{parentName:"tr",align:null},"14")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Close the door"),(0,a.kt)("td",{parentName:"tr",align:null},"15")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Left"),(0,a.kt)("td",{parentName:"tr",align:null},"16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Right"),(0,a.kt)("td",{parentName:"tr",align:null},"17")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stop"),(0,a.kt)("td",{parentName:"tr",align:null},"18")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Start"),(0,a.kt)("td",{parentName:"tr",align:null},"19")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mode 1"),(0,a.kt)("td",{parentName:"tr",align:null},"20")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mode 2"),(0,a.kt)("td",{parentName:"tr",align:null},"21")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Go"),(0,a.kt)("td",{parentName:"tr",align:null},"22")))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Here we will show you how this Grove - Speech Recognizer works via a simple demo. First of all, you need to prepare the below stuffs:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Speech Recognizer"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Light-Sensor%28P%29-p-1253.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html"},"Get ONE Now"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Connection")),(0,a.kt)("p",null,"Thanks to the benefit of Grove series module, you don't need to make soldering or bread board, what you need to do is connect the modules to the right port of Base Shield. For this demo, we connect Grove - Speech Recognizer to D2."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/connect.jpeg",alt:"enter image description here"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software")),(0,a.kt)("p",null,"Copy the below code and paste to your Arduino IDE, and upload to your Seeeduino V4. After upload the code to an Arduino, let open the Serial monitor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#include <SoftwareSerial.h>\n\n#define SOFTSERIAL_RX_PIN  2\n#define SOFTSERIAL_TX_PIN  3\n\nSoftwareSerial softSerial(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);\n\nconst char *voiceBuffer[] =\n{\n    "Turn on the light",\n    "Turn off the light",\n    "Play music",\n    "Pause",\n    "Next",\n    "Previous",\n    "Up",\n    "Down",\n    "Turn on the TV",\n    "Turn off the TV",\n    "Increase temperature",\n    "Decrease temperature",\n    "What\'s the time",\n    "Open the door",\n    "Close the door",\n    "Left",\n    "Right",\n    "Stop",\n    "Start",\n    "Mode 1",\n    "Mode 2",\n    "Go",\n};\n\nvoid setup()\n{\n    Serial.begin(9600);\n    softSerial.begin(9600);\n    softSerial.listen();\n}\n\nvoid loop()\n{\n    char cmd;\n\n    if(softSerial.available())\n    {\n        cmd = softSerial.read();\n        Serial.println(voiceBuffer[cmd - 1]);\n    }\n}\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Awake the module")),(0,a.kt)("p",null,"The module will wake up when there's command ",(0,a.kt)("strong",{parentName:"p"},"Hicell"),", then the red led will on. Try again when the red led is not on."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"The red led will last 5 seconds. If the red led turn off before the command was recognized, you should **Hicell** again.\n"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Command")),(0,a.kt)("p",null,"After the module is awake, you can speak out the command. Such as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Turn on the TV"\n')),(0,a.kt)("p",null,"If the blue led is light(last about 1s), that means the command was recognized correctly. Take a look at your Serial monitor, the command was printed on it."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/monitor.png",alt:"enter image description here"})),(0,a.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Speech Recognizer to port D2 of a Base Shield."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,a.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cc_Speech_Recognizer.PNG",alt:"cc"})),(0,a.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"When the code finishes uploaded, say Hicell to wake it up, and you can say other command when the red LED goes on.\n"))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip"},"Schematics in Eagle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove%20-%20Speech%20Recognizer%20v1.0.pdf"},"Schematics in PDF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove_Speech_Recognizer_CDC_File.zip"},"Codecraft CDC File"))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))),(0,a.kt)("h2",{id:"tech-support--product-discussion-1"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);