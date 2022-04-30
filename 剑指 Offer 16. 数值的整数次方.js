/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * Time O(log n)
 * Space O(1)
 */
function qpow(a, b) {
  let ans = 1
  while (b) {
    if (b & 1) ans = ans * a
    a = a * a
    // 2^31 会溢出，因此不要使用移位
    // 2^53-1 -> 32 有符号整数
    b = Math.floor(b / 2)
  }
  return ans
}
var myPow = function (x, n) {
  if (n < 0) return 1 / myPow(x, -n)
  return qpow(x, n)
};
