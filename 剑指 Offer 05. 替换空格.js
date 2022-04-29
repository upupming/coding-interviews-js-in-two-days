/**
 * @param {string} s
 * @return {string}
 * Time O(n)
 * Space O(n)
 */
var replaceSpace = function (s) {
  let t = ''
  for (const ch of s) t += ch === ' ' ? '%20' : ch
  return t
};
