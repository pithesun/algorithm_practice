var fs = require('fs');
var lines = fs.readFileSync('/dev/stdin').toString().split('\n');
var linelength = lines[0] * 1;

/*뒤집은 단어를 저장하는 배열*/
let newArray = new Array(linelength);

for (let i = 1; i <= linelength; i++) {
  let line = lines[i].split(' ');
  newArray[i - 1] = line
    .map((element) => {
      return element.split('').reverse().join('');
    })
    .join(' ');
}

/*출력부분*/
newArray.forEach((element) => {
  console.log(element);
});
