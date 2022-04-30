const contain = (A, B) => {
  if (B === null) return true
  if (A === null) return false
  if (A.val !== B.val) return false
  return contain(A.left, B.left) && contain(A.right, B.right)
}
/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} A
* @param {TreeNode} B
* @return {boolean}
  Time O(MN)
  Space O(M)
*/
var isSubStructure = function (A, B) {
  if (B === null) return false
  const solve = (A, B) => {
    if (B === null) return true
    if (A === null) return false
    if (A.val === B.val) {
      if (contain(A, B)) return true
    }
    return solve(A.left, B) || solve(A.right, B)
  }
  return solve(A, B)
};
