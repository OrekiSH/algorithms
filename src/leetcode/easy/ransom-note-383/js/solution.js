/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var mLen = magazine.length;
  if (ransomNote.length > mLen) {
    return false;
  }
  for (var i = 0; i < ransomNote.length; i++) {
    magazine = magazine.replace(ransomNote[i], '');
  }

  return mLen === magazine.length + ransomNote.length;
};
