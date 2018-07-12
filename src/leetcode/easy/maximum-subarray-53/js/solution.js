/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  var max = nums[0];
  var maxCurrent = nums[0];

  for (var i = 1; i < nums.length; i += 1) {
    // https://jsperf.com/math-min-max-vs-ternary-vs-if
    var sum = maxCurrent + nums[i];
    maxCurrent = sum > nums[i] ? sum : nums[i];
    if (maxCurrent > max) {
      max = maxCurrent;
    }
  }

  return max;
};
