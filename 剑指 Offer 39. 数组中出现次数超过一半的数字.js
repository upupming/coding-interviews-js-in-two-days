/**
 * @param {number[]} nums
 * @return {number}
 * Time O(n)
 * Space O(n)
 * @todo Boyer-Moore 投票算法
 */
var majorityElement = function (nums) {
  let cnt = {}
  for (const a of nums) {
    cnt[a] ||= 0
    cnt[a]++
  }
  for (const [key, val] of Object.entries(cnt)) {
    if (val > nums.length / 2) return key
  }
};
