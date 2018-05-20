/**
 * 将字符串转换为大写
 * @param str 字符串
 * @param len 转换长度
 * @returns {string}
 */
export function toUpperCase(str = "", len) {
  if (isNaN(len)) {
    return str.toUpperCase();
  }
  len = parseInt(len);
  return `${str.substring(0, len).toUpperCase()}${str.substring(len)}`;
}

/**
 * 将字符串转驼峰
 * @param str
 */
export function toHumpFormat(str = "") {
  let re = /-(\w)/g;
  str = str.replace(re, function ($0, $1) {
    return $1.toUpperCase();
  });
  return str;
}

export function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
}

export function isNumber(obj) {
  return Object.prototype.toString.call(obj) === "[object Number]";
}

export function isBoolean(obj) {
  return Object.prototype.toString.call(obj) === "[object Boolean]";
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

export function isFunction(obj) {
  return Object.prototype.toString.call(obj) === "[object Function]";
}

export function isNull(obj) {
  return Object.prototype.toString.call(obj) === "[object Null]";
}

export function isUndefined(obj) {
  return Object.prototype.toString.call(obj) === "[object Undefined]";
}

export function isExist(obj) {
  return !(isNull(obj) || isUndefined(obj));
}
