/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  var n = S.length;
  var result = [];
  var pos = -n;

  for (var i = 0; i < n; i++) {
    if (S[i] === C) {
      pos = i;
    }
    result[i] = i - pos;
  }

  for (var i = n - 1; i >= 0; i--) {
    if (S[i] === C) {
      pos = i;
    }
    result[i] = Math.min(result[i], Math.abs(i - pos));
  }

  return result;
};
