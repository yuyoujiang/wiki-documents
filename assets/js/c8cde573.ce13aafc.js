"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26313],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={description:"Grove - SPDT Relay(30A)",title:"Grove - SPDT Relay(30A)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-SPDT_Relay_30A",last_update:{date:"1/10/2023",author:"jianjing Huang"}},l=void 0,i={unversionedId:"Sensor/Grove/Grove_Accessories/Current/Grove-SPDT_Relay_30A",id:"Sensor/Grove/Grove_Accessories/Current/Grove-SPDT_Relay_30A",title:"Grove - SPDT Relay(30A)",description:"Grove - SPDT Relay(30A)",source:"@site/docs/Sensor/Grove/Grove_Accessories/Current/Grove-SPDT_Relay_30A.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Current",slug:"/Grove-SPDT_Relay_30A",permalink:"/Grove-SPDT_Relay_30A",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Current/Grove-SPDT_Relay_30A.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:167328e4,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{description:"Grove - SPDT Relay(30A)",title:"Grove - SPDT Relay(30A)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-SPDT_Relay_30A",last_update:{date:"1/10/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - MOSFET",permalink:"/Grove-MOSFET"},next:{title:"Grove - Screw Terminal",permalink:"/Grove-Screw_Terminal"}},s={},u=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Usage",id:"usage",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay_01.jpg"})),(0,a.kt)("p",null,"The SPDT Relay(30A) is a high quality Single Pole Double Throw Relay(SPDT).The Relay consists of a coil, 1 common terminal, 1 normally closed terminal, and one normally open terminal. When the coil of the relay is at rest (not energized), the common terminal and the normally closed terminal have continuity. When the coil is energized, the common terminal and the normally open terminal have continuity. This relay's coil is rated up to 5V and the contact is rated up to 30A (@250VAC, 30VDC).You can use it to control high current devices."),(0,a.kt)("h2",{id:"feature"},"Feature"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"High Switching Current"),(0,a.kt)("li",{parentName:"ul"},"SPDT Relay"),(0,a.kt)("li",{parentName:"ul"},"Normally closed relay")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"  More details about Grove modules please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("hr",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"working Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"4.75"),(0,a.kt)("td",{parentName:"tr",align:null},"5.0"),(0,a.kt)("td",{parentName:"tr",align:null},"5.25"),(0,a.kt)("td",{parentName:"tr",align:null},"VDC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Current"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"185"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pull-In Voltage(Max)"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"3.75"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"VDC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operation Time(Max)"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Release Time(Max)"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Ambient Temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"-25"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"70"),(0,a.kt)("td",{parentName:"tr",align:null},"\xb0C")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"With Arduino")),(0,a.kt)("p",null,'Why do we want to use a relay and do we really need to? Anytime you want to switch on/off a device which draws more current or works with a high voltage, you\'ll need to use a relay. That is to say, the relay is "a high voltage or current switch controlled by low voltage". The coil of an SPDT relay that we most commonly use draws very little current (the ',(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Relay/"},"Grove - Relay"),"supports 10A). Now, with this 30A relay, you can control much more high-current switch devices such as headlights, parking lights, horns, etc."),(0,a.kt)("p",null,"The SPDT Relay internal structure:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/Relay_Struction.jpg"})),(0,a.kt)("p",null,"You may see that the common terminal and the normally closed terminal have continuity When the coil of the relay is at rest."),(0,a.kt)("p",null,"But when the coil is energized, the common terminal and the normally open terminal will have continuity."),(0,a.kt)("p",null,"Hardware Installation can refer to the following picture:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/img/SPDT_Relay.jpg"})),(0,a.kt)("p",null,"The coding to control this relay is the same as the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Relay/"},"Grove - Relay")),(0,a.kt)("p",null,"Good luck to you for controlling your air-condition or washing machine, with Arduino and the Grove - SPDT Relay(30A)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"With Raspberry Pi")),(0,a.kt)("p",null,"1.You should have got a raspberry pi and a grovepi or grovepi+."),(0,a.kt)("p",null,"2.You should have completed configuring the development enviroment, otherwise follow ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/GrovePi_Plus#Introducing_the_GrovePi.2B"},"here"),"."),(0,a.kt)("p",null,"3.Connection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plug the sensor to grovepi socket D4 by using a grove cable.")),(0,a.kt)("p",null,"4.Navigate to the demos' directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   cd yourpath/GrovePi/Software/Python/\n")),(0,a.kt)("p",null,"To see the code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   nano grove_spdt_relay.py   # "Ctrl+x" to exit #\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import time\nimport grovepi\n\n# Connect the Grove SPDT Relay to digital port D4\n# SIG,NC,VCC,GND\nrelay = 4\n\ngrovepi.pinMode(relay,"OUTPUT")\n\nwhile True:\n    try:\n        # switch on for 5 seconds\n        grovepi.digitalWrite(relay,1)\n        print "on"\n        time.sleep(5)\n\n        # switch off for 5 seconds\n        grovepi.digitalWrite(relay,0)\n        print "off"\n        time.sleep(5)\n\n    except KeyboardInterrupt:\n        grovepi.digitalWrite(relay,0)\n        break\n    except IOError:\n        print "Error"\n')),(0,a.kt)("p",null,"5.Run the demo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   sudo python grove_spdt_relay.py\n")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/Grove_-_SPDT_Relay(30A)_Eagle_File.zip"},"Grove - SPDT Relay(30A) Eagle File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-SPDT_Relay_30A/res/SLA-05VDC-SL-C_Datasheet.pdf"},"SLA-05VDC-SL-C Datasheet"))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);