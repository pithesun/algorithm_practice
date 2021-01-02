var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var linelength = input[0] * 1;

function validBracket(line) {
  let stack = [];
  let poped;
  for (const element of line) {
    if (element === '(') {
      stack.push('(');
    } else if (element === ')') {
      poped = stack.pop();
      if (poped === undefined) {
        return false;
      }
    }
  }

  /*vps 체크 */
  if (stack.pop() !== undefined) {
    return false;
  } else {
    return true;
  }
}

/*출력*/
for (let i = 1; i <= linelength; i++) {
  if (validBracket(input[i]) === true) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
