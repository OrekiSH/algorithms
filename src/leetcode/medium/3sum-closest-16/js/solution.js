/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var n = nums.length;
  if (n < 3) return 0;

  var closest = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);

  for (var first = 0; first < n - 2; first += 1) {
    var second = first + 1;
    var third = n - 1;

    while (second < third) {
      var num = nums[first] + nums[second] + nums[third];

      if (Math.abs(num - target) < Math.abs(closest - target)) closest = num;

      if (num < target) {
        second += 1;
      } else if (num > target) {
        third -= 1;
      } else {
         return num;
      }
    }
  }

  return closest;
};
