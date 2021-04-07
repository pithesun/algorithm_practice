function solution(str1, str2) {
  let result;
  function makeArr(str) {
    let newarr = [];
    const capitals = str.toUpperCase();
    for (let i = 0; i < capitals.length - 1; i++) {
      let processed = capitals.slice(i, i + 2).match(/[A-Za-z]{2}/);
      if (processed) {
        newarr.push(capitals.slice(i, i + 2));
      }
    }
    //console.log(newarr.slice())
    return newarr.slice();
  }
  let a = makeArr(str1);
  let b = makeArr(str2);

  //a,b 모두 공집합이면 바로 리턴
  if (a.length === 0 && b.length === 0) {
    result = 65536;
    return result;
  }
  //console.log(a, b);

  let A = {};
  let B = {};
  a.forEach((a) => {
    if (!A[a]) {
      A[a] = 1;
    } else {
      A[a] += 1;
    }
  });

  b.forEach((b) => {
    if (!B[b]) {
      B[b] = 1;
    } else {
      B[b] += 1;
    }
  });

  let tempb = b.slice();
  //교집합 계산하기
  let inter = [];
  a.forEach((al, idx) => {
    for (let idx = 0; idx < tempb.length; idx++) {
      let bl = tempb[idx];
      if (al === bl) {
        tempb.splice(idx, 1);
        inter.push(al);
        A[al] -= 1;
        B[bl] -= 1;
        break;
      }
    }
  });

  //console.log("inter", inter);
  //console.log(A, B);
  //합집합
  //합집합
  let union = [...inter];
  for (let key in A) {
    for (let i = 0; i < A[key]; i++) {
      union.push(key);
    }
  }
  for (let key in B) {
    for (let i = 0; i < B[key]; i++) {
      union.push(key);
    }
  }
  //console.log("union",union)

  function Cal(inter, union) {
    return Math.floor((inter.length / union.length) * 65536);
  }
  result = Cal(inter, union);

  return result;
}
