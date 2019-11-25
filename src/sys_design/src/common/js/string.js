/**
 * 功能函数-字符串
 *
 * trim             - 裁掉两边的空格或指定字符串
 */

/**
 * 裁掉两边的空格或指定字符串
 * @param {String} str - 需要操作的字符串
 * @param {String} [char] - 指定去掉的字符，默认空格
 * @param {String} [direction] - 裁切的方向，“l”-左、“r”-右，默认两端
 */
export function trim (str, char, direction) {
  char = char || '\\s'
  const regStr = direction === 'l' ? `^${char}+` : (direction === 'r' ? `${char}+$` : (`^${char}+|${char}+$`))
  const reg = new RegExp(regStr, 'g')
  return str.replace(reg, '')
}
