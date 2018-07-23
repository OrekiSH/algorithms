/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var len = s.length;
  if (len < 2) {
    return s;
  }

  var min = 0;
  var max = 1;
  var current = 0;

  while (current < len) {
    var i = current;
    var j = current;

    while (i < len - 1 && s[i] == s[i + 1]) {
      i += 1;
    }
    current = i + 1;

    while (i < len - 1 && j > 0 && s[i + 1] == s[j - 1]) {
      i += 1;
      j -= 1;
    }

    let newMax = i - j + 1;
    if (max < newMax) {
      min = j;
      max = newMax;
    }
  }
  return s.substring(min, min + max);
};
