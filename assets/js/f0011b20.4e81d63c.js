"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7615],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(i),h=n,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return i?r.createElement(m,o(o({ref:t},d),{},{components:i})):r.createElement(m,o({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},48842:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const a={description:"Getting started with Grove 1.2-inch IPS Display",title:"Grove 1.2-inch IPS Display",keywords:["ips","display"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_1.2inch_ips_display",last_update:{date:"06/13/2023",author:"Stephen Lo"}},o="Grove 1.2-inch IPS Display",s={unversionedId:"Sensor/Grove/Grove_Accessories/Display/Grove-1.2_inch_IPS_Display",id:"Sensor/Grove/Grove_Accessories/Display/Grove-1.2_inch_IPS_Display",title:"Grove 1.2-inch IPS Display",description:"Getting started with Grove 1.2-inch IPS Display",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/Grove-1.2_inch_IPS_Display.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/grove_1.2inch_ips_display",permalink:"/grove_1.2inch_ips_display",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Display/Grove-1.2_inch_IPS_Display.md",tags:[],version:"current",lastUpdatedBy:"Stephen Lo",lastUpdatedAt:1686585600,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{description:"Getting started with Grove 1.2-inch IPS Display",title:"Grove 1.2-inch IPS Display",keywords:["ips","display"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove_1.2inch_ips_display",last_update:{date:"06/13/2023",author:"Stephen Lo"}},sidebar:"ProductSidebar",previous:{title:"Grove Accessories Guide",permalink:"/Grove_Accessories_Intro"},next:{title:"Grove - 4-Digit Display",permalink:"/Grove-4-Digit_Display"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Fast IO with Arduino UNO",id:"fast-io-with-arduino-uno",level:2},{value:"FAQ",id:"faq",level:2},{value:"1. The screen does not work when I reprogram it while the screen is connected.",id:"1-the-screen-does-not-work-when-i-reprogram-it-while-the-screen-is-connected",level:3},{value:"3. What kind of power supply should I use for the display?",id:"3-what-kind-of-power-supply-should-i-use-for-the-display",level:3},{value:"4. Can I use the display under extreme temperature conditions?",id:"4-can-i-use-the-display-under-extreme-temperature-conditions",level:3},{value:"5. The colors on my display do not look right. What could be the problem?",id:"5-the-colors-on-my-display-do-not-look-right-what-could-be-the-problem",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"grove-12-inch-ips-display"},"Grove 1.2-inch IPS Display"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/2-Grove-1.2-Inch-IPS-Display-font.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"/grove_1.2inch_ips_display"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,n.kt)("br",null),(0,n.kt)("p",null,"The Grove-1.2 Inch IPS Display is a meticulously crafted 1.2-inch serial liquid crystal display brought to you by Seeed Studio. Offering a superior resolution of 240x240, this display provides crystal clear, colorful image representation. The design rationale behind this display is to present a simple, high-quality display solution to meet the needs of various DIY or Internet of Things (IoT) projects."),(0,n.kt)("p",null,"It adopts a serial SPI interface and only requires SCK and SDA for connection to the main controller. This simplifies the user's operations and saves wiring time. The RGB color display further enhances each image with rich and vibrant colors."),(0,n.kt)("p",null,"Simultaneously, the Grove-1.2 Inch IPS Display employs IPS full-view angle technology. Regardless of the angle from which users view, they can get almost the same visual experience. This means your project will present the best display effect from every angle."),(0,n.kt)("p",null,"Moreover, we have chosen ST7789 as the driver IC for the display and have prepared an open-source driver library and example code for your convenience. This will enable you to get started quickly with your project development."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Simplified Interface:")," The display adopts a serial SPI interface and only requires the SCK and SDA connections to the main controller. This greatly simplifies user operation and saves time on wiring."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"High Resolution:")," With a high-resolution of 240x240 pixels, the display can provide clear and vibrant images, improving the visual experience of your project."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-view IPS Technology:")," The Grove-1.2 Inch IPS Display uses In-Plane-Switching (IPS) technology, which offers consistent, accurate color from all viewing angles."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rich Color:")," The display can show up to 65k colors. The RGB color display adds depth and variation to the images, making them more vibrant and lifelike."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Compact Size:")," The screen size is 24.76x26.8mm, and the circuit board size is 40x40mm. Its compact size makes it a perfect fit for various DIY or IoT projects."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Wide Input Voltage Range:")," The circuit board can accept an input voltage of 3.3V or 5V, offering compatibility with a wide range of power sources."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reliable Driver IC:")," The display uses ST7789 as its driver IC. Its open-source driver library and example code make it easier for users to get started."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Wide Operating Temperature:")," The working temperature range of -20 to 70 degrees Celsius makes this display suitable for various environments.")),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DIY Weather Station"),": The Grove-1.2 Inch IPS Display can be used in a home-made weather station to provide real-time weather information. It can display rich and vibrant icons and data, providing an engaging user experience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Personal Digital Art Display"),": The display can be incorporated into a digital art device, where it can showcase your creative ideas with its high-resolution and colorful display. This makes it an excellent component for art or design projects."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DIY Gaming Console"),": Given its high-resolution and full-view display, the Grove-1.2 Inch IPS Display is an excellent choice for homemade gaming consoles. Its vibrant color display will enhance the gaming experience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Smart Home Systems"),": The display can be integrated into smart home systems, providing clear and vibrant visual feedback of various home conditions or system status."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Educational Projects"),": In the educational sector, the display can be used in classroom projects to teach students about graphics, coding, and electronics. Its simple interface and easy setup make it ideal for learning environments."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Industrial Control Panels"),": In industrial applications, the display can be used in control panels to display important information or statuses, helping operators monitor and control industrial processes. Its wide viewing angle ensures clear visibility from various perspectives.")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-map"},"Pin Map"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/hw.png",alt:"pir",width:500,height:"auto"})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-1.2 Inch IPS Display"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:250,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:250,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://raw.githubusercontent.com/Longan-Labs/Grove-1.2-Inch-IPS-Display/main/images/small.jpg",alt:"pir",width:250,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"/grove_1.2inch_ips_display",target:"_blank"},"Get One Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove-1.2 Inch IPS Display to D7(D7/D8) port  of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/connection.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove-1.2 Inch IPS Display to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-1.2 Inch IPS Display"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red (VCC)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black (GND)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"White  (DTA)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCK"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow  (SCK)")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Download the Arduino Library from Github.")),(0,n.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"github_item",href:"https://github.com/limengdu/Arduino_ST7789_Fast/tree/master"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Download the Library")))," ",(0,n.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,n.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,n.kt)("br",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," After downloading and installing the library correctly, you can find an example program named ",(0,n.kt)("strong",{parentName:"p"},"ST7789_HelloWorld.ino")," in the examples folder. This program is designed for the Grove-1.2 Inch IPS Display."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Adafruit_GFX.h>\n#include <Arduino_ST7789_Fast.h>\n\n#define SCK   7\n#define SDA   8\n\nArduino_ST7789 lcd = Arduino_ST7789(SCK, SDA);\n\nvoid setup(void)\n{\n    lcd.init();\n    lcd.fillScreen(BLACK);\n\n    lcd.setCursor(0, 0);\n    lcd.setTextColor(RED,BLACK);\n    lcd.setTextSize(3);\n    lcd.println("HELLO WORLD");\n}\n\nvoid loop()\n{\n\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," You will find Hello World printed on the display.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/result.jpg",alt:"pir",width:400,height:"auto"})),(0,n.kt)("h2",{id:"fast-io-with-arduino-uno"},"Fast IO with Arduino UNO"),(0,n.kt)("p",null,"Operating Arduino's I/O pins directly through registers can provide higher efficiency and speed, as opposed to using the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"digitalWrite()")," function. However, this method generally requires a more in-depth understanding of Arduino hardware and the workings of microcontrollers."),(0,n.kt)("p",null,"If you wish to utilize faster I/O, you'll need to make some modifications in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Arduino_ST7789_Fast.h")," file. Firstly, you should change line 20 to: ",(0,n.kt)("inlineCode",{parentName:"p"},"#define FAST_IO 1"),". Additionally, between lines 23 and 26, write the code to set the IO high and low. Below is an example of using D7/D8:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"#define FAST_IO 1\n\n#if FAST_IO\n#define LCD_SCK_SET PORTD |= (1 << PORTD7); // SET SCK HIGH\n#define LCD_SDA_SET PORTB |= (1 << PORTB0); // SET SDA HIGH\n#define LCD_SCK_CLR PORTD &= ~(1 << PORTD7); // SET SCK LOW\n#define LCD_SDA_CLR PORTB &= ~(1 << PORTB0); // SET SDA LOW\n#endif\n")),(0,n.kt)("p",null,"Below is a brief tutorial on how to use registers to control I/O pins on Arduino UNO:"),(0,n.kt)("p",null,"Arduino UNO has three ports, labeled as B, C, and D. Each port has a corresponding data register, which are PORTB, PORTC, and PORTD. These registers can be used to directly control I/O pins."),(0,n.kt)("p",null,"For instance, if you want to set digital pin 13 (corresponding to the 5th bit of PORTB, or PORTB5) to HIGH, you can write as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"PORTB |= (1 << 5);\n")),(0,n.kt)("p",null,"This statement sets the 5th bit of PORTB to 1 without changing other bits. This is achieved via the bitwise OR operator (|=) and the left-shift operator (<<)."),(0,n.kt)("p",null,"Likewise, if you want to set digital pin 13 to LOW, you can write as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"PORTB &= ~(1 << 5);\n")),(0,n.kt)("p",null,"This statement sets the 5th bit of PORTB to 0 without changing other bits. This is achieved via the bitwise AND operator (&=) and the bitwise NOT operator (~)."),(0,n.kt)("p",null,"The following shows all the ports on Arduino UNO and their corresponding registers:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"}," Digital Ports ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Digital ports 0 - 7 correspond to register PORTD, bits PORTD0 to PORTD7"),(0,n.kt)("li",{parentName:"ul"},"Digital ports 8 - 13 correspond to register PORTB, bits PORTB0 to PORTB5")),(0,n.kt)("p",null,"*",(0,n.kt)("em",{parentName:"p"}," Analog Input Ports ")," *"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Analog input ports A0 - A5 correspond to register PORTC, bits PORTC0 to PORTC5")),(0,n.kt)("p",null,"Analog input ports can also function as digital I/O, corresponding to digital pin numbers 14 to 19. For instance, A0 can also serve as digital pin 14."),(0,n.kt)("p",null,"Each I/O register also has two related registers to control the mode (input or output) of the pins and the pull-up resistors of input pins. For instance, the control registers for PORTD are DDRD and PIND. The DDRx register is used to set the pin mode, and the PINx register is used to read the pin state."),(0,n.kt)("p",null,"Before writing to the ",(0,n.kt)("inlineCode",{parentName:"p"},"PORTx")," register, you should first ensure that the corresponding ",(0,n.kt)("inlineCode",{parentName:"p"},"DDRx")," register is set correctly. For example, if you want to set ",(0,n.kt)("inlineCode",{parentName:"p"},"PD0")," as output and output HIGH, you should set the ",(0,n.kt)("inlineCode",{parentName:"p"},"DDRD")," register first:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"DDRD |= (1 << 0);  // Set PD0 as output\nPORTD |= (1 << 0);  // Output HIGH to PD0\n")),(0,n.kt)("p",null,"This information can be found in the datasheet of ATmega328P, which is the microcontroller of Arduino UNO. If you are using another Arduino model, you may need to refer to the datasheet of the respective microcontroller as different microcontrollers may have different port and register layouts."),(0,n.kt)("p",null,"When manipulating registers, it is essential to exercise caution, as any erroneous operation may impact the status of other pins or even the function of the microcontroller."),(0,n.kt)("p",null,"Users who want to use the register operation mode of this product need to understand and implement the above knowledge and skills independently."),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"1-the-screen-does-not-work-when-i-reprogram-it-while-the-screen-is-connected"},"1. The screen does not work when I reprogram it while the screen is connected."),(0,n.kt)("p",null,"A: If your program is constantly communicating with the screen, reprogramming can interrupt this process, causing the screen to malfunction. You can try turning off the power to restore normal screen operation."),(0,n.kt)("h3",{id:"3-what-kind-of-power-supply-should-i-use-for-the-display"},"3. What kind of power supply should I use for the display?"),(0,n.kt)("p",null,"A: The circuit board can accept an input voltage of 3.3V or 5V, so you can use a power supply within this range."),(0,n.kt)("h3",{id:"4-can-i-use-the-display-under-extreme-temperature-conditions"},"4. Can I use the display under extreme temperature conditions?"),(0,n.kt)("p",null,"A: The display has a working temperature range of -20 to 70 degrees Celsius. However, for optimal performance and longevity, it's recommended to operate the display within normal room temperature conditions."),(0,n.kt)("h3",{id:"5-the-colors-on-my-display-do-not-look-right-what-could-be-the-problem"},"5. The colors on my display do not look right. What could be the problem?"),(0,n.kt)("p",null,"A: Please ensure the display is correctly initialized in your code and you're using the correct color values. If you're still facing issues, there may be a problem with the display or the connecting wires. Please check the connections or try with another display if available."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar"},"Eagle File for Grove-1.2 Inch IPS Display")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/ST7789V_SPEC_V1.2.pdf"},"ST7789 Spec"))),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);