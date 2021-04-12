let input = "6 0 0 4 1 0 0 0 0\n\
0 2 0 0 6 3 0 0 1\n\
0 0 9 8 0 0 0 0 4\n\
9 0 8 0 7 6 1 0 2\n\
2 6 0 0 0 0 0 9 3\n\
4 0 1 2 9 0 7 0 6\n\
1 0 0 0 0 5 3 0 0\n\
5 0 0 6 3 0 0 7 0\n\
0 0 0 0 4 2 0 0 5"
  .split("\n")
  .map((v) => v.split(" ").map((v) => parseInt(v)));

// "0 3 5 4 6 9 2 7 8\n\
// 7 8 2 1 0 5 6 0 9\n\
// 0 6 0 2 7 8 1 3 5\n\
// 3 2 1 0 4 6 8 9 7\n\
// 8 0 4 9 1 3 5 0 6\n\
// 5 9 6 8 2 0 4 1 3\n\
// 9 1 7 6 5 2 0 8 0\n\
// 6 0 3 7 0 1 9 5 2\n\
// 2 5 8 3 9 4 7 6 0"

// let input = new Array(9).fill().map((v) => new Array(9).fill(0));
// console.log("input", input);

function checkRows(row, n) {
  let filter = input[row].filter((v) => v === n);
  if (filter.length === 1) return true;
  return false;
}

function checkCols(col, n) {
  //   let sum = input[n].reduce((prev, cur) => prev + cur, 0);
  let filter = 0;
  for (let i = 0; i < 9; i++) {
    if (input[i][col] === n) {
      filter += 1;
    }
  }
  if (filter === 1) return true;
  return false;
}

function checkRect(y, x, n) {
  //   let sum = input[n].reduce((prev, cur) => prev + cur, 0);
  let rows = Math.floor(y / 3);
  let cols = Math.floor(x / 3);

  let filter = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (input[rows * 3 + i][cols * 3 + j] === n) {
        filter += 1;
      }
    }
  }
  if (filter === 1) return true;
  return false;
}

function Sudoku() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      //이미 채워져 있으면 pass
      if (input[i][j] != 0) continue;

      for (let n = 1; n <= 9; n++) {
        input[i][j] = n;

        //3조건을 모두 만족할 때
        if (checkRows(i, n) && checkCols(j, n) && checkRect(i, j, n)) {
          let result = Sudoku();
          if (result) return true;
        }
        input[i][j] = 0;
      }
      //현재 가능한 것이 없음
      if (input[i][j] === 0) {
        return false;
      }
    }
  }
  //   if (input[8][8] === 0) return false;
  return true;
}

// function playSudoku() {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (Sudoku()) {
//         console.log(input.map((v) => v.join(" ")).join("\n"));
//         return;
//       }
//     }
//   }
// }
