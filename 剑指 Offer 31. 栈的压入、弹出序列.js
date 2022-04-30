/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * Time O(n)
 * Space O(n)
 */
var validateStackSequences = function (pushed, popped) {
  const s = [], n = pushed.length
  let j = 0
  for (const x of pushed) {
    s.push(x)
    while (s.length && s[s.length - 1] === popped[j]) j++, s.pop()
  }
  return j === n
};
