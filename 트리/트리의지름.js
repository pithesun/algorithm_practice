let input =
    "5\n\
1 3 2 -1\n\
2 4 4 -1\n\
3 1 2 4 3 -1\n\
4 2 4 3 3 5 6 -1\n\
5 4 6 -1".split("\n")

//     "6\n\
// 1 2 3 -1\n\
// 2 1 3 5 3 3 5 -1\n\
// 3 2 5 4 7 -1\n\
// 4 3 7 -1\n\
// 5 2 3 6 5 -1\n\
// 6 5 5 -1".split("\n")

//     "4\n\
// 1 2 5 3 9 -1\n\
// 2 1 5 -1\n\
// 3 1 9 4 8 -1\n\
// 4 3 8 -1".split("\n")

let N = parseInt(input.shift())
let visited = new Array(N + 1).fill(false)
// let tree = new Array(N + 1).fill().map(() => new Array(N + 1).fill())
let tree = new Array(N + 1).fill().map(() => [])
let dp = new Array(N + 1).fill()
input.forEach((v) => {
    let line = v.split(" ").map((v) => parseInt(v))
    let node = parseInt(line.shift())
    for (let i = 0; i < line.length - 1; i += 2) {
        let [next, w] = [line[i], line[i + 1]]
        tree[node].push([next, w])
    }
})
// console.log(tree)
// let result = 0
// result = dfs(2)
// console.log(result)
// console.log(dp)
// console.log(visited)

let maxNode = bfs(1)
visited = new Array(N + 1).fill(false)
let answer = dfs(maxNode)
console.log(answer)

function bfs(root) {
    let maxArr = {};
    //초기화
    for (let i = 1; i <= N; i++) {
        maxArr[i] = 0;
    }

    //root 방문
    let que = [];
    visited[root] = true;
    que.push(root);

    while (que.length > 0) {
        let cur = que.pop()
        let prevW = maxArr[cur]
        tree[cur].forEach((child) => {
            let num = child[0]
            let w = child[1]
            if (!visited[num]) {
                que.push(num);
                visited[num] = true;
                maxArr[num] = w + prevW

            }
        });
    }

    let max = -1
    let result;
    for (let v in maxArr) {
        if (max < maxArr[v]) {
            max = maxArr[v]
            result = v
        }
    }
    return result
}

function dfs(root) {
    visited[root] = true
    let maxleng = -1;
    // console.log("root", root)

    for (let i = 0; i < tree[root].length; i++) {
        let child = tree[root][i]
        let num = child[0]
        let w = child[1]
        let temp = 0
        if (!visited[num] && w != undefined) {
            temp = dfs(num) + w
        }
        maxleng = Math.max(maxleng, temp)
    }
    visited[root] = false
    dp[root] = maxleng
    // console.log(root, dp[root])
    return maxleng
}