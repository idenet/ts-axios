const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is object {
  return val !== null && typeof val === 'object'
}

/**
 * 普通对象
 * @param val
 * @returns
 */
export function isPlainObject(val: any): val is object {
  return toString.call(val) === '[object Object]'
}
