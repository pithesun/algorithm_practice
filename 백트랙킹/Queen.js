let A = solution(8);
console.log(A);

function solution(n) {
  let board;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    board = new Array(n).fill().map(() => new Array(n).fill(-1));
    board[0][i] = 1;
    let result = setQueen(1, board, n);

    if (result) {
      answer += result;
    } else {
      board[0][i] = -1;
    }
  }
  return answer;

  function setQueen(row, board, n) {
    //col
    if (row >= n) {
      // console.log("끝");
      return true;
    }
    let answer = 0;
    for (let i = 0; i < n; i++) {
      let result = 0;

      if (checkCol(i, n) && checkDign(row, i, n)) {
        board[row][i] = 1;
        // console.log("일치", row, i);
        result = setQueen(row + 1, board, n);
      }
      if (!result) {
        board[row][i] = -1;
        continue;
      }
      //true
      board[row][i] = -1;
      answer += result;
    }
    // console.log(` ${row} : ${answer}`);
    return answer;
  }

  function checkRow(row, n) {
    for (let i = 0; i < n; i++) {
      if (board[row][i] === 1) return false;
    }
    return true;
  }

  function checkCol(col, n) {
    for (let i = 0; i < n; i++) {
      if (board[i][col] === 1) return false;
    }
    return true;
  }

  function checkDign(row, col, n) {
    let rigthR = row + col;
    let rightC = 0;
    if (rigthR >= n) {
      rightC = rigthR - (n - 1);
      rigthR = n - 1;
    }

    //오른쪽 대각선
    while (rigthR >= 0 && rightC < n) {
      // console.log("오", rigthR, rightC, n);
      if (board[rigthR][rightC] === 1) return false;
      rigthR--;
      rightC++;
    }

    let leftR, leftC;
    if (row >= col) {
      leftR = row - col;
      leftC = 0;
    } else {
      leftC = col - row;
      leftR = 0;
    }
    //왼쪽 대각선
    while (leftR < n && leftC < n) {
      // console.log("왼", leftR, leftC);
      if (board[leftR][leftC] === 1) return false;
      leftR++;
      leftC++;
    }
    return true;
  }
}
