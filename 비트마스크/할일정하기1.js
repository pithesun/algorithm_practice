let input = "3\n\
2 3 3\n\
3 2 3\n\
3 3 2".split("\n")
let N = parseInt(input.shift())
let D_Graph = new Array(N).fill()

//make d graph
input.forEach((person, i) => {
    D_Graph[i] = person.split(" ").map((d) => parseInt(d))
})
// console.log(D_Graph)

let dp = new Array(N).fill().map(() => new Array((1 << (N))).fill(-1))

function visit(cur, visited) {
    // console.log(cur, visited.toString(2))
    //모두 탐색
    if (visited === (1 << N) - 1) {
        return 0
    }
    let tmp = dp[cur][visited]
    if (tmp != -1) {
        return tmp
    }
    let min = Number.MAX_SAFE_INTEGER + 1;
    for (let i = 0; i < N; i++) {
        if (visited & (1 << i)) continue;
        console.log(cur, visited.toString(2), D_Graph[cur][i])
        min = Math.min(visit(cur + 1, visited | (1 << i)) + D_Graph[cur][i], min)
    }
    dp[cur][visited] = min
    return min
}
let result = visit(0, 0)
console.log(result)
console.log(dp)
// let people = (1 << N) - 1
// let minCost = 10001;

// for (let i = 0; i < N; i++) {
//     people &= ~(1 << i)
//     let result = choose(people, 0) + D_Graph[0][i]
//     people |= (1 << i)
//     minCost = Math.min(result, minCost)
// }
// console.log("result", minCost)

// function choose(people, depth) {
//     if (depth === N - 1) {
//         // console.log("people", depth)
//         return 0;
//     }

//     let min = 10001
//     let sum;

//     for (let i = 0; i < N; i++) {
//         if (people & (1 << i)) {
//             people &= ~(1 << i)
//             sum = choose(people, depth + 1) + D_Graph[depth + 1][i]
//             people |= (1 << i)
//             min = Math.min(sum, min)
//             // console.log(sum, min)
//         }
//     }
//     return min
// }

// D_Graph.forEach((ds) => {
//     //최소값과 그 인덱스 구하기
//     let idx = -1
//     let min = 10001
//     ds.forEach((d, i) => {
//         //0을 제외한 사람들 중 최소 비용
//         if ((people & (1 << i)) && d < min) {
//             min = d;
//             idx = i
//         }
//     })
//     console.log(min, idx)
//     //해당 일을 하는 데에 필요한 최소비용
//     minCost += min
//     //일한 사람은 제외시키기 - 해당 비트 0
//     people &= ~(1 << idx)
// })
// console.log(minCost)

