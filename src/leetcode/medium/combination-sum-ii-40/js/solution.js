/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  var result = [];
  candidates.sort((a, b) => a - b);

  if (candidates[0] > target) {
    return result;
  }
  var comb = [];
  backtrack(candidates, target, result, comb, 0);

  return result;
};

function backtrack(candidates, target, result, comb, start) {
  if (target < 0) {
    return;
  } else if (target === 0) {
    return result.push(comb.slice());
  }

  for (var i = start; i < candidates.length; i += 1) {
    if (candidates[i] <= target) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      comb.push(candidates[i]);
      backtrack(candidates, target - candidates[i], result, comb, i + 1);
      comb.pop();
    }
  }
}
