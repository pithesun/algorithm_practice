let input = "6\n\
-99 -96 -1 1 92 97".split("\n")
let N = parseInt(input.shift())
let numArr = input[0].split(" ").map((v) => parseInt(v)).sort((a, b) => a - b)

let left = 0;
let right = N - 1;

let mindiff = 2000000000
let aleft = 0;
let aright = N - 1;

while (left < right) {
    // console.log(numArr[left], numArr[right])

    /* 합의 최소값과 그 수 구하기 */
    let sum = numArr[left] + numArr[right]
    let curdiff = Math.abs(sum)
    if (curdiff < mindiff) {
        mindiff = curdiff
        aleft = left
        aright = right
    }

    /*포인터 이동하기*/
    if (sum === 0) {
        break
    } else if (sum < 0) {
        left++;
    } else if (sum > 0) {
        right--;
    }
}

console.log(numArr[aleft], numArr[aright])