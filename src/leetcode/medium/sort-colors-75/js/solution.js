/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var low = 0;
  var high = nums.length - 1;

  for (var i = 0; i <= high;) {
    if (nums[i] === 0) {
      nums[i] = nums[low];
      nums[low] = 0;
      i += 1;
      low += 1;
    } else if (nums[i] === 2) {
      nums[i] = nums[high];
      nums[high] = 2;
      high -= 1;
    } else {
      i += 1;
    }
  }
};
