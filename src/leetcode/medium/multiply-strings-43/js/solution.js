/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  var result = '';
  var m = num1.length;
  var n = num2.length;
  var pos = new Array(m + n);
  var count = 0;
  while (count < m + n) {
    pos[count] = 0;
    count += 1;
  }

  for (var i = m - 1; i >= 0; i -= 1) {
    for (var j = n - 1; j >= 0; j -= 1) {
      var mul = (num1[i] - '0') * (num2[j] - '0');
      var p1 = i + j;
      var p2 = i + j + 1;
      var sum = mul + pos[p2];

      pos[p1] += parseInt(sum / 10, 10);
      pos[p2] = (sum) % 10;
    }
  }

  for (var i = 0; i < pos.length; i++) {
    var p = pos[i];
    if (!result.length && p === 0) {
      continue;
    }
    result += p;
  }

  return result;
};
