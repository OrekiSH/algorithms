/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  var arr = S.split('');
  for (var i = 0, j = arr.length - 1; i < j; i += 1, j -= 1) {
    while (i < j && !arr[i].match(/^[A-Z]$/i)) {
      i += 1;
    }

    while (i < j && !arr[j].match(/^[A-Z]$/i)) {
      j -= 1;
    }

    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr.join('');
};
