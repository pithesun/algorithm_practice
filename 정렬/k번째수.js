// 프로그래머스 정렬

function solution(array, commands) {
    
    var answer = [];
    commands.forEach((item, index) =>{
        answer.push(array.slice(item[0]-1, item[1])
                        .sort((a,b) => a - b)[item[2]-1])
    })
    return answer;
}