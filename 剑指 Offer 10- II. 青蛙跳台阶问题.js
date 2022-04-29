/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let last = 1, cur = 1
  if (n === 0) return last
  if (n === 1) return cur
  let i = 1
  while (i < n) {
    let tmp = cur
    cur = (cur + last) % (1e9 + 7)
    last = tmp
    i++
  }
  return cur
};
