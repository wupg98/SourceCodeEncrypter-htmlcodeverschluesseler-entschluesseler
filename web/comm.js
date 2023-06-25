




/*
     FILE ARCHIVED ON 4:42:41 Aug 25, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 4:57:51 Mär 6, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
//
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.img){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function tmt_DivClip(theDiv, l, t, r, b) {
    var fun = (document.getElementById) ? "tmt_findObj" : "MM_findObj";
	var obj = eval(fun+"(theDiv)");if(document.layers && obj){
	obj.clip.left = l;obj.clip.top = t;obj.clip.right = r;obj.clip.bottom = b;}
	else if(obj){eval(fun+"('"+theDiv+"').style.clip='rect("+t+"px "+r+"px "+b+"px "+l+"px)'");}
}

function MM_findObj(n, d) { //v3.0
var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function tmt_findObj(n){
var x,t; if((n.indexOf("?"))>0&&parent.frames.length){t=n.split("?");
x=eval("parent.frames['"+t[1]+"'].document.getElementById('"+t[0]+"')");
}else{x=document.getElementById(n)}return x;
}

function MM_showHideLayers() { //v3.0A Modified by Al Sparber and Massimo Foti for NN6 Compatibility
var i,p,v,obj,args=MM_showHideLayers.arguments;if(document.getElementById){
for (i=0; i<(args.length-2); i+=3){ obj=tmt_findObj(args[i]);v=args[i+2];
v=(v=='show')?'visible':(v='hide')?'hidden':v;
if(obj)obj.style.visibility=v;}} else{
for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
obj.visibility=v; }}
}

function P7AniMagic(el, x, y, a, b, c, s) { //v2.1 PVII
 var elo=el,f="",m=false,d="";
 x=parseInt(x);y=parseInt(y);
 if (parseInt(s)>0) {
  setTimeout("P7AniMagic(\""+elo+"\",\""+x+"\",\""+y+"\",\""+a+"\",\""+b+"\",\""+c+"\",\""+0+"\")", s);
	return;
 }
 if (el.indexOf("?")>0) {p=el.split("?");f="parent.frames['"+p[1]+"'].";el=p[0];}
 if (document.all) {g=eval(f+"document.all['"+el+"']");d=g.style;
 	if(!d.left) {d.left=(!g.currentStyle)?0:g.currentStyle.left;}
  if(!d.top) {d.top=(!g.currentStyle)?0:g.currentStyle.top;}
 }
 else if (document.getElementById) {g=eval(f+"document.getElementById('"+el+"')");d=g.style;
  if(!d.left) {d.left=(!document.defaultView)?0:document.defaultView.getComputedStyle(g,"").getPropertyValue("left");}
	if(!d.top) {d.top=(!document.defaultView)?0:document.defaultView.getComputedStyle(g,"").getPropertyValue("top");}
 }
 else {d=eval(MM_findObj(elo));
 }
 var xx=(parseInt(d.left))?parseInt(d.left):0;
 var yy=(parseInt(d.top))?parseInt(d.top):0;
 if(c==1) {x+=xx;y+=yy;m=true;c=0;}
 else if (c==2) {m=false;clearTimeout(d.p7Magic);}
 else {var i=parseInt(a);
  if (eval(d.moved)){clearTimeout(d.p7Magic);}
  if (xx<x){xx+=i;m=true;if(xx>x){xx=x;}}
  if (xx>x){xx-=i;m=true;if(xx<x){xx=x;}}
  if (yy<y){yy+=i;m=true;if(yy>y){yy=y;}}
  if (yy>y){yy-=i;m=true;if(yy<y){yy=y;}}
 }
 if (m) {d.left=xx;d.top=yy;d.moved=true;
  d.p7Magic=setTimeout("P7AniMagic(\""+elo+"\",\""+x+"\",\""+y+"\",\""+a+"\",\""+b+"\",\""+c+"\",\""+0+"\")", b);
  }
 else {d.moved=false;}
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

//