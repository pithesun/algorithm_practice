/*  집합 연산 */

//공집합
// fullPizza = 0

// 꽉 찬 집합 구하기
let fullPizza = (1 << 20) - 1

//비트연산 출력
console.log(fullPizza.toString(2))

//비트 1의 개수 세기
// console.log(fullPizza.toString(2).match(/1/g))

let toppings = 0;

//원소 추가 - 20, 15번째 원소 추가
toppings |= (1 << 20)
toppings |= (1 << 15)


//i번째 원소 확인 -> 0 또는 1 << p
if (toppings & (1 << 15)) {
    console.log("ok")
}

//원소 삭제 - NOT AND
toppings &= ~(1 << 15)
console.log(toppings.toString(2))

//원소의 토글 -XOR
console.log("toggling")
toppings ^= (1 << 3)
console.log(toppings.toString(2))

//최소 원소 지우기 - 최하위 비트 끄기
toppings &= (toppings - 1) // 최하위 비트를 끄고 그 밑의 비트들을 전부 킨 것에 AND

//모든 부분집합 순회하기
