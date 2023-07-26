"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28835],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={description:"Jetson Resource",title:"Jetson Resource",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_Resource",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},i="Jetson Resource",s={unversionedId:"Edge/reComputer/Software/reComputer_Jetson_Series_Resource",id:"Edge/reComputer/Software/reComputer_Jetson_Series_Resource",title:"Jetson Resource",description:"Jetson Resource",source:"@site/docs/Edge/reComputer/Software/reComputer_Jetson_Series_Resource.md",sourceDirName:"Edge/reComputer/Software",slug:"/reComputer_Jetson_Series_Resource",permalink:"/reComputer_Jetson_Series_Resource",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Software/reComputer_Jetson_Series_Resource.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672761600,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"Jetson Resource",title:"Jetson Resource",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_Resource",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Getting Started with alwaysAI on NVIDIA\xae Jetson",permalink:"/alwaysAI-Jetson-Getting-Started"},next:{title:"Getting Started with Cochl.Sense on NVIDIA\xae Jetson Devices",permalink:"/Cochl.Sense-Jetson-Getting-Started"}},l={},d=[{value:"Jetson software",id:"jetson-software",level:2},{value:"NVIDIA JetPack SDK",id:"nvidia-jetpack-sdk",level:3},{value:"NVIDIA TAO and pretrained AI models",id:"nvidia-tao-and-pretrained-ai-models",level:3},{value:"NVIDIA Triton Inference Server",id:"nvidia-triton-inference-server",level:3},{value:"NVIDIA Riva",id:"nvidia-riva",level:3},{value:"NVIDIA DeepStream SDK",id:"nvidia-deepstream-sdk",level:3},{value:"NVIDIA Isaac",id:"nvidia-isaac",level:3},{value:"Jetson Modules",id:"jetson-modules",level:2},{value:"Jetson Xavier NX Series",id:"jetson-xavier-nx-series",level:3},{value:"Jetson Nano",id:"jetson-nano",level:3},{value:"Brush guide",id:"brush-guide",level:2},{value:"Support",id:"support",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jetson-resource"},"Jetson Resource"),(0,o.kt)("h2",{id:"jetson-software"},(0,o.kt)("a",{parentName:"h2",href:"https://developer.nvidia.com/embedded/develop/software"},"Jetson software")),(0,o.kt)("p",null,"All NVIDIA\xae Jetson\u2122 modules and developer kits are supported by the same software stack, enabling you to develop once and deploy everywhere. Jetson Software is designed to provide end-to-end acceleration for AI applications and accelerate your time to market. We bring the same powerful NVIDIA technologies that power data center and cloud deployments to the edge."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"nvidia-jetpack-sdk"},(0,o.kt)("a",{parentName:"h3",href:"https://developer.nvidia.com/embedded/jetpack"},"NVIDIA JetPack SDK")),(0,o.kt)("p",null,"The Jetson software stack starts with the NVIDIA JetPack\u2122 SDK, which provides a complete development environment including CUDA-X acceleration libraries and other NVIDIA technologies to kickstart your development. JetPack includes the Jetson Linux driver package, which provides the Linux kernel, bootloader, NVIDIA drivers, flash utilities, sample filesystem, and toolchain for the Jetson platform. It also includes security features, over-the-air updates, and more. JetPack includes the NVIDIA container runtime to enable Cloud-Native technologies and workflows at the edge."),(0,o.kt)("p",null,"Learn more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/jetpack"},"JetPack SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/linux-tegra"},"Jetson Linux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/jetson-cloud-native"},"Cloud-Native on Jetson"))),(0,o.kt)("h3",{id:"nvidia-tao-and-pretrained-ai-models"},(0,o.kt)("a",{parentName:"h3",href:"https://developer.nvidia.com/tao"},"NVIDIA TAO and pretrained AI models")),(0,o.kt)("p",null,"NVIDIA TAO simplifies time-consuming parts of deep learning workflows, from data preparation to training to optimization, reducing time-to-value."),(0,o.kt)("p",null,"Learn more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/tao"},"TAO")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/tao-toolkit"},"Pretrained Models"))),(0,o.kt)("h3",{id:"nvidia-triton-inference-server"},(0,o.kt)("a",{parentName:"h3",href:"https://developer.nvidia.com/nvidia-triton-inference-server"},"NVIDIA Triton Inference Server")),(0,o.kt)("p",null,"The NVIDIA Triton\u2122 inference server simplifies the deployment of AI models at scale. Triton Inference Server is open source and provides a single standardized inference platform that can support multi-frame model inference in different deployments such as data center, cloud, embedded devices, and virtualized environments. It supports different types of inference queries with advanced batching and scheduling algorithms, and supports real-time model updates."),(0,o.kt)("p",null,"Learn more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/nvidia-triton-inference-server"},"NVIDIA Triton Inference Server"))),(0,o.kt)("h3",{id:"nvidia-riva"},(0,o.kt)("a",{parentName:"h3",href:"https://developer.nvidia.com/riva"},"NVIDIA Riva")),(0,o.kt)("p",null,"NVIDIA Riva is a fully accelerated SDK for building multimodal conversational AI applications using end-to-end deep learning pipelines. The Riva SDK includes pretrained conversational AI models, the NVIDIA TAO toolkit, and optimized end-to-end skills for speech, vision, and natural language processing (NLP) tasks."),(0,o.kt)("p",null,"Learn more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/riva"},"Riva"))),(0,o.kt)("h3",{id:"nvidia-deepstream-sdk"},(0,o.kt)("a",{parentName:"h3",href:"https://developer.nvidia.com/deepstream-sdk"},"NVIDIA DeepStream SDK")),(0,o.kt)("p",null,"The NVIDIA DeepStream SDK provides a complete stream analytics toolkit for AI-based multi-sensor processing and video and image understanding on Jetson. DeepStream is an integral part of NVIDIA Metropolis, a platform for building end-to-end services and solutions that transform pixel and sensor data into actionable insights. Learn more: DeepStream >"),(0,o.kt)("p",null,"Learn more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/deepstream-sdk"},"DeepStream >"))),(0,o.kt)("h3",{id:"nvidia-isaac"},(0,o.kt)("a",{parentName:"h3",href:"https://developer.nvidia.com/isaac-sdk"},"NVIDIA Isaac")),(0,o.kt)("p",null,"NVIDIA Isaac ROS GEM is a hardware acceleration package that makes it easier for ROS developers to build high-performance solutions on NVIDIA hardware. NVIDIA Isaac Sim, powered by Omniverse, is a scalable robotics simulation application. It includes Replicator - a tool that generates various synthetic datasets for training perception models. Isaac Sim is also a tool that supports realistic, physically accurate virtual environments to develop, test and manage AI-based robots."),(0,o.kt)("p",null,"Learn more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/isaac-ros-gems"},"Isaac ROS GEM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/isaac-sim"},"Isaac Sim"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"jetson-modules"},(0,o.kt)("a",{parentName:"h2",href:"https://developer.nvidia.com/embedded/jetson-modules"},"Jetson Modules")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang2.png",alt:"pir",width:500,height:"auto"})),(0,o.kt)("p",null,"NVIDIA \xae Jetson\u2122 brings accelerated AI performance to edge devices in an energy-efficient and compact form factor. The Jetson family of modules all use the same NVIDIA CUDA-X\u2122 software and support cloud-native technologies such as containerization and orchestration to build, deploy and manage AI at the edge."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-modules"},"Learn about all Jetson modules >")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"reComputer Jetson applies these modules:")),(0,o.kt)("h3",{id:"jetson-xavier-nx-series"},"Jetson Xavier NX Series"),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",{align:"center"}),(0,o.kt)("th",{align:"center"})),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang3.jpg",alt:"pir",width:300,height:"auto"}))),(0,o.kt)("td",{align:"left"},"Jetson Xavier NX brings up to 21 TOPs of AI computing power to the edge in a small form factor module. It can run multiple modern neural networks in parallel and process data from multiple high-resolution sensors as a requirement for a complete AI system. Jetson Xavier NX series can be used in production applications and supports all popular AI frameworks.",(0,o.kt)("br",null)," Jetson Xavier NX - ",(0,o.kt)("a",{href:"https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html"},"reComputer J2011"),(0,o.kt)("br",null)," Jetson Xavier NX 16GB - ",(0,o.kt)("a",{href:"https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html"},"reComputer J2012"))))),(0,o.kt)("h3",{id:"jetson-nano"},"Jetson Nano"),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",{align:"center"}),(0,o.kt)("th",{align:"center"})),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang4.jpg",alt:"pir",width:300,height:"auto"}))),(0,o.kt)("td",{align:"left"},"The Jetson Nano is a small, powerful computer for embedded AI systems and the IoTs, delivering the power of modern AI on a low-power platform. You can get up to speed quickly with the NVIDIA Jetpack SDK and a full desktop Linux environment and start exploring the new world of embedded products.",(0,o.kt)("br",null)," Jetson Nano - ",(0,o.kt)("a",{href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010"),", ",(0,o.kt)("a",{href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer J1020"))))),(0,o.kt)("h2",{id:"brush-guide"},"Brush guide"),(0,o.kt)("p",null,"Since reComputer Jetson series products have been equipped 16 GB eMMC, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu 18.04 LTS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NVIDIA JetPack 4.6")," are both pre-installed, you can directly apply it to develop your projects. If you want to re-flash, please visit the appropriate documentation below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/install_NVIDIA_software_to_Jetson-10-1-A0"},"J1010 carrier version")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Tutorial-of-A20X-Carrier-Boards/"},"Jetson A206 carrier board"))),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Ask and recevie questions on the Jetson Forum. NVIDIA engineers, community developers, and Jetson partners all contribute here. Check:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-nano"},"Jetson Nano forum")," for Jetson Nano developer kits and Jetson Nano production modules."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-xavier-nx"},"Jetson Xavier NX Forum")," for Jetson Xavier NX Development Kits and Jetson Xavier NX Production Modules.")),(0,o.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);