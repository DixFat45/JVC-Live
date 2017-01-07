// ==UserScript==
// @name JVC Live
// @description Charger les nouveaux messages en direct sur JVC
// @author Singles
// @match http://www.jeuxvideo.com/*
// @match http://www.forumjv.com/*
// @run-at document-end
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require Favicon.js
// @require Formulaire.js
// @require Message.js
// @require Option.js
// @require Page.js
// @require JvcLive.js
// @version 1.1.4
// @grant none
// @noframes
// ==/UserScript==

var TL = new TopicLive();
TL.initStatic();

var $mouseX = 0, $mouseY = 0;
var $xp = 0, $yp =0;

$(document).mousemove(function(e){
    $mouseX = e.pageX;
    $mouseY = e.pageY;    
});

var $loop = setInterval(function(){
// change 12 to alter damping higher is slower
$xp += (($mouseX - $xp)/12);
$yp += (($mouseY - $yp)/12);

 $("#preview").css('position',"absolute");
$("#preview").css({left:$xp+20 +'px', top:$yp +'px'});  
}, 30);
   $("body").append("<div id=\"preview\"> </div>")  
   
   
   var currentRequest = null;    





