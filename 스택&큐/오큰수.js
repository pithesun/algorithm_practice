let input = "4\n\
9 5 4 8".split("\n")

// "4\n\
// 3 5 2 7".split("\n")

let N = parseInt(input.shift())
let leftStack = input[0].split(" ").map((v) => parseInt(v))

let answer = []
let rightStack = []

while (leftStack.length != 0) {
    let left = leftStack.pop()
    if (rightStack.length === 0) {
        answer.push(-1)
        rightStack.push(left)
        continue
    }
    let right = rightStack.pop()
    if (left < right) {
        answer.push(right)
        rightStack.push(right)
        rightStack.push(left)
    } else {
        leftStack.push(left)
    }
}
console.log(answer.reverse().join(" "))