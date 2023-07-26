"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90771],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69212:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={description:"Seeed Studio XIAO SAMD21 with Nanase",title:"Nanase",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-XIAO-by-Nanase",last_update:{date:"1/11/2023",author:"shuxu hu"}},o="Seeed Studio XIAO SAMD21 Get Started By Nanase",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO-by-Nanase",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO-by-Nanase",title:"Nanase",description:"Seeed Studio XIAO SAMD21 with Nanase",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO-by-Nanase.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21",slug:"/Seeeduino-XIAO-by-Nanase",permalink:"/Seeeduino-XIAO-by-Nanase",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/Seeeduino-XIAO-by-Nanase.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673366400,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{description:"Seeed Studio XIAO SAMD21 with Nanase",title:"Nanase",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-XIAO-by-Nanase",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Getting Started",permalink:"/Seeeduino-XIAO"},next:{title:"CircuitPython",permalink:"/Seeeduino-XIAO-CircuitPython"}},s={},d=[{value:"Documentations",id:"documentations",level:2},{value:"Features",id:"features",level:2},{value:"Part list",id:"part-list",level:3},{value:"Specification",id:"specification",level:2},{value:"Reset your Board",id:"reset-your-board",level:2},{value:"Bootloader Mode",id:"bootloader-mode",level:2},{value:"LCD",id:"lcd",level:2},{value:"Two Blinkable Built-in LEDs",id:"two-blinkable-built-in-leds",level:3},{value:"Interface",id:"interface",level:2},{value:"Serial over USB CDC",id:"serial-over-usb-cdc",level:3},{value:"Measuring Speed",id:"measuring-speed",level:3},{value:"SPI (MicroSD Card)",id:"spi-microsd-card",level:3},{value:"I2C",id:"i2c",level:3},{value:"UART",id:"uart",level:2},{value:"Others",id:"others",level:2},{value:"DMA",id:"dma",level:3},{value:"Single Cycle IOBUS",id:"single-cycle-iobus",level:3},{value:"DigitalWrite",id:"digitalwrite",level:3},{value:"Use Registers",id:"use-registers",level:3},{value:"Use Single Cycle IOBUS",id:"use-single-cycle-iobus",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"seeed-studio-xiao-samd21-get-started-by-nanase"},"Seeed Studio XIAO SAMD21 Get Started By Nanase"),(0,i.kt)("p",null,"This is a document written by  ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/nanase_coder"},"@nanase_coder"),". (Translated by Seeed from the original Japanese document: ",(0,i.kt)("a",{parentName:"p",href:"https://qiita.com/nanase/items/0fed598975c49b1d707e#spi-microsd%E3%82%AB%E3%83%BC%E3%83%89"},"\u30b3\u30a4\u30f3\u30b5\u30a4\u30ba Arduino\u4e92\u63db\u6a5f Seeed Studio XIAO SAMD21 \u3092\u4f7f\u3063\u3066\u307f\u305f"),"). Thank you Nanase for sharing this with us!"),(0,i.kt)("h2",{id:"documentations"},"Documentations"),(0,i.kt)("p",null,"There are two documentations on the usage of ",(0,i.kt)("strong",{parentName:"p"},"Seeeduino XIAO")," which focus on different areas, check the table below for reference:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/"},(0,i.kt)("strong",{parentName:"a"},"Documentation by Seeed"))),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/"},(0,i.kt)("strong",{parentName:"a"},"Documentation by Nanase"))))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pinout Digram"),(0,i.kt)("td",{parentName:"tr",align:null},"Interface")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 Getting Started"),(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 with MicroSD Card(SPI)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 GPIO Usage"),(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 with GPS(UART)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Seeed Studio XIAO SAMD21 Resources"),(0,i.kt)("td",{parentName:"tr",align:null},"Single Cycle IOBUS")))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ARM Cortex M0 + CPU (SAMD21G18) 48MHz"),(0,i.kt)("li",{parentName:"ul"},"256 KB Flash, 32 KB SRAM"),(0,i.kt)("li",{parentName:"ul"},"USB Type-C"),(0,i.kt)("li",{parentName:"ul"},"SPI, I2C, UART, DMA available"),(0,i.kt)("li",{parentName:"ul"},"coin size(20mm x 17.5mm)"),(0,i.kt)("li",{parentName:"ul"},"Logic level:3.3V")),(0,i.kt)("p",null,"There are no components on the backside of the board, and all pins have castellated holes, making it easy to solder onto another board."),(0,i.kt)("h3",{id:"part-list"},"Part list"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 x Seeeduino XIAO"),(0,i.kt)("li",{parentName:"ul"},"2 x 7pins header"),(0,i.kt)("li",{parentName:"ul"},"4 x pasters")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Castellated holes:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU"),(0,i.kt)("td",{parentName:"tr",align:null},"ARM Cortex-M0+ CPU(SAMD21G18) running at up to 48MHz(Multiply from 32.768 kHz)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Storage"),(0,i.kt)("td",{parentName:"tr",align:null},"256KB Flash,32KB SRAM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I/O PINs"),(0,i.kt)("td",{parentName:"tr",align:null},"14 GPIO PINs,11 analog PINs, 11 digital PINs, 1 DAC output Pin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pin function"),(0,i.kt)("td",{parentName:"tr",align:null},"SPI, I2C, UART, PWM, external interrupt, SWD (Power Pad)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Logic level"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LEDs:"),(0,i.kt)("td",{parentName:"tr",align:null},"1 user LED, 1 power LED, two LEDs for serial port downloading")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Power"),(0,i.kt)("td",{parentName:"tr",align:null},"USB Type-C interface, power pads at the back")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Size"),(0,i.kt)("td",{parentName:"tr",align:null},"20x17.5x3.5mm")))),(0,i.kt)("p",null,"As you can see, it is a SAMD type Arduino and is similar to the Arduino MKR series, so technically, any library written for them can be used on Seeed Studio XIAO SAMD21. On the other hand, since it is different from the ATmega type Arduino like Arduino Uno, the library which depends on some specific register of ATmega cannot be used."),(0,i.kt)("p",null,"GPIO 14-pin refers to 11 pins on the side, reset pin, and SWD (SWDIO, SWCLK) on the back."),(0,i.kt)("p",null,"The UART in the pin function is different from the serial via USB and can be operated by ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial1"),"."),(0,i.kt)("h2",{id:"reset-your-board"},"Reset your Board"),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/#software"},"here")," and learn about how to add Seeed Studio XIAO SAMD21 to your Arduino IDE."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Seeed Studio XIAO SAMD21 does not have a reset button. Instead, there is a reset pad.\nShort connect this reset pad and apply GND to reset your board."),(0,i.kt)("h2",{id:"bootloader-mode"},"Bootloader Mode"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Sometimes the program may crash or it is unable to upload the sketch. You can reset the board twice and enter Bootloader mode. In this mode, the LEDs flash slowly, and the Seeed Studio XIAO SAMD21 is recognized as a USB memory device. The serial port is separated from the normal mode, and it is always in sketch write mode without running the previous program on the board."),(0,i.kt)("p",null,"To return from bootloader mode to normal mode, upload a sketch or reset it twice quickly again."),(0,i.kt)("p",null,"If you enter bootloader mode when the Seeed Studio XIAO SAMD21 is not recognized as a USB device by the PC, the LED will blink rapidly."),(0,i.kt)("h2",{id:"lcd"},"LCD"),(0,i.kt)("p",null,"Just like the original Arduino, select Basics> Blink from the sample sketch and upload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  pinMode(LED_BUILTIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  delay(1000);\n  digitalWrite(LED_BUILTIN, LOW);\n  delay(1000);\n}\n")),(0,i.kt)("p",null,"Contrary to the original Arduino, it is turned on at LOW and turned off at HIGH."),(0,i.kt)("h3",{id:"two-blinkable-built-in-leds"},"Two Blinkable Built-in LEDs"),(0,i.kt)("p",null,"The official website describes two other built-in LEDs as ",(0,i.kt)("inlineCode",{parentName:"p"},"two LEDs for serial port downloading"),". However, looking at the schematic, there is no physical pin connected to these RX and TX LEDs."),(0,i.kt)("p",null,"If you look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ArduinoCore-samd/blob/1.7.2/cores/arduino/USB/USBCore.cpp#L622-L627"},"USBCore.cpp")," here, you can see that they are turned on by ",(0,i.kt)("inlineCode",{parentName:"p"},"digitalWrite")," every time serial USB transmission / reception occurs, which means that the two LEDs are are programmable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"uint32_t USBDeviceClass::recv(uint32_t ep, void *_data, uint32_t len)\n{\n    if (!_usbConfiguration)\n        return -1;\n\n#ifdef PIN_LED_RXL\n    if (rxLEDPulse == 0)\n        digitalWrite(PIN_LED_RXL, LOW);\n\n    rxLEDPulse = TX_RX_LED_PULSE_MS;\n#endif\n")),(0,i.kt)("p",null,"The specific pin numbers are ",(0,i.kt)("inlineCode",{parentName:"p"},"variant.h / variant.cpp")," like SAMD Arduino, and in case of Seeeduino XIAO, they are assigned to 11 and 12 as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#define PIN_LED_13  (13u)\n#define PIN_LED     PIN_LED_13\n#define LED_BUILTIN PIN_LED\n\n#define PIN_LED_RXL          (12u)\n#define PIN_LED_TXL          (11u)\n#define PIN_LED2             PIN_LED_RXL\n#define PIN_LED3             PIN_LED_TXL\n")),(0,i.kt)("p",null,"Below is a sketch of blinking three LEDs. The LEDs for RX and TX are blue."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  pinMode(LED_BUILTIN, OUTPUT);\n  pinMode(PIN_LED2, OUTPUT);\n  pinMode(PIN_LED3, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_BUILTIN, HIGH);\n  digitalWrite(PIN_LED2, HIGH);\n  digitalWrite(PIN_LED3, HIGH);\n  delay(1000);\n  digitalWrite(LED_BUILTIN, LOW);\n  digitalWrite(PIN_LED2, LOW);\n  digitalWrite(PIN_LED3, LOW);\n  delay(1000);\n}\n")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("h3",{id:"serial-over-usb-cdc"},"Serial over USB CDC"),(0,i.kt)("p",null,"Unlike the ATmega type Arduino, the actual state of serial communication of Seeed Studio XIAO SAMD21 is USB CDC. In other words, it can perform faster than normal serial communication."),(0,i.kt)("p",null,"Therefore, specifying the baud rate by ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial.begin (speed)")," does not make sense, but except for that, it can be used as normal serial."),(0,i.kt)("h3",{id:"measuring-speed"},"Measuring Speed"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"I used ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/nanase/6cc57e14a572196baefd893ade67d32e"},"this sketch")," to measure the transfer speed from Seeed Studio XIAO SAMD21 to PC, and the transfer rate from the PC to Seeed Studio XIAO SAMD21 should be the same."),(0,i.kt)("p",null,"The horizontal axis is the buffer size(send at once using ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial.write (buf, len)"),").\nIf you send 1 byte at a time, you will only get 0.11 Mbps (14.53 KB / s), but if you send 64 bytes, it will be significantly faster at 6.30 Mbps (805.86 KB / s). You can infer that the size of the internal buffer is 64 bytes."),(0,i.kt)("p",null,"As mentioned above, the LED blinks in serial communication, but there was almost no decrease in speed due to this."),(0,i.kt)("h3",{id:"spi-microsd-card"},"SPI (MicroSD Card)"),(0,i.kt)("p",null,"Seeed Studio XIAO SAMD21 has a logic level of 3.3V. In other words, microSD card can be handled via SPI without a level shifter.\nSome function of SPI is different from that of ATmega type Arduino, please check ",(0,i.kt)("a",{parentName:"p",href:"https://qiita.com/nanase/items/406a8a848d1b259d3af4"},"here")," for more information."),(0,i.kt)("p",null,"Here we will read the microSD card using Akizuki Denshi's ",(0,i.kt)("a",{parentName:"p",href:"http://akizukidenshi.com/catalog/g/gK-05488/"},"micro SD card slot DIP kit"),"."),(0,i.kt)("p",null,"We use the Arduino sample code here, but the parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"SD.begin (cs_pin)")," is specified as ",(0,i.kt)("inlineCode",{parentName:"p"},"SS"),". According to variant.h, SS = 4, which is the same as D4 / A4 / SDA pins. Of course, you can specify other pins."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd",alt:"pir",width:600,height:"auto"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SPI.h>\n#include <SD.h>\n\nFile myFile;\n\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial) ;\n\n  Serial.print("Initializing SD card... ");\n\n  if (!SD.begin(SS)) { // <-------------------------------- SS = D4/A4/SDA pin\n    Serial.println("initialization failed!");\n    while (1) ;\n  }\n  Serial.println("initialization done.");\n\n  myFile = SD.open("test.txt", FILE_WRITE);\n\n  if (myFile) {\n    Serial.print("Writing to test.txt...");\n    myFile.println("testing 1, 2, 3.");\n\n    myFile.close();\n    Serial.println("done.");\n  }\n  else\n    Serial.println("error opening test.txt");\n\n  myFile = SD.open("test.txt");\n  if (myFile) {\n    Serial.println("test.txt:");\n\n    while (myFile.available())\n      Serial.write(myFile.read());\n\n    myFile.close();\n  }\n  else\n    Serial.println("error opening test.txt");\n}\n\nvoid loop() { }\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Initializing SD card...initialization done.\nWriting to test.txt...done.\ntest.txt:\ntesting 1, 2, 3.\n")),(0,i.kt)("h3",{id:"i2c"},"I2C"),(0,i.kt)("p",null,"I2C is also available. 3.3V devices can be directly connected without a level shifter."),(0,i.kt)("p",null,"This time, we used BME280 to measure temperature and humidity and atmospheric pressure. The BME280 operates at 3.3V, so it can be connected without a level shifter. Check ",(0,i.kt)("a",{parentName:"p",href:"https://qiita.com/nanase/items/f34e03c29410add9c4d0"},"here")," for detailed instrcution of the connection between Arduino and BME280."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c",alt:"pir",width:600,height:"auto"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Wire.h>\n#include "SparkFunBME280.h"\n\nBME280 sensor;\n\nvoid setup() {\n  Serial.begin(9600);\n  Wire.begin();\n  sensor.beginI2C(); // Wire \u3092\u7528\u3044\u3066 I2C \u63a5\u7d9a\u958b\u59cb\n}\n\nvoid loop() {\n  Serial.print("Temp: ");\n  Serial.print(sensor.readTempC(), 2);\n\n  Serial.print(" \xb0C, Humidity: ");\n  Serial.print(sensor.readFloatHumidity(), 2);\n\n  Serial.print(" %, Pressure: ");\n  Serial.print(sensor.readFloatPressure() / 100.0, 1);\n  Serial.println(" hPa");\n\n  delay(5000);\n}\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Temp: 22.05 \xb0C, Humidity: 44.99 %, Pressure: 1009.0 hPa\nTemp: 22.05 \xb0C, Humidity: 44.72 %, Pressure: 1008.9 hPa\nTemp: 22.06 \xb0C, Humidity: 44.81 %, Pressure: 1008.9 hPa\n")),(0,i.kt)("h2",{id:"uart"},"UART"),(0,i.kt)("p",null,"As mentioned earlier, the physical UART pins are different from those on the USB CDC. ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial1")," is used for serial communication using the TX and RX pins."),(0,i.kt)("p",null,"This time, we connect Seeed Studio XIAO SAMD21 to the GPS receiver kit and get NMEA information from the PC. It is a very simple job when using Xiao, which is just a bridge between gps kit and pc serial."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a",alt:"pir",width:600,height:"auto"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  Serial.begin(9600);\n  Serial1.begin(9600);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char c = (char)Serial.read();\n    Serial1.write(c);\n  }\n\n  if (Serial1.available()) {\n    char c = (char)Serial1.read();\n    Serial.write(c);\n  }\n}\n")),(0,i.kt)("p",null,"This time we use GPSFox to browse NMEA information. The coordinates can be measured easily."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"others"},"Others"),(0,i.kt)("h3",{id:"dma"},"DMA"),(0,i.kt)("p",null,"As one of the features of SAMD type Arduino, you can use DMA on Xiao. Check ",(0,i.kt)("a",{parentName:"p",href:"https://qiita.com/nanase/items/406a8a848d1b259d3af4#dma"},"here")," for more information about DMA."),(0,i.kt)("h3",{id:"single-cycle-iobus"},"Single Cycle IOBUS"),(0,i.kt)("p",null,"Cortex M0+ has a function called ",(0,i.kt)("a",{parentName:"p",href:"https://microchipdeveloper.com/32arm:samd21-iobus-overview"},"Single Cycle IOBUS")," that can operate GPIO output in one clock cycle. Writing to a specific register can invert the logic, disable the pin, or change the pin drive current."),(0,i.kt)("h3",{id:"digitalwrite"},"DigitalWrite"),(0,i.kt)("p",null,"You can use digitalWrite to create a pulse, which is a method that works with any Arduino board - just repeating the overhead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  pinMode(PIN_A7, OUTPUT);\n}\n\n#define P                     \\\n  digitalWrite(PIN_A7, HIGH); \\\n  digitalWrite(PIN_A7, LOW);\n\n#define W P P P P P P P P P P P P P P P P\nvoid loop() { W W W W W W W W W W W W W W W W }\n")),(0,i.kt)("h3",{id:"use-registers"},"Use Registers"),(0,i.kt)("p",null,"You can also create a pulse by directly operating the register without using ",(0,i.kt)("inlineCode",{parentName:"p"},"digitalWrite"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  pinMode(PIN_A7, OUTPUT);\n}\n\n#define P                                                             \\\n  digitalPinToPort(PIN_A7)->OUTSET.reg = digitalPinToBitMask(PIN_A7); \\\n  digitalPinToPort(PIN_A7)->OUTCLR.reg = digitalPinToBitMask(PIN_A7);\n\n#define W P P P P P P P P P P P P P P P P\nvoid loop() { W W W W W W W W W W W W W W W W }\n")),(0,i.kt)("h3",{id:"use-single-cycle-iobus"},"Use Single Cycle IOBUS"),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"IOBUS.h")," introduced ",(0,i.kt)("a",{parentName:"p",href:"https://lab.sasapea.mydns.jp/2020/03/16/seeeduino-xiao/"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "IOBUS.h"\n\n#define digitalPinToIOPin(P) ((g_APinDescription[P].ulPort << 5) + g_APinDescription[P].ulPin)\n#define PIN_NUM digitalPinToIOPin(PIN_A7)\n\nvoid setup() {\n  IOBUS::pinMode(PIN_NUM, OUTPUT, true);\n}\n\n#define P IOBUS::toggleOutput(PIN_NUM);\n\n#define W P P P P P P P P P P P P P P P P\nvoid loop() { W W W W W W W W W W W W W W W W }\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"DigitalWrite"),(0,i.kt)("th",{parentName:"tr",align:null},"Registers"),(0,i.kt)("th",{parentName:"tr",align:null},"Single Cycle IOBUS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Waveform"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a269f4e-5bd0-8eb4-127e-14b8d239a6a3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=7099c88e5d117efd215ba24fefa7448b",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F84a04db3-c854-8862-d253-6ff8fc94aa8f.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d20b7a169be510b3f73e0bea1c97f2bf",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F4358d74f-285c-6d16-1cc3-809946c42125.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d2e46ad06befc79f8b897fc538f1de89",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"frequency"),(0,i.kt)("td",{parentName:"tr",align:null},"333 kHz"),(0,i.kt)("td",{parentName:"tr",align:null},"6 MHz"),(0,i.kt)("td",{parentName:"tr",align:null},"24 MHz")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Number of clock cycles needed to create a pulse"),(0,i.kt)("td",{parentName:"tr",align:null},"144"),(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"2")))),(0,i.kt)("p",null,"The logic can be certainly reversed in one cycle (48MHz)."),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);