/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  var i = 0;
  for (var j = 0; i < g.length && j < s.length; j++) {
    if (g[i] <= s[j]) {
      i += 1;
    }
  }

  return i;
};
