/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * Time O(n)
 * Space O(n)
 * @todo 学习迭代算法
 */
var buildTree = function (preorder, inorder) {
  const m = preorder.length
  function build(pl, pr, il, ir) {
    // console.log(pl, pr, il, ir)
    if (pl > pr) return null
    let a = preorder[pl], len = pr - pl + 1
    let root = new TreeNode(a)
    let i = il
    while (inorder[i] !== a) i++
    // [il, i-1]
    let leftCnt = i - il
    let rightCnt = len - leftCnt - 1
    // console.log(a, il, i, leftCnt, rightCnt)
    root.left = build(pl + 1, pl + 1 + leftCnt - 1, il, il + leftCnt - 1)
    root.right = build(pl + 1 + leftCnt, pl + 1 + leftCnt + rightCnt - 1, il + leftCnt + 1, il + leftCnt + 1 + rightCnt - 1)
    return root
  }
  return build(0, m - 1, 0, m - 1)
};
