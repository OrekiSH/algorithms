/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function(N) {
  var res = [1];
  while (res.length < N) {
    var tmp = [];
    for (var i = 0; i < res.length; i++) {
      var odd = (res[i] * 2) - 1;
      if (odd <= N) {
        tmp.push(odd);
      }
    }

    for (var i = 0; i < res.length; i++) {
      var even = res[i] * 2;
      if (even <= N) {
        tmp.push(even);
      }
    }

    res = tmp;
  }

  return res;
};
