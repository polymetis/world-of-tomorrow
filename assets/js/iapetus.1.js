//All my plugins and helpers that are not site specific. 
/*
 * MBP - Mobile boilerplate helper functions
 */(function(a){function b(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if(typeof c=="object"&&c.handleEvent)a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d);else throw e}else"attachEvent"in a&&(typeof c=="object"&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))}function c(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if(typeof c=="object"&&c.handleEvent)a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d);else throw e}else"detachEvent"in a&&(typeof c=="object"&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))}window.MBP=window.MBP||{};MBP.viewportmeta=a.querySelector&&a.querySelector('meta[name="viewport"]');MBP.ua=navigator.userAgent;MBP.scaleFix=function(){if(MBP.viewportmeta&&/iPhone|iPad|iPod/.test(MBP.ua)&&!/Opera Mini/.test(MBP.ua)){MBP.viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0";a.addEventListener("gesturestart",MBP.gestureStart,!1)}};MBP.gestureStart=function(){MBP.viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"};MBP.hideUrlBar=function(){var a=window,b=a.document;if(!location.hash&&a.addEventListener){window.scrollTo(0,1);var c=1,d=setInterval(function(){if(b.body){clearInterval(d);c="scrollTop"in b.body?b.body.scrollTop:1;a.scrollTo(0,c===1?0:1)}},15);a.addEventListener("load",function(){setTimeout(function(){a.scrollTo(0,c===1?0:1)},0)},!1)}};MBP.fastButton=function(a,c){this.element=a;this.handler=c;b(a,"touchstart",this,!1);b(a,"click",this,!1)};MBP.fastButton.prototype.handleEvent=function(a){a=a||window.event;switch(a.type){case"touchstart":this.onTouchStart(a);break;case"touchmove":this.onTouchMove(a);break;case"touchend":this.onClick(a);break;case"click":this.onClick(a)}};MBP.fastButton.prototype.onTouchStart=function(b){b.stopPropagation();this.element.addEventListener("touchend",this,!1);a.body.addEventListener("touchmove",this,!1);this.startX=b.touches[0].clientX;this.startY=b.touches[0].clientY;this.element.style.backgroundColor="rgba(0,0,0,.7)"};MBP.fastButton.prototype.onTouchMove=function(a){(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10)&&this.reset()};MBP.fastButton.prototype.onClick=function(a){a=a||window.event;a.stopPropagation&&a.stopPropagation();this.reset();this.handler(a);a.type=="touchend"&&MBP.preventGhostClick(this.startX,this.startY);this.element.style.backgroundColor=""};MBP.fastButton.prototype.reset=function(){c(this.element,"touchend",this,!1);c(a.body,"touchmove",this,!1);this.element.style.backgroundColor=""};MBP.preventGhostClick=function(a,b){MBP.coords.push(a,b);window.setTimeout(function(){MBP.coords.splice(0,2)},2500)};MBP.ghostClickHandler=function(a){for(var b=0,c=MBP.coords.length;b<c;b+=2){var d=MBP.coords[b],e=MBP.coords[b+1];if(Math.abs(a.clientX-d)<25&&Math.abs(a.clientY-e)<25){a.stopPropagation();a.preventDefault()}}};a.addEventListener&&a.addEventListener("click",MBP.ghostClickHandler,!0);MBP.coords=[];MBP.autogrow=function(a,b){function c(a){var b=this.scrollHeight,c=this.clientHeight;b>c&&(this.style.height=b+3*e+"px")}var d=b?b:12,e=a.currentStyle?a.currentStyle.lineHeight:getComputedStyle(a,null).lineHeight;e=e.indexOf("px")==-1?d:parseInt(e,10);a.style.overflow="hidden";a.addEventListener?a.addEventListener("keyup",c,!1):a.attachEvent("onkeyup",c)}})(document);var $viewportMeta=$('meta[name="viewport"]');$("input, select, textarea").bind("focus blur",function(a){$viewportMeta.attr("content","width=device-width,initial-scale=1,maximum-scale="+(a.type=="blur"?10:1))});window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);typeof console.log=="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};(function(a){function b(){}for(var c="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),d;d=c.pop();)a[d]=a[d]||b})(function(){try{console.log();return window.console}catch(a){return window.console={}}}());(function(a){var b=0;a.fn.mobileMenu=function(d){function e(d){return d.attr("id")?a("#mobileMenu_"+d.attr("id")).length>0:(b++,d.attr("id","mm"+b),a("#mobileMenu_mm"+b).length>0)}function f(b){b.hide();a("#mobileMenu_"+b.attr("id")).show()}function g(b){if(b.is("ul, ol")){var c='<select id="mobileMenu_'+b.attr("id")+'" class="mobileMenu">';c+='<option value="">'+j.topOptionText+"</option>";b.find("li").each(function(){var b="",d=a(this).parents("ul, ol").length;for(i=1;i<d;i++)b+=j.indentString;d=a(this).find("a:first-child").attr("href");b+=a(this).clone().children("ul, ol").remove().end().text();c+='<option value="'+d+'">'+b+"</option>"});c+="</select>";b.parent().append(c);a("#mobileMenu_"+b.attr("id")).change(function(){var b=a(this);b.val()!==null&&(document.location.href=b.val())});f(b)}else alert("mobileMenu will only work with UL or OL elements!")}function h(b){a(window).width()<j.switchWidth&&!e(b)?g(b):a(window).width()<j.switchWidth&&e(b)?f(b):!(a(window).width()<j.switchWidth)&&e(b)&&(b.show(),a("#mobileMenu_"+b.attr("id")).hide())}var j={switchWidth:768,topOptionText:"Select a page",indentString:"&nbsp;&nbsp;&nbsp;"};return this.each(function(){d&&a.extend(j,d);var b=a(this);a(window).resize(function(){h(b)});h(b)})}})(jQuery);(function(a){function b(a,b){for(var c=a,d=0;a=a[b];)c.tagName==a.tagName&&d++;return d}function c(a,c,d){a=b(a,d);if(c=="odd"||c=="even")d=2,a-=c!="odd";else{var f=c.indexOf("n");f>-1?(d=parseInt(c,10)||parseInt(c.substring(0,f)+"1",10),a-=(parseInt(c.substring(f+1),10)||0)-1):(d=a+1,a-=parseInt(c,10)-1)}return(d<0?a<=0:a>=0)&&a%d==0}var d={"first-of-type":function(a){return b(a,"previousSibling")==0},"last-of-type":function(a){return b(a,"nextSibling")==0},"only-of-type":function(a){return d["first-of-type"](a)&&d["last-of-type"](a)},"nth-of-type":function(a,b,d){return c(a,d[3],"previousSibling")},"nth-last-of-type":function(a,b,d){return c(a,d[3],"nextSibling")}};a.extend(a.expr[":"],d)})(jQuery);(function(a,b,c){function f(a){var b={},d=/^jQuery\d+$/;c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)});return b}function g(){var a=c(this);a.val()===a.attr("placeholder")&&a.hasClass("placeholder")&&(a.data("placeholder-password")?a.hide().next().show().focus().attr("id",a.removeAttr("id").data("placeholder-id")):a.val("").removeClass("placeholder"))}function h(){var a,b=c(this),d=b,e=this.id;if(b.val()===""){if(b.is(":password")){if(!b.data("placeholder-textinput")){try{a=b.clone().attr({type:"text"})}catch(h){a=c("<input>").attr(c.extend(f(this),{type:"text"}))}a.removeAttr("name").data("placeholder-password",!0).data("placeholder-id",e).bind("focus.placeholder",g);b.data("placeholder-textinput",a).data("placeholder-id",e).before(a)}b=b.removeAttr("id").hide().prev().attr("id",e).show()}b.addClass("placeholder").val(b.attr("placeholder"))}else b.removeClass("placeholder")}var d="placeholder"in b.createElement("input"),e="placeholder"in b.createElement("textarea");if(d&&e){c.fn.placeholder=function(){return this};c.fn.placeholder.input=c.fn.placeholder.textarea=!0}else{c.fn.placeholder=function(){return this.filter((d?"textarea":":input")+"[placeholder]").bind("focus.placeholder",g).bind("blur.placeholder",h).trigger("blur.placeholder").end()};c.fn.placeholder.input=d;c.fn.placeholder.textarea=e;c(function(){c("form").bind("submit.placeholder",function(){var a=c(".placeholder",this).each(g);setTimeout(function(){a.each(h)},10)})});c(a).bind("unload.placeholder",function(){c(".placeholder").val("")})}})(this,document,jQuery);$(document).ready(function(){$.fn.mobileMenu&&$("ol#id").mobileMenu({switchWidth:768,topOptionText:"Choose a page",indentString:"&nbsp;&nbsp;&nbsp;"});$.fn.placeholder&&$("input, textarea").placeholder()});
