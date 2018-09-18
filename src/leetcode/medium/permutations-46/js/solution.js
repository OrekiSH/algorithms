/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  backtrack(result, [], nums, 0);
  return result;
};

function backtrack(result, tmp, nums, start) {
  if (tmp.length === nums.length) {
    return result.push(tmp.slice());
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (tmp.includes(nums[i])) {
      continue;
    }
    tmp.push(nums[i]);
    backtrack(result, tmp, nums, i + 1);
    tmp.pop();
  }
}
