/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time O(n)
 * Space O(1)
 */
var twoSum = function (nums, target) {
  const n = nums.length
  let i = 0, j = n - 1
  while (i < j) {
    // console.log(i, j, nums[i], nums[j])
    if (nums[i] + nums[j] > target) j--
    else if (nums[i] + nums[j] === target) return [nums[i], nums[j]]
    else i++
  }
};
