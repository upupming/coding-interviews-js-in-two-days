/**
 * @param {number} target
 * @return {number[][]}
 (x+y)*(y-x+1)/2=9
   b      a
 (x+y)*(y-x+1)=18
   6      3
   a+b === 2*y+1
   Time O(sqrt n)
   Space O(1)
 */
var findContinuousSequence = function (target) {
  const t = 2 * target
  let ans = []
  for (let i = 2; i <= Math.sqrt(t); i++) {
    if (t % i === 0) {
      const [a, b] = [i, t / i]
      let u = a + b - 1, x, y
      if (u % 2 !== 0) continue
      y = u / 2, x = b - y
      ans.unshift(Array(y - x + 1).fill(0).map((_, i) => i + x))
    }
  }
  return ans
};
