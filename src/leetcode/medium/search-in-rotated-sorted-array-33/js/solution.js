/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var start = 0;
  var end = nums.length - 1;

  while (start <= end) {
    var mid = parseInt((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[start] <= nums[mid]) { // correct order
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target <= nums[end] && target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};
