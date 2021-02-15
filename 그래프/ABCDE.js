// let input = "8 8\n\
// 1 7 \n\
// 3 7\n\
// 4 7\n\
// 3 4\n\
// 4 6\n\
// 3 5\n\
// 0 4\n\
// 2 7".split("\n");

// "5 4\n\
// 0 1\n\
// 1 2\n\
// 2 3\n\
// 3 4\
// ".split("\n");

// "5 5\n\
// 0 1\n\
// 1 2\n\
// 2 3\n\
// 3 0\n\
// 1 4".split("\n");

// "6 5\n\
// 0 1\n\
// 0 2\n\
// 0 3\n\
// 0 4\n\
// 0 5".split("\n");

// "8 8\n\
// 1 7\n\
// 3 7\n\
// 4 7\n\
// 3 4\n\
// 4 6\n\
// 3 5\n\
// 0 4\n\
// 2 7".split("\n");

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input.shift().trim().split(" ");
class Node {
  constructor(num) {
    this.num = num;
    this.friends = [];
    this.visited = false;
  }
}
// checkABCDE(n, m);
// console.log(graph);

function makeGraph() {
  let graph = new Array(parseInt(n)).fill().map((a, i) => new Node(i));
  input.forEach((input) => {
    let [a, b] = input.trim().split(" ");
    // console.log(parseInt(a), parseInt(b));
    graph[parseInt(a)].friends.push(parseInt(b));
    graph[parseInt(b)].friends.push(parseInt(a));
  });
  return graph;
}

let isABCDE = false;
function checkABCDE(n, m) {
  for (let i = 0; i < n; i++) {
    let newgraph = makeGraph();
    dfs(newgraph, i, 0);
    // console.log(i, newgraph);
    if (isABCDE) return 1;
  }
  return 0;
}

function dfs(graph, root, d) {
  //   console.log("root", root, "d", d);
  if (d === 4) {
    isABCDE = true;
  }
  graph[root].visited = true;

  for (let i = 0; i < graph[root].friends.length; i++) {
    let friend = graph[root].friends[i];
    if (graph[friend].visited === false) {
      dfs(graph, friend, d + 1);
    }
    if (isABCDE) return;
  }
  graph[root].visited = false;
}
console.log(checkABCDE(parseInt(n), parseInt(m)));
