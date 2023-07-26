"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18339],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var r=n.createContext({}),p=function(e){var t=n.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(o),k=a,m=u["".concat(r,".").concat(k)]||u[k]||c[k]||l;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,i=new Array(l);i[0]=k;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},96933:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const l={description:"Google Assistant for reSpeaker",title:"Google Assistant for reSpeaker",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Google_Assistant",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,s={unversionedId:"Seeed_Elderly/reSpeaker/Application/Google_Assistant",id:"Seeed_Elderly/reSpeaker/Application/Google_Assistant",title:"Google Assistant for reSpeaker",description:"Google Assistant for reSpeaker",source:"@site/docs/Seeed_Elderly/reSpeaker/Application/Google_Assistant.md",sourceDirName:"Seeed_Elderly/reSpeaker/Application",slug:"/Google_Assistant",permalink:"/Google_Assistant",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/reSpeaker/Application/Google_Assistant.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Google Assistant for reSpeaker",title:"Google Assistant for reSpeaker",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Google_Assistant",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"ReSpeaker Solutions",permalink:"/ReSpeaker_Solutions"},next:{title:"Voice Interaction",permalink:"/Voice_Interaction"}},r={},p=[{value:"Before the start",id:"before-the-start",level:2},{value:"Geting Started",id:"geting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Set Up Your Project",id:"set-up-your-project",level:4},{value:"Enable the Google Assistant API",id:"enable-the-google-assistant-api",level:4},{value:"Install the SDK and Sample Code",id:"install-the-sdk-and-sample-code",level:4},{value:"Install Respeakerd",id:"install-respeakerd",level:4},{value:"Activate the Google Assistant.",id:"activate-the-google-assistant",level:4}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Front.jpg",alt:null})),(0,a.kt)("p",null,"This wiki is for ReSpeaker Core v2.0, we recommend you to read the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ReSpeaker_Core_v2.0/#preparation"},"Wiki of ReSpeaker Core v2.0")," first."),(0,a.kt)("h2",{id:"before-the-start"},"Before the start"),(0,a.kt)("p",null,"You need to make the following preparations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ReSpeaker Core v2.0 with the latest image"),(0,a.kt)("li",{parentName:"ul"},"Wi-Fi Network (make sure you can ping google with this network)"),(0,a.kt)("li",{parentName:"ul"},"PC or Mac"),(0,a.kt)("li",{parentName:"ul"},"One Micro-USB cables"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"},"PUTTY"))),(0,a.kt)("p",null,"We assume that you have read the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ReSpeaker_Core_v2.0/#preparation"},"Preparetion")," and set up the WiFi and Serial already. "),(0,a.kt)("p",null,"Now let's play \ud83d\ude03"),(0,a.kt)("h2",{id:"geting-started"},"Geting Started"),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,"This part is simple and easy, just plug your ReSpeaker Core v2.0 into your computer via the ",(0,a.kt)("inlineCode",{parentName:"p"},"OTG")," port."),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("h4",{id:"set-up-your-project"},"Set Up Your Project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.Add your Project")," ")),(0,a.kt)("p",null,"Open the ",(0,a.kt)("a",{parentName:"p",href:"https://console.actions.google.com/?pli=1"},"link")," to add your project."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If you do not have a google account, please sign in at google.com at first. \n"))),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add/Import project")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_0.png",alt:null})),(0,a.kt)("p",null,"Then tap your ",(0,a.kt)("inlineCode",{parentName:"p"},"Project name")," and pick the ",(0,a.kt)("inlineCode",{parentName:"p"},"Country/region"),". Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE PROJECT")," to continue."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_1.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.Register Model")," ")),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Connected properties ->DEVICE MODELS ->REGISTER MODEL")," as the picture below."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_2.png",alt:null})),(0,a.kt)("p",null,"Fill in your product info. then click ",(0,a.kt)("inlineCode",{parentName:"p"},"REGISTER MODEL")," to continue."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_3.png",alt:null})),(0,a.kt)("p",null,"Just click ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_4.png",alt:null})),(0,a.kt)("p",null,"Please make sure you have selected this option ",(0,a.kt)("inlineCode",{parentName:"p"},"ALL 7 traits"),", so that you can turn on all the permissiions. Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"SAVE TRAITS"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_5.png",alt:null})),(0,a.kt)("p",null,"Now please click the Project Name you have just created. For this demo, as you can see, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"ReSpeaker Core v2.0"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_6.png",alt:null})),(0,a.kt)("p",null,"You will see some info. as the following picture shown."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_7.png",alt:null})),(0,a.kt)("p",null,"Please mark down the ",(0,a.kt)("inlineCode",{parentName:"p"},"Model Id")," which is ",(0,a.kt)("inlineCode",{parentName:"p"},"respeaker-xxxx-respeaker-core-v2.0-xxxxx")," in this demo, it is important and you will use it later."),(0,a.kt)("p",null,"Now let's download the json file. Click the button in the upper right corner, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Download credentials.json")," to download the json file into your computer."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_8.png",alt:null})),(0,a.kt)("p",null,"Then use the ",(0,a.kt)("a",{parentName:"p",href:"https://winscp.net/eng/docs/lang:chs"},"WinCP")," or other transmission tools to copy the json file to your ReSpeaker Core v2.0.\nFor example, we copy it to the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/respeaker"),"."),(0,a.kt)("p",null,"Next, please click the gear in the upper left conner, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Project settings"),", remember the ",(0,a.kt)("inlineCode",{parentName:"p"},"Project ID")," which is `` in this demo.\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_9.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_10.png",alt:null})),(0,a.kt)("p",null,"Ok, let's check again, in this section you will get two IDs. "),(0,a.kt)("p",null,"The  Model ID ",(0,a.kt)("inlineCode",{parentName:"p"},"respeaker-xxxx-respeaker-core-v2.0-xxxxx")),(0,a.kt)("p",null,"The Project ID ",(0,a.kt)("inlineCode",{parentName:"p"},"respeaker-440eb")),(0,a.kt)("p",null,"They will be used later."),(0,a.kt)("h4",{id:"enable-the-google-assistant-api"},"Enable the Google Assistant API"),(0,a.kt)("p",null,"Enable the Google Assistant API on the project you selected (see the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/assistant/sdk/terms-of-service"},"Terms of Service"),"). You need to do this in the Cloud Platform Console."),(0,a.kt)("p",null,"Just click ",(0,a.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview"},"Here")," to enable the Google Assistant API."),(0,a.kt)("p",null,"Ensure the following toggle switches are enabled (blue):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Web & App Activity")),(0,a.kt)("li",{parentName:"ul"},"In addition, be sure to select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Include Chrome browsing history and activity from websites and apps that use Google services")," checkbox."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Device Information")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Voice & Audio Activity"))),(0,a.kt)("h4",{id:"install-the-sdk-and-sample-code"},"Install the SDK and Sample Code"),(0,a.kt)("p",null,"You can refer ro ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/assistant/sdk/guides/service/python/embed/install-sample"},"google doc")," for more detail about this part."),(0,a.kt)("p",null,"You can do this part with python2.7 and python3, in this demo we use python2.7."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For python2.7")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")),(0,a.kt)("p",null,"Tap the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get upgrade\nsudo apt-get install python-dev python-virtualenv\nsudo virtualenv env --no-site-packages  \nenv/bin/python -m pip install --upgrade pip setuptools wheel\nsource env/bin/activate\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2. Get the package")),(0,a.kt)("p",null,"The Google Assistant SDK package contains all the code required to get the Google Assistant running on the device, including the sample code."),(0,a.kt)("p",null,"Install the package's system dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install portaudio19-dev libffi-dev libssl-dev\nUse pip to install the latest version of the Python package in the virtual environment:\nsudo python -m pip install --upgrade google-assistant-sdk[samples]\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3. Generate credentials")),(0,a.kt)("p",null,"Install or update the authorization tool:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo python -m pip install --upgrade google-auth-oauthlib[tool]==0.2\n")),(0,a.kt)("p",null,"Make the target folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo mkdir \u2013p /path/to/assistant-sdk/\n")),(0,a.kt)("p",null,"Use the command below to copy ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials.json")," to the target location."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo cp /home/respeaker/credentials.json /path/to/assistant-sdk/ \n")),(0,a.kt)("p",null,"Tap the command below to get the token generate code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \\\n          --save --headless --client-secrets /path/to/assistant-sdk/credentials.json\n\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"By using the command above, Every time you get a different authorize code. Please make sure\n"))),(0,a.kt)("p",null,"Then you will get the code, please copy the code after the note ",(0,a.kt)("inlineCode",{parentName:"p"},"Please visit this URL to authorize this application:"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/code0.png",alt:null})),(0,a.kt)("p",null,"Paste the code into your Internet browser, then tap the ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," key."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/code1.png",alt:null})),(0,a.kt)("p",null,"If everything goes well, the following window will pops up. Choose your Google account and select ",(0,a.kt)("inlineCode",{parentName:"p"},"ALLOW")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/code2.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/code3.png",alt:null})),(0,a.kt)("p",null,"Ok, then, you will get the authorize code as the following picture shown."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/code4.png",alt:null})),(0,a.kt)("p",null,"Cope this code into your console\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/code5.png",alt:null})),(0,a.kt)("p",null,"Then you will see the notice ",(0,a.kt)("inlineCode",{parentName:"p"},"credentials saved: /path/to/.config/google-oauthlib-tool/credentials.json"),". That means everything goes well so far."),(0,a.kt)("h4",{id:"install-respeakerd"},"Install Respeakerd"),(0,a.kt)("p",null,"Tap the commands to install respeakerd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install portaudio19-dev libffi-dev libssl-dev\ngit clone https://github.com/respeaker/googleassistant_respeakerd\ncd googleassistant_respeakerd\nsudo python setup.py install\nsudo cp script/io.respeaker.respeaker.conf /etc/dbus-1/system.d/\n# set respeakerd to pulse mode\nsudo vim /etc/respeaker/respeakerd.conf \n# reboot to make it work\nsudo reboot\n")),(0,a.kt)("h4",{id:"activate-the-google-assistant"},"Activate the Google Assistant."),(0,a.kt)("p",null,"Remember the two IDs we marked before? Now it's time to use them. "),(0,a.kt)("p",null,"Change the command ",(0,a.kt)("inlineCode",{parentName:"p"},"googlesamples-assistant-respeakerd --project-id my-dev-project --device-model-id my-model")," with your own IDs."),(0,a.kt)("p",null,"For the command above, change ",(0,a.kt)("inlineCode",{parentName:"p"},"my-dev-project")," into your ",(0,a.kt)("inlineCode",{parentName:"p"},"project-id")," and change ",(0,a.kt)("inlineCode",{parentName:"p"},"my-model")," into your ",(0,a.kt)("inlineCode",{parentName:"p"},"Model ID"),"."),(0,a.kt)("p",null,"For this demo, it should be like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"googlesamples-assistant-respeakerd --project-id respeaker-440eb --device-model-id respeaker-xxxx-respeaker-core-v2.0-xxxxx\n")),(0,a.kt)("p",null,"Now, cheers!!!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Google-Assitant/img/codel.png",alt:null}),"\nThank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);