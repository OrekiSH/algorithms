/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var start = 0;
  var end = nums.length - 1;
  var mid;
  while (start < end) {
    mid = parseInt((start + end) / 2, 10);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  if (nums[start] !== target) {
    return [-1, -1];
  }

  var res = [start];
  end = nums.length - 1;
  while (start < end) {
    mid = parseInt((start + end) / 2, 10);
    if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  res.push(nums[end] === target ? end : end - 1);
  return res;
};

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var searchRange = function(nums, target) { // slow but easy :p
  var first = -1;
  var second = -1;
  var len = nums.length;

  for (var i = 0; i < len; i += 1) {
    if (first !== -1 && second !== -1) {
      break;
    }
    var j = len - 1 - i;
    var begin = nums[i];
    var end = nums[j];

    if (begin === target && first === -1) {
      first = i;
    }
    if (end === target && second === -1) {
      second = j;
    }
  }

  return [first, second];
};
