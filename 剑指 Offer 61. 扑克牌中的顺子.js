/**
 * @param {number[]} nums
 * @return {boolean}
 * Time O(n log n)
 * Space O(1)
 */
var isStraight = function (nums) {
  nums.sort((a, b) => a - b)
  let c0 = 0, prev = -1
  for (const a of nums) {
    if (a === 0) c0++
    else {
      if (prev === -1) prev = a
      else {
        if (a === prev) return false
        else if (a === prev + 1) prev = a
        else {
          let needed = a - prev - 1
          if (c0 < needed) return false
          c0 -= needed
          prev = a
        }
      }
    }
  }
  return true
};
