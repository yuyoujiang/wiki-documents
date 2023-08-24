"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),u=i,k=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={description:"Connect_to_The_Things_Network",title:"Connect to The Things Network",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_TTN",last_update:{date:"8/15/2023",author:"Jessie"}},a=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services/Connect_to_The_Things_Network",id:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services/Connect_to_The_Things_Network",title:"Connect to The Things Network",description:"Connect_to_The_Things_Network",source:"@site/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services/Connect_to_The_Things_Network.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services",slug:"/SenseCAP_T1000_tracker_TTN",permalink:"/SenseCAP_T1000_tracker_TTN",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/TTN_Cloud_Services/Connect_to_The_Things_Network.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1692057600,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{description:"Connect_to_The_Things_Network",title:"Connect to The Things Network",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_TTN",last_update:{date:"8/15/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Get Started",permalink:"/Get_Started_with_SenseCAP_T1000_tracker"},next:{title:"Datacake Integrated(TTS)",permalink:"/SenseCAP_T1000_tracker_Datacake_TTS"}},c={},l=[{value:"Device Configuration",id:"device-configuration",level:2},{value:"The Things Network",id:"the-things-network",level:2},{value:"Step 1: Create an application",id:"step-1-create-an-application",level:3},{value:"Step 2: Register the Device",id:"step-2-register-the-device",level:3},{value:"Step 3: Check the data",id:"step-3-check-the-data",level:3},{value:"Resource",id:"resource",level:2}],p={toc:l};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Things Stack(TTS) is a LoRaWAN\xae Network Server stack which is the critical component for any LoRaWAN solution. In this chapter we will guide users to connect the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig"},"SenseCAP T100 Tracker")," to the Things Network."),(0,i.kt)("h2",{id:"device-configuration"},"Device Configuration"),(0,i.kt)("p",null,"Before connecting to the TTS, you need to configure the basic parameters of your device on SenseCAP Mate APP, check ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker"},"Get Started")," for more details."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the platform to TTN, and then copy the Device EUI/APP EUI/APP Key.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png",alt:"pir",width:300,height:"auto"})),(0,i.kt)("h2",{id:"the-things-network"},"The Things Network"),(0,i.kt)("p",null,"The Things Stack(TTS) is an enterprise grade LoRaWAN network server, built on an open-source core. The Things Stack allows you to build and manage LoRaWAN networks on your own hardware or in the cloud."),(0,i.kt)("p",null,"To begin, register an account on ",(0,i.kt)("a",{parentName:"p",href:"https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3"},"The Things Network"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h3",{id:"step-1-create-an-application"},"Step 1: Create an application"),(0,i.kt)("p",null,'Navigate to Applications page, click "+Create application".'),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("p",null,"Enter an Application ID, click Create Application to save your changes."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h3",{id:"step-2-register-the-device"},"Step 2: Register the Device"),(0,i.kt)("p",null,"We uploaded a template for users\uff0cyou only need to select the product model to quickly set up.\nSelect the input method to 'Select the end device in the LoRaWAN Device Repository'"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"End device brand"),":SenseCAP",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"Model"),":SenseCAP T1000 Tracker A/B")),(0,i.kt)("p",null,"Select the frequency plan according to your device."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_setup.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("p",null,"Paste the Device EUI/APP EUI/APP Key of your device, and then click 'Register end device'."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_new.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h3",{id:"step-3-check-the-data"},"Step 3: Check the data"),(0,i.kt)("p",null,"When the device tries to connect to the network, the breathing light will flash. If the device joins the network successfully, the breathing light will flash quickly, and there will be a light and cheerful melody."),(0,i.kt)("p",null,"Then you can check the data on the TTS console."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h2",{id:"resource"},"Resource"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/T1000/TTN"},"SenseCAP T1000 Tracker Decoder for TTN")))}h.isMDXComponent=!0}}]);