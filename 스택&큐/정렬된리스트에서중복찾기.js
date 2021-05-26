// 다음과 같이 정렬된 리스트 3개가 주어졌을때 3개의 리스트에 모두 존재하는 값을 찾아 출력하시오.
// (단, 정렬된 리스트라는 조건을 활용하여 최대한 효율적인 코드를 작성하시오)
// a = [1,3,5,7,9,13,15]
// b = [4,5,6,8,13]
// c = [5,8,13,19]
// answer=[5,13]
// 문자열에서 중복 찾기
// 문자열X 리스트O

a = [1, 3, 5, 7, 9, 13, 15]
b = [4, 5, 6, 8, 13]
c = [5, 8, 13, 19]

let ap = a.length - 1; //6
let bp = b.length - 1; //4
let cp = c.length - 1; //3
let answer = []

while (ap >= 0 && bp >= 0 && cp >= 0) {
    let min = Math.min(a[ap], b[bp], c[cp]);
    console.log(min)
    if (a[ap] === b[bp] && b[bp] === c[cp] && c[cp] === a[ap]) {
        answer.push(a[ap])
        ap--;
        bp--;
        cp--;
    } else {
        if (a[ap] > min) {
            ap--;
        }
        if (b[bp] > min) {
            bp--;
        }
        if (c[cp] > min) {
            cp--;
        }
    }
    console.log(ap, bp, cp)
}
console.log(answer)
