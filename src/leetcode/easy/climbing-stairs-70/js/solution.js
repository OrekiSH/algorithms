/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) {
    return n;
  }

  var first = 1;
  var second = 2;
  var third = 0;
  for (var i = 3; i <= n; i += 1) {
    third = first + second;
    first = second;
    second = third;
  }
  return second;
};
