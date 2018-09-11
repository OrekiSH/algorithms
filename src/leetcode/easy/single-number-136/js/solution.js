/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { // fast
  return nums.reduce((a, c) => a ^ c);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { // slow
  var store = [];

  for (var i = 0; i < nums.length; i++) {
    var n = nums[i];
    var index = store.indexOf(n);

    if (index === -1) {
      store.push(n);
    } else {
      store.splice(index, 1);
    }
  }

  return store[0];
};
