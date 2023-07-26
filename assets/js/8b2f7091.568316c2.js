"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8105],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=s(r),k=n,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return r?a.createElement(c,i(i({ref:e},m),{},{components:r})):a.createElement(c,i({ref:e},m))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4128:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"Grove - I2C Motor Driver (TB6612FNG)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",slug:"/Grove-I2C_Motor_Driver-TB6612FNG",last_update:{date:"01/09/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver-TB6612FNG",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver-TB6612FNG",title:"Grove - I2C Motor Driver (TB6612FNG)",description:"The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver-TB6612FNG.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-I2C_Motor_Driver-TB6612FNG",permalink:"/Grove-I2C_Motor_Driver-TB6612FNG",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver-TB6612FNG.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641657600,formattedLastUpdatedAt:"Jan 8, 2022",frontMatter:{title:"Grove - I2C Motor Driver (TB6612FNG)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/",slug:"/Grove-I2C_Motor_Driver-TB6612FNG",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 16 Channel PWM Driver (PCA9685)",permalink:"/Grove-16-Channel_PWM_Driver-PCA9685"},next:{title:"Grove - Hall Sensor",permalink:"/Grove-Hall_Sensor"}},p={},s=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Hardware Detail",id:"hardware-detail",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi 4 Computer",id:"play-with-raspberry-pi-4-computer",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Requirements",id:"requirements",level:4},{value:"How to use the library",id:"how-to-use-the-library",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],m={toc:s};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg",alt:null})),(0,n.kt)("p",null,"The Grove - I2C Motor Driver (TB6612FNG) can drive two DC motors up to 12V/1.2A or drive one stepper motor up to 12V/1.2A. With the on-board MCU, it can work with Arduino easily via the Grove I2C interface."),(0,n.kt)("p",null,"This diver board is based on TB6612FNG, which is a driver IC for DC motor and stepper motor with output transistor in LD MOS structure with low ON-resistor. Two input signals, IN1 and IN2, can choose one of four modes such as CW, CCW, short brake, and stop mode."),(0,n.kt)("p",{style:{}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - I2C Motor Driver (TB6612FNG)"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Sep 2018")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On board MCU"),(0,n.kt)("li",{parentName:"ul"},"CW/CCW/short brake/stop function modes"),(0,n.kt)("li",{parentName:"ul"},"Built-in thermal shutdown circuit and low voltage detecting circuit"),(0,n.kt)("li",{parentName:"ul"},"Standby (Power save) system")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MCU Operating Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Motor Supply Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"2.5 ~ 13.5 (5V Typical, 15V Max.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Output Current"),(0,n.kt)("td",{parentName:"tr",align:null},"1.2 A(ave)/3.2 A (peak)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Switching Frequency"),(0,n.kt)("td",{parentName:"tr",align:null},"100kHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Logic Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,n.kt)("td",{parentName:"tr",align:null},"0x14 (default)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C Address Range"),(0,n.kt)("td",{parentName:"tr",align:null},"0x01 ~ 0x7f (Configurable)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 60mm W: 40mm H: 12mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"13g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Package size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 140mm W: 90mm H: 12mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"20g")))),(0,n.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DC motor control"),(0,n.kt)("li",{parentName:"ul"},"Stepper motor control")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-out"},"Pin Out"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg",alt:null})),(0,n.kt)("h3",{id:"hardware-detail"},"Hardware Detail"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"I2C Interface")),(0,n.kt)("p",null,"This board uses the I2C interface to allow the on-board MCU to communicate with the host computer."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"GND: connect this module to the system GND",(0,n.kt)("br",{parentName:"p"}),"\n","VCC: you can use 5V or 3.3V for this module",(0,n.kt)("br",{parentName:"p"}),"\n","SDA: I2C serial data",(0,n.kt)("br",{parentName:"p"}),"\n","SCL: I2C serial clock")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg",alt:null})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Power In")),(0,n.kt)("p",null,"Provide DC power to the motors, input range 2.5V ~ 13.5V."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'GND: Connect to the system GND, plug the power "-"',(0,n.kt)("br",{parentName:"p"}),"\n",'VM: Plug the power "+", supply power for the motor.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg",alt:null})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DC Motor Output")),(0,n.kt)("p",null,"This board has two channel DC Motor Output, it can output 12V/1.2A per channel. You can use this driver board control two DC motors at the same time."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A1: Channel A output 1",(0,n.kt)("br",{parentName:"p"}),"\n","A2: Channel A output 2",(0,n.kt)("br",{parentName:"p"}),"\n","B1: Channel B output 1",(0,n.kt)("br",{parentName:"p"}),"\n","B2: Channel B output 2")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg",alt:null})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steperp Motor Output")),(0,n.kt)("p",null,"You can use this board to control the 4-wire stepper motor as well, it can output up to 12V/1.2A."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"OUT1: Connected to one input of the stepper motor coil 1.",(0,n.kt)("br",{parentName:"p"}),"\n","OUT2: Connected to the other input of the stepper motor coil 1.",(0,n.kt)("br",{parentName:"p"}),"\n","OUT3: Connected to one input of the stepper motor coil 2.",(0,n.kt)("br",{parentName:"p"}),"\n","OUT4: Connected to the other input of the stepper motor coil 2.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    Actually the DC port and the stepper port are physically connected together. The connection diagram is as follows:\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"DC Port"),(0,n.kt)("th",{parentName:"tr",align:null},"Stepper Port"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A1"),(0,n.kt)("td",{parentName:"tr",align:null},"OUT1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A2"),(0,n.kt)("td",{parentName:"tr",align:null},"OUT2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"B1"),(0,n.kt)("td",{parentName:"tr",align:null},"OUT3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"B2"),(0,n.kt)("td",{parentName:"tr",align:null},"OUT4")))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"DC Motor Demo")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Motor Driver (TB6612FNG)"),(0,n.kt)("th",{parentName:"tr",align:null},"DC Motor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/130-DC-Motor-p-2023.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy\n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n\n**3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Plu the DC motor into the ",(0,n.kt)("strong",{parentName:"p"},"DC Motor Output")," port of the driver board, plug the external DC power into the ",(0,n.kt)("strong",{parentName:"p"},"Power In")," port.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect the Grove - I2C Motor Driver (TB6612FNG) to port ",(0,n.kt)("strong",{parentName:"p"},"I^2^C")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect1.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Stepper Motor Demo")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Motor Driver (TB6612FNG)"),(0,n.kt)("th",{parentName:"tr",align:null},"Stepper Motor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/Motor%2024BYJ48_02.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Connect the stepper motor with ",(0,n.kt)("strong",{parentName:"li"},"Stepper Motor Output")," port of the driver board, plug the external DC power into the ",(0,n.kt)("strong",{parentName:"li"},"Power In")," port.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    This driver board is suitable for 4-wire stepper motors. Depending on the stepper motor you use, the wiring color is different. We use the motor 24BYJ48 , the wiring is as shown in the table below:\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pin Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Wire of Stepper Motor"),(0,n.kt)("th",{parentName:"tr",align:null},"Wire color(24BYJ48)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OUT1"),(0,n.kt)("td",{parentName:"tr",align:null},"one end of coil 1"),(0,n.kt)("td",{parentName:"tr",align:null},"Orange")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OUT2"),(0,n.kt)("td",{parentName:"tr",align:null},"the other end of coil 1"),(0,n.kt)("td",{parentName:"tr",align:null},"Blue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OUT3"),(0,n.kt)("td",{parentName:"tr",align:null},"one end of coil 2"),(0,n.kt)("td",{parentName:"tr",align:null},"Pink")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OUT4"),(0,n.kt)("td",{parentName:"tr",align:null},"the other end of coil 2"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/p%2Blogo/coil.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect the Grove - I2C Motor Driver (TB6612FNG) to port ",(0,n.kt)("strong",{parentName:"p"},"I^2^C")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect2.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    Since the DC port and the stepper port are physically connected together, you can also use the two DC port to control your stepper motor. The connection diagram is as follows:\n"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect3.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Motor Driver (TB6612FNG)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V or 3.3V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"White"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG"},"Grove_Motor_Driver_TB6612FNG")," Library from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the default example, we provide two examples for you"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"dc_motor: Demo for DC motor",(0,n.kt)("br",{parentName:"p"}),"\n","stepper_motor_2phase: Demo for 4-wire, 2phase stepper motor.")),(0,n.kt)("p",null,"You can open them in the following two ways(take the dc_motor for example)\uff1a  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1. Open it directly in the Arduino IDE via the path: **File --\x3e Examples --\x3e Grove - Motor Driver(TB6612FNG) --\x3e dc_motor**.\n![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path1.jpg)  \n2. Open it in your computer by click the **dc_motor.ino** which you can find in the folder **XXXX\\Arduino\\libraries\\Grove_Motor_Driver_TB6612FNG-master\\examples\\dc_motor**, **XXXX** is the location you installed the Arduino IDE.\n![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path2.jpg)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If every thing goes well, when you power up the external power port, the motor will run.\n"))),(0,n.kt)("h3",{id:"play-with-raspberry-pi-4-computer"},"Play With Raspberry Pi 4 Computer"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"DC Motor Demo")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi 4 Computer"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Motor Driver (TB6612FNG)"),(0,n.kt)("th",{parentName:"tr",align:null},"DC Motor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/102110421/raspberrypi4.png",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/130-DC-Motor-p-2023.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy\n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n\n**3** You also need prepare at least 2 jumpers, in case you do not have, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Plu the DC motor into the ",(0,n.kt)("strong",{parentName:"li"},"DC Motor Output")," port of the driver board, plug the external DC power into the ",(0,n.kt)("strong",{parentName:"li"},"Power In")," port.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect1.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect the Grove - I2C Motor Driver (TB6612FNG) to port ",(0,n.kt)("strong",{parentName:"p"},"I^2^C")," of Grove Base Hat for Raspberry Pi.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Plug Grove Base Hat for Raspberry Pi into Raspberry Pi 4 Computer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect Raspberry Pi 4 Computer to a display."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect2.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If this is your first time use Raspberry Pi, please refer to [Getting started with Raspberry](https://wiki.seeedstudio.com/Grove_Base_Kit_for_Raspberry_Pi/#getting-started) before the start.\n"))),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n")),(0,n.kt)("p",{parentName:"admonition"},"Thanks MarkusBansky provide software library and learning resource for the Grove_Motor_Driver_TB6612FNG to Raspberry Pi 4 and python3.\nThis is a port of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG"},"Grove Arduino LIbrary")," for ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver-TB6612FNG/"},"Grove I2C Motor Driver on TB6612FNG"),".")),(0,n.kt)("h4",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RaspberryPi linux image")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Python 3.6+"),(0,n.kt)("li",{parentName:"ul"},"smbus library"),(0,n.kt)("li",{parentName:"ul"},"time library"),(0,n.kt)("li",{parentName:"ul"},"math library")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The library contains 6 easing functions for the smooth start of motors.\nEasing functions currently can only be used on a single motor at once.\nContaining IN and OUT functions.\n"))),(0,n.kt)("h4",{id:"how-to-use-the-library"},"How to use the library"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n")),(0,n.kt)("p",{parentName:"admonition"},"  First of all make sure you are running the latest released version of ",(0,n.kt)("strong",{parentName:"p"},"pip"),".This library requires you to add an additional",(0,n.kt)("inlineCode",{parentName:"p"},"index-url")," to ",(0,n.kt)("strong",{parentName:"p"},"pip.conf")," in order to install it. You can do this by editing your config file with ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo nano/etc/pip.conf")," and inserting this line just after the ",(0,n.kt)("inlineCode",{parentName:"p"},"[global]")," section:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"index-url=https://pypi.python.org/\n")),(0,n.kt)("p",null,"Now you can install the package as usual, for python3 use something for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 -m pip install raspberry-i2c-tb6612fng\n")),(0,n.kt)("p",null,"After you install the library successful, please enter the raspberry-i2c-tb6612fng file use below code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd raspberry-i2c-tb6612fng\n")),(0,n.kt)("p",null,"The last step is to run the test code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3 test.py\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/putty.png",alt:null})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If every thing goes well, when you type `python3 test.py`, the motor will run.\n"))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip"},"Grove - I2C Motor Driver (TB6612FNG) Eagle Files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG/archive/master.zip"},"Grove_Motor_Driver_TB6612FNG Software Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/TB6612FNG.pdf"},"Datasheet TB6612FNG")))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);