/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var profit = 0;
  var i = 0;
  var len = prices.length;

  while (i < len) {
    while (i < len - 1 && prices[i + 1] <= prices[i]) {
      i += 1;
    }

    var min = prices[i];
    i += 1;

    while (i < len - 1 && prices[i + 1] >= prices[i]) {
      i += 1;
    }

    profit += i < len ? prices[i] - min : 0;
    i += 1;
  }

  return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));
