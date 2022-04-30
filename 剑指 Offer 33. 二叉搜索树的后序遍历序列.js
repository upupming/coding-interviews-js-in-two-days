/**
 * @param {number[]} postorder
 * @return {boolean}
 * Time O(n^2)
 * Space O(n)
 */
var verifyPostorder = function (postorder) {
  if (!postorder) return true
  const n = postorder.length

  const ok = (l, r) => {
    if (l >= r) return true
    const x = postorder[r]
    let i = l
    while (i < r && postorder[i] < x) i++
    for (let j = i; j < r; j++) {
      if (postorder[j] < x) return false
    }
    // 全部 > r 或者全部 < r
    if (i === l || i === r) return ok(l, r - 1)
    return ok(l, i - 1) && ok(i, r - 1)
  }

  return ok(0, n - 1)
};
