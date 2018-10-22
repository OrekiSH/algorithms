/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  var nums = [];
  var factorial = new Array(n);
  var result = '';

  for (var i = 1; i <= n; i++) {
    nums.push(i)
  }
  factorial[0] = 1;

  for (var i = 1; i < n; i++) {
    factorial[i] = i * factorial[i - 1];
  }
  k = k - 1;

  for (var i = n; i > 0; i--) {
    var index = parseInt(k / factorial[i - 1], 10);
    k = k % factorial[i - 1];
    result += nums[index];
    nums.splice(index, 1);
  }

  return result;
};
