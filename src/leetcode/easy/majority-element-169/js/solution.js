/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) { // faster
  var candidate = null;
  var count = 0;
  for (var i= 0; i < nums.length; i++) {
    var e = nums[i];
    if (count == 0) {
      candidate = e;
      count = 1;
    } else if (e == candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return candidate;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) { // slower
  var len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  var map = {};

  for (var i = 0; i < len; i++) {
    const e = nums[i];
    if (map[e]) {
      map[e] += 1;

      if(map[e] > (len / 2)) {
        return e;
      }
    } else {
      map[e] = 1;
    }
  }

  return null;
};
