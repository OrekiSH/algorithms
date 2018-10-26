/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var result = 0;
  var tokens = s.split('').reverse();
  for (var i = 0; i < tokens.length; i++) {
    var n = tokens[i].charCodeAt() - 64;
    result += Math.pow(26, i) * n;
  }

  return result;
};
