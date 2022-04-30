/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * Time O(n)
 * Space O(1)
 */
var deleteNode = function (head, val) {
  const dummy = new ListNode(-1)
  dummy.next = head
  let p = head, last = dummy
  while (p) {
    if (p.val === val) {
      last.next = p.next
      break
    }
    last = p
    p = p.next
  }
  return dummy.next
};
