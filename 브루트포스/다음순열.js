let input = "4\n\
2 1 4 3".split("\n");
//  "2\n\
// 2 1".split("\n");
// "4\n\
// 1 2 3 4".split("\n");

// "2\n\
// 1 2".split("\n");

// "4\n\
// 1 2 3 4".split("\n");

// "5\n\
// 5 4 3 2 1".split("\n");

let N = input.shift();
let base = new Array(N).fill().map((v, i) => i + 1);
let curPermu = input[0].split(" ").map((v) => parseInt(v));
function cal_Permu() {
  for (let i = N - 2; i >= 0; i--) {
    let nextArr = next_purmutation(i, N - 1);
    if (nextArr) {
      return nextArr.join(" ");
    }
  }
  return -1;
}

function next_purmutation(i, last) {
  // let nextArr = curPermu.slice(i + 1).filter((v) => v > curPermu[i]);
  //뒤에 있는 수 중에 자신보다 큰 수 중 가장 작은 것 찾기
  let nextMin = 10001;
  let minindex;

  for (let j = last; j > i; j--) {
    if (curPermu[i] < curPermu[j] && nextMin > curPermu[j]) {
      nextMin = curPermu[j];
      minindex = j;
    }
  }
  if (!minindex) {
    return false;
  }

  //swap
  let temp = curPermu[minindex];
  curPermu[minindex] = curPermu[i];
  curPermu[i] = temp;

  return [
    ...curPermu.slice(0, i + 1),
    ...curPermu.slice(i + 1).sort((a, b) => a - b),
  ];
}
console.log(cal_Permu());
// function next_purmutation(n) {
//   //기저 사례 - 앞의 자리수보다 현재 자리 수가 크다면 앞에 삽입하고 해당 순열 반환
//   let prev = curPermu[n - 2];
//   let cur = curPermu[n - 1];
//   if (prev < cur) {
//     let result = [...curPermu.slice(0, n - 2), cur, prev, ...curPermu.slice(n)]; //삭제, 삽입

//     return result;
//   }

//   //다음 자릿수 탐색
//   // for (let i = n - 1; i > 1; i--) {
//   //   next_purmutation(i);
//   // }

//   //마지막 순열
//   return -1;
// }

// function calPermutation() {
//   for (let i = N; i > 0; i--) {
//     let nextPermu = next_purmutation(i);
//     if (nextPermu != -1) {
//       return nextPermu;
//     }
//   }
//   return -1;
// }
// let result = calPermutation();
// let answer;
// if (result != -1) {
//   answer = result.join(" ");
// } else {
//   answer = result;
// }

// console.log(answer);
