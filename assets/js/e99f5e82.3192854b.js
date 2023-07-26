"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"UartSBee V4",title:"UartSBee V4",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/UartSBee_V4",last_update:{date:"1/13/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Seeed_Elderly/Bee/UartSBee_V4",id:"Seeed_Elderly/Bee/UartSBee_V4",title:"UartSBee V4",description:"UartSBee V4",source:"@site/docs/Seeed_Elderly/Bee/UartSBee_V4.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/UartSBee_V4",permalink:"/UartSBee_V4",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Bee/UartSBee_V4.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"UartSBee V4",title:"UartSBee V4",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/UartSBee_V4",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"UartSBee V3.1",permalink:"/UartSBee_V3.1"},next:{title:"UartSBee V5",permalink:"/UartSBee_v5"}},s={},p=[{value:"Hardware Version Tracker",id:"hardware-version-tracker",level:2},{value:"Features",id:"features",level:2},{value:"Applications Ideas",id:"applications-ideas",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Schematic",id:"schematic",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Key Specifications",id:"key-specifications",level:3},{value:"Electrical Characterstics",id:"electrical-characterstics",level:3},{value:"System Block Digram",id:"system-block-digram",level:2},{value:"Applications",id:"applications",level:2},{value:"USB \u2013 Serial Port",id:"usb--serial-port",level:3},{value:"3.3V / 5v Power Source for MCU breadboard \xb5Cs and Programmer for \xb5Cs / CPLDs",id:"33v--5v-power-source-for-mcu-breadboard-\xb5cs-and-programmer-for-\xb5cs--cplds",level:3},{value:"Bee Module Interfacing for PC Wireless application",id:"bee-module-interfacing-for-pc-wireless-application",level:3},{value:"BitBang Mode",id:"bitbang-mode",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"External Links",id:"external-links",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/Xbs4.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UartSBee v4.0")," is FTDI cable compatible ",(0,a.kt)("strong",{parentName:"p"},"USB to Serial")," adapter equipped with BEE socket(20pin 2.0mm). The integrated ",(0,a.kt)("strong",{parentName:"p"},"FT232RL")," can be used for programming or communicating with MCUs.On the other hand, you might connect your PC to various wireless applications via a ",(0,a.kt)("strong",{parentName:"p"},"Bee")," compatible module. UartSBee provides breakouts for the bit-bang mode pins of ",(0,a.kt)("strong",{parentName:"p"},"FT232RL")," as well.This Bit-bang mode pins (8 I/O pins) can be used as a replacement for applications involving PC parallel port which is scares now a day."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/UartSBee-V4-p-688.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.kt)("h2",{id:"hardware-version-tracker"},"Hardware Version Tracker"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," Revision"),(0,a.kt)("th",null," Description"),(0,a.kt)("th",null," Release Date")),(0,a.kt)("tr",null,(0,a.kt)("td",null," UartSBee V3.1"),(0,a.kt)("td",null," Delete Bluetooth\u2019s breakout on the bottom side, Reduce form factor"),(0,a.kt)("td",null," Sept 02, 2010")),(0,a.kt)("tr",null,(0,a.kt)("td",null," UartSBee V2.3"),(0,a.kt)("td",null," DC current for 3.3v pin, up to 500mA provided for better support of XBee pro"),(0,a.kt)("td",null," Jul 21, 2009")),(0,a.kt)("tr",null,(0,a.kt)("td",null," UartSBee V2.1"),(0,a.kt)("td",null," Initial public release"),(0,a.kt)("td",null," Feb 01, 2009"))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FTDI Cable compatible."),(0,a.kt)("li",{parentName:"ul"},"USB 2.0 compatible Serial Interface."),(0,a.kt)("li",{parentName:"ul"},"3.3V and 5V compatible I/Os."),(0,a.kt)("li",{parentName:"ul"},"3.3V and 5V dual power outputs."),(0,a.kt)("li",{parentName:"ul"},"Reset button for BEE modules."),(0,a.kt)("li",{parentName:"ul"},"Bit-Bang mode ready (8 Serial I/Os or as SPI)."),(0,a.kt)("li",{parentName:"ul"},"LEDs for UART and BEE operations.")),(0,a.kt)("h2",{id:"applications-ideas"},"Applications Ideas"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"USB to Serial adapter for communicating with TTL/CMOS level Serial devices."),(0,a.kt)("li",{parentName:"ul"},"Programmer for Arduino / Seeeduino and compatible boards."),(0,a.kt)("li",{parentName:"ul"},"Programmer for micro-controllers / CPLDs using ISP(in-circuit-serial-programming)."),(0,a.kt)("li",{parentName:"ul"},"3.3V / 5V power source for a breadboard MCU applications"),(0,a.kt)("li",{parentName:"ul"},"USB Adapter for BEE modules (for PC wireless function)."),(0,a.kt)("li",{parentName:"ul"},"Endless possibilities as a USB based parallel device in FT232RL bit-bang mode - Known to work as ",(0,a.kt)("strong",{parentName:"li"},"AVR-ISP"),", Slowspeed ",(0,a.kt)("strong",{parentName:"li"},"JTAG")," with OpenOCD, as ",(0,a.kt)("strong",{parentName:"li"},"I2C"),",")),(0,a.kt)("h2",{id:"cautions"},"Cautions"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UartSBee v3.1")," provide a ",(0,a.kt)("strong",{parentName:"li"},"power selection"),"(3.3V or 5V) ",(0,a.kt)("strong",{parentName:"li"},"toggle switch"),". ",(0,a.kt)("u",null,"Before connecting")," the board to any other device, make sure you set the power selection switch to either 3.3V or 5V.")),(0,a.kt)("h2",{id:"schematic"},"Schematic"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_V4.0_Sch.png",alt:null})),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"key-specifications"},"Key Specifications"),(0,a.kt)("table",{cellpadding:"1",cellspacing:"1"},(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Microprocessor"),(0,a.kt)("td",null," FT232RL")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," PCB size"),(0,a.kt)("td",null," 3.1cm x 4.1cm")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Indicators"),(0,a.kt)("td",null," POWER,Green LED. LEDs for Txd and Rxd")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Power supply"),(0,a.kt)("td",null," 3.3V and 5V DC")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Interface"),(0,a.kt)("td",null," Mini-B USB, 2.54mm pitch pin header")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Adapter socket"),(0,a.kt)("td",null," XBee compatible 2.0mm pitch female pin header")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Connectivity"),(0,a.kt)("td",null," USB")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Communication Protocol"),(0,a.kt)("td",null," UART, Bit Bang I/O, SPI")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," ROHS"),(0,a.kt)("td",null," YES"))),(0,a.kt)("h3",{id:"electrical-characterstics"},"Electrical Characterstics"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," Specification"),(0,a.kt)("th",null," Minimum"),(0,a.kt)("th",null," Typical"),(0,a.kt)("th",null," Maximum"),(0,a.kt)("th",null," Unit")),(0,a.kt)("tr",null,(0,a.kt)("td",null," Input voltage"),(0,a.kt)("td",null," -"),(0,a.kt)("td",null," 5"),(0,a.kt)("td",null," 5"),(0,a.kt)("td",null," Vdc")),(0,a.kt)("tr",null,(0,a.kt)("td",null," Current Consumption"),(0,a.kt)("td",null," -"),(0,a.kt)("td",null," -"),(0,a.kt)("td",null," 500"),(0,a.kt)("td",null," mA")),(0,a.kt)("tr",null,(0,a.kt)("td",null," Output voltage"),(0,a.kt)("td",null," 3.3"),(0,a.kt)("td",null," -"),(0,a.kt)("td",null," 5"),(0,a.kt)("td",null," Vdc"))),(0,a.kt)("h2",{id:"system-block-digram"},"System Block Digram"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/Uartsbee-block-diagram.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A tiny ",(0,a.kt)("strong",{parentName:"li"},"reset")," ",(0,a.kt)("strong",{parentName:"li"},"switch")," is provided for reseting ",(0,a.kt)("strong",{parentName:"li"},"Bee")," compatible devices."),(0,a.kt)("li",{parentName:"ul"},"Apart from ",(0,a.kt)("strong",{parentName:"li"},"2 x 10")," Breakout for BEE compatible modules, additional pads for ",(0,a.kt)("strong",{parentName:"li"},"2 x 10pin headers"),", ",(0,a.kt)("strong",{parentName:"li"},"2 x 3 ISP header")," are provided.Users can solder pin headers appropriately.")),(0,a.kt)("h2",{id:"applications"},"Applications"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usb--serial-port"},"USB \u2013 Serial Port"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"UartSBee")," is commonly used as USB to Serial Port (COM port) interface. This kind of configuration can be used to communicate with a MCU serial port or to program a MCU which support UART based ISP."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Windows OS, the first time you plug in the device, you might be asked for the driver.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Detected_Windows.JPG",alt:null})),(0,a.kt)("p",null,"Download and install the ",(0,a.kt)("strong",{parentName:"p"},"Virtual COM port")," driver from FTDI website :"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ftdichip.com/Drivers/VCP.htm"},"https://www.ftdichip.com/Drivers/VCP.htm")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'A wizard opens for installing the driver. Choose "Install from a list or specific location"')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_1.JPG",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose the downloaded driver path")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_2.JPG",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'If you have downloaded unsigned driver, the following Window appears. Just click "Continue Anyway"')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_2.1.JPG",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UartSBee")," driver is successfully installed. Windows assigns a ",(0,a.kt)("strong",{parentName:"li"},"COM")," port name to ",(0,a.kt)("strong",{parentName:"li"},"FT232RL")," like ",(0,a.kt)("strong",{parentName:"li"},"COM10"),", ",(0,a.kt)("strong",{parentName:"li"},"COM11"),' etc... Please check the exact name in Device Manager.  In this case "',(0,a.kt)("strong",{parentName:"li"},"COM16"),'" is assigned for UartSBee')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_3.JPG",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GNU/Linux")),(0,a.kt)("p",null,"All modern ",(0,a.kt)("strong",{parentName:"p"},"GNU/Linux OS")," comes with FT232RL drivers. To check if UartSBee is detected, Issue a ",(0,a.kt)("strong",{parentName:"p"},"lsusb")," command. An output similar to below should appear."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/Lsub.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GNU/Linux")," assigns ",(0,a.kt)("strong",{parentName:"p"},"/dev/ttyUSB0"),", ",(0,a.kt)("strong",{parentName:"p"},"/dev/ttyUSB1")," etc... as device name."),(0,a.kt)("p",null,"To verify the working of serial port connect ",(0,a.kt)("strong",{parentName:"p"},"TxD")," and ",(0,a.kt)("strong",{parentName:"p"},"RxD")," pins of UartSBee and use a terminal application like ",(0,a.kt)("strong",{parentName:"p"},"cutecom")," to configure the device parameters as shown below."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Baudrate"),":9600, ",(0,a.kt)("strong",{parentName:"p"},"Data bits"),":8, ",(0,a.kt)("strong",{parentName:"p"},"Stop bits"),":None and no Handshake"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/Uartsbee-txd-rxd-connected.JPG",alt:null})),(0,a.kt)("p",null,"Any character typed in terminal would be echoed back as shown."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartsBee-CuteCom.png",alt:null})),(0,a.kt)("p",null,"The same functionality can be checked in ",(0,a.kt)("strong",{parentName:"p"},"Windows")," - ",(0,a.kt)("strong",{parentName:"p"},"Hyperterminal")," as well."),(0,a.kt)("h3",{id:"33v--5v-power-source-for-mcu-breadboard-\xb5cs-and-programmer-for-\xb5cs--cplds"},"3.3V / 5v Power Source for MCU breadboard \xb5Cs and Programmer for \xb5Cs / CPLDs"),(0,a.kt)("p",null,"Apart from 3.3V and 5V power outputs provided by UartSBee , the logic level of I/O pins can be selected for ",(0,a.kt)("strong",{parentName:"p"},"5.0V")," ",(0,a.kt)("strong",{parentName:"p"},"TTL")," or ",(0,a.kt)("strong",{parentName:"p"},"3.3V CMOS")," operations. In the below example a bread based board micro-controller application is demonstrated. A LPC1343 ARM Cortex-M3 MCU is connected to UartSBee. As this is a 3.3V device, the power toggle switch is set to 3.3V. LPC1343 can be programmed through UART. This application could be extended to any MCU / CPLDs which support UART based flashing or SPI based flashing (Needs FT232R BitBang mode)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BreadBoard Prototyping"),": ",(0,a.kt)("strong",{parentName:"p"},"UartSBee v3.1")," acting as as 3.3V power-supply and 3.3V UART flash programming port for LPC1343."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_as_uCPowerSupplyAndProgPort_BreadBoard.JPG",alt:null})),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Switch"),": 3.3V I/O Selected\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UarSBee-Switch_3.3V_selected.jpg",alt:null})),(0,a.kt)("h3",{id:"bee-module-interfacing-for-pc-wireless-application"},"Bee Module Interfacing for PC Wireless application"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PC Wireless Ad-Ons")),(0,a.kt)("p",null,"UartSBee's Bee compatible interface provided can be used to connect Bee module like ",(0,a.kt)("strong",{parentName:"p"},"XBee"),", ",(0,a.kt)("strong",{parentName:"p"},"Bluetooth Bee"),", ",(0,a.kt)("strong",{parentName:"p"},"RF Bee"),", ",(0,a.kt)("strong",{parentName:"p"},"Wifi Bee"),", ",(0,a.kt)("strong",{parentName:"p"},"GPS Bee "),"to PC USB. This makes Bee based PC Wireless application easier. As most of these Bee modules support UART interface, PC programming is easy as well."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MCU Wireless Ad-Ons")),(0,a.kt)("p",null,"This type of arrangement can be also used to interface with UART of micro-controllers (Seeeduino) ."),(0,a.kt)("p",null,"Please refer the Bee module documentation for more information."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"          XBee "),"Connected to",(0,a.kt)("strong",{parentName:"p"},"UartSBee                                                                     BluetoothBee "),"Connected to",(0,a.kt)("strong",{parentName:"p"},"UartSBee")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee-hardware.jpg",alt:null})," ",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/BluetoothBee_with_UartSBee.JPG",alt:null})),(0,a.kt)("h3",{id:"bitbang-mode"},"BitBang Mode"),(0,a.kt)("p",null,"An nice feature of UartSBee v3.1 compared to other FT232RL based USB-Serial devices is that all the Bit-Bang I/Os are brought to the header pins."),(0,a.kt)("p",null,"Bit-Bang mode is a special feature of FT232RL in which 8 I/O lines (",(0,a.kt)("strong",{parentName:"p"},"D0 - D7"),") can be used as a general purpose bidirectional  I/O lines. Three Bit-Bang modes are supported by FT232RL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Asynchronous Bit-Bang mode "))),(0,a.kt)("p",null,"Any data written to the device is clocked to the configured output pins. The rate of data transfer is configured based on baud rate generator. In this mode any of 8 I/O lines can be configured as input or ouput."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Synchronous Bit-Bang mode"))),(0,a.kt)("p",null,"In this mode data is sent synchronously. An input is read before an output byte is sent to the device. Hence to read input, a write operation must be performed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CBUS Bit-Bang Mode"))),(0,a.kt)("p",null,"This is a special mode which requires reprogramming of FT232RL EEPROM. This uses signals ",(0,a.kt)("strong",{parentName:"p"},"C0 - C3"),"."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Bit-Bang Mode")," of ",(0,a.kt)("strong",{parentName:"p"},"FT232RL")," is well documented in the application note",(0,a.kt)("a",{parentName:"p",href:"https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf"},"[1]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Table: Bit-Bang I/O Mapping")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," UartSBee Signal"),(0,a.kt)("th",null," BitBang I/O Signal")),(0,a.kt)("tr",null,(0,a.kt)("td",null," TxD"),(0,a.kt)("td",null," D0")),(0,a.kt)("tr",null,(0,a.kt)("td",null," RxD"),(0,a.kt)("td",null," D1")),(0,a.kt)("tr",null,(0,a.kt)("td",null," RTS"),(0,a.kt)("td",null," D2")),(0,a.kt)("tr",null,(0,a.kt)("td",null," CTS"),(0,a.kt)("td",null," D3")),(0,a.kt)("tr",null,(0,a.kt)("td",null," DTR"),(0,a.kt)("td",null," D4")),(0,a.kt)("tr",null,(0,a.kt)("td",null," DSR"),(0,a.kt)("td",null," D5")),(0,a.kt)("tr",null,(0,a.kt)("td",null," DCD"),(0,a.kt)("td",null," D6")),(0,a.kt)("tr",null,(0,a.kt)("td",null," RI"),(0,a.kt)("td",null," D7"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BitBang Mode Operation:")),(0,a.kt)("p",null,"A simple Asynchronous Bit-Bang mode operation is demonstrated in the below breadboard arrangement in which DTR (D4) pin is connected to an LED. The LED blinking rate is controlled by the PC side application program."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"LED Blinky Circuit                                                             BitBang I/Os of UartSBee V3.1 - Bottom Side")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_bit-bang-DTR.jpg",alt:null}),"   ",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_Bottom_Bit_Bang.png",alt:null})),(0,a.kt)("p",null,"Bit-Bang mode requires special FTDI direct driver called ",(0,a.kt)("a",{parentName:"p",href:"https://www.ftdichip.com/Drivers/D2XX.htm"},"D2XX"),". This driver needs to be installed after removing the Virtual COM Port driver of FT232RL chip. In GNU/Linux this driver runs in kernel mode. As an alternative to D2XX an Free Open Source driver ",(0,a.kt)("a",{parentName:"p",href:"http://www.intra2net.com/en/developer/libftdi/"},"libFTDI")," is available. This works in Windows, GNU/Linux and Mac OS. It runs in user mode in GNU/Linux. Hence no need to remove the existing FT232RL driver."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"libFTDI")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.intra2net.com/en/developer/libftdi/"},"http://www.intra2net.com/en/developer/libftdi/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"libUSB")," libFTDI required libusb which can be downloaded from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.libusb.org/"},"http://www.libusb.org/")),(0,a.kt)("p",null,"The below example code can be compiled in the similar way as that of libFTDI example files. An easy way is to copy the contents of the below code to one of the existing example .c file and build the whole driver using"),(0,a.kt)("p",null,"./configure"),(0,a.kt)("p",null,"make"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Code Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/*\nBlinky.C&nbsp;: UartSBee v3.1 (FT232RL) Bit-Bang mode - Blinky.\n\nCircuit:\nConnect DTR to Anode of LED, Connect one end of resistor to GND and other end\nto Cathode of the LED\n*/\n\n#ifdef __WIN32__\n#define sleep(x) Sleep(x)\n#endif\n\n// 8 bit pin mask for I/O pin\n#define TXD 0x01\n#define RXD 0x02\n#define RTS 0x04\n#define CTS 0x08\n#define DTR 0x10\n#define DSR 0x20\n#define DCD 0x40\n#define RI  0x80\n\n#include &lt;stdio.h&gt;\n#include &lt;ftdi.h&gt;\n\nint main()\n{\n    unsigned char ouputState = 0;\n    struct ftdi_context ftdic;\n\n    /* 1. Initialize ftdi device context */\n    ftdi_init(&amp;ftdic);\n\n    /* 2. Open the device based of VID/PID pair */\n\n    if(ftdi_usb_open(&amp;ftdic, 0x0403, 0x6001) &lt; 0)\n    {\n        printf("Unable to UartSBee v3.1");\n        return 1;\n    }\n\n    /* 3. Enable Bit-Bang mode with for DTR line  */\n    ftdi_set_bitmode(&amp;ftdic, DTR, BITMODE_BITBANG);\n\n    /* 4. Blink LED every 1 second */\n    while(1) {\n        ouputState ^= DTR;\n        ftdi_write_data(&amp;ftdic, &amp;ouputState, 1);\n        sleep(1);\n    }\n}\n')),(0,a.kt)("p",null,"FT232RL Bit-Bang mode can be used to construct AVR ISP, JTAG, SPI and I2C Ports. Refer the external links."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"AVR-ISP Connection Idea")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_ISP_Connection_BitBang.jpg",alt:null})),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/UartSBee_V4/res/UartSBee_v4.0_Source_file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/UartSBee_V4/res/UartSBee_v4.0_Source_file.zip"},"Schematic and Board Files"),";"),(0,a.kt)("h2",{id:"external-links"},"External Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.ftdichip.com/Products/ICs/FT232R.htm"},"FTDI FT232RL product Page"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.ftdichip.com/Drivers/VCP.htm"},"FTDI Virtual COM Port (VCP) drivers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.ftdichip.com/Drivers/D2XX.htm"},"FTDI D2XX drivers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf"},"FTDI Bit-Bang mode application note")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open Source Drivers")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://www.intra2net.com/en/developer/libftdi/"},"libFTDI"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://www.libusb.org/"},"libUSB")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Other Sources of FT232RL application information")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/"},"Hackaday - Introduction to bit-bang mode"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://vak.ru/doku.php/proj/bitbang/bitbang-jtag"},"FT232R JTAG implementation with OpenOCD "))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/"},"FT232R SPI Bitbang Mode example"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://www.geocities.co.jp/arduino_diecimila/bootloader/index_en.html"},"Flashing Arduino with FT232R bitbang mode")))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);