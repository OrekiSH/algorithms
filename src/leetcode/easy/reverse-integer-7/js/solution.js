/**
 * @param {number} x
 * @return {number}
 */
var MAX_INTEGER = Math.pow(2, 31) - 1;
var MIN_INTEGER = -Math.pow(2, 31);

var reverse = function(x) { // fast
  var result = 0;
  var lastDigit = 0;

  while (x !== 0) {
    lastDigit = x % 10;
    result = result * 10 + lastDigit;
    x = (x - lastDigit) / 10;
  }

  return (result > MAX_INTEGER || result < MIN_INTEGER) ? 0 : result;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) { // slow
  var result = parseInt(
    (Math.abs(x) + '').split('').reverse().join(''), 10,
  );

  if (x >= 0) {
    return result > MAX_INTEGER ? 0 : result;
  }
  return -result < MIN_INTEGER ? 0 : -result;
};
