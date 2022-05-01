/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * Time O(n)
 * Space O(n)
 */
var lowestCommonAncestorM1 = function (root, p, q) {
  let ans
  const dfs = (node) => {
    if (!node) return false
    let lhas = dfs(node.left)
    let rhas = dfs(node.right)
    if ((lhas && rhas) || ((node === p || node === q) && (lhas || rhas))) {
      // console.log(node)
      ans = node
    }
    return lhas || rhas || node === p || node === q
  }
  dfs(root)
  return ans
};

var lowestCommonAncestor = function (root, p, q) {
  let fa = new Map()
  const dfs = (node) => {
    if (!node) return
    if (node.left) {
      fa.set(node.left, node)
      dfs(node.left)
    }
    if (node.right) {
      fa.set(node.right, node)
      dfs(node.right)
    }
  }
  dfs(root)
  let v = new Map()
  while (p) {
    v.set(p, true)
    p = fa.get(p)
  }
  while (q) {
    if (v.get(q)) return q
    q = fa.get(q)
  }
};
