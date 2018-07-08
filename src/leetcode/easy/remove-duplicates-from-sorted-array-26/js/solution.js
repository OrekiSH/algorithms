/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = nums.length; // store
  for (var i = 0; i < len; i += 1) {
    if (nums[i] != nums[i + 1]) {
      nums.push(nums[i]);
    }
  }
  nums.splice(0, len);
  return nums.length;
};
