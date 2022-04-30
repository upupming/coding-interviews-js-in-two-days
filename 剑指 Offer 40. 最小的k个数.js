/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * Time O(n)
 * Space O(k), O(log n)
 */
var getLeastNumbers = function (arr, k) {
  const qselect = (l, r, k) => {
    if (k === 0) return []
    if (l >= r) return [arr[l]]
    let i = l - 1, j = r + 1, p = arr[l + r >> 1]
    while (i < j) {
      do i++; while (arr[i] < p)
      do j--; while (arr[j] > p)
      if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    let cnt = j - l + 1
    if (k <= cnt) return qselect(l, j, k)
    return [...arr.slice(l, j + 1), ...qselect(j + 1, r, k - cnt)]
  }
  return qselect(0, arr.length - 1, k)
};
