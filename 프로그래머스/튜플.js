//{{2},{2,1},{2,1,3}{22,1,3,4}}
function solution(s) {
  let processed = s.match(/\{(\d|\d\,)+\}/g);
  let newArr = [];
  processed.forEach((set) => {
    newArr.push(
      set
        .slice(1, set.length - 1)
        .split(',')
        .map((el) => parseInt(el))
    );
  });

  newArr.sort((a, b) => {
    return a.length - b.length;
  });

  let tuple = [];
  Set.prototype.difference = function (setB) {
    var difference = new Set(this);
    for (var elem of setB) {
      difference.delete(elem);
    }
    return difference;
  };

  let reducer = newArr.reduce((prev, cur) => {
    let prevSet = new Set(prev);
    let curSet = new Set(cur);
    //console.log(prevSet, curSet);
    return [...prev, ...curSet.difference(prevSet)];
  }, []);

  return reducer;
}
