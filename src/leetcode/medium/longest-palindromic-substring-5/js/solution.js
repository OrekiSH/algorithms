/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var len = s.length;
  if (len < 2) {
    return s;
  }

  var start = 0;
  var max = 0;

  for (var i = 0; i < len - 1; i += 1) {
    extend(s, i, i); // odd
    extend(s, i, i + 1); // even
  }

  return s.substring(start, start + max);
};

function extend(s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i -= 1;
    j += 1;
  }

  if (max < j - i - 1) {
    start = i + 1;
    max = j - i - 1;
  }
}
