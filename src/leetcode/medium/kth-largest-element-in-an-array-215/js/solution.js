/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  var min = Math.min(...nums);
  var max = Math.max(...nums);
  var kth = nums.length - k + 1;

  while (min < max) {
    var mid = Math.floor((min + max) / 2);

    if (isKthLargest(mid, kth, nums)) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return min;
};

function isKthLargest(target, k, nums) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      count += 1;
    }
  }

  return count >= k;
}
