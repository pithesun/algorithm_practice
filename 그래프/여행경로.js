/*
 @param
    tickets 
@return 
    ["ICN", "JFK", "HND", "IAD"]
*/

// [
//   ["ICN", "A"],
//   ["ICN", "B"],
//   ["B", "ICN"],
// ];

// [
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"],
// ];

// [
//   ["ICN", "BOO"],
//   ["ICN", "COO"],
//   ["COO", "DOO"],
//   ["DOO", "COO"],
//   ["BOO", "DOO"],
//   ["DOO", "BOO"],
//   ["BOO", "ICN"],
//   ["COO", "BOO"],
// ];

// [
//   ["ICN", "JFK"],
//   ["HND", "IAD"],
//   ["JFK", "HND"],
// ];
// [
//   ["ICN", "A"],
//   ["A", "C"],
//   ["A", "D"],
//   ["D", "B"],
//   ["B", "A"],
// ];

// [
//   ["ICN", "AAA"],
//   ["ICN", "AAA"],
//   ["ICN", "AAA"],
//   ["AAA", "ICN"],
//   ["AAA", "ICN"],
// ];

// [
//   ["ICN", "A"],
//   ["A", "C"],
//   ["A", "D"],
//   ["D", "B"],
//   ["B", "A"],
// ];

// [
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"],
// ];

// [
//   ["ICN", "B"],
//   ["B", "ICN"],
//   ["ICN", "A"],
//   ["A", "D"],
//   ["D", "A"],
// ];

// [
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"],
// ];

// [
//   ["ICN", "B"],
//   ["B", "ICN"],
//   ["ICN", "A"],
//   ["A", "D"],
//   ["D", "A"],
// ];

// [
//   ["ICN", "AAA"],
//   ["ICN", "AAA"],
//   ["ICN", "AAA"],
//   ["AAA", "ICN"],
//   ["AAA", "ICN"],
// ];
// [
//   ["ICN", "A"],
//   ["ICN", "B"],
//   ["B", "ICN"],
// ];

// [
//   ["ICN", "A"],
//   ["A", "C"],
//   ["A", "D"],
//   ["D", "B"],
//   ["B", "A"],
// ];

// [
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"],
// ];

// [
//   ["ICN", "JFK"],
//   ["HND", "IAD"],
//   ["JFK", "HND"],
// ];

//   [
//     ["ICN", "SFO"],
//     ["ICN", "ATL"],
//     ["SFO", "ATL"],
//     ["ATL", "ICN"],
//     ["ATL", "SFO"],
//   ];

let tickets = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];

// var routes = [];

// function fna(route, left) {
//   //티켓을 다 사용했을 경우
//   if (left.length == 0) {
//     let tmp = ["ICN"];
//     route.map((v) => {
//       tmp.push(v[1]);
//     });
//     routes.push(tmp);
//     return;
//   }
//   if (route.length > 0 && route[0][0] !== "ICN") return;
//   if (
//     route.length >= 2 &&
//     route[route.length - 2][1] !== route[route.length - 1][0]
//   )
//     return;
//   left.map((v, i) => {
//     fna(
//       [...route, v],
//       left.filter((v, idx) => i != idx)
//     );
//   });
// }

// function solution(tickets) {
//   fna([], tickets);
//   return routes.sort()[0];
// }

function solution(tickets) {
  let graph = {};
  tickets.forEach((v) => {
    let [depart, arrival] = v;

    //초기화
    if (!graph[depart]) {
      graph[depart] = [];
    }

    if (!graph[arrival]) {
      graph[arrival] = [];
    }

    //그래프 만들기
    if (graph[depart] != undefined) {
      graph[depart].push(arrival);
    }
  });

  let ticketsNum = tickets.length;

  let order = [];
  dfs("ICN");

  function dfs(depart) {
    if (!depart) return false;

    if (ticketsNum <= 0) {
      order.push(depart);
      return true;
    }

    //다음 방문할 국가들
    let nexts = graph[depart].sort();
    let next;
    let result;

    for (let i = 0; i < nexts.length; i++) {
      //방문
      order.push(depart);
      ticketsNum--;
      next = nexts.shift();

      if (next != undefined) {
        result = dfs(next);
      }

      //잘못된 경로일 경우 복구
      if (!result && ticketsNum >= 0) {
        nexts.push(next);
        order.pop();
        ticketsNum++;
      }
    }

    return result;
  }
  return order;
}

solution(tickets);
