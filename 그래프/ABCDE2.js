/*

ABCDE.js

A는 B와 친구다.
B는 C와 친구다.
C는 D와 친구다.
D는 E와 친구다.

위와 같은 친구 관계가 존재하는지 확인하는 프로그램
=> 현재 탐색 중인 노드의 깊이를 알아야 함 => 깊이가 4
*/

let input = "8 8\n\
1 7 \n\
3 7\n\
4 7\n\
3 4\n\
4 6\n\
3 5\n\
0 4\n\
2 7".split("\n");

//사람의 수 N, 친구 관계의 수 M
let [N, M] = input
  .shift()
  .split(" ")
  .map((v) => parseInt(v));

//인접 리스트
let graph = new Array(N).fill().map(() => []); // fill([]) 안 됨
let visited = new Array(N).fill(false);

// console.log(N, M);

function makeGraph() {
  input.forEach((v) => {
    let [a, b] = v.split(" ").map((v) => parseInt(v));
    graph[a].push(b);
    graph[b].push(a);
  });
}

function dfsAll() {
  for (let i = 0; i < N; i++) {
    if (dfs(i, 0)) {
      // console.log("true");
      return 1;
    }
  }
  return 0;
}

function dfs(start, depth) {
  if (graph[start] === null) return;
  if (depth === 4) {
    return true;
  }

  visited[start] = true;

  //다음 탐색할 정점 찾기
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    if (!visited[next]) {
      if (dfs(next, depth + 1)) return true;
    }
  }
  visited[start] = false;
}

makeGraph();
console.log(dfsAll());
