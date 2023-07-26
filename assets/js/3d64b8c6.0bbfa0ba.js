"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"TBD",title:"Grove - VOC Gas Sensor (SGP40)",keywords:["Grove","SGP40"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_voc_gas_sensor_sgp40",last_update:{date:"6/6/2023",author:"Stephen Lo"}},o="Grove - VOC Gas Sensor (SGP40)",s={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-VOC_Gas_Sensor-SGP40",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-VOC_Gas_Sensor-SGP40",title:"Grove - VOC Gas Sensor (SGP40)",description:"TBD",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-VOC_Gas_Sensor-SGP40.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/grove_voc_gas_sensor_sgp40",permalink:"/grove_voc_gas_sensor_sgp40",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-VOC_Gas_Sensor-SGP40.md",tags:[],version:"current",lastUpdatedBy:"Stephen Lo",lastUpdatedAt:1685980800,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{description:"TBD",title:"Grove - VOC Gas Sensor (SGP40)",keywords:["Grove","SGP40"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_voc_gas_sensor_sgp40",last_update:{date:"6/6/2023",author:"Stephen Lo"}},sidebar:"ProductSidebar",previous:{title:"Grove-VOC and eCO2 Gas Sensor(SGP30)",permalink:"/Grove-VOC_and_eCO2_Gas_Sensor-SGP30"},next:{title:"Grove - HCHO Sensor",permalink:"/Grove-HCHO_Sensor"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grove---voc-gas-sensor-sgp40"},"Grove - VOC Gas Sensor (SGP40)"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg",alt:"pir",width:500,height:"auto"})),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("br",null),(0,a.kt)("p",null,"The Grove - VOC Gas Sensor (SGP40) is an innovative environmental sensing module developed for a wide array of Volatile Organic Compound (VOC) detection applications. Based on the advanced Sensirion SGP40 sensor, it excels in transforming raw sensor signals into standardized digital signals for seamless integration into existing systems."),(0,a.kt)("p",null,"With its capability to perform high-quality VOC measurements in real-time, this sensor module provides a versatile solution for tracking and monitoring indoor air quality. Given the increasing awareness and need for monitoring air quality due to its direct correlation with health, the Grove - VOC Gas Sensor (SGP40) can be an essential component of systems targeted towards improving indoor air quality, personal environment monitoring, HVAC systems, industrial safety and any application where air quality assessment is pivotal."),(0,a.kt)("p",null,"Its compatibility with the Grove ecosystem facilitates an easy and straightforward setup process. The plug-and-play nature of Grove system allows developers to incorporate this module without needing to handle complicated wiring or intricate coding. This feature can significantly speed up development time and allows users to focus more on data interpretation and action steps based on the VOC measurements."),(0,a.kt)("p",null,"One of the key advantages of the Grove - VOC Gas Sensor (SGP40) is its communication protocol. The sensor module uses the I2C interface, a widely adopted protocol known for its simplicity and efficiency. This makes the data transfer process between the sensor and your main controller extremely smooth, enabling quick reaction times for applications where immediate actions based on VOC levels are crucial."),(0,a.kt)("p",null,"In sum, the Grove - VOC Gas Sensor (SGP40) is a compact, powerful, and easy-to-integrate module that makes the challenging task of VOC detection simpler and more accessible, opening doors for innovations and developments in environmental applications."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Utilizes the Sensirion SGP40 sensor for reliable VOC detection."),(0,a.kt)("li",{parentName:"ul"},"Easy integration into the Grove ecosystem, simplifying the wiring and coding process."),(0,a.kt)("li",{parentName:"ul"},"Provides real-time VOC measurements for accurate air quality assessment."),(0,a.kt)("li",{parentName:"ul"},"Communicates via I2C interface, allowing for efficient data transfer."),(0,a.kt)("li",{parentName:"ul"},"Compact and modular design, perfect for embedding in various applications.")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Operating Voltage: 3.3/5V"),(0,a.kt)("li",{parentName:"ul"},"Interface: I2C"),(0,a.kt)("li",{parentName:"ul"},"Dimensions: 20x40mm")),(0,a.kt)("h2",{id:"applications"},"Applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Indoor air quality monitoring system: The Grove - VOC Gas Sensor can be used in buildings to monitor the air quality and ensure a healthy living or working environment."),(0,a.kt)("li",{parentName:"ul"},"Personal environment monitoring device: The sensor can be used to create a portable device that allows individuals to monitor the air quality in their immediate environment."),(0,a.kt)("li",{parentName:"ul"},"HVAC systems: The sensor can help regulate air quality in heating, ventilation, and air conditioning systems."),(0,a.kt)("li",{parentName:"ul"},"Industrial safety: It can be used in factories and industrial sites to ensure worker safety by detecting harmful VOC levels.")),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("h3",{id:"pin-map"},"Pin Map"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_SGP40/pinmap.png",alt:"pir",width:500,height:"auto"})),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Materials required")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - VOC Gas Sensor (SGP40)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:250,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:250,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg",alt:"pir",width:250,height:"auto"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html",target:"_blank"},"Get One Now"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"1.")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"2.")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - VOC Gas Sensor (SGP40) to ",(0,a.kt)("strong",{parentName:"p"},"I2C")," port  of Grove-Base Shield.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove - Smart Air Quality Sensor (SGP41) to Seeeduino as below.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - VOC Gas Sensor (SGP40)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SDA"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SCL"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/arduino-i2c-sgp40"},"SGP40 Arduino Library")," from Github.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," After downloading and installing the library correctly, you can find an example program named ",(0,a.kt)("inlineCode",{parentName:"p"},"exampleUsage.ino")," in the examples folder. This program is designed for the SGP40 sensor."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <SensirionI2CSgp40.h>\n#include <Wire.h>\n\nSensirionI2CSgp40 sgp40;\n\nvoid setup() {\n\n    Serial.begin(115200);\n    while (!Serial) {\n        delay(100);\n    }\n\n    Wire.begin();\n\n    uint16_t error;\n    char errorMessage[256];\n\n    sgp40.begin(Wire);\n\n    uint16_t serialNumber[3];\n    uint8_t serialNumberSize = 3;\n\n    error = sgp40.getSerialNumber(serialNumber, serialNumberSize);\n\n    if (error) {\n        Serial.print("Error trying to execute getSerialNumber(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("SerialNumber:");\n        Serial.print("0x");\n        for (size_t i = 0; i < serialNumberSize; i++) {\n            uint16_t value = serialNumber[i];\n            Serial.print(value < 4096 ? "0" : "");\n            Serial.print(value < 256 ? "0" : "");\n            Serial.print(value < 16 ? "0" : "");\n            Serial.print(value, HEX);\n        }\n        Serial.println();\n    }\n\n    uint16_t testResult;\n    error = sgp40.executeSelfTest(testResult);\n    if (error) {\n        Serial.print("Error trying to execute executeSelfTest(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else if (testResult != 0xD400) {\n        Serial.print("executeSelfTest failed with error: ");\n        Serial.println(testResult);\n    }\n}\n\nvoid loop() {\n    uint16_t error;\n    char errorMessage[256];\n    uint16_t defaultRh = 0x8000;\n    uint16_t defaultT = 0x6666;\n    uint16_t srawVoc = 0;\n\n    delay(1000);\n\n    error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);\n    if (error) {\n        Serial.print("Error trying to execute measureRawSignal(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("SRAW_VOC:");\n        Serial.println(srawVoc);\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,a.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,a.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the result."))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_SGP40/result.png",alt:"pir",width:800,height:"auto"})),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).zip"},"Grove - VOC Gas Sensor (SGP40) SCH&PCB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_SGP40/Sensirion_Gas_Sensors_Datasheet_SGP40.pdf"},"SGP40 Datasheet"))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);