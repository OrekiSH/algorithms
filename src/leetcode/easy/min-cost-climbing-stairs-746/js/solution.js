/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  var c1 = 0;
  var c2 = 0;

  for (var i = 0; i < cost.length; i++) {
    var c0 = Math.min(c1, c2) + cost[i];
    c2 = c1;
    c1 = c0;
  }

  return c1 < c2 ? c1 : c2;
};
