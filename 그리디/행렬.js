let input = "5 5\n\
00000\n\
00000\n\
00000\n\
00000\n\
00000\n\
00000\n\
00000\n\
00111\n\
00111\n\
00111".split(
  "\n"
);

// "3 3\n\
// 000\n\
// 000\n\
// 000\n\
// 000\n\
// 000\n\
// 001".split("\n");

//순서가 중요하지 않음 => 최적 구조 : 바꿀 것만 바꾸면 된다
//가장 먼저 바꾸는 답을 포함하는 답이 항상 있다.
let [N, M] = input
  .shift()
  .split(" ")
  .map((v) => parseInt(v));
let finished = new Array(N).fill().map(() => new Array(M).fill(false));
let base = new Array(N).fill().map(() => new Array(M).fill(0));
let compareArr = new Array(N).fill().map(() => new Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (input[i][j] != input[i + N][j]) {
      compareArr[i][j] = 1;
    }
  }
}
// console.log("compare", compareArr);

function change(y, x) {
  //현재 위치가 확정된 것이면 뒤집기 연산을 하지 않음
  if (finished[y][x]) {
    return false;
  }
  //현재 위치와 비교배열이 같으면 확정하고 뒤집기 연산을 하지 않음
  if (base[y][x] === compareArr[y][x]) {
    finished[y][x] = true;
    return false;
  }

  //뒤집기 연산
  for (let i = y; i <= y + 2; i++) {
    for (let j = x; j <= x + 2; j++) {
      base[i][j] = base[i][j] === 0 ? 1 : 0;
    }
  }
  return true;
}

//전체 비교
function compare() {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (base[y][x] != compareArr[y][x]) return false;
    }
  }
  return true;
}

function matrix() {
  let answer = 0;
  let sameFlag = false;

  //뒤집기 연산을 할 수 없는 경우
  if (N < 3 || M < 3) {
    sameFlag = compare();
    if (sameFlag) return 0;
    return -1;
  }

  for (let y = 0; y < N - 2; y++) {
    for (let x = 0; x < M - 2; x++) {
      if (change(y, x)) {
        answer++;
      }
      sameFlag = compare();
      if (sameFlag) return answer;
    }
  }
  return -1;
}
let answer = matrix();
console.log(answer);
// console.log(base);
// console.log(finished);
