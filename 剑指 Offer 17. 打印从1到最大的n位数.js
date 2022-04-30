/**
 * @param {number} n
 * @return {number[]}
 * Time O(10^n)
 * Space O(10^n)
 */
var printNumbers = function (n) {
  return Array(Math.pow(10, n) - 1).fill(0).map((_, i) => i + 1)
};
