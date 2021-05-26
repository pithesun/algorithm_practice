let input = "6\n\
1000 999 1000 999 1000 999".split("\n")

// "5\n\
// 2 4 -10 4 -9".split("\n")

input.shift()
let arr = input[0].split(" ").map((v) => parseInt(v))

let set = [...new Set(arr)]

let map = {}
/*map{ number: 좌표개수 }*/
let mapped = set.sort((a, b) => a - b).forEach((v, i) => {
    map[v] = i
})
let answer = arr.map((v, i) => {
    return map[v]
})

console.log(answer.join(" "))
