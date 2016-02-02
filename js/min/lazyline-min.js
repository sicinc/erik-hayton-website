!function(t){var e={init:function(e){return this.each(function(){var n=t(this),r=n.data("lazyLinePainter");if(n.addClass("lazylinepainter"),!r){var r=t.extend({strokeWidth:2,strokeDash:null,strokeColor:"#000",strokeOverColor:null,strokeCap:"round",strokeJoin:"round",strokeOpacity:1,onComplete:null,onUpdate:null,onStart:null,onStrokeStart:null,onStrokeComplete:null,delay:0,ease:null,overrideKey:null,drawSequential:!0,speedMultiplier:1,reverse:!1,paused:!1,progress:0,longestDuration:0,playhead:0},e),o=r.overrideKey?r.overrideKey:n.attr("id").replace("#","");r.width=r.svgData[o].dimensions.width,r.height=r.svgData[o].dimensions.height,r.paths=t.extend(!0,[],r.svgData[o].strokepath);var o="0 0 "+r.width+" "+r.height,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS(null,"viewBox",o),a.setAttribute("xmlns","http://www.w3.org/2000/svg"),o=t(a),r.svg=o;for(var o=r.delay,s=r.paths,l=a=0;l<s.length;l++)a+=s[l].duration+(s[l].delay||0);for(var s=r.delay,l=r.paths,h=0,p=0;p<l.length;p++){var c=l[p].delay||0;l[p].duration+c>h&&(h=l[p].duration+c)}for(r.totalDuration=r.drawSequential?o+a:s+h,o=r.reverse?r.totalDuration:0,a=0;a<r.paths.length;a++){s=r.paths[a],s.progress=0,s.index=a;var l=s,h=r,p=a,c=document.createElementNS("http://www.w3.org/2000/svg","path"),d=t(c);for(h.svg.append(d),d.attr(i(h,h.paths[p])),l.el=c,s.length=Math.ceil(s.el.getTotalLength()),s.delay=s.delay||0,s.duration=s.duration,l=s,h=s.el,p=s.length,c=[],d=0;p>d;d++){var f=h.getPointAtLength(d);c.push({x:f.x,y:f.y})}l.positions=c,s.ease=s.ease||null,l=s.el.style,h=r,p=s.length,c=void 0,c=s.strokeDash?u(s.strokeDash,p):h.strokeDash?u(h.strokeDash,p):p+" "+p,l.strokeDasharray=c,s.el.style.strokeDashoffset=s.length,s.el.style.display="block",s.el.getBoundingClientRect(),s.onStrokeStart=s.onStrokeStart||null,s.onStrokeComplete=s.onStrokeComplete||null,s.onStrokeStartDone=!1,s.onStrokeCompleteDone=!1,s.onStrokeUpdate=s.onStrokeUpdate||null,h=s.duration/r.totalDuration,o=r.reverse?o-s.duration:r.drawSequential?r.playhead+r.delay:s.delay+r.delay,l=o/r.totalDuration,s.startTime=o,s.startProgress=l,s.durationProgress=h,r.playhead+=s.duration+s.delay}r.totalDuration*=r.speedMultiplier,n.append(r.svg),n.data("lazyLinePainter",r),n.lazylinepainter("resize")}})},paint:function(){return this.each(function(){var e=t(this),n=e.data("lazyLinePainter");e.lazylinepainter("erase"),n.rAF=requestAnimationFrame(function(t){r(t,n)}),null!==n.onStart&&n.onStart()})},pause:function(){return this.each(function(){var e=t(this).data("lazyLinePainter");e.paused||(e.paused=!0,cancelAnimationFrame(e.rAF))})},resume:function(){return this.each(function(){var e=t(this).data("lazyLinePainter");e.paused&&(requestAnimationFrame(function(t){n(t,e)}),e.paused=!1)})},erase:function(){return this.each(function(){var e=t(this).data("lazyLinePainter");e.startTime=null,e.elapsedTime=null,cancelAnimationFrame(e.rAF),e.onStrokeCompleteDone=!1,e.paused=!1;for(var n=0;n<e.paths.length;n++){var r=e.paths[n];r.el.style.strokeDashoffset=r.length,r.onStrokeCompleteDone=!1,r.onStrokeStartDone=!1}})},destroy:function(){return this.each(function(){var e=t(this);e.removeData("lazyLinePainter"),e.empty(),e.removeClass("lazylinepainter")})},set:function(e){return this.each(function(){var n=t(this).data("lazyLinePainter");n.progress=e,o(n)})},get:function(){return t(this).data("lazyLinePainter")},resize:function(){this.each(function(){var e=t(this),n=e.data("lazyLinePainter");for(n.offset=e.offset(),e=0;e<n.paths.length;e++)s(n,n.paths[e])})}},n=function(t,e){e.startTime=t-e.elapsedTime,requestAnimationFrame(function(t){r(t,e)})},r=function(t,e){e.startTime||(e.startTime=t),null!==e.onUpdate&&e.onUpdate(),e.elapsedTime=t-e.startTime,e.progress=a(e.totalDuration,e.startTime,e.elapsedTime,e.ease),o(e),1>e.progress?e.rAF=requestAnimationFrame(function(t){r(t,e)}):null!==e.onComplete&&e.onComplete()},o=function(t){for(var e=0;e<t.paths.length;e++){var n=t.paths[e],r=void 0;t.progress>n.startProgress&&t.progress<n.startProgress+n.durationProgress?r=(t.progress-n.startProgress)/n.durationProgress:t.progress>=n.startProgress+n.durationProgress?r=1:t.progress<=n.startProgress&&(r=0),n.progress=a(1,0,r,n.ease);var r=n,o=r.progress*r.length;r.el.style.strokeDashoffset=t.reverse||r.reverse?-r.length+o:r.length-o,s(t,n),r=t,1===n.progress?(r.onStrokeComplete&&!n.onStrokeCompleteDone&&(r.onStrokeComplete(n),n.onStrokeComplete||(n.onStrokeCompleteDone=!0)),n.onStrokeComplete&&!n.onStrokeCompleteDone&&(n.onStrokeComplete(n),n.onStrokeCompleteDone=!0)):1e-5<n.progress&&(r.onStrokeStart&&!n.onStrokeStartDone&&(r.onStrokeStart(n),n.onStrokeStart||(n.onStrokeStartDone=!0)),n.onStrokeStart&&!n.onStrokeStartDone&&(n.onStrokeStart(n),n.onStrokeStartDone=!0),n.onStrokeUpdate)&&n.onStrokeUpdate(n)}},a=function(t,e,n,r){var o;return n>0&&t>n?o=r?l[r](n,0,1,t):n/t:n>=t?o=1:e>=n&&(o=0),o},s=function(t,e){var n=Math.round(e.progress*(e.length-1)),n=e.positions[n];e.position={x:t.offset.left+n.x,y:t.offset.top+n.y}},i=function(t,e){return{d:e.path,stroke:e.strokeColor?e.strokeColor:t.strokeColor,"fill-opacity":0,"stroke-opacity":e.strokeOpacity?e.strokeOpacity:t.strokeOpacity,"stroke-width":e.strokeWidth?e.strokeWidth:t.strokeWidth,"stroke-linecap":e.strokeCap?e.strokeCap:t.strokeCap,"stroke-linejoin":e.strokeJoin?e.strokeJoin:t.strokeJoin}},u=function(t,e){for(var n="",r=t.split(","),o=0,a=r.length-1;a>=0;a--)o+=Number(r[a]);for(r=Math.floor(e/o),a=r-1;a>=0;a--)n+=t+", ";return(n+(e-r*o)+", "+e).split(",").join("px,")+"px"};t.fn.lazylinepainter=function(t){return e[t]?e[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void console.log("opps - issue finding method"):e.init.apply(this,arguments)};var l={easeLinear:function(t,e,n,r){return n*t/r+e},easeInQuad:function(t,e,n,r){return n*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-n*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){return 1>(t/=r/2)?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return n*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){return 1>(t/=r/2)?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return n*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-n*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){return 1>(t/=r/2)?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return n*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){return 1>(t/=r/2)?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+e},easeOutSine:function(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:n*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){return t==r?e+n:n*(-Math.pow(2,-10*t/r)+1)+e},easeInOutExpo:function(t,e,n,r){return 0==t?e:t==r?e+n:1>(t/=r/2)?n/2*Math.pow(2,10*(t-1))+e:n/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(t,e,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){return 1>(t/=r/2)?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var o=1.70158,a=0,s=n;return 0==t?e:1==(t/=r)?e+n:(a||(a=.3*r),s<Math.abs(n)?(s=n,o=a/4):o=a/(2*Math.PI)*Math.asin(n/s),-(s*Math.pow(2,10*--t)*Math.sin(2*(t*r-o)*Math.PI/a))+e)},easeOutElastic:function(t,e,n,r){var o=1.70158,a=0,s=n;return 0==t?e:1==(t/=r)?e+n:(a||(a=.3*r),s<Math.abs(n)?(s=n,o=a/4):o=a/(2*Math.PI)*Math.asin(n/s),s*Math.pow(2,-10*t)*Math.sin(2*(t*r-o)*Math.PI/a)+n+e)},easeInOutElastic:function(t,e,n,r){var o=1.70158,a=0,s=n;return 0==t?e:2==(t/=r/2)?e+n:(a||(a=.3*r*1.5),s<Math.abs(n)?(s=n,o=a/4):o=a/(2*Math.PI)*Math.asin(n/s),1>t?-.5*s*Math.pow(2,10*--t)*Math.sin(2*(t*r-o)*Math.PI/a)+e:s*Math.pow(2,-10*--t)*Math.sin(2*(t*r-o)*Math.PI/a)*.5+n+e)},easeInBack:function(t,e,n,r,o){return void 0==o&&(o=1.70158),n*(t/=r)*t*((o+1)*t-o)+e},easeOutBack:function(t,e,n,r,o){return void 0==o&&(o=1.70158),n*((t=t/r-1)*t*((o+1)*t+o)+1)+e},easeInOutBack:function(t,e,n,r,o){return void 0==o&&(o=1.70158),1>(t/=r/2)?n/2*t*t*(((o*=1.525)+1)*t-o)+e:n/2*((t-=2)*t*(((o*=1.525)+1)*t+o)+2)+e},easeInBounce:function(t,e,n,r){return n-l.easeOutBounce(r-t,0,n,r)+e},easeOutBounce:function(t,e,n,r){return(t/=r)<1/2.75?7.5625*n*t*t+e:2/2.75>t?n*(7.5625*(t-=1.5/2.75)*t+.75)+e:2.5/2.75>t?n*(7.5625*(t-=2.25/2.75)*t+.9375)+e:n*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,r){return r/2>t?.5*l.easeInBounce(2*t,0,n,r)+e:.5*l.easeOutBounce(2*t-r,0,n,r)+.5*n+e}}}(jQuery);