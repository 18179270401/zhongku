(function(){var h={},mt={},c={id:"d16bd9d0e6b6905b0dd07ae4faf22774",dm:["labthink.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:6131314,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'045B238AD993D701',conv:0,med:0,cvcc:{q:/tencent:\/\/|qq\.(com|htm)|kefu|openkf|swt|zoos|53kf|doyoo|looyu|leyu|zixun|chat|talk|openQQ|open_ask|online/i},cvcf:['lbtnSubmit'],apps:''};var r=void 0,u=!0,v=null,w=!1;mt.cookie={};mt.cookie.set=function(a,b,g){var d;g.O&&(d=new Date,d.setTime(d.getTime()+g.O));document.cookie=a+"="+b+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(d?"; expires="+d.toGMTString():"")+(g.uc?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:v};
mt.cookie.Rb=function(a,b){try{var g="Hm_ck_"+ +new Date;mt.cookie.set(g,"is-cookie-enabled",{domain:a,path:b,O:r});var d="is-cookie-enabled"===mt.cookie.get(g)?"1":"0";mt.cookie.set(g,"",{domain:a,path:b,O:-1});return d}catch(e){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Aa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.K=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.h=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.J=function(a,b){var g=w;if(a==v||!mt.lang.d(a,"Array")||b===r)return g;if(Array.prototype.indexOf)g=-1!==a.indexOf(b);else for(var d=0;d<a.length;d++)if(a[d]===b){g=u;break}return g};mt.url={};mt.url.m=function(a,b){var g=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return g?g[3]:v};
mt.url.qc=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:v};mt.url.yb=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):v};mt.url.S=function(a){return(a=mt.url.yb(a))?a.replace(/:\d+$/,""):a};mt.url.va=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};
(function(){var a=mt.lang,b=mt.url;mt.f={};mt.f.sa=function(a){return document.getElementById(a)};mt.f.ta=function(a){if(!a)return v;try{a=String(a);if(0===a.indexOf("!HMCQ!"))return a;if(0===a.indexOf("!HMCC!"))return document.querySelector(a.substring(6,a.length));for(var d=a.split(">"),e=document.body,b=d.length-1;0<=b;b--)if(-1<d[b].indexOf("#")){var f=d[b].split("#")[1];(e=document.getElementById(f))||(e=document.getElementById(decodeURIComponent(f)));d=d.splice(b+1,d.length-(b+1));break}for(a=
0;e&&a<d.length;){var m=String(d[a]).toLowerCase();if(!("html"===m||"body"===m)){var b=0,n=d[a].match(/\[(\d+)\]/i),f=[];if(n)b=n[1]-1,m=m.split("[")[0];else if(1!==e.childNodes.length){for(var s=0,t=0,q=e.childNodes.length;t<q;t++){var x=e.childNodes[t];1===x.nodeType&&x.nodeName.toLowerCase()===m&&s++;if(1<s)return v}if(1!==s)return v}for(s=0;s<e.childNodes.length;s++)1===e.childNodes[s].nodeType&&e.childNodes[s].nodeName.toLowerCase()===m&&f.push(e.childNodes[s]);if(!f[b])return v;e=f[b]}a++}return e}catch(k){return v}};
mt.f.va=function(a,d){var b=[],l=[];if(!a)return l;for(;a.parentNode!=v;){for(var f=0,m=0,n=a.parentNode.childNodes.length,s=0;s<n;s++){var t=a.parentNode.childNodes[s];if(t.nodeName===a.nodeName&&(f++,t===a&&(m=f),0<m&&1<f))break}if((n=""!==a.id)&&d){b.unshift("#"+encodeURIComponent(a.id));break}else n&&(n="#"+encodeURIComponent(a.id),n=0<b.length?n+">"+b.join(">"):n,l.push(n)),b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<f?"["+m+"]":""));a=a.parentNode}l.push(b.join(">"));return l};
mt.f.wa=function(a){return(a=mt.f.va(a,u))&&a.length?String(a[0]):""};mt.f.Bb=function(a){return mt.f.va(a,w)};mt.f.oc=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return v};mt.f.vb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.pc=function(a){var d={top:0,left:0};if(!a)return d;var b=mt.f.vb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect());return{top:d.top+(window.pageYOffset||b.scrollTop)-
(b.clientTop||0),left:d.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};mt.f.getAttribute=function(a,d){var b=a.getAttribute&&a.getAttribute(d)||v;if(!b&&a.attributes&&a.attributes.length)for(var l=a.attributes,f=l.length,m=0;m<f;m++)l[m].nodeName===d&&(b=l[m].nodeValue);return b};mt.f.R=function(a){var d="document";a.tagName!==r&&(d=a.tagName);return d.toLowerCase()};mt.f.Eb=function(b){var d="";b.textContent?d=a.trim(b.textContent):b.innerText&&(d=a.trim(b.innerText));d&&(d=d.replace(/\s+/g,
" ").substring(0,255));return d};mt.f.Q=function(g,d){var e;a.K(g)&&0===String(g).indexOf("!HMCQ!")?(e=String(g),e=b.m(document.location.href,e.substring(6,e.length))):a.K(g)||(e=mt.f.R(g),"input"===e&&d&&("button"===g.type||"submit"===g.type)?e=a.trim(g.value)||"":"input"===e&&!d&&"password"!==g.type?e=a.trim(g.value)||"":"img"===e?(e=mt.f.getAttribute,e=e(g,"alt")||e(g,"title")||e(g,"src")):e="body"===e||"html"===e?["(hm-default-content-for-",e,")"].join(""):mt.f.Eb(g));return String(e||"").substring(0,
255)};(function(){(mt.f.Fa=function(){function a(){if(!a.da){a.da=u;for(var d=0,b=l.length;d<b;d++)l[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var b=w,l=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,w);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!b)if(b=u,"complete"===document.readyState)a.da=u;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var l=w;try{l=window.frameElement==v}catch(n){}document.documentElement.doScroll&&l&&d()}})();return function(d){a.da?d():l.push(d)}}()).da=w})();return mt.f})();mt.event={};
mt.event.e=function(a,b,g){a.attachEvent?a.attachEvent("on"+b,function(d){g.call(a,d)}):a.addEventListener&&a.addEventListener(b,g,w)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};
(function(){var a=mt.event;mt.g={};mt.g.Sa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.zb=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.g.Pb=function(){try{return!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&"undefined"!==typeof document.body.style.webkitFilter&&!window.chrome}catch(a){return w}};mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();
mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.Wb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.ba=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.T=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=
0;(function(){function b(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a}b();a.e(window,"orientationchange",b)})();return mt.g})();mt.o={};mt.o.parse=function(a){return(new Function("return ("+a+")"))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=g[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===v)return"null";if(d instanceof Array){var e=["["],l=d.length,f,g,n;for(g=0;g<l;g++)switch(n=d[g],typeof n){case "undefined":case "function":case "unknown":break;default:f&&e.push(","),e.push(mt.o.stringify(n)),f=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';f=["{"];g=mt.o.stringify;for(l in d)if(Object.prototype.hasOwnProperty.call(d,l))switch(n=
d[l],typeof n){case "undefined":case "unknown":case "function":break;default:e&&f.push(","),e=1,f.push(g(l)+":"+g(n))}f.push("}");return f.join("")}}}();mt.localStorage={};mt.localStorage.la=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return w}return u};
mt.localStorage.set=function(a,b,g){var d=new Date;d.setTime(d.getTime()+g||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.la()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(e){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),g=a.substring(0,b)-0;if(g&&g>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.la())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(d){}return v};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.la())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(g){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):v}catch(b){return v}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.$a={};mt.$a.log=function(a,b){var g=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=g;g.onload=function(){g.onload=v;g=window[d]=v;b&&b(a)};g.src=a};mt.Ga={};
mt.Ga.Fb=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return a};
mt.Ga.nc=function(a,b,g,d,e){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+g+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(e||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+g+'" height="'+d+'" src="'+b+'" flashvars="'+(e||"")+'" allowscriptaccess="always" /></object>'};
(function(){function a(){for(var a=w,g=document.getElementsByTagName("script"),d=g.length,d=100<d?100:d,e=0;e<d;e++){var l=g[e].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=u;break}}return a}return h.rb=a})();var A=h.rb;
h.w={rc:"http://tongji.baidu.com/hm-web/welcome/ico",Xa:"hm.baidu.com/hm.gif",hb:/^(tongji|hmcdn).baidu.com$/,bb:"tongji.baidu.com",Jb:"hmmd",Kb:"hmpl",hc:"utm_medium",Ib:"hmkw",jc:"utm_term",Gb:"hmci",gc:"utm_content",Lb:"hmsr",ic:"utm_source",Hb:"hmcu",fc:"utm_campaign",L:0,H:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",Ba:A()||"https:"===document.location.protocol?"https:":"http:",sc:0,lc:6E5,Sb:6E5,tc:5E3,mc:5,oa:1024,kc:1,fa:2147483647,ab:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt".split(" "),
U:u,La:["a","input","button"],Ia:{id:"data-hm-id",Z:"data-hm-class",Y:"data-hm-xpath",content:"data-hm-content",ha:"data-hm-tag",link:"data-hm-link"},Ka:"data-hm-enabled",Ja:"data-hm-disabled",Tb:"https://hmcdn.baidu.com/static/tongji/plugins/",Wa:["UrlChangeTracker"]};(function(){var a={D:{},e:function(a,g){this.D[a]=this.D[a]||[];this.D[a].push(g)},I:function(a,g){this.D[a]=this.D[a]||[];for(var d=this.D[a].length,e=0;e<d;e++)this.D[a][e](g)}};return h.z=a})();
(function(){function a(a,d){var e=document.createElement("script");e.charset="utf-8";b.d(d,"Function")&&(e.readyState?e.onreadystatechange=function(){if("loaded"===e.readyState||"complete"===e.readyState)e.onreadystatechange=v,d()}:e.onload=function(){d()});e.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(e,l)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";if(h.c.b.nv){a=encodeURIComponent(document.referrer);try{window.sessionStorage?g.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)}catch(e){}}else try{a=(window.sessionStorage?g.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||""}catch(l){}return a}var b=mt.localStorage,g=mt.sessionStorage;return h.tb=a})();
(function(){var a=mt.cookie,b=mt.localStorage,g=mt.sessionStorage,d={getData:function(d){try{return a.get(d)||g.get(d)||b.get(d)}catch(l){}},setData:function(e,l,f){try{a.set(e,l,{domain:d.P(),path:d.aa(),O:f}),f?b.set(e,l,f):g.set(e,l)}catch(m){}},Vb:function(e){try{a.set(e,"",{domain:d.P(),path:d.aa(),O:-1}),g.remove(e),b.remove(e)}catch(l){}},V:function(a,d){a="."+a.replace(/:\d+/,"");d="."+d.replace(/:\d+/,"");var b=a.indexOf(d);return-1<b&&b+d.length===a.length},ea:function(a,d){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(d)},P:function(){for(var a=document.location.hostname,b=0,f=c.dm.length;b<f;b++)if(d.V(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},aa:function(){for(var a=0,b=c.dm.length;a<b;a++){var f=c.dm[a];if(-1<f.indexOf("/")&&d.ea(document.location.href,f))return f.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.pa=d})();
(function(){var a=mt.lang,b=mt.o,g=h.pa,d={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},e={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},l=["session","user"],f="Hm_up_"+c.id,m={init:function(){m.Ob()},Ob:function(){try{var e=b.parse(decodeURIComponent(g.getData(f)));a.d(e,"Object")&&(d.user=e)}catch(s){}},A:function(a){var b={};d[a]!==r&&(b=d[a]);a=this.xa();for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},xa:function(){for(var a={},b,e=l.length-
1;0<=e;e--){b=d[l[e]];for(var q in b)b.hasOwnProperty(q)&&(a[q]=b[q])}return a},setProperty:function(e,f,g){var q=d[e];if(a.d(q,"Object")&&a.d(f,"Object")){for(var l in f)if(f.hasOwnProperty(l)){var k=a.h(String(l));if(g||!/^_/.test(k)&&!/_$/.test(k)||/^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)){var p=f[l];if(p==v)delete q[k];else{if(a.d(p,"Object")||a.d(p,"Array"))p=b.stringify(p);p=a.h(String(p));m.Qb(e,k,p)&&(q[k]={value:p,scope:m.Pa(e)})}}}"user"===e&&m.Da()}},r:function(b){b!==r&&("userId"===
b&&a.d(d.user,"Object")?(delete d.user.uid_,m.Da()):"user"===b&&a.d(d.user,"Object")?(b=d.user.uid_,d.user=b===r?{}:{uid_:b},m.Da()):d[b]!==r&&(d[b]={}))},Da:function(){try{g.setData(f,encodeURIComponent(b.stringify(d.user)),c.age)}catch(a){}},Qb:function(a,b,e){var q=u,f=d[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(e)).length)q=w;else{var k=f[b];f[b]={value:e,scope:m.Pa(a)};a=m.M(m.A(a));2048<encodeURIComponent(a).length&&(k!==r?f[b]=k:delete f[b],q=w)}return q},
M:function(a){var d=[],b,e;for(e in a)a.hasOwnProperty(e)&&(b=[e,a[e].value],(1===a[e].scope||2===a[e].scope)&&b.push(a[e].scope),d.push(b.join("*")));return d.join("!")},Pa:function(a){a=e[a];return a!==r?a:e.others}};return h.N=m})();
(function(){var a=mt.f,b=mt.lang,g=mt.o,d=h.z,e=h.N,l=e.M;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var f={Va:{},ia:{},init:function(){for(var a,d=0;d<c.cptrk.length;d++)try{if(a=g.parse(decodeURIComponent(String(c.cptrk[d]))),a.a!==r&&b.d(a.a,"Object")){var e=a.a,l;for(l in e)e.hasOwnProperty(l)&&(f.ia[l]=String(e[l]))}}catch(q){}},Ua:function(){var d,b,e;for(e in f.ia)if(f.ia.hasOwnProperty(e)&&f.Va[e]===r&&(d=f.ia[e],d=a.ta(d)))b=b===r?{}:b,b[e]=a.Q(d,w),f.Va[e]=u;return b},ya:function(){var a=
f.Ua();a&&f.Yb(a)},Nb:function(){"MutationObserver"in window?(new MutationObserver(f.ya)).observe(document.body,{childList:u,subtree:u}):window.setInterval(f.ya,15E3)},Yb:function(a){if(b.d(a,"Object")){e.setProperty("pageview",a);a=h.c.b.p;var d=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=l(e.A("pageview"));h.c.i();h.c.b.p=a;h.c.b.ep=d;e.r("pageview")}}};f.init();d.e("pv-b",function(){var a=f.Ua();a&&e.setProperty("pageview",a)});f.Nb();a.Fa(f.ya)}})();
(function(){var a=mt.lang,b=mt.f,g={$:function(a,e){return function(l){var f=l.target||l.srcElement;if(f){var m=f.getAttribute(a.ka);l=l.clientX+":"+l.clientY;if(m&&m===l)f.removeAttribute(a.ka);else if(e&&0<e.length&&(f=b.Bb(f))&&f.length)if(m=f.length,l=f[f.length-1],1E4>m*l.split(">").length)for(l=0;l<m;l++)g.Za(a,f[l]);else g.Za(a,l)}}},Za:function(d,b){for(var g={},f=String(b).split(">").length,m=0;m<f;m++)g[b]="",b=b.substring(0,b.lastIndexOf(">"));d&&(a.d(d,"Object")&&d.Ma)&&d.Ma(g)},Ub:function(a,
b){return function(g){(g.target||g.srcElement).setAttribute(a.ka,g.clientX+":"+g.clientY);a&&a.s&&(b?a.s(b):a.s("#"+encodeURIComponent(this.id),g.type))}}};return h.ra=g})();
(function(){var a=mt.f,b=mt.o,g=mt.event,d=mt.lang,e=h.w,l=h.ra,f=h.N,m=f.M,n={ka:"HM_ce",cb:function(){if(c.cetrk&&c.cetrk.length){g.e(document,"click",l.$(n,c.cetrk));for(var d=0,e=c.cetrk.length;d<e;d++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(m){f={}}var k=f.p||"";-1===k.indexOf(">")&&(0===k.indexOf("#")&&(k=k.substring(1)),(k=a.sa(k))&&g.e(k,"click",l.Ub(n,f)))}}},Ma:function(a){if(c.cetrk&&c.cetrk.length)for(var d=0,e=c.cetrk.length;d<e;d++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(g){f=
{}}var p=n.wb(f.p,a);p&&n.s(f,p)}},wb:function(a,b){a=String(a);if(0<a.indexOf("*")){var d=RegExp("^"+a.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\*/,"\\d+")+"$"),e;for(e in b)if(b.hasOwnProperty(e)&&d.test(e))return e;return v}return b.hasOwnProperty(a)?a:v},s:function(b,e){h.c.b.et=7;var g=b&&b.k||"",g=d.h(g),l={};if(b&&b.a&&d.d(b.a,"Object")){var k=b.a,p;for(p in k)if(k.hasOwnProperty(p)){var y=n.Cb(k[p]||"",e),y=y?a.Q(y,w):"";l[p]=y}}l=n.ub(l,e||b&&b.p);l._iden=g;f.setProperty("customEvent",
l);h.c.b.ep="";h.c.b.p=m(f.A("customEvent"));h.c.i();h.c.b.p="";f.r("customEvent")},ub:function(b,d){var f=a.ta(d),g=e.Ia;f&&(c.aet&&c.aet.length?(b.ei_=a.getAttribute(f,g.id)||a.getAttribute(f,"id")||"",b.ec_=a.getAttribute(f,g.Z)||a.getAttribute(f,"class")||"",b.ex_=a.getAttribute(f,g.Y)||a.wa(f),b.en_=a.getAttribute(f,g.content)||a.Q(f,u),b.et_=a.getAttribute(f,g.ha)||a.R(f),b.el_=a.getAttribute(f,g.link)||a.getAttribute(f,"href")||""):(b.ex_=a.getAttribute(f,g.Y)||a.wa(f),b.en_=a.getAttribute(f,
g.content)||a.Q(f,u)));return b},Cb:function(b,d){b=String(b);d=String(d);if(0<b.indexOf("*")){var e=/.*\[(\d+)\]$/.exec(d);b=b.replace("*",e?e[1]:"1")}return a.ta(b)}};h.z.e("pv-b",n.cb);return n})();
(function(){var a=mt.lang,b=mt.f,g=mt.event,d=mt.g,e=h.w,l=h.z,f=h.N,m=f.M,n=+new Date,s=[],t={$:function(){return function(d){if(h.c&&h.c.U&&c.aet&&c.aet.length){var f=d.target||d.srcElement;if(f){var g=h.c.La,p=b.getAttribute(f,e.Ka)!=v?u:w;if(b.getAttribute(f,e.Ja)==v)if(p)t.ma(t.ua(f,d));else{var y=b.R(f);if(a.J(g,"*")||a.J(g,y))t.ma(t.ua(f,d));else for(;f.parentNode!=v;){var p=f.parentNode,y=b.R(p),z="a"===y&&a.J(g,"a")?u:w,y="button"===y&&a.J(g,"button")?u:w,B=b.getAttribute(p,e.Ka)!=v?u:w;
if(b.getAttribute(p,e.Ja)==v&&(z||y||B)){t.ma(t.ua(p,d));break}f=f.parentNode}}}}}},ua:function(f,g){var k={},p=e.Ia;k.id=b.getAttribute(f,p.id)||b.getAttribute(f,"id")||"";k.Z=b.getAttribute(f,p.Z)||b.getAttribute(f,"class")||"";k.Y=b.getAttribute(f,p.Y)||b.wa(f);k.content=b.getAttribute(f,p.content)||b.Q(f,u);k.ha=b.getAttribute(f,p.ha)||b.R(f);k.link=b.getAttribute(f,p.link)||b.getAttribute(f,"href")||"";k.type=g.type||"click";p=a.Aa(f.offsetTop)?f.offsetTop:0;"click"===g.type?p=d.Sa?g.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.Ca&&a.d(g.Ca.changedTouches,"Array")&&g.Ca.changedTouches.length)&&(p=g.Ca.changedTouches[0].pageY);k.ec=p;return k},ma:function(b){var d=a.h;b=[+new Date-(h.c.F!==r?h.c.F:n),d(b.id),d(b.Z),d(b.ha),d(b.Y),d(b.link),d(b.content),b.type,b.ec].join("*");t.na(b);a.d(this.X(),"Function")&&this.X()()},na:function(a){a.length>e.oa||(encodeURIComponent(s.join("!")+a).length>e.oa&&(t.s(s.join("!")),s=[]),s.push(a))},
s:function(a){h.c.b.et=5;h.c.b.ep=a;h.c.b.p=m(f.A("autoEventTracking"));h.c.i();h.c.b.p=""},X:function(){return function(){s&&s.length&&(t.s(s.join("!")),s=[])}}};a.K(c.aet)&&""!==c.aet&&l.e("pv-b",function(){g.e(document,"click",t.$());"ontouchend"in document&&g.e(window,"touchend",t.$());g.e(window,"unload",t.X())});return t})();
(function(){var a=mt.event,b=mt.g,g=h.w,d=h.z,e=+new Date,l=[],f=v,m={ob:function(){return function(){h.c&&(h.c.U&&c.aet&&c.aet.length)&&(window.clearTimeout(f),f=window.setTimeout(function(){m.fb(b.ba()+b.T())},150))}},fb:function(a){m.na([+new Date-(h.c.F!==r?h.c.F:e),a].join("*"))},na:function(a){if(encodeURIComponent(l.join("!")+a).length>g.oa||3<l.length)m.s(l.join("!")),l=[];l.push(a)},s:function(a){h.c.b.et=6;h.c.b.vh=b.T();h.c.b.ep=a;h.c.i()},X:function(){return function(){l&&l.length&&(m.s(l.join("!")),
l=[])}}};mt.lang.K(c.aet)&&""!==c.aet&&d.e("pv-b",function(){a.e(window,"scroll",m.ob());a.e(window,"unload",m.X())});return m})();
(function(){var a=mt.f,b=h.w,g=h.load,d=h.tb;h.z.e("pv-b",function(){var e=b.protocol+"//crs.baidu.com/";c.rec&&a.Fa(function(){for(var l=0,f=c.rp.length;l<f;l++){var m=c.rp[l][0],n=c.rp[l][1],s=a.sa("hm_t_"+m);if(n&&!(2==n&&!s||s&&""!==s.innerHTML))s="",s=Math.round(Math.random()*b.fa),s=4==n?e+"hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+s].join("&"):e+"t.js?"+["siteId="+c.id,"planId="+m,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
s].join("&"),g(s)}})})})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.qa.Ab()+","+h.qa.xb();h.c.i()}}function b(){clearTimeout(z);var a;p&&(a="visible"==document[p]);y&&(a=!document[y]);m="undefined"==typeof a?u:a;if((!f||!n)&&m&&s)k=u,q=+new Date;else if(f&&n&&(!m||!s))k=w,x+=+new Date-q;f=m;n=s;z=setTimeout(b,100)}function g(a){var b=document,p="";if(a in b)p=a;else for(var d=["webkit","ms","moz","o"],f=0;f<d.length;f++){var e=d[f]+a.charAt(0).toUpperCase()+a.slice(1);if(e in b){p=
e;break}}return p}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))s="focus"==a.type||"focusin"==a.type?u:w,b()}var e=mt.event,l=h.z,f=u,m=u,n=u,s=u,t=+new Date,q=t,x=0,k=u,p=g("visibilityState"),y=g("hidden"),z;b();(function(){var a=p.replace(/[vV]isibilityState/,"visibilitychange");e.e(document,a,b);e.e(window,"pageshow",b);e.e(window,"pagehide",b);"object"==typeof document.onfocusin?(e.e(document,"focusin",d),e.e(document,"focusout",d)):(e.e(window,"focus",d),
e.e(window,"blur",d))})();h.qa={Ab:function(){return+new Date-t},xb:function(){return k?+new Date-q+x:x}};l.e("pv-b",function(){e.e(window,"unload",a())});l.e("duration-send",a());l.e("duration-done",function(){q=t=+new Date;x=0});return h.qa})();
(function(){var a=mt.lang,b=h.w,g=h.load,d={Mb:function(d){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var l=h.c.P();g([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),d)}},dc:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.mb=d})();
(function(){function a(a,b,d,f){if(!(a===r||b===r||f===r)){if(""===a)return[b,d,f].join("*");a=String(a).split("!");for(var e,g=w,k=0;k<a.length;k++)if(e=a[k].split("*"),String(b)===e[0]){e[1]=d;e[2]=f;a[k]=e.join("*");g=u;break}g||a.push([b,d,f].join("*"));return a.join("!")}}function b(a){for(var f in a)if({}.hasOwnProperty.call(a,f)){var e=a[f];d.d(e,"Object")||d.d(e,"Array")?b(e):a[f]=String(e)}}var g=mt.url,d=mt.lang,e=mt.o,l=mt.g,f=h.w,m=h.z,n=h.mb,s=h.load,t=h.pa,q=h.N,x=q.M,k={W:[],ga:0,Ta:w,
C:{Ha:"",page:""},init:function(){k.j=0;q.init();m.e("pv-b",function(){k.nb();k.pb()});m.e("pv-d",function(){k.qb();k.C.page=""});m.e("stag-b",function(){h.c.b.api=k.j||k.ga?k.j+"_"+k.ga:"";h.c.b.ct=[decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),k.C.Ha,k.C.page].join("!")});m.e("stag-d",function(){h.c.b.api=0;k.j=0;k.ga=0})},nb:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var p=arguments[b];
d.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},pb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,f=0,e=b.length;f<e;f++){var g=b[f];d.test(g[0])?k.W.push(g):k.Ea(g)}a.cmd[c.id]={push:k.Ea}},qb:function(){if(0<k.W.length)for(var a=0,b=k.W.length;a<b;a++)k.Ea(k.W[a]);k.W=
v},Ea:function(a){var b=a[0];if(k.hasOwnProperty(b)&&d.d(k[b],"Function"))k[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(k.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||u===a))k.j|=2,h.c.Qa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){k.j|=4;h.c.b.sn=h.c.Oa();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=l.ba()+l.T();h.c.b.kb=0;h.c.za?(h.c.b.nv=0,h.c.b.st=4):h.c.za=u;var b=h.c.b.u,d=h.c.b.su;h.c.b.u=f.protocol+"//"+document.location.host+
a[1];k.Ta||(h.c.b.su=document.location.href);h.c.b.p=x(q.A("pageview"));h.c.i();h.c.b.u=b;h.c.b.su=d;h.c.b.p="";h.c.F=+new Date;q.r("pageview")}},_trackEvent:function(a){2<a.length&&(k.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=d.h(a[1])+"*"+d.h(a[2])+(a[3]?"*"+d.h(a[3]):"")+(a[4]?"*"+d.h(a[4]):""),h.c.b.p=x(q.xa()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],f=a[4]||3;if(0<b&&6>b&&0<f&&4>f){k.ga++;for(var e=(h.c.b.cv||"*").split("!"),g=e.length;g<b-1;g++)e.push("*");
e[b-1]=f+"*"+d.h(a[2])+"*"+d.h(a[3]);h.c.b.cv=e.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?t.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):t.Vb("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==r&&b!==r){var e=decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),e=a(e,f,1,b);t.setData("Hm_ct_"+c.id,encodeURIComponent(e),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==
r&&b!==r){var e=k.C.Ha,e=a(e,f,2,b);k.C.Ha=e}}},_setPageTag:function(b){if(!(3>b.length)){var f=d.h(b[1]);b=d.h(b[2]);if(f!==r&&b!==r){var e=k.C.page,e=a(e,f,3,b);k.C.page=e}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?f.protocol+"//"+window.location.host+a[1]:a[1],k.Ta=u)},_trackOrder:function(a){a=a[1];d.d(a,"Object")&&(b(a),k.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=e.stringify(a),h.c.b.p=x(q.xa()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a=
{webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])k.j|=32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];n.Mb();n.dc(a)},_setUserId:function(a){a=a[1];if(a!==r&&(d.K(a)||d.Aa(a))){var b=q.A("user").uid_;if(!(b&&b.value===d.h(String(a)))){var b=h.c.b.p,f=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+d.h(String(a));h.c.i();var e={};e.uid_=a;q.setProperty("user",e,u);h.c.b.p=b;h.c.b.ep=f}}},_clearUserId:function(a){1<a.length&&u===a[1]&&q.r("userId")},_setUserProperty:function(a){a=
a[1];d.d(a,"Object")&&q.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&u===a[1]&&q.r("user")},_setSessionProperty:function(a){a=a[1];d.d(a,"Object")&&q.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&u===a[1]&&q.r("session")},_setPageviewProperty:function(a){a=a[1];d.d(a,"Object")&&q.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&u===a[1]&&q.r("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];d.d(a,"Object")&&q.setProperty("autoEventTracking",
a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&u===a[1]&&q.r("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.Ra=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.U=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):m.I("duration-send");m.I("duration-done")},_require:function(a){1<a.length&&(a=a[1],f.hb.test(g.S(a))&&s(a))},_providePlugin:function(a){if(1<
a.length){var b=window._hmt,e=a[1];a=a[2];if(d.J(f.Wa,e)&&d.d(a,"Function")&&(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[e]=a,b.B=b.B||[],a=b.B.slice(),e&&a.length&&a[0][1]===e))for(var g=0,k=a.length;g<k;g++){var l=a[g][2]||{};if(b.plugins[e]&&!b.G[e])b.G[e]=new b.plugins[e](l),b.B.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],g=a[2]||{};if(d.J(f.Wa,e))if(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[e]&&!b.G[e])b.G[e]=new b.plugins[e](g);else{b.B=b.B||
[];for(var g=0,l=b.B.length;g<l;g++)if(b.B[g][1]===e)return;b.B.push(a);k._require([v,f.Tb+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];d.d(a,"Object")||(a={});a._iden=b;q.setProperty("customEvent",a);h.c.b.et=7;h.c.b.ep="";h.c.b.p=x(q.A("customEvent"));h.c.i();h.c.b.p="";q.r("customEvent")}}};k.init();h.ib=k;return h.ib})();
(function(){var a=h.z;c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),a.e("pv-b",function(){""!==window.location.hash&&(h.c.b.u=window.location.href)}))})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Ra=this.Qa=u,this.U=k.U,this.La=e.K(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.za=w,this.init())}var b=mt.url,g=mt.$a,d=mt.Ga,e=mt.lang,l=mt.cookie,f=mt.g,m=mt.sessionStorage,n=mt.o,s=mt.event,t=h.pa,q=h.N,x=q.M,k=h.w,p=h.load,y=h.z;a.prototype={V:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ea:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},ca:function(a){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.ea(a,c.dm[d]))return u}else{var e=b.S(a);if(e&&this.V(e,c.dm[d]))return u}return w},P:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.V(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},aa:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ea(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Db:function(){if(!document.referrer)return k.H-k.L>c.vdur?1:4;var a=w;this.ca(document.referrer)&&this.ca(document.location.href)?a=u:(a=b.S(document.referrer),a=this.V(a||"",document.location.hostname));return a?k.H-k.L>c.vdur?1:4:3},ac:function(){var a,b,d,e,f;k.L=t.getData("Hm_lpvt_"+c.id)||0;13===k.L.length&&(k.L=Math.round(k.L/1E3));b=this.Db();a=4!==b?1:0;if(d=t.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/
1E3));for(;2592E3<k.H-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(k.H);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=k.H,e="",f=1;t.setData("Hm_lvt_"+c.id,d,c.age);t.setData("Hm_lpvt_"+c.id,k.H);d=l.Rb(this.P(),this.aa());if(0===c.nv&&this.ca(document.location.href)&&(""===document.referrer||this.ca(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=e;this.b.lv=f},$b:function(){for(var a=[],b=this.b.et,d=+new Date,e=0,f=k.ab.length;e<f;e++){var g=k.ab[e],
l=this.b[g];"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:this.b.rt&&a.push("rt="+encodeURIComponent(this.b.rt));break;case 5:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},bc:function(){this.ac();this.b.si=c.id;this.b.sn=this.Oa();this.b.su=document.referrer;
this.b.ds=f.Wb;this.b.cl=f.colorDepth+"-bit";this.b.ln=String(f.language).toLowerCase();this.b.ja=f.javaEnabled?1:0;this.b.ck=f.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=d.Fb();this.b.v="1.2.68";this.b.cv=decodeURIComponent(t.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=f.ba()+f.T();var a=document.location.href;this.b.cm=b.m(a,k.Jb)||"";this.b.cp=b.m(a,k.Kb)||b.m(a,k.hc)||"";this.b.cw=b.m(a,k.Ib)||b.m(a,k.jc)||"";this.b.ci=b.m(a,k.Gb)||b.m(a,k.gc)||
"";this.b.cf=b.m(a,k.Lb)||b.m(a,k.ic)||"";this.b.cu=b.m(a,k.Hb)||b.m(a,k.fc)||"";f.Pb()&&(this.b.u=window.location.href)},init:function(){try{this.bc(),0===this.b.nv?this.Zb():this.Na(),h.c=this,this.lb(),this.jb(),y.I("pv-b"),this.Xb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));g.log(k.Ba+"//"+k.Xa+"?"+b.join("&"))}},Xb:function(){function a(){y.I("pv-d")}this.Qa?(this.za=
u,this.b.et=0,this.b.ep="",this.b.p=x(q.A("pageview")),this.b.vl=f.ba()+f.T(),this.i(a),this.b.p=""):a();this.F=+new Date;q.r("pageview")},i:function(a){if(this.Ra){var b=this;b.b.rnd=Math.round(Math.random()*k.fa);y.I("stag-b");var d=k.Ba+"//"+k.Xa+"?"+b.$b();y.I("stag-d");b.gb(d);g.log(d,function(d){b.Ya(d);e.d(a,"Function")&&a.call(b)})}},lb:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=b.S(document.referrer)===k.bb?1:0,f=b.m(a,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);
a&&(d.test(a)&&e&&g)&&(this.b.rnd=Math.round(Math.random()*k.fa),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},jb:function(){if(window.postMessage&&window.self!==window.parent){var a=this;s.e(window,"message",function(d){if(b.S(d.origin)===k.bb){d=d.data||{};var e=d.jn||"",f=/^customevent$/.test(e);
if(RegExp(c.id).test(d.sd||"")&&f)a.b.rnd=Math.round(Math.random()*k.fa),p(k.protocol+"//"+c.js+e+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},gb:function(a){var b;try{b=n.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);m.set("Hm_unsent_"+c.id,n.stringify(b))},Ya:function(a){var b;try{b=n.parse(m.get("Hm_unsent_"+c.id)||
"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?m.set("Hm_unsent_"+c.id,n.stringify(b)):this.Na()}},Na:function(){m.remove("Hm_unsent_"+c.id)},Zb:function(){var a=this,b;try{b=n.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){g.log(k.Ba+"//"+b,function(b){a.Ya(b)})},f=0;f<b.length;f++)e(b[f])},Oa:function(){return Math.round(+new Date/
1E3)%65535}};return new a})();(function(){var a=mt.event,b=mt.lang,g=h.w;if(c.kbtrk&&"undefined"!==typeof h.c){h.c.b.kb=b.Aa(h.c.b.kb)?h.c.b.kb:0;var d=function(){h.c.b.et=85;h.c.b.ep=h.c.b.kb;h.c.i()};a.e(document,"keyup",function(){h.c.b.kb++});a.e(window,"unload",function(){d()});setInterval(d,g.Sb)}})();var C=h.w,D=h.load;c.pt&&D([C.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var a=mt.g,b=mt.lang,g=mt.event,d=mt.o;if("undefined"!==typeof h.c&&(c.med||(!a.Sa||7<a.zb())&&c.cvcc)){var e,l,f,m,n=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},s=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},t=function(a,g){var k={};k.n=e;k.t="clk";k.v=a;if(g){var l=g.getAttribute("href"),m=g.getAttribute("onclick")?""+g.getAttribute("onclick"):v,n=g.getAttribute("id")||"";f.test(l)?(k.sn=
"mediate",k.snv=l):b.d(m,"String")&&f.test(m)&&(k.sn="wrap",k.snv=m);k.id=n}h.c.b.et=86;h.c.b.ep=d.stringify(k);h.c.i();for(k=+new Date;400>=+new Date-k;);};if(c.med)l="/zoosnet",e="swt",f=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(f.test(e)||f.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";e="other";f=c.cvcc.q||r;var q=c.cvcc.id||r;m={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],f!==r?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),q?(d=d.getAttribute("id"),(f.test(e)||
f.test(g)||q.test(d))&&a.push(b[k])):(f.test(e)||f.test(g))&&a.push(b[k])):q!==r&&(d=d.getAttribute("id"),q.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof f){var x;l+=/\/$/.test(l)?"":"/";var k=function(a,d){if(x===d)return t(l+a,d),w;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(x===d[e])return t(l+a+"/"+(e+1),d[e]),w};g.e(document,"mousedown",function(a){a=a||window.event;x=a.target||a.srcElement;var d={};for(s(m,function(a,e){d[a]=b.d(e,
"Function")?e():document.getElementById(e)});x&&x!==document&&s(d,k)!==w;)x=x.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,g=mt.event,d=mt.o;if("undefined"!==typeof h.c&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var e={eb:function(){for(var b=c.cvcf.length,d,m=0;m<b;m++)(d=a.sa(decodeURIComponent(c.cvcf[m])))&&g.e(d,"click",e.ra())},ra:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=d.stringify(a);h.c.i()}}};a.Fa(function(){e.eb()})}})();
(function(){var a=mt.event,b=mt.o;if(c.med&&"undefined"!==typeof h.c){var g={n:"anti",sb:0,kb:0,clk:0},d=function(){h.c.b.et=86;h.c.b.ep=b.stringify(g);h.c.i()};a.e(document,"click",function(){g.clk++});a.e(document,"keyup",function(){g.kb=1});a.e(window,"scroll",function(){g.sb++});a.e(window,"load",function(){setTimeout(d,5E3)})}})();})();
