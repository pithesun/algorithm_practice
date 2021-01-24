// [1, 0, 0, 1],
// [1, 1, 1, 1],
// [2, 1, 0, 1],
// [2, 2, 1, 1],
// [5, 0, 0, 1],
// [5, 1, 0, 1],
// [4, 2, 1, 1],
// [3, 2, 1, 1],

// [0, 0, 0, 1],
// [2, 0, 0, 1],
// [4, 0, 0, 1],
// [0, 1, 1, 1],
// [1, 1, 1, 1],
// [2, 1, 1, 1],
// [3, 1, 1, 1],
// [2, 0, 0, 0],
// [1, 1, 1, 0],
// [2, 2, 0, 1],

let build_frame = [
  // x, y , 기둥(0) 또는 보(1), 삭제(0), 설치(1)
  [1, 0, 0, 1],
  [1, 1, 1, 1],
  [2, 1, 0, 1],
  [2, 2, 1, 1],
  [5, 0, 0, 1],
  [5, 1, 0, 1],
  [4, 2, 1, 1],
  [3, 2, 1, 1],
];
let n = 5;

// let answer = [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]]

//기둥과 보를 확인할 3차원 배열
let checkcolumns = new Array(n + 1)
  .fill()
  .map((el) => new Array(n + 1).fill())
  .map((el) => {
    let one = el.map((el) => new Array(2).fill(0));
    return one;
  });

// console.log(checkcolumns);

for (let i = 0; i < build_frame.length; i++) {
  let [x, y, a, b] = build_frame[i];
  //   console.log(x, y, a, b);
  if (b === 1) {
    //설치
    if (a === 0) {
      //기둥 위치가 바닥이 아니면서 보나 기둥 위에 있는 것이 아닐 때
      if (
        (y != 0 &&
          checkcolumns[x][y][0] === 0 &&
          checkcolumns[x][y][1] === 0) ||
        y + 1 > n
      ) {
        // console.log(
        //   '기둥 설치 못하는 이유',
        //   checkcolumns[x][y][0],
        //   checkcolumns[x][y][1]
        // );
        console.log('기둥설치 못함');
        continue;
      }
      // 기둥 설치
      checkcolumns[x][y + 1][0] = 1;
      console.log('기둥 설치', checkcolumns[x][y + 1][0]);
    } else if (a === 1) {
      // 보는 y === 0이면 세울 수 없음
      if (
        (y === 0 &&
          checkcolumns[x][y][0] != 1 &&
          checkcolumns[x + 1][y][0] != 1 && //한쪽 기둥 끝 부분
          (checkcolumns[x][y][1] != 1 || checkcolumns[x + 1][y][1] != 1)) || //양쪽 보
        x + 1 > n
      ) {
        continue;
      }
      // 보 설치
      checkcolumns[x][y][1] += 1;
      checkcolumns[x + 1][y][1] += 1;
      console.log('보 설치', checkcolumns[x][y][1], checkcolumns[x + 1][y][1]);
    }
  } else if (b === 0) {
    // 기둥 삭제
    if (a === 0) {
      //해당 기둥으로만 보를 의지하는 경우
      if (
        //오른쪽 보
        (x + 1 <= n &&
          (checkcolumns[x][y + 1][1] != 2 ||
            checkcolumns[x + 1][y + 1][1] != 2) && //양쪽 보에 의지하고 있지 않을 때
          checkcolumns[x + 1][y + 1][0] === 0) || // 다른 쪽 기둥에 의지하고 있지 않을 때
        //왼쪽 보
        (x - 1 >= 0 &&
          (checkcolumns[x][y + 1][1] != 2 ||
            checkcolumns[x - 1][y + 1][1] != 2) && //양쪽 보에 의지하고 있지 않을 때
          checkcolumns[x - 1][y + 1][0] === 0) // 다른 쪽 기둥에 의지하고 있지 않을 때
      ) {
        console.log('기둥으로만 보을 의지하는 경우');
        continue;
      }
      console.log('기둥 삭제');

      checkcolumns[x][y + 1][0] -= 1;
    }
    // 보 삭제
    if (a === 1) {
      //   console.log(
      //     '삭제하려는 보의 왼쪽',
      //     checkcolumns[x - 1][y][0],
      //     '삭제하려는 보의 오른쪽',
      //     checkcolumns[x + 2][y][0]
      //   );
      if (
        (((x - 1 >= 0 && checkcolumns[x - 1][y][0] === 0) || //왼쪽보의 왼쪽에 기둥 X 
          checkcolumns[x][y][0] === 0) && // 왼쪽보의 오른쪽에 기둥 X
          ((x + 1 <= n && checkcolumns[x + 1][y][0] === 0) || //오른쪽보의 왼쪽에 기둥 X 
            (x + 2 <= n && checkcolumns[x + 2][y][0] === 0))) || //오른쪽보의 오른쪽에 기둥X 
        x + 1 > n
      ) {
        // 삭제하려는 보의 왼쪽 오른쪽 보가 기둥을 의지하지 않고 있으면 삭제하지 못함
        console.log('삭제 못하는 경우임');
        continue;
      }
      // 보 삭제
      console.log('보 삭제');

      checkcolumns[x][y][1] -= 1;
      checkcolumns[x + 1][y][1] -= 1;
    }
  }
  console.log(checkcolumns);
}
console.log(checkcolumns);

let result = [];
checkcolumns.forEach((row, r) => {
  row.forEach((col, c) => {
    if (col[0] === 1) {
      //기둥일 때
      result.push([r, c - 1, 0]);
    }
    if (
      col[1] > 0 && //'보'일 때
      r + 1 <= n &&
      checkcolumns[r + 1][c][1] > 0 && //오른쪽에 있어야 보가 있는 것
      (col[0] === 1 || //해당 자리가 기둥이거나
        checkcolumns[r + 1][c][0] === 1 || //오른쪽이 기둥이거나
        (col[1] === 2 && checkcolumns[r + 1][c][1] === 2)) //양옆이 '보'이거나
    )
      result.push([r, c, 1]);
  });
});

result.sort((a, b) => {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});
console.log(result);
