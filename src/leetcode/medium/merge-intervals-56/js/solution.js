/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  var merged = [];
  intervals.sort(function(a, b) {
    return a.start - b.start;
  });
  var start = intervals[0].start;
  var end = intervals[0].end;

  for (var i = 1; i < intervals.length; i += 1) {
    var interval = intervals[i];

    if (interval.start <= end) {
      end = Math.max(end, interval.end);
    } else {
      merged.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  merged.push(new Interval(start, end));
  return merged;
};
