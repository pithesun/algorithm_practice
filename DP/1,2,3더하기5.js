let input = "3\n\
4\n\
7\n\
10".split("\n");

let TCN = input.shift();
let dp;

//dp : 경우의 수를 저장한다.
input.forEach((n) => {
  dp = new Array(4).fill().map(() => new Array(parseInt(n) + 1).fill(0));
  let result = makeN(parseInt(n));
  console.log(result);
  console.log("dp", dp);
});

function makeN(n) {
  let answer = 0;
  for (let i = 1; i <= 3; i++) {
    let [next1, next2] = [(i % 3) + 1, ((i + 1) % 3) + 1];
    let result = add123(i, next1, n) + add123(i, next2, n);
    dp[i][n] = result;
    answer += result;
  }
  return answer;
}

function add123(sum, cur, n) {
  let newSum = sum + cur;
  if (newSum === n) return 1;
  if (newSum > n) return 0;
  //return 순서 반드시 고려
  if (dp[cur][newSum]) {
    return dp[cur][newSum];
  }

  let [next1, next2] = [(cur % 3) + 1, ((cur + 1) % 3) + 1];
  let case1 = add123(newSum, next1, n);
  // console.log("case1", case1, sum);
  let case2 = add123(newSum, next2, n);
  // console.log("case2", case2, sum);

  // console.log("dp", newSum, case1 + case2);
  dp[cur][newSum] = case1 + case2;

  return case1 + case2;
}
