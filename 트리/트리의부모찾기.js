let input = "7\n\
1 6\n\
6 3\n\
3 5\n\
4 1\n\
2 4\n\
4 7".split("\n")

let N = parseInt(input.shift())
let tree = new Array(N + 1).fill().map(() => [])
input.forEach((v) => {
    let [node1, node2] = v.split(" ").map((v) => parseInt(v))
    tree[node1].push(node2)
    tree[node2].push(node1)
})

let visited = new Array(N + 1).fill()
let parent = new Array(N + 1).fill()
// dfs(1)
// console.log(parent.slice(2).join("\n"))

/*
function dfs(root) {

    if (root === null) return;

    visited[root] = true;
    for (let i = 0; i < tree[root].length; i++) {
        let child = tree[root][i]
        if (visited[child]) continue;
        visited[child] = true;
        parent[child] = root
        dfs(child)
    }
    return;
}
*/
bfs(1)
console.log(parent.slice(2).join("\n"))
function bfs(root) {

    let q = []
    visited[root] = true
    q.push(root)

    while (q.length != 0) {
        let cur = q.shift()
        for (let i = 0; i < tree[cur].length; i++) {
            let child = tree[cur][i]
            if (visited[child]) continue
            visited[child] = true
            parent[child] = cur
            q.push(child)
        }
    }
}


