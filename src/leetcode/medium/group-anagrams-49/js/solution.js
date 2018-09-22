/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
  var result = [];
  var map = {};

  for (var i = 0; i < strs.length; i++) {
    var s = strs[i];
    var k = 1;

    for (var j = 0; j < s.length; j++) {
      k *= prime[s[j].charCodeAt() - 97];
    }

    if (map[k]) {
      map[k].push(s);
    } else {
      map[k] = [s];
      result.push(map[k]);
    }
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
