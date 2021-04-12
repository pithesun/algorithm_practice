let clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
  ["a", "a"],
  ["b", "a"],
  ["c", "a"],
];

function solution(clothes) {
  let clothInfo = new Map();

  clothes.forEach((v, i) => {
    let [name, kind] = v;
    let clothesNum = clothInfo.get(kind);
    clothInfo.set(kind, clothesNum ? clothesNum + 1 : 1);
  });
  //   console.log(clothInfo);

  let clothArr = Array.from(clothInfo.values());
  //   let clothLeng = clothArr.length;
  //   console.log(clothArr);

  let sum = 1;
  clothArr.forEach((v) => {
    sum = sum * (v + 1);
  });
  return sum - 1;
}
solution(clothes);

function solution(clothes) {
  let clothInfo = new Map();

  clothes.forEach((v, i) => {
    let [name, kind] = v;
    let clothesNum = clothInfo.get(kind);
    clothInfo.set(kind, clothesNum ? clothesNum + 1 : 1);
  });
  //   console.log(clothInfo);

  let clothArr = Array.from(clothInfo.values());
  let clothLeng = clothArr.length;
  //   console.log(clothArr);

  let visited = new Array(3).fill(false);

  function comb(arr, chosen, j) {
    if (chosen === j) return 1;
    let combs = 0;
    for (let i = chosen + 1; i < clothLeng; i++) {
      if (!visited[i]) {
        visited[i] = true;
        combs += comb(arr, chosen + 1, j) * clothArr[i];
        visited[i] = false;
      }
    }
    return combs;
  }

  let result = 0;
  for (let j = 0; j < clothLeng; j++) {
    // console.log(`-------- ${j} 선택 ---------`);
    for (let i = 0; i < clothLeng; i++) {
      visited[i] = true;
      result += comb(clothArr, 0, j) * clothArr[i];
    }
    visited = new Array(3).fill(false);
  }
  //   console.log("result", result);
  return result;
}
