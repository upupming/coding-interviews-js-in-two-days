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
 * Time O(n)
 * Space O(height)
 */
var maxDepth = function (root) {
  if (!root) return [0, true]
  let [l, bl] = maxDepth(root.left), [r, br] = maxDepth(root.right)
  return [Math.max(l, r) + 1, bl && br && Math.abs(l - r) <= 1]
};
var isBalanced = function (root) {
  return maxDepth(root)[1]
};
