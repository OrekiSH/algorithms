/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  var result = new Array(30).fill(0);
  var i = 0;

  for (var j = 0; j < S.length; j++) {
    if (S[j] === '(') {
      i += 1;
      result[i] = 0;
    } else {
      result[i - 1] += Math.max(result[i] * 2, 1);
      i -= 1;
    }
    console.log(result);
  }

  return result[0];
};


console.log(scoreOfParentheses('(()(()))'));
