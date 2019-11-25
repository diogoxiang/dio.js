/**
 * 校验库函数
 *
 * length           - 字符串长度
 * money            - 金额
 * phone            - 手机号
 */

/**
 * 校验字符串长度
 * @param {String} v - 要校验的值
 * @param {Number} min - 最小长度，-1代表不限制
 * @param {Number} max - 最大长度，-1代表不限制
 * @param {string} [title='{0}'] - 错误提示语的主语
 * @return {Boolean|String} true或错误提示语
 */
export function length (v, min, max, title = '{0}') {
  const len = v.length
  if (min === -1) {
    if (len > max) return `${title}长度必须小于${max}个字符`
  } else if (max === -1) {
    if (len > min) return `${title}长度必须大于${min}个字符`
  } else {
    if (len > max || len < min) return `${title}长度必须在${min}~${max}个字符`
  }
  return true
}

/**
 * 校验金额（>0且小数位最大2）
 * @param {String} v - 要校验的值
 * @param {string} [title='{0}'] - 错误提示语的主语
 * @return {Boolean|String} true或错误提示语
 */
export function money (v, title = '{0}') {
  if (isNaN(v, title = '{0}')) return title + '格式有误' // 是否数字
  if (v <= 0) return title + '必须＞0' // 必须大于0
  var str = v.toString()
  var index = str.indexOf('.')
  if (index !== -1 && index < str.length - 3) return title + '只能保留2位小数' // 存在小数点 && 小数位多于2位
  return true
}

/**
 * 校验手机号
 * @param {String} v - 要校验的值
 * @param {string} [title='{0}'] - 错误提示语的主语
 * @return {Boolean|String} true或错误提示语
 */
export function phone (v, title = '{0}') {
  if (/^1(3|5|6|7|8|9)\d{9}$/.test(v)) return true
  return title + '格式有误'
}
