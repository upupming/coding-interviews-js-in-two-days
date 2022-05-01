/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * Time O(log n)
 * Space O(1)
 */
var add = function (a, b) {
  while (b) {
    let c = (a & b) << 1
    a = a ^ b
    b = c
  }
  return a
};
