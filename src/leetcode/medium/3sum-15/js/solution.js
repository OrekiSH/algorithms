/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var res = [];
  nums.sort((a, b) => a - b);

  for (var first = 0; first < nums.length - 2; first += 1) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }

    var second = first + 1;
    var third = nums.length - 1;
    var target = -nums[first];

    while (second < third) {
      if (nums[second] + nums[third] > target) {
        third -= 1;
      } else if (nums[second] + nums[third] < target) {
        second += 1;
      } else {
        res.push([nums[first], nums[second], nums[third]]);
        second += 1;
        third -= 1;

        while (second < third && nums[second] === nums[second - 1]) {
          second += 1;
        }
        while (second < third && nums[third] === nums[third - 1]) {
          third += 1;
        }
      }
    }
  }

  return res;
};
