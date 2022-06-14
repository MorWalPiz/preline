/*! For license information please see hs-collapse.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(function(){return(()=>{"use strict";var e={765:(e,t,n)=>{function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,{Z:()=>r});var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$collection=[],this.selector=t,this.config=n,this.events={}}var t,n;return t=e,n=[{key:"_fireEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.events.hasOwnProperty(e)&&this.events[e](t)}},{key:"_dispatch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=new CustomEvent(e,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});t.dispatchEvent(o)}},{key:"on",value:function(e,t){this.events[e]=t}},{key:"afterTransition",value:function(e,t){"all 0s ease 0s"!==window.getComputedStyle(e,null).getPropertyValue("transition")?e.addEventListener("transitionend",(function n(){t(),e.removeEventListener("transitionend",n,!0)}),!0):t()}}],n&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(e,t)}function c(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}n.r(o);var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(f,e);var n,o,l,s,u=(l=f,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=a(l);if(s){var n=a(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),u.call(this,"[data-hs-collapse]")}return n=f,(o=[{key:"init",value:function(){var e=this;document.addEventListener("click",(function(t){var n=t.target.closest(e.selector);if(n){var o=document.querySelectorAll(n.getAttribute("data-hs-collapse"));e.toggle(o)}}))}},{key:"toggle",value:function(e){var n,o=this;e.length&&(n=e,function(e){if(Array.isArray(e))return t(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){e.classList.contains("hidden")?o.show(e):o.hide(e)}))}},{key:"show",value:function(e){var t=this;e.classList.add("open"),e.classList.remove("hidden"),e.style.height=0,document.querySelectorAll(this.selector).forEach((function(t){e.closest(t.getAttribute("data-hs-collapse"))&&t.classList.add("open")})),e.style.height="".concat(e.scrollHeight,"px"),this.afterTransition(e,(function(){e.classList.contains("open")&&(e.style.height="",t._fireEvent("open",e),t._dispatch("open.hs.collapse",e,e))}))}},{key:"hide",value:function(e){var t=this;e.style.height="".concat(e.scrollHeight,"px"),setTimeout((function(){e.style.height=0})),e.classList.remove("open"),this.afterTransition(e,(function(){e.classList.contains("open")||(e.classList.add("hidden"),e.style.height=null,t._fireEvent("hide",e),t._dispatch("hide.hs.collapse",e,e),e.querySelectorAll(".hs-mega-menu-content.block").forEach((function(e){e.classList.remove("block"),e.classList.add("hidden")})))})),document.querySelectorAll(this.selector).forEach((function(t){e.closest(t.getAttribute("data-hs-collapse"))&&t.classList.remove("open")}))}}])&&r(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),f}(n(765).Z);window.HSCollapse=new l,document.addEventListener("load",window.HSCollapse.init())})(),o})()}));