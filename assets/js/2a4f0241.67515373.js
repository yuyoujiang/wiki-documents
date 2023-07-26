"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33227],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=i.createContext({}),c=function(t){var e=i.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},d=function(t){var e=c(t.components);return i.createElement(a.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,a=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),u=c(n),p=o,g=u["".concat(a,".").concat(p)]||u[p]||k[p]||l;return n?i.createElement(g,s(s({ref:e},d),{},{components:n})):i.createElement(g,s({ref:e},d))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,s=new Array(l);s[0]=p;var r={};for(var a in e)hasOwnProperty.call(e,a)&&(r[a]=e[a]);r.originalType=t,r[u]="string"==typeof t?t:o,s[1]=r;for(var c=2;c<l;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44522:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const l={description:"This page is a collection of all TinyML content.",title:"TinyML",keywords:["tinyml"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/tinyml_topic",last_update:{date:"07/21/2023",author:"MengDu"}},s="Tiny Machine Learning(TinyML)",r={unversionedId:"TinyML_Topic",id:"TinyML_Topic",title:"TinyML",description:"This page is a collection of all TinyML content.",source:"@site/docs/TinyML_Topic.md",sourceDirName:".",slug:"/tinyml_topic",permalink:"/tinyml_topic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/TinyML_Topic.md",tags:[],version:"current",lastUpdatedBy:"MengDu",lastUpdatedAt:1689868800,formattedLastUpdatedAt:"Jul 20, 2023",frontMatter:{description:"This page is a collection of all TinyML content.",title:"TinyML",keywords:["tinyml"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/tinyml_topic",last_update:{date:"07/21/2023",author:"MengDu"}},sidebar:"ProductSidebar",previous:{title:"Weekly Wiki",permalink:"/weekly_wiki"},next:{title:"Sensing and Network",permalink:"/Sensor_Network"}},a={},c=[{value:"What is TinyML?",id:"what-is-tinyml",level:2},{value:"Recommended Boards Supporting TinyML",id:"recommended-boards-supporting-tinyml",level:2},{value:"Seeed Studio XIAO ESP32S3 Sense",id:"seeed-studio-xiao-esp32s3-sense",level:3},{value:"Seeed Studio XIAO nRF52840 Sense",id:"seeed-studio-xiao-nrf52840-sense",level:3},{value:"Wio Terminal",id:"wio-terminal",level:3},{value:"Grove Vision AI",id:"grove-vision-ai",level:3},{value:"SenseCAP K1100",id:"sensecap-k1100",level:3},{value:"SenseCAP A1101",id:"sensecap-a1101",level:3},{value:"Getting Started is Easy",id:"getting-started-is-easy",level:2},{value:"TinyML on XIAO",id:"tinyml-on-xiao",level:3},{value:"TinyML on Grove Vision AI",id:"tinyml-on-grove-vision-ai",level:3},{value:"TinyML on Wio Terminal",id:"tinyml-on-wio-terminal",level:3},{value:"TinyML on SenseCAP A1101",id:"tinyml-on-sensecap-a1101",level:3},{value:"TinyML Appication",id:"tinyml-appication",level:2},{value:"Contribute Your TinyML Project to Us",id:"contribute-your-tinyml-project-to-us",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:c};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tiny-machine-learningtinyml"},"Tiny Machine Learning(TinyML)"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/main.jpg",style:{width:1e3,height:"auto"}})),(0,o.kt)("br",null),(0,o.kt)("p",null,"TinyML is a field of study in Machine Learning and Embedded Systems that explores machine learning on small, low-powered microcontrollers, enabling secure, low-latency, low-power and low-bandwidth machine learning inferencing on edge devices. If you're excited about TinyML but not sure where to start, our one-stop guide is perfect for you. This guide provides an overview of what TinyML is, the opportunities it offers, and step-by-step instructions on how to get started. Join this exciting field and start your TinyML journey today!"),(0,o.kt)("h2",{id:"what-is-tinyml"},"What is TinyML?"),(0,o.kt)("p",null,"Tiny Machine Learning (TinyML) is a field of machine learning that focuses on the development and deployment of ML models on low power, low-footprint microcontroller devices like an Arduino, for example."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://www.seeedstudio.com/blog/wp-content/uploads/2021/06/3C15E726-E779-4613-9A9A-5E641B922931-2048x1195.png",style:{width:800,height:"auto"}})),(0,o.kt)("p",null,"Machine learning is a field of computer systems that aims to develop self-improving algorithms and statistical models. This is done with massive amounts of data, which a model analyses and extracts patterns from in order to learn and improve on a given task. This seemingly simple paradigm has led to groundbreaking advancements in complex tasks like forecasting, anomaly detection, and computer vision!"),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/blog/2021/06/14/everything-about-tinyml-basics-courses-projects-more/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))),(0,o.kt)("h2",{id:"recommended-boards-supporting-tinyml"},"Recommended Boards Supporting TinyML"),(0,o.kt)("h3",{id:"seeed-studio-xiao-esp32s3-sense"},"Seeed Studio XIAO ESP32S3 Sense"),(0,o.kt)("div",{class:"all_container"},(0,o.kt)("div",{class:"xiao_topic_page_vertical"},(0,o.kt)("font",{size:"2"},"Ultra-small ESP32-S3 development board with OV2640 camera, a risging star in the fields of AIoT"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"HIGH-PERFORMANCE")),(0,o.kt)("font",{size:"2"},"240MHz Xtensa 32-bit LX7 dual-core processor"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"MEMORY")),(0,o.kt)("font",{size:"2"},"8MB PSRAM + 8MB FLASH"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"MULTI-FUNCTIONAL")),(0,o.kt)("font",{size:"2"},"Microphone/SD card slot/Detachable OV2640"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"WIRELESS")),(0,o.kt)("font",{size:"2"},"2.4GHz WiFi and BLE 5"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"TINYML-SUPPORTED")),(0,o.kt)("font",{size:"2"},"Image Processing/Speech Recognition")),(0,o.kt)("div",{class:"xiao_topic_page_pic"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/xiaos3sense.jpg",style:{width:800,height:"auto"}}))),(0,o.kt)("br",null)," ",(0,o.kt)("br",null)," ",(0,o.kt)("br",null),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\uddb1\ufe0f Kown More "))))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"seeed-studio-xiao-nrf52840-sense"},"Seeed Studio XIAO nRF52840 Sense"),(0,o.kt)("div",{class:"all_container"},(0,o.kt)("div",{class:"xiao_topic_page_pic"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/xiao_topicpage/nrf52840sense.jpg",style:{width:800,height:"auto"}})),(0,o.kt)("div",{class:"xiao_topic_page_vertical"},(0,o.kt)("font",{size:"2"},"XIAO nRF52840 Sense features an onboard microphone and 3-axis IMU, suitable for the TinyML AI+IOT project"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"HIGH-PERFORMANCE")),(0,o.kt)("font",{size:"2"},"ARM\xae Cortex\u2122-M4 32-bit processor with FPU operating at 64 MHz"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"Memory")),(0,o.kt)("font",{size:"2"},"256 KB RAM + 2MB FLASH"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"MULTI-FUNCTIONAL")),(0,o.kt)("font",{size:"2"},"Onboard microphone and 3-axis IMU"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"WIRELESS")),(0,o.kt)("font",{size:"2"},"Bluetooth 5.0, NFC with onboard antenna"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"TINYML-SUPPORTED")),(0,o.kt)("font",{size:"2"},"Gesture/Voice recognition"))),(0,o.kt)("br",null),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\uddb1\ufe0f Kown More "))))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"wio-terminal"},"Wio Terminal"),(0,o.kt)("div",{class:"all_container"},(0,o.kt)("div",{class:"xiao_topic_page_vertical"},(0,o.kt)("font",{size:"2"},"A\xa0complete\xa0AI\xa0platform\xa0to\xa0get\xa0started\xa0with\xa0TinyML\xa0and\xa0IoT\xa0-\xa0Built\xa0around\xa0the\xa0ATSAMD51P19\xa0and\xa0ARM\xa0Cortex-M4F\xa0at\xa0120MHz\xa0for\xa0high\xa0compatibility\xa0with\xa0various\xa0ML\xa0frameworks\xa0for\xa0microcontrollers"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"HIGH-PERFORMANCE")),(0,o.kt)("font",{size:"2"},"ATSAMD51\xa0Core\xa0with\xa0Realtek\xa0RTL8720DN\xa0BLE\xa05.0\xa0&\xa0Wi-Fi\xa02.4G/5G\xa0Dev\xa0Board"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"Memory")),(0,o.kt)("font",{size:"2"},"4 MB External Flash, 192 KB RAM"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"MULTI-FUNCTIONAL")),(0,o.kt)("font",{size:"2"},"Complete\xa0system\xa0equipped\xa0with\xa0Screen\xa0+\xa0Development\xa0Board\xa0+\xa0Input/Output\xa0Interface\xa0+\xa0Enclosure"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"WIRELESS")),(0,o.kt)("font",{size:"2"},"Reliable\xa0Wireless\xa0Connectivity, Equipped\xa0with\xa0Realtek\xa0RTL8720DN,\xa0dual-band\xa02.4Ghz\xa0/\xa05Ghz\xa0Wi-Fi"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"TINYML-SUPPORTED")),(0,o.kt)("font",{size:"2"},"An Azure certified, Edge Impulse supported device to quickly get started with IoT and TinyML")),(0,o.kt)("div",{class:"xiao_topic_page_pic"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/wio.png",style:{width:500,height:"auto"}}))),(0,o.kt)("br",null),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\uddb1\ufe0f Kown More "))))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"grove-vision-ai"},"Grove Vision AI"),(0,o.kt)("div",{class:"all_container"},(0,o.kt)("div",{class:"xiao_topic_page_pic"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/vision.png",style:{width:700,height:"auto"}})),(0,o.kt)("div",{class:"xiao_topic_page_vertical"},(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("font",{size:"2"},"A pre-trained embedded AI Vision Sensor\xa0with\xa0Himax\xa0HX6537-A\xa0processor,\xa0OV2640\xa0camera\xa0sensor, a\xa0digital\xa0microphone\xa0and\xa0a\xa06-axis\xa0Inertial\xa0Measurement\xa0Unit\xa0(IMU),\xa0support\xa0YOLO\xa0v5\xa0and\xa0Edge\xa0Impulse"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"MULTI-FUNCTIONAL")),(0,o.kt)("font",{size:"2"},"Equipped\xa0with\xa0OV2640\xa0sensor\xa0for\xa0image processing",(0,o.kt)("br",null),"A\xa0digital\xa0microphone\xa0& a\xa06-axis\xa0Inertial\xa0Measurement\xa0Unit\xa0(IMU)"),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"TINYML-SUPPORTED")),(0,o.kt)("font",{size:"2"},"Officially\xa0supported\xa0by\xa0Edge\xa0Impulse, with\xa03\xa0customized\xa0models\xa0to\xa0realize\xa0mainstream\xa0ML\xa0functions\xa0like\xa0object\xa0detection"),(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("br",null),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\uddb1\ufe0f Kown More "))))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"sensecap-k1100"},"SenseCAP K1100"),(0,o.kt)("div",{class:"all_container"},(0,o.kt)("div",{class:"xiao_topic_page_vertical"},(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("font",{size:"2"},"The\xa0Sensor\xa0Prototype\xa0Kit\xa0to\xa0Quickly\xa0Get\xa0Started\xa0With\xa0LoRa\xae\xa0and\xa0AI",(0,o.kt)("br",null),(0,o.kt)("br",null),"Deploy in 10 minutes, build an AIoT project through 3 steps",(0,o.kt)("br",null),(0,o.kt)("br",null),"Combinition of ML and LoRa\xae Technologies",(0,o.kt)("br",null),(0,o.kt)("br",null),"Compatible with 400+ Grove sensors to support extensive applications",(0,o.kt)("br",null),(0,o.kt)("br",null),"Board integration with mainstream platforms for cloud support",(0,o.kt)("br",null),(0,o.kt)("br",null),"Upgradable to SenseCAP series industrial sensors"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("div",{class:"xiao_topic_page_pic"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/k1100.png",style:{width:800,height:"auto"}}))),(0,o.kt)("br",null),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\uddb1\ufe0f Kown More "))))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"sensecap-a1101"},"SenseCAP A1101"),(0,o.kt)("div",{class:"all_container"},(0,o.kt)("div",{class:"xiao_topic_page_pic"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/a1101.png",style:{width:800,height:"auto"}})),(0,o.kt)("div",{class:"xiao_topic_page_vertical"},(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("font",{size:"2"},"TinyML Edge AI enabled smart image sensor, supporting a variety of AI models such as image recognition, people counting, target detection, meter recoignition etc."),(0,o.kt)("br",null),(0,o.kt)("font",{size:"3"},(0,o.kt)("strong",null,"TINYML-SUPPORTED")),(0,o.kt)("font",{size:"2"},"Officially supported by Edge Impulse, quickly \xa0get\xa0started\xa0training\xa0and\xa0deploying\xa0your\xa0ML\xa0models!"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))),(0,o.kt)("br",null),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," \ud83d\uddb1\ufe0f Kown More "))))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"getting-started-is-easy"},"Getting Started is Easy"),(0,o.kt)("p",null,"Let's take a look at the kinds of interesting things that TinyML can achieve!"),(0,o.kt)("h3",{id:"tinyml-on-xiao"},"TinyML on XIAO"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Edge Impulse on XIAO RP2040 & XIAO SAMD21"),(0,o.kt)("th",null,"Edge Impulse on XIAO nRF52840 Sense"),(0,o.kt)("th",null,"TensorFlow Lite on XIAO nRF52840 Sense")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png",style:{width:300,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png",style:{width:200,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif",style:{width:300,height:"auto"}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"This project covers training and deploying model to Seeed Studio XIAO SAMD21 and Seeed Studio XIAO RP2040 development boards.")),(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"Welcome to this quickstart wiki on using Edge Impulse with Seeed Studio XIAO nRF52840 Sense! In this guide, we will explore how to use the onboard IMU sensor to detect human motion and classify different actions.")),(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"This wiki will demonstrate how you can use TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense and detect gestures such as punching and flexing using the on-board accelerometer."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO-TinyML/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/XIAOEI/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/XIAO-BLE-Sense-TFLite-Getting-Started/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,o.kt)("h3",{id:"tinyml-on-grove-vision-ai"},"TinyML on Grove Vision AI"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Edge Impulse on Grove Vision AI")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/9.png",style:{width:800,height:400}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"Grove - Vision AI Module is a thumb-sized board based on Himax HX6537-A processor which is equipped with a 2-Megapixel OV2640 camera, microphone, 3-axis accelerometer and 3-axis gyroscope. It offers storage with 32 MB SPI flash, comes pre-installed with ML algorithms for face recognition and people detection and supports customized models as well. It is compatible with the XIAO ecosystem and Arduino, all of which makes it perfect for getting started with AI-powered camera projects! It is fully supported by Edge Impulse which means you will be able to sample raw data from the camera, build models, and deploy trained machine learning models to the module directly from the studio without any programming required."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/edge-impulse-vision-ai/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,o.kt)("h3",{id:"tinyml-on-wio-terminal"},"TinyML on Wio Terminal"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Edge Impulse on Wio Terminal"),(0,o.kt)("th",null,"TensorFlow Lite on Wio Terminal")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif1.gif",style:{width:300,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg",style:{width:300,height:"auto"}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"Now, Wio Terminal is officially supported by the Edge Impulse. Let's see how to get Wio Terminal started with the Machine learning at the very edge!")),(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"This article introduces how to install the official Arduino Tensorflow Lite library into your Wio Terminal, allowing you to test out some Machine Learning models using Wio Terminal."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-1/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Wio-Terminal-TinyML-TFLM-1/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,o.kt)("h3",{id:"tinyml-on-sensecap-a1101"},"TinyML on SenseCAP A1101"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Roboflow/ YOLOv5/ TensorFlow Lite on SenseCAP A1101")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png",style:{width:800,height:400}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"In this wiki, we will teach you how to train your own AI model for your specific application and then deploy it easily to the SenseCAP A1101 - LoRaWAN Vision AI Sensor. Let's get started!"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,o.kt)("h2",{id:"tinyml-appication"},"TinyML Appication"),(0,o.kt)("div",{class:"table-center"},(0,o.kt)("table",{align:"center"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"TinyML Made Easy: Gesture Recognition"),(0,o.kt)("th",null,"Motion Recognition on XIAO RP2040"),(0,o.kt)("th",null,"Speech Recognition on XIAO nRF52840 Sense")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://hackster.imgix.net/uploads/attachments/1347750/_wTExmhrtW6.blob?auto=compress%2Cformat&w=900&h=675&fit=min",style:{width:300,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/EI/09.jpg",style:{width:300,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png",style:{width:300,height:"auto"}})))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"Seeed Wio Terminal programed using Codecraft/Edge Impulse is a fantastic tool for beginners to start on tinyML (Embedded Machine Learning).")),(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"In this wiki, we will show you how to utilize the accelerometer on Seeed Studio XIAO RP2040 combined with Edge Impulse to enable motion recognition. The codes we present here are supported by latest version of XIAO RP2040 Boards.")),(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"This wiki will demonstrate how you can use TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense and perform speech recognition using the on-board microphone."))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.hackster.io/mjrobot/tinyml-made-easy-gesture-recognition-ce13a5"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/XIAO-RP2040-EI/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/XIAO-BLE-Sense-TFLite-Mic/"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"How I Built a Connected Artificial Nose"),(0,o.kt)("th",null,"Liquid Classification with TinyML"),(0,o.kt)("th",null,"TinyML Made Easy: Sound Classification (KWS)")),(0,o.kt)("tr",{class:"form_without_frame"},(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/a/r/artificial_nose_kit_1_.png",style:{width:300,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://84771188-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FEJB5OaeYjM5VSFEKLEFz%2Fuploads%2Fgit-blob-147331f2c9a59322c12b351153bff9fc50eb2f47%2FTongue_inferencing.gif?alt=media",style:{width:300,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://hackster.imgix.net/uploads/attachments/1485670/_U7e9Y2ayIw.blob?auto=compress%2Cformat&w=900&h=675&fit=min",style:{width:300,height:"auto"}})))),(0,o.kt)("tr",{class:"form_without_frame"},(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"Over the past few months, I have worked on a pretty cool project that some of you might have already heard about as it sort of went viral. I built a DIY, general-purpose, artificial nose that can smell virtually anything you teach it to recognize!")),(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"Use water quality sensors to measure turbidity and perform classification on a variety of liquids with a machine learning model running on a Seeed Studio Wio Terminal.")),(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"We are continuing our exploration of Machine Learning on a giant tiny device, the Seeed XIAO BLE Sense. And now, classifying sound waves."))),(0,o.kt)("tr",{class:"form_without_frame"},(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://blog.benjamin-cabe.com/2021/08/03/how-i-built-a-connected-artificial-nose"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://docs.edgeimpulse.com/experts/prototype-and-concept-projects/liquid-classification-tinyml"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.hackster.io/mjrobot/tinyml-made-easy-sound-classification-kws-2fb3ab"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))),(0,o.kt)("tr",{class:"form_without_frame"},(0,o.kt)("th",null,"TinyML Made Easy: Image Classification"),(0,o.kt)("th",null,"TinyML Made Easy: Anomaly Detection & Motion Classification")),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://hackster.imgix.net/uploads/attachments/1587471/_nOXij20mq1.blob?auto=compress%2Cformat&w=900&h=675&fit=min",style:{width:300,height:"auto"}}))),(0,o.kt)("td",null,(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://hackster.imgix.net/uploads/attachments/1472235/_d2Lefd6Xrq.blob?auto=compress%2Cformat&w=900&h=675&fit=min",style:{width:300,height:"auto"}}))),(0,o.kt)("tr",{class:"form_without_frame"},(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"Exploring Machine Learning on the tremendous new tiny device of the Seeed XIAO family, the ESP32S3 Sense.")),(0,o.kt)("td",null,(0,o.kt)("font",{size:"1"},"Exploring Machine Learning on a giant tiny device, the Seeed XIAO BLE. Sense."))),(0,o.kt)("tr",{class:"form_without_frame"},(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.hackster.io/mjrobot/tinyml-made-easy-image-classification-cb42ae"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More")))))),(0,o.kt)("td",null,(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.hackster.io/mjrobot/tinyml-made-easy-anomaly-detection-motion-classification-958fd2"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,o.kt)("h2",{id:"contribute-your-tinyml-project-to-us"},"Contribute Your TinyML Project to Us"),(0,o.kt)("p",null,"Join force to build a public resource pool for TinyML by submitting your projects or explorations! By sharing your work, you can contribute to the community's understanding of the challenges and opportunities in the field of TinyML. Whether you're working on object detection, speech recognition, or any other TinyML application, your insights and experiences can help others learn and innovate! "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/sharecase.jpg",style:{width:1e3,height:"auto"}})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://docs.google.com/forms/d/1k4aCFeehVkTLucVVHIzrJAJL_prbZqJ2h5YaRmvbdQQ/edit"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"},"Share Your Project"))))),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);