/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * Time O(n)
 * Space O(log n)
 */
var kthLargest = function (root, k) {
  const dfs = (node, k) => {
    if (node === null) return [null, 0]
    let [rightNode, rightCnt] = dfs(node.right, k)
    let [leftNode, leftCnt] = dfs(node.left, k - 1 - rightCnt)
    if (rightCnt >= k) return [rightNode, leftCnt + rightCnt + 1]
    if (rightCnt === k - 1) return [node, leftCnt + rightCnt + 1]
    return [leftNode, leftCnt + rightCnt + 1]
  }
  return dfs(root, k)[0].val
};
