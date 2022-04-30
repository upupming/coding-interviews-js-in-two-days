/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null
  let pre = null, head
  const dfs = (cur) => {
    if (!cur) return
    dfs(cur.left)

    if (pre) {
      pre.right = cur, cur.left = pre
    } else {
      head = cur
    }
    pre = cur

    dfs(cur.right)
  }
  dfs(root)
  // 最后的时候，pre 就是尾部（最大的）元素
  head.left = pre, pre.right = head
  return head
};
