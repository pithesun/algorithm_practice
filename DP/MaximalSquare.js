let matrix = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["0", "0", "1", "1", "1"],
];
// [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["0", "0", "1", "1", "1"],
// ];

//  [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];
// [
//   ["0", "1"],
//   ["1", "0"],
// ];
// [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];
// [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];
// [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["0", "0", "1", "1", "1"],
// ];

// [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];

// [
//   ["1", "1", "1"],
//   ["1", "1", "1"],
//   ["1", "1", "1"],
// ];

// [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];
// [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["0", "0", "1", "1", "1"],
// ];

// [["0"]];
// [
//   ["0", "1"],
//   ["1", "0"],
// ];

// [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];

// [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];
//  [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["0", "0", "1", "1", "1"],
// ];

/**
 * @param {character[][]} matrix
 * @return {number}
 */
let dp = new Array(matrix.length + 1)
  .fill()
  .map(() => new Array(matrix[0].length + 1).fill(0));
function maximalSquare(matrix) {
  let maxdepth = 0;
  let curdepth = 1;

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      curdepth = 1;
      curdepth = visit(y, x, curdepth);
      maxdepth = Math.max(maxdepth, curdepth);
    }
  }
  console.log("max", mafxdepth * maxdepth);

  function visit(y, x, curdepth) {
    //기저 사례 - return curdepth -1
    if (matrix[y][x] === "0") return curdepth - 1;
    if (y + 1 > matrix.length - 1 || x + 1 > matrix[0].length - 1) {
      return curdepth;
    }
    //오른쪽, 대각선, 아래가 모두 1일 때 확장
    if (
      matrix[y][x + 1] === "1" &&
      matrix[y + 1][x + 1] === "1" &&
      matrix[y + 1][x] === "1"
    ) {
      let right, rightbelow, below;
      right = visit(y, x + 1, curdepth + 1);
      // console.log("right", right);u

      rightbelow = visit(y + 1, x + 1, curdepth + 1);
      // console.log("rightbelow", rightbelow);

      below = visit(y + 1, x, curdepth + 1);
      // console.log("below", below);

      return Math.min(right, rightbelow, below);
    }
    return curdepth;
  }
}
maximalSquare(matrix);
// console.log(matrix.length, matrix[0].length);
// var maximalSquare = function (matrix) {
//   let m = matrix.length; //열
//   let n = matrix[0].length; //행

//   //해당 좌표가 가질 수 있는 스퀘어의 크기
//   let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
//   let max = 0;

//   for (let y = 1; y < m + 1; y++) {
//     for (let x = 1; x < n + 1; x++) {
//       if (matrix[y - 1][x - 1] === "1") {
//         dp[y][x] = Math.min(dp[y - 1][x], dp[y - 1][x - 1], dp[y][x - 1]) + 1;
//       }
//       max = Math.max(max, dp[y][x]);
//     }
//   }
//   console.log("dp", dp);
//   console.log("max", max);
// };

// maximalSquare(matrix);
