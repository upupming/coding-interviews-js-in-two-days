/**
 * @param {number} n
 * @return {number}
 1~9
 10~99
 100~999
 1000~9999
 Time: O(log (n))
 Space O(1)
 */
var findNthDigit = function (n) {
  if (n === 0) return 0
  let cnt = 0, p = 1
  for (let len = 1; ; len++, p *= 10) {
    let c = (p * 10 - p) * len
    let needed = n - cnt
    // console.log(p, needed)
    if (needed <= c) {
      // 多出来的位数怎么凑出来的
      let x = Math.floor((needed - 1) / len)
      let y = len - 1 - ((needed - 1) % len)
      let num = p + x
      // console.log(needed, c, len, x, y, num)
      while (y--) num = Math.floor(num / 10)
      return num % 10
    }
    cnt += c
  }
};
