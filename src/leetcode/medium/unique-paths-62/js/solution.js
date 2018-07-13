/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (!m || !n) {
    return 0;
  }

  var res = [];
  for (var i = 0; i < n; i++) {
    res[i] = 1;
  }

  for (var i = 1; i < m; i++) {
    var prev = 1;
    for (var j = 1; j < n; j++) {
      res[j] = prev + res[j];
      prev = res[j]
    }
  }

  return res[n - 1];
};
