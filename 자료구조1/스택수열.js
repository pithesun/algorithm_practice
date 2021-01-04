var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
let array = input.map((element) => Number(element));

let length = array.shift();
let stack = [];
let flag = '';

function stackSequence() {
  let start = 0;
  for (let j = 0; j < length; j++) {
    let value = array[j];
    //console.log("value", value)
    /* 우선 push */
    if (value > start) {
      //console.log("start",start)
      for (let i = start + 1; i <= value; i++) {
        stack.push(i);
        flag += '+\n';
      }
      /* 다시 start 지점 세우기 */
      start = value;
    } else if (stack[stack.length - 1] !== value) {
      return 'NO';
    }

    /* value에 도착 */
    flag += '-\n';
    stack.pop();
  }
  return flag;
}

let result = stackSequence();
if (result === 'NO') {
  console.log(result);
} else {
  console.log(result.slice(0, -1));
}
