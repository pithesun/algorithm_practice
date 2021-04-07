let input = "7\n\
1 6 2 4 5 3 7".split("\n");

// "6\n\
// 10 20 10 30 20 50".split("\n");

let N = parseInt(input.shift());
let arr = input[0].split(" ").map((v) => parseInt(v));

let dp = new Array(N + 1).fill(-1);
let dpPath = new Array(N + 1).fill().map(() => []);

function LIS(pos) {
  if (dp[pos] != -1) {
    return dp[pos];
  }
  let max = 1;
  let maxindex = pos;
  let nextArr = null;

  dpPath[pos].push(arr[pos]);
  //다음 방문 탐색
  for (let i = pos + 1; i < N; i++) {
    if (arr[pos] < arr[i]) {
      nextArr = LIS(i) + 1;
      //console.log("nextArr", nextArr);
    }
    if (nextArr > max) {
      max = nextArr;
      maxindex = i;
    }
  }
  if (maxindex != pos) {
    dpPath[pos].push(...dpPath[maxindex]);
  }
  dp[pos] = max;

  return max;
}

let ret = 0;
let maxindex = 0;
for (let i = 0; i < N; i++) {
  let cur = LIS(i);
  if (cur > ret) {
    ret = cur;
    maxindex = i;
  }
}
console.log("dpPath", dpPath);
console.log(ret + "\n" + dpPath[maxindex].join(" "));
