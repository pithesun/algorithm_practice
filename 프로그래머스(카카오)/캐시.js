function solution(cacheSize, cities) {
  //Cache 초기화
  let cache = new Array(cacheSize).fill('');
  //LRU 초기화
  let LRU = new Array(cacheSize).fill().map((el, i) => i);
  //console.log(LRU);

  let time = 0;

  cities.forEach((city) => {
    let cachehit = false;

    // 탐색
    for (let i = cacheSize - 1; i >= 0; i--) {
      //cache hit
      if (cache[LRU[i]].toUpperCase() === city.toUpperCase()) {
        time += 1;
        LRU = [...LRU.slice(0, i), ...LRU.slice(i + 1), LRU[i]];
        cachehit = true;
        break;
      }
    }
    if (!cachehit) {
      time += 5;
      let oldest = LRU[0];

      //페이지 교체
      cache[oldest] = city;
      //LRU 바꾸기
      LRU = [...LRU.slice(1), LRU[0]];
      let cur = cache.slice();
    }
  });
  return time;
}
