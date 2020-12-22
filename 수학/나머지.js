//백준 10430

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const fisrtMethod = (A, B, C) => (A + B) % C;
const secondMethod = (A, B, C) => ((A % C) + (B % C)) % C;
const thirdMethod = (A, B, C) => (A * B) % C;
const fourthMethod = (A, B, C) => ((A % C) * (B % C)) % C;

const methods = [fisrtMethod, secondMethod, thirdMethod, fourthMethod];

for (let i = 0; i < 4; i++) {
  let method = methods[i];
  let result = method(
    parseInt(input[0]),
    parseInt(input[1]),
    parseInt(input[2])
  );
  console.log(result);
}
