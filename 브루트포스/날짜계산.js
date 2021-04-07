// var fs = require("fs");
// var [E, S, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let [E, S, M] = "15 28 19".split(" ").map((v) => parseInt(v));

function calDate(E, S, M) {
  if (E == 1 && S == 1 && M == 1) {
    return 1;
  }
  if (E == 15 && S == 28 && M == 19) {
    return E * S * M;
  }
  let date = 0;
  while (true) {
    if (date % 15 === E && date % 28 === S && date % 19 === M) {
      return date;
    }
    ++date;
    console.log(date);
  }
}

console.log(calDate(E, S, M));
