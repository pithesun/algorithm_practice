var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = parseInt(input.shift());

let que = [];
let log = '';

for (let i = 0; i < num; i++) {
  let command = input[i].split(' ');
  switch (command[0]) {
    case 'push':
      que.push(command[1]);
      break;
    case 'pop':
      let poped = que.shift();
      if (poped === undefined) {
        poped = -1;
      }
      log += `${poped}\n`;
      break;
    case 'size':
      log += `${que.length}\n`;
      break;
    case 'empty':
      if (que.length === 0) {
        log += '1\n';
        break;
      }
      log += '0\n';
      break;
    case 'front':
      if (que.length === 0) {
        log += '-1\n';
        break;
      }
      log += `${que[0]}\n`;
      break;
    case 'back':
      if (que.length === 0) {
        log += '-1\n';
        break;
      }
      log += `${que[que.length - 1]}\n`;
      break;
    default:
      break;
  }
}
console.log(log.slice(0, -1));
