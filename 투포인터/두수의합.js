let input = "9\n\
5 12 7 10 9 1 2 3 11\n\
13".split("\n")

let N = parseInt(input.shift())
let numArr = input[0].split(" ").map((v) => parseInt(v)).sort((a, b) => a - b)
let dest = parseInt(input[1])

let left = 0;
let right = N - 1;

let answer = 0;
while (left < right) {
    let sum = numArr[left] + numArr[right]
    // console.log(sum)

    if (sum < dest) {
        left++;
        continue
    } else if (sum > dest) {
        right--;
        continue
    }
    // console.log(numArr[left], numArr[right])
    answer++;
    left++;
    right--;
}

console.log(answer)
