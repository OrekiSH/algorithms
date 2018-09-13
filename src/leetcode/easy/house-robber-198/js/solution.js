/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var a = 0;
  var b = 0;
  for (var i = 0; i < nums.length; i += 1) {
    if (i % 2 === 0) {
      a = Math.max(a + nums[i], b);
    } else {
      b = Math.max(a, b + nums[i]);
    }
  }

  return a > b ? a : b;
};
