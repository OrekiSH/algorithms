// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {
//   var prev;
//   var prevCount;
//
//   for (var i = nums.length - 1; i >= 0; i -= 1) {
//     if (prev !== nums[i]) {
//       prev = nums[i];
//       prevCount = 1;
//     } else if (prevCount === 2) {
//       nums.splice(i, 1);
//     } else {
//       prevCount += 1;
//     }
//   }
//
//   return nums.length;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  var index = 0;
  for (var i = 0; i < nums.length; i++) {
    if (index < 2 || nums[i] > nums[index - 2]) {
      nums[index] = nums[i];
      index += 1;
    }
    console.log(index, nums);
  }

  return index;
};

var nums = [0,0,1,1,1,1,2,3,3];
console.log(removeDuplicates(nums));
console.log(nums);
