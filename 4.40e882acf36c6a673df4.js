(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ZEGf:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",function(){return o});var i=n("Cxy7");function o(t,e){var n,o,u,f,v=10*-d,l=0,p=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap;function b(t){v=Object(i.b)(t),E(t)}function m(){clearTimeout(f),f=void 0,o&&(j(!1),o=void 0)}function w(t){o||void 0!==n&&null!==n.parentElement||(n=void 0,h(function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}}(t),t))}function E(t){h(void 0,t)}function h(t,e){if(!t||t!==o){clearTimeout(f),f=void 0;var n=Object(i.j)(e),s=n.x,d=n.y;if(o){if(L.has(o))throw new Error("internal error");o.classList.contains(r)||g(o,s,d),j(!0)}if(t){var u=L.get(t);u&&(clearTimeout(u),L.delete(t));var v=a(t)?0:c;t.classList.remove(r),f=setTimeout(function(){g(t,s,d),f=void 0},v)}o=t}}function g(t,e,n){l=Date.now(),t.classList.add(r);var i=p&&function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}(t);i&&i.addRipple&&(u=i.addRipple(e,n))}function j(t){void 0!==u&&u.then(function(t){return t()});var e=o;if(e){var n=s-Date.now()+l;if(t&&n>0&&!a(e)){var i=setTimeout(function(){e.classList.remove(r),L.delete(e)},s);L.set(e,i)}else e.classList.remove(r)}}t.addEventListener("ionScrollStart",function(t){n=t.target,m()}),t.addEventListener("ionScrollEnd",function(){n=void 0}),t.addEventListener("ionGestureCaptured",m),t.addEventListener("touchstart",function(t){v=Object(i.b)(t),w(t)},!0),t.addEventListener("touchcancel",b,!0),t.addEventListener("touchend",b,!0),t.addEventListener("mousedown",function(t){var e=Object(i.b)(t)-d;v<e&&w(t)},!0),t.addEventListener("mouseup",function(t){var e=Object(i.b)(t)-d;v<e&&E(t)},!0)}function a(t){return t.classList.contains("ion-activatable-instant")}var r="activated",c=200,s=200,d=2500}}]);