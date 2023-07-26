"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||n;return a?i.createElement(h,r(r({ref:t},u),{},{components:a})):i.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<n;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=a(87462),o=(a(67294),a(3905));const n={description:"Xadow - GPS",title:"Xadow - GPS",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_GPS",last_update:{date:"1/13/2023",author:"shuxu hu"}},r=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_GPS",id:"Seeed_Elderly/Xadow/Xadow_GPS",title:"Xadow - GPS",description:"Xadow - GPS",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_GPS.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_GPS",permalink:"/Xadow_GPS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_GPS.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Xadow - GPS",title:"Xadow - GPS",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_GPS",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Edison Kit",permalink:"/Xadow_Edison_Kit"},next:{title:"Xadow - GPS V2",permalink:"/Xadow_GPS_V2"}},s={},d=[{value:"Specifications",id:"specifications",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GPS/img/Xadow_gps.jpg",alt:null})),(0,o.kt)("p",null,"Xadow GPS is an OEM GNSS receiver module, including the Fastrax IT530M and a tiny 12mm squared ceramic patch antenna. The low power module outputs a series of standard NMEA format data which provides position, satellite information and time, etc. This module can be easily connected directly to Xadow Main board to display and record the above-mentioned information. It features acquisition and tracking capability of weak signals, making it a great choice for navigation projects."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-GPS-p-1600.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Working voltage: 5.0 VDC"),(0,o.kt)("li",{parentName:"ul"},"Channels: 99/33 (search/track)"),(0,o.kt)("li",{parentName:"ul"},"Navigation sensitivity: -165dBm"),(0,o.kt)("li",{parentName:"ul"},"Tracking sensitivity: -148 dBm"),(0,o.kt)("li",{parentName:"ul"},"Time to First Fix(cold acq): 23s"),(0,o.kt)("li",{parentName:"ul"},"Time to First Fix(warm acq): 23s"),(0,o.kt)("li",{parentName:"ul"},"Time to First Fix (hot acq): 1s"),(0,o.kt)("li",{parentName:"ul"},"Update rate: 1 Hz (configurable up to 10 Hz)"),(0,o.kt)("li",{parentName:"ul"},"Data protocol: NMEA-0183 rev. 3.01"),(0,o.kt)("li",{parentName:"ul"},"Communication Mode: UART"),(0,o.kt)("li",{parentName:"ul"},"Default baud rate: 115200 b/s"),(0,o.kt)("li",{parentName:"ul"},"Operating temperature: -40\xb0C ~+85\xb0C"),(0,o.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"There is an example showing how to read data from the GPS using software serial and sends it back out on the serial port."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GPS/img/IMG_4200.JPG",alt:null})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When connect Xadow GPS to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#define SerialBaud   9600\n#define Serial1Baud  9600\nvoid setup()\n{\n    Serial.begin(SerialBaud);\n    Serial1.begin(Serial1Baud);\n}\n\nvoid loop()\n{\n    for(;;)\n    {\n        // copy from virtual serial line to uart and vice versa\n   /*\n    */\n        if (Serial.available())\n        {\n            Serial1.write(Serial.read());\n        }\n        if (Serial1.available())\n        {\n            Serial.write(Serial1.read());\n        }\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the serial monitor, you can see:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_serial_monitor.jpg",alt:null})),(0,o.kt)("p",null,"There is all the information about NMEA 0183 communication protocol. In fact, we only need to pick out the locate data, others can be ignored. The $GPRMC data is useful for us, Now let\u2019s analysis its detail meaning:"),(0,o.kt)("p",null,"$GPRMC,091308.000,A,2235.1683,N,11356.3607,E,0.37,259.79,050813,,,A*6E"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"091308.000\uff0d\uff0dmeans Greenwich Mean Time (the standard world time) 09:13:8 am. Standard - time in Beijing is eight hours ahead of Greenwich Mean Time, so Beijing Time is 5:13 pm."),(0,o.kt)("li",{parentName:"ul"},"A\uff0d\uff0dmeans the data is valid, If the letter is V, which means $GPRMC data is valid."),(0,o.kt)("li",{parentName:"ul"},"2235.1683,N\uff0d\uff0dLatitude 22.351683 degrees."),(0,o.kt)("li",{parentName:"ul"},"11356.3607,E\uff0d\uff0deast longitude 113.563607 degrees."),(0,o.kt)("li",{parentName:"ul"},"0.37 -- means motion rate."),(0,o.kt)("li",{parentName:"ul"},"259.79\uff0d\uff0dmeans motion direction. the north is 0 degrees, east is 90 degrees, south is 180 degrees, west is 270 degrees."),(0,o.kt)("li",{parentName:"ul"},"050813\uff0d\uff0dmeans August 5, 2013.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We can also observe this data using u-center.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://www.u-blox.com/en/product/u-center-windows"},"u-center")," and install it on your computer."),(0,o.kt)("li",{parentName:"ul"},"Click Receiver - > Port and select the COM port that the Xadow Main Board is using. If you are opening serial monitor of Arduino IDE, please close it."),(0,o.kt)("li",{parentName:"ul"},"Click Receiver -> Baudrate and make sure 9600 is selected."),(0,o.kt)("li",{parentName:"ul"},"Click View -> Text Console and you should get a window that will stream NMEA data as show below.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GPS/img/Read_data_from_u-_center.jpg",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The right part in the picture above is Satellite Position, World Position, Compass, Watch. You can click View -> Docking Windows and select the windows you want to see.")),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_Eagle_File.zip"},"Xadow GPS Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_GPS/res/Xadow_GPS_in_Schematic.pdf"},"Xadow GPS Schematic in PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_GPS/res/IT530M_DataSheet.pdf"},"Fastrax IT530M Datasheet"))),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);