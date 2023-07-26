"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={description:"Getting Started",title:"Getting Started",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-TFLite-Getting-Started",last_update:{date:"1/11/2023",author:"shuxu hu"}},o="Getting Started with TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-Sense-TFLite-Getting-Started",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-Sense-TFLite-Getting-Started",title:"Getting Started",description:"Getting Started",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-Sense-TFLite-Getting-Started.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML",slug:"/XIAO-BLE-Sense-TFLite-Getting-Started",permalink:"/XIAO-BLE-Sense-TFLite-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-Sense-TFLite-Getting-Started.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673366400,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{description:"Getting Started",title:"Getting Started",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-TFLite-Getting-Started",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"For Seeed nRF52 mbed-enabled Boards Boards",permalink:"/XIAO-BLE-Sense-Bluetooth-Usage"},next:{title:"Speech Recognition",permalink:"/XIAO-BLE-Sense-TFLite-Mic"}},s={},p=[{value:"Software setup",id:"software-setup",level:2},{value:"Train data",id:"train-data",level:2},{value:"Punch action",id:"punch-action",level:3},{value:"Flex action",id:"flex-action",level:3},{value:"Generate TensorFlow Lite model file",id:"generate-tensorflow-lite-model-file",level:2},{value:"Inference",id:"inference",level:2},{value:"Punch action",id:"punch-action-1",level:3},{value:"Flex action",id:"flex-action-1",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-tensorflow-lite-on-seeed-studio-xiao-nrf52840-sense"},"Getting Started with TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite-thumb.jpg",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",null,"This wiki will demonstrate how you can use TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense and detect gestures such as punching and flexing using the on-board accelerometer. Here the data training will be done on the device itself."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'For embedded AI applications, we highly recommond using the "Seeed nrf52 mbed-enabled Boards Library".')),(0,a.kt)("h2",{id:"software-setup"},"Software setup"),(0,a.kt)("p",null,"Make sure to first follow ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO-BLE-Sense-Getting-Started"},'"Getting Started with Seeed Studio XIAO nRF52840 (Sense)"')," wiki for the initial hardware and software setup."),(0,a.kt)("p",null,"Now let's move on to the rest of the software setup."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Download ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3"},"Seeed_Arduino_LSM6DS3 library")," as a zip file")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Download ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lakshanthad/tflite-micro-arduino-examples"},"tflite-micro-arduino-examples library")," as a zip file")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/tflite-micro-github.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Open Arduino IDE, navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library...")," and open both the downloaded zip files one after the other")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"File > Examples > Seeeed Arduino LSM6DS3 > IMU_Capture")," to open ",(0,a.kt)("strong",{parentName:"li"},"IMU_Capture.ino"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/select-IMUCapture-2.png",alt:"pir",width:500,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Upload the codes and open the ",(0,a.kt)("strong",{parentName:"li"},"Serial Monitor"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Once you upload the codes, it will not be executed automatically until you click ",(0,a.kt)("strong",{parentName:"p"},"Serial Monitor")," on the upper right corner of the Arduino window."),(0,a.kt)("h2",{id:"train-data"},"Train data"),(0,a.kt)("h3",{id:"punch-action"},"Punch action"),(0,a.kt)("p",null,"While the serial monitor is open, start training data for the punch action."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Grab the Seeed Studio XIAO nRF52840 Sense on your palm and start punching forward and you will see some data printed out on serial monitor ")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/punch-serial.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Repeat the punching action for about 10 times and you will see new data generated after each punch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Copy and paste the complete serial monitor output to a text file and save the text file as ",(0,a.kt)("strong",{parentName:"p"},"punch.csv")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Please copy the first line as well which contains ",(0,a.kt)("strong",{parentName:"p"},"aX,aY,aZ,gX,gY,gZ")),(0,a.kt)("h3",{id:"flex-action"},"Flex action"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Reconnect USB cable to Seeed Studio XIAO nRF52840 Sense, open serial monitor, grab the Seeed Studio XIAO nRF52840 Sense on your palm and start flexing inwards and you will see some data printed out on serial monitor ")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/train-flex.gif",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/flex-serial.png",alt:"pir",width:1e3,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Repeat the flexing action for about 10 times and you will see new data generated after each flex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Copy and paste the complete serial monitor output to a text file and save the text file as ",(0,a.kt)("strong",{parentName:"p"},"flex.csv")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Please copy the first line as well which contains ",(0,a.kt)("strong",{parentName:"p"},"aX,aY,aZ,gX,gY,gZ")),(0,a.kt)("h2",{id:"generate-tensorflow-lite-model-file"},"Generate TensorFlow Lite model file"),(0,a.kt)("p",null,"Now we will generate a TensorFlow Lite model file ",(0,a.kt)("strong",{parentName:"p"},"(model.h)"),", by using the ",(0,a.kt)("strong",{parentName:"p"},"punch.csv")," and ",(0,a.kt)("strong",{parentName:"p"},"flex.csv")," files that we created before."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Open ",(0,a.kt)("a",{parentName:"li",href:"https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb"},"this Python notebook")," which will help generate the model.h file that we need")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TF-notebook-1.png",alt:"pir",width:7500,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Navigate to files tab on the left navigation panel, drag and drop ",(0,a.kt)("strong",{parentName:"li"},"punch.csv")," and ",(0,a.kt)("strong",{parentName:"li"},"flex.csv")," files inside")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/drop-punch-flex.png",alt:"pir",width:350,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Inside ",(0,a.kt)("strong",{parentName:"li"},"Setup Python Environment")," section, change the code from ",(0,a.kt)("strong",{parentName:"li"},"pip install tensorflow==2.0.0-rc1")," to ",(0,a.kt)("strong",{parentName:"li"},"pip install tensorflow")," ")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/tensorflow-install.png",alt:"pir",width:550,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"Runtime > Run all")," to run all the code cells")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/run-all.png",alt:"pir",width:450,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Click ",(0,a.kt)("strong",{parentName:"li"},"Run anyway")," for the error message that pops up")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Once all the code cells are executed, you will find a new ",(0,a.kt)("strong",{parentName:"li"},"model.h")," file generated under the ",(0,a.kt)("strong",{parentName:"li"},"files")," tab that saw before")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/model.h.png",alt:"pir",width:350,height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you cannot see the above ",(0,a.kt)("strong",{parentName:"p"},"model.h")," file, refresh the page."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Right click on the file and click ",(0,a.kt)("strong",{parentName:"li"},"Download")," to download the file to your PC")),(0,a.kt)("h2",{id:"inference"},"Inference"),(0,a.kt)("p",null,"Now we will use the downloaded TensorFlow Lite model file ",(0,a.kt)("strong",{parentName:"p"},"(model.h)")," to recognize the punch and flex actions from Seeed Studio XIAO nRF52840 Sense."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Navigate to the library path of ",(0,a.kt)("strong",{parentName:"li"},"Seeed_Arduino_LSM6DS3")," Library (normally under ",(0,a.kt)("strong",{parentName:"li"},"Documents > Arduino > libraries > Seeed_Arduino_LSM6DS3"),"), and visit ",(0,a.kt)("strong",{parentName:"li"},"examples > IMU_Classifier"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/file-explorer-imu.png",alt:"pir",width:650,height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Replace the ",(0,a.kt)("strong",{parentName:"p"},"model.h")," file with the one that we downloaded before")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Double click ",(0,a.kt)("strong",{parentName:"p"},"IMU_Classifier.ino")," and upload the codes to the Seeed Studio XIAO nRF52840 Sense."))),(0,a.kt)("h3",{id:"punch-action-1"},"Punch action"),(0,a.kt)("p",null,"Open ",(0,a.kt)("strong",{parentName:"p"},"serial monitor")," and perform a punching action. You will see that it will give a result close to ",(0,a.kt)("strong",{parentName:"p"},"1")," next to ",(0,a.kt)("strong",{parentName:"p"},"punch")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/punch-result.png",alt:"pir",width:300,height:"auto"})),(0,a.kt)("h3",{id:"flex-action-1"},"Flex action"),(0,a.kt)("p",null,"Perform a flexing action. You will see that it will give a result close to ",(0,a.kt)("strong",{parentName:"p"},"1")," next to ",(0,a.kt)("strong",{parentName:"p"},"flex")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/flex-result.png",alt:"pir",width:300,height:"auto"})),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Webpage]")," ",(0,a.kt)("a",{parentName:"li",href:"https://www.tensorflow.org/lite/guide"},"TensorFlow Lite Documentation"))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);