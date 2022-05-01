/**
 * @param {number[]} a
 * @return {number[]}
 * Time O(n)
 * Space O(n)
 */
var constructArr = function (a) {
  const n = a.length
  const l = [], r = []
  l[0] = r[n + 1] = 1
  for (let i = 1; i <= n; i++) {
    l[i] = l[i - 1] * a[i - 1]
  }
  for (let i = n; i >= 1; i--) {
    r[i] = r[i + 1] * a[i - 1]
  }
  let ans = []
  for (let i = 1; i <= n; i++) {
    ans.push(l[i - 1] * r[i + 1])
  }
  return ans
};
