/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * Time O(n)
 * Space O(1)
 */
var findNumberIn2DArray = function (matrix, target) {
  const m = matrix.length
  if (!m) return false
  const n = matrix[0].length
  let i = 0, j = n - 1
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) return true
    if (matrix[i][j] < target) i++
    else j--
  }
  return false
};
