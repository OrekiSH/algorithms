/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  var map = {};

  for (var i = 0; i < cpdomains.length; i++) {
    var splited = cpdomains[i].split(' ');
    var n = parseInt(splited[0], 10);
    var s = splited[1] || '';

    map[s] = map[s] === undefined ? n : map[s] + n;

    while (s.indexOf('.') !== -1) {
      s = s.slice(s.indexOf('.') + 1);
      map[s] = map[s] === undefined ? n : map[s] + n;
    }
  }

  var res = [];
  var keys = Object.keys(map);
  for (var i = 0; i < keys.length; i++) {
    res.push(map[keys[i]] + ' ' + keys[i]);
  }

  return res;
};
