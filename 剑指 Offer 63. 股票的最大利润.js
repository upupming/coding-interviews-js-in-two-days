/**
 * @param {number[]} prices
 * @return {number}
 * Time O(n)
 * Space O(1)
 */
var maxProfit = function (prices) {
  let ans = 0, min = 1e10
  for (const a of prices) {
    ans = Math.max(a - min, ans)
    min = Math.min(min, a)
  }
  return ans
};
