"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60155],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(i),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return i?o.createElement(h,a(a({ref:t},p),{},{components:i})):o.createElement(h,a({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<r;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},77150:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(87462),n=(i(67294),i(3905));const r={description:"Get Started with Wio-WM1110 Dev Kit",title:"Get Started",keywords:["Wio-WM1110 Dev Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_Wio-WM1110_Dev_Kit",last_update:{date:"6/27/2023",author:"Jessie"}},a=void 0,l={unversionedId:"Sensor/SenseCAP/Wio-WM1110_Dev_Kit/Get_Started_with_Wio-WM1110_Dev_Kit",id:"Sensor/SenseCAP/Wio-WM1110_Dev_Kit/Get_Started_with_Wio-WM1110_Dev_Kit",title:"Get Started",description:"Get Started with Wio-WM1110 Dev Kit",source:"@site/docs/Sensor/SenseCAP/Wio-WM1110_Dev_Kit/Get_Started_with_Wio-WM1110_Dev_Kit.md",sourceDirName:"Sensor/SenseCAP/Wio-WM1110_Dev_Kit",slug:"/Get_Started_with_Wio-WM1110_Dev_Kit",permalink:"/Get_Started_with_Wio-WM1110_Dev_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/Wio-WM1110_Dev_Kit/Get_Started_with_Wio-WM1110_Dev_Kit.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1687824e3,formattedLastUpdatedAt:"Jun 27, 2023",frontMatter:{description:"Get Started with Wio-WM1110 Dev Kit",title:"Get Started",keywords:["Wio-WM1110 Dev Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_Wio-WM1110_Dev_Kit",last_update:{date:"6/27/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Introduction",permalink:"/Wio-WM1110_Dev_Kit/Introduction"},next:{title:"Hardware Overview",permalink:"/Wio-WM1110_Dev_Kit_Hardware_Overview"}},s={},d=[{value:"Preparation",id:"preparation",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Set up your Toolchain",id:"set-up-your-toolchain",level:2},{value:"SEGGER Embedded Studio (SES)",id:"segger-embedded-studio-ses",level:3},{value:"SEGGER J-Link Software and Documentation Pack",id:"segger-j-link-software-and-documentation-pack",level:3},{value:"nRF5 SDK",id:"nrf5-sdk",level:3},{value:"Seeed Example Package",id:"seeed-example-package",level:3},{value:"Device Connection",id:"device-connection",level:3},{value:"Add Seeed Example file to nRF5 SDK",id:"add-seeed-example-file-to-nrf5-sdk",level:3},{value:"Import the Project",id:"import-the-project",level:3},{value:"Compiling the application",id:"compiling-the-application",level:3},{value:"Programming the firmware",id:"programming-the-firmware",level:3},{value:"Adding files",id:"adding-files",level:3}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"preparation"},"Preparation"),(0,n.kt)("h2",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Wio-WM1110 Dev Kit x 1"),(0,n.kt)("li",{parentName:"ul"},"Computer x 1"),(0,n.kt)("li",{parentName:"ul"},"USB Type-C Cable x 1")),(0,n.kt)("h2",{id:"set-up-your-toolchain"},"Set up your Toolchain"),(0,n.kt)("p",null,"Before you can start developing\uff0cthe following tools are required for this Getting Started Guide:"),(0,n.kt)("h3",{id:"segger-embedded-studio-ses"},"SEGGER Embedded Studio (SES)"),(0,n.kt)("p",null,"SES is an all-in-one solution for managing, building, testing and deploying embedded applications. This means smooth, efficient development operations thanks to its wide range of features. The powerful project manager enables the management of projects large and small. Version control features enable automatic application deployment."),(0,n.kt)("a",{href:"https://www.segger.com/products/development-tools/embedded-studio/",target:"_blank"},(0,n.kt)("span",null,"SEGGER Embedded Studio (SES)-Download")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It's recommended to use 5.68 version on Mac OS.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"segger-j-link-software-and-documentation-pack"},"SEGGER J-Link Software and Documentation Pack"),(0,n.kt)("a",{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank"},(0,n.kt)("span",null,"SEGGER J-Link Software and Documentation Pack-Download")),(0,n.kt)("h3",{id:"nrf5-sdk"},"nRF5 SDK"),(0,n.kt)("p",null,"The nRF5 SDK provides a rich developing environment for nRF5 Series devices by including a broad selection of drivers, libraries, examples for peripherals, SoftDevices, and proprietary radio protocols."),(0,n.kt)("p",null,"All code examples included in the SDK are tailored to compile for and run on Wio-WM1110 Dev Kit."),(0,n.kt)("a",{href:"https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs",target:"_blank"},(0,n.kt)("span",null,"nRF5 SDK-Download")),(0,n.kt)("h3",{id:"seeed-example-package"},"Seeed Example Package"),(0,n.kt)("p",null,"Seeed provides an example project for developers to get started more quickly. This example includes LoRaWAN communication, positioning information acquisition, onboard sensor data acquisition, etc."),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board",target:"_blank"},(0,n.kt)("span",null,"Seeed Example-Download")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h1",{id:"get-started"},"Get Started"),(0,n.kt)("p",null,"This chapter will guide you how to use the Seeed examples to get started quickly."),(0,n.kt)("h3",{id:"device-connection"},"Device Connection"),(0,n.kt)("p",null,"Connect the dev board to your PC by a USB type-C cable."),(0,n.kt)("h3",{id:"add-seeed-example-file-to-nrf5-sdk"},"Add Seeed Example file to nRF5 SDK"),(0,n.kt)("p",null,"Copy the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board"},"Seeed Example file")," to the following path of nRF5 SDK:\n",(0,n.kt)("inlineCode",{parentName:"p"},".../nRF5_SDK_17.1.0_ddde560/examples/peripheral/")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"import-the-project"},"Import the Project"),(0,n.kt)("p",null,'Open the SES,import the ".emProject" project.'),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/project.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"compiling-the-application"},"Compiling the application"),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Build")," > ",(0,n.kt)("strong",{parentName:"p"},"Compile project_target"),"."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"programming-the-firmware"},"Programming the firmware"),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Build")," > ",(0,n.kt)("strong",{parentName:"p"},"Build and Run")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/build_and_run.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("p",null,"Build successfully\uff1a"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/build_success.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h3",{id:"adding-files"},"Adding files"),(0,n.kt)("p",null,"After compiling and programming an unmodified example to ensure that your toolchain is set up correctly, then you can modify your project by adding files and libraries."),(0,n.kt)("h1",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Need help with your Wio-WM1110 Dev Kit? We're here to assist you!")),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/sensecap",class:"button_tech_support_sensecap"}),(0,n.kt)("a",{href:"https://support.sensecapmx.com/portal/en/home",class:"button_tech_support_sensecap3"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"mailto:support@sensecapmx.com",class:"button_tech_support_sensecap2"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions",class:"button_discussion"})))}c.isMDXComponent=!0}}]);