/**
 * @param {number[]} nums
 * @return {number}
 * Time O(n log n)
 * Space O(n)
 */
var reversePairs = function (nums) {
  let ans = 0, c = []
  const mergeSort = (l, r) => {
    if (l >= r) return
    const mid = l + r >> 1
    mergeSort(l, mid)
    mergeSort(mid + 1, r)

    let i = l, j = mid + 1, k = 0
    while (i <= mid && j <= r) {
      if (nums[i] <= nums[j]) c[k++] = nums[i++]
      else c[k++] = nums[j++], ans += mid - i + 1
    }
    while (i <= mid) c[k++] = nums[i++]
    while (j <= r) c[k++] = nums[j++]
    for (i = l, k = 0; i <= r; i++, k++) nums[i] = c[k]
    // console.log(l, r, ans)
  }
  mergeSort(0, nums.length - 1)
  return ans
};
