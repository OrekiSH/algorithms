/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var result = nums[0];
  var imax = result;
  var imin = result;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      var s = imax;
      imax = imin;
      imin = s;
    }

    imax = Math.max(nums[i], imax * nums[i]);
    imin = Math.min(nums[i], imin * nums[i]);

    if (imax > result) {
      result = imax;
    }
  }

  return result;
};
