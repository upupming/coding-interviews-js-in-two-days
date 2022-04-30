/**
 * @param {number} n
 * @return {number}
 * Time O(log n)
 * Space O(1)
 */
function qpow(a, b, p) {
  let ans = 1n % p
  while (b) {
    if (b & 1n) ans = (ans * a) % p
    a = a * a
    b >>= 1n
  }
  return ans
}

var cuttingRope = function (n) {
  if (n <= 3) return n - 1
  let a = BigInt(Math.floor(n / 3)), b = BigInt(n % 3)
  let ans, p = BigInt(1e9 + 7)
  if (b == 0n) ans = qpow(3n, a, p)
  else if (b === 1n) ans = qpow(3n, a - 1n, p) * 4n
  else ans = qpow(3n, a, p) * 2n
  return ans % p
};
