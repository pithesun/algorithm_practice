let input = "7\n\
1000 3000 4000 1000 2000 2000 7000\n\
1 2\n\
2 3\n\
4 3\n\
4 5\n\
6 2\n\
6 7".split("\n")

let N = parseInt(input.shift())
let pArr = input.shift().split(" ").map((v) => parseInt(v))
let tree = new Array(N + 1).fill().map(() => [])
let visited = new Array(N + 1).fill(false)
input.forEach((v) => {
    let [city1, city2] = v.split(" ").map((v) => parseInt(v))
    tree[city1].push(city2)
    tree[city2].push(city1)
})

let dp = new Array(N + 1).fill().map(() => new Array(2).fill(0));

visited[1] = true;
find(1);
let result = Math.max(dp[1][0], dp[1][1])
console.log(result)

function find(x) {
    for (let i = 0; i < tree[x].length; i++) {
        let child = tree[x][i]
        if (visited[child]) continue;
        visited[child] = true
        find(child)
        dp[x][0] += dp[child][1]
        dp[x][1] += Math.max(dp[child][1], dp[child][0])
    }
    dp[x][0] += pArr[x - 1]
}

// function bfs(x) {
//     let result = 0;
//     let visited = new Array(N + 1).fill().map(() => new Array(2).fill(0));
//     let q = []
//     q.push(x)

//     while (q.length != 0) {
//         let cur = q.pop()
//         for (let i = 0; i < tree[cur].length; i++) {
//             let child = tree[cur][i]
//             visited[cur][0] += pArr[child]
//             visited[cur][1] += Math.max(pArr[child])
//         }
//     }
// }

// let result = Math.max(dfs(6, 0), dfs(6, 1))
// console.log(result)


// function dfs(root, flag) {

//     let cache = dp[flag][root]
//     if (cache != -1) {
//         console.log("cache", root, flag, cache)
//         return cache
//     }

//     // console.log(root, flag)
//     visited[root] = true;
//     let maxPeople = 0;

//     /*부모가 true이면 무조건 false */
//     /*부모가 false이면 false or true */
//     let falseSum = 0;
//     let trueSum = 0;

//     for (let i = 0; i < tree[root].length; i++) {
//         let child = tree[root][i];
//         if (!visited[child]) {
//             falseSum = dfs(child, 0);
//             if (flag === 0) {
//                 trueSum = dfs(child, 1);
//             }
//             maxPeople += Math.max(falseSum, trueSum)
//         }
//     }

//     if (flag === 1) {
//         maxPeople += pArr[root - 1]
//     }

//     // console.log(root, flag, maxPeople)
//     dp[flag][root] = maxPeople;
//     visited[root] = false;

//     return maxPeople
// }



