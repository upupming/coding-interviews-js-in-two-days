/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * Time O(n)
 * Space O(n)
 */
var mirrorTree = function (root) {
  if (root === null) return null
  let tmp = root.left
  root.left = mirrorTree(root.right)
  root.right = mirrorTree(tmp)
  return root
};
