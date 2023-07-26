"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?r.createElement(g,l(l({ref:t},m),{},{components:a})):r.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={description:"Sensor - Accelerometer",title:"Sensor - Accelerometer",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sensor_accelerometer",last_update:{date:"1/5/2023",author:"shuxu hu"}},l="Seeed Accelerometer Selection Guide",o={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Sensor_accelerometer",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Sensor_accelerometer",title:"Sensor - Accelerometer",description:"Sensor - Accelerometer",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Sensor_accelerometer.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Sensor_accelerometer",permalink:"/Sensor_accelerometer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Sensor_accelerometer.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672848e3,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Sensor - Accelerometer",title:"Sensor - Accelerometer",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sensor_accelerometer",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - D7S Vibration Sensor",permalink:"/grove-d7s-vibration-sensor"},next:{title:"Grove - 3 Axis Digital Accelerometer(\xb116g)",permalink:"/Grove-3-Axis_Digital_Accelerometer-16g"}},s={},c=[{value:"What is Accelerometer",id:"what-is-accelerometer",level:2},{value:"How does an accelerometer work",id:"how-does-an-accelerometer-work",level:3},{value:"Piezoelectric effect",id:"piezoelectric-effect",level:4},{value:"Change in Capacitance",id:"change-in-capacitance",level:4},{value:"Field of Applicaitons",id:"field-of-applicaitons",level:2},{value:"Accelerometer Sensors at Seeed",id:"accelerometer-sensors-at-seeed",level:2},{value:"Which One is Your Preference",id:"which-one-is-your-preference",level:3},{value:"Warmly Notice",id:"warmly-notice",level:3},{value:"Resource",id:"resource",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seeed-accelerometer-selection-guide"},"Seeed Accelerometer Selection Guide"),(0,n.kt)("p",null,"We have released various types of Accelerometer sensors in the recent years. You may find it difficult to make a choice between them. We feel your pain and let's take a close look at them and workout which one is best suited for you!"),(0,n.kt)("p",null,"For all the Accelerometer sensors in our bazaar, please click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/Accelerometer.html"},"Bazaar Accelerometer tag")," to check."),(0,n.kt)("h2",{id:"what-is-accelerometer"},"What is Accelerometer"),(0,n.kt)("p",null,"An accelerometer is a sensor capable of measuring objects' acceleration. During the movement process, the acceleration value is obtained by measuring the inertial force of the mass and Newton's Second law. According to the different sensitive elements of the sensor, common acceleration sensors are including capacitive, inductive, strain, piezoresistive, piezoelectric and etc. Via measuring the acceleration due to gravity, you can calculate the tilt angle of the device relative to the horizontal. And you can also figure out motions of device by analyzing dynamic acceleration. "),(0,n.kt)("p",null,"For instance, recently a ninety-year-old American old lady said that after experiencing a traffic accident, the fall detection function of a smart watch successfully saved her life. When she walked out of the store and went home, a woman knocked her down while driving. At that time, the old lady could not find the phone to call the emergency service, but the smart watch she was wearing detected that she had fallen and started to ask her family for help.Thanks to a new generation of three-axis MEMS acceleration sensor and gyroscope chip technology, some smart watches now are capable of recognizing a variety of falling postures."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Accelerometer.png"}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null,"Figure 1"),". ",(0,n.kt)("i",null,"Smart watch with a 3-axis accelerometer ( Image from Sensorexpert, 2015 )"))),(0,n.kt)("h3",{id:"how-does-an-accelerometer-work"},"How does an accelerometer work"),(0,n.kt)("p",null,"There exist two ways where an accelerometer works: Piezoelectric effect, and Change in Capacitance. Following is the illustration:"),(0,n.kt)("h4",{id:"piezoelectric-effect"},"Piezoelectric effect"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Piezoelectric effect.png"}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null,"Figure 2"),". ",(0,n.kt)("i",null,"Working principle of Piezoelectric effect ( Image from explainthatstuff, 2019 )"))),(0,n.kt)("p",null,"As shown in the model in the figure above, accelerometers contain microscopic crystal structures, generating voltages when vibrations occur, and then voltage generated will create a reading of how much acceleration there is."),(0,n.kt)("h4",{id:"change-in-capacitance"},"Change in Capacitance"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Change in Capacitance.png"}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null,"Figure 3"),". ",(0,n.kt)("i",null,"Working principle of Change in Capacitance ( Image from explainthatstuff, 2019 )"))),(0,n.kt)("p",null,"This method plays with the formula in finding acceleration. Since we know that Force = Mass x Acceleration, to find acceleration, it\u2019ll take the Force present / Mass of an object."),(0,n.kt)("p",null,"This is how the capacitance effect in a MEMS accelerometer works:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"2 capacitive plates are present."),(0,n.kt)("li",{parentName:"ol"},"The mass of an object presses on one of the capacitor plates, changing the capacitance and allowing the force to be measured."),(0,n.kt)("li",{parentName:"ol"},"With force and mass of object known, acceleration is eventually measured.")),(0,n.kt)("h2",{id:"field-of-applicaitons"},"Field of Applicaitons"),(0,n.kt)("p",null,"There are a numerous use of these accelerometer sensors. Particularly, using these kinds of sensors, human beings can be monitored and benifitted or even saved from different conditions. Therefore the accelerometer sensors play important roles in various sectors, which include industry, medical, social applications, and domestic applications for monitoring motions of variety objects."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field of application"),(0,n.kt)("th",{parentName:"tr",align:null},"Function"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Automobile safety"),(0,n.kt)("td",{parentName:"tr",align:null},"The acceleration sensor is mainly used in the safety performance of automobile airbags, anti-lock braking systems, traction control systems, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Game control"),(0,n.kt)("td",{parentName:"tr",align:null},"The acceleration sensor can detect the change of the inclination angle of up, down, left and right, so it is very simple to control the direction of the front, back, left and right of the objects in the game by tilting the handheld device forward and backward.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Automatic image flip"),(0,n.kt)("td",{parentName:"tr",align:null},"Use the acceleration sensor to detect the rotation and direction of the handheld device to achieve the normalization of the image to be displayed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Anti-shake function"),(0,n.kt)("td",{parentName:"tr",align:null},"Use the acceleration sensor to detect the vibration / shake amplitude of the handheld device. When the vibration / shake amplitude is too large, lock the camera shutter so that the captured image is always clear")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Electronic compass tilt correction"),(0,n.kt)("td",{parentName:"tr",align:null},"The magnetic sensor determines the direction by measuring the magnitude of the magnetic flux. When the magnetic sensor is tilted, the geomagnetic flux passing through the magnetic sensor will change, resulting in an error in the direction. The principle that the acceleration sensor can measure the tilt angle can compensate for the tilt of the electronic compass.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pedometer function"),(0,n.kt)("td",{parentName:"tr",align:null},"The acceleration sensor can detect the AC signal and the vibration of the object. When a person walks, it will generate a certain regular vibration, and the acceleration sensor can detect the zero crossing of the vibration, so as to calculate the number of steps taken by the person or the number of steps taken by the runner. Thereby calculating the displacement that the person moves. And using a certain formula can calculate the calorie consumption.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Compensation for dead angle of GPS navigation system"),(0,n.kt)("td",{parentName:"tr",align:null},"The GPS system determines the position of the object by receiving three satellite signals distributed at 120 degrees. On some special occasions and landforms, such as tunnels, tall buildings, and jungle areas, the GPS signal will become weak or even completely lost. This is the so-called dead end. And by installing an acceleration sensor and the inertial navigation that we have used before, the dead zone of the system can be measured. Integrating the acceleration sensor once becomes the amount of speed change per unit time, thereby measuring the movement of objects in the dead zone.")))),(0,n.kt)("h2",{id:"accelerometer-sensors-at-seeed"},"Accelerometer Sensors at Seeed"),(0,n.kt)("p",null,"There're various accelerometers at Seeed and the following image illustrates a typical Grove - 3-Axis Digital Accelerometer \xb116g Ultra-low Power (BMA400):"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg",alt:null})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h3",{id:"which-one-is-your-preference"},"Which One is Your Preference"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Thumbnail"),(0,n.kt)("th",{parentName:"tr",align:null},"Operate voltage"),(0,n.kt)("th",{parentName:"tr",align:null},"Measurement Range"),(0,n.kt)("th",{parentName:"tr",align:null},"Sensitivity"),(0,n.kt)("th",{parentName:"tr",align:null},"Input interface"),(0,n.kt)("th",{parentName:"tr",align:null},"Power Consumption"),(0,n.kt)("th",{parentName:"tr",align:null},"Click to buy"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer%C2%B116g_Ultra-low_Power-BMA400/"},"Grove - 3-Axis Digital Accelerometer \xb116g Ultra-low Power (BMA400)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/thumbnail.jpg"})),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb12g,\xb14g,\xb18g,\xb116g"),(0,n.kt)("td",{parentName:"tr",align:null},"1024LSB/g@\xb12g 512LSB/g@\xb14g 256LSB/g@\xb18g 128LSB/g@\xb116g"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"18uA@5V ",(0,n.kt)("a",{parentName:"td",href:"mailto:14uA@3.3V"},"14uA@3.3V")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g-Ultra-low-Power-BMA400.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-16g/"},"Grove - 3 Axis Digital Accelerometer(\xb116g)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Thumb.png"})),(0,n.kt)("td",{parentName:"tr",align:null},"3V-5.5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb116g"),(0,n.kt)("td",{parentName:"tr",align:null},"3.9mg / LSB"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-3-Axis_Compass_V1.0/"},"Grove - 3-Axis Compass V1.0")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/thumbnail.jpg"})),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-3-Axis_Digitial_Compass_v2.0/"},"Grove - 3-Axis Digitial Compass v2.0")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg"})),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C, SPI"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-1.5g/"},"Grove - 3-Axis Digital Accelerometer(\xb11.5g)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg"})),(0,n.kt)("td",{parentName:"tr",align:null},"3V-5.5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb11.5g"),(0,n.kt)("td",{parentName:"tr",align:null},"21LSB/g"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"47\u03bcA@1 ODR"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-400g/"},"Grove - 3-Axis Digital Accelerometer(\xb1400g)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/45d_small.jpg"})),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb1100g,\xb1200g,\xb1400g"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"300\u03bc",(0,n.kt)("a",{parentName:"td",href:"mailto:A@3.3V"},"A@3.3V")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-400g.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-3-Axis_Analog_Accelerometer/"},"Grove - 3-Axis Analog Accelerometer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/thumb1.png"})),(0,n.kt)("td",{parentName:"tr",align:null},"3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb13g"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"Analog"),(0,n.kt)("td",{parentName:"tr",align:null},"350\u03bcA@3V"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Gyro/"},"Grove - 3-Axis Digital Gyro")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Thumb3.png"})),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"14 LSBs per \xb0/sec"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-6-Axis_AccelerometerAndGyroscope/"},"Grove - 6-Axis Accelerometer&Gyroscope")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Thumb4.png"})),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb12,\xb14,\xb18,\xb116g"),(0,n.kt)("td",{parentName:"tr",align:null},"0.061(FS=\xb12) 0.122(FS=\xb14) 0.244(FS=\xb18) 0.488(FS=\xb116)mg/LSB"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"0.9\u03bcA3.3V 1.25\u03bcA@5V"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Gyroscope.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-6-Axis_AccelerometerAndCompass_V2.0/"},"Grove - 6-Axis Accelerometer&Compass V2.0")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG"})),(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb12g,\xb14g,\xb18g,\xb116g"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C,SPI"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Compass-v2-0.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-IMU_9DOF_v2.0/"},"Grove - IMU 9DOF v2.0")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg"})),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb12,\xb14,\xb18,\xb116g"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C,SPI"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-IMU-9DOF-v2-0.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-IMU_10DOF/"},"Grove - IMU 10DOF ")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg"})),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb12,\xb14,\xb18,\xb116g"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-IMU_10DOF_v2.0/"},"Grove - IMU 10DOF v2.0")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg"})),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V-5V"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb12g,\xb14g,\xb18g,\xb116g"),(0,n.kt)("td",{parentName:"tr",align:null},"/"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"2.7\u03bcA@1Hz"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-IMU-10DOF-v2-0.html"},"Buy Now"))))),(0,n.kt)("h3",{id:"warmly-notice"},"Warmly Notice"),(0,n.kt)("p",null,"The chart above tells a variety of attributions of each accelerometer with different measurement ranges, sensitivities and power consumptions, you can choose the one that is the most suited for you. What's more, if communication interface is one of the considerations when doing preferences, we would suggest that SPI communication can operate faster than I2C, which may be an advantage in some conditions."),(0,n.kt)("p",null,"For more detailed information of individuals, please visit their own pages via the links left beside the images of the products."),(0,n.kt)("h2",{id:"resource"},"Resource"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reference",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://old.sensorexpert.com.cn/Article/qiantansanzhoujiasud_1.html"},"Application history of 3-axis acceleration sensor in step counting of electronic products.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.explainthatstuff.com/accelerometers.html"},"Accelerometers")," ")))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Plug 'n Play Remote Control Sailboat")),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Motorcycle Data App"),": Learn from your ride like a pro! Motorcycle race teams have used IMU data for years, with RideData+Arduino it's easy for you to do the same."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);