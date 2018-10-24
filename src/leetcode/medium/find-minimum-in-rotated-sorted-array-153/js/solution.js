/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var start = 0;
  var end = nums.length - 1;

  while (start < end) {
    if (nums[start] < nums[end]) {
      return nums[start];
    }

    var mid = parseInt((start + end) / 2, 10);

    if (nums[mid] >= nums[start]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return nums[start];
};
