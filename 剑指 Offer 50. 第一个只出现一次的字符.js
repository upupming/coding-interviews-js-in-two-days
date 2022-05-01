/**
 * @param {string} s
 * @return {character}
 * Time O(n), 一次遍历
 * Space O(n)
 */
var firstUniqChar = function (s) {
  const idx = {}, q = []
  for (let i = 0; i < s.length; i++) {
    if (idx[s[i]] == null) {
      idx[s[i]] = i
      q.push(s[i])
    } else {
      idx[s[i]] = -1
      while (q.length && idx[q[0]] === -1) q.shift()
    }
  }
  return q[0] ?? ' '
};
