/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) {
    return '';
  }
  strs.sort();

  var result = '';
  var start = strs[0];
  var end = strs[strs.length - 1];
  var min = Math.min(start.length, end.length);

  for (var i = 0; i < min; i++) {
    if (start[i] == end[i]) {
      result += start[i];
    } else {
      break;
    }
  }

  return result;
};
