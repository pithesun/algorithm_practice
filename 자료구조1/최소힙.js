let input = "9\n\
0\n\
12345678\n\
1\n\
2\n\
0\n\
0\n\
0\n\
0\n\
32".split("\n");

let minheap = [];
let print = "";
input.shift();
input.forEach((v) => {
  let num = parseInt(v);
  if (num === 0) {
    removeRoot();
  } else {
    add(num);
  }
});
console.log(print.trim());

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
    print += "0\n";
    return;
  }
  //   console.log(minheap[0]);
  print += `${minheap[0]}\n`;

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
