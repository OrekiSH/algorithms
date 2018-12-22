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

    while (second < third) {
      console.warn(first);
      var sum = nums[first] + nums[second] + nums[third];

      if (sum < 0) {
        second += 1
      } else if (sum > 0) {
        third -= 1;
      } else {
        res.push([nums[first], nums[second], nums[third]]);

        while (second < third && nums[second] === nums[second + 1]) {
          second += 1;
        }
        while (second < third && nums[third] === nums[third - 1]) {
          third -= 1;
        }

        second += 1;
        third -= 1;
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
