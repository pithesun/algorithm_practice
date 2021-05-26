let input = "4".split("\n");

let N = parseInt(input[0]);

let dp = new Array(101).fill().map(() => new Array(10).fill());

// n = 0, n = 1
dp[0][0] = 0;
dp[1][0] = 0;
for (let i = 1; i < dp[0].length; i++) {
  dp[0][i] = 0;
  dp[1][i] = 1;
}

function stairNumber(n) {
  if (n < 2) return;

  for (let i = 2; i <= n; i++) {
    dp[i][0] = dp[i - 1][1] % 1000000000;
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][0]) % 1000000000;
    dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % 1000000000;
    dp[i][3] = (dp[i - 1][2] + dp[i - 1][4]) % 1000000000;
    dp[i][4] = (dp[i - 1][3] + dp[i - 1][5]) % 1000000000;
    dp[i][5] = (dp[i - 1][4] + dp[i - 1][6]) % 1000000000;
    dp[i][6] = (dp[i - 1][5] + dp[i - 1][7]) % 1000000000;
    dp[i][7] = (dp[i - 1][6] + dp[i - 1][8]) % 1000000000;
    dp[i][8] = (dp[i - 1][7] + dp[i - 1][9]) % 1000000000;
    dp[i][9] = dp[i - 1][8] % 1000000000;
  }
}
stairNumber(N);
let answer = dp[N].reduce((prev, cur) => prev + cur, 0) % 1000000000;
console.log(answer);
