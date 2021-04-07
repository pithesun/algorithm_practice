let input = "10 12\n\
1\n\
5\n\
10\n\
50\n\
100\n\
500\n\
1000\n\
5000\n\
10000\n\
50000".split(
  "\n"
);

// "10 4790\n\
// 1\n\
// 5\n\
// 10\n\
// 50\n\
// 100\n\
// 500\n\
// 1000\n\
// 5000\n\
// 10000\n\
// 50000".split(
//   "\n"
// );

// "10 4200\n\
// 1\n\
// 5\n\
// 10\n\
// 50\n\
// 100\n\
// 500\n\
// 1000\n\
// 5000\n\
// 10000\n\
// 50000".split(
//   "\n"
// );

let [N, balance] = input
  .shift()
  .split(" ")
  .map((v) => parseInt(v));
input = input.map((v) => parseInt(v));
let answer = 0;

while (balance > 0) {
  //가장 큰 동전 찾기
  let bigCoin = null;
  for (let i = N - 1; i >= 0; i--) {
    console.log(input[i]);

    if (balance >= input[i]) {
      bigCoin = i;
      break;
    }
  }
  let coins = Math.floor(balance / input[bigCoin]);
  balance -= coins * input[bigCoin];
  answer += coins;
  console.log("balance", balance, "coins", coins, input[bigCoin]);
}
console.log(answer);
