let input = "5\n\
-1 -2 -3 -4 -5".split("\n");
let N = parseInt(input.shift());
let numArr = input[0].split(" ").map((v) => parseInt(v));

let sum = 0;
let max = -1001;

for (let i = 0; i < N; i++) {
  sum = Math.max(0, sum) + numArr[i];
  max = Math.max(max, sum);
}

console.log(max);
