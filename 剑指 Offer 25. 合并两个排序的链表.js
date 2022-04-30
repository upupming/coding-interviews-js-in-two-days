/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Time O(n)
 * Space O(n)
 */
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(-1), p = dummy
  while (l1 && l2) {
    if (l1.val <= l2.val) p.next = new ListNode(l1.val), l1 = l1.next
    else p.next = new ListNode(l2.val), l2 = l2.next
    p = p.next
  }
  while (l1) p.next = new ListNode(l1.val), l1 = l1.next, p = p.next
  while (l2) p.next = new ListNode(l2.val), l2 = l2.next, p = p.next
  return dummy.next
};
