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

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    console.log(key)
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs: any): any {
  const result = Object.create(null)

  objs.forEach((obj: any) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          }
          result[key] = deepMerge(val)
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}
