function qmul(a, b) {
  let ans = 0
  // 循环可以手动展开成 14 次判断
  while (b) {
    if (b & 1) ans += a
    b >>= 1
    a <<= 1
  }
  return ans
}

/**
* @param {number} n
* @return {number}
Time O(log n)
Space O(1)
*/
var sumNums = function (n) {
  return qmul(n, n + 1) >> 1
};
