/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function(nums) {
  if (!nums || nums.length === 0) {
    return true;
  }

  const sum = nums.reduce((a, c) => a + c);
  if (sum % 2 !== 0) {
    return false;
  }

  const half = sum / 2;
  const dp = new Array(half + 1),fill(false);
  dp[0] = true;

  for (let i = 1; i <= nums.length; i += 1) {
    for (let j = half; j >= nums[i - 1]; j -= 1) {
      dp[j] = dp[j] || dp[j - nums[i - 1]];
    }
  }

  return dp[half];
};
