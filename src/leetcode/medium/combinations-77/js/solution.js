/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result = [];
  var comb = [];
  backtrack(result, comb, 1, n, k);
  return result;
};

function backtrack(result, comb, start, n, k) {
  if (k === 0) {
    result.push(comb.slice());
    return;
  }

  for (var i = start; i <= n; i += 1) {
    comb.push(i);
    console.log(i, comb);
    backtrack(result, comb, i + 1, n, k - 1);
    comb.pop();
  }
}
