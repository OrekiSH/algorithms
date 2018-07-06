/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var start = 0, end = nums.length - 1;

  if (target <= nums[start]) {
    return 0;
  } else if (target > nums[end]) {
    return end + 1;
  } else {
    while (start < end - 1) {
      var mid = parseInt((start + end) / 2);

      if (target > nums[mid]) {
        start = mid;
      } else {
        end = mid;
      }
    }

    return end;
  }
};
