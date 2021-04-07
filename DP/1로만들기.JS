//백준 1로 만들기

// Bottom up 
var input = require('fs').readFileSync('/dev/stdin').toString();
let inputNum = Number(input)

let arr = new Array(inputNum + 1).fill(-1); // -1 : arr[]에서 나올 수 없는 숫자
arr[1] = 0; // 1이 1이 될 수 있는 방법은 0개

for (let i = 2; i < arr.length; i++) {
  arr[i] = arr[i - 1] + 1; 
  if (i % 2 === 0) {
    arr[i] = Math.min(arr[i], arr[i / 2] + 1);
  }
  if (i % 3 === 0) {
    arr[i] = Math.min(arr[i], arr[i / 3] + 1);
  }
}
console.log(arr[inputNum]);
