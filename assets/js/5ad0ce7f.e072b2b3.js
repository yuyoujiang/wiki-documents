"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={description:"Getting Started with Grove D7S Vibration Sensor",title:"Grove - D7S Vibration Sensor",keywords:["Grove","vibration"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove-d7s-vibration-sensor",last_update:{date:"6/6/2023",author:"Stephen Lo"}},o="Grove - D7S Vibration Sensor",s={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-D7S-Vibration-Sensor",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-D7S-Vibration-Sensor",title:"Grove - D7S Vibration Sensor",description:"Getting Started with Grove D7S Vibration Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-D7S-Vibration-Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/grove-d7s-vibration-sensor",permalink:"/grove-d7s-vibration-sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-D7S-Vibration-Sensor.md",tags:[],version:"current",lastUpdatedBy:"Stephen Lo",lastUpdatedAt:1685980800,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{description:"Getting Started with Grove D7S Vibration Sensor",title:"Grove - D7S Vibration Sensor",keywords:["Grove","vibration"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove-d7s-vibration-sensor",last_update:{date:"6/6/2023",author:"Stephen Lo"}},sidebar:"ProductSidebar",previous:{title:"Grove - Integrated Pressure Sensor Kit",permalink:"/Grove-Integrated-Pressure-Sensor-Kit"},next:{title:"Sensor - Accelerometer",permalink:"/Sensor_accelerometer"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:3},{value:"Specification",id:"specification",level:3},{value:"In the Box",id:"in-the-box",level:3},{value:"Applications",id:"applications",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q1: Can the Grove - D7S Vibration Sensor detect all types of earthquakes?",id:"q1-can-the-grove---d7s-vibration-sensor-detect-all-types-of-earthquakes",level:3},{value:"Q2: Can I use the Grove - D7S Vibration Sensor with other development boards apart from Arduino?",id:"q2-can-i-use-the-grove---d7s-vibration-sensor-with-other-development-boards-apart-from-arduino",level:3},{value:"Q3: What is the power requirement for the Grove - D7S Vibration Sensor?",id:"q3-what-is-the-power-requirement-for-the-grove---d7s-vibration-sensor",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grove---d7s-vibration-sensor"},"Grove - D7S Vibration Sensor"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg",alt:"pir",width:500,height:"auto"})),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.kt)("br",null),(0,i.kt)("p",null,"The Grove - D7S Vibration Sensor is a powerful earthquake detection module that provides real-time monitoring of seismic activities. It is based on the advanced D7S module developed by Omron Corporation, a leading manufacturer of sensing technology."),(0,i.kt)("p",null,"Featuring a high-precision three-axis accelerometer and sophisticated earthquake algorithms, the Grove - D7S Vibration Sensor offers accurate and reliable detection of seismic events. It can detect various types of vibrations and classify them based on their severity, providing valuable information for earthquake monitoring and safety applications."),(0,i.kt)("p",null,"Designed with simplicity and versatility in mind, the Grove - D7S Vibration Sensor integrates seamlessly with Grove system, a modular prototyping platform. Its standardized interface allows for easy connection to Arduino boards and other compatible development platforms."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"High-Precision Accelerometer: Equipped with a three-axis accelerometer, the sensor provides accurate measurements of vibrations and seismic activity."),(0,i.kt)("li",{parentName:"ul"},"Real-Time Earthquake Detection: The Grove - D7S Vibration Sensor uses advanced algorithms to detect and classify seismic events in real time. It can differentiate between different magnitudes of earthquakes and provide corresponding alert signals."),(0,i.kt)("li",{parentName:"ul"},"Easy Integration with Grove System: The sensor features a Grove-compatible interface, allowing for easy connection to Arduino boards and other compatible platforms. No complex wiring or soldering is required, making it accessible to users of all skill levels."),(0,i.kt)("li",{parentName:"ul"},"Compact and Robust Design: The Grove - D7S Vibration Sensor has a compact form factor, making it suitable for various applications where space is limited. Its robust construction ensures durability and reliable performance, even in harsh environments."),(0,i.kt)("li",{parentName:"ul"},"Low Power Consumption: The sensor is designed to operate with low power consumption, making it suitable for long-term monitoring applications without draining the power source quickly.")),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chip: D7S"),(0,i.kt)("li",{parentName:"ul"},"Measurement Range: \xb16g"),(0,i.kt)("li",{parentName:"ul"},"Communication interface: I2C"),(0,i.kt)("li",{parentName:"ul"},"Grove connector: 4-pin HY2.0"),(0,i.kt)("li",{parentName:"ul"},"Operating voltage: 3.3/5V")),(0,i.kt)("h3",{id:"in-the-box"},"In the Box"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 x Grove - D7S Vibration Sensor Board"),(0,i.kt)("li",{parentName:"ul"},"1 x Grove Cable(20cm)")),(0,i.kt)("h3",{id:"applications"},"Applications"),(0,i.kt)("p",null,"The Grove - D7S Vibration Sensor can be used in a wide range of applications, including but not limited to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Earthquake Monitoring Systems: Deploying the sensor in buildings, bridges, and critical infrastructure allows for real-time monitoring of seismic activities. It enables early detection and alert systems, contributing to improved safety and disaster response."),(0,i.kt)("li",{parentName:"ul"},"Seismic Research and Analysis: Researchers can utilize the Grove - D7S Vibration Sensor to collect data for seismic studies and analysis. The sensor's high-precision measurements provide valuable insights into earthquake patterns and characteristics."),(0,i.kt)("li",{parentName:"ul"},"Structural Safety Assessment: The sensor can be integrated into structural health monitoring systems to evaluate the integrity and stability of buildings, bridges, and other structures. It helps identify potential structural weaknesses caused by seismic events."),(0,i.kt)("li",{parentName:"ul"},"IoT-based Seismic Monitoring Networks: By deploying multiple Grove - D7S Vibration Sensors in a network, it is possible to create a distributed system for comprehensive seismic monitoring over a larger area. This setup enables efficient data collection and analysis for improved earthquake preparedness.")),(0,i.kt)("p",null,"These are just a few examples of the diverse applications that the Grove - D7S Vibration Sensor enables. Its versatility and high-performance make it a valuable tool in earthquake-related projects."),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("h3",{id:"pin-map"},"Pin Map"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/pinmap.png",alt:"pir",width:500,height:"auto"})),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,i.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,i.kt)("h4",{id:"hardware"},"Hardware"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Materials required")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - D7S Vibration Sensor"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:250,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:250,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg",alt:"pir",width:250,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html",target:"_blank"},"Get One Now"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"1.")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"2.")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - D7S Vibration Sensor to ",(0,i.kt)("strong",{parentName:"p"},"I2C")," port of Grove-Base Shield.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - D7S Vibration Sensor"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3.3/5V"),(0,i.kt)("td",{parentName:"tr",align:null},"Red")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Black")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"White")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/limengdu/d7s-grove-arduino"},"Grove - D7S Vibration Sensor")," from Github.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," After downloading and installing the library correctly, you can find an example program named sample.ino in the examples folder. This program is designed for the D7S module."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <D7S.h>\n\n//old earthquake data\nfloat oldSI = 0;\nfloat oldPGA = 0;\n\n//flag variables to handle collapse/shutoff only one time during an earthquake\nbool shutoffHandled = false;\nbool collapseHandled = false;\n\n//function to handle collapse event\nvoid handleCollapse()\n{\n    //put here the code to handle the collapse event\n    Serial.println("-------------------- COLLAPSE! --------------------");\n}\n\nvoid setup()\n{\n    // Open serial communications and wait for port to open:\n    Serial.begin(9600);\n    while (!Serial)\n    {\n        ; // wait for serial port to connect. Needed for native USB port only\n    }\n\n    Serial.print("Starting D7S communications (it may take some time)...");\n    //start D7S connection\n    D7S.begin();\n    //wait until the D7S is ready\n    while (!D7S.isReady())\n    {\n        Serial.print(".");\n        delay(500);\n    }\n    Serial.println("STARTED");\n\n    //setting the D7S to switch the axis at inizialization time\n    Serial.println("Setting D7S sensor to switch axis at inizialization time.");\n    D7S.setAxis(SWITCH_AT_INSTALLATION);\n\n    Serial.println("Initializing the D7S sensor in 2 seconds. Please keep it steady during the initializing process.");\n    delay(2000);\n    Serial.print("Initializing...");\n    //start the initial installation procedure\n    D7S.initialize();\n    //wait until the D7S is ready (the initializing process is ended)\n    while (!D7S.isReady())\n    {\n        Serial.print(".");\n        delay(500);\n    }\n    Serial.println("INITIALIZED!");\n\n    //check if there there was a collapse (if this is the first time the D7S is put in place the installation data may be wrong)\n    if (D7S.isInCollapse())\n    {\n        handleCollapse();\n    }\n\n    //reset the events shutoff/collapse memorized into the D7S\n    D7S.resetEvents();\n\n    Serial.println("\\nListening for earthquakes!");\n}\n\nvoid loop()\n{\n\n    //checking if there is an earthquake occuring right now\n    if (D7S.isEarthquakeOccuring())\n    {\n\n        //check if the shutoff event has been handled and if the shutoff condition is met\n        //the call of D7S.isInShutoff() is executed after to prevent useless I2C call\n        if (!collapseHandled && D7S.isInCollapse())\n        {\n            handleCollapse();\n            collapseHandled = true;\n        }\n\n        //print information about the current earthquake\n        float currentSI = D7S.getInstantaneusSI();\n        float currentPGA = D7S.getInstantaneusPGA();\n\n        if (currentSI > oldSI || currentPGA > oldPGA)\n        {\n            //getting instantaneus SI\n            Serial.print("\\tInstantaneus SI: ");\n            Serial.print(currentSI);\n            Serial.println(" [m/s]");\n\n            //getting instantaneus PGA\n            Serial.print("\\tInstantaneus PGA (Peak Ground Acceleration): ");\n            Serial.print(currentPGA);\n            Serial.println(" [m/s^2]\\n");\n\n            //save the current data\n            oldSI = currentSI;\n            oldPGA = currentPGA;\n        }\n    }\n    else\n    {\n        //reset the old earthquake data\n        oldPGA = 0;\n        oldSI = 0;\n        //reset the flag of the handled events\n        shutoffHandled = false;\n        collapseHandled = false;\n        //reset D7S events\n        D7S.resetEvents();\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,i.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,i.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". you can generate some vibrations, for example, by tapping the table, and you will obtain the following results."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The initialisation of the sensor takes approximately 3 to 5 minutes.")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/output.png",style:{width:1e3,height:"auto"}})),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"q1-can-the-grove---d7s-vibration-sensor-detect-all-types-of-earthquakes"},"Q1: Can the Grove - D7S Vibration Sensor detect all types of earthquakes?"),(0,i.kt)("p",null,"The Grove - D7S Vibration Sensor is designed to detect a wide range of seismic activities, including both minor and major earthquakes. However, the detection range and sensitivity may vary depending on the magnitude and proximity of the earthquake."),(0,i.kt)("h3",{id:"q2-can-i-use-the-grove---d7s-vibration-sensor-with-other-development-boards-apart-from-arduino"},"Q2: Can I use the Grove - D7S Vibration Sensor with other development boards apart from Arduino?"),(0,i.kt)("p",null,"Yes, the Grove - D7S Vibration Sensor is compatible with other development boards that support the I2C interface. Ensure that you have the necessary libraries and resources available for your chosen platform."),(0,i.kt)("h3",{id:"q3-what-is-the-power-requirement-for-the-grove---d7s-vibration-sensor"},"Q3: What is the power requirement for the Grove - D7S Vibration Sensor?"),(0,i.kt)("p",null,"The sensor can operate at either 3.3V."),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.zip"},"Grove - D7S Vibration Sensor SCH&PCB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/en-d7s-957666.pdf"},"D7S Datasheet"))),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);