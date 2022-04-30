/**
 * @param {number[][]} matrix
 * @return {number[]}
 * Time O(mn)
 * Space O(1)
 */
var spiralOrder = function (matrix) {
  let m = matrix.length
  if (m === 0) return []
  let n = matrix[0].length
  if (n === 0) return []
  let top = 0, bottom = m - 1, left = 0, right = n - 1
  let ans = []
  while (left <= right && top <= bottom) {
    for (let j = left; j <= right; j++) {
      ans.push(matrix[top][j])
    }
    for (let i = top + 1; i <= bottom; i++) {
      ans.push(matrix[i][right])
    }
    if (bottom !== top)
      for (let j = right - 1; j >= left; j--) {
        ans.push(matrix[bottom][j])
      }
    if (left !== right)
      for (let i = bottom - 1; i >= top + 1; i--) {
        ans.push(matrix[i][left])
      }
    // console.log(left, right, top, bottom, ans)
    left++, right--
    top++, bottom--
  }
  return ans
};
