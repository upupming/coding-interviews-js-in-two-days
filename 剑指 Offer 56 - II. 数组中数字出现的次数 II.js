/**
 * @param {number[]} nums
 * @return {number}
 * Time O(n)
 * Space O(1)
 */
var singleNumber = function (nums) {
  let c = Array(32).fill(0)
  for (const a of nums) {
    for (let i = 0; i < 31; i++) {
      if (a >> i & 1) c[i]++
    }
  }
  let ans = 0
  for (let i = 0; i < 31; i++) {
    ans += (c[i] % 3) ? (1 << i) : 0
  }
  return ans
};
