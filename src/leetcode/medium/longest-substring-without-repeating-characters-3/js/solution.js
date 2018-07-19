/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var len = s.length;
  if (len < 2) {
    return len;
  }

  var i = 0;
  var max = 0;
  var stored = 0;

  while (i < len) {
    var tmp = s.slice(stored, i);
    var dupe = tmp.indexOf(s[i]);

    if (dupe === -1) {
      max = Math.max(max, tmp.length + 1);
    } else {
      stored += dupe + 1;
    }

    i += 1;
  }

  return max;
};
