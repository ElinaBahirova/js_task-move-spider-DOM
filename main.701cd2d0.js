parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("click",function(e){var t=document.querySelector(".spider"),l=parseFloat(getComputedStyle(t).width),n=parseFloat(getComputedStyle(t).height),p={top:e.clientY-t.parentElement.offsetTop-t.parentElement.clientTop-n/2,left:e.clientX-t.parentElement.offsetLeft-t.parentElement.clientLeft-l/2};p.top<0&&(p.top=0),p.left<0&&(p.left=0),e.target===document.querySelector(".wall")&&(p.top+n>t.parentElement.clientHeight&&(p.top=t.parentElement.clientHeight-n),p.left+l>t.parentElement.clientWidth&&(p.left=t.parentElement.clientWidth-l),t.style.top=p.top+"px",t.style.left=p.left+"px")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.701cd2d0.js.map