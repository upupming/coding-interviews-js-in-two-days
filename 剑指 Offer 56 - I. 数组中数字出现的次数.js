/**
 * @param {number[]} nums
 * @return {number[]}
 * Time O(n)
 * Space O(1)
 */
var singleNumbers = function (nums) {
  let x = 0
  for (const a of nums) x ^= a
  let i = 0
  while ((x >> i & 1) === 0) i++
  let s = 0, t = 0
  for (const a of nums) {
    if (a >> i & 1) s ^= a
    else t ^= a
  }
  return [s, t]
};
