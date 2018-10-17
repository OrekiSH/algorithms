/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    var item = nums[i];
    var current = Math.abs(item) - 1;

    if (nums[current] < 0) {
      result.push(Math.abs(item));
    } else {
      nums[current] = -nums[current];
    }
  }

  return result;
};
