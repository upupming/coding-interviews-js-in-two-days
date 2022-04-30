/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Time O(n)
 * Space O(n)
 */
var levelOrder = function (root) {
  if (root === null) return []
  let ans = [], flag = false
  const q = [root]
  while (q.length) {
    const n = q.length
    ans.push([])
    for (let i = 0; i < n; i++) {
      const node = q.shift()
      if (flag)
        ans[ans.length - 1].unshift(node.val)
      else
        ans[ans.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    flag = !flag
  }
  return ans
};
