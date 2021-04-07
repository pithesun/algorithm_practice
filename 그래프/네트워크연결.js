var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class DisjoinSet {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((v, i) => i);
  }
  //루트 찾기
  find(u) {
    if (u === this.parent[u]) return u;
    return this.find(this.parent[u]);
  }
  //트리 합치기
  merge(u, v) {
    (u = this.find(u)), (v = this.find(v));
    if (u === v) return;
    this.parent[u] = v;
  }
}

let N = parseInt(input.shift());
let M = parseInt(input.shift());

function kruskal() {
  let edges = new Array(M).fill([]);
  input.forEach((v, i) => {
    let edge = v.split(" ").map((v) => parseInt(v)); // 1 2 5
    edges[i] = edge;
  });

  edges.sort((a, b) => a[2] - b[2]);
  //console.log("edges", edges);

  let sets = new DisjoinSet(N);
  let totalCost = 0;
  for (let i = 0; i < M; i++) {
    let cost = edges[i][2];
    let u = edges[i][0];
    let v = edges[i][1];

    if (sets.find(u) === sets.find(v)) continue;
    sets.merge(u, v);
    totalCost += cost;
  }
  console.log(totalCost);

  return totalCost;
}

kruskal();
