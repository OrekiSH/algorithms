/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) {
    return 0;
  }

  var count = 1;
  var notPrimes = [];
  var upper = parseInt(Math.sqrt(n), 10);

  for (var i = 3; i < n; i += 2) {
    if (notPrimes[i]) {
      continue;
    }

    count += 1;
    if (i > upper) {
      continue;
    }

    for (var j = i * i; j < n; j += 2 * i) {
      notPrimes[j] = true;
    }
  }

  return count;
};

console.log(countPrimes(10));
