/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const dfs = (root, root1) => {
    if (root === null && root1 === null) return true
    if (root === null || root1 === null) return false
    if (root.val !== root1.val) return false
    return dfs(root.left, root1.right) && dfs(root.right, root1.left)
  }
  return dfs(root, root)
};
