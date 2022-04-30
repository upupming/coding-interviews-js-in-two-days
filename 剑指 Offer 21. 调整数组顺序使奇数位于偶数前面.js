/**
 * @param {number[]} nums
 * @return {number[]}
 * Time O(n)
 * Space O(1)
 */
var exchange = function (nums) {
  const n = nums.length
  let i = -1, j = n
  while (i < j) {
    do i++; while (nums[i] % 2 === 1)
    do j--; while (nums[j] % 2 === 0)
    if (i < j) [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  return nums
};
