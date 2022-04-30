/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Time O(n)
 * Space O(1)
 */
var getKthFromEndO2n = function (head, k) {
  let len = 0
  let p = head
  while (p) len++, p = p.next
  p = head
  let m = len - k
  while (m--) p = p.next
  return p
};
var getKthFromEndO1n = function (head, k) {
  let p = head, q = head
  while (k--) p = p.next
  while (p) {
    p = p.next
    q = q.next
  }
  return q
};
var getKthFromEnd = getKthFromEndO1n
