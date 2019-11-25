/**
 * 功能函数-数值
 *
 * formatNum            - 格式化数字
 * randomNumber      - 生成某个范围内的随机数
 */

/**
 * 格式化数字
 * @param {Number|String} num - 数字或数字字符串
 * @param {Boolean} [round] - 是否清除后导0
 * @param {Number} [precision=2] - 保留小数位
 * @return {String} 格式化后的字符串
 * @example formatNum('123456.555'); //"123,456.56"
 *          formatNum(1.8999, true); //1.9
 *          formatNum(1.8999, true, 2); //1.9
 *          formatNum(1.8999, false, 3); //1.900
 */
export function formatNum (num, round, precision = 2) {
  num = Number.parseFloat(num)
  const minus = num < 0
  let s = Math.abs(num).toFixed(precision) // 保留指定小数位
  let arr = s.split('.') // 分割整数和小数部分
  let trunc = arr[0] // 整数部分
  let decimal = arr[1] // 小数部分
  let len = trunc.length
  let left = len % 3 // 首个逗号前的位数
  let ret = '' // 返回的结果
  for (let i = len - 1; i >= left; i -= 3) { // 每3位增加,
    ret = (i > 2 ? ',' : '') + trunc.substr(i - 2, 3) + ret
  }
  ret = (minus ? '-' : '') + trunc.substr(0, left) + ret // 整数部分
  if (precision !== 0) {
    if (round === true) { // 清除后导0
      for (let i = decimal.length - 1; i >= 0; i--) { // 遍历小数部分
        if (decimal[i] !== 0) {
          ret += '.' + decimal.substr(0, i + 1) // 拼接整数部分和小数部分
          break
        }
      }
    } else {
      ret += '.' + decimal
    }
  }
  return ret
}

/**
 * 生成某个范围内的随机数
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [返回值]
 * #example  randomNumber(10,20);得到一定范围内的随机整数
 */
export function randomNumber (min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min
}
