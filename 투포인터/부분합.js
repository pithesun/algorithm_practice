let input = "5 5\n\
5 4 3 2 1".split("\n")

// "10 5\n\
// 5 1 3 5 10 7 4 9 2 8".split("\n")

let [N, S] = input.shift().split(" ").map(v => parseInt(v))
let sumArr = []
sumArr.push(0)

input[0].split(" ").reduce((prev, cur) => {
    let sum = parseInt(prev) + parseInt(cur)
    sumArr.push(sum)
    return sum
}, 0)

// console.log(sumArr)

let left = 0;
let right = 0;
let min = N + 2;

while (right < N + 1) {
    while (sumArr[right] < sumArr[left] + S) {
        right++;
        if (right >= N) {
            break;
        }
    }

    /* 수열의 최소 길이 구하기 */
    if (sumArr[right] >= sumArr[left] + S && right - left < min) {
        // console.log(sumArr[left], sumArr[right], left, right)
        min = right - left
    }
    left++;
}

if (min === N + 2) {
    console.log(0)
} else {
    console.log(min)
}