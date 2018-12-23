/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var res = [];
  if (!nums || nums.length < 3) {
    return res;
  }
  nums.sort((a, b) => a - b);

  var positiveIndex = nums.findIndex(n => n >= 0);

  for (var first = 0; first <= positiveIndex; first += 1) {
    // skip same nums[first]
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }

    var second = first + 1;
    var third = nums.length - 1;

    while (second < third) {
      var sum = nums[first] + nums[second] + nums[third];

      if (sum < 0) {
        second += 1;
      } else if (sum > 0) {
        third -= 1;
      } else {
        res.push([nums[first], nums[second], nums[third]]);

        while (second < third && nums[second] === nums[second + 1]) {
          // skip same nums[second]
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
