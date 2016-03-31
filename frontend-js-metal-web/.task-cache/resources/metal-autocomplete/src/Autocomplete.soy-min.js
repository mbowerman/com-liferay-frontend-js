define("frontend-js-metal-web@1.0.6/metal-autocomplete/src/Autocomplete.soy-min", ["exports","metal-component/src/all/component","metal-soy/src/soy"], function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(t),p=o.SoyTemplates.get();"undefined"==typeof p.Autocomplete&&(p.Autocomplete={}),p.Autocomplete.render=function(e,t,o){return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="'+soy.$$escapeHtmlAttribute(e.id)+'" class="autocomplete autocomplete-list component '+soy.$$escapeHtmlAttribute(e.elementClasses?" "+e.elementClasses:"")+'">'+soy.$$escapeHtml(p.List.render({events:{itemSelected:e.id+":onListItemSelected_"},id:e.id+"-list"},null,o))+"</div>")},goog.DEBUG&&(p.Autocomplete.render.soyTemplateName="Templates.Autocomplete.render"),p.Autocomplete.render.params=["id"];var a=function(e){function t(){return (r(this,t), l(this,e.apply(this,arguments)))}return (s(t,e), t)}(i["default"]);a.prototype.registerMetalComponent&&a.prototype.registerMetalComponent(a,"Autocomplete"),a.RENDERER=o.SoyRenderer,o.SoyAop.registerTemplates("Autocomplete"),e["default"]=a});