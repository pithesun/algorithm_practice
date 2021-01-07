var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map((element) => parseInt(element.trim()));

function find7dwarf() {
  for (let i = 0; i < arr.length; i++) {
    let j = arr.length - 1;

    while (j > i) {
      let newArr = [
        ...arr.slice(0, i),
        ...arr.slice(i + 1, j),
        ...arr.slice(j + 1),
      ];
      // console.log(i, j , newArr)
      let sum = newArr.reduce(function (a, b) {
        return a + b;
      }, 0);

      if (sum === 100) {
        j = 0;
        return newArr;
      }
      j--;
    }
  }
}

let result = find7dwarf()
  .slice()
  .sort((a, b) => a - b);
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
