"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56693],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>g});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?t.createElement(g,a(a({ref:n},p),{},{components:r})):t.createElement(g,a({ref:n},p))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66868:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=r(87462),o=(r(67294),r(3905));const i={description:"Buzzer",title:"Buzzer",keywords:["SenseCAP Indicator RP2040 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_RP2040_Buzzer",last_update:{date:"5/23/2023",author:"Thomas"}},a="**Buzzer**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Buzzer",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Buzzer",title:"Buzzer",description:"Buzzer",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Buzzer.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040",slug:"/SenseCAP_Indicator_RP2040_Buzzer",permalink:"/SenseCAP_Indicator_RP2040_Buzzer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Buzzer.md",tags:[],version:"current",lastUpdatedBy:"Thomas",lastUpdatedAt:1684771200,formattedLastUpdatedAt:"May 22, 2023",frontMatter:{description:"Buzzer",title:"Buzzer",keywords:["SenseCAP Indicator RP2040 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_Indicator_RP2040_Buzzer",last_update:{date:"5/23/2023",author:"Thomas"}},sidebar:"ProductSidebar",previous:{title:"tVOC Sensor Built-in",permalink:"/SenseCAP_Indicator_RP2040_tVOC"},next:{title:"MicroSD",permalink:"/SenseCAP_Indicator_RP2040_MicroSD"}},l={},u=[{value:"<strong>Basic</strong>",id:"basic",level:2},{value:"<strong>Example Code 1</strong>",id:"example-code-1",level:2},{value:"<strong>Example Code 2</strong>",id:"example-code-2",level:2}],p={toc:u};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buzzer"},(0,o.kt)("strong",{parentName:"h1"},"Buzzer")),(0,o.kt)("p",null,"The built-in buzzer of SenseCAP Indicator is a passive buzzer, meaning that it requires an AC signal(PWM) to trigger and output a sound, you can generate various tones and effects."),(0,o.kt)("h2",{id:"basic"},(0,o.kt)("strong",{parentName:"h2"},"Basic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <Arduino.h>\n\n#define Buzzer  19 //Buzzer GPIO\n\nvoid setup() {\n  digitalWrite(Buzzer, OUTPUT); //Set Buzzer as an output\n  analogWrite(Buzzer, 127);   //Generates pwm of 50% duty cycle\n}\n\nvoid loop() {\n  delay(1000);\n  digitalWrite(Buzzer, LOW); //Turn off the Buzzer\n}\n\n")),(0,o.kt)("h2",{id:"example-code-1"},(0,o.kt)("strong",{parentName:"h2"},"Example Code 1")),(0,o.kt)("p",null,'This example use a buzzer to play melodies. It sends a square wave of the appropriate frequency to the buzzer, generating the corresponding tone.\n" Twinkle Twinkle Little Start..."'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <Arduino.h>\n#define Buzzer  19 //Buzzer GPIO\n\n\nint length = 15;         /* the number of notes */\nchar notes[] = \"ccggaagffeeddc \";\nint beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };\nint tempo = 300;\n\nvoid setup() {\n    //set buzzer pin as output\n    pinMode(19, OUTPUT);\n}\n\nvoid loop() {\n    for(int i = 0; i < length; i++) {\n        if(notes[i] == ' ') {\n            delay(beats[i] * tempo);\n        } else {\n            playNote(notes[i], beats[i] * tempo);\n        }\n        delay(tempo / 2);    /* delay between notes */\n    }\n\n}\n\n//Play tone\nvoid playTone(int tone, int duration) {\n    for (long i = 0; i < duration * 1000L; i += tone * 2) {\n        digitalWrite(19, HIGH);\n        delayMicroseconds(tone);\n        digitalWrite(19, LOW);\n        delayMicroseconds(tone);\n    }\n}\n\nvoid playNote(char note, int duration) {\n    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };\n    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };\n\n    // play the tone corresponding to the note name\n    for (int i = 0; i < 8; i++) {\n        if (names[i] == note) {\n            playTone(tones[i], duration);\n        }\n    }\n}\n")),(0,o.kt)("h2",{id:"example-code-2"},(0,o.kt)("strong",{parentName:"h2"},"Example Code 2")),(0,o.kt)("p",null,"This example demonstrates an alarm when the CO2 value is greater than 1000ppm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <Wire.h>\n#include <SPI.h>\n#include <SD.h>\n#include <SensirionI2CScd4x.h>\n\n#define Buzzer  19 //Buzzer GPIO\n\nSensirionI2CScd4x scd4x;\nString SDDataString = "";\n\nvoid sensor_power_on(void) {\n  pinMode(18, OUTPUT);\n  digitalWrite(18, HIGH);\n}\n\nvoid sensor_scd4x_init(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  scd4x.begin(Wire);\n\n  // stop potentially previously started measurement\n  error = scd4x.stopPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n\n  // Start Measurement\n  error = scd4x.startPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute startPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n}\n\nvoid sensor_scd4x_get(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  Serial.print("sensor scd4x: ");\n  // Read Measurement\n  uint16_t co2;\n  float temperature;\n  float humidity;\n  error = scd4x.readMeasurement(co2, temperature, humidity);\n  if (error) {\n    Serial.print("Error trying to execute readMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  } else if (co2 == 0) {\n    Serial.println("Invalid sample detected, skipping.");\n  } else {\n    Serial.print("Co2:");\n    Serial.print(co2);\n    Serial.print("\\t");\n    Serial.print("Temperature:");\n    Serial.print(temperature);\n    Serial.print("\\t");\n    Serial.print("Humidity:");\n    Serial.println(humidity);\n  }\n\n\n  if( co2 > 1000 ) {\n    analogWrite(Buzzer, 10);\n  } else {\n    analogWrite(Buzzer, 0);\n  }\n}\n\n\n\nint cnt = 0;\nvoid setup() {\n  Serial.begin(115200);\n\n  sensor_power_on();\n\n  Wire.setSDA(20);\n  Wire.setSCL(21);\n  Wire.begin();\n\n  sensor_scd4x_init();\n\n  digitalWrite(Buzzer, OUTPUT);\n\n}\n\nvoid loop() {\n  delay(5000);\n  sensor_scd4x_get();\n}\n')),(0,o.kt)("h1",{id:"tech-support"},(0,o.kt)("strong",{parentName:"h1"},"Tech Support")),(0,o.kt)("p",null,"Don't worry, we've got you covered! Please visit our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/sensecap"},"Seeed Official Discord Channel")," to ask your questions!"),(0,o.kt)("p",null,"If you have large order or customization requirement, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}d.isMDXComponent=!0}}]);