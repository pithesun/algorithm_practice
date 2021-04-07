let W = "*bb*";
let S = "babbc";
let cache = new Array(W.length + 1)
  .fill()
  .map((v) => new Array(S.length + 1).fill(-1));

function matchMemoized(w, s) {
  let ret = cache[w][s];
  // console.log("cache", ret, W[w], S[s], w, s);
  if (ret != -1) return ret;
  let curW = w;
  let curS = s;

  while (s < S.length && w < W.length && (W[w] === "?" || W[w] === S[s])) {
    w++;
    s++;
  }
  if (w === W.length) {
    if (s === S.length) {
      cache[curW][curS] = 1;
      ret = 1;
      return ret;
    }
  }
  if (W[w] === "*") {
    for (let skip = 0; skip + s <= S.length; skip++) {
      if (matchMemoized(w + 1, s + skip)) {
        cache[curW][curS] = 1;
        return (ret = 1);
      }
    }
  }

  cache[curW][curS] = 0;
  return (ret = 0);
}

let answer = matchMemoized(0, 0);
console.log(answer);
// console.log(cache);
