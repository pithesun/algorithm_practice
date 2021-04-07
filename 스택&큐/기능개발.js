/* 프로그래머스 스택&큐 */

function solution(progresses, speeds) {
    let numFunc = []
    
    let caldays = (value, index) => Math.ceil(((100 - value) / speeds[index]))
    let days = progresses.map(caldays)
    
    let num = 1;
    for(let i=0; i < days.length; i++){
        if(days[i] >= days[i+1]){
            days[i+1] = days[i]
            num = num + 1;
        }else{
            numFunc.push(num);
            num = 1;
        }
    }
    
    return numFunc;
}