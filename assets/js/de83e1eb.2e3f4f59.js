"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84747],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>k});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(i),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return i?n.createElement(k,r(r({ref:t},u),{},{components:i})):n.createElement(k,r({ref:t},u))}));function k(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=i.length,r=new Array(o);r[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:l,r[1]=a;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4705:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=i(87462),l=(i(67294),i(3905));const o={title:"WT OTA for Blynk",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Blynk-wireless-OTA-functionality-to-Wio-Terminal/",slug:"/Blynk-wireless-OTA-functionality-to-Wio-Terminal",last_update:{date:"01/11/2022",author:"gunengyu"}},r="Use Blynk wireless OTA functionality to Wio Terminal",a={unversionedId:"Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/Blynk-wireless-OTA-functionality-to-Wio-Terminal",id:"Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/Blynk-wireless-OTA-functionality-to-Wio-Terminal",title:"WT OTA for Blynk",description:"In this wiki we will describe how to use Blynk wireless OTA functionality to Wio Terminal.",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/Blynk-wireless-OTA-functionality-to-Wio-Terminal.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal",slug:"/Blynk-wireless-OTA-functionality-to-Wio-Terminal",permalink:"/Blynk-wireless-OTA-functionality-to-Wio-Terminal",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/Blynk-wireless-OTA-functionality-to-Wio-Terminal.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641830400,formattedLastUpdatedAt:"Jan 10, 2022",frontMatter:{title:"WT OTA for Blynk",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Blynk-wireless-OTA-functionality-to-Wio-Terminal/",slug:"/Blynk-wireless-OTA-functionality-to-Wio-Terminal",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Connecting to Blynk",permalink:"/Wio-Terminal-Blynk"},next:{title:"Overview",permalink:"/Wio-Terminal-USBH-Overview"}},s={},p=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Set up the Arduino IDE and tune the code",id:"set-up-the-arduino-ide-and-tune-the-code",level:2},{value:"Mobile APP Settings",id:"mobile-app-settings",level:2},{value:"OTA: Update BLYNK_FIRMWARE_VERSION",id:"ota-update-blynk_firmware_version",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"use-blynk-wireless-ota-functionality-to-wio-terminal"},"Use Blynk wireless OTA functionality to Wio Terminal"),(0,l.kt)("p",null,"In this wiki we will describe how to use Blynk wireless OTA functionality to Wio Terminal."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"What is Blynk"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blynk.io/"},(0,l.kt)("strong",{parentName:"a"},"Blynk"))," is a new platform that allows you to quickly build interfaces for controlling and monitoring your hardware projects from your iOS and Android device. After downloading the Blynk app, you can create a project dashboard and arrange buttons, sliders, graphs, and other widgets onto the screen."),(0,l.kt)("h2",{id:"hardware-required"},"Hardware Required"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,l.kt)("strong",{parentName:"a"},"Wio Terminal")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Mobile Phone")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download Blynk App from App Store")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"WiFi"))),(0,l.kt)("h2",{id:"preparatory-work"},"Preparatory work"),(0,l.kt)("p",null,"Go to ",(0,l.kt)("a",{parentName:"p",href:"https://blynk.cloud/dashboard/login"},(0,l.kt)("strong",{parentName:"a"},"Blynk to register and log in")),", go to the Templates screen, and create a new template."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/1.png",alt:null})),(0,l.kt)("p",null,'Then edit the name and select the device and connection mode, in this case "Seeed Wio Terminal" and "WiFi".\n',(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/60.jpg",alt:null})),(0,l.kt)("p",null,"Make a note of BLYNK_TEMPLATE_ID and BLYNK_DEVICE_NAME.\nIn the example, they are:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C++"},'#define BLYNK_TEMPLATE_ID "TMPLCc16MxA1"\n#define BLYNK_DEVICE_NAME "WioTerminal"\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/3.png",alt:null})),(0,l.kt)("p",null,"Then click the save button in the upper right corner."),(0,l.kt)("h2",{id:"set-up-the-arduino-ide-and-tune-the-code"},"Set up the Arduino IDE and tune the code"),(0,l.kt)("p",null,"Next, download and open the sample code in the Ardunio IDE."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/Edgent_Wio_Terminal_0-2.zip"},(0,l.kt)("strong",{parentName:"a"},"Edgent_Wio_Terminal_0-2.zip"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/4.jpg",alt:null})),(0,l.kt)("p",null,"Select the Wio Terminal device from the development board options ( ",(0,l.kt)("a",{parentName:"p",href:"https://blynk.cloud/dashboard/login"},(0,l.kt)("strong",{parentName:"a"},"see the Wio Terminal wiki page"))," for how to add Wio Terminal in the Ardunio IDE)."),(0,l.kt)("p",null,"Add ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/blynkkk/blynk-library"},(0,l.kt)("strong",{parentName:"a"},"blynk-library"))),(0,l.kt)("p",null,"Search for and add the following library files in the Ardunio IDE library manager:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Seeed Arduino rpcunified"),(0,l.kt)("li",{parentName:"ul"},"Seeed Arduino rpcWiFi"),(0,l.kt)("li",{parentName:"ul"},"Seeed Arduino SFUD"),(0,l.kt)("li",{parentName:"ul"},"Seeed Arduino FS"),(0,l.kt)("li",{parentName:"ul"},"Seeed Arduino mbedtls"),(0,l.kt)("li",{parentName:"ul"},"ArduinoOTA"),(0,l.kt)("li",{parentName:"ul"},"ArduinoHttpClient")),(0,l.kt)("p",null,"In lines 16 and 17 of the code, fill in the ID and NAME that the system just generated:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/5.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/6.jpg",alt:null})),(0,l.kt)("p",null,"Then compile and upload the code to Wio Terminal (if a library file is missing during compilation, search the library manager and download it)"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/7.png",alt:null})),(0,l.kt)("p",null,"After the program is successfully uploaded, open the serial port monitor and set the baud rate to 115200. Wait for 5-10s. The serial port displays the following information :(if the serial port monitor does not respond, please try to reconnect the data cable and reopen the serial port monitor.)"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/8.jpg",alt:null})),(0,l.kt)("h2",{id:"mobile-app-settings"},"Mobile APP Settings"),(0,l.kt)("p",null,"Download Blynk IoT APP\uff1a"),(0,l.kt)("p",null,"Android: ",(0,l.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US"},"https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US")),(0,l.kt)("p",null,"IOS: ",(0,l.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/blynk-iot/id1559317868"},"https://apps.apple.com/us/app/blynk-iot/id1559317868")),(0,l.kt)("p",null,"Log in to the main screen"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji111.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji222.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji333.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji4454.png",alt:null})),(0,l.kt)("p",null,"After the APP configuration is successful, the serial port monitor will prompt the network connection status. When 'Ready' is displayed, the WiFi connection is successful."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/21.jpg",alt:null})),(0,l.kt)("p",null,"Now it's time to try the OTA feature."),(0,l.kt)("h2",{id:"ota-update-blynk_firmware_version"},"OTA: Update BLYNK_FIRMWARE_VERSION"),(0,l.kt)("p",null,'You can write a personal program in "edgent_wio_terminal_0-2" with "void setup()" and "void loop()". In this example, we will change the version information of the program directly for the sake of demonstration. If the program is successfully uploaded, the version information will change.\nWe changed BLYNK_FIRMWARE_VERSION from "0.2.0" to "0.2.11"'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/22.jpg",alt:null})),(0,l.kt)("p",null,'Then click "Export compiled Binary" and wait for the build to complete.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/23.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/24.png",alt:null})),(0,l.kt)("p",null,"Then open the folder and go to the BIN file."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/25.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/26.jpg",alt:null})),(0,l.kt)("p",null,'Open Blynk Air and select "New Shipping" in the upper right corner.Click down on this screen to find the "Firmware" option.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/27.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/28.jpg",alt:null})),(0,l.kt)("p",null,'Select the bin. file you just generated here, and you will see that the software version is changed to "0.2.11" which we just set. Then click the "Start Shipping" button in the lower right corner to start the wireless upload program.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/29.jpg",alt:null})),(0,l.kt)("p",null,"You can see real-time uploads on the web page or on the serial monitor."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/30.jpg",alt:null})),(0,l.kt)("p",null,"Wait about 2 minutes if your serial port monitor does not have output then try to restart the device and turn on the serial port monitor again and you will see the upload in real time."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/31.jpg",alt:null})),(0,l.kt)("p",null,'Restart the device and you can see that the software version here has changed to "0.2.11" which we just changed.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/32.jpg",alt:null})),(0,l.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,l.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);