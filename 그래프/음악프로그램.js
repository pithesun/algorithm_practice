let input = "6 3\n\
3 1 4 3\n\
4 6 2 5 4\n\
2 2 3".split("\n");

let [vNum, N] = input
  .shift()
  .split(" ")
  .map((v) => parseInt(v));

//인접 행렬
let graph = new Array(vNum + 1).fill().map((v) => new Array(vNum + 1).fill(0));
let visited = new Array(vNum + 1).fill(false);
let order = [];
// console.log(N, M);

function makeGraph() {
  input.forEach((v) => {
    let line = v.split(" ").map((v) => parseInt(v));
    let num = line[0];
    for (let i = 1; i < num; i++) {
      graph[line[i]][line[i + 1]] = 1;
    }
  });
}

makeGraph();

function printGraph() {
  graph.forEach((v) => {
    console.log(v.join(""));
  });
}
// printGraph();

function dfsAll() {
  for (let i = 1; i <= vNum; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}

function dfs(start) {
  if (graph[start] === null) {
    // console.log("null");
    return;
  }

  visited[start] = true;
  //   console.log("start", start);

  //다음 탐색할 정점 찾기
  for (let i = 1; i <= vNum; i++) {
    let next = graph[start][i];
    // console.log("next", next);
    if (next === 1 && !visited[i]) {
      dfs(i);
    }
  }
  order.push(start);
}

function Sequence() {
  dfsAll();

  //역방향 간선 확인
  for (let i = 0; i < vNum; i++) {
    for (let j = i + 1; j < vNum; j++) {
      if (graph[order[i]][order[j]] === 1) {
        return [0];
      }
    }
  }
  return order;
}

let answer = Sequence();
console.log(answer.reverse().join("\n"));
// makeGraph();
// console.log("graph", graph);

// dfsAll();
