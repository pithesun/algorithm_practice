let input = "10\n\
5 50\n\
4 40\n\
3 30\n\
2 20\n\
1 10\n\
1 10\n\
2 20\n\
3 30\n\
4 40\n\
5 50".split(
  "\n"
);

// "7\n\
// 3 10\n\
// 5 20\n\
// 1 10\n\
// 1 20\n\
// 2 15\n\
// 4 40\n\
// 2 200".split("\n");

// "10\n\
// 5 50\n\
// 4 40\n\
// 3 30\n\
// 2 20\n\
// 1 10\n\
// 1 10\n\
// 2 20\n\
// 3 30\n\
// 4 40\n\
// 5 50".split(
//   "\n"
// );

// "7\n\
// 3 10\n\
// 5 20\n\
// 1 10\n\
// 1 20\n\
// 2 15\n\
// 4 40\n\
// 2 200".split("\n");

// "10\n\
// 5 50\n\
// 4 40\n\
// 3 30\n\
// 2 20\n\
// 1 10\n\
// 1 10\n\
// 2 20\n\
// 3 30\n\
// 4 40\n\
// 5 50".split(
//   "\n"
// );

// "10\n\
// 5 10\n\
// 5 9\n\
// 5 8\n\
// 5 7\n\
// 5 6\n\
// 5 10\n\
// 5 9\n\
// 5 8\n\
// 5 7\n\
// 5 6".split(
//   "\n"
// );

// "10\n\
// 1 1\n\
// 1 2\n\
// 1 3\n\
// 1 4\n\
// 1 5\n\
// 1 6\n\
// 1 7\n\
// 1 8\n\
// 1 9\n\
// 1 10".split(
//   "\n"
// );

// "7\n\
// 3 10\n\
// 5 20\n\
// 1 10\n\
// 1 20\n\
// 2 15\n\
// 4 40\n\
// 2 200".split("\n");

let N = parseInt(input.shift());
let P = new Array(N + 1).fill(-1);
let T = new Array(N + 1).fill(-1);

input.forEach((v, i) => {
  let [t, p] = v.split(" ");
  //console.log(p, t);
  T[i + 1] = parseInt(t);
  P[i + 1] = parseInt(p);
});
// console.log("N", N, "P", P, "T", T);

function reserve(path, reservation, currentSum) {
  let cur = path[path.length - 1];
  //기저 사례 = 현재 상담예약이 불가능할 경우, profit 합계에서 현재 상담비를 뺀다
  if (cur > N) return currentSum - P[cur];
  if (cur + T[cur] - 1 > N) return currentSum - P[cur];

  console.log("path", path, "currentSum", currentSum);
  //다음 상담 예약 - 나머지 예약을 하는 방법 중 가장 profit이 큰 것을 반환한다.
  let max = 0;
  for (let next = cur + T[cur]; next < N + 1; next++) {
    if (reservation[next]) continue;
    path.push(next);
    reservation[next] = true;

    let ret = reserve(path, reservation, currentSum + P[next]);
    max = Math.max(ret, max);
    console.log("max", max);

    path.pop(next);
    reservation[next] = false;
  }
  return max;
}

function reserveAll() {
  let ret = 0;
  for (let i = 1; i < N + 1; i++) {
    let reservation = new Array(N + 1).fill(false);
    reservation[i] = true;
    let path = [i];
    ret = Math.max(reserve(path, reservation, P[i]), ret);
  }
  console.log(ret);
}
reserveAll();
// let max = 0;
// function reserve(i, profitSUM) {
//   //기저 사례
//   if (i > N) return 0; // N의 범위를 넘어서는 경우
//   if (i + T[i] - 1 > N) return 0; //상담일자가 N을 넘어서는 경우
//   // console.log("i", i);

//   //현재 상담 선택
//   reservation[i] = true;
//   let max = profitSUM + P[i];
//   let sum = profitSUM + P[i];

//   for (let idx = i + T[i]; idx < N + 1; idx++) {
//     if (!reservation[idx]) {
//       // console.log("idx", idx, "sum", sum);
//       max = Math.max(reserve(idx, sum), max); // 앞으로 선택될 상담 profit 합
//     }
//     sum = profitSUM + P[i];
//   }
//   reservation[i] = false;
//   return max;
// }

// function reserveAll() {
//   let max = 0;
//   let temp = 0;
//   for (let i = 1; i < N + 1; i++) {
//     temp = reserve(i, 0);
//     // console.log("temp", temp);
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   console.log("reservation", reservation);
//   return max;
// }
// console.log(reserveAll());

// function reserve(i, profit) {
//   // console.log("date", i + T[i] - 1);
//   if (i > N) return profit;
//   if (i + T[i] - 1 > N) return profit;

//   let max = profit;
//   let temp = 0;

//   //선택할 수 있는 상담 목록
//   for (let idx = i; idx < N + 1; idx++) {
//     if (!reservation[i]) {
//       reservation[idx] = true;
//       console.log("reserve", idx);
//       temp = reserve(idx + T[idx], profit + P[idx]);
//       console.log("temp", temp);

//       reservation[idx] = false;
//       temp = 0;
//     }
//     //최대수익
//     if (max < temp) {
//       max = temp;
//     }
//   }
//   return max;
// }

// console.log(reserve(1, 0));
// console.log("P", P, "T", T);

// function findMaxProfit(date, profit, max) {
//   //상담 일수가 N을 초과할 때
//   if (date + T[date] > N) {QKD
//     return false;
//   }
//   //모두 검사할 때
//   if (date > N) {
//     return profit;
//   }

//   let first = -1;
//   //available한 가장 순서가 빠른 것 찾기
//   for (let i = 1; i < isAvailable.length; i++) {
//     if (isAvailable[i]) {
//       first = i;
//       break;
//     }
//   }

//   let curProfit = profit;
//   for (let i = N; i >= date + 1; i--) {
//     if (isAvailable[i]) {
//       isAvailable[i] = false;
//       curProfit += P[i];
//       isAvailable[i] = true;
//     }
//     console.log("curProfit", curProfit);
//   }
//   return Math.max(profit, max);
// }

// let date = 1;
// let max = 0;

// let result = findMaxProfit(date, max);
// console.log("result", result);
