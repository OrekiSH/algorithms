/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  var map = {};
  var stack = [];

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i]
    while (stack.length && stack[stack.length - 1] < num) {
      map[stack.pop()] = num;
    }

    stack.push(num);
  }

  for (var i = 0; i < findNums.length; i++) {
    findNums[i] = map[findNums[i]] || -1;
  }

  return findNums;
};
