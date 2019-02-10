/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var result = [];
  backtrack(k, n, result, [], 1);

  return result;
};

function backtrack(k, n, result, current, start) {
  if (current.length > k) {
    return;
  } if (current.length === k && n === 0) {
    result.push(current.slice());
    return;
  }

  for (var i = start; i <= 9; i++) {
    if (n - i >= 0) {
      current.push(i);
      backtrack(k, n - i, result, current, i + 1);
      current.pop();
    }
  }
}
