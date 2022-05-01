/**
 * @param {number} num
 * @return {number}
 * Time O(log n)
 * Space O(log n)
 */
var translateNum = function (num) {
  if (num === 0) return 1
  let n1 = translateNum(Math.floor(num / 10)), n2 = 0
  if (num % 100 >= 10 && num % 100 < 26) n2 = translateNum(Math.floor(num / 100))
  //console.log(num, n1+n2)
  return n1 + n2
};
