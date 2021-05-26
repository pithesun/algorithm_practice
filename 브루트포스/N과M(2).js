/*오름차순 */
let input = "4 2";

let [N, M] = input.split(" ").map((v) => parseInt(v));
let visited = new Array(N + 1).fill(false);
for (let i = 0; i < N; i++) {
  make_permutation(i + 1, M, []);
  //   console.log("permu", permu);
}

function make_permutation(cur, more, arr) {
  visited[cur] = true;
  arr.push(cur);

  //   console.log("arr", arr);
  //기저 사례 - 더 고를 것이 없을 때
  if (more === 1) {
    visited[cur] = false;
    console.log(arr.join(" "));
    return arr;
  }

  let answer = [];

  for (let i = cur; i < N; i++) {
    if (!visited[i + 1]) {
      //   console.log("visit", visited[i + 1], i + 1, more - 1);

      let newarr = arr.slice();
      let result = make_permutation(i + 1, more - 1, newarr);
      //   console.log("result", result);
      answer.push(result);
    }
  }
  visited[cur] = false;

  //console.log("answer", answer);

  return answer;
}
