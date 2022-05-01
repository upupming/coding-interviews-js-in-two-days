/**
 * @param {number} n
 * @return {number}
 2
 2,3
 2,5
 3,5
 2,3,5

三指针
Time O(n)
Space O(n)
 */
var nthUglyNumber = function (n) {
  let p2 = 1, p3 = 1, p5 = 1
  const dp = []
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5)
    if (dp[i] === dp[p2] * 2) p2++
    if (dp[i] === dp[p3] * 3) p3++
    if (dp[i] === dp[p5] * 5) p5++
  }
  return dp[n]
};
