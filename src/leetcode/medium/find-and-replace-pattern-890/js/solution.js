/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var p = new Array(26);
    var w = new Array(26);
    var same = true;

    for (var j = 0; j < word.length; j++) {
      var iw = word[j].charCodeAt() - 97;
      var ip = pattern[j].charCodeAt() - 97;

      if (w[iw] !== p[ip]) {
        same = false;
        break;
      } else {
        w[iw] = p[ip] = j + 1;
      }
    }

    if (same) {
      result.push(word);
    }
  }

  return result;
};

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function(words, pattern) {
  const convertedPattern = convert(pattern);

  return words.filter(w => convert(w) === convertedPattern);
};

function convert(word) {
  const store = [];

  return word.split('').map((w) => {
    const pos = store.indexOf(w);
    if (pos === -1) {
      store.push(w);
      return store.length - 1;
    }

    return pos;
  }).join('');
}
