let s = "abcabcab";
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     max = Math.max(pushItem(i), max);
//   }
//   return max;

//   function pushItem(startIdx) {
//     let stack = [];
//     while (startIdx < s.length && !stack.includes(s[startIdx])) {
//       stack.push(s[startIdx]);
//       startIdx++;
//     }
//     return stack.length;
//   }
// };
// console.log(lengthOfLongestSubstring(s));

// var lengthOfLongestSubstring = function (s) {
//   let substring = "";
//   let start = 0;
//   let max = 0;

//   for (let i = 0; i < s.length; i++) {
//     //중복이 발생할 때
//     let commonIdx = substring.lastIndexOf(s[i]);
//     if (commonIdx >= start) {
//       max = Math.max(max, i - start);
//       start = commonIdx + 1;
//     }
//     substring += s[i];

//     console.log(substring);
//   }
//   //중복 없이 끝날 경우
//   max = Math.max(max, s.length - start);
//   console.log("max", max);
//   return max;
// };

function lengthOfLongestSubstring(s) {
  const map = {};
  var left = 0;

  return s.split("").reduce((max, v, i) => {
    console.log("left", left, "max", max);
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
}

console.log(lengthOfLongestSubstring(s));
