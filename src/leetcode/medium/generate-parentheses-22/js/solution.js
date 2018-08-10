/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n < 2) {
    return [[''], ['()']][n];
  }

  var result = [];
  addPar(result, '', n, 0);
  return result;
};

function addPar(arr, str, n, m) {
  if (!n && !m) {
    return arr.push(str);
  }

  if (m > 0) {
    addPar(arr, str + ')', n, m - 1);
  }
  if (n > 0) {
    addPar(arr, str + '(', n - 1, m + 1);
  }
}

console.log(generateParenthesis(3));
