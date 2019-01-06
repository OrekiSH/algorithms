/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  var i = 0;
  var j = 0;
  var sum = 0;
  var min = Number.MAX_SAFE_INTEGER;

  while (j < nums.length) {
    sum += nums[j];
    j += 1;

    while (sum >= s) {
      min = Math.min(min, j - i);
      sum -= nums[i];
      i += 1;
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};
