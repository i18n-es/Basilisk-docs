(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[21],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return s}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,s=o.forcePrependBaseUrl,i=void 0!==s&&s,l=o.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(o,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},9451:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=n(4996),i={id:"node_monitoring",title:"Node Monitoring"},l={unversionedId:"node_monitoring",id:"node_monitoring",isDocsHomePage:!1,title:"Node Monitoring",description:"In this chapter we will walk you through the setup of local monitoring for your validator node.",source:"@site/docs/node_monitoring.md",sourceDirName:".",slug:"/node_monitoring",permalink:"/node_monitoring",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_monitoring.md",version:"current",frontMatter:{id:"node_monitoring",title:"Node Monitoring"},sidebar:"sidebar",previous:{title:"Performance Benchmark",permalink:"/performance_benchmark"},next:{title:"Intro to Development",permalink:"/dev_intro"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prometheus Setup",id:"prometheus-setup",children:[{value:"User and Directories",id:"user-and-directories",children:[]},{value:"Install Prometheus",id:"install-prometheus",children:[]},{value:"Starting Prometheus",id:"starting-prometheus",children:[]}]},{value:"Node Exporter",id:"node-exporter",children:[{value:"Install Node Exporter",id:"install-node-exporter",children:[]},{value:"Create a Systemd Service",id:"create-a-systemd-service",children:[]},{value:"Add Scrape Job for Node Exporter",id:"add-scrape-job-for-node-exporter",children:[]}]},{value:"Grafana Setup",id:"grafana-setup",children:[{value:"Install Grafana",id:"install-grafana",children:[]},{value:"Accessing the Web Interface",id:"accessing-the-web-interface",children:[]},{value:"Configuring the Datasource",id:"configuring-the-datasource",children:[]},{value:"Importing the Dashboard",id:"importing-the-dashboard",children:[]}]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this chapter we will walk you through the setup of local monitoring for your validator node."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You must have your ",(0,o.kt)("a",{parentName:"p",href:"/node_setup"},"validator node")," up and running.",(0,o.kt)("br",{parentName:"p"}),"\n","This guide was tested on Ubuntu 20.04 LTS release."),(0,o.kt)("h2",{id:"prometheus-setup"},"Prometheus Setup"),(0,o.kt)("p",null,"In the first step we will set up the Prometheus server."),(0,o.kt)("h3",{id:"user-and-directories"},"User and Directories"),(0,o.kt)("p",null,"We create a user just for monitoring purposes which has no home directory and can't be used to log in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus\n")),(0,o.kt)("p",null,"Then we create directories for the executable and the configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo mkdir /etc/prometheus\n$ sudo mkdir /var/lib/prometheus\n")),(0,o.kt)("p",null,"Change ownership of the directories to restrict them to our new monitoring user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus\n$ sudo chown -R prometheus:prometheus /var/lib/prometheus\n")),(0,o.kt)("h3",{id:"install-prometheus"},"Install Prometheus"),(0,o.kt)("p",null,"Check latest version number of Prometheus at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/releases/"},"GitHub release page"),".",(0,o.kt)("br",{parentName:"p"}),"\n","At the time of writing it is v2.25.2. Insert the latest release version in the following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# download prometheus\n$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz\n\n# unpack the binaries\n$ tar xfz prometheus-*.tar.gz\n\n# enter the unpacked directory\n$ cd prometheus-2.25.2.linux-amd64\n")),(0,o.kt)("p",null,"Now copy over the binaries into the local folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp ./prometheus /usr/local/bin/\n$ sudo cp ./promtool /usr/local/bin/\n")),(0,o.kt)("p",null,"We now need to assign those binaries to our freshly created user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /usr/local/bin/prometheus\n$ sudo chown prometheus:prometheus /usr/local/bin/promtool\n")),(0,o.kt)("p",null,"Next up we'll copy the web interface and the configuration presets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp -r ./consoles /etc/prometheus\n$ sudo cp -r ./console_libraries /etc/prometheus\n")),(0,o.kt)("p",null,"You may have guessed it already but we're also changing the ownership of those directories."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles\n$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n")),(0,o.kt)("p",null,"We now have everything we need from the downloaded package so we will go one step back and do some cleanup."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ cd .. && rm -rf prometheus*\n")),(0,o.kt)("p",null,"Let's create a ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML")," configuration file for Prometheus with the editor of your choice (nano / vim / pico)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),(0,o.kt)("p",null,"Our config is divided in three sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"global"),": sets the default values for ",(0,o.kt)("inlineCode",{parentName:"li"},"scrape_interval")," and the rule-execution interval with ",(0,o.kt)("inlineCode",{parentName:"li"},"evaluation_interval")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rule_files"),": specify rule-files the Prometheus server should load"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scrape_configs"),": this is where you set the monitoring-resources")),(0,o.kt)("p",null,"We will keep it very basic and end up with something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  # - "weHaveNo.rules"\n\nscrape_configs:\n  - job_name: "prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: "substrate_node"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9615"]\n')),(0,o.kt)("p",null,"The first scrape job exports data of Prometheus itself, the second one exports the HydraDX node metrics.\nWe adjusted the ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape_interval")," of both jobs to get more detailed statistics. This overrides the global values.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"static_configs")," sets where the exporters run, we stick to the default ports here."),(0,o.kt)("p",null,"After saving the configuration we will - once again - change the ownership."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n")),(0,o.kt)("h3",{id:"starting-prometheus"},"Starting Prometheus"),(0,o.kt)("p",null,"To have Prometheus starting automatically and running in the background we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd"),".\nCreate a new config (again with the editor of your choice):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/prometheus.service\n")),(0,o.kt)("p",null,"Paste the following configuration and save the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\n  Description=Prometheus Monitoring\n  Wants=network-online.target\n  After=network-online.target\n\n[Service]\n  User=prometheus\n  Group=prometheus\n  Type=simple\n  ExecStart=/usr/local/bin/prometheus \\\n  --config.file /etc/prometheus/prometheus.yml \\\n  --storage.tsdb.path /var/lib/prometheus/ \\\n  --web.console.templates=/etc/prometheus/consoles \\\n  --web.console.libraries=/etc/prometheus/console_libraries\n  ExecReload=/bin/kill -HUP $MAINPID\n\n[Install]\n  WantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Next we will perform the following three steps:\n",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl deamon-reload")," loads new configurations and updates existing\n",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl enable")," activates our new service\n",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl start")," triggers the execution of the service"),(0,o.kt)("p",null,"You can perform the steps above in one command by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus\n")),(0,o.kt)("p",null,"You should now be able to access Prometheus' web interface at http://localhost:9090/."),(0,o.kt)("h2",{id:"node-exporter"},"Node Exporter"),(0,o.kt)("p",null,"We will install Node Exporter to scrape server metrics that will be used in the dashboard.",(0,o.kt)("br",{parentName:"p"}),"\n","Please check the version number of the latest release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter/releases/"},"here")," and update the command.",(0,o.kt)("br",{parentName:"p"}),"\n","At the time of writing the latest version was ",(0,o.kt)("inlineCode",{parentName:"p"},"1.1.2"),"."),(0,o.kt)("h3",{id:"install-node-exporter"},"Install Node Exporter"),(0,o.kt)("p",null,"Download the latest release."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz\n")),(0,o.kt)("p",null,"Unpack the archive you just downloaded. This will create a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"node_exporter-1.1.2.linux-amd64"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz\n")),(0,o.kt)("p",null,"Next we copy the binary into our local application directory and assign it to our monitoring user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# copy binary\n$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin\n\n# set ownership\n$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter\n")),(0,o.kt)("p",null,"We can now do some cleanup and remove the downloaded and unpacked package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ rm -rf node_exporter*\n")),(0,o.kt)("h3",{id:"create-a-systemd-service"},"Create a Systemd Service"),(0,o.kt)("p",null,"Similar to prometheus we want Node Exporter to run as a service too.",(0,o.kt)("br",{parentName:"p"}),"\n","Create a systemd service with your editor of choice."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/node_exporter.service\n")),(0,o.kt)("p",null,"And paste the following configuration into it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Node Exporter\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"We will now activate and start the service with this one-liner."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter\n")),(0,o.kt)("h3",{id:"add-scrape-job-for-node-exporter"},"Add Scrape Job for Node Exporter"),(0,o.kt)("p",null,"The Node Exporter is now up and running but we need to tell Prometheus to scrape its data.",(0,o.kt)("br",{parentName:"p"}),"\n","We will open the configuration file once again with the editor of choice."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),(0,o.kt)("p",null,"And at the very bottom of the file we will append one more scrape config.",(0,o.kt)("br",{parentName:"p"}),"\n","Paste the following content and save the file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n")),(0,o.kt)("p",null,"The apply the changes configuration a restart of the Prometheus service is required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl restart prometheus.service \n")),(0,o.kt)("p",null,"Your server metrics are now scraped and can be found in the Prometheus web interface.",(0,o.kt)("br",{parentName:"p"}),"\n","We will need them later for our dashboard."),(0,o.kt)("h2",{id:"grafana-setup"},"Grafana Setup"),(0,o.kt)("p",null,"We can see our metrics in the web interface, but that's not how we want to monitor it.",(0,o.kt)("br",{parentName:"p"}),"\n","We want it nice and beautiful. That's where Grafana comes into play. "),(0,o.kt)("h3",{id:"install-grafana"},"Install Grafana"),(0,o.kt)("p",null,"Please check what's the latest Grafana Version ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=linux"},"with this link"),".",(0,o.kt)("br",{parentName:"p"}),"\n","You can either change the version number in the following commands or copy the install commands directly from the link.",(0,o.kt)("br",{parentName:"p"}),"\n","At the time of writing the latest version was ",(0,o.kt)("inlineCode",{parentName:"p"},"7.5.1"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo apt-get install -y adduser libfontconfig1\n$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb\n$ sudo dpkg -i grafana_7.5.1_amd64.deb\n")),(0,o.kt)("p",null,"The package comes with a builtin ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd"),"-service which we will configure and start just like the Prometheus service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server\n")),(0,o.kt)("h3",{id:"accessing-the-web-interface"},"Accessing the Web Interface"),(0,o.kt)("p",null,"We'll be able to open the Grafana web interface at http://localhost:3000/.",(0,o.kt)("br",{parentName:"p"}),"\n","The default login Grafana is:",(0,o.kt)("br",{parentName:"p"}),"\n","User: ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),(0,o.kt)("br",{parentName:"p"}),"\n","Password: ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-home.png")})),(0,o.kt)("h3",{id:"configuring-the-datasource"},"Configuring the Datasource"),(0,o.kt)("p",null,"Please click the settings gear in the menu and select datasources.",(0,o.kt)("br",{parentName:"p"}),"\n",'In the next window you click "Add Datasource" and select "Prometheus".  '),(0,o.kt)("p",null,"In the following form you don't need to change anything but the URL.",(0,o.kt)("br",{parentName:"p"}),"\n","Set ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save and Test"),".  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-datasource.png")})),(0,o.kt)("h3",{id:"importing-the-dashboard"},"Importing the Dashboard"),(0,o.kt)("p",null,"Please click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Plus"),"-button in the main navigation and select ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),".  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-import.png")})),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/14158"},"HydraDX Dashboard")," and to load it you simply input the id ",(0,o.kt)("inlineCode",{parentName:"p"},"14158")," and hit the ",(0,o.kt)("inlineCode",{parentName:"p"},"Load"),"-button.  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-import-options.png")})),(0,o.kt)("p",null,"You don't need much configuration here, just make sure Prometheus is used as the datasource.",(0,o.kt)("br",{parentName:"p"}),"\n","You can now finish the import.  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-dashboard.png")})),(0,o.kt)("p",null,"You should now see your dashboard right away.",(0,o.kt)("br",{parentName:"p"}),"\n","If some panels are empty please ensure your selection above the panels is like this:    "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Chain Metrics"),": Substrate  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Chain Instance"),": localhost:9615  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Server Job"),": node_exporter  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Server Host"),": localhost:9100")))}c.isMDXComponent=!0}}]);