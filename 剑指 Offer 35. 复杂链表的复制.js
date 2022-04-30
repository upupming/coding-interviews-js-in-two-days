/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * Time O(n)
 * Space O(n)
 * @todo 迭代方法无需要哈希表
 */
let old2New = new Map()
var copyRandomList = function (head) {
  if (head === null) return null
  if (old2New.has(head)) return old2New.get(head)
  old2New.set(head, new Node(head.val))
  old2New.get(head).next = copyRandomList(head.next)
  old2New.get(head).random = copyRandomList(head.random)
  return old2New.get(head)
};
