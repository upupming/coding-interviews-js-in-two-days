/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 * Time O(n^2)
 * Space O(n)
 */
var pathSum = function (root, target) {
  if (!root) return []
  let ans = []
  const dfs = (node, path, sum) => {
    path.push(node.val), sum += node.val
    if (!node.left && !node.right && sum === target) {
      ans.push([...path])
    }
    if (node.left) dfs(node.left, path, sum)
    if (node.right) dfs(node.right, path, sum)
    path.pop(), sum -= node.val
  }
  dfs(root, [], 0)
  return ans
};
