/**
 * @param {string} s
 * @return {string[]}
 * Time O(n!)
 * Space O(n)
 */
var permutation = function (s) {
  const n = s.length
  // 记得排序
  const a = s.split('').sort()
  const ans = [], st = new Set()
  const dfs = (t) => {
    if (t.length === n) {
      ans.push(t.join(''))
      return
    }
    for (let i = 0; i < n; i++) {
      if (st.has(i)) continue
      // 之前没有填，现在也不能填
      if (i > 0 && !st.has(i - 1) && a[i - 1] === a[i]) continue

      st.add(i), t.push(a[i])
      dfs(t)
      st.delete(i), t.pop()
    }
  }
  dfs([])
  return ans
};
