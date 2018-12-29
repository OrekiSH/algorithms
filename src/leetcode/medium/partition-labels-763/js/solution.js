/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  if (!S) {
    return null;
  }

  var result = [];
  var map = {};

  for (var i = 0; i < S.length; i++) {
    map[S[i]] = i;
  }

  var last = 0;
  var start = 0;
  for (var i = 0; i < S.length; i++) {
    last = Math.max(last, map[S[i]]);

    if (last === i) {
      result.push(last - start + 1);
      start = last + 1;
    }
  }

  return result;
};
