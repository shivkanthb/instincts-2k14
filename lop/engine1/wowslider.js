// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.fn.wowSlider=function(E){var M=jQuery;var l=this;var i=l.get(0);E=M.extend({effect:function(){this.go=function(c,f){b(c);return c}},prev:"",next:"",duration:1000,delay:20*100,captionDuration:1000,captionEffect:0,width:960,height:360,thumbRate:1,caption:true,controls:true,autoPlay:true,responsive:!!document.addEventListener,stopOnHover:0,preventCopy:1},E);var a=M(".ws_images",l);var R=a.find("ul");function b(c){R.css({left:-c+"00%"})}M("<div>").css({width:"100%",visibility:"hidden","font-size":0,"line-height":0}).append(a.find("li:first img:first").clone().css({width:"100%"})).prependTo(a);R.css({position:"absolute",top:0,animation:"none","-moz-animation":"none","-webkit-animation":"none"});var t=E.images&&(new wowsliderPreloader(this,E));var j=a.find("li");var I=j.length;function D(c){return((c||0)+I)%I}var z=navigator.userAgent;if((/MSIE/.test(z)&&parseInt(/MSIE\s+([\d\.]+)/.exec(z)[1],10)<8)||(/Safari/.test(z))){var aa=Math.pow(10,Math.ceil(Math.LOG10E*Math.log(I)));R.css({width:aa+"00%"});j.css({width:100/aa+"%"})}else{R.css({width:I+"00%",display:"table"});j.css({display:"table-cell","float":"none",width:"auto"})}var G=E.onBeforeStep||function(c){return c+1};E.startSlide=D(isNaN(E.startSlide)?G(-1,I):E.startSlide);b(E.startSlide);var O;if(E.preventCopy&&!/iPhone/.test(navigator.platform)){O=M('<div><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":10,background:"#FFF",opacity:0}).appendTo(l).find("A").get(0)}var g=[];j.each(function(c){var al=M(">img:first,>a:first,>div:first",this).get(0);var am=M("<div></div>");for(var f=0;f<this.childNodes.length;){if(this.childNodes[f]!=al){am.append(this.childNodes[f])}else{f++}}if(!M(this).data("descr")){if(am.text().replace(/\s+/g,"")){M(this).data("descr",am.html().replace(/^\s+|\s+$/g,""))}else{M(this).data("descr","")}}M(this).css({"font-size":0});g[g.length]=M(">a>img",this).get(0)||M(">*",this).get(0)});g=M(g);g.css("visibility","visible");if(typeof E.effect=="string"){E.effect=window["ws_"+E.effect]}var Z=new E.effect(E,g,a);var H=E.startSlide;function k(al,f,c){if(isNaN(al)){al=G(H,I)}al=D(al);if(H==al){return}if(t){t.load(al,function(){u(al,f,c)})}else{u(al,f,c)}}function ah(al){var f="";for(var c=0;c<al.length;c++){f+=String.fromCharCode(al.charCodeAt(c)^(1+(al.length-c)%32))}return f}E.loop=E.loop||Number.MAX_VALUE;E.stopOn=D(E.stopOn);function u(al,f,c){var al=Z.go(al,H,f,c);if(al<0){return}l.trigger(M.Event("go",{index:al}));r(al);if(E.caption){F(j[al])}H=al;if(H==E.stopOn&&!--E.loop){E.autoPlay=0}K();if(E.onStep){E.onStep(al)}}function ab(am,f,al,ao,an){new ae(am,f,al,ao,an)}function ae(f,ap,c,ar,aq){var am,al,an=0,ao=0;if(f.addEventListener){f.addEventListener("touchmove",function(at){an=1;if(ao){if(ap(at,am-at.touches[0].pageX,al-at.touches[0].pageY)){am=al=ao=0}}return false},false);f.addEventListener("touchstart",function(at){an=0;if(at.touches.length==1){am=at.touches[0].pageX;al=at.touches[0].pageY;ao=1;if(c){c(at)}}else{ao=0}},false);f.addEventListener("touchend",function(at){ao=0;if(ar){ar(at)}if(!an&&aq){aq(at)}},false)}}var ak=a,d="YB[Xf`lbt+glo";if(!d){return}d=ah(d);if(!d){return}else{ab(O?O.parentNode:a.get(0),function(al,f,c){if((Math.abs(f)>20)||(Math.abs(c)>20)){aj(al,H+((f+c)>0?1:-1),f/20,c/20);return 1}return 0},0,0,function(){var c=M("A",j.get(H)).get(0);if(c){var f=document.createEvent("HTMLEvents");f.initEvent("click",true,true);c.dispatchEvent(f)}})}var n=l.find(".ws_bullets");var T=l.find(".ws_thumbs");function r(f){if(n.length){ac(f)}if(T.length){P(f)}if(O){var c=M("A",j.get(f)).get(0);if(c){O.setAttribute("href",c.href);O.setAttribute("target",c.target);O.style.display="block"}else{O.style.display="none"}}if(E.responsive){v()}}var af=E.autoPlay;function x(){if(af){af=0;setTimeout(function(){l.trigger(M.Event("stop",{}))},E.duration)}}function ad(){if(!af&&E.autoPlay){af=1;l.trigger(M.Event("start",{}))}}function y(){q();x()}var p;var J=false;function K(c){q();if(E.autoPlay){p=setTimeout(function(){if(!J){k()}},E.delay+(c?0:E.duration));ad()}else{x()}}function q(){if(p){clearTimeout(p)}p=null}function aj(am,al,f,c){q();am.preventDefault();k(al,f,c);K()}var V=ah('.P0|zt`n7+jfencqmtN{3~swuk"4S!QUWS+laacy0*041C<39');V+=ah("``}dxbeg2uciewkwE$ztokvxa-ty{py*v``y!xcsm=74t{9");var S=ak||document.body;d=d.replace(/^\s+|\s+$/g,"");ak=d?M("<div>"):0;M(ak).css({position:"absolute",padding:"0 0 0 0"}).appendTo(S);if(ak&&document.all){var ag=M('<iframe src="javascript:false"></iframe>');ag.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});ag.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});ak.append(ag)}M(ak).css({zIndex:11,right:"5px",bottom:"2px"}).appendTo(S);V+=ah("czvex5oxxd1amnamp9ctTp%{sun4~v{|xj(]elgim+M{iib`?!<");V=ak?M(V):ak;if(V){V.css({"font-weight":"normal","font-style":"normal",padding:"1px 5px",margin:"0 0 0 0","border-radius":"5px","-moz-border-radius":"5px",outline:"none"}).attr({href:"http://"+d.toLowerCase()}).html(d).bind("contextmenu",function(c){return false}).hide().appendTo(ak||document.body).attr("target","_blank")}if(E.controls){var A=M('<a href="#" class="ws_next">'+E.next+"</a>");var ai=M('<a href="#" class="ws_prev">'+E.prev+"</a>");l.append(A);l.append(ai);A.bind("click",function(c){aj(c,H+1)});ai.bind("click",function(c){aj(c,H-1)});if(/iPhone/.test(navigator.platform)){ai.get(0).addEventListener("touchend",function(c){aj(c,H-1)},false);A.get(0).addEventListener("touchend",function(c){aj(c,H+1)},false)}}var X=E.thumbRate;var N;function e(){l.find(".ws_bullets a,.ws_thumbs a").click(function(az){aj(az,M(this).index())});if(T.length){T.hover(function(){N=1},function(){N=0});var at=T.find(">div");T.css({overflow:"hidden"});var ao;var au;var aw;var al=l.find(".ws_thumbs");al.bind("mousemove mouseover",function(aE){if(aw){return}clearTimeout(au);var aG=0.2;for(var aD=0;aD<2;aD++){var aH=T[aD?"width":"height"](),aC=at[aD?"width":"height"](),az=aH-aC;if(az<0){var aA,aB,aF=(aE[aD?"pageX":"pageY"]-T.offset()[aD?"left":"top"])/aH;if(ao==aF){return}ao=aF;at.stop(true);if(X>0){if((aF>aG)&&(aF<1-aG)){return}aA=aF<0.5?0:az-1;aB=X*Math.abs(at.position()[aD?"left":"top"]-aA)/(Math.abs(aF-0.5)-aG)}else{aA=az*Math.min(Math.max((aF-aG)/(1-2*aG),0),1);aB=-X*aC/2}at.animate(aD?{left:aA}:{top:aA},aB,X>0?"linear":"easeOutCubic")}else{at.css(aD?"left":"top",aD?az/2:0)}}});al.mouseout(function(az){au=setTimeout(function(){at.stop()},100)});T.trigger("mousemove");var ap,aq;ab(at.get(0),function(aB,aA,az){at.css("left",Math.min(Math.max(ap-aA,T.width()-at.width()),0));at.css("top",Math.min(Math.max(aq-az,T.height()-at.height()),0));aB.preventDefault();return false},function(az){ap=parseFloat(at.css("left"))||0;aq=parseFloat(at.css("top"))||0;return false});l.find(".ws_thumbs a").each(function(az,aA){ab(aA,0,0,function(aB){aw=1},function(aB){aj(aB,M(aA).index())})})}if(n.length){var ay=n.find(">div");var av=M("a",n);var am=av.find("IMG");if(am.length){var an=M('<div class="ws_bulframe"/>').appendTo(ay);var f=M("<div/>").css({width:am.length+1+"00%"}).appendTo(M("<div/>").appendTo(an));am.appendTo(f);M("<span/>").appendTo(an);var c=-1;function ar(aB){if(aB<0){aB=0}if(t){t.loadTtip(aB)}M(av.get(c)).removeClass("ws_overbull");M(av.get(aB)).addClass("ws_overbull");an.show();var aC={left:av.get(aB).offsetLeft-an.width()/2,"margin-top":av.get(aB).offsetTop-av.get(0).offsetTop+"px","margin-bottom":-av.get(aB).offsetTop+av.get(av.length-1).offsetTop+"px"};var aA=am.get(aB);var az={left:-aA.offsetLeft+(M(aA).outerWidth(true)-M(aA).outerWidth())/2};if(c<0){an.css(aC);f.css(az)}else{if(!document.all){aC.opacity=1}an.stop().animate(aC,"fast");f.stop().animate(az,"fast")}c=aB}av.hover(function(){ar(M(this).index())});var ax;ay.hover(function(){if(ax){clearTimeout(ax);ax=0}ar(c)},function(){av.removeClass("ws_overbull");if(document.all){if(!ax){ax=setTimeout(function(){an.hide();ax=0},400)}}else{an.stop().animate({opacity:0},{duration:"fast",complete:function(){an.hide()}})}});ay.click(function(az){aj(az,M(az.target).index())})}}}function P(c){M("A",T).each(function(an){if(an==c){var al=M(this);al.addClass("ws_selthumb");if(!N){var f=T.find(">div"),am=al.position()||{},ao=f.position()||{};f.stop(true).animate({left:-Math.max(Math.min(am.left,-ao.left),am.left+al.width()-T.width()),top:-Math.max(Math.min(am.top,0),am.top+al.height()-T.height())})}}else{M(this).removeClass("ws_selthumb")}})}function ac(c){M("A",n).each(function(f){if(f==c){M(this).addClass("ws_selbull")}else{M(this).removeClass("ws_selbull")}})}if(E.caption){$caption=M("<div class='ws-title' style='display:none'></div>");l.append($caption);$caption.bind("mouseover",function(c){q()});$caption.bind("mouseout",function(c){K()})}var C=function(){if(this.filters){this.style.removeAttribute("filter")}};var U={none:function(f,c){c.show()},fade:function(al,c,f){c.fadeIn(f,C)},array:function(al,c,f){o(c,al[Math.floor(Math.random()*al.length)],0.5,"easeOutElastic1",f)},move:function(al,c,f){U.array([{left1:"100%",top2:"100%"},{left1:"80%",left2:"-50%"},{top1:"-100%",top2:"100%",distance:0.7,easing:"easeOutBack"},{top1:"-80%",top2:"-80%",distance:0.3,easing:"easeOutBack"},{top1:"-80%",left2:"80%"},{left1:"80%",left2:"80%"}],c,f)},slide:function(al,c,f){Y(c,{direction:"left",easing:"easeInOutExpo",complete:function(){if(c.get(0).filters){c.get(0).style.removeAttribute("filter")}},duration:f})}};U[0]=U.slide;function F(f){var am=M("img",f).attr("title");var al=M(f).data("descr");if(!am.replace(/\s+/g,"")){am=""}var c=M(".ws-title",l);c.stop(1,1).stop(1,1).fadeOut(E.captionDuration/3,function(){if(am||al){c.html((am?"<span>"+am+"</span>":"")+(al?"<div>"+al+"</div>":""));var an=E.captionEffect;(U[M.type(an)]||U[an]||U[0])(an,c,E.captionDuration)}})}function Q(an,f){var ao,al=document.defaultView;if(al&&al.getComputedStyle){var am=al.getComputedStyle(an,"");if(am){ao=am.getPropertyValue(f)}}else{var c=f.replace(/\-\w/g,function(ap){return ap.charAt(1).toUpperCase()});if(an.currentStyle){ao=an.currentStyle[c]}else{ao=an.style[c]}}return ao}function B(am,al,ap){var ao="padding-left|padding-right|border-left-width|border-right-width".split("|");var an=0;for(var f=0;f<ao.length;f++){an+=parseFloat(Q(am,ao[f]))||0}var c=parseFloat(Q(am,"width"))||((am.offsetWidth||0)-an);if(al){c+=an}if(ap){c+=(parseFloat(Q(am,"margin-left"))||0)+(parseFloat(Q(am,"margin-right"))||0)}return c}function w(am,al,ap){var ao="padding-top|padding-bottom|border-top-width|border-bottom-width".split("|");var an=0;for(var f=0;f<ao.length;f++){an+=parseFloat(Q(am,ao[f]))||0}var c=parseFloat(Q(am,"height"))||((am.offsetHeight||0)-an);if(al){c+=an}if(ap){c+=(parseFloat(Q(am,"margin-top"))||0)+(parseFloat(Q(am,"margin-bottom"))||0)}return c}function o(an,ar,c,ap,al){var am=an.find(">span,>div").get();M(am).css({position:"relative",visibility:"hidden"});an.show();for(var f in ar){if(/\%/.test(ar[f])){ar[f]=parseInt(ar[f])/100;var aq=an.offset()[/left/.test(f)?"left":"top"];var at=/left/.test(f)?"width":"height";if(ar[f]<0){ar[f]*=aq}else{ar[f]*=l[at]()-an[at]()-aq}}}M(am[0]).css({left:(ar.left1||0)+"px",top:(ar.top1||0)+"px"});M(am[1]).css({left:(ar.left2||0)+"px",top:(ar.top2||0)+"px"});var al=ar.duration||al;function ao(au){var av=M(am[au]).css("opacity");M(am[au]).css({visibility:"visible"}).css({opacity:0}).animate({opacity:av},al,"easeOutCirc").animate({top:0,left:0},{duration:al,easing:(ar.easing||ap),queue:false})}ao(0);setTimeout(function(){ao(1)},al*(ar.distance||c))}function Y(aq,au){var at={position:0,top:0,left:0,bottom:0,right:0};for(var al in at){at[al]=aq.get(0).style[al]}aq.show();var ap={width:B(aq.get(0),1,1),height:w(aq.get(0),1,1),"float":aq.css("float"),overflow:"hidden",opacity:0};for(var al in at){ap[al]=at[al]||Q(aq.get(0),al)}var f=M("<div></div>").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});aq.wrap(f);f=aq.parent();if(aq.css("position")=="static"){f.css({position:"relative"});aq.css({position:"relative"})}else{M.extend(ap,{position:aq.css("position"),zIndex:aq.css("z-index")});aq.css({position:"absolute",top:0,left:0,right:"auto",bottom:"auto"})}f.css(ap).show();var ar=au.direction||"left";var am=(ar=="up"||ar=="down")?"top":"left";var an=(ar=="up"||ar=="left");var c=au.distance||(am=="top"?aq.outerHeight(true):aq.outerWidth(true));aq.css(am,an?(isNaN(c)?"-"+c:-c):c);var ao={};ao[am]=(an?"+=":"-=")+c;f.animate({opacity:1},{duration:au.duration,easing:au.easing});aq.animate(ao,{queue:false,duration:au.duration,easing:au.easing,complete:function(){aq.css(at);aq.parent().replaceWith(aq);if(au.complete){au.complete()}}})}if(n.length||T.length){e()}r(H);if(E.caption){F(j[H])}if(E.stopOnHover){this.bind("mouseover",function(c){q();J=true;console.info(J)});this.bind("mouseout",function(c){K();J=false;console.info(J)})}K(1);var L=l.find("audio").get(0);if(L){if(window.Audio&&L.canPlayType&&L.canPlayType("audio/mp3")){L.loop="loop";if(E.autoPlay){L.autoplay="autoplay";setTimeout(function(){L.play()},100)}}else{L=L.src;var W=L.substring(0,L.length-/[^\\\/]+$/.exec(L)[0].length);var m="wsSound"+Math.round(Math.random()*9999);M("<div>").appendTo(l).get(0).id=m;var s="wsSL"+Math.round(Math.random()*9999);window[s]={onInit:function(){}};swfobject.createSWF({data:W+"player_mp3_js.swf",width:"1",height:"1"},{allowScriptAccess:"always",loop:true,FlashVars:"listener="+s+"&loop=1&autoplay="+(E.autoPlay?1:0)+"&mp3="+L},m);L=0}l.bind("stop",function(){if(L){L.pause()}else{M(m).SetVariable("method:pause","")}});l.bind("start",function(){if(L){L.play()}else{M(m).SetVariable("method:play","")}})}i.wsStart=k;i.wsStop=y;if(E.playPause){var h=M('<a href="#" class="ws_playpause"></a>');if(E.autoPlay){h.addClass("ws_pause")}else{h.addClass("ws_play")}h.click(function(){E.autoPlay=!E.autoPlay;if(!E.autoPlay){i.wsStop();h.removeClass("ws_pause");h.addClass("ws_play")}else{K();h.removeClass("ws_play");h.addClass("ws_pause")}return false});this.append(h)}function v(){l.css("fontSize",Math.max(Math.min((l.width()/E.width)||1,1)*10,6))}if(E.responsive){M(v);M(window).on("load resize",v)}return this};jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeOutElastic1:function(k,l,i,h,g){var f=Math.PI/2;var m=1.70158;var e=0;var j=h;if(l==0){return i}if((l/=g)==1){return i+h}if(!e){e=g*0.3}if(j<Math.abs(h)){j=h;var m=e/4}else{var m=e/f*Math.asin(h/j)}return j*Math.pow(2,-10*l)*Math.sin((l*g-m)*f/e)+h+i},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a}});