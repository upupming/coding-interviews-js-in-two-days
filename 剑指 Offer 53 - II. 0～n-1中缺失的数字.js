/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const m = nums.length
  if (nums[0] !== 0) return 0
  for (let i = 0; i < m - 1; i++) {
    if (nums[i] + 1 !== nums[i + 1]) return nums[i] + 1
  }
  return m
};
