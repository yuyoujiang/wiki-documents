"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56751],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={description:"Build a IR Thermal Imaging Camera using Wio Terminal",title:"Build a IR Thermal Imaging Camera using Wio Terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Thermal-Camera",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Build a IR Thermal Imaging Camera using Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Thermal-Camera",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Thermal-Camera",title:"Build a IR Thermal Imaging Camera using Wio Terminal",description:"Build a IR Thermal Imaging Camera using Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Thermal-Camera.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-Thermal-Camera",permalink:"/Wio-Terminal-Thermal-Camera",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Thermal-Camera.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Build a IR Thermal Imaging Camera using Wio Terminal",title:"Build a IR Thermal Imaging Camera using Wio Terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Thermal-Camera",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Reading Coronavirus Live Data using Wio Terminal",permalink:"/Wio-Terminal-Reading-COVID19"},next:{title:"How to measure noise levels with Wio Terminal",permalink:"/Wio-Terminal-Sound-Meter"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Part List",id:"part-list",level:2},{value:"Features",id:"features",level:2},{value:"Arduino libraries needed",id:"arduino-libraries-needed",level:2},{value:"Arduino Instructions",id:"arduino-instructions",level:2},{value:"Complete Code",id:"complete-code",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-a-ir-thermal-imaging-camera-using-wio-terminal"},"Build a IR Thermal Imaging Camera using Wio Terminal"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IRcamera.gif",alt:null})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-AMG8833.html"},"Grove - Infrared Temperature Sensor Array (AMG8833)")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal"),", we can build a low cost ",(0,r.kt)("a",{parentName:"p",href:"https://www.flir.com/"},"FLIR\u2122")," like Thermal Imagining camera with ease! To set you back a little, the resolution of the Grove - Infrared Temperature Sensor Array (AMG8833) is only 8 x 8 (64 Pixels), which in some cases is good enough. So Linear Interpolation is used in the code to expand to 70 x 70 (4900 Pixels) for a much better indications."),(0,r.kt)("p",null,"This demo is inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=A9F1ezGgaC4&t=365s"},"Kris Kasprzak's video"),". Several modifications were made to make it compatible with Wio Terminal and Grove - Infrared Temperature Sensor Array (AMG8833). Most Graphics are now first drawn to TFT LCD Sprites first to improve overall performance and faster frame rate. Also added a crosshair in the middle of screen and showing the temperature at the crosshair."),(0,r.kt)("h2",{id:"part-list"},"Part List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-AMG8833.html"},"Grove - Infrared Temperature Sensor Array (AMG8833)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html"},"Wio Terminal Battery Chassis")))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Indicating the exact temperature at crosshair")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IR Thermal Camera sensing thermal objects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Right button to enable grid  ON/OFF functionality"))),(0,r.kt)("h2",{id:"arduino-libraries-needed"},"Arduino libraries needed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the LCD screen Library ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD"),", please visit ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"Wio Terminal LCD")," for more information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_AMG8833"},"Seeed_AMG8833")," repositories and download the entire repo to your local drive."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Now, the Seeed_AMG8833 library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,r.kt)("inlineCode",{parentName:"li"},"sketch")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Include Library")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Add .ZIP Library"),", and choose the ",(0,r.kt)("inlineCode",{parentName:"li"},"Seeed_AMG8833")," file that you've have just downloaded.")))),(0,r.kt)("h2",{id:"arduino-instructions"},"Arduino Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Plug in the the Grove - Infrared Temperature Sensor Array (AMG8833) to the Grove I2C Interface of Wio Terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the Complete code ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/ThermalCamera.ino"},"here")," or copy the following.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code."))),(0,r.kt)("h2",{id:"complete-code"},"Complete Code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," To boost up performance and frame rate of this IR Thermal Imaging Camera, you can boost the Wio Terminal CPU Speed to 200MHz. Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"CPU Speed")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"200MHz(Overclock)")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/CPUboost.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'\n/*\n\n  This program is for upsizing an 8 x 8 array of thermal camera readings\n  it will size up by 10x and display to a 240 x 320\n  interpolation is linear and "good enough" given the display is a 5-6-5 color palet\n  Total final array is an array of 70 x 70 of internal points only\n\n  Revisions\n  1.0     Kasprzak      Initial code\n  1.1     Anson(Seeed Studio)  Adapted to Wio Terminal with Grove - Infrared Sensor(AMG8833)\n  \n*/\n\n#include <Seeed_AMG8833_driver.h>\n#include <TFT_eSPI.h>                // Include the graphics library (this includes the sprite functions)  \n\nTFT_eSPI    tft = TFT_eSPI(); \nTFT_eSprite Display = TFT_eSprite(&tft);  // Create Sprite object "img" with pointer to "tft" object\n// the pointer is used by pushSprite() to push it onto the TFT\n\nunsigned long CurTime;\n\nuint16_t TheColor;\n// start with some initial colors\nuint16_t MinTemp = 25;\nuint16_t MaxTemp = 35;\n\n// variables for interpolated colors\nbyte red, green, blue;\n\n// variables for row/column interpolation\nbyte i, j, k, row, col, incr;\nfloat intPoint, val, a, b, c, d, ii;\nbyte aLow, aHigh;\n\n// size of a display "pixel"\nbyte BoxWidth = 3;\nbyte BoxHeight = 3;\n\nint x, y;\nchar buf[20];\n\n// variable to toggle the display grid\nint ShowGrid = -1;\n\n// array for the 8 x 8 measured pixels\nfloat pixels[64];\n\n// array for the interpolated array\nfloat HDTemp[80][80];\n\n// create the camara object\nAMG8833 ThermalSensor;\n\n//Toggle the grid on and off\nvoid toggleGrid() {\n  ShowGrid = ShowGrid *-1;\n  Display.fillRect(15, 15, 210, 210, TFT_BLACK);\n  yield();\n}\n\nvoid setup() {\n  Serial.begin(115200);\n\n  // start the display and set the background to black\n  tft.begin();\n  tft.fillScreen(TFT_BLACK);\n\n  //Interrupt to toggle Gird on and off\n  pinMode(WIO_KEY_A, INPUT);\n  attachInterrupt(digitalPinToInterrupt(WIO_KEY_A), toggleGrid, FALLING);\n\n  // set display rotation (you may need to change to 0 depending on your display\n  tft.setRotation(3);\n\n  // show a splash screen\n\n  tft.setCursor(20, 20);\n  tft.setTextColor(TFT_BLUE, TFT_BLACK);\n  tft.print("Thermal ");\n\n  tft.setTextColor(TFT_RED, TFT_BLACK);\n  tft.print("Camera");\n\n  // let sensor boot up\n  bool status = ThermalSensor.init();\n  delay(100);\n\n  if (!status) {\n      Serial.print("Failed to initalized AMG8833");\n  }\n\n  // read the camera for initial testing\n  ThermalSensor.read_pixel_temperature(pixels);\n\n  // check status and display results\n  if (pixels[0] < 0) {\n    while (1) {\n      tft.setCursor(20, 40);\n      tft.setTextColor(TFT_RED, TFT_BLACK);\n      tft.print("Readings: FAIL");\n      delay(500);\n    }\n  }\n  else {\n    tft.setCursor(20, 40);\n    tft.setTextColor(TFT_GREEN, TFT_BLACK);\n    tft.print("Readings: OK");\n    delay(2000);\n  }\n\n  tft.fillScreen(TFT_BLACK);\n  \n  Display.createSprite(TFT_HEIGHT, TFT_WIDTH);\n  Display.fillSprite(TFT_BLACK); \n\n  // get the cutoff points for the color interpolation routines\n  // note this function called when the temp scale is changed\n  Getabcd();\n\n  // draw a legend with the scale that matches the sensors max and min\n  DrawLegend();\n\n}\n\nvoid loop() {  \n  CurTime = millis();\n\n  // draw a large white border for the temperature area\n  Display.fillRect(10, 10, 220, 220, TFT_WHITE);\n\n  // read the sensor\n  ThermalSensor.read_pixel_temperature(pixels);\n  \n  // now that we have an 8 x 8 sensor array\n  // interpolate to get a bigger screen\n  // interpolate the 8 rows (interpolate the 70 column points between the 8 sensor pixels first)\n  for (row = 0; row < 8; row ++) {\n    for (col = 0; col < 70; col ++) {\n      // get the first array point, then the next\n      // also need to bump by 8 for the subsequent rows\n      aLow =  col / 10 + (row * 8);\n      aHigh = (col / 10) + 1 + (row * 8);\n      // get the amount to interpolate for each of the 10 columns\n      // here were doing simple linear interpolation mainly to keep performace high and\n      // display is 5-6-5 color palet so fancy interpolation will get lost in low color depth\n      intPoint =   (( pixels[aHigh] - pixels[aLow] ) / 10.0 );\n      // determine how much to bump each column (basically 0-9)\n      incr = col % 10;\n      // find the interpolated value\n      val = (intPoint * incr ) +  pixels[aLow];\n      // store in the 70 x 70 array\n      // since display is pointing away, reverse row to transpose row data\n      HDTemp[ (7 - row) * 10][col] = val;\n\n    }\n  }\n\n  // now that we have raw data with 70 columns\n  // interpolate each of the 70 columns\n  // forget Arduino..no where near fast enough..Teensy at > 72 mhz is the starting point\n\n  for (col = 0; col < 70; col ++) {\n    for (row = 0; row < 70; row ++) {\n      // get the first array point, then the next\n      // also need to bump by 8 for the subsequent cols\n      aLow =  (row / 10 ) * 10;\n      aHigh = aLow + 10;\n      // get the amount to interpolate for each of the 10 columns\n      // here were doing simple linear interpolation mainly to keep performace high and\n      // display is 5-6-5 color palet so fancy interpolation will get lost in low color depth\n      intPoint =   (( HDTemp[aHigh][col] - HDTemp[aLow][col] ) / 10.0 );\n      // determine how much to bump each column (basically 0-9)\n      incr = row % 10;\n      // find the interpolated value\n      val = (intPoint * incr ) +  HDTemp[aLow][col];\n      // store in the 70 x 70 array\n      HDTemp[ row ][col] = val;\n    }\n  }\n\n\n  //display the 70 x 70 array\n  DisplayGradient();\n\n  //Crosshair in the middle of the screen\n  Display.drawCircle(115, 115, 5, TFT_WHITE);\n  Display.drawFastVLine(115, 105, 20, TFT_WHITE);\n  Display.drawFastHLine(105, 115, 20, TFT_WHITE);\n\n  //Push the Sprite to the screen\n  Display.pushSprite(0, 0);\n\n  //Displaying the temp at the middle of the Screen\n  tft.setRotation(3);\n  tft.setTextColor(TFT_WHITE);\n  tft.drawFloat(HDTemp[35][35], 2, 90, 20);\n\n  //Uncomment this to print out frame rate\n  Serial.print("Frame rate: "); Serial.println(1/(0.001*(millis() - CurTime)));\n\n}\n\n// function to display the results\nvoid DisplayGradient() {\n\n  tft.setRotation(4);\n\n  // rip through 70 rows\n  for (row = 0; row < 70; row ++) {\n\n    // fast way to draw a non-flicker grid--just make every 10 pixels 2x2 as opposed to 3x3\n    // drawing lines after the grid will just flicker too much\n    if (ShowGrid < 0) {\n      BoxWidth = 3;\n    }\n    else {\n      if ((row % 10 == 9) ) {\n        BoxWidth = 2;\n      }\n      else {\n        BoxWidth = 3;\n      }\n    }\n    // then rip through each 70 cols\n    for (col = 0; col < 70; col++) {\n\n      // fast way to draw a non-flicker grid--just make every 10 pixels 2x2 as opposed to 3x3\n      if (ShowGrid < 0) {\n        BoxHeight = 3;\n      }\n      else {\n        if ( (col % 10 == 9)) {\n          BoxHeight = 2;\n        }\n        else {\n          BoxHeight = 3;\n        }\n      }\n      // finally we can draw each the 70 x 70 points, note the call to get interpolated color\n      Display.fillRect((row * 3) + 15, (col * 3) + 15, BoxWidth, BoxHeight, GetColor(HDTemp[row][col]));\n    }\n  }\n  \n}\n\n// my fast yet effective color interpolation routine\nuint16_t GetColor(float val) {\n\n  /*\n    pass in value and figure out R G B\n    several published ways to do this I basically graphed R G B and developed simple linear equations\n    again a 5-6-5 color display will not need accurate temp to R G B color calculation\n\n    equations based on\n    http://web-tech.ga-usa.com/2012/05/creating-a-custom-hot-to-cold-temperature-color-gradient-for-use-with-rrdtool/index.html\n\n  */\n\n  red = constrain(255.0 / (c - b) * val - ((b * 255.0) / (c - b)), 0, 255);\n\n  if ((val > MinTemp) & (val < a)) {\n    green = constrain(255.0 / (a - MinTemp) * val - (255.0 * MinTemp) / (a - MinTemp), 0, 255);\n  }\n  else if ((val >= a) & (val <= c)) {\n    green = 255;\n  }\n  else if (val > c) {\n    green = constrain(255.0 / (c - d) * val - (d * 255.0) / (c - d), 0, 255);\n  }\n  else if ((val > d) | (val < a)) {\n    green = 0;\n  }\n\n  if (val <= b) {\n    blue = constrain(255.0 / (a - b) * val - (255.0 * b) / (a - b), 0, 255);\n  }\n  else if ((val > b) & (val <= d)) {\n    blue = 0;\n  }\n  else if (val > d) {\n    blue = constrain(240.0 / (MaxTemp - d) * val - (d * 240.0) / (MaxTemp - d), 0, 240);\n  }\n\n  // use the displays color mapping function to get 5-6-5 color palet (R=5 bits, G=6 bits, B-5 bits)\n  return Display.color565(red, green, blue);\n\n}\n\n// function to get the cutoff points in the temp vs RGB graph\nvoid Getabcd() {\n\n  a = MinTemp + (MaxTemp - MinTemp) * 0.2121;\n  b = MinTemp + (MaxTemp - MinTemp) * 0.3182;\n  c = MinTemp + (MaxTemp - MinTemp) * 0.4242;\n  d = MinTemp + (MaxTemp - MinTemp) * 0.8182;\n\n}\n\n// function to draw a legend\nvoid DrawLegend() {\n\n  //color legend with max and min text\n  j = 0;\n\n  float inc = (MaxTemp - MinTemp ) / 160.0;\n\n  for (ii = MinTemp; ii < MaxTemp; ii += inc) {\n    tft.drawFastHLine(260, 200 - j++, 30, GetColor(ii));\n  }\n\n  tft.setTextSize(2);\n  tft.setCursor(245, 20);\n  tft.setTextColor(TFT_WHITE, TFT_BLACK);\n  sprintf(buf, "%2d/%2d", MaxTemp, (int) (MaxTemp * 1.8) + 32);\n  tft.print(buf);\n\n  tft.setTextSize(2);\n  tft.setCursor(245, 210);\n  tft.setTextColor(TFT_WHITE, TFT_BLACK);\n  sprintf(buf, "%2d/%2d", MinTemp, (int) (MinTemp * 1.8) + 32);\n  tft.print(buf);\n\n}\n\n// END OF CODE\n')))}m.isMDXComponent=!0}}]);