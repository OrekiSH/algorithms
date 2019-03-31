/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var result = [[]];

  nums.forEach((n) => {
    var len = result.length;
    for (let i = 0; i < len; i += 1) {
      var temp = result[i].slice();
      temp.push(n);
      result.push(temp);
    }
  });

  return result;
};
