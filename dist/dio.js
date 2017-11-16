(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.dioLibrary = factory());
}(this, (function () { 'use strict';

var version = "1.0.0";

var index = function() {
  console.log("version " + version);
};

return index;

})));
