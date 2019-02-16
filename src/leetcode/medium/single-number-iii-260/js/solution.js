/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var xor = 0;
  for (var i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  xor &= -xor;

  var result = [0, 0];
  for (var i = 0; i < nums.length; i++) {
    if ((nums[i] & xor) === 0) {
      result[0] ^= nums[i];
    } else {
      result[1] ^= nums[i];
    }
  }

  return result;
};
