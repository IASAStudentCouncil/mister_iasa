!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.baguetteBox=e()}(this,function(){"use strict";var t,e,n,o,i,a={},s={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},l={},r=[],u=0,c=!1,d={},f=!1,g=/.+\.(gif|jpe?g|png|webp)/i,p={},b=[],m=null,v=function(t){-1!==t.target.id.indexOf("baguette-img")&&S()},h=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,I()},y=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,H()},w=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,S()},k=function(t){d.count++,d.count>1&&(d.multitouch=!0),d.startX=t.changedTouches[0].pageX,d.startY=t.changedTouches[0].pageY},x=function(t){if(!f&&!d.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.touches[0]||t.changedTouches[0];e.pageX-d.startX>40?(f=!0,I()):e.pageX-d.startX<-40?(f=!0,H()):d.startY-e.pageY>100&&S()}},C=function(){d.count--,d.count<=0&&(d.multitouch=!1),f=!1},E=function(){C()},B=function(e){"block"===t.style.display&&t.contains&&!t.contains(e.target)&&(e.stopPropagation(),P())};function T(t){if(p.hasOwnProperty(t)){var e=p[t].galleries;[].forEach.call(e,function(t){[].forEach.call(t,function(t){R(t.imageElement,"click",t.eventHandler)}),r===t&&(r=[])}),delete p[t]}}function N(t){switch(t.keyCode){case 37:I();break;case 39:H();break;case 27:S()}}function L(i,l){if(r!==i){for(r=i,function(i){for(var l in i||(i={}),s)a[l]=s[l],void 0!==i[l]&&(a[l]=i[l]);e.style.transition=e.style.webkitTransition="fadeIn"===a.animation?"opacity .4s ease":"slideIn"===a.animation?"":"none","auto"===a.buttons&&("ontouchstart"in window||1===r.length)&&(a.buttons=!1),n.style.display=o.style.display=a.buttons?"":"none";try{t.style.backgroundColor=a.overlayBackgroundColor}catch(t){}}(l);e.firstChild;)e.removeChild(e.firstChild);b.length=0;for(var u,c=[],d=[],f=0;f<i.length;f++)(u=D("div")).className="full-image",u.id="baguette-img-"+f,b.push(u),c.push("baguetteBox-figure-"+f),d.push("baguetteBox-figcaption-"+f),e.appendChild(b[f]);t.setAttribute("aria-labelledby",c.join(" ")),t.setAttribute("aria-describedby",d.join(" "))}}function A(e){a.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==t.style.display&&(O(document,"keydown",N),d={count:0,startX:null,startY:null},F(u=e,function(){X(u),M(u)}),q(),t.style.display="block",a.fullScreen&&(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen&&t.mozRequestFullScreen()),setTimeout(function(){t.className="visible",a.bodyClass&&document.body.classList&&document.body.classList.add(a.bodyClass),a.afterShow&&a.afterShow()},50),a.onChange&&a.onChange(u,b.length),m=document.activeElement,P(),c=!0)}function P(){a.buttons?n.focus():i.focus()}function S(){a.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==t.style.display&&(R(document,"keydown",N),t.className="",setTimeout(function(){t.style.display="none",document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),a.bodyClass&&document.body.classList&&document.body.classList.remove(a.bodyClass),a.afterHide&&a.afterHide(),m&&m.focus(),c=!1},500))}function F(t,e){var n=b[t],o=r[t];if(void 0!==n&&void 0!==o)if(n.getElementsByTagName("img")[0])e&&e();else{var i=o.imageElement,s=i.getElementsByTagName("img")[0],l="function"==typeof a.captions?a.captions.call(r,i):i.getAttribute("data-caption")||i.title,u=function(t){var e=t.href;if(t.dataset){var n=[];for(var o in t.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=t.dataset[o]);for(var i=Object.keys(n).sort(function(t,e){return parseInt(t,10)<parseInt(e,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,s=0;s<i.length-1&&i[s]<a;)s++;e=n[i[s]]||e}return e}(i),c=D("figure");if(c.id="baguetteBox-figure-"+t,c.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',a.captions&&l){var d=D("figcaption");d.id="baguetteBox-figcaption-"+t,d.innerHTML=l,c.appendChild(d)}n.appendChild(c);var f=D("img");f.onload=function(){var n=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");c.removeChild(n),!a.async&&e&&e()},f.setAttribute("src",u),f.alt=s&&s.alt||"",a.titleTag&&l&&(f.title=l),c.appendChild(f),a.async&&e&&e()}}function H(){return Y(u+1)}function I(){return Y(u-1)}function Y(t,e){return!c&&t>=0&&t<e.length?(L(e,a),A(t),!0):t<0?(a.animation&&j("left"),!1):t>=b.length?(a.animation&&j("right"),!1):(F(u=t,function(){X(u),M(u)}),q(),a.onChange&&a.onChange(u,b.length),!0)}function j(t){e.className="bounce-from-"+t,setTimeout(function(){e.className=""},400)}function q(){var t=100*-u+"%";"fadeIn"===a.animation?(e.style.opacity=0,setTimeout(function(){l.transforms?e.style.transform=e.style.webkitTransform="translate3d("+t+",0,0)":e.style.left=t,e.style.opacity=1},400)):l.transforms?e.style.transform=e.style.webkitTransform="translate3d("+t+",0,0)":e.style.left=t}function X(t){t-u>=a.preload||F(t+1,function(){X(t+1)})}function M(t){u-t>=a.preload||F(t-1,function(){M(t-1)})}function O(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent("on"+e,function(t){(t=t||window.event).target=t.target||t.srcElement,n(t)})}function R(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent("on"+e,n)}function z(t){return document.getElementById(t)}function D(t){return document.createElement(t)}return[].forEach||(Array.prototype.forEach=function(t,e){for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),[].filter||(Array.prototype.filter=function(t,e,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)t.call(e,n[i],i,n)&&o.push(n[i]);return o}),{run:function(a,s){var r,u,c,d,f,b;return l.transforms=void 0!==(r=D("div")).style.perspective||void 0!==r.style.webkitPerspective,l.svg=((u=D("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(u.firstChild&&u.firstChild.namespaceURI)),l.passiveEvents=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),function(){if(t=z("baguetteBox-overlay"))return e=z("baguetteBox-slider"),n=z("previous-button"),o=z("next-button"),void(i=z("close-button"));var a;(t=D("div")).setAttribute("role","dialog"),t.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(t),(e=D("div")).id="baguetteBox-slider",t.appendChild(e),(n=D("button")).setAttribute("type","button"),n.id="previous-button",n.setAttribute("aria-label","Previous"),n.innerHTML=l.svg?'<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&lt;",t.appendChild(n),(o=D("button")).setAttribute("type","button"),o.id="next-button",o.setAttribute("aria-label","Next"),o.innerHTML=l.svg?'<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&gt;",t.appendChild(o),(i=D("button")).setAttribute("type","button"),i.id="close-button",i.setAttribute("aria-label","Close"),i.innerHTML=l.svg?'<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>':"&times;",t.appendChild(i),n.className=o.className=i.className="baguetteBox-button",a=l.passiveEvents?{passive:!0}:null,O(t,"click",v),O(n,"click",h),O(o,"click",y),O(i,"click",w),O(e,"contextmenu",E),O(t,"touchstart",k,a),O(t,"touchmove",x,a),O(t,"touchend",C),O(document,"focus",B,!0)}(),T(a),c=a,d=s,f=document.querySelectorAll(c),b={galleries:[],nodeList:f},p[c]=b,[].forEach.call(f,function(t){d&&d.filter&&(g=d.filter);var e=[];if(e="A"===t.tagName?[t]:t.getElementsByTagName("a"),0!==(e=[].filter.call(e,function(t){if(-1===t.className.indexOf(d&&d.ignoreClass))return g.test(t.href)})).length){var n=[];[].forEach.call(e,function(t,e){var o=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,L(n,d),A(e)},i={eventHandler:o,imageElement:t};O(t,"click",o),n.push(i)}),b.galleries.push(n)}}),b.galleries},show:Y,showNext:H,showPrevious:I,hide:S,destroy:function(){var a;a=l.passiveEvents?{passive:!0}:null,R(t,"click",v),R(n,"click",h),R(o,"click",y),R(i,"click",w),R(e,"contextmenu",E),R(t,"touchstart",k,a),R(t,"touchmove",x,a),R(t,"touchend",C),R(document,"focus",B,!0),function(){for(var t in p)p.hasOwnProperty(t)&&T(t)}(),R(document,"keydown",N),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),p={},r=[],u=0}}});
//# sourceMappingURL=desk-slider.min-min.js.map
