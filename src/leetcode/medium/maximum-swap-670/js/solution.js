/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  var chars = (num + '').split('');
  var maxI = chars.length - 1;
  var x = 0;
  var y = 0;

  for (var i = chars.length - 2; i >= 0; i -= 1) {
    if (chars[maxI] === chars[i]) {
      continue;
    }

    if (chars[maxI] < chars[i]) {
      maxI = i;
    } else {
      x = maxI;
      y = i;
    }
  }

  var tmp = chars[x];
  chars[x] = chars[y];
  chars[y] = tmp;

  return parseInt(chars.join(''), 10);
};
