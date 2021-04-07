let input = "10\n\
1 100 160 1 1 1 1 1 1 1".split("\n");

// "4\n\
// 1 5 6 7".split("\n");

// "4\n\
// 1 5 6 7".split("\n");

// "5\n\
// 10 9 8 7 6".split("\n");

// "10\n\
// 1 1 2 3 5 8 13 21 34 55".split("\n");

// "10\n\
// 5 10 11 12 13 30 35 40 45 47".split("\n");

// "4\n\
// 5 2 8 10".split("\n");

// "10\n\
// 1 100 160 1 1 1 1 1 1 1".split("\n")

// "4\n\
// 3 5 15 16".split("\n");

let n = input.shift() * 1;
let value = input[0]
  .trim()
  .split(" ")
  .map((v) => v * 1);

let dp = new Array(value.length + 1).fill(0);
dp[0] = 0;
dp[1] = value[0];

for (let j = 2; j < dp.length; j++) {
  let max = 0;
  for (let i = 1; i <= Math.floor(j / 2); i++) {
    // 1 + 3, 2 + 2
    // console.log(dp[i], dp[j - i]);
    let cur = dp[i] + dp[j - i];
    if (max < cur) {
      max = cur;
    }
  }
  //   console.log(max, value[j - 1]);
  dp[j] = Math.max(max, value[j - 1]);
}

console.log(dp[n]);
// //Greed Algorithm
// let ratio = new Array(value.length).fill(0);
// value.forEach((v, i) => {
//   ratio[i] = (v.trim() * 1) / (i + 1);
// });

// // console.log(ratio);
// let maxPrice = 0;
// while (n > 0) {
//   let maxRatio = 0;
//   let maxIdx = 0;
//   for (let i = 0; i < n; i++) {
//     if (ratio[i] > maxRatio) {
//       maxRatio = ratio[i];
//       maxIdx = i;
//     }
//   }
//   maxPrice += value[maxIdx] * 1;
//   n -= maxIdx + 1;
// }

// console.log(maxPrice);
