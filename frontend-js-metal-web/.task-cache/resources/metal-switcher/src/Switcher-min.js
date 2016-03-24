define("frontend-js-metal-web@1.0.4/metal-switcher/src/Switcher-min", ["exports","metal/src/metal","metal-dom/src/all/dom","./Switcher.soy.js","metal-jquery-adapter/src/JQueryAdapter"], function(e,t,o,r,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var l=i(t),u=i(o),f=i(r),p=i(n),h=function(e){function t(){return (c(this,t), a(this,e.apply(this,arguments)))}return (s(t,e), t.prototype.attached=function(){this.on("click",this.handleClick)}, t.prototype.handleClick=function(){this.checked=!this.checked}, t.prototype.syncChecked=function(e){u["default"][e?"addClasses":"removeClasses"](this.element,"switcher-on")}, t)}(f["default"]);h.prototype.registerMetalComponent&&h.prototype.registerMetalComponent(h,"Switcher"),h.ELEMENT_CLASSES="switcher",h.ATTRS={checked:{validator:l["default"].isBoolean,value:!1}},e["default"]=h,p["default"].register("switcher",h)});