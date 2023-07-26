"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.createContext({}),s=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||r;return n?l.createElement(m,i(i({ref:t},p),{},{components:n})):l.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(87462),a=(n(67294),n(3905));const r={description:"Relay Shield V2.0",title:"Relay Shield V2.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Relay_Shield_V2",last_update:{date:"2/16/2023",author:"jianjing Huang"}},i=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Relay_Shield_V2",id:"Top_Brand/Arduino/shield/Relay_Shield_V2",title:"Relay Shield V2.0",description:"Relay Shield V2.0",source:"@site/docs/Top_Brand/Arduino/shield/Relay_Shield_V2.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Relay_Shield_V2",permalink:"/Relay_Shield_V2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Relay_Shield_V2.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676476800,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Relay Shield V2.0",title:"Relay Shield V2.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Relay_Shield_V2",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Relay Shield V1.0",permalink:"/Relay_Shield_V1"},next:{title:"SD Card Shield",permalink:"/SD_Card_Shield"}},d={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Shield Interface Description",id:"shield-interface-description",level:2},{value:"How Relay works",id:"how-relay-works",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Example #1: DC Motor Control",id:"example-1-dc-motor-control",level:3},{value:"Example #2: How to Use More Than One Relay Shield With Only One Arduino/Seeeduino Board",id:"example-2-how-to-use-more-than-one-relay-shield-with-only-one-arduinoseeeduino-board",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relayshield_01.jpg",alt:null})),(0,a.kt)("p",null,"The Relay Shield provides a solution for controlling high current devices that cannot be controlled by the Arduino's Digital I/O pins due to their current and voltage limits."),(0,a.kt)("p",null,"The Relay Shield features four high quality relays and provides NO/NC interfaces, four dynamic LED indicators to show the on/off state of each relay, and the standardized shield form factor to provide a smooth connection to the Arduino/Seeeduino board or other Arduino compatible boards."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/relay-shield-v20-p-1376.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:null}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Arudino Uno/Leonardo/Seeeduino compatible; Other board  or microcontroller via jumper cables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Interface via digital I/O pins 4,5,6, and 7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Relay screw terminals")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Standardized shield shape and design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"LED working status indicators for each relay")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"High quality relays")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"COM, NO (Normally Open), and NC (Normally Closed) relay pins for each relay"))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Supply Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"4.75"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"5.25"),(0,a.kt)("td",{parentName:"tr",align:null},"VDC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Working Current"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"250"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Switching Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"35"),(0,a.kt)("td",{parentName:"tr",align:null},"VDC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Switching Current"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Frequency"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"HZ")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Switching Power"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"70"),(0,a.kt)("td",{parentName:"tr",align:null},"W")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Relay Life"),(0,a.kt)("td",{parentName:"tr",align:null},"100,000"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"Cycle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ESD contact discharge"),(0,a.kt)("td",{parentName:"tr",align:null},"\xb14"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"KV")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ESD air discharge"),(0,a.kt)("td",{parentName:"tr",align:null},"\xb18"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"KV")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dimension"),(0,a.kt)("td",{parentName:"tr",align:null},"68.7X53.5X30.8"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Net Weight"),(0,a.kt)("td",{parentName:"tr",align:null},"55\xb12"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"g")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Place 2 layers of electrical tape on the top of the ","[Arduino's]"," usb connector.  This will prevent the relay shield from making contact."),(0,a.kt)("li",{parentName:"ul"},"Do not operate voltage more than 35V DC."))),(0,a.kt)("h2",{id:"shield-interface-description"},"Shield Interface Description"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relays-Shield-PCB-Explained-real.png",alt:null})),(0,a.kt)("p",null,"Relay Shield V2.0 terminal connections description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Digital 4 \u2013 controls RELAY4\u2019s COM4 pin (located in J4)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Digital 5 \u2013 controls RELAY3\u2019s COM3 pin (located in J3)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Digital 6 \u2013 controls RELAY2\u2019s COM2 pin (located in J2)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Digital 7 \u2013 controls RELAY1\u2019s COM1 pin (located in J1)"))),(0,a.kt)("p",null,"J1 Interface/Terminal Pin Description:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"COM1 (Common Pin)\xa0:"),"  The relay pin controlled from the digital pin.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NC1 (Normally Closed):")," This terminal will be connected to COM1 when the RELAY1 control pin (Digital 7 I/O pin) is set low and disconnected when the RELAY1 control pin is set high.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NO1 (Normally Open):")," This terminal will be connected to COM1 when the RELAY1 control pin (Digital 7 I/O pin) is set high and disconnected when the RELAY1 control pin is set low."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Terminals J2-4 are similar to J1 except that they control RELAY2-RELAY4 respectively.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Only four Arduino Digital I/O pins, pins 4-7, are required to control the four different relays. Additionally the 5V and two GND Arduino pins are also required to power up the Relay Shield."),(0,a.kt)("h2",{id:"how-relay-works"},"How Relay works"),(0,a.kt)("p",null,"Relays are basically electromagnetic switches: when the relay is energized by the control circuit (i.e. when a voltage and current is applied to the coil), the current and coil create a magnetic field which is able to attract the COM terminal towards the NO terminal, when the control circuit removes the applied voltage and current the COM terminal returns to contact the NC terminal due to a mechanical force (usually a spring)."),(0,a.kt)("p",null,"Some practical relay applications include: control of high voltage using low voltage, motor control, remote control, anti-hearing alarm, automatic temperature alarm, incubators and son on."),(0,a.kt)("p",null,"A motor control application with one relay and one motor is shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Low_Level_Control4.jpg",alt:null}),"\nThe motor is not currently running since there is no connection from the power supply to the motor. The control circuit is not energizing the relay, so the COM terminal is not attracted to the NO terminal"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/High_Level_Control3.jpg",alt:null}),"\nThe motor is running since it is contact with the power supply's + and - terminals. The control circuit is energizing the relay and its magnetic force has attracted the COM terminal to the NO terminal."),(0,a.kt)("p",null,"In the case of the Relay Shield, the two \u201cControl Circuit\u201d terminals for each of the four relays are controlled by only one Arduino Digital I/O pin. Pins 4, 5, 6, and 7 control relays 4, 3, 2, and 1 respectively."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Now that you know how a relay works internally, let us show you how to use the Relay Shield."),(0,a.kt)("h3",{id:"example-1-dc-motor-control"},"Example #1: DC Motor Control"),(0,a.kt)("p",null,"1.Stack the Relay Shield onto the Arduino development board."),(0,a.kt)("p",null,"2.Connect the Arduino to the PC using a USB cable."),(0,a.kt)("p",null,"3.We will use RELAY3 to control the DC motor. Connect the DC motor and Relay Shield as shown in the schematic and figure below:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Motor-shield-schematic-drawing.png",alt:null}),"\nMotor and Relay Shield schematic"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Relay_Shield_Connector.jpg",alt:null}),"\nArduino board with Relay Shield, and a motor connected to the Relay Shield"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The external power supply in the figure above can be a battery or power supply. The external supply must be able to provide enough current and be set to the correct voltage for the motor. In our testing, we used a lithium battery as the external power supply for the motor."),(0,a.kt)("p",null,"4.Start the Arduino IDE and upload the following code to the Arduino board:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"int MotorControl = 5;    // Digital Arduino Pin used to control the motor\n\n// the setup routine runs once when you press reset:\nvoid setup()  {\n    // declare pin 5 to be an output:\n    pinMode(MotorControl, OUTPUT);\n}\n\n// the loop routine runs over and over again forever:\nvoid loop()  {\n    digitalWrite(MotorControl,HIGH);// NO3 and COM3 Connected (the motor is running)\n    delay(1000); // wait 1000 milliseconds (1 second)\n    digitalWrite(MotorControl,LOW);// NO3 and COM3 Disconnected (the motor is not running)\n    delay(1000); // wait 1000 milliseconds (1 second)\n}\n")),(0,a.kt)("p",null,"When you have uploaded the code to your Arduino/Seeeduino board the motor should run one second, stop for another second and repeat the process indefinitely. When the motor is running (NO3 and COM3 are connected), the NO3 LED indicator will be lit."),(0,a.kt)("h3",{id:"example-2-how-to-use-more-than-one-relay-shield-with-only-one-arduinoseeeduino-board"},"Example #2: How to Use More Than One Relay Shield With Only One Arduino/Seeeduino Board"),(0,a.kt)("p",null,"Because the Relay Shield uses digital pins on the Arduino to control each the relays, more than one Relay Shield can be used with the same Arduino board, to do so simply follow these steps:"),(0,a.kt)("p",null,"1.Stack one of the Relay Shields (let\u2019s call this one Relay Shield #1) onto the Arduino development board"),(0,a.kt)("p",null,"2.Connect another Relay Shield (let\u2019s call this one Relay Shield #2) using jumper cables/wires to Relay Shield #1 as shown in the figure below:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/img/Two-relay-shields-one-arduino.png",alt:null}),"\nDouble Relay Shield with only one Arduino board schematic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Relay Shield #1 GND pins are connected to Relay Shield #2 GND pins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Relay Shield #1 5V pin is connected to Relay Shield #2 5V pin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Relay Shield #1 Digital Pins 8, 9, 10, and 11, are connected to Relay Shield #2 Digital Pins 7, 6, 5, and 4 respectively."))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Now you can control relays 1, 2, 3, and 4 in Relay Shield #2 using the Arduino\u2019s 8, 9, 10, and 11 digital I/O pins. See sample code below for controlling RELAY1 in Relay Shield #2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int relay1inShield2 =8;// Digital Arduino Pin 8 is used to control relay 1 in Relay Shield #2\n\n//the setup routine runs once when you press reset:\nvoidsetup(){\npinMode(relay1inShield2, OUTPUT);// declare pin 8 to be an output:\n}\n\n// the loop routine runs over and over again forever:\nvoidloop(){\ndigitalWrite(relay1inShield2,HIGH); // relay is energized (NO is connected to COM)\ndelay(1000);// wait 1000 milliseconds (1 second)\ndigitalWrite(relay1inShield2,LOW); // NO is disconnected from COM\ndelay(1000); // wait 1000 milliseconds (1 second)}\n")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay_Shield_eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[EAGLE]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay_Shield_eagle.zip"},"Relay Shield EagleCAD Files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay%20shield%20PCB.pdf"},"Relay shield PCB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V2.0/res/Relay%20shield%20sch.pdf"},"Relay shield sch"))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);