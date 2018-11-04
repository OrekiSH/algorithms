/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  var n = nums.length;
  var m = nums[0].length;

  if (r * c !== n * m) {
    return nums;
  }

  var res = new Array(r);
  for (var i = 0; i < r; i++) {
    res[i] = new Array(c);
  }

  for (var i = 0; i < r * c; i++) {
    res[parseInt(i / c, 10)][i % c] = nums[parseInt(i / m, 10)][i % m];
  }

  return res;
};
