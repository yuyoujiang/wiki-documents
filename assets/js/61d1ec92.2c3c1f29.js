"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={description:"Keyboard",title:"Keyboard",keywords:["Wio_terminal USB_Host"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBH-Keyboard",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Using USB Keyboard on Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Keyboard",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Keyboard",title:"Keyboard",description:"Keyboard",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Keyboard.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host",slug:"/Wio-Terminal-USBH-Keyboard",permalink:"/Wio-Terminal-USBH-Keyboard",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Keyboard.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673884800,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Keyboard",title:"Keyboard",keywords:["Wio_terminal USB_Host"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBH-Keyboard",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/Wio-Terminal-USBH-Overview"},next:{title:"Mouse",permalink:"/Wio-Terminal-USBH-Mouse"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Procedures",id:"procedures",level:2},{value:"USB Host Configurations",id:"usb-host-configurations",level:2},{value:"Complete Code",id:"complete-code",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-usb-keyboard-on-wio-terminal"},"Using USB Keyboard on Wio Terminal"),(0,i.kt)("p",null,"This repo introduces how to use a USB keyboard on Wio Terminal. You can implement this example to input data from a Keyboard to Wio Terminal!"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif"})),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To work with this example, you will need a ",(0,i.kt)("strong",{parentName:"p"},"USB OTG Adaptor")," and a ",(0,i.kt)("strong",{parentName:"p"},"USB to Serial Module"),", where the OTG adaptor is used to connect with keyboard and the USB to Serial module to read the outputs from Wio Terminal."),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal using ",(0,i.kt)("inlineCode",{parentName:"p"},"Arduino IDE"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unplug the USB type-C cable from Wio Terminal that used to upload the code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect your ",(0,i.kt)("strong",{parentName:"p"},"keyboard")," to the ",(0,i.kt)("strong",{parentName:"p"},"OTG adaptor")," then to the USB-C port of Wio Terminal."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Keyboard"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OTG Adaptor"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Wio Terminal(Type-C Port)"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the ",(0,i.kt)("strong",{parentName:"p"},"USB to Serial Module")," to the Wio Terminal as follow:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"TXD(USB to Serial Module)"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RXD(Pin 10 on Wio Terminal)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RXD(USB to Serial Module)"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"TXD(Pin 8 on Wio Terminal)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"3.3V(USB to Serial Module)"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"3.3V(Pin 1 on Wio Terminal)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GND(USB to Serial Module)"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GND(Pin 6 on Wio Terminal)"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the USB to Serial Module to your computer. Depending on what USB to Serial Module used, ",(0,i.kt)("strong",{parentName:"p"},"download the USB driver")," for the module so that your computer can recognize it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For Windows User, you can open Device Manager to check if it's recognized. A new ",(0,i.kt)("inlineCode",{parentName:"p"},"COM")," should appear."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For Mac user, use ",(0,i.kt)("inlineCode",{parentName:"li"},"ls /dev/cu.*")," in terminal to check the module availability."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To view data from Serial:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Windows:")," Download and install ",(0,i.kt)("a",{parentName:"p",href:"https://www.putty.org/"},"PuTTY"),". Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial")," and change the ",(0,i.kt)("inlineCode",{parentName:"p"},"COM")," in Serial line to the COM that appeared in the Device Manager, also change the Speed. to ",(0,i.kt)("inlineCode",{parentName:"p"},"115200")," and press Open. A Terminal should appear. Now, if you start typing on the connected keyboard, you should see the serial output!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mac:")," Open terminal and install ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install screen"),". Once installed, use the command ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"screen /dev/cu.usbserial 115200"))," where ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/cu.usbserial")," should match from above. You should be see serial output from Wio Terminal!"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important Note:")," Because the USB port of Wio Terminal is being used for USB, to upload another program to Wio Terminal require entering Bootloader mode by pressing the power button twice(the LED will dim), then you should be able see the port again."),(0,i.kt)("h2",{id:"usb-host-configurations"},"USB Host Configurations"),(0,i.kt)("p",null,"To enable USB Host on Wio Terminal, you must configure two pins. Need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"PIN_USB_HOST_ENABLE")," to ",(0,i.kt)("strong",{parentName:"p"},"LOW")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OUTPUT_CTR_5V")," to ",(0,i.kt)("strong",{parentName:"p"},"HIGH"),"."),(0,i.kt)("p",null,"You can do this simply by adding the following code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"void setup()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"digitalWrite(PIN_USB_HOST_ENABLE, LOW);\ndigitalWrite(OUTPUT_CTR_5V, HIGH);\n")),(0,i.kt)("h2",{id:"complete-code"},"Complete Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <KeyboardController.h>\n#define SerialDebug Serial1\n\n\n// Initialize USB Controller\nUSBHost usb;\n\n// Attach keyboard controller to USB\nKeyboardController keyboard(usb);\n\nvoid printKey();\n\n// This function intercepts key press\nvoid keyPressed() {\n  SerialDebug.print("Pressed:  ");\n  printKey();\n}\n\n// This function intercepts key release\nvoid keyReleased() {\n  SerialDebug.print("Released: ");\n  printKey();\n}\n\nvoid printKey() {\n  // getOemKey() returns the OEM-code associated with the key\n  SerialDebug.print(" key:");\n  SerialDebug.print(keyboard.getOemKey());\n\n  // getModifiers() returns a bits field with the modifiers-keys\n  int mod = keyboard.getModifiers();\n  SerialDebug.print(" mod:");\n  SerialDebug.print(mod);\n\n  SerialDebug.print(" => ");\n\n  if (mod & LeftCtrl)\n    SerialDebug.print("L-Ctrl ");\n  if (mod & LeftShift)\n    SerialDebug.print("L-Shift ");\n  if (mod & Alt)\n    SerialDebug.print("Alt ");\n  if (mod & LeftCmd)\n    SerialDebug.print("L-Cmd ");\n  if (mod & RightCtrl)\n    SerialDebug.print("R-Ctrl ");\n  if (mod & RightShift)\n    SerialDebug.print("R-Shift ");\n  if (mod & AltGr)\n    SerialDebug.print("AltGr ");\n  if (mod & RightCmd)\n    SerialDebug.print("R-Cmd ");\n\n  // getKey() returns the ASCII translation of OEM key\n  // combined with modifiers.\n  SerialDebug.write(keyboard.getKey());\n  SerialDebug.println();\n}\n\nuint32_t lastUSBstate = 0;\n\nvoid setup()\n{\n  SerialDebug.begin( 115200 );\n  SerialDebug.println("Keyboard Controller Program started");\n\n  if (usb.Init())\n   SerialDebug.println("USB host did not start.");\n\n  delay( 20 );\n\n  //Coqnfigure pins to enable USB Host on Wio Terminal\n  digitalWrite(PIN_USB_HOST_ENABLE, LOW);\n  digitalWrite(OUTPUT_CTR_5V, HIGH);\n\n}\n\nvoid loop()\n{\n  // Process USB tasks\n  usb.Task();\n\n  uint32_t currentUSBstate = usb.getUsbTaskState();\n  if (lastUSBstate != currentUSBstate) {\n    SerialDebug.print("USB state changed: 0x");\n    SerialDebug.print(lastUSBstate, HEX);\n    SerialDebug.print(" -> 0x");\n    SerialDebug.println(currentUSBstate, HEX);\n    switch (currentUSBstate) {\n      case USB_ATTACHED_SUBSTATE_SETTLE: SerialDebug.println("Device Attached"); break;\n      case USB_DETACHED_SUBSTATE_WAIT_FOR_DEVICE: SerialDebug.println("Detached, waiting for Device"); break;\n      case USB_ATTACHED_SUBSTATE_RESET_DEVICE: SerialDebug.println("Resetting Device"); break;\n      case USB_ATTACHED_SUBSTATE_WAIT_RESET_COMPLETE: SerialDebug.println("Reset complete"); break;\n      case USB_STATE_CONFIGURING: SerialDebug.println("USB Configuring"); break;\n      case USB_STATE_RUNNING: SerialDebug.println("USB Running"); break;\n    }\n    lastUSBstate = currentUSBstate;\n  }\n}\n')))}u.isMDXComponent=!0}}]);