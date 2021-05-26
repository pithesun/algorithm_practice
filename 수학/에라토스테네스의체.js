/* 
* N보다 작거나 같은 모든 소수를 찾기
* 에라토스테네스의 체는 N보다 작거나 같은 모든 소수를 찾는 유명한 알고리즘이다.

이 알고리즘은 다음과 같다.

2부터 N까지 모든 정수를 적는다.
아직 지우지 않은 수 중 가장 작은 수를 찾는다. 이것을 P라고 하고, 이 수는 소수이다.
P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.
*/

function Eratosthenes(max) {
    let flags = new Array(max + 1).fill(false);
    for (let i = 2; i <= Math.sqrt(max); i++) {
        if (!flags[i]) {
            crossOff(flags, i, max);
        }
    }
    print(flags)
}

function crossOff(flags, prime, max) {
    let idx = 2;
    let num = prime * idx;
    while (num < max) {
        flags[num] = true;
        idx++;
        num = prime * idx;
        console.log("not prime", num)
    }
}

function print(flags) {
    let result = ""
    for (let i = 2; i < flags.length; i++) {
        if (!flags[i]) {
            result += `${i} `
        }
    }
    console.log(result)
}

Eratosthenes(10)