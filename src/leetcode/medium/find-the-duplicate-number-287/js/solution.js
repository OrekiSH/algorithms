/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  if (!nums || nums.length < 2) {
    return -1;
  }

  var slow = 0
  var fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while(slow !== fast);

  slow = 0;
  while(slow !== fast){
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
