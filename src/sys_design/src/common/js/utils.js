export * from './date.js' // 时间工具类函数
export * from './math.js' // 数字工具类函数
export * from './object.js' // 对象工具类函数
export * from './string.js' // 字符串工具类函数
export * from './typeof.js' // 类型检测工具类函数
export * from './validator.js' // 验证工具类函数

/**
 * 生成唯一标识ID
 * @param {Number} len 长度，默认12
 * @param {Number} radix 复杂度
 */
export function createUUID (len = 12, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  var uuid = []
  var i
  radix = radix || chars.length

  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    var r
    // uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    // uuid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

/**
 * 设置cookie
 * @param name cookie的名称
 * @param value cookie的值
 * @param day cookie的过期时间
 */
export function setCookie (name, value, day = 7) {
  if (day !== 0) { // 当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    var expires = day * 24 * 60 * 60 * 1000
    var date = new Date(+new Date() + expires)
    document.cookie = name + '=' + escape(value) + ';expires=' + date.toUTCString() + ';path=/;'
  } else {
    document.cookie = name + '=' + escape(value) + ';path=/;'
  }
}

/**
 * 删除cookie
 * @param name cookie的名称
 */
export function delCookie (name) {
  setCookie(name, ' ', -1)
}

/**
 * 获取对应名称的cookie
 * @param name cookie的名称
 * @returns {null} 不存在时，返回null
 */
export function getCookie (name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr && arr.length) {
    return unescape(arr[2])
  } else {
    return null
  }
}

/**
 * 获取或者设置sessionStorage
 * @param {String} k - 键
 * @param {*} v - 值，指定此参数则代表设置，否则获取
 * @return {String|Object|Array} 不指定v时，返回sessionStorage中k的值
 */
export function sessionStorage (k, v) {
  if (v) {
    return window.sessionStorage.setItem(k, v)
  } else {
    return window.sessionStorage.getItem(k)
  }
}

/**
 * 获取或者设置localStorage
 * @param {String} k - 键
 * @param {*} v - 值，指定此参数则代表设置，否则获取
 * @return {String|Object|Array} 不指定v时，返回localStorage中k的值
 */
export function localStorage (k, v) {
  if (v) {
    return window.localStorage.setItem(k, v)
  } else {
    return window.localStorage.getItem(k)
  }
}

/**
 * 获取url中的参数
 * @param {String} [url =location.href] - 需要解释的url
 * @return {Object} 参数的键值对
 */
export function getUrlParams (url = location.href) {
  let params = {}
  let index = url.indexOf('?')
  if (index > -1) {
    let search = url.substr(index + 1)
    search.split('&').forEach(item => {
      let arr = item.split('=')
      params[arr[0]] = decodeURIComponent(arr[1])
    })
  }
  return params
}

/**
 * 数组转二进制格式数据
 * @param { Array } arr 要转换的数组
 */
export function arrayToBinary (arr) {
  let num = 0
  arr.forEach(item => {
    num += item * 1
  })
  return (num + '').padStart(16, '0')
}

/**
 * 二进制格式数据转数组
 * @param { String } binary 二进制格式数据
 * @param { Number } totalNum 总数
 */
export function binaryToArray (binary, totalNum) {
  let arr = binary.slice(0, totalNum).split('')
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '1') {
      result.push((Math.pow(10, (15 - i)) + '').padStart(16, '0'))
    }
  }
  return result
}

/**
 * 保留一个对象的指定的键值对
 * @param { Object } object 要处理的对象
 * @param { Array } keys 要保留的key值
 * @return {Object} 处理之后的对象
 */
export function keepObjectKeys (object, keys) {
  let obj = {}
  keys.forEach(key => {
    obj[key] = object[key]
  })
  return Object.assign({}, obj)
}
