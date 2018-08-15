/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var result = [];
  var tmp = [];
  backtrack(result, tmp, nums);
  return result;
};

function backtrack(result, tmp, nums) {
  if (tmp.length === nums.length) {
    result.push(tmp.slice());
  } else {
    for (var i = 0; i < nums.length; i += 1) {
      if (tmp.indexOf(nums[i]) !== -1) {
        continue;
      }
      tmp.push(nums[i]);
      backtrack(result, tmp, nums);
      tmp.pop();
    }
  }
}

console.log(permute([1]));
