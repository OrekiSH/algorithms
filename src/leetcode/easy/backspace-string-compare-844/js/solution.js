/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  var a = [];
  var b = [];

  for (var i = 0; i < S.length; i++) {
    var c = S[i];
    if (c === '#') {
      a.length > 0 && a.pop();
    } else {
      a.push(c);
    }
  }

  for (var i = 0; i < T.length; i++) {
    var c = T[i];
    if (c === '#') {
      b.length > 0 && b.pop();
    } else {
      b.push(c);
    }
  }

  return a.join() === b.join();
};
