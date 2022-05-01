/**
 * @param {number} n
 * @return {number}
 * Time O(log n)
 * Space O(1)
 */
var countDigitOne = function (n) {
  let mulk = 1
  let ans = 0
  for (let k = 0; n >= mulk; k++) {
    ans += Math.floor(n / (mulk * 10)) * mulk + Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0), mulk)
    mulk *= 10
  }
  return ans
};
