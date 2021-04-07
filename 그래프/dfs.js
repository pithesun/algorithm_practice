let input = "8 8\n\
1 7 \n\
3 7\n\
4 7\n\
3 4\n\
4 6\n\
3 5\n\
0 4\n\
2 7".split("\n");

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
    dfs(i);
  }
}

function dfs(start) {
  if (graph[start] === null) return;

  visited[start] = true;
  console.log("start", start);
  //다음 탐색할 정점 찾기
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    // console.log("next", next);
    if (!visited[next]) {
      dfs(next);
    }
  }
}

makeGraph();
console.log(graph);

dfsAll();
