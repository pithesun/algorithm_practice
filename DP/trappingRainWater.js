let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function trap(height) {
  let water = new Array(height.length).fill(0);
  let start = 0;
  for (let i = 0; i < height.length; i++) {
    //같거나 큰 기둥 찾기
    if (height[start] <= height[i]) {
      //물 양 계산하기
      for (let j = start; j < i; j++) {
        water[j] = height[start] - height[j];
      }
      start = i;
    }
  }
  console.log("water", water);
}

// var trap = function (height) {
//   let sum = 0;
//   for (let i = height.length - 1; i > 0; i--) {
//     let idx = i - 1;
//     let column = height[idx];
//     let stack = [];

//     console.log("idx", idx);
//     //기둥찾기
//     while (idx >= 0) {
//       // 큰 기둥이 나오면 종료
//       if (height[idx] > height[i]) {
//         column = height[i];
//         console.log("column", column);
//         break;
//       }
//       //max column - 해당 기둥과 같거나 작은 것 중 가장 큰 기둥
//       console.log("column", column, "height[idx]", height[idx]);
//       if (column <= height[idx]) {
//         column = height[idx];
//       }
//       stack.push(height[idx]);
//       idx--;
//     }
//     i = idx + 1;
//     console.log("stack", stack, "idx", idx, "column", column);

//     //계산하기
//     for (let j = 0; j < stack.length; j++) {
//       if (column === stack[j]) {
//         i += stack.length - j;
//         break;
//       }
//       sum += column - stack[j];
//     }
//     console.log("sum", sum, i);
//   }
//   console.log(sum);
// };

// trap(height);

// function trap(height, idx, curSum) {
//   //기저사례 - 왼쪽으로 더 갈 수 없는 상황
//   //왼쪽 기둥이 해당 기둥보다 더 클 때
//   if (height[idx - 1] >= height[idx]) {
//     console.log(height[idx - 1], height[idx]);
//     return height[idx];
//   }

//   //다음 기둥 계속 찾기
//   let next = trap(height, idx - 1, curSum);

//   return sum;
// }

// console.log(trap(height, height.length - 1, 0));
