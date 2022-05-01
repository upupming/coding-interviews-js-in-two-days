/**
 * @param {number[]} nums
 * @return {string}
 * Time O(n log n)
 * Space O(n)
 */
var minNumber = function (nums) {
  return nums.sort((a, b) => {
    a = String(a), b = String(b)
    let ab = a + b, ba = b + a
    return ab < ba ? -1 : 1
  }).join('')
};
