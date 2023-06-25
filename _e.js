




/*
     FILE ARCHIVED ON 3:13:41 Jul 10, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 5:35:25 Mär 6, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
//////////////////////////////////////////////////////////////////
//                      Source Code Encrypter v1.0              //
//////////////////////////////////////////////////////////////////
//                                                              //
//  This JavaScript can be freely used as long as this message  //
//  stays here in the header of the script. Any modifications   //
//  and bugs found (and fixed) are appreciated.                 //
//  Script submitted/featured on Dynamicdrive.com               //
//  Visit /web/20140710031341/http://www.dynamicdrive.com for source code           //
//          Svetlin Staev, thewebmonster@altavista.com          //
//////////////////////////////////////////////////////////////////

var i=0;
var ie=(document.all)?1:0;
var ns=(document.layers)?1:0;

    function initStyleElements() /* Styles for Buttons Init */
	{
		var c = document.pad;
		if (ie)
			{
				//c.text.style.backgroundColor="#DDDDDD";
				c.compileIt.style.backgroundColor="#C0C0A8";
				c.compileIt.style.cursor="hand";
				c.select.style.backgroundColor="#C0C0A8";
				c.select.style.cursor="hand";
				c.view.style.backgroundColor="#C0C0A8";
				c.view.style.cursor="hand";
				c.retur.style.backgroundColor="#C0C0A8";
				c.retur.style.cursor="hand";
				c.clear.style.backgroundColor="#C0C0A8";
				c.clear.style.cursor="hand";
			}
		else return;
	}

/* Buttons Enlightment of "Compilation" panel */
    function LightOn(what)
	{
		if (ie) what.style.backgroundColor = '#E0E0D0';
		else return;
	}
    function FocusOn(what)
	{
		if (ie) what.style.backgroundColor = '#EBEBEB';
		else return;
	}
    function LightOut(what)
	{
		if (ie) what.style.backgroundColor = '#C0C0A8';
		else return;
	}
    function FocusOff(what)
	{
		if (ie) what.style.backgroundColor = '#DDDDDD';
		else return;
	}
/* Buttons Enlightment of "Compilation" panel */

    function generate() /* Generation of "Compilation" */
	{
		code = document.pad.text.value;
		if (code)
			{
				document.pad.text.value='Verschlüsselung läuft... Bitte warten!';
				setTimeout("compile()",1000);
			}
		else alert('Geben Sie einen Quelltext ein,\n den Sie kompilieren möchten.')
	}
    function compile() /* The "Compilation" */
	{
		document.pad.text.value='';
		compilation=escape(code);
		document.pad.text.value="<script>\n<!--\ndocument.write(unescape(\""+compilation+"\"));\n//-->\n<\/script>";
		i++;
		if (i=1) alert("Seite einmal kompiliert!");
		else alert("Seite "+i+" mal kompiliert!");
	}
    function selectCode() /* Selecting "Compilation" for Copying */
	{
		if(document.pad.text.value.length>0)
			{
				document.pad.text.focus();
				document.pad.text.select();
			}
		else alert('Es gibt nichts auszuwählen!')
	}
    function preview() /* Preview for the "Compilation" */
	{
		if(document.pad.text.value.length>0)
			{
				pr=window.open("","Preview","scrollbars=1,menubar=1,status=1,width=700,height=320,left=50,top=110");
				pr.document.write(document.pad.text.value);
			}
		else alert('Nothing for be previewed!')
	}
    function uncompile() /* Decompiling a "Compilation" */
	{
		if (document.pad.text.value.length>0)
			{
				source=unescape(document.pad.text.value);
				document.pad.text.value=""+source+"";
			}
		else alert('You need compiled code to uncompile it!')
	}