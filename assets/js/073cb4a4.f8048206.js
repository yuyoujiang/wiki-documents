"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={description:"SenseCAP & Node-RED to Grafana",title:"SenseCAP & Node-RED to Grafana",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_grafana",last_update:{date:"1/13/2023",author:"shuxu hu"}},i="Connecting SenseCAP to Grafana via Node-RED",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_grafana",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_grafana",title:"SenseCAP & Node-RED to Grafana",description:"SenseCAP & Node-RED to Grafana",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_grafana.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services",slug:"/K1100_SenseCAP_to_grafana",permalink:"/K1100_SenseCAP_to_grafana",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_grafana.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"SenseCAP & Node-RED to Grafana",title:"SenseCAP & Node-RED to Grafana",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_grafana",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP & Node-RED to Datacake",permalink:"/K1100_SenseCAP_to_datacake"},next:{title:"Advanced WiFi Usage",permalink:"/Wio-Terminal-Advanced-WiFi"}},l={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Grafana",id:"grafana",level:2},{value:"Create MQTT Node",id:"create-mqtt-node",level:2},{value:"Start InfluxDB OSS",id:"start-influxdb-oss",level:2},{value:"Configure InfluxDB",id:"configure-influxdb",level:2},{value:"Configure Node-RED",id:"configure-node-red",level:2},{value:"Configure Grafana",id:"configure-grafana",level:2},{value:"Query and visualize data",id:"query-and-visualize-data",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-sensecap-to-grafana-via-node-red"},"Connecting SenseCAP to Grafana via Node-RED"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SenseCAP K1100 - The Sensor Prototype Kit")," represents Seeed Studio concentrating the essence of LoRa\xae communication on technology and edge intelligence products, for the easiest deploying and mastering of LoRa\xae and IoT applications."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100/banner.png"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",null,"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,o.kt)("font",{color:"white",size:4},(0,o.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("strong",null,"S2100 ",(0,o.kt)("br",null)," Data Logger"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("strong",null,"S2101 ",(0,o.kt)("br",null)," Air Temp & Humidity"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("strong",null,"S2102 ",(0,o.kt)("br",null)," Light"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("strong",null,"S2103 ",(0,o.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("strong",null,"S2104 ",(0,o.kt)("br",null)," Soil Moisture & Temp"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("strong",null,"S2105 ",(0,o.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("strong",null,"S2110 ",(0,o.kt)("br",null)," LoRaWAN\xae Controller"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("strong",null,"S2120 ",(0,o.kt)("br",null)," 8-in-1 Weather Station")))))),(0,o.kt)("h2",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,"Grafana is an open source solution for running data analytics, pulling up metrics that make sense of the massive amount of data & to monitor our apps with the help of cool customizable dashboards. Grafana connects with every possible data source, commonly referred to as databases such as Graphite, Prometheus, Influx DB, ElasticSearch, MySQL, PostgreSQL etc. Grafana being an open source solution also enables us to write plugins from scratch for integration with several different data sources. The tool helps us study, analyse & monitor data over a period of time, technically called time series analytics."),(0,o.kt)("p",null,"It helps us track the user behaviour, application behaviour, frequency of errors popping up in production or a pre-prod environment, type of errors popping up & the contextual scenarios by providing relative data."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/1.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"The content of this chapter will continue to use the Node-RED introduced earlier and use Grafana to visualize data from your InfluxDB 2.4 instance."),(0,o.kt)("p",null,"Before doing so, please prepare the following."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you haven't installed or don't know what Node-RED is, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/"},"Node-RED & SenseCAP Tutorials"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start by deploying SenseCAP to InfluxDB's Node RED, details of which can be found in the wiki ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_SenseCAP_to_influxdb/"},"Connect SenseCAP to InfluxDB via Node-RED"),"."))),(0,o.kt)("h2",{id:"create-mqtt-node"},"Create MQTT Node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Start Node-RED"),(0,o.kt)("p",null,"Start Node-RED by typing the command ",(0,o.kt)("inlineCode",{parentName:"p"},"node-red")," in the terminal and open a browser and enter the address ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://localhost:1880"},"http://localhost:1880"))," in the address bar to access the editor of Node-RED."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Create MQTT Node"),(0,o.kt)("p",null,"We use ",(0,o.kt)("strong",{parentName:"p"},"Network -> mqtt in")," node and configure mqtt in the format of the SenseCAP API as requested in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node"},"previous tutorial"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Server: openstream.api.sensecap.seeed.cc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Port: 1883")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Protocol: MQTT V3.1.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Client ID: The format is ",(0,o.kt)("inlineCode",{parentName:"p"},"org-<Organization ID>-<Random ID>")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,o.kt)("a",{parentName:"li",href:"/K1100_sensecap_node-red#get-the-sensecap-api"},"Get the SenseCAP API"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Random ID>")," uses your own randomly generated numbers or lowercase letters."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Topic Format: ",(0,o.kt)("inlineCode",{parentName:"p"},"/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>")))),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"OrgID"),(0,o.kt)("td",{align:"center"},"Your organization ID. We have obtained it in the Get the SenseCAP API.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"DevEUI"),(0,o.kt)("td",{align:"center"},"Unique identification of sensor devices. This information can be found on the sticker on the back of the Grove - Wio E5, as well as in the SenseCAP console device.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"Channel"),(0,o.kt)("td",{align:"center"},"A physical interface on the device to which the sensor is connected. For the K1100 kit, the default value here is 1.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"Reserved"),(0,o.kt)("td",{align:"center"},"Reserved Fields.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"MeasurementID"),(0,o.kt)("td",{align:"center"},"Measured value ID. This ID can be found in the Measurement IDs section of the ",(0,o.kt)("a",{href:"https://sensecap-docs.seeed.cc/sensor_types_list.html",target:"_blank"},"SenseCAP documentation"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Validate MQTT nodes"),(0,o.kt)("p",null,"Once configured, please click the ",(0,o.kt)("strong",{parentName:"p"},"Deploy")," button in the top right corner to check if the configuration was successful. If it is filled in correctly, then the word ",(0,o.kt)("strong",{parentName:"p"},"Connected")," will be displayed."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png"})),(0,o.kt)("h2",{id:"start-influxdb-oss"},"Start InfluxDB OSS"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"}," You can refer to the detailed ",(0,o.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.4/install/?t=Windows#start-influxdb"},"tutorial")," provided by InfuxDB to complete the installation and deployment of InfluxDB, which is compatible with different systems. The following will guide the installation using a Windows 11 system as an example.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Download the InfluxDB v2.4"),(0,o.kt)("p",null,"Please click ",(0,o.kt)("a",{parentName:"p",href:"https://dl.influxdata.com/influxdb/releases/influxdb2-2.4.0-windows-amd64.zip"},"here")," to download the InfluxDB v2.4 zip file."),(0,o.kt)("p",null,"Expand the downloaded archive into ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\InfluxData\\")," and rename the files if desired."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Start InfluxDB"),(0,o.kt)("p",null,"In Powershell, navigate into ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\InfluxData\\influxdb")," and start InfluxDB by running the influxd daemon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd -Path 'C:\\Program Files\\InfluxData\\influxdb'\n.\\influxd\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"}," Use Powershell or WSL to execute influx and influxd commands. The command line examples in this documentation use influx and influxd as if installed on the system ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". If these binaries are not installed on your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),", replace influx and influxd in the provided examples with ",(0,o.kt)("inlineCode",{parentName:"p"},".\\influx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".\\influxd")," respectively.")),(0,o.kt)("p",null,"By default, InfluxDB uses TCP port ",(0,o.kt)("inlineCode",{parentName:"p"},"8086")," for client-server communication over the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.4/reference/api/"},"InfluxDB HTTP API"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/3.png"})),(0,o.kt)("h2",{id:"configure-influxdb"},"Configure InfluxDB"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Register an InfluxDB account"),(0,o.kt)("p",null,"Continue with the steps above and register an account on the page that opens."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/11.png"})),(0,o.kt)("p",null,"Please make a note of the ",(0,o.kt)("strong",{parentName:"p"},"Organisation Name")," you set here, we will use it later in the Node RED configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Obtain URL"),(0,o.kt)("p",null,"By default, InfluxDB uses TCP port ",(0,o.kt)("inlineCode",{parentName:"p"},"8086")," for client-server communication over the InfluxDB HTTP API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:8086/\n")),(0,o.kt)("p",null,"For this section the InfluxDB URL is as follows, please note it down, we will use it later in the Node RED configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Obtain API Token"),(0,o.kt)("p",null,"Go to the API Tokens page as shown below, create a new API interface for Node RED and write down the Token."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/12.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/13.png"})),(0,o.kt)("h2",{id:"configure-node-red"},"Configure Node-RED"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Download InfluxDB Paletts"),(0,o.kt)("p",null,"Click on the upper-right menu bar and select Settings."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png"})),(0,o.kt)("p",null,"Search and install ",(0,o.kt)("strong",{parentName:"p"},"node-red-contrib-influxdb")," in the ",(0,o.kt)("strong",{parentName:"p"},"Paletts -> Install"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/12.png"})),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"influx.batch")," from the storage bar on the left\uff0cdouble-click it to enter the configuration page, then click the edit button to edit ",(0,o.kt)("strong",{parentName:"p"},"influx.batch")," node."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/13.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Edit ",(0,o.kt)("strong",{parentName:"p"},"influx.batch")," node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Version"),": 2.0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"URL"),": ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:8086/"},"http://localhost:8086/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TOKEN"),":  Which you generate in ",(0,o.kt)("strong",{parentName:"li"},"Obtain API Token")," Section.")),(0,o.kt)("p",null,"When you have finished click on the ",(0,o.kt)("strong",{parentName:"p"},"Add")," button in the top right hand corner to return to the properties page of the influx batch, at this point please fill in your Orgnization Name and Bucket name."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/20.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Configure the function node"),(0,o.kt)("p",null,"Data reporting to InfluxDB needs to follow a specific data format, so it's necessary to add a function node to process the data format."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/18.png"})),(0,o.kt)("p",null,"Drag out the function node from the function bar on the left, double-click it to enter the edit page, then copy the code to On Message."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    var payload = msg.payload;\n    var topic = msg.topic;\n    var strs = topic.split("/");\n    var length = strs.length\n    if (length >= 2) {\n        var measurementId = strs[length - 1]\n        var body = {}\n        var value = payload.value\n        if (measurementId == 4100) {\n            body.co2 = value\n            measurement = "co2"\n        } else if (measurementId == 4103) {\n            body.soilmoisture = value\n            measurement = "soilmoisture"\n        } else if (measurementId == 4150) {\n            body.accelX = value\n            measurement = "accelX"\n        } else if (measurementId == 4151) {\n            body.accelY = value\n            measurement = "accelY"\n        } else if (measurementId == 4152) {\n            body.accelZ = value\n            measurement = "accelZ"\n        } else if (measurementId == 4192) {\n            body.soundintensity = value\n            measurement = "soundintensity"\n        } else if (measurementId == 4193) {\n            body.lightIntensity = value\n            measurement = "lightIntensity"\n        } else if (measurementId == 4195) {\n            body.tvoc = value\n            measurement = "tvoc"\n        } else if (measurementId == 4097) {\n            body.airtemperature = value\n            measurement = "airtemperature"\n        } else if (measurementId == 4098) {\n            body.airhumidity = value\n            measurement = "airhumidity"\n        } else if (measurementId == 4175) {\n            body.AIdetection_1 = value\n            measurement = "AIdetection_1"\n        } else if (measurementId == 4176) {\n            body.AIdetection_2 = value\n            measurement = "AIdetection_2"\n        } else if (measurementId == 4177) {\n            body.AIdetection_3 = value\n            measurement = "AIdetection_3"\n        } else if (measurementId == 4178) {\n            body.AIdetection_4 = value\n            measurement = "AIdetection_4"\n        } else if (measurementId == 4179) {\n            body.AIdetection_5 = value\n            measurement = "AIdetection_5"\n        } else if (measurementId == 4180) {\n            body.AIdetection_6 = value\n            measurement = "AIdetection_6"\n        } else if (measurementId == 4181) {\n            body.AIdetection_7 = value\n            measurement = "AIdetection_7"\n        } else if (measurementId == 4182) {\n            body.AIdetection_8 = value\n            measurement = "AIdetection_8"\n        } else if (measurementId == 4183) {\n            body.AIdetection_9 = value\n            measurement = "AIdetection_9"\n        } else if (measurementId == 4184) {\n            body.AIdetection_10 = value\n            measurement = "AIdetection_10"\n        }\n        msg.payload = [{\n            measurement: measurement,\n            fields: body,\n            tags: {\n                device: "SenseCAP K1100"\n            },\n            timestamp: new Date()\n        }];\n    }\n    return msg;\n}\n')),(0,o.kt)("p",null,"Then we connect all the nodes and click on the\xa0",(0,o.kt)("strong",{parentName:"p"},"Deploy"),"\xa0button and if everything is set up correctly you will be able to see the\xa0mqtt in\xa0node showing connected."),(0,o.kt)("p",null,"If you want to see the logging information of the data, you can add a debug node after the function node."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/17.png"})),(0,o.kt)("p",null,"Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP PaaS server, then we can check the data on Node-RED debug log."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/21.png"})),(0,o.kt)("h2",{id:"configure-grafana"},"Configure Grafana"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Install Grafana"),(0,o.kt)("p",null,"Grafana can be installed on many different operating systems. For a list of the minimum hardware and software requirements, as well as instructions on installing Grafana, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/v9.0/setup-grafana/installation/"},"Install Grafana"),"."),(0,o.kt)("p",null,"Take Windows 11 as an example, download the installation package from the ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=windows"},"Grafana website")," and double click to open it for installation."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/16.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Sign in to Grafana"),(0,o.kt)("p",null,"Open your web browser and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),". The default HTTP port that Grafana listens to is ",(0,o.kt)("inlineCode",{parentName:"p"},"3000")," unless you have configured a different port."),(0,o.kt)("p",null,"On the sign-in page, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," for the username and password."),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Sign in"),". If successful, you will see a prompt to change the password."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/17.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Add Data Source"),(0,o.kt)("p",null,"On the main page, we click on the gear icon at the bottom left and then click on ",(0,o.kt)("strong",{parentName:"p"},"Add data source"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/18.png"})),(0,o.kt)("p",null,"Select InfluxDB from the list of available data sources."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/7.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Configure InfluxDB Data Source"),(0,o.kt)("p",null,"On the Data Source configuration page, enter a name for your InfluxDB data source."),(0,o.kt)("p",null,"Then, choose or enter the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Query Language"),": Flux"),(0,o.kt)("li",{parentName:"ul"},"Under HTTP, do the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"URL"),": ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:8086/"},"http://localhost:8086/")))),(0,o.kt)("li",{parentName:"ul"},"Under Auth, do the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Close ",(0,o.kt)("strong",{parentName:"li"},"Basic auth"),"."))),(0,o.kt)("li",{parentName:"ul"},"Under InfluxDB Details, do the following:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Organization"),": organization ID. The organisation ID can be viewed on the ",(0,o.kt)("strong",{parentName:"li"},"About")," page of InfuxDB."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token"),": Your InfluxDB API token."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Default Bucket"),": The default bucket to use in Flux queries.")))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/14.png"})),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Save & Test"),". Grafana attempts to connect to the InfluxDB 2.4 data source and returns the results of the test. If all goes well, you will see the following output message."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_grafana/15.png"})),(0,o.kt)("h2",{id:"query-and-visualize-data"},"Query and visualize data"),(0,o.kt)("p",null,"With your InfluxDB connection configured, use Grafana and Flux to query and visualize time series data stored in your InfluxDB instance."),(0,o.kt)("p",null,"For more information about using Grafana, see the ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/"},"Grafana documentation"),". If you\u2019re just learning Flux, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/flux/v0.x/get-started/"},"Get started with Flux"),"."),(0,o.kt)("p",null,"We also welcome you to submit your data dashboards to us, and we look forward to your work!"),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);