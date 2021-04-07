let routes = [
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];

function solution(routes) {
  // routes.forEach((v) => v.sort((a, b) => a - b));
  routes.sort((a, b) => {
    return a[1] - b[1];
  });
  console.log("routes", routes);

  let cars = routes.length;
  let visited = new Array(cars).fill(0);
  let answer = 0;

  routes.forEach((v, i) => {
    if (visited[i] != 1) {
      console.log("visit", i);
      let outPoint = v[1];
      answer++;
      routes.forEach((v, i) => {
        if (v[0] <= outPoint && outPoint <= v[1]) {
          visited[i] = 1;
          console.log("visit others", i);
        }
      });
    }
  });
  console.log(answer);
}

// function solution(routes) {
//   var answer = 0;

//   routes.forEach((v) => v.sort((a, b) => a - b));
//   routes.sort((a, b) => {
//     return a[0] - b[0];
//   });
//   console.log("routes", routes);

//   let cars = routes.length;

//   for (let i = 0; i < cars; i++) {
//     if (i === cars - 1) {
//       answer += 1;
//       break;
//     }
//     console.log(i, routes[i][1], routes[i + 1][0]);
//     if (routes[i][1] >= routes[i + 1][0]) {
//       i += 1;
//       answer += 1;
//     } else {
//       //경로가 겹치지 않는 것들을 더해준다.
//       console.log("경로 X");
//       answer += 1;
//     }
//   }

//   console.log("answer", answer);
//   return answer;
// }

solution(routes);
