let triangle = [[6], [1, 2], [3, 7, 4], [9, 4, 1, 7], [2, 7, 5, 9, 4]];

//위에서 아래로 내려오기
let cache = new Array(5).fill().map(() => new Array(5).fill(-1));

function path(y, x) {
  if (y === triangle.length - 1) {
    return triangle[y][x];
  }
  let ret = cache[y][x];
  if (ret != -1) return ret;
  return (ret = Math.max(path(y + 1, x), path(y + 1, x + 1)) + triangle[y][x]);
}
let answer = path(0, 0);
console.log("answer", answer);

//아래에서 위로
function path2() {
  for (let y = triangle.length - 2; y >= 0; y--) {
    for (let x = 0; x < triangle[y].length; x++) {
      let below = cache[y + 1][x] != -1 ? cache[y + 1][x] : triangle[y + 1][x];
      let belowR =
        cache[y + 1][x + 1] != -1
          ? cache[y + 1][x + 1]
          : triangle[y + 1][x + 1];
      cache[y][x] = Math.max(below, belowR) + triangle[y][x];
    }
  }
  return cache[0][0];
}
let answer = path2();
console.log("answer", answer);
