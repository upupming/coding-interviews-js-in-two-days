/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * Time O(4^n * m * n), 剪枝使得实际非常小
 * Space O(q)
 */
var exist = function (board, word) {
  const m = board.length, n = board[0].length
  const q = word.length

  let path = new Set()
  let dx = [0, 0, 1, -1], dy = [1, -1, 0, 0]
  const valid = (i, j) => i >= 0 && i < m && j >= 0 && j < n
  function dfs(i, j, k) {
    const hash = `${i}_${j}`
    if (path.has(hash) || board[i][j] !== word[k]) return false
    if (k === q - 1) return true
    path.add(hash)
    for (let l = 0; l < 4; l++) {
      let x = i + dx[l], y = j + dy[l]
      if (valid(x, y)) {
        if (dfs(x, y, k + 1)) return true
      }
    }
    path.delete(hash)
    return false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true
    }
  }


  // 无法记录当前路径上哪些点被访问了，因此不能使用 BFS
  function bfs(i, j) {
    let v = Array(m).fill(0).map(() => Array(n).fill(0).map(() => Array(q).fill(false)))
    let q = [[i, j, 0]]
    while (q.length) {
      const [i, j, k] = q.shift()
      v[i][j][k] = true
      if (board[i][j] === word[k]) {
        if (k === q - 1) return true
        for (let l = 0; l < 4; l++) {
          let x = i + dx[l], y = j + dy[l]
          if (valid(x, y) && !v[x][y][k + 1]) q.push([x, y, k + 1])
        }
      }
    }
    return false
  }
  return false
};
