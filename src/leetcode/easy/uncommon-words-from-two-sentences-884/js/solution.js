/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  var map = {};
  var tokens = (A + ' ' + B).split(' ');
  var result = [];

  for (var i = 0; i < tokens.length; i++) {
    var s = tokens[i];
    map[s] = map[s] === undefined ? 1 : map[s] + 1;
  }

  var keys = Object.keys(map);
  for (var i = 0; i < keys.length; i++) {
    if (map[keys[i]] === 1) {
      result.push(keys[i]);
    }
  }

  return result;
};
