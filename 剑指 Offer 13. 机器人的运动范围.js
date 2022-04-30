/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 * Time O(mn log (m+n))
 * Space O(mn)
 */
var movingCount = function (m, n, k) {
  // O(log x)
  const ds = (x) => {
    let sum = 0
    while (x) {
      sum += x % 10
      x = Math.floor(x / 10)
    }
    return sum
  }
  let ans = 0, v = Array(m).fill(0).map(() => Array(n).fill(0))
  let dx = [0, 0, 1, -1], dy = [1, -1, 0, 0]
  const valid = (i, j) => i >= 0 && i < m && j >= 0 && j < n
  let q = [[0, 0]]
  while (q.length) {
    const [i, j] = q.shift()
    if (v[i][j]) continue
    if (ds(i) + ds(j) <= k) {
      v[i][j] = 1, ans++
      for (let l = 0; l < 4; l++) {
        let x = i + dx[l], y = j + dy[l]
        if (valid(x, y) && !v[x][y]) q.push([x, y])
      }
    }
  }
  return ans
};
