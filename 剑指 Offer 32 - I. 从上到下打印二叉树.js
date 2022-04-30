/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * Time O(n)
 * Space O(n)
 * n/2+n/4+n/8+...+1 = n
 */
var levelOrder = function (root) {
  if (!root) return []
  let q = [root]
  let ans = []
  while (q.length) {
    const now = q.shift()
    ans.push(now.val)
    if (now.left) q.push(now.left)
    if (now.right) q.push(now.right)
  }
  return ans
};
