




/*
     FILE ARCHIVED ON 4:15:02 Aug 25, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 4:58:03 Mär 6, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
//jianxian

nereidFadeObjects = new Object();

nereidFadeTimers = new Object();

function nereidFade(object, destOp, rate, delta){

if (!document.all)

return

    if (object != "[object]"){ setTimeout("nereidFade("+object+","+destOp+","+rate+","+delta+")",0);

        return;

    }

    clearTimeout(nereidFadeTimers[object.sourceIndex]);

    diff = destOp-object.filters.alpha.opacity;

    direction = 1;

    if (object.filters.alpha.opacity > destOp){

        direction = -1;

    }

    delta=Math.min(direction*diff,delta);

    object.filters.alpha.opacity+=direction*delta;

    if (object.filters.alpha.opacity != destOp){

        nereidFadeObjects[object.sourceIndex]=object;

        nereidFadeTimers[object.sourceIndex]=setTimeout("nereidFade(nereidFadeObjects["+object.sourceIndex+"],"+destOp+","+rate+","+delta+")",rate);

    }

}

//

