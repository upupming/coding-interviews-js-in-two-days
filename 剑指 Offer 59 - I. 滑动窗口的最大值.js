/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Time O(nk)
 * Space O(k)
 */
var maxSlidingWindow = function (nums, k) {
  const q = []
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    while (q.length && (i - q[0] + 1 > k)) q.shift()
    while (q.length && nums[q[q.length - 1]] <= nums[i]) q.pop()
    q.push(i)
    // console.log(i, q)
    if (i >= k - 1) ans.push(nums[q[0]])
  }
  return ans
};
