let input = "4 2";
var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim();

let [N, M] = input.split(" ").map((v) => parseInt(v));
let visited = new Array(N + 1).fill(false);
visited[0] = true;
let answer = [];

function make_permutation(more, cur) {
  //기저 사례 - 더 고를 것이 없을 때
  if (more === 0) {
    console.log(answer.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i + 1]) {
      visited[i + 1] = true;
      answer.push(i + 1);
      make_permutation(more - 1, i + 1);
      //   console.log("answer", answer);
      answer.pop();
      visited[i + 1] = false;
    }
  }

  return;
}

make_permutation(M, 0);

// let output = "";
// let state = new Array(8 + 1).fill(false);
// let pool = [];
// function search(deps) {
//   if (deps >= M) {
//     output += pool.join(" ") + "\n";
//     return;
//   }
//   for (let i = 1; i <= N; i++) {
//     if (!state[i]) {
//       state[i] = true;
//       pool.push(i);
//       search(deps + 1);
//       pool.pop();
//       state[i] = false;
//     }
//   }
// }
// search(0);
// console.log(output);
