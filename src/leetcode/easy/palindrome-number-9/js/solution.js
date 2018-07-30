/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  var rev = 0;
  var lastDigit = 0;
  while (x > rev) {
    lastDigit = x % 10;
    rev = rev * 10 + lastDigit;
    x = (x - lastDigit) / 10;
  }

  return (x === rev || x === parseInt(rev / 10, 10));
};
