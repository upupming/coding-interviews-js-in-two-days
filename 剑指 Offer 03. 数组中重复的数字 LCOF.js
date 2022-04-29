/**
 * @param {number[]} nums
 * @return {number}
 * Time O(n)
 * Space O(n)
 */
var findRepeatNumber = function (nums) {
  let s = new Set()
  for (const a of nums) {
    if (s.has(a)) return a
    s.add(a)
  }
};
