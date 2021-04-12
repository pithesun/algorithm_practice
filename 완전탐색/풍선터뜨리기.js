let a = [9, -1, -5];
let b = [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33];

function solution(a) {
  let count = new Array(a.length).fill(0);
  let dpleft = new Array(a.length).fill();
  let dpright = new Array(a.length).fill();

  for (let i = 0; i < a.length; i++) {
    // console.log(`-------- ${a[i]} -----------`);
    let survive = i;
    let leftcur = 0;
    let left_next = 1;
    let rmSmallFlag = true;
    let rightcur = a.length - 1;
    let right_next = a.length - 1;

    if (i - 1 >= 0 && dpleft[i - 1] < a[i]) {
      //번호가 작은 풍선
      dpleft[i] = dpleft[i - 1];
      // rmSmallFlag = false;
      count[i] += 1;
    } else {
      //번호가 큰 풍선
      dpleft[i] = a[i];
    }
  }

  //번호가 큰 풍선을 터뜨림
  // while (left_next <= survive) {
  //   if (a[leftcur] > a[left_next]) {
  //     leftcur = left_next;
  //     dpleft[leftcur] = a[left_next];
  //   } else {
  //     dpleft[left_next] = a[leftcur];
  //   }
  //   left_next++;
  // }

  // //번호가 작은 풍선을 터트려야 할 때
  // if (a[leftcur] < a[left_next]) {
  //   rmSmallFlag = false;
  // }
  for (let i = a.length - 1; i >= 0; i--) {
    if (i + 1 <= a.length - 1 && dpright[i + 1] < a[i]) {
      //번호가 작은 풍선
      dpright[i] = dpright[i + 1];
      // rmSmallFlag = false;
      count[i] += 1;
    } else {
      //번호가 큰 풍선
      dpright[i] = a[i];
    }
  }
  // while (right_next > survive) {
  //   if (a[rightcur] > a[right_next]) {
  //     rightcur = right_next;
  //     dpright[rightcur] = a[right_next];
  //   } else {
  //     dpright[right_next] = a[rightcur];
  //   }
  //   right_next--;
  // }

  // //번호가 더 작은 번호를 터뜨려야하는데 하지 못할 때
  // if (a[rightcur] < a[right_next] && !rmSmallFlag) {
  //   continue;
  // }

  // answer += 1;
  console.log(dpleft, dpright);
  console.log(count);

  return count.filter((v) => v != 2).length;
}

let result = solution(b);
console.log("result", result);
