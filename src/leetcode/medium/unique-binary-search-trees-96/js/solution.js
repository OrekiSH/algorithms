/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  if (!n || n < 2) {
    return 1;
  }

  var dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  for (var i = 2; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};
