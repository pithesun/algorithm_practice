// 프로그래머스 완전 탐색
function solution(numbers) {
    console.clear();
    
    const getPermutations = function (arr, selectNumber) {
      const results = [];
      if (selectNumber === 1) {
        return arr.map((value) => [value]);
      } 
      arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; 
        const permutations = getPermutations(rest, selectNumber - 1); 
        const attached = permutations.map((permutation) => [fixed, ...permutation]); 
        results.push(...attached); 
      });
      return results; // 결과 담긴 results return
    };
    
    let result = [];
    for(let i = 1; i <= numbers.length; i++ ){
        result.push(...getPermutations(numbers.split(''), i).map((v) => v.join("")))
    }
    
    
    let set = [...new Set(result.filter((value) => value[0] != '0'))];
    console.log(set);
    
    function find(numbers) {
      let len = numbers.length;
      //array[len] is not a constructor
      let answers = []
      for(let i = 0; i < len; i++){
        answers.push(true)
      }
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] * 1 === 1) {
          answers[i] = false;
        }else if (numbers[i] * 1 === 2){
          answers[i] = true;
        }else{
          for(let j = 2; j <= numbers[i]/2; j++ ){
            if(numbers[i] % j === 0){
              answers[i] = false;
            }
          }
        }
      }// for
      return answers;
    }
    let answer = find(set);
    let a = answer.filter((value, i)=> (value === true))

    return a.length;
}