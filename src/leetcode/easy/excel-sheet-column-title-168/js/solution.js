/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var result = '';

  while (n) {
    n -= 1;
    result = String.fromCharCode(65 + (n % 26)) + result;
    n = parseInt(n / 26, 10);
  }

  return result;
};
