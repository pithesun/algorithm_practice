let nums = [1, 3, 1, 2, 0, 5],
  k = 3;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
  let list = [];
  let answer = [];
  nums.forEach((v, idx) => {
    //add idx of the bigger and remove smaller
    // if (list.length === 0 || v > nums[list[0]]) {
    //   list[0] = idx;
    // }
    for (let i = list.length - 1; i >= 0; i--) {
      console.log(nums[list[i]], v);
      if (nums[list[i]] < v) {
        list.pop();
      }
    }
    list.push(idx);

    console.log("list", list);
    //move window - save the  answer
    if (k - 1 <= idx && idx <= nums.length) {
      answer.push(nums[list[0]]);
    }
    //슬라이딩 윈도우 크기 유지
    if (idx - list[0] >= k - 1) {
      // console.log("result", nums[list[0]]);
      list.splice(0, 1);
    }
  });
  return answer;
};
let print = maxSlidingWindow(nums, k);
console.log(print);
