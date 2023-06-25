




/*
     FILE ARCHIVED ON 4:43:37 Aug 25, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 4:57:01 Mär 6, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
// compressed by c8easypress
// www.communic8.ch
function getCookieVal(offset){var endstr=document.cookie.indexOf(";",offset);if(endstr==-1)endstr=document.cookie.length;return unescape(document.cookie.substring(offset,endstr))}function GetCookie(name){var arg=name+"=";var alen=arg.length;var clen=document.cookie.length;var i=0;while(i<clen){var j=i+alen;if(document.cookie.substring(i,j)==arg)return getCookieVal(j);i=document.cookie.indexOf(" ",i)+1;if(i==0)break}return null}function SetCookie(name,value){var argv=SetCookie.arguments;var argc=SetCookie.arguments.length;var expires=(argc>2)?argv[2]:null;var path="/";var domain=(argc>4)?argv[4]:null;var secure=(argc>5)?argv[5]:false;document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"")}var c8urlcookie=GetCookie('c8url');if(c8urlcookie==null){c8urlcookie='/web/20150825044337/http://www.ihredomain.ch';function chk(URL,formname){invalid="";if(!URL)invalid="Geben Sie eine korrekte Website-Adresse ein!";else{if((URL.indexOf("http://")==-1)||(URL.indexOf(".")==-1))invalid+="\n\nFehlerhafte Website-Adresse."}if(invalid==""){var largeExpDate=new Date();largeExpDate.setTime(largeExpDate.getTime()+(31*24*3600*1000));SetCookie('c8url',URL,largeExpDate);return true}else{alert("Fehler!"+invalid);return false}}}
