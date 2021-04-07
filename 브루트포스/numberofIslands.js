let grid = [
  ["1", "0", "1", "1", "1"],
  ["1", "0", "1", "0", "1"],
  ["1", "1", "1", "0", "1"],
];
// [
//   ["1", "1", "1"],
//   ["0", "1", "0"],
//   ["1", "1", "1"],
// ];

// [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];

//그래프 연결하기

var numIslands = function (grid) {
  let m = grid.length; //grid 세로
  let n = grid[0].length; //grid 가로

  let visited = new Array(m).fill().map(() => new Array(n).fill(false));
  console.log("visited", visited);
  let landnum = 0;

  //find first land
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && grid[i][j] === "1") {
        landnum += makeGraph(i, j, m, n);
        console.log("landnum", landnum, "i,j", i, j);
      }
    }
  }

  function makeGraph(i, j, m, n) {
    //base case
    if (grid[i][j] === "0") return;

    //현재 land 방문
    console.log("i,j", i, j);
    visited[i][j] = true;

    //다음 방문 - 오른쪽/왼쪽/아래 방문
    if (j < n - 1 && !visited[i][j + 1]) {
      console.log("오른쪽");
      makeGraph(i, j + 1, m, n);
    }
    if (i < m - 1 && !visited[i + 1][j]) {
      console.log("아래");
      makeGraph(i + 1, j, m, n);
    }
    if (j > 0 && !visited[i][j - 1]) {
      console.log("왼쪽");
      makeGraph(i, j - 1, m, n);
    }
    if (i > 0 && !visited[i - 1][j]) {
      console.log("위");
      makeGraph(i - 1, j, m, n);
    }
    //모두 연결되면
    return 1;
  }

  return landnum;
};
numIslands(grid);
