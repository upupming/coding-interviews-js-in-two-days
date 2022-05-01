/**
 * @param {string} s
 * @return {string}
 * Time O(n)
 * Space O(n)
 */
var reverseWords = function (s) {
  let a = [], cur = ''
  for (const ch of s) {
    if (ch === ' ') {
      if (cur !== '') a.push(cur), cur = ''
    } else {
      cur += ch
    }
  }
  if (cur !== '') a.push(cur)
  let ans = ''
  for (let i = a.length - 1; i >= 0; i--) {
    if (i !== a.length - 1) ans += ' '
    ans += a[i]
  }
  return ans
};
