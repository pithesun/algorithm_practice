//완전 탐색

function solution(brown, yellow) {
    let answer = new Array(2);
    for (let i = 1; i <= Math.sqrt(yellow) ; i++)
    {
      if( yellow % i === 0)
      {
        let a = yellow/i; // b보다 크거나 같음
        let b = i;

        if ( a + b === brown/2 - 2)
        {
            answer[0] = a+2;
            answer[1] = b+2;
            return answer;
        }
      }
    }
    return answer;
}