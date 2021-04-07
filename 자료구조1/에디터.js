var fs = require('fs');
var commands = fs.readFileSync('/dev/stdin').toString().split('\n');
let strings = commands.shift();
let commandNum = commands.shift();

let stL = strings.split('');
let stR = [];

for (let i = 0; i < commandNum; i++) {
  let command = commands[i].split(' ');
  switch (command[0]) {
    case 'L':
      if (stL.length != 0) {
        stR.push(stL.pop());
      }
      break;
    case 'D':
      if (stR.length != 0) {
        stL.push(stR.pop());
      }
      break;
    case 'B':
      if (stL.length != 0) {
        stL.pop();
      }
      break;
    case 'P':
      stL.push(command[1]);
      break;
  }
}

console.log(stL.join('') + stR.reverse().join(''));
