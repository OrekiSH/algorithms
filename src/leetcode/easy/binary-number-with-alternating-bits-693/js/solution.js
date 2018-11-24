/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  return !((n ^= (n / 4)) & (n - 1));
};
