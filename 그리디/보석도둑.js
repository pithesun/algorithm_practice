let input = "4 2\n\
1 65\n\
1 35\n\
5 23\n\
2 99\n\
10\n\
2".split("\n");

let [N, K] = input
  .shift()
  .split(" ")
  .map((v) => parseInt(v));
let visited = new Array(N).fill(false);
let jewerly = input
  .slice(0, N)
  .map((v) => v.split(" ").map((v) => parseInt(v)))
  .sort((a, b) => a[0] - b[0]);
let pack = input.slice(N, N + K).sort((a, b) => a - b);

/**
 * 시간 복잡도 O(NK) => multiset과 lower_bound을 사용해야하지만 js로 구현이 어려움
 */

// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// //넣을 수 있는 가장 비싼 보석 넣기
// let answer = 0;
// pack.forEach((c) => {
//   for (let i = 0; i < jewerly.length; i++) {
//     if (c >= jewerly[i][0] && !visited[i]) {
//       answer += jewerly[i][1];
//       visited[i] = true;
//       break;
//     }
//   }
// });
// console.log(answer);

/**
 * 우선순위 큐 사용
 * (틀린 답안)
 */

let maxheap = [];

//삽입 연산
function add(value) {
  maxheap.push(value);
  let idx = maxheap.length - 1;

  //힙의 조건 - 부모 < 자식
  while (idx > 0 && maxheap[idx] > maxheap[Math.floor((idx - 1) / 2)]) {
    //swap
    [maxheap[idx], maxheap[Math.floor((idx - 1) / 2)]] = [
      maxheap[Math.floor((idx - 1) / 2)],
      maxheap[idx],
    ];

    idx = Math.floor((idx - 1) / 2);
  }
}

function removeRoot() {
  if (maxheap.length === 0) {
    //console.log(0);
    // print += "0\n";
    return;
  }
  //   console.log(maxheap[0]);
  //   print += `${maxheap[0]}\n`;

  //swap (last - root)
  let root = maxheap[0];
  maxheap[0] = maxheap[maxheap.length - 1];
  maxheap.pop();

  //재정렬
  //루트가 내려갈 위치 찾기
  let here = 0;

  while (true) {
    let left = here * 2 + 1;
    let right = here * 2 + 2;

    //리프인 경우
    if (left >= maxheap.length) break;
    let next = here;

    if (maxheap[next] < maxheap[left]) {
      next = left;
    }
    if (right < maxheap.length && maxheap[next] < maxheap[right]) {
      next = right;
    }
    if (next === here) break;
    //swap
    [maxheap[here], maxheap[next]] = [maxheap[next], maxheap[here]];
    here = next;
  }
  return root;
}

let answer = 0;
let prev = 0;
pack.forEach((c) => {
  for (let i = prev; i < jewerly.length; i++) {
    let [m, v] = jewerly[i];
    if (m <= c) {
      add(v);
    } else {
      prev = i;
      break;
    }
  }
  let root = removeRoot();
  if (root > 0) {
    answer += root;
  }
});

console.log(answer);
