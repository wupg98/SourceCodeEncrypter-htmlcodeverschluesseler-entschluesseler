




/*
     FILE ARCHIVED ON 0:06:46 Aug 4, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 4:57:43 Mär 6, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
// compressed by c8easypress
// www.communic8.ch
v3=0;op=0;ie4=0;ie5=0;nn4=0;nn6=0;isMacIE=0;isHoriz=0;isWebTV=0;isOpen=0;menu_width=130;menu_head=22;offset=22;padd=0;function curtain(){if(op){document.all.l2.style.visibility="visible"}if(ie4||ie5){l2.style.visibility="hidden";l1.filters.item(0).apply();l1.filters.item(0).transition=23;l2.style.visibility="visible";l1.filters(0).play(1.5)}}if(document.images){if(navigator.userAgent.indexOf("Opera")!=-1){op=1}else{ie4=(document.all&&!document.getElementById);nn4=(document.layers);ie5=(document.all&&document.getElementById);nn6=(document.addEventListener)}}else{v3=1}fadeColor="#6699ff";stepIn=17;stepOut=25;autoFade=true;sloppyClass=true;macCompat=false;hexa=new makearray(16);for(var i=0;i<10;i++)hexa[i]=i;hexa[10]="a";hexa[11]="b";hexa[12]="c";hexa[13]="d";hexa[14]="e";hexa[15]="f";document.onmouseover=domouseover;document.onmouseout=domouseout;fadeColor=dehexize(fadeColor.toLowerCase());var fadeId=new Array();function dehexize(Color){var colorArr=new makearray(3);for(i=1;i<7;i++){for(j=0;j<16;j++){if(Color.charAt(i)==hexa[j]){if(i%2!=0)colorArr[Math.floor((i-1)/2)]=eval(j)*16;else colorArr[Math.floor((i-1)/2)]+=eval(j)}}}return colorArr}function domouseover(){if(document.all){var srcElement=event.srcElement;if((srcElement.tagName=="A"&&autoFade&&srcElement.className!="nofade")||srcElement.className=="fade"||(sloppyClass&&srcElement.className.indexOf("fade")!=-1)){if(!srcElement.startColor){srcElement.startColor=(srcElement.style.color)?srcElement.style.color:srcElement.currentStyle.color;srcElement.startColor=dehexize(srcElement.startColor.toLowerCase())}var link=(macCompat?srcElement.name:srcElement.uniqueID);if(link)fade(srcElement.startColor,fadeColor,link,stepIn);else if(macCompat)alert("Error: Mac Compatility mode enabled, but link has no name.")}}}function domouseout(){if(document.all){var srcElement=event.srcElement;if((srcElement.tagName=="A"&&autoFade&&srcElement.className!="nofade")||srcElement.className=="fade"||(sloppyClass&&srcElement.className.indexOf("fade")!=-1)){var link=(macCompat?srcElement.name:srcElement.uniqueID);if(link)fade(fadeColor,srcElement.startColor,link,stepIn)}}}function makearray(n){this.length=n;for(var i=1;i<=n;i++)this[i]=0;return this}function hex(i){if(i<0)return "00";else if(i>255)return "ff";else return ""+hexa[Math.floor(i/16)]+hexa[i%16]}function setColor(r,g,b,element){var hr=hex(r);var hg=hex(g);var hb=hex(b);element.style.color="#"+hr+hg+hb}function fade(s,e,element,step){var sr=s[0];var sg=s[1];var sb=s[2];var er=e[0];var eg=e[1];var eb=e[2];if(fadeId[0]!=null&&fade[0]!=element&&eval(fadeId[0])){var orig=eval(fadeId[0]);setColor(orig.startColor[0],orig.startColor[1],orig.startColor[2],orig);var i=1;while(i<fadeId.length){clearTimeout(fadeId[i]);i++}}for(var i=0;i<=step;i++){fadeId[i+1]=setTimeout("setColor(Math.floor("+sr+" *(( "+step+" - "+i+" )/ "+step+" ) + "+er+" * ("+i+"/"+step+")),Math.floor("+sg+" * (( "+step+" - "+i+" )/ "+step+" ) + "+eg+" * ("+i+"/"+step+")),Math.floor("+sb+" * (("+step+"-"+i+")/"+step+") + "+eb+" * ("+i+"/"+step+")),"+element+");",i*step)}fadeId[0]=element}popupc8send2friend="";function pop_winc8send2friend(){if(popupc8send2friend){if(popupc8send2friend.closed){popupc8send2friend=window.open("/cgi/c8prima/emailit.cgi","popupc8send2friend","top="+((screen.availHeight/2)-(120/2))+",left="+((screen.availWidth/2)-(260/2))+",width=260,height=120,resizable=1,toolbar=0,scrollbars=0,location=0,status=0")}else{popupc8send2friend.close();popupc8send2friend=window.open("/cgi/c8prima/emailit.cgi","popupc8send2friend","top="+((screen.availHeight/2)-(120/2))+",left="+((screen.availWidth/2)-(260/2))+",width=260,height=120,resizable=1,toolbar=0,scrollbars=0,location=0,status=0")}}else{popupc8send2friend=window.open("/cgi/c8prima/emailit.cgi","popupc8send2friend","top="+((screen.availHeight/2)-(120/2))+",left="+((screen.availWidth/2)-(260/2))+",width=260,height=120,resizable=1,toolbar=0,scrollbars=0,location=0,status=0")}}function check(e){ok="1234567890qwertyuiop[]asdfghjklzxcvbnm.@-_QWERTYUIOPASDFGHJKLZXCVBNM";for(h=0;h<e.length;h++){if(ok.indexOf(e.charAt(h))<0){return(false)}}if(document.images){re=/(@.*@)|(\.\.)|(^\.)|(^@)|(@$)|(\.$)|(@\.)/;re_two=/^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3}|[0-9]{1,3})(\]?)$/;if(!e.match(re)&&e.match(re_two)){return(-1)}}}function checkMess(f){curr=f.message.value.length;f.chars.value=1000-curr;if(f.message.value.length>=1000){f.message.value=f.message.value.substring(0,1000-1)}}function checkF(f){if(f.email.value.length>0&&!check(f.email.value)){alert("Fehlerhafte Email-Adresse entdeckt");if(document.all||document.getElementById){f.email.style.background="#ffd000"}f.email.focus();return false}}function b(){var lang;var name=navigator.appName;var version=navigator.appVersion;if(name=="Microsoft Internet Explorer"&&version>="4.0"){lang=(navigator.browserLanguage);if(document.all){window.external.AddFavorite(bookmarkurl,bookmarktitle)}}else{lang=(navigator.language);var msg='Bookmark: STRG-D!';alert(msg)}}url1=("/web/20150804000646/http://www.communic8.ch/cgi/c8wes/wes.cgi");function wes(page){OpenWin=this.open(page,"wes","toolbar=no,menubar=no,location=no,scrollbars=no,resizable=no,width=550,height=420")}
function printCookies(w){
 cName = "";
 pCOOKIES = new Array();
 pCOOKIES = document.cookie.split('; ');
 for(bb = 0; bb < pCOOKIES.length; bb++){
  NmeVal  = new Array();
  NmeVal  = pCOOKIES[bb].split('=');
  if(NmeVal[0] == w){
   cName = NmeVal[1];
  }
 }
 return cName;
}
 
first  = printCookies("a_name");
second = printCookies("g_email");
third = printCookies("c8url");