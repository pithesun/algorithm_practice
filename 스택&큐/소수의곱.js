let input = "4 19\n\
2 3 5 7".split("\n");

let minheap = [];
//삽입 연산
function add(value) {
  minheap.push(value);
  let idx = minheap.length - 1;

  //힙의 조건 - 부모 < 자식
  while (idx > 0 && minheap[idx] < minheap[Math.floor((idx - 1) / 2)]) {
    //swap
    [minheap[idx], minheap[Math.floor((idx - 1) / 2)]] = [
      minheap[Math.floor((idx - 1) / 2)],
      minheap[idx],
    ];

    idx = Math.floor((idx - 1) / 2);
  }
}

function removeRoot() {
  if (minheap.length === 0) {
    //console.log(0);
    // print += "0\n";
    return;
  }
  //   console.log(minheap[0]);
  //   print += `${minheap[0]}\n`;

  //swap (last - root)
  minheap[0] = minheap[minheap.length - 1];
  minheap.pop();

  //재정렬
  //루트가 내려갈 위치 찾기
  let here = 0;

  while (true) {
    let left = here * 2 + 1;
    let right = here * 2 + 2;

    //리프인 경우
    if (left >= minheap.length) break;
    let next = here;

    if (minheap[next] > minheap[left]) {
      next = left;
    }
    if (right < minheap.length && minheap[next] > minheap[right]) {
      next = right;
    }
    if (next === here) break;
    //swap
    [minheap[here], minheap[next]] = [minheap[next], minheap[here]];
    here = next;
  }
}
let [prLeng, N] = input
  .shift()
  .split(" ")
  .map((v) => parseInt(v));
let primes = input[0].split(" ").map((v) => parseInt(v));

primes.forEach((v) => {
  add(v);
});
// console.log(minheap);

let root = undefined;
for (let i = 0; i < N; i++) {
  //중복처리
  while (root === minheap[0]) {
    removeRoot();
    if (root != minheap[0]) {
      break;
    }
  }
  root = minheap[0];
  removeRoot();

  let primemulitplied = primes.map((v) => v * root);

  primemulitplied.forEach((multiplied) => {
    add(multiplied);
  });
}
console.log(root);
