/**
 * @param {string} s
 * @return {number}
 * 双指针
 * Time O(n)
 * Space O(1)
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0, st = new Set(), ans = 0
  for (let j = 0; j < s.length; j++) {
    while (st.has(s[j])) st.delete(s[i++])
    st.add(s[j])
    ans = Math.max(ans, j - i + 1)
  }
  return ans
};
