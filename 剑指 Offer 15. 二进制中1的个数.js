/**
 * @param {number} n - a positive integer
 * @return {number}
 * Time O(log n)
 * Space O(1)
 */
var hammingWeight = function (n) {
  let ans = 0
  while (n) {
    // if (n & 1) ans++
    // n >>>= 1
    n &= n - 1
    ans++
  }
  return ans
};
