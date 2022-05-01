/**
 * @param {number[]} nums
 * @return {number}
 * Time O(n)
 * Space O(1)
 */
var maxSubArray = function (nums) {
  let sum = 0, ans = -200
  for (const a of nums) {
    sum += a
    ans = Math.max(ans, sum)
    if (sum < 0) sum = 0
  }
  return ans
};
