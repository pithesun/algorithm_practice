let input = "10\n\
1 1 2 3 5 8 13 21 34 55".split("\n");

// "4\n\
// 3 5 15 16".split("\n");

// "4\n\
// 5 2 8 10".split("\n");

// "10\n\
// 5 10 11 12 13 30 35 40 45 47".split("\n");

// "10\n\
// 1 1 2 3 5 8 13 21 34 55".split("\n");

// "5\n\
// 10 9 8 7 6".split("\n");

// "4\n\
// 1 5 6 7".split("\n");

// Bottom up 방식
let N = parseInt(input.shift());
let dp = input[0].split(" ").map((v) => parseInt(v));
dp.unshift(-1);

for (let i = 2; i <= N; i++) {
  let temp = -1;
  for (let j = i - 1; j >= Math.floor(i / 2); j--) {
    temp = dp[j] + dp[i - j];
    // console.log(j, i - j);
    dp[i] = Math.min(dp[i], temp);
  }
}

// console.log(dp);
// console.log(dp[N]);

let N = parseInt(input.shift());
let dp = new Array(N + 1).fill(-1);
let p = input[0].split(" ").map((v) => parseInt(v));
p.unshift(0);

// console.log("dp", dp);
dp[0] = 0;
dp[1] = p[1];
//합분해의 변형
function findNum(k) {
  if (dp[k] != -1) {
    console.log(`dp[${k}]`, dp[k]);
    return dp[k];
  }
  for (let i = k; i > Math.floor(k / 2); i--) {
    // i-1로 찾기 때문에 절반 보다 큰 수로 해야함 !
    console.log("first", i - 1, "second", k - i + 1);
    dp[k] = Math.min(findNum(i - 1) + dp[k - i + 1], p[k]);
    p[k] = dp[k]; // min을 p[k]로 비교해줘야하기 때문에 업데이트 해주어야 한다.
    console.log("min", dp[k]);
  }
  return dp[k];
}
findNum(N);
console.log("dp", dp);
