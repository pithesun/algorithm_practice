/**
 * 작은 값들이 위로 오도록 스택의 값들을 정렬하는 프로그램을 작성하라.
 * 추가로 하나의 스택은 사용해도 괜찮지만, 스택에 보관된 요소를 배열 등의 다른 자료구조로 복사할 수 없다.
 */

let s1 = [7, 10, 5]
let s2 = [1, 3, 8, 12]

while (s1.length != 0) {
    let tmp = s1.pop();
    while (tmp < s2[s2.length - 1] && s2.length != 0) {
        s1.push(s2.pop())
    }
    s2.push(tmp)
}
while (s2.length != 0) {
    s1.push(s2.pop())
}
console.log(s1)