//백준 1978
// 주어진 숫자배열의 소수 판별과 그 개수

var fs = require('fs');
var lines = fs.readFileSync('/dev/stdin').toString().split('\n');
var input = lines[1].split(' ');

function findPrimeNumber(numbers) {
  let answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] * 1 === 2 || numbers[i] * 1 === 3) {
      answer++;
      //console.log("answer");
    } else {
      for (let j = 2; j <= Math.floor(Math.sqrt(numbers[i]*1)); j++) {
        if (numbers[i]*1 % j === 0) {
          break;
        }
        if (j === Math.floor(Math.sqrt(numbers[i]*1))) {
          answer++;
          //console.log("answer");
        }
      }
    }
  } // for
  return answer;
}

console.log(findPrimeNumber(input));