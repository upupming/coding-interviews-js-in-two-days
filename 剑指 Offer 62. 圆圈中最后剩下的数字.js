/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * Time O(n)
 * Space O(n)
 */
var lastRemainingNaive = function (n, m) {
  if (n === 0) return 0
  let x = lastRemaining(n - 1, m)
  return (x + m) % n
};
/*
* Time O(n)
 * Space O(1)
*/
var lastRemaining = function (n, m) {
  let ans = 0
  for (let i = 1; i <= n; i++) {
    ans = (ans + m) % i
  }
  return ans
};
