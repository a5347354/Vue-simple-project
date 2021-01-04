/**
 * Caculate how many bytes of the string
 * @param {string} s string
 */
export function stringBytes (s)  {
    const n = s.length; let c
    let len = 0
    for (let i = 0; i < n; i++) {
        c = s.charCodeAt(i)
        while (c > 0) {
            len++
            c = c >> 8
        }
    }
    return len
  }