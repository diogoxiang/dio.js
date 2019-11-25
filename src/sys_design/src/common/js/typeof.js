/**
 * 数据类型判断
 * @param {*} obj 要判断的数据
 */
export function _typeof (obj) {
  var s = Object.prototype.toString.call(obj)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}

export function __isUndefined (obj) {
  return _typeof(obj) === 'undefined'
}
export function __isArray (arr) {
  return _typeof(arr) === 'array'
}
export function __isNumber (num) {
  return _typeof(num) === 'number'
}
export function __isFunction (fn) {
  return _typeof(fn) === 'function'
}
export function __isObject (obj) {
  return _typeof(obj) === 'object'
}
export function __isBoolean (obj) {
  return _typeof(obj) === 'boolean'
}
export function __isDate (obj) {
  return _typeof(obj) === 'date'
}
export function __isRegexp (obj) {
  return _typeof(obj) === 'regexp'
}
export function __isNull (obj) {
  return _typeof(obj) === 'null'
}

/**
_typeof([12,3,343]); "array"
_typeof({name: 'zxc', age: 18}); "object"
_typeof(1); "number"
_typeof("1"); "string"
 _typeof(null); "null"
_typeof(undefined); "undefined"
_typeof(NaN); "number"
_typeof(Date); "function"
_typeof(new Date()); "date"
_typeof(new RegExp()); "regexp"
 */
