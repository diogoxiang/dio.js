/**
 * @author Diogo
 * @description 基本工具类
 *
 */

/**
 * extendHex 获取
 */
const extendHex = shortHex =>
  "#" +
  shortHex
    .slice(shortHex.startsWith("#") ? 1 : 0)
    .split("")
    .map(x => x + x)
    .join("");
// extendHex('#03f') -> '#0033ff'
// extendHex('05a') -> '#0055aa'

/**
 * 获取类型
 * @param {*} v
 * @description 
 * Returns the native type of a value.
   Returns lower-cased constructor name of value, "undefined" or "null" if value is undefined or null
 */
const getType = v =>
  v === undefined ? "undefined" : v === null ? "null" : v.constructor.name.toLowerCase();
// getType(new Set([1,2,3])) -> "set"

/*
    ### hexToRGB  转换类型
    Converts a colorcode to a `rgb()` string.

    Use bitwise right-shift operator and mask bits with `&` (and) operator 
    to convert a hexadecimal color code (prefixed with `#`) to a string with 
    the RGB values. In case it's a 3-digit-colorcode, 
    do the same with the 6-digit-colorcode extended by the 
    extendHex() function (ref. `extendHex` snippet)

*/
const hexToRgb = hex => {
  const extendHex = shortHex =>
    "#" +
    shortHex
      .slice(shortHex.startsWith("#") ? 1 : 0)
      .split("")
      .map(x => x + x)
      .join("");
  return hex.slice(1).length == 3
    ? `rgb(${parseInt(extendHex(hex).slice(1), 16) >> 16}, ${(parseInt(
        extendHex(hex).slice(1),
        16
      ) &
        0x00ff00) >>
        8}, ${parseInt(extendHex(hex).slice(1), 16) & 0x0000ff})`
    : `rgb(${parseInt(hex.slice(1), 16) >> 16}, ${(parseInt(hex.slice(1), 16) & 0x00ff00) >>
        8}, ${parseInt(hex.slice(1), 16) & 0x0000ff})`;
};
// Demo example
// hexToRgb('#27ae60') -> 'rgb(39, 174, 96)'
// hexToRgb('#acd') -> 'rgb(170, 204, 221)'

/**
 *  isArray  
    Checks if the given argument is an array.
    Use Array.isArray() to check if a value is classified as an array.
 * @param {*} val 
 */
const isArray = val => !!val && Array.isArray(val);
// isArray(null) -> false
// isArray([1]) -> true

/*

isBoolean

Checks if the given argument is a native boolean element.

Use typeof to check if a value is classified as a boolean primitive.
*/
const isBoolean = val => typeof val === "boolean";
// isBoolean(null) -> false
// isBoolean(false) -> true

/*
isFunction

Checks if the given argument is a function.

Use typeof to check if a value is classified as a function primitive.
*/
const isFunction = val => val && typeof val === "function";
// isFunction('x') -> false
// isFunction(x => x) -> true

/*
isNumber

Checks if the given argument is a number.

Use typeof to check if a value is classified as a number primitive.
*/
const isNumber = val => typeof val === "number";
// isNumber('1') -> false
// isNumber(1) -> true

/*
isString

Checks if the given argument is a string.

Use typeof to check if a value is classified as a string primitive.
*/
const isString = val => typeof val === "string";
// isString(10) -> false
// isString('10') -> true

/*
isSymbol

Checks if the given argument is a symbol.

Use typeof to check if a value is classified as a symbol primitive.
*/
const isSymbol = val => typeof val === "symbol";
// isSymbol('x') -> false
// isSymbol(Symbol('x')) -> true

/*
RGBToHex

Converts the values of RGB components to a colorcode.

Convert given RGB parameters to hexadecimal string using bitwise left-shift operator (<<) and toString(16), then padStart(6,'0') to get a 6-digit hexadecimal value.
*/
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
// RGBToHex(255, 165, 1) -> 'ffa501'

/*
timeTaken

Measures the time taken by a function to execute.

Use console.time() and console.timeEnd() to measure the difference between the start and end times to determine how long the callback took to execute.
*/
const timeTaken = callback => {
  console.time("timeTaken");
  const r = callback();
  console.timeEnd("timeTaken");
  return r;
};
// timeTaken(() => Math.pow(2, 10)) -> 1024
// (logged): timeTaken: 0.02099609375ms

/*
toOrdinalSuffix

Adds an ordinal suffix to a number.

Use the modulo operator (%) to find values of single and tens digits. Find which ordinal pattern digits match. If digit is found in teens pattern, use teens ordinal.
*/
const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ["st", "nd", "rd", "th"],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};
// toOrdinalSuffix("123") -> "123rd"

/*
    UUIDGenerator 生成获取UUID

    Generates a UUID.
    Use crypto API to generate a UUID, compliant with RFC4122 version 4.
    
*/
const UUIDGenerator = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );

// UUIDGenerator() -> '7982fcfe-5721-4632-bede-6000885be57d'

/*
validateEmail

Returns true if the given string is a valid email, false otherwise.
Use a regular expression to check if the email is valid. 
Returns true if email is valid, false if not.

*/
const validateEmail = str =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  );
// validateEmail(mymail@gmail.com) -> true

/*
validateNumber

Returns true if the given value is a number, false otherwise.

Use !isNaN in combination with parseFloat() to check if the argument is a number. 
Use isFinite() to check if the number is finite. Use Number() to check if the coercion holds.
*/
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
// validateNumber('10') -> true
