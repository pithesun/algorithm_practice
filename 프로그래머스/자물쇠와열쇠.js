function solution(key, lock) {
  let lLength = lock.length;
  let kLength = key.length;

  //판 9개 만들기
  let BigArr = new Array(lLength * 3)
    .fill(0)
    .map(() => new Array(lLength * 3).fill(0));

  //중앙에 board
  lock.forEach((row, i) => {
    row.forEach((el, j) => {
      // console.log(i+lock.length,j+lock.length)
      BigArr[i + lLength][j + lLength] = el;
    });
  });

  //이동하기
  function Move(mykey) {
    for (let i = lLength - kLength + 1; i < 2 * lLength + 1; i++) {
      for (let j = lLength - kLength + 1; j < 2 * lLength + 1; j++) {
        let tempBoard = BigArr.map((row) => {
          return row.map((el) => el);
        });

        mykey.forEach((row, r) => {
          row.forEach((el, c) => {
            //console.log(i+r,j+c)
            tempBoard[i + r][j + c] += el;
          });
        });
        //console.log(tempBoard)
        let newArr = tempBoard.slice(lLength, lLength * 2).map((row) => {
          return row.slice(lLength, lLength * 2);
        });

        if (Check1(newArr)) {
          console.log('true');
          return true;
        }
      }
    }
    return false;
  }

  //모두 1인지 확인하기
  function Check1(arr) {
    const isEveryOne = (element) => element === 1;
    let newarr = [];
    for (const row of arr) for (const e of row) newarr.push(e);
    return newarr.every(isEveryOne);
  }

  //90도 회전
  function rotateArr(arr, colLength, rowLength) {
    let rotatedArr = new Array(colLength)
      .fill(null)
      .map(() => new Array(rowLength).fill(null));

    let temp = 0;

    //90도 회전하기
    for (let i = rowLength - 1; i >= 0; i--) {
      for (let j = 0; j <= colLength - 1; j++) {
        rotatedArr[j][i] = arr[temp][j];
      }
      temp++;
    }
    //console.log("rotatedARR");
    // rotatedArr.forEach((row) => {
    //   console.log(row);
    // });
    return rotatedArr;
  }

  let mykey = key.map((row) => row.map((el) => el));
  let success = Move(mykey);

  for (let i = 0; i < 3; i++) {
    //90, 180, 270
    if (success) return success;
    mykey = rotateArr(mykey, kLength, kLength);
    success = Move(mykey);
  }
  return success;
}
