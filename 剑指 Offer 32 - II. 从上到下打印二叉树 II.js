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
var levelOrder1 = function (root) {
  if (root === null) return []
  let ans = []
  const q = [[root, 0]]
  while (q.length) {
    const [node, dep] = q.shift()
    ans[dep] ||= []
    ans[dep].push(node.val)
    if (node.left) q.push([node.left, dep + 1])
    if (node.right) q.push([node.right, dep + 1])
  }
  return ans
};

var levelOrder = function (root) {
  if (root === null) return []
  let ans = []
  const q = [root]
  while (q.length) {
    const n = q.length
    ans.push([])
    for (let i = 0; i < n; i++) {
      const node = q.shift()
      ans[ans.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return ans
};
