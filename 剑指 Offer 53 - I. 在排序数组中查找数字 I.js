/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分
 * Time O(log n)
 * Space O(1)
 */
var search = function (nums, target) {
  let l, r, n = nums.length, x, y
  // >= target 的最左边 x, n 表示所有数都 < target
  l = 0, r = n
  while (l < r) {
    const mid = l + r >> 1
    if (mid === n || nums[mid] >= target) r = mid
    else l = mid + 1
  }
  x = l
  // > target 的最左边 y
  l = 0, r = n
  while (l < r) {
    const mid = l + r >> 1
    if (mid === n || nums[mid] > target) r = mid
    else l = mid + 1
  }
  y = l
  return y - x
};
