/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return [];
  }

  var result = [''];
  var mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  for (var i = 0; i < digits.length; i += 1) {
    var chars = mapping[digits[i]];
    if (!chars) {
      continue;
    }

    var tmp = [];
    for (var m = 0; m < chars.length; m += 1) {
      for (var n = 0; n < result.length; n += 1) {
        tmp.push(result[n] + chars[m]);
      }
    }

    result = tmp;
  }
  return result;
};
