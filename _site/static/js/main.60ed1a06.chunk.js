(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,n,o){t.exports=o(2)},function(t,n,o){},function(t,n,o){"use strict";o.r(n);o(1);var e=["div","a","h1","h2","h3","b","i","p","br","span","hr","video","audio","img","canvas","li","ul","ol","quote","pre","code","textarea","input","label","button","form","select","option","svg","line","rect","circle","g","ellipse","path","polyline","polygon","text","a_svg"],i={};e.forEach(function(t,n){var o=n>=e.indexOf("svg"),a=t;t.indexOf("_svg")>0&&(t=t.slice(0,t.length-4)),i[a]=function(n,e,i){e=e||{};var a=document.createElementNS(o?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",t);for(var c in e)a.setAttribute(c,e[c]);return i&&(a.textContent=i),n&&n.appendChild(a),a}});var a=function t(n,o,e,a){var c=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=i.div(n,{class:"timed-text"}),this.$audio=i.audio(n,{controls:!0,src:"/data/wav/".concat(e,".wav")});for(var s=o[o.length-1].end,r=0;r<s;r+=1){var l=i.div(this.$el,{class:"tick"}),u=i.div(this.$el,{class:"number"},r+"s");l.style.left=200*r+"px",u.style.left=200*r+"px"}o.forEach(function(t){var n=t.text,o=t.start,e=t.end,s=i.div(c.$el,{class:a},n);s.style.left=200*o+"px",s.style.width=200*(e-o)+"px",s.onclick=function(){c.$audio.currentTime=o}})};window.onload=function(){i.h1(document.body,{},"Russian Timing Visualization"),fetch("/data/json/meta.json").then(function(t){return t.json()}).then(function(t){console.log("Got metadata",t),t.forEach(function(t){var n=t.ground_truth,o=t.sample,e=i.div(document.body);i.h2(e,{},o),i.div(e,{},n),fetch("/data/json/".concat(o,"_word.json")).then(function(t){return t.json()}).then(function(t){new a(e,t,o,"word")}),fetch("/data/json/".concat(o,"_phoneme.json")).then(function(t){return t.json()}).then(function(t){new a(e,t,o,"phoneme")})})})}}],[[0,1]]]);
//# sourceMappingURL=main.60ed1a06.chunk.js.map