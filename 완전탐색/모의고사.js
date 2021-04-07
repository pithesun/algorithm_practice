//프로그래머스 완전 탐색

function solution(answers) {
    let first = [1, 2, 3, 4, 5];
    let second = [2, 1, 2, 3, 2, 4, 2, 5];
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let score = new Array(3).fill(0);
    console.log(score);

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === first[i % 5]) {
        score[0] += 1;
      }
      if (answers[i] === second[i % 8]) {
        score[1] += 1;
      }
      if (answers[i] === third[i % 10]) {
        score[2] += 1;
      }
    }

    let answer = [];
    let max = [...score].sort((a,b) => b -a )[0];
    console.log(max)
    let i = 0;
    
    for(let i = 0 ; i < score.length; i++){
        if(score[i] === max){
            answer.push(i+1)
        }
    }
    console.log(answer)
    return answer;
}