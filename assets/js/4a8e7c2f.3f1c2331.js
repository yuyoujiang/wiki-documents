"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37379],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(i),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||n;return i?r.createElement(h,a(a({ref:t},d),{},{components:i})):r.createElement(h,a({ref:t},d))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<n;u++)a[u]=i[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4777:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=i(87462),o=(i(67294),i(3905));const n={description:"Seeeduino Lite",title:"Seeeduino Lite",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Lite",last_update:{date:"1/31/2023",author:"shuxu hu"}},a=void 0,s={unversionedId:"Sensor/Seeeduino Series/Seeeduino_Lite",id:"Sensor/Seeeduino Series/Seeeduino_Lite",title:"Seeeduino Lite",description:"Seeeduino Lite",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino_Lite.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino_Lite",permalink:"/Seeeduino_Lite",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino_Lite.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Seeeduino Lite",title:"Seeeduino Lite",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Lite",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino GPRS",permalink:"/Seeeduino_GPRS"},next:{title:"Seeeduino LoRaWAN",permalink:"/Seeeduino_LoRAWAN"}},l={},u=[{value:"Specifications",id:"specifications",level:2},{value:"Interface",id:"interface",level:2},{value:"Driver Installation",id:"driver-installation",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/400px-Lite_01.jpg",alt:"enter image description here"})),(0,o.kt)("p",null,"Seeeduino Lite is a microcontroller based on ATmega32U4. Just like Arduino Leonardo, it saves a secondary processor needed for USB to serial communication. And this allows Seeeduino Lite appear to computer as a USB device, like keyboard and mouse. Derived from Leonardo, we also merged custom details of Seeeduino series into Seeeduino Lite, like selectable operating voltage, onboard Grove connectors and so on. It has 20 digital I/Os (7 of which can output PWM),a micro USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter to get started."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:"enter image description here"}))),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Microcontroller: ATmega32u4"),(0,o.kt)("li",{parentName:"ul"},"Operating Voltage: 5V"),(0,o.kt)("li",{parentName:"ul"},"Input Voltage (recommended): 7-12V"),(0,o.kt)("li",{parentName:"ul"},"Input Voltage (limits): 6-20V"),(0,o.kt)("li",{parentName:"ul"},"Digital I/O Pins: 20"),(0,o.kt)("li",{parentName:"ul"},"PWM Channels: 7"),(0,o.kt)("li",{parentName:"ul"},"Analog Input Channels: 12"),(0,o.kt)("li",{parentName:"ul"},"DC Current per I/O Pin: 40 mA"),(0,o.kt)("li",{parentName:"ul"},"DC Current for 3.3V Pin: 50 mA"),(0,o.kt)("li",{parentName:"ul"},"Flash Memory: 32 KB (ATmega32u4) of which 4 KB used by bootloader"),(0,o.kt)("li",{parentName:"ul"},"SRAM: 2.5 KB (ATmega32u4)"),(0,o.kt)("li",{parentName:"ul"},"EEPROM: 1 KB (ATmega32u4)"),(0,o.kt)("li",{parentName:"ul"},"Clock Speed: 16 MHz")),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Seeeduino_Lite_Intrface_Function.jpg",alt:"enter image description here"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"U1:")," 78M05 IC, Three-terminal positive voltage regulator."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"U3:")," LD1117 IC, a Low Drop Voltage Regulator able to provide up to 800mA of Output Current."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"U5:")," Atmega32U4 IC, 8-bit AVR Microcontroller with 32K Bytes of ISP Flash and USB Controller."),(0,o.kt)("h2",{id:"driver-installation"},"Driver Installation"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)\n"))),(0,o.kt)("p",null,"Download the driver files from here ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Signed_USB_Serial_Driver"},"https://github.com/Seeed-Studio/Signed_USB_Serial_Driver"),"."),(0,o.kt)("p",null,"Connect Seeeduino Lite to your computer via a micro-USB wire."),(0,o.kt)("p",null,"Wait for the new found hardware prompt.If the installer does not launch automatically, Navigate to the Windows Device Manager and find the Seeeduino Lite listing."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Unknow_Device.jpg",alt:"enter image description here"})),(0,o.kt)("p",null,'Right click and choose Update driver. When asked to install automatically or from a specific location, select "Browse my computer for driver software".'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Update_Driver.jpg",alt:"enter image description here"})),(0,o.kt)("p",null,'Choose "Search for the best driver in these locations", and check the box "incude this location in the search". Click the Browse button and navigate to drive you have downloaded. Select the drivers folder an click OK.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Browse_Driver_Location.jpg",alt:"enter image description here"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/image/Successfully_Update_Driver.jpg",alt:"enter image description here"})),(0,o.kt)("p",null,"Replace two file in the path of Arduino. Open up Arduino-1.0.1/hardware/arduino/cores/arduino directory, replace the file:USBCore.cpp with the new USBCore.cpp.And replace file\uff1aboards.txt with the new boards.txt in the path:Arduino-1.0.1/hardware/arduino. Now, you can program and use the seeeduino lite as you use other Arduino boards."),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Seeeduino_Lite_Eagle_File.zip"},"Seeeduino Lite Eagle File"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip"},"new boards.txt"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Boards.zip"},"new USBCore.cpp"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lite/resource/Signed_USB_Serial_Driver-master.zip"},"Lite Driver File"),".")),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);