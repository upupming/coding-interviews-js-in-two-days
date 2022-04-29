/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  if (numbers.length === 1) return numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    let j = (i - 1 + numbers.length) % numbers.length
    if (numbers[i] < numbers[j]) return numbers[i]
  }
  // edge case: all numbers are same
  return numbers[0]
};
