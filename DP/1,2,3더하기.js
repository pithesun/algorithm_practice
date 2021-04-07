var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
let numArr = input.map((element) => Number(element));
let length = numArr.shift();
let dp = new Array(11);

function add123() {
  for (let i = 1; i < 11; i++) {
    if (i === 1) dp[i] = 1;
    else if (i === 2) dp[i] = 2;
    else if (i === 3) dp[i] = 4;
    else {
      dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }
  }
}

for (let i = 0; i < length; i++) {
  add123();
  console.log(dp[numArr[i]]);
}
