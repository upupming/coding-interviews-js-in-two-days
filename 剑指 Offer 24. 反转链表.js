/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListIter = function (head) {
  if (!head) return head
  let last = head, cur = head.next
  head.next = null
  while (cur) {
    let next = cur.next
    cur.next = last

    last = cur
    cur = next
  }
  return last
};
var reverseListRec = function (head) {
  if (head === null || head.next === null) return head
  const tail = reverseListRec(head.next)
  head.next.next = head
  head.next = null
  return tail
};
var reverseList = reverseListRec
