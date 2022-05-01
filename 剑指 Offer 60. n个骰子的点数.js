/**
 * @param {number} n
 * @return {number[]}
 3 = 1+2
   = 2+1
 */
   var dicesProbabilityNaive = function(n) {
    let ans = []
    const dfs = (dep, sum, p) => {
        if (dep === n) {
            ans[sum-n] ||= 0
            ans[sum-n] += p
            return
        }
        for (let i = 1; i <= 6; i++) {
            sum += i, p /= 6
            dfs(dep+1, sum, p)
            sum -= i, p *= 6
        }
    }
    dfs(0, 0, 1)
    return ans
};
/*
Time O(n^2)
Space O(n)
*/
var dicesProbability = function(n) {
    let dp = Array(6).fill(1/6)
    for (let i = 2; i <= n; i++) {
        let dp1 = Array(5*i+1).fill(0)
        // i-1 个骰子
        for (let j = 0; j < dp.length; j++) {
            // 再加一个骰子
            for (let k = 0; k < 6; k++) {
                dp1[j+k] += dp[j]/6
            }
        }
        dp = dp1
    }
    return dp
};
