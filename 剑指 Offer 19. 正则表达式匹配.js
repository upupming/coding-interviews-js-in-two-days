/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * Time O(mn)
 * Space O(mn)
 */
var isMatch = function (s, p) {
  const m = s.length, n = p.length
  s = '#' + s, p = '#' + p
  function match(ch, pattern) {
    if (ch === '#') return false
    if (pattern === '.') return true
    else return ch === pattern
  }
  const f = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0))
  f[0][0] = 1
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j] === '*') {
        if (match(s[i], p[j - 1])) {
          f[i][j] = f[i - 1][j] || f[i][j - 2]
        } else {
          f[i][j] = f[i][j - 2]
        }
      } else {
        f[i][j] = match(s[i], p[j]) ? f[i - 1][j - 1] : false
      }
    }
  }
  return f[m][n]
};
