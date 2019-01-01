/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var result = [];
  candidates.sort((a, b) => a - b);
  backtrack(candidates, target, result, [], 0);

  return result;
};

function backtrack(candidates, target, result, current, start) {
  if (target === 0) {
    result.push(current.slice());
    return;
  } else if (target < candidates[0]) {
    return;
  }

  for (var i = start; i < candidates.length; i += 1) {
    var n = candidates[i];
    if (target - n < 0) {
      continue;
    }
    current.push(n);
    backtrack(candidates, target - n, result, current, i);
    current.pop();
  }
}
