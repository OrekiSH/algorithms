/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  var res = [];

  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    if (nums[Math.abs(n) - 1] < 0) {
      res[0] = Math.abs(n);
    } else {
      nums[Math.abs(n) - 1] *= -1;
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res[1] = i + 1;
    }
  }

  return res;
};
