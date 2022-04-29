/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 * Time O(n)
 * Space O(n)
 */
var reversePrint = function (head) {
  if (!head) return []
  let ans = reversePrint(head.next)
  ans.push(head.val)
  return ans
};
