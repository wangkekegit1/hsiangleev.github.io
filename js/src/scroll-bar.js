// build time:Mon Jun 17 2019 10:51:17 GMT+0800 (GMT+08:00)
layui.define(["jquery"],function(t){var o=layui.jquery;function r(t){this.options=t;this.contentEL=o(t.el);this.wrapEl="";this.rate=0;this.scrollBarBodyHeight=0;this.maxCurrent=0;this.y=0;this.pageY=0;this.current=0;this.scrollBarEL="";this.scrollBarBodyEL="";this.color=this.options.color||"#aaa";this.width=this.options.width||"6px";this.init()}r.prototype={constructor:r,init:function(){this.wrapEl=this.contentEL.parent().addClass("urp-scroll").append('<div class="urp-scrollBar" style="width: '+this.width+'">'+'<div class="urp-scrollBar-body" style="background-color: '+this.color+';"></div>'+"</div>");this.contentEL.css("padding-right",this.width);this.scrollBarEL=this.wrapEl.children(".urp-scrollBar");this.scrollBarBodyEL=this.scrollBarEL.children(".urp-scrollBar-body");this.countHeight();this.event()},countHeight:function(){this.rate=this.wrapEl.height()/this.contentEL.height();if(this.rate>1){this.rate=1;this.scrollBarEL.css("opacity",0)}else{this.scrollBarEL.css("opacity",1)}this.scrollBarBodyHeight=this.scrollBarEL.height()*this.rate;this.scrollBarBodyEL.css("height",this.scrollBarBodyHeight);this.maxCurrent=this.scrollBarEL.height()-this.scrollBarBodyHeight;this.current=this.current>this.maxCurrent?this.maxCurrent:this.current;this.scrollFn()},scrollFn:function(){if(this.current<0){this.current=0}if(this.current>this.maxCurrent){this.current=this.maxCurrent}this.scrollBarBodyEL.css("top",this.current+"px");this.wrapEl.scrollTop(this.current/this.rate);this.scrollBarEL.css("top",this.current/this.rate+"px")},down:function(t,r){var i=0,s,e;if(t==="mouse"){this.y=r.clientY-this.wrapEl.offset().top-this.scrollBarBodyEL.position().top+o(document).scrollTop();s="mousemove";e="mouseup"}else if(t==="touch"){this.y=r.originalEvent.touches[0].clientY-this.wrapEl.offset().top-this.scrollBarBodyEL.position().top+o(document).scrollTop();s="touchmove";e="touchend"}else{this.pageY=r.originalEvent.touches[0].pageY;s="touchmove";e="touchend"}var n=this.throttle(this.move.bind(this,t));o(document).on(s+".move",n);o(document).on(e+".up",function(){o(document).off(".move").off(".up")})},move:function(t,r){var i=0;r.preventDefault();if(t==="mouse"){this.current=r.clientY-this.y-this.wrapEl.offset().top+o(document).scrollTop()}else if(t==="touch"){this.current=r.originalEvent.touches[0].clientY-this.y-this.wrapEl.offset().top+o(document).scrollTop()}else{this.current=this.current-(r.originalEvent.touches[0].pageY-this.pageY)/10}this.scrollFn();window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()},event:function(){var t=this;this.scrollBarBodyEL.on("mousedown",this.down.bind(this,"mouse"));this.scrollBarBodyEL.on("touchstart",this.down.bind(this,"touch"));this.contentEL.on("touchstart",this.down.bind(this,"contentTouch"));this.scrollBarBodyEL.on("click",function(t){t.stopPropagation()});this.scrollBarEL.on("click",function(r){var i=r.clientY-t.wrapEl.offset().top+o(document).scrollTop();if(i>t.current){t.current+=t.scrollBarBodyHeight}else{t.current-=t.scrollBarBodyHeight}t.scrollFn()});var r=function(o){var i=o.originalEvent.wheelDelta||-o.originalEvent.detail;t.current=i>0?t.current-15:t.current+15;t.scrollFn();if(t.current>=t.maxCurrent||t.current<=0){t.wrapEl.off("mousewheel DOMMouseScroll",r).on("mousewheel DOMMouseScroll",r)}else{o.preventDefault()}};this.wrapEl.on("mousewheel DOMMouseScroll",r);var i=this.throttle(function(){t.countHeight()});o(window).on("resize",i)},throttle:function(t,o){var r=null;var i=true;return function(){var s=arguments;var e=this;if(i){t.apply(e,s);return i=false}if(r){return false}r=setTimeout(function(){clearTimeout(r);r=null;t.apply(e,s)},o||50)}}};t("scrollBar",function(t){var o=new r(t);var i={resetHeight:o.countHeight.bind(o)};return i})});
//rebuild by neat 