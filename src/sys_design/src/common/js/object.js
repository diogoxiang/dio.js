/**
 * 功能函数-对象
 *
 * isEmpty          - 对象是否为null或没有属性
 * isPlainObject    - 检测一个变量是否纯粹的对象
 * getDeep          - 获取对象的若干个键后的值
 */

/**
 * 对象是否为null或没有属性
 * @param {Object} v - 需要检测的对象
 * @return {Boolean} null或没有属性则true，有属性或不为对象则false
 */
export function isEmpty (v) {
  if (typeof v === 'object') {
    for (let k in v) return false
    return true
  }
  return false
}
/**
 * 检测一个变量是否纯粹的对象
 * @param {*} v - 需要检测的变量
 * @return {Boolean} 是否纯粹对象
 * @example isPlainObject({k: 1}); //true
 *          isPlainObject({k: {k2: 1}}); //true
 *          isPlainObject([]); //false
 *          isPlainObject(document); //false
 */
export function isPlainObject (v) {
  if (v && v.toString() === '[object Object]') {
    return true
  }
  return false
}
/**
 * 获取对象的若干个键后的值
 * @param {Object} obj - 对象
 * @param {...String} keys - 键名，若干
 * @return {*} 值 或 undefined
 * @example
 * if(getDeep(o, 'k1', 'k2')){ ... } 等同于 if(o && o.k1 && o.k1.k2){...}
 */
export function getDeep (obj, ...keys) {
  let v = obj
  if (!v) return v
  for (let i = 0; i < keys.length; i++) {
    v = v[keys[i]]
    if (!v) return v
  }
  return v
}
