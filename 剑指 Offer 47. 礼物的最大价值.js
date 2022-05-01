/**
 * @param {number[][]} grid
 * @return {number}
 * Time O(mn)
 * Space O(mn)
 */
var maxValue = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const f = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      f[i][j] = Math.max(f[i - 1][j], f[i][j - 1]) + grid[i - 1][j - 1]
    }
  }
  return f[m][n]
};
