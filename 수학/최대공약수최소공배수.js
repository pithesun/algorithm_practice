var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const first = parseInt(input[0]);
const second = parseInt(input[1]);

let GCD;
let LCM = 1;

/* 두 수의 약수 구하기 */
function Divide(num){
    let divisors =[]
    for(let i= 1; i <= num ; i++){
        if( num % i === 0){
            divisors.push(i)
        }
    }
    return divisors
}

let firstDividers= Divide(first)
let secondDividers= Divide(second)

/* 공약수 */
let commonDivisors = firstDividers.filter(x => secondDividers.includes(x)); // 결과 2, 3


GCD = commonDivisors.slice(-1)[0]

/* 최소공배수 */
// 중복 제거하기
LCM = GCD * (first/GCD) * (second/GCD)

console.log(GCD);
console.log(LCM);

