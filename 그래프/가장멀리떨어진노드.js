/**
 * 1번 노드로부터 가장 멀리 떨어진 노드의 개수
 * 간선의 개수가 가장 많은 것이 가장 멀리 떨어진 노드
 * 간선의 개수는 최단 경로의 간선이어야 함
 */

let n = 6;
let edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

let graph = new Array(n + 1).fill().map((v) => []);
let visited = new Array(n + 1).fill(false);
let minPath = new Array(n + 1).fill(0);
edge.forEach((v) => {
  graph[v[0]].push(v[1]);
  graph[v[1]].push(v[0]);
  graph[v[0]].sort();
  graph[v[1]].sort();
});
console.log("graph", graph);

function bfs() {
  let maxdthArrlist = {};

  //root 방문
  let current = [];
  visited[1] = true;
  current.push(1);
  let dth = 0;

  while (current.length > 0) {
    maxdthArrlist[dth] = current;
    let parents = current;
    current = [];

    parents.forEach((parent) => {
      graph[parent].forEach((child) => {
        if (!visited[child]) {
          current.push(child);
          visited[child] = true;
        }
      });
    });

    dth++;
  }
  let size = Object.keys(maxdthArrlist).length;
  return maxdthArrlist[size - 1].length;
}
bfs();

// function dfsAll() {
//   let max = 0;
//   let maxNum = 0;
//   for (let i = 1; i < graph.length - 1; i++) {
//     console.log(`-----------${i + 1}----------------`);

//     let dth = dfs(i + 1, 0);

//     minPath[i + 1] = dth;
//     if (max < dth) {
//       max = dth;
//       maxNum = 1;
//     } else if (max === dth) {
//       maxNum += 1;
//     }
//   }
//   console.log("answer", maxNum);
//   // console.log("start");
// }

// function dfs(node, dth) {
//   if (node === 1) {
//     return dth;
//   }

//   console.log("start", node, dth, graph[node]);
//   visited[node] = true;
//   let min = 50001;
//   let distance;
//   for (let next of graph[node]) {
//     console.log("next", next);
//     if (next === 1) {
//       minPath[node] = 1;
//     } else if (minPath[node]) {
//       distance = minPath[node] + 1;
//     } else if (!visited[next]) {
//       distance = dfs(next, dth + 1);
//     }
//     graph[node].shift();

//     if (distance) {
//       min = Math.min(min, distance);
//     }
//   }
//   visited[node] = false;
//   console.log("return min", min, "node", node);
//   return min;
// }

// dfsAll();
// console.log("minpath", minPath);
