/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var slow = n;
  var fast = n;

  do {
    slow = digitSquareSum(slow);
    fast = digitSquareSum(fast);
    fast = digitSquareSum(fast);
  } while (slow != fast);

  return slow === 1;
};

function digitSquareSum(n) {
  var sum = 0;
  var tmp = 0;
  while (n) {
    tmp = n % 10;
    sum += tmp * tmp;
    n = parseInt(n / 10);
  }

  return sum;
}
