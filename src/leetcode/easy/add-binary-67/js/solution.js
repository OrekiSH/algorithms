/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var s = '';
  var i = a.length - 1;
  var j = b.length - 1;
  var c = 0;
  while (i >= 0 || j >= 0 || c === 1) {
    c += (i >= 0 ? a[i--] - '0' : 0);
    c += (j >= 0 ? b[j--] - '0' : 0);
    s = parseInt(c % 2, 10) + s;
    c >>= 1;
  }

  return s;
};
