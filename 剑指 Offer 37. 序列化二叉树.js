/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * 完全参照 LeetCode 的序列化方法，就是层序遍历，同时去掉末尾多余的 null
 * Time O(n)
 * Space O(n)
 */
var serialize = function (root) {
  const ans = []
  let q = [root]
  while (q.length) {
    const node = q.shift()
    ans.push(node?.val ?? null)
    if (node) {
      q.push(node.left)
      q.push(node.right)
    }
  }
  while (ans.length >= 2 && ans[ans.length - 1] === null) ans.pop()
  // console.log(ans)
  return ans.map(x => x === null ? 'null' : x).join(' ')
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {
  const a = data.split(' ').map(x => x === 'null' ? null : Number(x))
  // console.log(a)
  const m = a.length
  let root = a[0] === null ? null : new TreeNode(a[0])
  // 先拿出第 0 个元素作为第 0 层，然后一层一层复原
  let q = [root]
  const n = q.length
  let j = 1
  while (j < m) {
    for (let i = 0; i < n; i++) {
      const node = q.shift()
      if (!node) continue
      if (j < m) {
        let x = a[j++]
        node.left = x === null ? null : new TreeNode(x)
      }
      if (j < m) {
        let y = a[j++]
        node.right = y === null ? null : new TreeNode(y)
      }
      q.push(node.left)
      q.push(node.right)
    }
  }
  return root
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
