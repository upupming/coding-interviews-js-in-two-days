/**
 * @param {number} n
 * @return {number}
 * Time O(n)
 * Space O(1)
 * @todo 矩阵快速幂
 */
var fib = function (n) {
  let last = 0, cur = 1
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
