// function comb(arr, chosen, j) {
//   if (chosen === j) return 1;
//   let combs = 0;
//   for (let i = chosen + 1; i < clothLeng; i++) {
//     if (!visited[i]) {
//       visited[i] = true;
//       combs += comb(arr, chosen + 1, j) * clothArr[i];
//       visited[i] = false;
//     }
//   }
//   return combs;
// }

let numbers = [2, 1, 3, 4, 1];

let answer = [];

for (let j = 0; j < numbers.length; j++) {
  for (let i = j + 1; i < numbers.length; i++) {
    let plused = numbers[j] + numbers[i];
    console.log("plused", numbers[j], numbers[i], i);
    answer.push(plused);
  }
}

console.log(answer);
